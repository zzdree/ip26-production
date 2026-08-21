// ==========================================================================
// IP26 PRODUCTION BLUEPRINT — MASTER SYSTEM SCRIPT
// 100% Comprehensive Data Engine & Interactive Simulations
// ==========================================================================

// Master Equipment Inventory with Status Flags:
// ✅ = Confirmed Ready | ☑️ = Standby / Checked | ⚠️ = Warning / Attention Needed
const masterInventory = [
  // 🏢 1. OWL STUDIO
  { id: 'owl-1', name: 'Sony A6000', qty: '2 Unit', category: 'OWL', type: 'Camera Body', status: '✅', notes: 'Kamera Broadcast CAM 3 & CAM 4' },
  { id: 'owl-2', name: 'Sony A6400', qty: '1 Unit', category: 'OWL', type: 'Camera Body', status: '✅', notes: 'Dokumentasi Foto Nico' },
  { id: 'owl-3', name: 'Sony ZV-E10', qty: '1 Unit', category: 'OWL', type: 'Camera Body', status: '✅', notes: 'Kamera Broadcast CAM 1 (Alex)' },
  { id: 'owl-4', name: 'Sony Lens 18-105mm F4 G OSS', qty: '3 Unit', category: 'OWL', type: 'Lens', status: '✅', notes: 'Lensa CAM 1, CAM 2, dan CAM 3' },
  { id: 'owl-5', name: 'Sony Lens 50mm Prime', qty: '1 Unit', category: 'OWL', type: 'Lens', status: '✅', notes: 'Lensa Foto Nico' },
  { id: 'owl-6', name: 'Battery NP-FW50 / NP-FZ100', qty: '8 Unit', category: 'OWL', type: 'Power', status: '✅', notes: 'Baterai Kamera Sony Broadcast' },
  { id: 'owl-7', name: 'Battery Charger Station', qty: '1 Pack', category: 'OWL', type: 'Power', status: '✅', notes: 'Charging Dock OWL' },
  { id: 'owl-8', name: 'Memory Card 32GB High Speed', qty: '4 Unit', category: 'OWL', type: 'Storage', status: '✅', notes: 'SD Card CAM 2, 3, 4 & Foto' },
  { id: 'owl-9', name: 'Cinetreak Cinelive V1 Switcher', qty: '1 Pack', category: 'OWL', type: 'Switcher', status: '✅', notes: 'Switcher Utama 4 Input HDMI' },
  { id: 'owl-10', name: 'Power Adaptor MIX Cinetreak', qty: '1 Unit', category: 'OWL', type: 'Power', status: '✅', notes: 'Power Switcher Cinetreak' },
  { id: 'owl-11', name: 'Hollyland Pyro H Wireless Kit (TX/RX)', qty: '1 Pack', category: 'OWL', type: 'Wireless', status: '✅', notes: 'Transmitter CAM 2 Roaming 5.8GHz' },
  { id: 'owl-12', name: 'Power Adaptor WIR Hollyland', qty: '1 Unit', category: 'OWL', type: 'Power', status: '✅', notes: 'Power Receiver Hollyland' },
  { id: 'owl-13', name: 'Tripod Camera Big Heavy Duty', qty: '1 Unit', category: 'OWL', type: 'Rig', status: '✅', notes: 'Tripod CAM 1 Utama' },
  { id: 'owl-14', name: 'HDMI to Micro HDMI Converter', qty: '2 Unit', category: 'OWL', type: 'Adapter', status: '✅', notes: 'Converter Port Kamera Sony' },
  { id: 'owl-15', name: 'HDMI to Micro HDMI Cable 30CM', qty: '1 Unit', category: 'OWL', type: 'Cable', status: '✅', notes: 'Kabel Rig CAM 2 Pyro H' },
  { id: 'owl-16', name: 'HDMI Cable 30M High Speed', qty: '1 Unit', category: 'OWL', type: 'Cable', status: '✅', notes: 'Kabel Panjang CAM 1 Alex' },
  { id: 'owl-17', name: 'HDMI Cable 20M High Speed', qty: '1 Unit', category: 'OWL', type: 'Cable', status: '✅', notes: 'Kabel Panjang CAM 1 Backup' },
  { id: 'owl-18', name: 'HDMI Video Capture Card', qty: '2 Unit', category: 'OWL', type: 'Capture', status: '✅', notes: 'Ingest Resolume / OBS Studio' },

  // 🏢 2. UKK UNNES
  { id: 'ukk-1', name: 'XLR Female to Male Cable 10M', qty: '3 Unit', category: 'UKK', type: 'Audio Cable', status: '✅', notes: 'Jalur FOH QL5 ke Submixer OBS' },
  { id: 'ukk-2', name: 'Stand Lighting Small', qty: '4 Unit', category: 'UKK', type: 'Rig', status: '☑️', notes: 'Stand Wireless & Lighting' },
  { id: 'ukk-3', name: 'Tripod Camera Big', qty: '1 Unit', category: 'UKK', type: 'Rig', status: '✅', notes: 'Tripod CAM 4 Nathania' },
  { id: 'ukk-4', name: 'HDMI to Mini HDMI Cable 2.5M', qty: '1 Unit', category: 'UKK', type: 'Cable', status: '☑️', notes: 'Kabel Converter Display' },
  { id: 'ukk-5', name: 'HDMI Cable 15M', qty: '1 Unit', category: 'UKK', type: 'Cable', status: '☑️', notes: 'Distribusi Video Panggung' },
  { id: 'ukk-6', name: 'HDMI Cable 10M', qty: '1 Unit', category: 'UKK', type: 'Cable', status: '✅', notes: 'Distribusi Video CAM 3' },
  { id: 'ukk-7', name: 'HDMI Cable 1.5M', qty: '4 Unit', category: 'UKK', type: 'Cable', status: '☑️', notes: 'Patch Switcher & Capture' },
  { id: 'ukk-8', name: 'HDMI Splitter 4CH + Adaptor SPL', qty: '1 Pack', category: 'UKK', type: 'Distribution', status: '✅', notes: 'Splitter Output Video Pro1' },
  { id: 'ukk-9', name: 'VGA to VGA Cable 1.5M & 2.5M', qty: '2 Unit', category: 'UKK', type: 'Cable', status: '☑️', notes: 'Display Backup' },
  { id: 'ukk-10', name: 'VGA to HDMI Converter', qty: '2 Unit', category: 'UKK', type: 'Adapter', status: '☑️', notes: 'Converter Display' },
  { id: 'ukk-11', name: 'Power Cable XPIN Heavy Duty', qty: 'X Unit', category: 'UKK', type: 'Power', status: '☑️', notes: 'Kabel Power Distribusi Listrik' },
  { id: 'ukk-12', name: 'Terminal Cable XCH (Heavy Duty)', qty: 'X Unit', category: 'UKK', type: 'Power', status: '✅', notes: 'Terminal Listrik Panggung' },

  // ⛪ 3. GIA DELIKSARI
  { id: 'gia-1', name: 'Mixer NewBaxs CT80S Submixer', qty: '1 Unit', category: 'GIA', type: 'Audio Mixer', status: '✅', notes: 'Submixer Audio OBS Studio' },
  { id: 'gia-2', name: 'XLR Female to Male Cable 3M', qty: '2 Unit', category: 'GIA', type: 'Audio Cable', status: '✅', notes: 'Patch Submixer Audio FOH' },
  { id: 'gia-3', name: 'USB-A to USB-C Data Cable', qty: '1 Unit', category: 'GIA', type: 'Cable', status: '✅', notes: 'Data Ingest Mixer ke Laptop OBS' },
  { id: 'gia-4', name: 'Tripod Camera Big', qty: '1 Unit', category: 'GIA', type: 'Rig', status: '✅', notes: 'Tripod CAM 3 Dewi' },
  { id: 'gia-5', name: 'HDMI Splitter 2CH + Adaptor', qty: '1 Pack', category: 'GIA', type: 'Distribution', status: '☑️', notes: 'Splitter Display Cadangan' },
  { id: 'gia-6', name: 'HDMI to HDMI Cable 1M', qty: '2 Unit', category: 'GIA', type: 'Cable', status: '✅', notes: 'Patch Kabel Monitor' },

  // ⛪ 4. GKJ NGALIYAN
  { id: 'gkj-1', name: 'Stand Lighting Small', qty: '1 Unit', category: 'GKJ', type: 'Rig', status: '✅', notes: 'Stand Receiver Pyro H' },
  { id: 'gkj-2', name: 'HDMI Cable 15M High Speed', qty: '1 Unit', category: 'GKJ', type: 'Cable', status: '✅', notes: 'Jalur Resolume ke Nova LED Center' },
  { id: 'gkj-3', name: 'HDMI Cable 10M High Speed', qty: '1 Unit', category: 'GKJ', type: 'Cable', status: '✅', notes: 'Jalur CAM 4 Nathania' },
  { id: 'gkj-4', name: 'HDMI Cable 5M & 1.5M', qty: '2 Unit', category: 'GKJ', type: 'Cable', status: '☑️', notes: 'Patch Kabel Video' },
  { id: 'gkj-5', name: 'HDMI Video Capture Card', qty: '1 Unit', category: 'GKJ', type: 'Capture', status: '✅', notes: 'Ingest Capture Card' },
  { id: 'gkj-6', name: 'HDMI Splitter 4CH + Adaptor SPL', qty: '1 Pack', category: 'GKJ', type: 'Distribution', status: '✅', notes: 'Splitter Resolume LED Center' },

  // 👤 5. ANDREAS MASTER TOOLKIT
  { id: 'and-1', name: 'USB-C DAC Hanason AB17X (Hi-Res)', qty: '1 Unit', category: 'Andreas', type: 'Audio DAC', status: '✅', notes: 'Audio Ingest Resolume ke FOH' },
  { id: 'and-2', name: 'USB-C DAC Oraimo OAA310', qty: '1 Unit', category: 'Andreas', type: 'Audio DAC', status: '✅', notes: 'Audio Ingest Backup DAC' },
  { id: 'and-3', name: 'In-Ear Monitor QKZ Hi7T', qty: '1 Pack', category: 'Andreas', type: 'Monitoring', status: '☑️', notes: 'Monitoring Audio Kru' },
  { id: 'and-4', name: 'In-Ear Monitor KZ EDX Pro', qty: '1 Pack', category: 'Andreas', type: 'Monitoring', status: '☑️', notes: 'Monitoring Audio Kru' },
  { id: 'and-5', name: 'Fastdrive V-Gen SSD 128GB', qty: '1 Pack', category: 'Andreas', type: 'Storage', status: '☑️', notes: 'Aset Multimedia Cepat' },
  { id: 'and-6', name: 'Fastdrive Toshiba HDD 1TB', qty: '1 Pack', category: 'Andreas', type: 'Storage', status: '☑️', notes: 'Master Backup Video' },
  { id: 'and-7', name: 'Flashdrive Pack (8GB, 16GB, 32GB, 64GB)', qty: '4 Unit', category: 'Andreas', type: 'Storage', status: '☑️', notes: 'Distribusi File Presenter' },
  { id: 'and-8', name: 'Fan Cooler Laptop', qty: '1 Unit', category: 'Andreas', type: 'Accessory', status: '☑️', notes: 'Pendingin Laptop Streaming OBS' },
  { id: 'and-9', name: 'Mouse Pad + Keyboard Ext + Mouse Ext', qty: '3 Unit', category: 'Andreas', type: 'Accessory', status: '☑️', notes: 'Station Switcher OBS' },
  { id: 'and-10', name: 'Powerbank High Capacity', qty: '1 Unit', category: 'Andreas', type: 'Power', status: '☑️', notes: 'Power Darurat Wireless' },
  { id: 'and-11', name: 'Power Adaptor USB-A Pack', qty: '9 Unit', category: 'Andreas', type: 'Power', status: '☑️', notes: 'Charger Adaptor Aksesoris' },
  { id: 'and-12', name: 'Power Adaptor USB-A x C & USB-C', qty: '2 Unit', category: 'Andreas', type: 'Power', status: '☑️', notes: 'Fast Charging Adaptor' },
  { id: 'and-13', name: 'USB-A to USB-B / Micro-B Data Cables', qty: '3 Unit', category: 'Andreas', type: 'Cable', status: '☑️', notes: 'Kabel Data Periferal' },
  { id: 'and-14', name: 'USB-A to USB-C Data & Charge Cables', qty: '2 Unit', category: 'Andreas', type: 'Cable', status: '✅', notes: 'Kabel Data Switcher OBS' },
  { id: 'and-15', name: 'USB-C to USB-C Charge Cable', qty: '1 Unit', category: 'Andreas', type: 'Cable', status: '☑️', notes: 'Kabel Power USB-C' },
  { id: 'and-16', name: 'USB-A Extender (30CM & 2M)', qty: '3 Unit', category: 'Andreas', type: 'Cable', status: '☑️', notes: 'Perpanjangan USB Station' },
  { id: 'and-17', name: 'USB-A to USB-C Male & Female Converters', qty: '6 Unit', category: 'Andreas', type: 'Adapter', status: '☑️', notes: 'OTG & Adaptor USB' },
  { id: 'and-18', name: 'USB-A Splitter Hub (3CH & 4CH)', qty: '2 Unit', category: 'Andreas', type: 'Hub', status: '☑️', notes: 'Hub Periferal Kontrol' },
  { id: 'and-19', name: 'HDMI to Mini HDMI Converter & Cable 1.5M', qty: '2 Unit', category: 'Andreas', type: 'Cable', status: '☑️', notes: 'Patch Display' },
  { id: 'and-20', name: 'HDMI to HDMI Cable 1.5M', qty: '3 Unit', category: 'Andreas', type: 'Cable', status: '✅', notes: 'Koneksi ProPresenter & Switcher' },
  { id: 'and-21', name: 'VGA to HDMI Converter & VGA Cable 1.5M', qty: '4 Unit', category: 'Adapter', type: 'Adapter', status: '☑️', notes: 'Converter Layar Cadangan' },
  { id: 'and-22', name: 'Power Cable 3PIN (3 Unit)', qty: '3 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Periksa Kelayakan Grounding' },
  { id: 'and-23', name: 'Power Cable 2PIN (1 Unit)', qty: '1 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Periksa Beban Daya' },
  { id: 'and-24', name: 'Terminal Cable 4CH (3 Unit)', qty: '3 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Terminal Distribusi FOH' },
  { id: 'and-25', name: 'Terminal Cable 3CH (2 Unit)', qty: '2 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Terminal Distribusi Panggung' },
  { id: 'and-26', name: 'Terminal Cable 2CH (1 Unit)', qty: '1 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Terminal Kamera' },
  { id: 'and-27', name: 'Terminal Cable XCH (Heavy Duty)', qty: 'X Unit', category: 'Andreas', type: 'Power', status: '✅', notes: 'Terminal Utama FOH' },
  { id: 'and-28', name: 'Terminal T Multi-Plug (8 Unit)', qty: '8 Unit', category: 'Andreas', type: 'Power', status: '⚠️', notes: 'Gunakan Steker Tanpa Beban Lebih' },
  { id: 'and-29', name: 'Master Tool Box, Screws, Ties & Tapes', qty: '7 Pack', category: 'Andreas', type: 'Toolkit', status: '☑️', notes: 'Perlengkapan Rigging & Fiksasi' },

  // 👥 6. TEAM & INDIVIDUAL LOANS
  { id: 'ind-1', name: 'HDMI Capture Card (ABON)', qty: '2 Unit', category: 'Team', type: 'Capture', status: '✅', notes: 'Capture Card Pinjaman ABON' },
  { id: 'ind-2', name: 'Sony A6600 + Zeiss 24-70mm (Joel)', qty: '1 Rig', category: 'Team', type: 'Camera Rig', status: '✅', notes: 'Kamera Sinematik Video' },
  { id: 'ind-3', name: 'Gimbal DJI Ronin RS3 (Joel)', qty: '1 Unit', category: 'Team', type: 'Stabilizer', status: '✅', notes: 'Gimbal Stabilizer Video Joel' },
  { id: 'ind-4', name: 'Battery (2 Unit) + Charger (Joel)', qty: '1 Pack', category: 'Team', type: 'Power', status: '✅', notes: 'Baterai Kamera Joel' },
  { id: 'ind-5', name: 'Memory Card 64GB (Joel)', qty: '1 Unit', category: 'Team', type: 'Storage', status: '✅', notes: 'SD Card Video Joel' },
  { id: 'ind-6', name: 'Sony ZV-E10 + Kit 16-50mm (Kiel)', qty: '1 Unit', category: 'Team', type: 'Camera Rig', status: '✅', notes: 'Kamera Standby / Backup' },
  { id: 'ind-7', name: 'Sony Manual 50mm Lens (Kiel)', qty: '1 Unit', category: 'Team', type: 'Lens', status: '☑️', notes: 'Lensa Manual Cadangan' },
  { id: 'ind-8', name: 'Battery (2 Unit) + Charger (Kiel)', qty: '1 Pack', category: 'Team', type: 'Power', status: '✅', notes: 'Baterai Kamera Kiel' },
  { id: 'ind-9', name: 'Memory Card 64GB & 128GB (Kiel)', qty: '2 Unit', category: 'Team', type: 'Storage', status: '✅', notes: 'SD Card Kiel' },
  { id: 'ind-10', name: 'Television Multiview Monitor (Darrel)', qty: '1 Unit', category: 'Team', type: 'Display', status: '✅', notes: 'Stage Display Timekeeper' },
  { id: 'ind-11', name: 'Power Adaptor TV + Memory 8GB (Darrel)', qty: '1 Pack', category: 'Team', type: 'Display', status: '✅', notes: 'Aksesoris TV Darrel' },
  { id: 'ind-12', name: 'Television Multiview Monitor (Kezia)', qty: '1 Unit', category: 'Team', type: 'Display', status: '✅', notes: 'Monitor Multiview Switcher' },
  { id: 'ind-13', name: 'Television Multiview Monitor (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Display', status: '✅', notes: 'Monitor Multiview Switcher' },
  { id: 'ind-14', name: 'iPhone 15 Mobile Documentation (Jennifer)', qty: '1 Unit', category: 'Team', type: 'Mobile', status: '✅', notes: 'Dokumentasi Reels & Medsos' },
  { id: 'ind-15', name: 'HDMI Cable 1.5M (Lio)', qty: '1 Unit', category: 'Team', type: 'Cable', status: '✅', notes: 'Patch Video Switcher' },
  { id: 'ind-16', name: 'HDMI to Micro HDMI Converter (Panitia)', qty: '2 Unit', category: 'Team', type: 'Adapter', status: '✅', notes: 'Converter Kamera Tambahan' },
  { id: 'ind-17', name: 'Terminal Cable XCH (Panitia)', qty: 'Multi', category: 'Team', type: 'Power', status: '✅', notes: 'Distribusi Kelistrikan Panitia' }
];

