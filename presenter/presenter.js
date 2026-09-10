/**
 * ProPresenter Simulator Engine
 * IP26 Live Broadcast & Multimedia Production Portal
 */

(function () {
  'use strict';

  // --- BROADCAST CHANNEL FOR REAL-TIME EXTERNAL PROJECTOR SYNC ---
  let broadcastChannel = null;
  try {
    broadcastChannel = new BroadcastChannel('ip26_presenter_feed');
  } catch (e) {
    // Unsupported in older browsers, fallback gracefully
  }

  // --- APP STATE ---
  const state = {
    songs: [],
    currentSongIdx: 0,
    currentSlideIdx: 0,
    clearAll: false,
    clearText: false,
    clearBg: false,
    blackout: false,
    activeScreen: 'audience', // 'audience' | 'stage' | 'stream'
    destAudience: true,
    destStage: true,
    destStream: true,
    theme: 'screen-bg-dark',
    textCase: 'uppercase',
    align: 'center',
    searchQuery: '',
    ytPlayer: null
  };

  // --- DOM REFS ---
  const dom = {
    songList: document.getElementById('song-list-container'),
    songCount: document.getElementById('song-count-badge'),
    searchInput: document.getElementById('library-search-input'),
    deckContainer: document.getElementById('slides-deck-container'),
    deckTitle: document.getElementById('deck-song-title'),
    deckStats: document.getElementById('deck-song-stats'),
    btnPrev: document.getElementById('btn-prev-slide'),
    btnNext: document.getElementById('btn-next-slide'),
    btnClearAll: document.getElementById('btn-clear-all'),
    btnClearText: document.getElementById('btn-clear-text'),
    btnClearBg: document.getElementById('btn-clear-bg'),
    btnBlackout: document.getElementById('btn-blackout'),
    // Unified Pro7 Monitor & Previews
    monitorActiveLabel: document.getElementById('monitor-active-label'),
    toggleAudience: document.getElementById('toggle-dest-audience'),
    toggleStage: document.getElementById('toggle-dest-stage'),
    toggleStream: document.getElementById('toggle-dest-stream'),
    ledScreen: document.getElementById('led-preview-screen'),
    ledText: document.getElementById('led-lyrics-text'),
    ltOverlay: document.getElementById('lt-overlay-box'),
    ltLine1: document.getElementById('lt-line-1'),
    ltLine2: document.getElementById('lt-line-2'),
    confCurrent: document.getElementById('conf-current-text'),
    confNext: document.getElementById('conf-next-text'),
    stageClock: document.getElementById('stage-live-clock'),
    stageSongLabel: document.getElementById('stage-song-label'),
    stageSectionTag: document.getElementById('stage-section-tag'),
    // YouTube
    ytIframe: document.getElementById('yt-iframe-player'),
    ytTitle: document.getElementById('yt-song-title'),
    ytExternalLink: document.getElementById('yt-external-link'),
    // Settings
    selectTheme: document.getElementById('select-bg-theme'),
    selectCase: document.getElementById('select-text-case'),
    btnPopout: document.getElementById('btn-popout-screen')
  };

  // --- INITIALIZE DATA ---
  function initData() {
    if (window.IP26_SONGS && Array.isArray(window.IP26_SONGS) && window.IP26_SONGS.length > 0) {
      state.songs = window.IP26_SONGS;
      renderApp();
    } else {
      // Fallback: try fetching scripts/songs_data.json or data/songs.js
      fetch('../scripts/songs_data.json')
        .then((res) => res.json())
        .then((data) => {
          state.songs = data;
          renderApp();
        })
        .catch(() => {
          // If relative path fails, try root
          fetch('data/songs.js')
            .then((r) => r.text())
            .then((t) => {
              eval(t);
              if (window.IP26_SONGS) {
                state.songs = window.IP26_SONGS;
                renderApp();
              }
            })
            .catch((e) => console.error('Error loading songs:', e));
        });
    }
  }

  // --- RENDER APP ---
  function renderApp() {
    renderSongList();
    loadSong(0, 0);
  }

  // --- RENDER SONG LIST ---
  function renderSongList() {
    if (!dom.songList) return;

    const filtered = state.songs.filter((s) => {
      if (!state.searchQuery) return true;
      const q = state.searchQuery.toLowerCase();
      const inTitle = s.title.toLowerCase().includes(q);
      const inLyrics = s.slides.some((sl) =>
        sl.lines.some((line) => line.toLowerCase().includes(q))
      );
      return inTitle || inLyrics;
    });

    if (dom.songCount) {
      dom.songCount.textContent = `${filtered.length} Lagu`;
    }

    dom.songList.innerHTML = '';

    filtered.forEach((song) => {
      const realIdx = state.songs.indexOf(song);
      const item = document.createElement('div');
      item.className = `song-item ${realIdx === state.currentSongIdx ? 'active-song' : ''}`;
      item.dataset.idx = realIdx;

      item.innerHTML = `
        <div class="song-item-top">
          <span class="song-title-text">${escapeHtml(song.title)}</span>
          ${song.youtubeId ? '<span class="song-yt-badge">▶ YT</span>' : ''}
        </div>
        <div class="song-item-meta">
          <span class="song-slides-num">${song.totalSlides} slides</span>
          <span>• 1-2 baris/slide</span>
        </div>
      `;

      item.addEventListener('click', () => {
        loadSong(realIdx, 0);
      });

      dom.songList.appendChild(item);
    });
  }

  // --- LOAD SONG & SLIDES ---
  function loadSong(songIdx, slideIdx = 0) {
    if (!state.songs[songIdx]) return;

    state.currentSongIdx = songIdx;
    state.currentSlideIdx = slideIdx;

    const song = state.songs[songIdx];

    // Highlight active in list
    document.querySelectorAll('.song-item').forEach((el) => {
      const idx = parseInt(el.dataset.idx, 10);
      if (idx === songIdx) el.classList.add('active-song');
      else el.classList.remove('active-song');
    });

    // Update Header
    if (dom.deckTitle) dom.deckTitle.textContent = song.title;
    if (dom.deckStats) dom.deckStats.textContent = `${song.totalSlides} slides • Track #${songIdx + 1}`;

    // Update YouTube Iframe & Link
    if (song.youtubeId) {
      if (dom.ytIframe) {
        dom.ytIframe.src = `https://www.youtube.com/embed/${song.youtubeId}?enablejsapi=1&rel=0`;
      }
      if (dom.ytTitle) {
        dom.ytTitle.textContent = song.title;
      }
      if (dom.ytExternalLink) {
        dom.ytExternalLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;
      }
    }

    renderDeck(song);
    updateLiveOutput();
  }

  // --- RENDER SLIDES DECK ---
  function renderDeck(song) {
    if (!dom.deckContainer) return;
    dom.deckContainer.innerHTML = '';

    // Group slides by section
    let currentSection = '';
    let currentGroupEl = null;
    let currentCardsRow = null;

    song.slides.forEach((slide, idx) => {
      if (slide.section !== currentSection || !currentGroupEl) {
        currentSection = slide.section;

        currentGroupEl = document.createElement('div');
        currentGroupEl.className = 'section-group';

        const labelBar = document.createElement('div');
        labelBar.className = 'section-label-bar';

        const tag = document.createElement('span');
        const sLower = currentSection.toLowerCase().replace(/\s+/g, '-');
        tag.className = `section-tag tag-${sLower}`;
        tag.textContent = currentSection;
        labelBar.appendChild(tag);

        currentCardsRow = document.createElement('div');
        currentCardsRow.className = 'slides-cards-row';

        currentGroupEl.appendChild(labelBar);
        currentGroupEl.appendChild(currentCardsRow);
        dom.deckContainer.appendChild(currentGroupEl);
      }

      // Slide Card
      const card = document.createElement('div');
      const isBlank = slide.type === 'blank' || slide.lines.length === 0;
      card.className = `slide-card ${isBlank ? 'is-blank' : ''} ${idx === state.currentSlideIdx ? 'active-slide' : ''}`;
      card.dataset.slideIdx = idx;

      // Card Header
      const header = document.createElement('div');
      header.className = 'slide-card-header';
      header.innerHTML = `
        <span class="slide-badge-num">#${idx + 1}</span>
        <span style="font-size:9px; color:#64748b; font-family:var(--font-mono);">${slide.section}</span>
      `;

      // Card Content Preview (1-2 lines)
      const content = document.createElement('div');
      content.className = 'slide-content-preview';

      if (isBlank) {
        content.innerHTML = `<span class="slide-lyric-line">[${escapeHtml(slide.label || 'BLANK')}]</span>`;
      } else {
        const linesHtml = slide.lines
          .map((l) => `<div class="slide-lyric-line">${formatLyricText(l)}</div>`)
          .join('');
        content.innerHTML = linesHtml;
      }

      card.appendChild(header);
      card.appendChild(content);

      card.addEventListener('click', () => {
        selectSlide(idx);
      });

      if (currentCardsRow) {
        currentCardsRow.appendChild(card);
      }
    });
  }

  // --- SELECT SLIDE ---
  function selectSlide(idx) {
    const song = state.songs[state.currentSongIdx];
    if (!song || idx < 0 || idx >= song.slides.length) return;

    state.currentSlideIdx = idx;

    // Reset blackout on user manual trigger
    if (state.blackout) {
      state.blackout = false;
      if (dom.btnBlackout) dom.btnBlackout.classList.remove('active');
    }

    // Highlight active slide card
    document.querySelectorAll('.slide-card').forEach((c) => {
      const sIdx = parseInt(c.dataset.slideIdx, 10);
      if (sIdx === idx) {
        c.classList.add('active-slide');
        c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        c.classList.remove('active-slide');
      }
    });

    updateLiveOutput();
  }

  // --- UPDATE LIVE OUTPUT MONITORS ---
  function updateLiveOutput() {
    const song = state.songs[state.currentSongIdx];
    if (!song) return;

    const currentSlide = song.slides[state.currentSlideIdx];
    const nextSlide = song.slides[state.currentSlideIdx + 1];

    // Determine lines to display
    const isHidden = state.clearAll || state.clearText || state.blackout;
    const lines = isHidden || !currentSlide ? [] : currentSlide.lines;

    // 1. Auditorium LED Preview
    if (dom.ledScreen && dom.ledText) {
      if (!state.destAudience) {
        dom.ledScreen.style.background = '#000000';
        dom.ledText.innerHTML = '<span style="color:#ef4444; font-family:var(--font-mono); font-size:11px; font-weight:800;">[ AUDIENCE SCREEN DISABLED ]</span>';
      } else if (state.blackout) {
        dom.ledScreen.style.background = '#000000';
        dom.ledText.innerHTML = '';
      } else {
        dom.ledScreen.className = `preview-screen-box ${state.clearBg ? 'screen-bg-dark' : state.theme}`;
        dom.ledScreen.style.background = '';

        if (lines.length === 0) {
          dom.ledText.innerHTML = '';
        } else {
          dom.ledText.innerHTML = lines
            .map((l) => `<div>${formatLyricText(l)}</div>`)
            .join('');
        }
      }
    }

    // 2. Stream Lower-Third Preview
    if (dom.ltOverlay && dom.ltLine1 && dom.ltLine2) {
      if (!state.destStream || state.blackout || state.clearAll || state.clearText || lines.length === 0) {
        dom.ltOverlay.style.display = 'none';
      } else {
        dom.ltOverlay.style.display = 'flex';
        dom.ltLine1.textContent = formatLyricText(lines[0] || '');
        dom.ltLine2.textContent = formatLyricText(lines[1] || '');
      }
    }

    // 3. Stage Display / Foldback Confidence Monitor
    if (dom.stageSongLabel) {
      dom.stageSongLabel.textContent = song.title;
    }
    if (dom.stageSectionTag) {
      dom.stageSectionTag.textContent = currentSlide && currentSlide.section ? currentSlide.section : 'VERSE';
    }

    if (dom.confCurrent && dom.confNext) {
      if (!state.destStage) {
        dom.confCurrent.innerHTML = '<span style="color:#ef4444; font-family:var(--font-mono); font-size:12px; font-weight:800;">[ STAGE DISPLAY DISABLED ]</span>';
        dom.confNext.textContent = '---';
      } else {
        if (lines.length > 0) {
          dom.confCurrent.innerHTML = lines
            .map((l) => `<div>${formatLyricText(l)}</div>`)
            .join('');
        } else {
          dom.confCurrent.innerHTML = '<span style="color:#64748b; font-style:italic;">[ BLANK / INSTRUMENTAL ]</span>';
        }

        if (nextSlide && nextSlide.lines && nextSlide.lines.length > 0) {
          dom.confNext.textContent = nextSlide.lines.join(' / ');
        } else {
          dom.confNext.textContent = '(Akhir lagu)';
        }
      }
    }

    // Broadcast state for popout projector
    if (broadcastChannel) {
      broadcastChannel.postMessage({
        type: 'SLIDE_CHANGE',
        songTitle: song.title,
        lines: lines,
        nextLines: nextSlide ? nextSlide.lines : [],
        blackout: state.blackout,
        clearBg: state.clearBg,
        theme: state.theme,
        textCase: state.textCase
      });
    }
  }

  // --- TEXT FORMATTER ---
  function formatLyricText(text) {
    if (!text) return '';
    if (state.textCase === 'uppercase') {
      return escapeHtml(text.toUpperCase());
    }
    return escapeHtml(text);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- NAVIGATION HELPERS ---
  function nextSlide() {
    const song = state.songs[state.currentSongIdx];
    if (!song) return;

    if (state.currentSlideIdx < song.slides.length - 1) {
      selectSlide(state.currentSlideIdx + 1);
    } else {
      // Advance to next song if at the end
      if (state.currentSongIdx < state.songs.length - 1) {
        loadSong(state.currentSongIdx + 1, 0);
      }
    }
  }

  function prevSlide() {
    if (state.currentSlideIdx > 0) {
      selectSlide(state.currentSlideIdx - 1);
    } else {
      // Go to end of previous song
      if (state.currentSongIdx > 0) {
        const prevSong = state.songs[state.currentSongIdx - 1];
        loadSong(state.currentSongIdx - 1, prevSong.slides.length - 1);
      }
    }
  }

  // --- CLEAR ACTIONS ---
  function toggleClearAll() {
    state.clearAll = !state.clearAll;
    if (dom.btnClearAll) {
      dom.btnClearAll.classList.toggle('active', state.clearAll);
    }
    updateLiveOutput();
  }

  function toggleClearText() {
    state.clearText = !state.clearText;
    if (dom.btnClearText) {
      dom.btnClearText.classList.toggle('active', state.clearText);
    }
    updateLiveOutput();
  }

  function toggleClearBg() {
    state.clearBg = !state.clearBg;
    if (dom.btnClearBg) {
      dom.btnClearBg.classList.toggle('active', state.clearBg);
    }
    updateLiveOutput();
  }

  function toggleBlackout() {
    state.blackout = !state.blackout;
    if (dom.btnBlackout) {
      dom.btnBlackout.classList.toggle('active', state.blackout);
    }
    updateLiveOutput();
  }

  // --- POPOUT AUDIENCE SCREEN ---
  function openPopoutScreen() {
    const w = 1280;
    const h = 720;
    const left = (screen.width - w) / 2;
    const top = (screen.height - h) / 2;

    const win = window.open(
      '',
      'IP26_Projector_Output',
      `width=${w},height=${h},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no`
    );

    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>IP26 Live Projector Feed</title>
          <style>
            * { margin:0; padding:0; box-sizing:border-box; }
            body {
              background:#000;
              color:#fff;
              font-family:'Plus Jakarta Sans', sans-serif;
              display:flex;
              align-items:center;
              justify-content:center;
              height:100vh;
              overflow:hidden;
              text-align:center;
            }
            .lyrics-wrap {
              max-width:88vw;
              font-size:5.5vh;
              font-weight:700;
              line-height:1.4;
              text-shadow:0 4px 12px rgba(0,0,0,0.9);
            }
          </style>
        </head>
        <body id="b">
          <div class="lyrics-wrap" id="t"></div>
          <script>
            const ch = new BroadcastChannel('ip26_presenter_feed');
            ch.onmessage = (e) => {
              const data = e.data;
              const b = document.getElementById('b');
              const t = document.getElementById('t');
              if (data.blackout) {
                b.style.background = '#000';
                t.innerHTML = '';
              } else {
                b.style.background = data.clearBg ? '#000' : '#111113';
                t.innerHTML = data.lines.map(l => '<div>' + l + '</div>').join('');
              }
            };
          <\/script>
        </body>
        </html>
      `);
      win.document.close();
    }
  }

  // --- SCREEN SELECTOR (PROPRESENTER 7 TABS) ---
  function setScreen(screenName) {
    state.activeScreen = screenName;

    // Update screen tab buttons
    document.querySelectorAll('.screen-tab-btn[data-screen]').forEach((btn) => {
      const isCurrent = btn.dataset.screen === screenName;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    // Update screen views inside unified viewport
    document.querySelectorAll('.screen-view').forEach((view) => {
      const isCurrent = view.classList.contains(`view-${screenName}`);
      view.classList.toggle('active', isCurrent);
    });

    // Update footer feed pills
    document.querySelectorAll('.feed-pill[data-switch]').forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.switch === screenName);
    });

    // Update active screen label
    if (dom.monitorActiveLabel) {
      if (screenName === 'audience') {
        dom.monitorActiveLabel.textContent = 'VIEWING: AUDIENCE (LED CENTER)';
      } else if (screenName === 'stage') {
        dom.monitorActiveLabel.textContent = 'VIEWING: STAGE DISPLAY (FOLDBACK)';
      } else if (screenName === 'stream') {
        dom.monitorActiveLabel.textContent = 'VIEWING: STREAM LOWER-THIRD (OBS)';
      }
    }
  }

  // --- DESTINATION TOGGLES ---
  function toggleDestination(dest) {
    if (dest === 'audience') {
      state.destAudience = !state.destAudience;
      if (dom.toggleAudience) {
        dom.toggleAudience.classList.toggle('active', state.destAudience);
        const st = dom.toggleAudience.querySelector('.dest-state');
        if (st) st.textContent = state.destAudience ? 'ON' : 'OFF';
      }
    } else if (dest === 'stage') {
      state.destStage = !state.destStage;
      if (dom.toggleStage) {
        dom.toggleStage.classList.toggle('active', state.destStage);
        const st = dom.toggleStage.querySelector('.dest-state');
        if (st) st.textContent = state.destStage ? 'ON' : 'OFF';
      }
    } else if (dest === 'stream') {
      state.destStream = !state.destStream;
      if (dom.toggleStream) {
        dom.toggleStream.classList.toggle('active', state.destStream);
        const st = dom.toggleStream.querySelector('.dest-state');
        if (st) st.textContent = state.destStream ? 'ON' : 'OFF';
      }
    }
    updateLiveOutput();
  }

  // --- STAGE DISPLAY CLOCK ---
  function startStageClock() {
    function updateClock() {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      if (dom.stageClock) {
        dom.stageClock.textContent = timeStr;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // ProPresenter 7 Output Screen Selector Tabs
    document.querySelectorAll('.screen-tab-btn[data-screen]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setScreen(btn.dataset.screen);
      });
    });

    // Destination Output Enable/Disable Toggles
    if (dom.toggleAudience) {
      dom.toggleAudience.addEventListener('click', () => toggleDestination('audience'));
    }
    if (dom.toggleStage) {
      dom.toggleStage.addEventListener('click', () => toggleDestination('stage'));
    }
    if (dom.toggleStream) {
      dom.toggleStream.addEventListener('click', () => toggleDestination('stream'));
    }

    // Monitor Footer Quick Feed Pills
    document.querySelectorAll('.feed-pill[data-switch]').forEach((pill) => {
      pill.addEventListener('click', () => {
        setScreen(pill.dataset.switch);
      });
    });

    // Prev / Next Buttons
    if (dom.btnPrev) dom.btnPrev.addEventListener('click', prevSlide);
    if (dom.btnNext) dom.btnNext.addEventListener('click', nextSlide);

    // Clear Bar
    if (dom.btnClearAll) dom.btnClearAll.addEventListener('click', toggleClearAll);
    if (dom.btnClearText) dom.btnClearText.addEventListener('click', toggleClearText);
    if (dom.btnClearBg) dom.btnClearBg.addEventListener('click', toggleClearBg);
    if (dom.btnBlackout) dom.btnBlackout.addEventListener('click', toggleBlackout);

    // Search Input
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderSongList();
      });
    }

    // Settings
    if (dom.selectTheme) {
      dom.selectTheme.addEventListener('change', (e) => {
        state.theme = e.target.value;
        updateLiveOutput();
      });
    }

    if (dom.selectCase) {
      dom.selectCase.addEventListener('change', (e) => {
        state.textCase = e.target.value;
        const song = state.songs[state.currentSongIdx];
        if (song) renderDeck(song);
        updateLiveOutput();
      });
    }

    // Popout
    if (dom.btnPopout) dom.btnPopout.addEventListener('click', openPopoutScreen);

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't trigger if search input is focused
      if (document.activeElement === dom.searchInput) return;

      // Alt + 1/2/3 to switch output screen preview
      if (e.altKey) {
        if (e.key === '1') {
          e.preventDefault();
          setScreen('audience');
          return;
        } else if (e.key === '2') {
          e.preventDefault();
          setScreen('stage');
          return;
        } else if (e.key === '3') {
          e.preventDefault();
          setScreen('stream');
          return;
        }
      }

      if (e.key === ' ' || e.key === 'PageDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'PageUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape' || e.key === 'F1') {
        e.preventDefault();
        toggleClearAll();
      } else if (e.key === 'F2' || e.key.toLowerCase() === 't') {
        e.preventDefault();
        toggleClearText();
      } else if (e.key === 'F3' || e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleClearBg();
      } else if (e.key === 'F5' || e.key.toLowerCase() === 'o') {
        e.preventDefault();
        toggleBlackout();
      }
    });

    // Realtime Viewport Resolution Telemetry for Desktop Lockout Screen
    function updateResolutionReadout() {
      const resEl = document.getElementById('current-screen-res');
      if (resEl) {
        resEl.textContent = `${window.innerWidth} × ${window.innerHeight} px`;
      }
    }
    window.addEventListener('resize', updateResolutionReadout);
    updateResolutionReadout();
  }

  // --- BOOTSTRAP ---
  window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initData();
    startStageClock();
    setScreen('audience');
    console.log('[ProPresenter Simulator Initialized]');
  });
})();
