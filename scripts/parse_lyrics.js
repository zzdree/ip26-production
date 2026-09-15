const fs = require('fs');
const path = require('path');

const dir = 'X:\\IP26\\Assets\\Lyrics\\Statics';

// 15 Songs ordered strictly according to the official service rundown in docs/ip26_pro3.txt
// Each YouTube ID is verified for audio arrangement and exact lyric matching
const orderedSongs = [
  {
    title: 'Oceans (Where Feet May Fail) - Hillsong UNITED',
    file: 'Oceans (Where Feet May Fail) - Hillsong UNITED.txt',
    youtubeId: 'dy9nwe9_xzw' // Official Lyric Video Hillsong UNITED
  },
  {
    title: 'KumilikMu - JPCC Worship Youth',
    file: 'KumilikMu - JPCC Worship Youth.txt',
    youtubeId: 'D81OXqGb40s' // Official Lyric Video JPCC Worship Youth
  },
  {
    title: 'I Have Decided To Follow Jesus - Amy Grant',
    file: 'I Have Decided To Follow Jesus - Amy Grant.txt',
    youtubeId: 'BjQ3YYBGAqI' // Amy Grant Lyric Video
  },
  {
    title: 'Mengikut Yesus Keputusanku - KPRI 103',
    file: 'Mengikut Yesus Keputusanku - KPRI 103.txt',
    youtubeId: '7PGGUUr2nFQ' // GKI Maulana Yusuf / IGNITE GKI Live Recording
  },
  {
    title: 'Kuberikan Hatiku - Franky Sihombing',
    file: 'Kuberikan Hatiku - Franky Sihombing.txt',
    youtubeId: 'moa6TFfk88I' // Official Maranatha - Franky Sihombing feat. Nikita
  },
  {
    title: 'Bri Syukur - Viona Paays',
    file: 'Bri Syukur - Viona Paays.txt',
    youtubeId: 'i62hbfjA08c' // Desri Seu & Melkisedik Sapay - Lagu Pantekosta Lama (exact hymn lyrics)
  },
  {
    title: 'Aku Diberkati - Yehuda Singers',
    file: 'Aku Diberkati - Yehuda Singers.txt',
    youtubeId: '8grYqjvI-BM' // Official Maranatha - Yehuda Singers (30 Cha Cha Rohani Vol. 3)
  },
  {
    title: 'Dengar Dia Panggil Nama Saya - Yehuda Singers',
    file: 'Dengar Dia Panggil Nama Saya - Yehuda Singers.txt',
    youtubeId: '6f5iFr8Zz2U' // Official Maranatha - Yehuda Singers (Nonstop Hits Pujian Abadi Vol. 2)
  },
  {
    title: 'Ajaib Kau Tuhan - JPCC Worship',
    file: 'Ajaib Kau Tuhan - JPCC Worship.txt',
    youtubeId: 'u4OuBnoEpcc' // Official Music Video JPCC Worship - ONE
  },
  {
    title: 'Di Badai Topan Dunia - KJ 440',
    file: 'Di Badai Topan Dunia - KJ 440.txt',
    youtubeId: 'o5_tW24XDW8' // Official GKI Gading Serpong Live Recording (Kidung Keesaan)
  },
  {
    title: 'Setinggi-tingginya Langit - Talenta Singers',
    file: 'Setinggi-tingginya Langit - Talenta Singers.txt',
    youtubeId: 'Kr0zBAXqVW8' // GKDI Kids Kingdom - Setinggi-tingginya Langit (exact standalone track)
  },
  {
    title: 'Ku Berbahagia - KJ 392',
    file: 'Ku Berbahagia - KJ 392.txt',
    youtubeId: '7l9Kvq0C91g' // Galilee Worship - KU BERBAHAGIA KJ 392 (Live)
  },
  {
    title: 'Nyalakan ApiMu - GMS Live',
    file: 'Nyalakan ApiMu - GMS Live.txt',
    youtubeId: 'FsIT-wdq4bA' // Official Music Video GMS Live - I Declare
  },
  {
    title: 'Kumenang - Symphony Worship',
    file: 'Kumenang - Symphony Worship.txt',
    youtubeId: 'ceBDhQV_fT4' // Official Music Video Live Recording Symphony Worship Family
  },
  {
    title: 'Kumenang Menang - Hosana Singers',
    file: 'Kumenang Menang - Hosana Singers.txt',
    youtubeId: '8yr_XGBFb30' // Official Maranatha - Hosana Singers (50 NS Penyembahan)
  }
];

const parsedSongs = orderedSongs.map((meta, songOrderIdx) => {
  const fullPath = path.join(dir, meta.file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Master lyric file not found: ${fullPath}`);
  }

  const raw = fs.readFileSync(fullPath, 'utf-8');
  const baseName = meta.title;
  
  const blocks = raw.split(/\r?\n\r?\n/);
  let currentSection = 'VERSE';
  const slides = [];
  let slideIndex = 1;
  
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    
    const linesInBlock = trimmed.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    if (linesInBlock.length === 0) continue;
    
    // Check if block is title or BLANK
    if (linesInBlock[0].toUpperCase() === 'BLANK') {
      slides.push({
        id: slideIndex++,
        section: 'INTRO',
        type: 'blank',
        label: linesInBlock[1] || baseName,
        lines: []
      });
      continue;
    }
    
    let startIdx = 0;
    const headerRegex = /^(VERSE|CHORUS|PRE CHORUS|PRE-CHORUS|BRIDGE|INTRO|OUTRO|ENDING|INTERLUDE|REFRAIN|TAG)(\s+\d+)?$/i;
    if (headerRegex.test(linesInBlock[0])) {
      currentSection = linesInBlock[0].toUpperCase();
      startIdx = 1;
    }
    
    const contentLines = linesInBlock.slice(startIdx);
    if (contentLines.length === 0) continue;
    
    for (let i = 0; i < contentLines.length; i += 2) {
      const chunk = contentLines.slice(i, i + 2);
      slides.push({
        id: slideIndex++,
        section: currentSection,
        type: 'lyric',
        lines: chunk
      });
    }
  }
  
  return {
    id: baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    order: songOrderIdx + 1,
    title: baseName,
    youtubeId: meta.youtubeId,
    totalSlides: slides.length,
    slides: slides
  };
});

// Output paths
const jsonPath = path.join(__dirname, 'songs_data.json');
const jsDataPath = path.join(__dirname, '..', 'data', 'songs.js');
const jsScriptsPath = path.join(__dirname, 'songs.js');

const jsonContent = JSON.stringify(parsedSongs, null, 2);
const jsContent = `window.IP26_SONGS = ${jsonContent};\n`;

fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
fs.writeFileSync(jsDataPath, jsContent, 'utf-8');
fs.writeFileSync(jsScriptsPath, jsContent, 'utf-8');

console.log(`✅ Successfully generated ${parsedSongs.length} songs:`);
parsedSongs.forEach(s => {
  console.log(`  ${s.order}. ${s.title} (${s.slides.length} slides) -> YT: ${s.youtubeId}`);
});