const crewDirectory = [
  { name: 'Alex', role: 'CAM 1 Operator (Main Broadcast)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm + HDMI 30M + Big Tripod + Splitter 4CH' },
  { name: 'Kiel 1', role: 'CAM 2 Operator (Wireless Live Roaming)', division: 'broadcast', gear: 'Sony ZV-E10 + 18-105mm + Hollyland Pyro H TX/RX + Small Lighting Stand' },
  { name: 'Dewi', role: 'CAM 3 Operator (Left Wing Stage)', division: 'broadcast', gear: 'Sony A6000 + 18-105mm + HDMI 10M + Big Tripod' },
  { name: 'Nathania', role: 'CAM 4 Operator (Right Wing Stage)', division: 'broadcast', gear: 'Sony A6000 + 16-50mm + HDMI 10M + Big Tripod' },
  { name: 'Wilfred', role: 'Video Switcher Master', division: 'engine', gear: 'Cinetreak Cinelive V1 + Television Multiview Monitor (Kezia/Jennifer)' },
  { name: 'Andreas', role: 'OBS Stream & Resolume Master', division: 'engine', gear: 'Laptop OBS Studio + Laptop Resolume Arena + Master DAC Ingest + Mixer 2' },
  { name: 'Rania', role: 'ProPresenter 1 (Lyrics & LED Sides)', division: 'media', gear: 'Laptop ProPresenter 1 + HDMI Splitter 4CH + HDMI Capture Card' },
  { name: 'Filia', role: 'ProPresenter 2 (Sermon / Center Ingest)', division: 'media', gear: 'Laptop ProPresenter 2 + HDMI 1.5M + HDMI Capture to Resolume' },
  { name: 'Darrel', role: 'Timekeeper Master (Stage Timer)', division: 'media', gear: 'Laptop ProPresenter 3 + HDMI 1M + Television Stage Monitor' },
  { name: 'Jordan / Yosua', role: 'Virtual Audio Mixer Operator', division: 'audio', gear: 'iPad / Laptop Virtual Mixer + WiFi UNNES-ID Network Control (Yamaha QL5)' },
  { name: 'Nico', role: 'Lead Photographer', division: 'doc', gear: 'Sony A6400 + 50mm Prime (OWL) + 32GB SD Card' },
  { name: 'Joel', role: 'Cinematic Videographer', division: 'doc', gear: 'Sony A6600 + Zeiss 24-70mm + DJI Ronin RS3 Gimbal' },
  { name: 'Jennifer', role: 'Social Media & Mobile Reels', division: 'doc', gear: 'iPhone 15 Mobile Rig + Live Posting Station' },
  { name: 'Kiel (Backup)', role: 'Technical Standby & Redundancy', division: 'engine', gear: 'Secondary Backup Station Laptop + Spare Accessories' }
];

