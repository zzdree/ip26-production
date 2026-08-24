/**
 * IP26 SATSET FIELD OPS - Realtime Mobile Inventory Checklist Engine
 * Optimized exclusively for mobile touch interaction, tactile feedback, and Supabase Live Sync.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. RAW INVENTORY DATA (Exact sync with index.html & app.js)
  // =========================================================================
  const INVENTORY_RAW = [
    {
      vendor: "OWL",
      title: "1. Peminjaman dari OWL",
      items: [
        { name: "Sony A6000", qty: "2 Unit", status: "✅", usage: "CAM 3 & CAM 4 Broadcast" },
        { name: "Sony A6400", qty: "1 Unit", status: "✅", usage: "CAM PHO Dokumentasi Foto" },
        { name: "Sony ZV-E10", qty: "1 Unit", status: "✅", usage: "CAM 2 Broadcast Wireless" },
        { name: "Lens 18-105MM", qty: "3 Unit", status: "✅", usage: "CAM 1, CAM 2, & CAM 3" },
        { name: "Lens 50MM", qty: "1 Unit", status: "✅", usage: "CAM PHO Dokumentasi Foto" },
        { name: "Battery Kamera", qty: "8 Unit", status: "✅", usage: "5 Unit terpakai aktif, 3 Unit standby" },
        { name: "Charger Kamera", qty: "1 Pack", status: "✅", usage: "Charging station baterai kamera" },
        { name: "Memory Card 32GB", qty: "4 Unit", status: "✅", usage: "CAM 2, CAM 3, CAM 4, CAM PHO" },
        { name: "Cinetreak Cinelive V1", qty: "1 Pack", status: "✅", usage: "Video Switcher Master Broadcast" },
        { name: "Power Adaptor MIX", qty: "1 Unit", status: "✅", usage: "Power Switcher Cinetreak" },
        { name: "Hollyland Pyro H", qty: "1 Pack", status: "✅", usage: "TX & RX Wireless CAM 2 Mobile" },
        { name: "Hollyland Pyro S", qty: "1 Pack", status: "✅", usage: "TX & RX Wireless CAM 1 Steady" },
        { name: "Battery WIR", qty: "4 Unit", status: "✅", usage: "2 Unit Pyro S, 2 Unit Pyro H" },
        { name: "Tripod Camera Big", qty: "1 Unit", status: "✅", usage: "Tripod CAM 1 Broadcast" },
        { name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "✅", usage: "Converter CAM 3 & CAM 4" },
        { name: "HDMI to Micro HDMI Cable 30CM", qty: "2 Unit", status: "✅", usage: "CAM 1 & CAM 2 ke Hollyland TX" },
        { name: "HDMI Capture", qty: "2 Unit", status: "✅", usage: "1x Input ProPresenter 1, 1x Input Resolume" }
      ]
    },
    {
      vendor: "ABON",
      title: "2. Peminjaman dari ABON",
      items: [
        { name: "HDMI Capture", qty: "2 Unit", status: "⚠️ 1/2", usage: "1 Unit terpakai di Resolume (Splitter ➔ RES), 1 standby" }
      ]
    },
    {
      vendor: "Andreas",
      title: "3. Peminjaman dari Andreas",
      items: [
        { name: "Fan Cooler", qty: "1 Unit", status: "☑️", usage: "Pendingin laptop / workstation" },
        { name: "Mouse Pad", qty: "1 Unit", status: "☑️", usage: "Perlengkapan meja operator" },
        { name: "Keyboard External", qty: "1 Unit", status: "☑️", usage: "Kontrol tambahan" },
        { name: "Mouse External", qty: "1 Unit", status: "☑️", usage: "Kontrol navigasi switcher / visual" },
        { name: "Powerbank", qty: "1 Unit", status: "☑️", usage: "Daya darurat aksesoris" },
        { name: "Power Adaptor USB A", qty: "9 Unit", status: "☑️", usage: "Charger aksesoris / transmitter" },
        { name: "Power Adaptor USB A x C", qty: "1 Unit", status: "☑️", usage: "Charger cepat dual-port" },
        { name: "Power Adaptor USB C", qty: "1 Unit", status: "☑️", usage: "Charger perangkat Type-C" },
        { name: "USB A to USB B Data Cable", qty: "1 Unit", status: "☑️", usage: "Cadangan koneksi audio/printer" },
        { name: "USB A to USB Micro B Data Cable", qty: "2 Unit", status: "☑️", usage: "Cadangan koneksi perangkat legacy" },
        { name: "USB A to USB C Data Cable", qty: "1 Unit", status: "✅", usage: "Switcher Cinetreak ➔ Laptop OBS Studio" },
        { name: "USB A to USB C Charge Cable", qty: "1 Unit", status: "☑️", usage: "Pengisian daya Type-C" },
        { name: "USB C to USB C Charge Cable", qty: "1 Unit", status: "☑️", usage: "Pengisian daya Type-C" },
        { name: "USB A to USB A Extender 30CM", qty: "2 Unit", status: "☑️", usage: "Sambungan pendek port USB" },
        { name: "USB A to USB A Extender 2M", qty: "1 Unit", status: "✅", usage: "Mixer NewBaxs CT80S ➔ Laptop OBS Studio" },
        { name: "USB A to USB C Male Converter", qty: "4 Unit", status: "☑️", usage: "Converter port USB-C" },
        { name: "USB A to USB C Female Converter", qty: "2 Unit", status: "☑️", usage: "Adapter USB-C" },
        { name: "USB A to Mini USB Cable", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel mini-USB" },
        { name: "USB A Splitter 3CH", qty: "1 Unit", status: "☑️", usage: "Ekspansi port USB" },
        { name: "USB A Splitter 4CH", qty: "1 Unit", status: "☑️", usage: "Ekspansi port USB" },
        { name: "USB C DAC Hanason AB17X", qty: "1 Unit", status: "✅", usage: "Audio DAC Laptop Resolume ➔ Mixer Yamaha QL5" },
        { name: "USB C DAC Oraimo OAA310", qty: "1 Unit", status: "☑️", usage: "Cadangan Audio DAC" },
        { name: "In Ear Monitor QKZ Hi7T", qty: "1 Pack", status: "☑️", usage: "Monitoring audio operator" },
        { name: "In Ear Monitor KZ EDX Pro", qty: "1 Pack", status: "☑️", usage: "Monitoring audio operator" },
        { name: "Fastdrive Vgen SSD 128GB", qty: "1 Pack", status: "☑️", usage: "Penyimpanan cepat materi visual" },
        { name: "Fastdrive Toshiba HDD 1TB", qty: "1 Pack", status: "☑️", usage: "Penyimpanan arsip video & asset besar" },
        { name: "Flashdrive Toshiba 8GB", qty: "1 Unit", status: "☑️", usage: "Transfer materi presentasi" },
        { name: "Flashdrive Sandisk 16GB", qty: "1 Unit", status: "☑️", usage: "Transfer materi presentasi" },
        { name: "Flashdrive Toshiba 32GB", qty: "1 Unit", status: "☑️", usage: "Backup materi video / audio" },
        { name: "Flashdrive Toshiba 64GB", qty: "1 Unit", status: "☑️", usage: "Backup master file rundown" },
        { name: "HDMI to Mini HDMI Converter", qty: "1 Unit", status: "☑️", usage: "Cadangan konverter video" },
        { name: "Mini HDMI to Mini HDMI Cable 1,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel video" },
        { name: "HDMI to HDMI Cable 1,5M", qty: "3 Unit", status: "✅", usage: "1x Splitter ➔ PRO1, 1x PRO2 ➔ RES, 1x Splitter ➔ RES" },
        { name: "VGA to HDMI Converter", qty: "3 Unit", status: "☑️", usage: "Cadangan display legacy" },
        { name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel monitor" },
        { name: "Power Cable 3PIN", qty: "3 Unit", status: "⚠️", usage: "Kabel power PC / Monitor / Mixer" },
        { name: "Power Cable 2PIN", qty: "1 Unit", status: "⚠️", usage: "Kabel power adaptor TV / Device" },
        { name: "Terminal Cable 4CH", qty: "3 Unit", status: "⚠️", usage: "Distribusi colokan meja teknis" },
        { name: "Terminal Cable 3CH", qty: "2 Unit", status: "⚠️", usage: "Distribusi colokan meja teknis" },
        { name: "Terminal Cable 2CH", qty: "1 Unit", status: "⚠️", usage: "Distribusi colokan meja teknis" },
        { name: "Terminal Cable XCH", qty: "X Unit", status: "✅", usage: "Terminal utama meja kontrol" },
        { name: "Terminal T", qty: "8 Unit", status: "⚠️", usage: "Percabangan colokan listrik" },
        { name: "Addon Box", qty: "1 Pack", status: "☑️", usage: "Perlengkapan & tools tambahan" },
        { name: "Jack Box", qty: "1 Pack", status: "☑️", usage: "Kumpulan jack audio & converter" },
        { name: "Screw Box", qty: "1 Pack", status: "☑️", usage: "Baut rigging & plate kamera/tripod" },
        { name: "Ties Box", qty: "1 Pack", status: "☑️", usage: "Cable ties untuk manajemen kabel" },
        { name: "Tool Box", qty: "2 Pack", status: "☑️", usage: "Obeng, tang, gunting, tespen, multimeter" },
        { name: "Cable Box", qty: "1 Pack", status: "☑️", usage: "Wadah manajemen cadangan kabel" },
        { name: "Tape Box", qty: "1 Pack", status: "☑️", usage: "Lakban kain, isolasi hitam, double tape" }
      ]
    },
    {
      vendor: "GIA",
      title: "4. Peminjaman dari GIA Deliksari",
      items: [
        { name: "Mixer NewBaxs CT80S", qty: "1 Unit", status: "✅", usage: "Mixer 2 (Sub-Mix Audio Streaming ke OBS)" },
        { name: "XLR Female to Male Cable 3M", qty: "2 Unit", status: "✅", usage: "Output Yamaha QL5 ➔ Input Mixer NewBaxs CT80S" },
        { name: "USB A to USB C Data Cable", qty: "1 Unit", status: "✅", usage: "Mixer NewBaxs CT80S ➔ Laptop OBS Studio" },
        { name: "Tripod Camera Big", qty: "1 Unit", status: "✅", usage: "Tripod CAM 3 Broadcast" },
        { name: "HDMI Splitter 2CH", qty: "1 Unit", status: "☑️", usage: "Cadangan Video Splitter" },
        { name: "Power Adaptor SPL", qty: "1 Pack", status: "☑️", usage: "Power Adaptor Splitter GIA" },
        { name: "HDMI to HDMI Cable 1M", qty: "2 Unit", status: "✅", usage: "1x Switcher ➔ TV Multiview, 1x Switcher ➔ Splitter 4CH" }
      ]
    },
    {
      vendor: "GKJ",
      title: "5. Peminjaman dari GKJ Ngaliyan",
      items: [
        { name: "Stand Lighting Small", qty: "1 Unit", status: "☑️", usage: "Cadangan stand wireless receiver" },
        { name: "HDMI Cable 15M", qty: "1 Unit", status: "✅", usage: "Output Laptop Resolume ➔ HDMI Capture PC UNNES" },
        { name: "HDMI Cable 10M", qty: "1 Unit", status: "✅", usage: "CAM 3 Wired ➔ Switcher Cinetreak" },
        { name: "HDMI Cable 5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel HDMI jarak menengah" },
        { name: "HDMI Cable 1,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel patch HDMI" },
        { name: "HDMI Capture", qty: "1 Unit", status: "✅", usage: "Input ke PC UNNES dari Laptop Resolume" },
        { name: "HDMI Splitter 4CH", qty: "1 Unit", status: "☑️", usage: "Cadangan HDMI Splitter 4 Channel" },
        { name: "Power Adaptor SPL", qty: "1 Pack", status: "☑️", usage: "Power Adaptor Splitter GKJ" }
      ]
    },
    {
      vendor: "UKK",
      title: "6. Peminjaman dari UKK UNNES",
      items: [
        { name: "XLR Female to Male Cable 10M", qty: "3 Unit", status: "⚠️ 2/3", usage: "2 Unit Yamaha QL5 ➔ CT80S, 1 Unit standby" },
        { name: "Stand Lighting Small", qty: "4 Unit", status: "⚠️ 2/4", usage: "1x Holder RX Pyro S, 1x Holder RX Pyro H, 2x standby" },
        { name: "Tripod Camera Big", qty: "1 Unit", status: "✅", usage: "Tripod CAM 4 Broadcast" },
        { name: "HDMI to Mini HDMI Cable 2,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel video" },
        { name: "HDMI Cable 15M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel HDMI panjang" },
        { name: "HDMI Cable 10M", qty: "1 Unit", status: "✅", usage: "CAM 4 Wired ➔ Switcher Cinetreak" },
        { name: "HDMI Cable 1,5M", qty: "4 Unit", status: "⚠️ 2/4", usage: "1x Pyro S RX ➔ Switcher, 1x Pyro H RX ➔ Switcher, 2 standby" },
        { name: "HDMI Splitter 4CH", qty: "1 Unit", status: "✅", usage: "Splitter Utama Distribusi Sinyal Switcher" },
        { name: "Power Adaptor SPL", qty: "1 Pack", status: "✅", usage: "Power Adaptor Splitter UKK" },
        { name: "VGA to VGA Cable 1,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel monitor" },
        { name: "VGA to VGA Cable 2,5M", qty: "1 Unit", status: "☑️", usage: "Cadangan kabel monitor" },
        { name: "VGA to HDMI Converter", qty: "2 Unit", status: "☑️", usage: "Cadangan converter display" },
        { name: "Power Cable XPIN", qty: "X Unit", status: "☑️", usage: "Cadangan kabel power" },
        { name: "Terminal Cable XCH", qty: "X Unit", status: "✅", usage: "Distribusi listrik panggung & FOH" }
      ]
    },
    {
      vendor: "Lio",
      title: "7. Peminjaman dari Lio",
      items: [
        { name: "HDMI Cable 1,5M", qty: "1 Unit", status: "✅", usage: "Laptop ProPresenter 3 ➔ Television Time Keeper" }
      ]
    },
    {
      vendor: "Darrel",
      title: "8. Peminjaman dari Darrel",
      items: [
        { name: "Television", qty: "1 Unit", status: "✅", usage: "Monitor Stage Time Keeper" },
        { name: "Power Adaptor TV", qty: "1 Pack", status: "✅", usage: "Power Adaptor TV Time Keeper" },
        { name: "Memory Card 8GB", qty: "1 Unit", status: "☑️", usage: "Penyimpanan file cadangan" }
      ]
    },
    {
      vendor: "Kiel 1",
      title: "9. Peminjaman dari Kiel 1",
      items: [
        { name: "Sony ZVE10", qty: "1 Unit", status: "✅", usage: "CAM 1 Broadcast Wireless" },
        { name: "Lens 16-50MM Kit", qty: "1 Unit", status: "✅", usage: "CAM 4 Broadcast Wired" },
        { name: "Lens 50MM Fix", qty: "1 Unit", status: "☑️", usage: "Cadangan lensa portrait/low-light" },
        { name: "Battery Kamera", qty: "2 Unit", status: "✅", usage: "1 Unit di CAM 1, 1 Unit standby" },
        { name: "Charger Kamera", qty: "1 Pack", status: "✅", usage: "Pengisian daya baterai" },
        { name: "Memory Card 64GB", qty: "1 Unit", status: "✅", usage: "CAM 1 Broadcast" },
        { name: "Memory Card 128GB", qty: "1 Unit", status: "☑️", usage: "Cadangan storage resolusi tinggi" },
        { name: "Laptop + Adaptor LTP", qty: "1 Unit", status: "✅", usage: "Laptop Cadangan Operasional (Backup Workstation)" }
      ]
    },
    {
      vendor: "Joel",
      title: "10. Peminjaman dari Joel",
      items: [
        { name: "Sony A6600", qty: "1 Unit", status: "✅", usage: "CAM VID Dokumentasi Video" },
        { name: "Lens 24-70MM Zeiss", qty: "1 Unit", status: "✅", usage: "Lensa utama CAM VID Dokumentasi" },
        { name: "Battery Kamera", qty: "2 Unit", status: "✅", usage: "Baterai CAM VID Dokumentasi" },
        { name: "Charger Kamera", qty: "1 Pack", status: "✅", usage: "Pengisian daya baterai" },
        { name: "Memory Card 64GB", qty: "1 Unit", status: "✅", usage: "CAM VID Dokumentasi Video" },
        { name: "Gimbal DJI Ronin RS3", qty: "1 Unit", status: "✅", usage: "Stabilizer pergerakan dinamis CAM VID" }
      ]
    },
    {
      vendor: "Kezia",
      title: "11. Peminjaman dari Kezia",
      items: [
        { name: "Television", qty: "1 Unit", status: "✅", usage: "Monitor Multiview Switcher Broadcast" },
        { name: "Power Adaptor TV", qty: "1 Pack", status: "✅", usage: "Power Adaptor TV Multiview" }
      ]
    },
    {
      vendor: "Jennifer",
      title: "12. Peminjaman dari Jennifer",
      items: [
        { name: "HP Iphone 15", qty: "1 Unit", status: "✅", usage: "CAM HP Dokumentasi Live Reels/Story/Sosmed" },
        { name: "TAB iPad", qty: "1 Unit", status: "✅", usage: "iPad Virtual Mixer 2 (Remote Audio FOH)" }
      ]
    },
    {
      vendor: "Panitia",
      title: "13. Peminjaman dari Panitia",
      items: [
        { name: "HDMI to Micro HDMI Converter", qty: "2 Unit", status: "✅", usage: "Backup Converter CAM 3 & CAM 4" },
        { name: "Terminal Cable XCH", qty: "X Unit", status: "✅", usage: "Distribusi listrik jalur utama" }
      ]
    },
    {
      vendor: "UNNES",
      title: "14. Fasilitas Gedung Auditorium UNNES",
      items: [
        { name: "Mixer Yamaha QL5", qty: "1 Unit", status: "✅", usage: "Master Digital Console Audio FOH" },
        { name: "WiFi UNNES-ID", qty: "1 System", status: "✅", usage: "Jaringan kontrol nirkabel Virtual Mixer 1 & 2" },
        { name: "Audio Cable 20M", qty: "1 Line", status: "✅", usage: "Jalur audio Resolume BGM ➔ Mixer Yamaha QL5" },
        { name: "HDMI Cable 20M", qty: "1 Line", status: "✅", usage: "Laptop ProPresenter 1 ➔ Novastar Processor 1" },
        { name: "Novastar Video Processor 1 & 2", qty: "2 Unit", status: "✅", usage: "Processor resolusi LED Kiri/Kanan/Belakang & Tengah" },
        { name: "PC UNNES", qty: "1 Unit", status: "✅", usage: "PC passthrough display input Resolume ➔ Novastar 2" },
        { name: "LED Center Screen", qty: "1 Display", status: "✅", usage: "Layar LED panggung utama tengah" },
        { name: "LED Left, Right, & Back Screens", qty: "3 Displays", status: "✅", usage: "Layar LED panggung sayap kiri, kanan, dan belakang" }
      ]
    }
  ];

  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  // Flattened items for lightning lookup
  const ALL_ITEMS = [];
  INVENTORY_RAW.forEach((vendorGroup) => {
    vendorGroup.items.forEach((item, idx) => {
      const itemId = `${slugify(vendorGroup.vendor)}_${idx}_${slugify(item.name)}`;
      ALL_ITEMS.push({
        id: itemId,
        vendor: vendorGroup.vendor,
        vendorTitle: vendorGroup.title,
        idx: idx,
        name: item.name,
        qty: item.qty,
        status: item.status,
        usage: item.usage
      });
    });
  });

  // =========================================================================
  // 2. STATE & CONFIG
  // =========================================================================
  const inventoryState = {};
  ALL_ITEMS.forEach(it => {
    inventoryState[it.id] = { loaded: false, packed: false, loaded_by: '', loaded_at: null, packed_by: '', packed_at: null };
  });

  let currentFilterStatus = 'all';
  let currentFilterVendor = 'all';
  let searchQuery = '';
  let activeCrewName = localStorage.getItem('ip26_satset_crew') || localStorage.getItem('ip26_crew_name') || 'Andreas';

  // Desktop Blocker & Simulator Logic
  const body = document.body;
  const btnSimulateMobile = document.getElementById('btn-simulate-mobile');
  if (btnSimulateMobile) {
    btnSimulateMobile.addEventListener('click', () => {
      body.classList.remove('enforce-mobile-lock');
      body.classList.add('simulator-mode');
      showToast('Mode Simulator', 'Pratinjau mobile frame diaktifkan untuk layar desktop.');
    });
  }

  // Update dynamic QR Code target URL
  const qrImg = document.getElementById('dynamic-qr');
  if (qrImg) {
    const currentUrl = window.location.href.split('#')[0].split('?')[0];
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}`;
  }

  // Crew Identity
  const headerCrewName = document.getElementById('header-crew-name');
  if (headerCrewName) headerCrewName.textContent = activeCrewName;

  const crewModal = document.getElementById('crew-modal');
  const btnChangeCrew = document.getElementById('btn-change-crew');
  const btnCloseCrewModal = document.getElementById('btn-close-crew-modal');
  const crewChoicesGrid = document.getElementById('crew-choices-grid');

  if (btnChangeCrew && crewModal) {
    btnChangeCrew.addEventListener('click', () => {
      crewModal.style.display = 'flex';
      // Mark selected
      crewChoicesGrid?.querySelectorAll('.crew-pill-choice').forEach(btn => {
        btn.classList.toggle('selected', btn.getAttribute('data-name') === activeCrewName);
      });
    });
  }

  if (btnCloseCrewModal && crewModal) {
    btnCloseCrewModal.addEventListener('click', () => {
      crewModal.style.display = 'none';
    });
  }

  crewChoicesGrid?.querySelectorAll('.crew-pill-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      if (name) {
        activeCrewName = name;
        localStorage.setItem('ip26_satset_crew', name);
        localStorage.setItem('ip26_crew_name', name);
        if (headerCrewName) headerCrewName.textContent = name;
        if (crewModal) crewModal.style.display = 'none';
        showToast('Identitas Disimpan', `Anda kini mencentang sebagai: ${name}`, 'info');
      }
    });
  });

  // Theme Toggle
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const savedTheme = localStorage.getItem('ip26_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ip26_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!btnThemeToggle) return;
    const icon = btnThemeToggle.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  // =========================================================================
  // 3. TOAST SYSTEM
  // =========================================================================
  const toastBox = document.getElementById('toast-box');
  function showToast(title, msg, type = 'info') {
    if (!toastBox) return;
    const pill = document.createElement('div');
    pill.className = 'toast-pill';
    const icon = type === 'warning' ? '⚠️' : type === 'success' ? '✅' : '🔔';
    pill.innerHTML = `<span>${icon}</span> <div><strong>${title}</strong>: ${msg}</div>`;
    toastBox.appendChild(pill);
    setTimeout(() => {
      if (pill.parentElement) pill.parentElement.removeChild(pill);
    }, 3800);
  }

  // =========================================================================
  // 4. SUPABASE REALTIME MULTI-DEVICE SYNC
  // =========================================================================
  const SUPABASE_URL = 'https://ssbkhhnnzwuykyeznpwd.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYmtoaG5uend1eWt5ZXpucHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDQ1NzcsImV4cCI6MjEwMjk4MDU3N30.-zGe_xWDTBmo604VS39jl8o7YvhEQYb3fZvCV-fcEbk';
  let supabase = null;
  let presenceChannel = null;

  const syncDot = document.getElementById('sync-dot');
  const syncText = document.getElementById('sync-text');
  const onlineCount = document.getElementById('online-count');

  function setSyncStatus(state, msg) {
    if (syncText) syncText.textContent = msg;
    if (syncDot) {
      syncDot.style.background = state === 'connected' ? 'var(--accent-emerald)' : state === 'syncing' ? 'var(--accent-cyan)' : 'var(--accent-amber)';
      syncDot.style.boxShadow = `0 0 8px ${syncDot.style.background}`;
    }
  }

  function initRealtime() {
    if (typeof window.supabase === 'undefined') {
      setSyncStatus('offline', '🟡 Offline (Penyimpanan Lokal)');
      loadFromLocalStorage();
      renderAllCards();
      updateMeters();
      return;
    }

    try {
      setSyncStatus('syncing', '🔵 Menghubungkan ke Cloud...');
      supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

      // Initial Fetch
      supabase
        .from('inventory_items')
        .select('*')
        .then(({ data, error }) => {
          if (!error && Array.isArray(data)) {
            data.forEach(row => {
              if (row.item_id && inventoryState[row.item_id]) {
                inventoryState[row.item_id] = {
                  loaded: Boolean(row.loaded),
                  loaded_by: row.loaded_by || '',
                  loaded_at: row.loaded_at,
                  packed: Boolean(row.packed),
                  packed_by: row.packed_by || '',
                  packed_at: row.packed_at
                };
              }
            });
            saveToLocalStorage();
            renderAllCards();
            updateMeters();
          }
          setSyncStatus('connected', '🟢 Terhubung Supabase Realtime');
        })
        .catch(() => {
          setSyncStatus('connected', '🟢 Terhubung Supabase Realtime');
        });

      // Realtime CDC Channel
      supabase
        .channel('satset_inventory_sync')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'inventory_items' }, payload => {
          const row = payload.new;
          if (row && row.item_id && inventoryState[row.item_id]) {
            const isChange = 
              inventoryState[row.item_id].loaded !== Boolean(row.loaded) ||
              inventoryState[row.item_id].packed !== Boolean(row.packed);

            inventoryState[row.item_id] = {
              loaded: Boolean(row.loaded),
              loaded_by: row.loaded_by || '',
              loaded_at: row.loaded_at,
              packed: Boolean(row.packed),
              packed_by: row.packed_by || '',
              packed_at: row.packed_at
            };

            updateCardUI(row.item_id);
            updateMeters();

            if (isChange) {
              const actor = row.loaded_by || row.packed_by || 'Kru';
              const it = ALL_ITEMS.find(i => i.id === row.item_id);
              showToast('Sinkron Masuk', `${actor} memperbarui: ${it ? it.name : 'Barang'}`, 'info');
            }
          }
        })
        .subscribe();

      // Presence
      presenceChannel = supabase.channel('satset_crew_presence');
      presenceChannel
        .on('presence', { event: 'sync' }, () => {
          const state = presenceChannel.presenceState();
          const count = Object.keys(state).length || 1;
          if (onlineCount) onlineCount.textContent = count;
        })
        .subscribe(async (status) => {
          if (status === 'SUBSCRIBED') {
            await presenceChannel.track({
              user: activeCrewName,
              online_at: new Date().toISOString()
            });
          }
        });

    } catch (e) {
      console.warn('Realtime init error:', e);
      setSyncStatus('offline', '🟡 Offline (Lokal)');
      loadFromLocalStorage();
      renderAllCards();
      updateMeters();
    }
  }

  function saveToLocalStorage() {
    try {
      localStorage.setItem('ip26_satset_state', JSON.stringify(inventoryState));
    } catch (_) {}
  }

  function loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem('ip26_satset_state') || localStorage.getItem('ip26_inventory_state');
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.assign(inventoryState, parsed);
      }
    } catch (_) {}
  }

  // =========================================================================
  // 5. RENDER VENDOR CHIPS & INVENTORY CARDS
  // =========================================================================
  const vendorChipsContainer = document.getElementById('vendor-chips-container');
  const cardsContainer = document.getElementById('inventory-cards-container');

  function initVendorChips() {
    if (!vendorChipsContainer) return;
    INVENTORY_RAW.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'vendor-chip';
      btn.setAttribute('data-vendor', v.vendor);
      btn.textContent = `${v.vendor} (${v.items.length})`;
      btn.addEventListener('click', () => {
        vendorChipsContainer.querySelectorAll('.vendor-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        currentFilterVendor = v.vendor;
        renderAllCards();
      });
      vendorChipsContainer.appendChild(btn);
    });

    const allBtn = vendorChipsContainer.querySelector('[data-vendor="all"]');
    allBtn?.addEventListener('click', () => {
      vendorChipsContainer.querySelectorAll('.vendor-chip').forEach(c => c.classList.remove('active'));
      allBtn.classList.add('active');
      currentFilterVendor = 'all';
      renderAllCards();
    });
  }

  function renderAllCards() {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    const query = searchQuery.trim().toLowerCase();
    let visibleCount = 0;

    INVENTORY_RAW.forEach(vGroup => {
      if (currentFilterVendor !== 'all' && currentFilterVendor !== vGroup.vendor) return;

      const matchingItems = vGroup.items.filter((item, idx) => {
        const itemId = `${slugify(vGroup.vendor)}_${idx}_${slugify(item.name)}`;
        const state = inventoryState[itemId] || { loaded: false, packed: false };

        // Search match
        if (query) {
          const matchName = item.name.toLowerCase().includes(query);
          const matchUsage = item.usage.toLowerCase().includes(query);
          const matchVendor = vGroup.vendor.toLowerCase().includes(query);
          if (!matchName && !matchUsage && !matchVendor) return false;
        }

        // Status match
        if (currentFilterStatus === 'unloaded' && state.loaded) return false;
        if (currentFilterStatus === 'loaded' && !state.loaded) return false;
        if (currentFilterStatus === 'unpacked' && state.packed) return false;
        if (currentFilterStatus === 'packed' && !state.packed) return false;

        return true;
      });

      if (matchingItems.length === 0) return;

      // Vendor Divider
      const div = document.createElement('div');
      div.className = 'vendor-section-divider';
      div.innerHTML = `
        <span class="vendor-section-title">📍 ${vGroup.title}</span>
        <span class="vendor-section-count">${matchingItems.length} barang</span>
      `;
      cardsContainer.appendChild(div);

      matchingItems.forEach((item) => {
        visibleCount++;
        const originalIdx = vGroup.items.indexOf(item);
        const itemId = `${slugify(vGroup.vendor)}_${originalIdx}_${slugify(item.name)}`;
        const state = inventoryState[itemId] || { loaded: false, packed: false };

        const card = createItemCard(itemId, vGroup.vendor, item, state);
        cardsContainer.appendChild(card);
      });
    });

    if (visibleCount === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-state">
          <span class="empty-state-icon">🔍</span>
          <strong>Tidak ada barang yang cocok</strong>
          <p style="font-size:0.8rem;">Coba ganti filter status atau kata kunci pencarian Anda.</p>
        </div>
      `;
    }
  }

  function createItemCard(itemId, vendor, item, state) {
    const isLoaded = Boolean(state.loaded);
    const isPacked = Boolean(state.packed);
    const isFullyDone = isLoaded && isPacked;

    const card = document.createElement('article');
    card.className = `satset-card ${isFullyDone ? 'is-fully-done' : ''}`;
    card.id = `card-${itemId}`;

    const loadMeta = isLoaded 
      ? `✓ ${state.loaded_by || 'Kru'} (${formatTime(state.loaded_at)})` 
      : 'Belum Pasang';

    const packMeta = isPacked 
      ? `✓ ${state.packed_by || 'Kru'} (${formatTime(state.packed_at)})` 
      : 'Belum Kemas';

    card.innerHTML = `
      <div class="card-top-row">
        <div class="card-badges">
          <span class="badge-vendor">${vendor}</span>
          <span class="badge-qty">${item.qty}</span>
        </div>
        <span class="badge-status-icon">${item.status}</span>
      </div>

      <div class="card-body">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-usage">${item.usage}</p>
      </div>

      <div class="card-actions-grid">
        <button class="btn-tactile btn-load ${isLoaded ? 'checked' : ''}" data-item-id="${itemId}" data-type="loading" aria-label="Tandai Pasang ${item.name}">
          <div class="btn-tactile-main">
            <span>${isLoaded ? '✅' : '📦'}</span> <strong>${isLoaded ? 'TERPASANG' : 'PASANG'}</strong>
          </div>
          <span class="btn-tactile-meta">${loadMeta}</span>
        </button>

        <button class="btn-tactile btn-pack ${isPacked ? 'checked' : ''}" data-item-id="${itemId}" data-type="packing" aria-label="Tandai Kemas ${item.name}">
          <div class="btn-tactile-main">
            <span>${isPacked ? '🧳' : '📤'}</span> <strong>${isPacked ? 'TERKEMAS' : 'KEMAS'}</strong>
          </div>
          <span class="btn-tactile-meta">${packMeta}</span>
        </button>
      </div>
    `;

    // Attach listeners
    const btnLoad = card.querySelector('.btn-load');
    const btnPack = card.querySelector('.btn-pack');

    btnLoad.addEventListener('click', () => handleToggleCheck(itemId, 'loading', vendor, item.name));
    btnPack.addEventListener('click', () => handleToggleCheck(itemId, 'packing', vendor, item.name));

    return card;
  }

  function formatTime(isoStr) {
    if (!isoStr) return '';
    try {
      return new Date(isoStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (_) {
      return '';
    }
  }

  function updateCardUI(itemId) {
    const card = document.getElementById(`card-${itemId}`);
    if (!card) return;

    const state = inventoryState[itemId] || { loaded: false, packed: false };
    const isLoaded = Boolean(state.loaded);
    const isPacked = Boolean(state.packed);

    card.classList.toggle('is-fully-done', isLoaded && isPacked);

    const btnLoad = card.querySelector('.btn-load');
    if (btnLoad) {
      btnLoad.classList.toggle('checked', isLoaded);
      btnLoad.querySelector('.btn-tactile-main').innerHTML = `<span>${isLoaded ? '✅' : '📦'}</span> <strong>${isLoaded ? 'TERPASANG' : 'PASANG'}</strong>`;
      btnLoad.querySelector('.btn-tactile-meta').textContent = isLoaded 
        ? `✓ ${state.loaded_by || 'Kru'} (${formatTime(state.loaded_at)})` 
        : 'Belum Pasang';
    }

    const btnPack = card.querySelector('.btn-pack');
    if (btnPack) {
      btnPack.classList.toggle('checked', isPacked);
      btnPack.querySelector('.btn-tactile-main').innerHTML = `<span>${isPacked ? '🧳' : '📤'}</span> <strong>${isPacked ? 'TERKEMAS' : 'KEMAS'}</strong>`;
      btnPack.querySelector('.btn-tactile-meta').textContent = isPacked 
        ? `✓ ${state.packed_by || 'Kru'} (${formatTime(state.packed_at)})` 
        : 'Belum Kemas';
    }
  }

  // =========================================================================
  // 6. TOGGLE ITEM CHECK (Optimistic UI + Supabase Upsert)
  // =========================================================================
  async function handleToggleCheck(itemId, type, vendor, itemName) {
    const state = inventoryState[itemId] || { loaded: false, packed: false };
    const now = new Date().toISOString();

    if (type === 'loading') {
      state.loaded = !state.loaded;
      state.loaded_by = state.loaded ? activeCrewName : '';
      state.loaded_at = state.loaded ? now : null;
    } else if (type === 'packing') {
      state.packed = !state.packed;
      state.packed_by = state.packed ? activeCrewName : '';
      state.packed_at = state.packed ? now : null;
    }

    inventoryState[itemId] = state;
    saveToLocalStorage();
    updateCardUI(itemId);
    updateMeters();

    // Haptic vibration feedback if supported
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }

    // Push to Supabase Cloud
    if (supabase) {
      setSyncStatus('syncing', '🔵 Menyinkronkan...');
      try {
        await supabase
          .from('inventory_items')
          .upsert({
            item_id: itemId,
            vendor: vendor,
            item_name: itemName,
            loaded: state.loaded,
            loaded_by: state.loaded_by,
            loaded_at: state.loaded_at,
            packed: state.packed,
            packed_by: state.packed_by,
            packed_at: state.packed_at,
            updated_at: now
          }, { onConflict: 'item_id' });
        setSyncStatus('connected', '🟢 Terhubung Supabase Realtime');
      } catch (err) {
        console.warn('Upsert failed:', err);
        setSyncStatus('offline', '🟡 Gagal Sinkron (Disimpan Lokal)');
      }
    }
  }

  // =========================================================================
  // 7. PROGRESS METERS & STATUS COUNTERS
  // =========================================================================
  const meterLoadTxt = document.getElementById('meter-load-txt');
  const meterPackTxt = document.getElementById('meter-pack-txt');
  const barLoadFill = document.getElementById('bar-load-fill');
  const barPackFill = document.getElementById('bar-pack-fill');

  const countAll = document.getElementById('count-all');
  const countUnloaded = document.getElementById('count-unloaded');
  const countLoaded = document.getElementById('count-loaded');
  const countUnpacked = document.getElementById('count-unpacked');
  const countPacked = document.getElementById('count-packed');

  function updateMeters() {
    const total = ALL_ITEMS.length || 1;
    let loadedCount = 0;
    let packedCount = 0;

    ALL_ITEMS.forEach(it => {
      const st = inventoryState[it.id];
      if (st?.loaded) loadedCount++;
      if (st?.packed) packedCount++;
    });

    const loadPct = Math.round((loadedCount / total) * 100);
    const packPct = Math.round((packedCount / total) * 100);

    if (meterLoadTxt) meterLoadTxt.textContent = `${loadedCount}/${total} (${loadPct}%)`;
    if (meterPackTxt) meterPackTxt.textContent = `${packedCount}/${total} (${packPct}%)`;
    if (barLoadFill) barLoadFill.style.width = `${loadPct}%`;
    if (barPackFill) barPackFill.style.width = `${packPct}%`;

    if (countAll) countAll.textContent = total;
    if (countLoaded) countLoaded.textContent = loadedCount;
    if (countUnloaded) countUnloaded.textContent = total - loadedCount;
    if (countPacked) countPacked.textContent = packedCount;
    if (countUnpacked) countUnpacked.textContent = total - packedCount;
  }

  // =========================================================================
  // 8. SEARCH & STATUS FILTERS LISTENERS
  // =========================================================================
  const searchInput = document.getElementById('satset-search-input');
  const btnClearSearch = document.getElementById('btn-clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (btnClearSearch) btnClearSearch.style.display = searchQuery ? 'block' : 'none';
      renderAllCards();
    });
  }

  if (btnClearSearch && searchInput) {
    btnClearSearch.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      btnClearSearch.style.display = 'none';
      renderAllCards();
      searchInput.focus();
    });
  }

  const statusFilterPills = document.querySelectorAll('.filter-pill');
  statusFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      statusFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilterStatus = pill.getAttribute('data-status') || 'all';
      renderAllCards();
    });
  });

  // =========================================================================
  // 9. BATCH ACTIONS & FAST HELPERS
  // =========================================================================
  const batchModal = document.getElementById('batch-modal');
  const btnBatchModalOpen = document.getElementById('btn-batch-modal-open');
  const btnCloseBatchModal = document.getElementById('btn-close-batch-modal');

  if (btnBatchModalOpen && batchModal) {
    btnBatchModalOpen.addEventListener('click', () => {
      batchModal.style.display = 'flex';
    });
  }

  if (btnCloseBatchModal && batchModal) {
    btnCloseBatchModal.addEventListener('click', () => {
      batchModal.style.display = 'none';
    });
  }

  document.getElementById('act-check-all-load')?.addEventListener('click', () => {
    if (batchModal) batchModal.style.display = 'none';
    applyBatchAction('load-all');
  });

  document.getElementById('act-check-all-pack')?.addEventListener('click', () => {
    if (batchModal) batchModal.style.display = 'none';
    applyBatchAction('pack-all');
  });

  document.getElementById('act-reset-all')?.addEventListener('click', () => {
    if (batchModal) batchModal.style.display = 'none';
    applyBatchAction('reset-all');
  });

  document.getElementById('btn-quick-check-all')?.addEventListener('click', () => {
    applyBatchAction('load-all');
  });

  async function applyBatchAction(type) {
    const now = new Date().toISOString();
    const rowsToUpsert = [];

    ALL_ITEMS.forEach(it => {
      const state = inventoryState[it.id] || { loaded: false, packed: false };

      if (type === 'load-all') {
        state.loaded = true;
        state.loaded_by = activeCrewName;
        state.loaded_at = now;
      } else if (type === 'pack-all') {
        state.packed = true;
        state.packed_by = activeCrewName;
        state.packed_at = now;
      } else if (type === 'reset-all') {
        state.loaded = false;
        state.loaded_by = '';
        state.loaded_at = null;
        state.packed = false;
        state.packed_by = '';
        state.packed_at = null;
      }

      inventoryState[it.id] = state;
      updateCardUI(it.id);

      rowsToUpsert.push({
        item_id: it.id,
        vendor: it.vendor,
        item_name: it.name,
        loaded: state.loaded,
        loaded_by: state.loaded_by,
        loaded_at: state.loaded_at,
        packed: state.packed,
        packed_by: state.packed_by,
        packed_at: state.packed_at,
        updated_at: now
      });
    });

    saveToLocalStorage();
    updateMeters();
    showToast('Aksi Selesai', `Seluruh inventaris berhasil diperbarui.`, 'success');

    if (supabase) {
      setSyncStatus('syncing', '🔵 Menyinkronkan batch...');
      try {
        await supabase.from('inventory_items').upsert(rowsToUpsert, { onConflict: 'item_id' });
        setSyncStatus('connected', '🟢 Terhubung Supabase Realtime');
      } catch (err) {
        console.warn('Batch sync error:', err);
      }
    }
  }

  // Copy Summary
  document.getElementById('btn-copy-summary-fast')?.addEventListener('click', () => {
    let text = `⚡ *RINGKASAN INVENTARIS IP26 HARI H* (${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})})\n`;
    text += `Diperbarui oleh: ${activeCrewName}\n\n`;

    let total = ALL_ITEMS.length;
    let lCount = 0;
    let pCount = 0;

    ALL_ITEMS.forEach(it => {
      const st = inventoryState[it.id];
      if (st?.loaded) lCount++;
      if (st?.packed) pCount++;
    });

    text += `📦 *Pasang (Loading In)*: ${lCount}/${total} (${Math.round((lCount/total)*100)}%)\n`;
    text += `🧳 *Kemas (Packing Out)*: ${pCount}/${total} (${Math.round((pCount/total)*100)}%)\n\n`;

    const remainingLoad = ALL_ITEMS.filter(it => !inventoryState[it.id]?.loaded);
    if (remainingLoad.length > 0 && remainingLoad.length <= 15) {
      text += `❌ *Belum Pasang (${remainingLoad.length})*:\n`;
      remainingLoad.forEach(it => {
        text += `- ${it.name} (${it.vendor}) ➔ ${it.usage}\n`;
      });
    }

    navigator.clipboard.writeText(text).then(() => {
      showToast('Tersalin!', 'Ringkasan inventaris siap dibagikan ke grup WhatsApp kru.', 'success');
    }).catch(() => {
      showToast('Gagal Salin', 'Izin clipboard ditolak peramban.', 'warning');
    });
  });

  // Force Refresh
  document.getElementById('btn-force-refresh')?.addEventListener('click', () => {
    initRealtime();
    showToast('Sinkron Ulang', 'Memperbarui data inventaris dari cloud...');
  });

  // =========================================================================
  // 10. INITIALIZATION
  // =========================================================================
  initVendorChips();
  loadFromLocalStorage();
  renderAllCards();
  updateMeters();
  initRealtime();
});