const masterSignalRoutes = [
  {
    id: 'route-cam1',
    title: 'CAM 1 — Main Broadcast Stage (Alex)',
    pic: 'Alex',
    type: 'cam-route',
    steps: ['Sony ZV-E10 + 18-105mm F4 G', 'Micro-HDMI to HDMI Converter', 'HDMI Cable 20M / 30M High Speed', 'HDMI Splitter 4CH (UKK)', 'Cinetreak Cinelive V1 (Input 1)']
  },
  {
    id: 'route-cam2',
    title: 'CAM 2 — Wireless Roaming Stage (Kiel 1)',
    pic: 'Kiel 1',
    type: 'cam-route',
    steps: ['Sony ZV-E10 + 18-105mm F4 G', 'Micro-HDMI Cable 30CM', 'Hollyland Pyro H Transmitter (TX)', 'Wireless 5.8GHz Line-of-Sight Link', 'Pyro H Receiver (RX) + HDMI 1.5M', 'Cinetreak Cinelive V1 (Input 2)']
  },
  {
    id: 'route-cam3',
    title: 'CAM 3 — Left Wing Angle (Dewi)',
    pic: 'Dewi',
    type: 'cam-route',
    steps: ['Sony A6000 + 18-105mm F4 G', 'Micro-HDMI to HDMI Converter', 'HDMI Cable 10M High Speed (UKK/GKJ)', 'Cinetreak Cinelive V1 (Input 3)']
  },
  {
    id: 'route-cam4',
    title: 'CAM 4 — Right Wing Angle (Nathania)',
    pic: 'Nathania',
    type: 'cam-route',
    steps: ['Sony A6000 + 16-50mm Kit Lens', 'Micro-HDMI to HDMI Converter', 'HDMI Cable 10M High Speed (GKJ)', 'Cinetreak Cinelive V1 (Input 4)']
  },
  {
    id: 'route-switcher-tv',
    title: 'Switcher Multiview to Television Monitor',
    pic: 'Wilfred',
    type: 'media-route',
    steps: ['Cinetreak Cinelive V1 (Multiview Out)', 'HDMI to HDMI Cable 1M', 'Television Monitor (Kezia / Jennifer)']
  },
  {
    id: 'route-switcher-obs',
    title: 'Switcher Program Ingest to OBS Live Stream',
    pic: 'Andreas & Wilfred',
    type: 'media-route',
    steps: ['Cinetreak Cinelive V1 (USB-C Video Out)', 'USB-A to USB-C High Speed Cable', 'Laptop OBS Studio (UVC Video Ingest)', 'RTMP Live Broadcast Output']
  },
  {
    id: 'route-foh-audio',
    title: 'Main Audio FOH & OBS Streaming Pipeline',
    pic: 'UNNES FOH & Andreas',
    type: 'audio-route',
    steps: ['Mixer Yamaha QL5 (Auditorium UNNES)', 'Dual XLR Female to Male 10M (UKK) + 3M (GIA)', 'Mixer NewBaxs CT80S Submixer (GIA)', 'USB Data Out', 'Laptop OBS Studio (Streaming Audio Ingest)']
  },
  {
    id: 'route-vm-audio',
    title: 'Virtual Wireless Audio Mixing Network',
    pic: 'Jordan & Yosua',
    type: 'audio-route',
    steps: ['Mixer Yamaha QL5 (Auditorium UNNES)', 'Auditorium Local WiFi (UNNES-ID)', 'iPad Virtual Mixer 1 (Jennifer) & Laptop Virtual Mixer 2 (Andreas)']
  },
  {
    id: 'route-resolume-dac',
    title: 'Resolume Background Audio Ingest to FOH',
    pic: 'Andreas',
    type: 'audio-route',
    steps: ['Laptop Resolume Arena', 'USB-C DAC Hi-Res (Hanason AB17X / Oraimo)', 'Jack 3.5mm Aux Line UNNES', 'Mixer Yamaha QL5 Main FOH']
  },
  {
    id: 'route-pro1-sides',
    title: 'ProPresenter 1 to LED Left, Right & Back',
    pic: 'Rania',
    type: 'media-route',
    steps: ['Laptop ProPresenter 1 (Lyrics / Verse)', 'HDMI to HDMI Cable 1.5M', 'HDMI Splitter 4CH (UKK)', 'HDMI Video Capture Card', 'Nova Video Processor', 'LED Screen (Left, Right & Back)']
  },
  {
    id: 'route-pro2-resolume',
    title: 'ProPresenter 2 Sermon to Resolume Arena Ingest',
    pic: 'Filia & Andreas',
    type: 'media-route',
    steps: ['Laptop ProPresenter 2 (Sermon PPT / Quotes)', 'HDMI to HDMI Cable 1.5M', 'HDMI Video Capture Card', 'Laptop Resolume Arena (Live Ingest Layer)']
  },
  {
    id: 'route-resolume-center',
    title: 'Resolume Arena to Main Center LED Screen',
    pic: 'Andreas',
    type: 'media-route',
    steps: ['Laptop Resolume Arena (Master Visual Canvas)', 'HDMI Cable 15M High Speed (GKJ)', 'HDMI Video Capture / Interface', 'NovaStar Video Processor', 'LED Screen Center Main']
  },
  {
    id: 'route-pro3-timekeeper',
    title: 'ProPresenter 3 to Stage TV Timekeeper (Separate)',
    pic: 'Darrel',
    type: 'media-route',
    steps: ['Laptop ProPresenter 3 (Timekeeper Timer)', 'HDMI to HDMI Cable 1M', 'Stage Television Monitor (Darrel)']
  },
  {
    id: 'route-power-dist',
    title: 'Master Electrical Power Distribution',
    pic: 'Andreas, UKK & Panitia',
    type: 'power-route',
    steps: ['Gedung Auditorium Main AC Wall Outlets', 'Heavy Duty Terminal Cable XCH (UKK x Andreas x Panitia)', 'Sub-terminal FOH & Broadcast Deck', 'Stabilized Adapters for Switcher, Mixers & Laptops']
  }
];

const masterRundownCues = [
  {
    phase: '1. PRE-IBADAH (OPEN GATE)',
    title: 'Background Music & Loop Video Profil UKK',
    destinations: ['🔊 Playlist Lagu Rohani (Sound System Main)', '🖥️ Loop Video UKK Profile (LED Center)', '🖥️ After Movie IP25 & IN25 (LED Center)'],
    pic: 'Andreas & Tim Audio'
  },
  {
    phase: '2. OPENING EVENT',
    title: 'Video Opening Countdown & Sambutan Bu Grave',
    destinations: ['🖥️ Video Opening (LED Center)', '🖥️ Video Sambutan Bu Grave (LED Center + Left + Right)'],
    pic: 'Filia & Rania'
  },
  {
    phase: '3. PRAISE & WORSHIP',
    title: 'Background Tema Motion & Lirik Lagu Pujian',
    destinations: ['🖥️ Background Tema (Resolume / LED Center)', '🔊 Background Lagu (Sound System)', '🖥️ Lirik Lagu ProPresenter 1 (LED Tengah + Kiri + Kanan)'],
    pic: 'Rania (Pro1) & Andreas (Resolume)'
  },
  {
    phase: '4. PRAISE INTERLUDE',
    title: 'Video Generation Clip & Video Transisi',
    destinations: ['🖥️ Video Generation Clip (LED Center + Left + Right)', '🔊 Sound System Audio FX'],
    pic: 'Filia & Tim Media'
  },
  {
    phase: '5. SERMON & AYAT FIRMAN',
    title: 'Slide PPT Khotbah, Ayat Alkitab & Quote Pembicara',
    destinations: ['🖥️ Slide PPT Khotbah (LED Center + Left + Right)', '🖥️ Ayat Pembicara & Quotes (ProPresenter 2)', '📺 Stage Timer Timekeeper (TV Darrel)'],
    pic: 'Filia (Pro2) & Darrel (Timer)'
  },
  {
    phase: '6. PERSEMBAHAN & WARTA',
    title: 'Barcode QRIS Persembahan, UKK News & Pokok Doa',
    destinations: ['🖥️ Tampilan Barcode QRIS Persembahan (LED All)', '🖥️ Slide UKK News & Info Kegiatan (LED All)', '🖥️ Pokok Doa Jemaat (LED All)'],
    pic: 'Rania & Filia'
  },
  {
    phase: '7. POST-IBADAH (CLOSE GATE)',
    title: 'Outro Music & Prosedur Usung-Usung (Teardown)',
    destinations: ['📦 Pengecekan Fisik 80+ Item sesuai Checklist Master', '🔌 SOP Safety Unplug Listrik & Kabel Video', '🚚 Pengelompokan Unit Pinjaman ke Box Pemilik'],
    pic: 'Seluruh Kru Produksi'
  }
];

// Switcher Simulation State
const cameraFeeds = {
  'CAM 1': { name: 'CAM 1 — Main Stage Wide/Medium', pic: 'Alex', gear: 'Sony ZV-E10 + 18-105mm F4' },
  'CAM 2': { name: 'CAM 2 — Wireless Roaming Stage', pic: 'Kiel 1', gear: 'Sony ZV-E10 + Pyro H Wireless' },
  'CAM 3': { name: 'CAM 3 — Left Wing Angle', pic: 'Dewi', gear: 'Sony A6000 + 18-105mm F4' },
  'CAM 4': { name: 'CAM 4 — Right Wing Angle', pic: 'Nathania', gear: 'Sony A6000 + 16-50mm Kit' }
};

const paneTitles = {
  'overview': { tag: 'COMMAND CENTER / ARSITEKTUR', title: 'Dashboard Operasional Master' },
  'switcher': { tag: 'COMMAND CENTER / VIDEO SWITCHER', title: 'Virtual Switcher & Multiview Simulator' },
  'audio': { tag: 'COMMAND CENTER / AUDIO CONSOLE', title: 'Virtual Audio Desk & FOH Ingest' },
  'routing': { tag: 'INFRASTRUCTURE / SIGNAL FLOW', title: 'Detail Rute Sinyal & Kelistrikan' },
  'crew': { tag: 'INFRASTRUCTURE / CREW DIRECTORY', title: 'Roster Personel & Penugasan Gear' },
  'inventory': { tag: 'INFRASTRUCTURE / EQUIPMENT LOG', title: 'Master Inventaris & Checklist Peminjaman' },
  'rundown': { tag: 'OPERATIONS / MEDIA ASSETS', title: 'Rundown & Media Asset Cue Sheet' },
  'sop': { tag: 'OPERATIONS / SAFETY GUIDELINE', title: 'Standar Operasional & Keamanan (SOP)' },
  'raw': { tag: 'SPECIFICATIONS / RAW TXT', title: 'Raw TXT & Blueprint Inspector' }
};

let currentPgm = 'CAM 1';
let currentPvw = 'CAM 2';

// Application State
let activeTab = 'overview';
let activeCategoryFilter = 'all';
let activeStatusFilter = 'all';
let activeCrewFilter = 'all';
let searchQuery = '';
let checkedItems = JSON.parse(localStorage.getItem('ip26_master_checked_v4') || '{}');

// Audio Channel Strip Values
const audioChannels = [
  { id: 'ch1', name: 'Preacher Mic', source: 'Yamaha QL5 FOH (XLR)', level: 80, isMuted: false },
  { id: 'ch2', name: 'Worship Band', source: 'Stage Box XLR (UNNES)', level: 75, isMuted: false },
  { id: 'ch3', name: 'Resolume BGM', source: 'USB-C DAC Hi-Res', level: 65, isMuted: false },
  { id: 'ch4', name: 'OBS Stream Mix', source: 'NewBaxs CT80S USB', level: 85, isMuted: false }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupSidebarAndTabs();
  setupClock();
  setupSwitcherSimulator();
  setupAudioDesk();
  renderRoutes();
  renderCrew();
  renderInventory();
  renderRundown();
  updateProgress();
  setupEventListeners();
});

// Live Clock
function setupClock() {
  const clockEl = document.getElementById('live-clock');
  function update() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('id-ID', { hour12: false }) + ' WIB';
    }
  }
  update();
  setInterval(update, 1000);
}

// Navigation & Tab Switching
function setupSidebarAndTabs() {
  const navBtns = document.querySelectorAll('.nav-btn, .nav-link-btn');
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const menuToggle = document.getElementById('menu-toggle-btn');

  function toggleSidebar(open) {
    if (!sidebar) return;
    if (typeof open === 'boolean') {
      sidebar.classList.toggle('open', open);
      if (backdrop) backdrop.classList.toggle('active', open);
    } else {
      sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('active', sidebar.classList.contains('open'));
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleSidebar());
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => toggleSidebar(false));
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      activeTab = target;

      document.querySelectorAll('.tab-pane').forEach(content => {
        content.classList.remove('active');
      });
      const activeContent = document.getElementById(`tab-${target}`);
      if (activeContent) activeContent.classList.add('active');

      // Update Header Breadcrumbs
      if (paneTitles[target]) {
        const tagEl = document.getElementById('current-pane-tag');
        const titleEl = document.getElementById('current-pane-title');
        if (tagEl) tagEl.textContent = paneTitles[target].tag;
        if (titleEl) titleEl.textContent = paneTitles[target].title;
      }

      // Close mobile sidebar on selection
      if (window.innerWidth <= 1024) {
        toggleSidebar(false);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Switcher Simulator Logic
function setupSwitcherSimulator() {
  updateSwitcherDisplays();

  document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPgm = btn.getAttribute('data-pgm-btn');
      updateSwitcherDisplays();
    });
  });

  document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPvw = btn.getAttribute('data-pvw-btn');
      updateSwitcherDisplays();
    });
  });

  const cutBtn = document.getElementById('btn-cut');
  if (cutBtn) {
    cutBtn.addEventListener('click', () => {
      const temp = currentPgm;
      currentPgm = currentPvw;
      currentPvw = temp;
      updateSwitcherDisplays();
    });
  }

  const autoBtn = document.getElementById('btn-auto');
  if (autoBtn) {
    autoBtn.addEventListener('click', () => {
      const temp = currentPgm;
      currentPgm = currentPvw;
      currentPvw = temp;
      updateSwitcherDisplays();
    });
  }
}

function updateSwitcherDisplays() {
  const pgmTitle = document.getElementById('pgm-screen-title');
  const pgmTitleBig = document.getElementById('pgm-screen-title-big');
  const pgmInfo = document.getElementById('pgm-screen-info');
  const pvwTitle = document.getElementById('pvw-screen-title');
  const pvwTitleBig = document.getElementById('pvw-screen-title-big');
  const pvwInfo = document.getElementById('pvw-screen-info');

  if (pgmTitle && cameraFeeds[currentPgm]) {
    pgmTitle.textContent = currentPgm;
    if (pgmTitleBig) pgmTitleBig.textContent = `${currentPgm} — ON AIR`;
    if (pgmInfo) pgmInfo.textContent = `${cameraFeeds[currentPgm].name} — PIC: ${cameraFeeds[currentPgm].pic}`;
  }

  if (pvwTitle && cameraFeeds[currentPvw]) {
    pvwTitle.textContent = currentPvw;
    if (pvwTitleBig) pvwTitleBig.textContent = `${currentPvw} — PREVIEW`;
    if (pvwInfo) pvwInfo.textContent = `${cameraFeeds[currentPvw].name} — PIC: ${cameraFeeds[currentPvw].pic}`;
  }

  // Update Buttons
  document.querySelectorAll('[data-pgm-btn]').forEach(btn => {
    if (btn.getAttribute('data-pgm-btn') === currentPgm) {
      btn.classList.add('pgm-active');
    } else {
      btn.classList.remove('pgm-active');
    }
  });

  document.querySelectorAll('[data-pvw-btn]').forEach(btn => {
    if (btn.getAttribute('data-pvw-btn') === currentPvw) {
      btn.classList.add('pvw-active');
    } else {
      btn.classList.remove('pvw-active');
    }
  });
}

// Audio Desk Simulation
function setupAudioDesk() {
  const deskContainer = document.getElementById('audio-deck-container');
  if (!deskContainer) return;

  deskContainer.innerHTML = audioChannels.map(ch => `
    <div class="channel-strip" id="strip-${ch.id}">
      <div class="channel-name">${ch.name}</div>
      <div class="channel-source">${ch.source}</div>
      <div class="vu-meter-bar">
        <div class="vu-fill" id="vu-${ch.id}"></div>
      </div>
      <input type="range" class="fader-slider" id="fader-${ch.id}" min="0" max="100" value="${ch.level}" />
      <button class="fader-mute-btn ${ch.isMuted ? 'muted' : ''}" id="mute-${ch.id}">
        ${ch.isMuted ? 'MUTED' : 'MUTE'}
      </button>
    </div>
  `).join('');

  // Event Listeners for Faders & Mutes
  audioChannels.forEach(ch => {
    const fader = document.getElementById(`fader-${ch.id}`);
    const mute = document.getElementById(`mute-${ch.id}`);

    if (fader) {
      fader.addEventListener('input', (e) => {
        ch.level = parseInt(e.target.value);
        updateVUMeter(ch);
      });
    }

    if (mute) {
      mute.addEventListener('click', () => {
        ch.isMuted = !ch.isMuted;
        mute.textContent = ch.isMuted ? 'MUTED' : 'MUTE';
        if (ch.isMuted) {
          mute.classList.add('muted');
        } else {
          mute.classList.remove('muted');
        }
        updateVUMeter(ch);
      });
    }

    updateVUMeter(ch);
  });

  // Dynamic fluctuation interval
  setInterval(() => {
    audioChannels.forEach(ch => {
      if (!ch.isMuted) {
        const jitter = (Math.random() * 12) - 6;
        const currentHeight = Math.max(0, Math.min(100, ch.level + jitter));
        const vuEl = document.getElementById(`vu-${ch.id}`);
        if (vuEl) vuEl.style.height = `${currentHeight}%`;
      }
    });
  }, 250);
}

function updateVUMeter(ch) {
  const vuEl = document.getElementById(`vu-${ch.id}`);
  if (!vuEl) return;
  if (ch.isMuted) {
    vuEl.style.height = '0%';
  } else {
    vuEl.style.height = `${ch.level}%`;
  }
}

// Render Signal Routing Cards
function renderRoutes() {
  const container = document.getElementById('routes-container');
  if (!container) return;

  container.innerHTML = masterSignalRoutes.map(route => `
    <div class="route-card ${route.type}">
      <div class="route-top">
        <h4 class="route-title">${route.title}</h4>
        <span class="pic-badge">PIC: ${route.pic}</span>
      </div>
      <div class="signal-flow">
        ${route.steps.map((step, idx) => `
          <div class="flow-step">
            <span class="step-num">#${idx + 1}</span>
            <span>${step}</span>
          </div>
          ${idx < route.steps.length - 1 ? '<div class="flow-arrow">▼</div>' : ''}
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Crew Grid
function renderCrew() {
  const container = document.getElementById('crew-container');
  if (!container) return;

  const filtered = activeCrewFilter === 'all' 
    ? crewDirectory 
    : crewDirectory.filter(c => c.division === activeCrewFilter);

  container.innerHTML = filtered.map(crew => {
    const initials = crew.name.substring(0, 2).toUpperCase();
    return `
      <div class="crew-card">
        <div class="crew-profile">
          <div class="crew-avatar">${initials}</div>
          <div>
            <div class="crew-name">${crew.name}</div>
            <div class="crew-role">${crew.role}</div>
          </div>
        </div>
        <div class="crew-gear-box">
          <b>Gear Pegangan:</b><br/>${crew.gear}
        </div>
      </div>
    `;
  }).join('');
}

// Render Master Inventory Table
function renderInventory() {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  const filtered = masterInventory.filter(item => {
    const matchesCategory = activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
    const matchesStatus = activeStatusFilter === 'all' || item.status === activeStatusFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2.5rem; color: var(--text-dim);">Tidak ada item yang sesuai dengan filter atau pencarian.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isChecked = !!checkedItems[item.id];
    return `
      <tr style="${isChecked ? 'opacity: 0.55; text-decoration: line-through;' : ''}">
        <td style="width: 44px; text-align: center;">
          <input type="checkbox" class="item-check-input" data-id="${item.id}" ${isChecked ? 'checked' : ''} />
        </td>
        <td style="width: 50px; text-align: center;">
          <span class="status-symbol">${item.status}</span>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-high);">${item.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${item.notes || ''}</div>
        </td>
        <td><span class="source-tag highlight">${item.qty}</span></td>
        <td><span class="source-tag">${item.category}</span></td>
        <td><span class="source-tag" style="color: var(--text-primary);">${item.type}</span></td>
      </tr>
    `;
  }).join('');

  // Checkbox Event Listeners
  tbody.querySelectorAll('.item-check-input').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      checkedItems[id] = e.target.checked;
      localStorage.setItem('ip26_master_checked_v4', JSON.stringify(checkedItems));
      renderInventory();
      updateProgress();
    });
  });
}

// Render Master Rundown Cues
function renderRundown() {
  const container = document.getElementById('rundown-container');
  if (!container) return;

  container.innerHTML = masterRundownCues.map((cue, idx) => `
    <div class="cue-card ${idx === 1 ? 'highlight-cue' : ''}">
      <div>
        <div class="cue-phase-tag">${cue.phase}</div>
        <div class="cue-headline">${cue.title}</div>
        <div class="cue-destinations">
          ${cue.destinations.map(d => `<span class="cue-pill">${d}</span>`).join('')}
        </div>
      </div>
      <div class="pic-badge">PIC: ${cue.pic}</div>
    </div>
  `).join('');
}

// Progress Bar Calculation
function updateProgress() {
  const total = masterInventory.length;
  const checkedCount = Object.keys(checkedItems).filter(k => checkedItems[k]).length;
  const pct = Math.round((checkedCount / total) * 100);

  const fillEl = document.getElementById('progress-bar-fill');
  const countEl = document.getElementById('progress-count-text');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (countEl) countEl.textContent = `${checkedCount} / ${total} (${pct}%) Siap`;
}

// Setup Interactive Filters & Actions
function setupEventListeners() {
  // Category Filter
  document.querySelectorAll('[data-cat-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-cat-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-cat-filter');
      renderInventory();
    });
  });

  // Status Filter
  document.querySelectorAll('[data-status-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-status-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStatusFilter = btn.getAttribute('data-status-filter');
      renderInventory();
    });
  });

  // Crew Filter
  document.querySelectorAll('[data-crew-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-crew-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCrewFilter = btn.getAttribute('data-crew-filter');
      renderCrew();
    });
  });

  // Search Input
  const searchInput = document.getElementById('inventory-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderInventory();
    });
  }

  // Reset Checklist Button
  const resetBtn = document.getElementById('reset-checklist-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin me-reset semua checklist perlengkapan?')) {
        checkedItems = {};
        localStorage.removeItem('ip26_master_checked_v4');
        renderInventory();
        updateProgress();
      }
    });
  }

  // Print Button
  const printBtn = document.getElementById('print-manifest-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// Copy Raw Text Helper
function copyRawText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    alert('Teks berhasil disalin ke clipboard!');
  }).catch(() => {
    alert('Gagal menyalin teks.');
  });
}
