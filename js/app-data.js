/**
 * IP26 Production & Broadcast Blueprint - Master Data Store
 * Source: ip26_pro1.txt, ip26_pro2.txt, ip26_route.txt, README.md
 */

export const EVENT_METADATA = {
  name: "Ibadah Perdana UKK UNNES 2026",
  subtitle: "Production, Broadcast & Engineering Blueprint",
  year: "2026",
  venue: "Gedung Auditorium Universitas Negeri Semarang (UNNES)",
  organizer: "Panitia Ibadah Perdana UKK UNNES 2026",
  lead: "Andreas & Media Production Team",
  status: "OPERATIONAL READY",
  liveUrl: "https://zzdree.github.io/ip26-production/",
  repoUrl: "https://github.com/zzdree/ip26-production",
  systemStacks: [
    "Cinetreak Cinelive V1",
    "OBS Studio",
    "Resolume Arena",
    "ProPresenter 7",
    "Yamaha QL5",
    "NewBaxs CT80S",
    "Hollyland Pyro H Wireless",
    "NovaStar LED Processor"
  ]
};

export const CREW_ROLES = [
  {
    id: "cam-1",
    name: "Alex",
    division: "broadcast",
    role: "CAM 1 Operator (Main Center)",
    device: "Sony ZV-E10 + Lens 18-105mm F4 G",
    contact: "Intercom CH 1",
    taskDescription: "Tethered Main Long-shot & Stage Master framing. Sinyal dikirim via HDMI 30M/20M splitter line.",
    badge: "CAM 1"
  },
  {
    id: "cam-2",
    name: "Kiel 1",
    division: "broadcast",
    role: "CAM 2 Operator (Roving Wireless)",
    device: "Sony ZV-E10 + Lens 18-105mm F4 G + Hollyland Pyro H",
    contact: "Intercom CH 1",
    taskDescription: "Wireless roving camera untuk close-up WL, Singer, & crowd immersion. Menggunakan Hollyland Pyro H TX.",
    badge: "CAM 2"
  },
  {
    id: "cam-3",
    name: "Dewi",
    division: "broadcast",
    role: "CAM 3 Operator (Left Stage Wing)",
    device: "Sony A6000 + Lens 18-105mm F4 G",
    contact: "Intercom CH 1",
    taskDescription: "Stage left medium & profile shot, speaker cross-angle framing via HDMI 10M.",
    badge: "CAM 3"
  },
  {
    id: "cam-4",
    name: "Nathania",
    division: "broadcast",
    role: "CAM 4 Operator (Right Stage Wing)",
    device: "Sony A6000 + Lens 16-50mm Kit",
    contact: "Intercom CH 1",
    taskDescription: "Stage right wide angle, musical instrument coverage & altar wide view via HDMI 10M.",
    badge: "CAM 4"
  },
  {
    id: "pho-nico",
    name: "Nico",
    division: "docs",
    role: "Lead Photographer",
    device: "Sony A6400 + Sony 50mm Prime (OWL)",
    contact: "Intercom CH 2",
    taskDescription: "High-resolution photo coverage, candid moments, stage worship, & VIP portraits (terpisah dari broadcast).",
    badge: "PHOTO"
  },
  {
    id: "vid-joel",
    name: "Joel",
    division: "docs",
    role: "Cinematic Videographer",
    device: "Sony A6600 + Zeiss 24-70mm + DJI Ronin RS3",
    contact: "Intercom CH 2",
    taskDescription: "Cinematic aftermovie footage, 4K b-roll, gimbal tracking shots (terpisah dari broadcast).",
    badge: "CINEMA"
  },
  {
    id: "hp-jennifer",
    name: "Jennifer",
    division: "docs",
    role: "Social Media / Mobile Reels",
    device: "iPhone 15",
    contact: "Intercom CH 2",
    taskDescription: "Real-time Instagram Stories, Reels quick updates, & behind-the-scenes broadcast clips.",
    badge: "SOCIAL"
  },
  {
    id: "eng-wilfred",
    name: "Wilfred",
    division: "engine",
    role: "Video Switcher Operator",
    device: "Cinetreak Cinelive V1 + TV Multiview",
    contact: "Intercom Master",
    taskDescription: "Mengontrol PGM & PVW bus 4 kamera, transisi cut/mix, PiP, serta sinkronisasi visual ke OBS & LED.",
    badge: "SWITCHER"
  },
  {
    id: "eng-andreas",
    name: "Andreas",
    division: "engine",
    role: "Technical Director / OBS & Resolume Lead",
    device: "Laptop OBS Studio + Laptop Resolume Arena",
    contact: "Intercom Master",
    taskDescription: "Master control broadcast livestream, routing LED mapping Center, audio pipeline & electrical safety.",
    badge: "LEAD ENG"
  },
  {
    id: "pro-rania",
    name: "Rania",
    division: "media",
    role: "ProPresenter 1 Operator (Stage LED)",
    device: "Laptop ProPresenter 1 + HDMI Capture",
    contact: "Intercom CH 3",
    taskDescription: "Operator lirik lagu, ayat firman, slide khotbah & video sambutan ke LED Sayap (Left/Right/Back).",
    badge: "PRO 1"
  },
  {
    id: "pro-filia",
    name: "Filia",
    division: "media",
    role: "ProPresenter 2 Operator (Live Graphics)",
    device: "Laptop ProPresenter 2 + Capture Card ke Resolume",
    contact: "Intercom CH 3",
    taskDescription: "Lower-third graphics, dynamic title overlay, scripture overlay untuk input Resolume Arena.",
    badge: "PRO 2"
  },
  {
    id: "pro-darrel",
    name: "Darrel",
    division: "media",
    role: "Timekeeper & ProPresenter 3",
    device: "Laptop ProPresenter 3 + TV Dedicated",
    contact: "Intercom CH 3",
    taskDescription: "Stage timer, countdown open gate, speaker time limits via dedicated stage TV (terpisah).",
    badge: "TIME"
  },
  {
    id: "vm-jordan",
    name: "Jordan / Yosua",
    division: "audio",
    role: "Virtual Mixer 1 & 2 Operators",
    device: "iPad & Laptop Virtual Mixer (WiFi UNNES-ID)",
    contact: "Intercom CH 4",
    taskDescription: "Remote mixing monitor FOH Yamaha QL5, in-ear monitor balances, & broadcast aux mix feed.",
    badge: "VM AUDIO"
  },
  {
    id: "eng-bayu",
    name: "Bayu",
    division: "engine",
    role: "Resolume Co-Operator",
    device: "Laptop Resolume Arena Station",
    contact: "Intercom CH 3",
    taskDescription: "Background loops, visual FX, visual mapping ke LED Center NovaStar processor.",
    badge: "RESOLUME"
  },
  {
    id: "eng-backup",
    name: "Kiel 1",
    division: "engine",
    role: "Backup Station & Power Guard",
    device: "Laptop Backup Station",
    contact: "Intercom Master",
    taskDescription: "Secondary streaming backup, contingency hot-swap station & cable integrity guard.",
    badge: "BACKUP"
  }
];

export const BROADCAST_CAMERAS = [
  {
    id: "CAM 1",
    operator: "Alex",
    model: "Sony ZV-E10",
    lens: "18-105mm F4 G OSS",
    accessories: [
      "Tripod Camera Big",
      "HDMI to Micro HDMI Converter",
      "HDMI Cable 20M",
      "HDMI Splitter 4CH",
      "Power Adaptor SPL",
      "Terminal Cable XCH",
      "HDMI Cable 30M",
      "Cinetreak Cinelive V1 Input 1"
    ],
    status: "Verified ✅",
    signalType: "1080p60 HDMI Long Run",
    position: "FOH Center Deck"
  },
  {
    id: "CAM 2",
    operator: "Kiel 1",
    model: "Sony ZV-E10",
    lens: "18-105mm F4 G OSS",
    accessories: [
      "HDMI to Micro HDMI Cable 30CM",
      "Hollyland Pyro H Transmitter (TX)",
      "Hollyland Pyro H Receiver (RX)",
      "Stand Lighting Small",
      "HDMI Cable 1.5M",
      "Cinetreak Cinelive V1 Input 2"
    ],
    status: "Verified ✅",
    signalType: "5.8GHz Zero-Latency Wireless",
    position: "Roving Altar & Stage Front"
  },
  {
    id: "CAM 3",
    operator: "Dewi",
    model: "Sony A6000",
    lens: "18-105mm F4 G OSS",
    accessories: [
      "Tripod Camera Big",
      "Micro HDMI to HDMI Converter",
      "HDMI Cable 10M",
      "Cinetreak Cinelive V1 Input 3"
    ],
    status: "Verified ✅",
    signalType: "1080p60 Micro HDMI to Full HDMI",
    position: "Wing Left (House Left)"
  },
  {
    id: "CAM 4",
    operator: "Nathania",
    model: "Sony A6000",
    lens: "16-50mm Kit OSS",
    accessories: [
      "Tripod Camera Big",
      "Micro HDMI to HDMI Converter",
      "HDMI Cable 10M",
      "Cinetreak Cinelive V1 Input 4"
    ],
    status: "Verified ✅",
    signalType: "1080p60 Micro HDMI to Full HDMI",
    position: "Wing Right (House Right)"
  }
];

export const ROUTING_PIPELINES = [
  {
    id: "route-elec",
    title: "1. Electrical Distribution System",
    category: "power",
    tag: "Andreas x UKK x Panitia",
    status: "Verified ✅",
    summary: "Distribusi daya master AC 220V dengan proteksi grounding & terminal modular XCH.",
    chain: [
      "Master Auditorium AC Mains",
      "Terminal Cable XCH (Panitia)",
      "Terminal Cable XCH (UKK)",
      "Terminal Cable XCH (Andreas)",
      "Regulated Multi-station Power Bus"
    ],
    details: "Menghubungkan seluruh sistem engine, switcher, monitor TV, laptop OBS, Resolume, ProPresenter, dan audio mixer secara terisolasi guna mencegah ground-loop noise."
  },
  {
    id: "route-sw-tv",
    title: "2. Switcher to TV Multiview",
    category: "video",
    tag: "OWL x Kezia/Jennifer",
    status: "Verified ✅",
    summary: "Dedicated hardware multiview monitoring untuk Video Director & Switcher Operator.",
    chain: [
      "Terminal Cable XCH",
      "Cinetreak Cinelive V1",
      "Power Adaptor MIX",
      "HDMI to HDMI Cable 1M",
      "Television (Kezia/Jennifer)",
      "Power Adaptor TV"
    ],
    details: "Menampilkan 4 input kamera (CAM 1-4), Preview Bus, Program Bus, Audio VU Meters, dan Status Record/Stream."
  },
  {
    id: "route-sw-spl",
    title: "3. Switcher PGM Distribution Splitter",
    category: "video",
    tag: "OWL x UKK",
    status: "Verified ✅",
    summary: "Distribusi sinyal Program (PGM) aktif dari Cinetreak V1 ke stage LED processor & OBS.",
    chain: [
      "Terminal Cable XCH",
      "Cinetreak Cinelive V1 (PGM Out)",
      "Power Adaptor MIX",
      "HDMI Splitter 4CH",
      "Power Adaptor SPL"
    ],
    details: "Splitter 4CH aktif membagi sinyal HDMI PGM tanpa distorsi ke ProPresenter 1 (LED Sayap), Resolume (LED Center), dan recording."
  },
  {
    id: "route-sw-obs",
    title: "4. Switcher USB-C Bridge to OBS Studio",
    category: "video",
    tag: "OWL x Andreas x OBS",
    status: "Verified ✅",
    summary: "Direct digital video stream capture ke Master Streaming Engine.",
    chain: [
      "Terminal Cable XCH",
      "Cinetreak Cinelive V1 (USB-C UVC Out)",
      "Power Adaptor MIX",
      "USB-A to USB-C 3.0 Data Cable",
      "Laptop OBS Studio",
      "Power Adaptor LTP"
    ],
    details: "Sinyal video 1080p60 murni tanpa memerlukan external capture card tambahan, langsung dikenali sebagai video capture device di OBS Studio."
  },
  {
    id: "route-aud-pipe",
    title: "5. Dual Mixer Audio Master Pipeline",
    category: "audio",
    tag: "UNNES x UKK x Andreas x GIA x OBS",
    status: "Verified ✅",
    summary: "Integrasi FOH Yamaha QL5 dan Broadcast Sub-mixer NewBaxs CT80S.",
    chain: [
      "FOH Mixer Yamaha QL5 (UNNES)",
      "XLR Female to Male 10M 2X (UKK)",
      "XLR Female to Male 3M 2X (GIA)",
      "Broadcast Sub-Mixer NewBaxs CT80S (GIA)",
      "USB-A to USB-C Audio Interface Cable",
      "Laptop OBS Studio",
      "Power Adaptor LTP"
    ],
    details: "Yamaha QL5 mengirimkan stereo matrix/aux send terpisah untuk broadcast, diterima di NewBaxs CT80S untuk fine-tuning EQ, dynamic compression, dan disalurkan via digital USB ke OBS."
  },
  {
    id: "route-pro1-led",
    title: "6. ProPresenter 1 to LED Wing (Left, Right, Back)",
    category: "media",
    tag: "UKK x Andreas x OWL x PRO1 x UNNES",
    status: "Verified ✅",
    summary: "Output lirik, presentasi, dan live camera feed ke LED sayap auditorium.",
    chain: [
      "HDMI Splitter 4CH (PGM Feed)",
      "Power Adaptor SPL",
      "HDMI to HDMI Cable 1.5M",
      "HDMI Video Capture (OWL)",
      "Laptop ProPresenter 1 (Rania)",
      "Power Adaptor LTP",
      "HDMI UNNES Line",
      "Auditorium Video Processor",
      "LED Stage Left, Right & Altar Back"
    ],
    details: "ProPresenter 1 menerima input camera switcher via capture card untuk live video layering dengan teks lagu / firman dan mengirimkannya ke video processor auditorium."
  },
  {
    id: "route-pro2-res",
    title: "7. ProPresenter 2 to Resolume Arena Bridge",
    category: "media",
    tag: "PRO2 x Andreas x OWL x RES",
    status: "Verified ✅",
    summary: "Lower-third graphics & dynamic overlay injection ke VJ engine.",
    chain: [
      "Laptop ProPresenter 2 (Filia)",
      "Power Adaptor LTP",
      "HDMI to HDMI Cable 1.5M",
      "HDMI Video Capture Card",
      "Laptop Resolume Arena (Andreas/Bayu)",
      "Power Adaptor LTP"
    ],
    details: "ProPresenter 2 memproses alpha channel / chroma key lirik dan title pembicara, disalurkan ke Resolume Arena sebagai live visual layer."
  },
  {
    id: "route-res-center",
    title: "8. Resolume Arena to LED Center Main",
    category: "media",
    tag: "Andreas x GKJ x RES x GKJ x ABON x UNNES",
    status: "Verified ✅",
    summary: "Master visual output ke Megascreen LED Center Auditorium.",
    chain: [
      "HDMI Splitter 4CH (PGM Feed)",
      "Power Adaptor SPL",
      "HDMI to HDMI Cable 1.5M",
      "HDMI Capture Card (ABON)",
      "Laptop Resolume Arena (Andreas)",
      "Power Adaptor LTP",
      "HDMI Cable 15M (GKJ)",
      "HDMI Capture Card (ABON)",
      "NovaStar LED Controller",
      "Auditorium Video Processor",
      "LED Stage Center (Megascreen)"
    ],
    details: "Resolume Arena menggabungkan Loop Video, Opening Video, Camera PGM, dan ProPresenter 2 Graphics ke resolusi native NovaStar LED Center."
  },
  {
    id: "route-res-dac",
    title: "9. Resolume Digital Audio Out to FOH Mixer",
    category: "audio",
    tag: "RES x Andreas x UNNES",
    status: "Verified ✅",
    summary: "High-fidelity audio playback dari video profile, opening video, & background music.",
    chain: [
      "Laptop Resolume Arena (Andreas)",
      "Power Adaptor LTP",
      "USB-C DAC Hanason AB17X / Oraimo OAA310",
      "Jack 3.5mm to 6.35mm UNNES",
      "Mixer Yamaha QL5 Stereo Channel"
    ],
    details: "Menggunakan dedicated lossless USB DAC 24-bit/96kHz untuk menghasilkan audio video playback yang jernih tanpa distorsi noise kartu suara internal laptop."
  },
  {
    id: "route-vm1",
    title: "10. Virtual Mixer 1 (iPad Remote)",
    category: "audio",
    tag: "UNNES x Jennifer",
    status: "Verified ✅",
    summary: "Kontrol audio nirkabel panggung untuk Sound Engineer & PIC Audio.",
    chain: [
      "Mixer Yamaha QL5",
      "Auditorium Access Point (WiFi UNNES-ID)",
      "iPad Stage Monitor (Virtual Mixer 1)"
    ],
    details: "Aplikasi Yamaha Stagemix pada iPad memungkinkan penyesuaian fader in-ear monitor musisi dan vocal balances langsung dari area altar panggung."
  },
  {
    id: "route-vm2",
    title: "11. Virtual Mixer 2 (Laptop FOH Control)",
    category: "audio",
    tag: "UNNES x Andreas",
    status: "Verified ✅",
    summary: "Secondary digital control console untuk monitoring audio broadcast.",
    chain: [
      "Mixer Yamaha QL5",
      "WiFi UNNES-ID Network",
      "Laptop Virtual Mixer 2 (Andreas)",
      "Power Adaptor LTP"
    ],
    details: "Yamaha QL5 Editor pada laptop untuk memantau routing matrix broadcast, dynamic limiter, dan mute group secara real-time."
  },
  {
    id: "route-pro3-tv",
    title: "12. ProPresenter 3 & Stage Timekeeper TV",
    category: "media",
    tag: "PRO3 x Darrel",
    status: "Verified ✅",
    summary: "Dedicated stage timer & cue display untuk WL, Singer, & Pembicara.",
    chain: [
      "Terminal Cable XCH",
      "Laptop ProPresenter 3 (Darrel)",
      "Power Adaptor LTP",
      "HDMI to HDMI Cable 1M",
      "Television Monitor (Darrel)",
      "Power Adaptor TV"
    ],
    details: "Terpisah dari Broadcast System. Menampilkan countdown khotbah, stage message, dan penanda durasi rundown ibadah."
  }
];

export const MASTER_INVENTORY = [
  // OWL
  { id: "inv-owl-1", name: "Sony A6000", qty: "2 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk CAM 3 & CAM 4" },
  { id: "inv-owl-2", name: "Sony A6400", qty: "1 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk Lead Photo (Nico)" },
  { id: "inv-owl-3", name: "Sony ZV-E10", qty: "1 Unit", provider: "OWL", status: "Verified", category: "camera", note: "Untuk CAM 1 (Alex)" },
  { id: "inv-owl-4", name: "Lens 18-105MM F4 G", qty: "3 Unit", provider: "OWL", status: "Verified", category: "lens", note: "CAM 1, CAM 2, CAM 3" },
  { id: "inv-owl-5", name: "Lens 50MM Prime", qty: "1 Unit", provider: "OWL", status: "Verified", category: "lens", note: "Photo Nico" },
  { id: "inv-owl-6", name: "Battery Sony NP-FW50", qty: "8 Unit", provider: "OWL", status: "Verified", category: "power", note: "Multi-camera broadcast" },
  { id: "inv-owl-7", name: "Charger Sony Multi", qty: "1 Pack", provider: "OWL", status: "Verified", category: "power", note: "Charging station" },
  { id: "inv-owl-8", name: "Memory Card 32GB High Speed", qty: "4 Unit", provider: "OWL", status: "Verified", category: "storage", note: "Broadcast & Photo" },
  { id: "inv-owl-9", name: "Cinetreak Cinelive V1 Switcher", qty: "1 Pack", provider: "OWL", status: "Verified", category: "switcher", note: "Master Video Switcher" },
  { id: "inv-owl-10", name: "Power Adaptor MIX", qty: "1 Unit", provider: "OWL", status: "Verified", category: "power", note: "Cinetreak V1 Power" },
  { id: "inv-owl-11", name: "Hollyland Pyro H Wireless Kit", qty: "1 Pack", provider: "OWL", status: "Verified", category: "wireless", note: "Transmitter TX + Receiver RX" },
  { id: "inv-owl-12", name: "Power Adaptor WIR", qty: "1 Unit", provider: "OWL", status: "Verified", category: "power", note: "Hollyland RX Power" },
  { id: "inv-owl-13", name: "Tripod Camera Big Heavy Duty", qty: "1 Unit", provider: "OWL", status: "Verified", category: "tripod", note: "CAM 1 Deck" },
  { id: "inv-owl-14", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", provider: "OWL", status: "Verified", category: "converter", note: "Sony Micro HDMI adapter" },
  { id: "inv-owl-15", name: "HDMI to Micro HDMI Cable 30CM", qty: "1 Unit", provider: "OWL", status: "Verified", category: "cable", note: "Gimbal/Wireless link" },
  { id: "inv-owl-16", name: "HDMI Cable 30M High Speed", qty: "1 Unit", provider: "OWL", status: "Verified", category: "cable", note: "CAM 1 Long Run" },
  { id: "inv-owl-17", name: "HDMI Cable 20M High Speed", qty: "1 Unit", provider: "OWL", status: "Verified", category: "cable", note: "CAM 1 Splitter link" },
  { id: "inv-owl-18", name: "HDMI Video Capture Card", qty: "2 Unit", provider: "OWL", status: "Verified", category: "capture", note: "Pro1 & Pro2 Capture" },

  // ABON
  { id: "inv-abon-1", name: "HDMI Video Capture Card USB 3.0", qty: "2 Unit", provider: "ABON", status: "Verified", category: "capture", note: "Resolume & Secondary Input" },

  // Andreas
  { id: "inv-and-1", name: "Fan Cooler Laptop High RPM", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "OBS cooling dock" },
  { id: "inv-and-2", name: "Mouse Pad Precision XL", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Engine Table" },
  { id: "inv-and-3", name: "Keyboard External Mechanical", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Hotkey trigger" },
  { id: "inv-and-4", name: "Mouse External Ergonomic", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "accessories", note: "Switcher backup" },
  { id: "inv-and-5", name: "Powerbank 20.000mAh PD", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Emergency mobile power" },
  { id: "inv-and-6", name: "Power Adaptor USB A Multiport", qty: "9 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Peripheral charge" },
  { id: "inv-and-7", name: "Power Adaptor USB A x C Fast Charge", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Fast charging hub" },
  { id: "inv-and-8", name: "Power Adaptor USB C PD 65W", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "power", note: "Laptop / DAC power" },
  { id: "inv-and-9", name: "USB A to USB B Data Cable", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Audio DAC / Interface" },
  { id: "inv-and-10", name: "USB A to USB Micro B Cable", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Camera control" },
  { id: "inv-and-11", name: "USB A to USB C Data 3.0 Cable", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Cinetreak to OBS" },
  { id: "inv-and-12", name: "USB A to USB C Charge Cable", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Device charging" },
  { id: "inv-and-13", name: "USB C to USB C Charge Cable PD", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Mac / iPad sync" },
  { id: "inv-and-14", name: "USB A to USB A Extender 30CM", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Dongle extension" },
  { id: "inv-and-15", name: "USB A to USB A Extender 2M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Long USB run" },
  { id: "inv-and-16", name: "USB A to USB C Male Converter", qty: "4 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Port compatibility" },
  { id: "inv-and-17", name: "USB A to USB C Female Converter", qty: "2 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "OTG adapter" },
  { id: "inv-and-18", name: "USB A to Mini USB Cable", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Legacy device sync" },
  { id: "inv-and-19", name: "USB A Hub Splitter 3CH", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "USB expansion" },
  { id: "inv-and-20", name: "USB A Hub Splitter 4CH", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "USB expansion" },
  { id: "inv-and-21", name: "USB C DAC Hanason AB17X 24bit", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "audio", note: "Resolume to QL5" },
  { id: "inv-and-22", name: "USB C DAC Oraimo OAA310", qty: "1 Unit", provider: "Andreas", status: "Verified", category: "audio", note: "Backup DAC" },
  { id: "inv-and-23", name: "In Ear Monitor QKZ Hi7T", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "Director audio monitoring" },
  { id: "inv-and-24", name: "In Ear Monitor KZ EDX Pro", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "OBS audio monitoring" },
  { id: "inv-and-25", name: "Fastdrive Vgen SSD 128GB Portable", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "storage", note: "High speed media assets" },
  { id: "inv-and-26", name: "Fastdrive Toshiba HDD 1TB", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "storage", note: "Master recording backup" },
  { id: "inv-and-27", name: "Flashdrive Toshiba 8GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Emergency PPT storage" },
  { id: "inv-and-28", name: "Flashdrive Sandisk 16GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Firmware / assets" },
  { id: "inv-and-29", name: "Flashdrive Toshiba 32GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Resolume loop assets" },
  { id: "inv-and-30", name: "Flashdrive Toshiba 64GB", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "storage", note: "Video opening master" },
  { id: "inv-and-31", name: "HDMI to Mini HDMI Converter", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Adapter" },
  { id: "inv-and-32", name: "Mini HDMI to Mini HDMI Cable 1.5M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Direct monitor link" },
  { id: "inv-and-33", name: "HDMI to HDMI Cable 1.5M", qty: "3 Unit", provider: "Andreas", status: "Verified", category: "cable", note: "Engine desk patch" },
  { id: "inv-and-34", name: "VGA to HDMI Converter Active", qty: "3 Unit", provider: "Andreas", status: "Checked", category: "converter", note: "Legacy fallback" },
  { id: "inv-and-35", name: "VGA to VGA Cable 1.5M", qty: "1 Unit", provider: "Andreas", status: "Checked", category: "cable", note: "Legacy monitor patch" },
  { id: "inv-and-36", name: "Power Cable 3PIN Heavy Duty", qty: "3 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Cek isolasi grounding" },
  { id: "inv-and-37", name: "Power Cable 2PIN Standard", qty: "1 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Cek insulasi luar" },
  { id: "inv-and-38", name: "Terminal Cable 4CH 5M", qty: "3 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Engine cluster" },
  { id: "inv-and-39", name: "Terminal Cable 3CH 3M", qty: "2 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Camera pod" },
  { id: "inv-and-40", name: "Terminal Cable 2CH 2M", qty: "1 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Audio pod" },
  { id: "inv-and-41", name: "Terminal Cable Master XCH", qty: "X Unit", provider: "Andreas", status: "Verified", category: "power", note: "Master trunk line" },
  { id: "inv-and-42", name: "Terminal T Splitter 3 Way", qty: "8 Unit", provider: "Andreas", status: "Warning", category: "power", note: "Periksa kontak tembaga" },
  { id: "inv-and-43", name: "Addon Box (Hardware Kit)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Clamps, cold shoes" },
  { id: "inv-and-44", name: "Jack Box (Audio Adapter Kit)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "audio", note: "3.5mm, 6.5mm, RCA, XLR" },
  { id: "inv-and-45", name: "Screw Box (Camera 1/4 & 3/8)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Quick release plates" },
  { id: "inv-and-46", name: "Ties Box (Cable Management)", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Velcro & zip ties" },
  { id: "inv-and-47", name: "Tool Box Pro (Screwdriver/Pliers)", qty: "2 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Field repair toolkit" },
  { id: "inv-and-48", name: "Cable Reel Spare", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "cable", note: "Emergency spare run" },
  { id: "inv-and-49", name: "Gaffer & Electrical Tape Heavy", qty: "1 Pack", provider: "Andreas", status: "Checked", category: "accessories", note: "Floor taping & safety" },

  // GIA Deliksari
  { id: "inv-gia-1", name: "Mixer NewBaxs CT80S 8-Channel", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "audio", note: "Broadcast Sub-Mixer" },
  { id: "inv-gia-2", name: "XLR Female to Male Cable 3M", qty: "2 Unit", provider: "GIA Deliksari", status: "Verified", category: "audio", note: "CT80S patch" },
  { id: "inv-gia-3", name: "USB A to USB C Data Cable", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "cable", note: "CT80S to OBS" },
  { id: "inv-gia-4", name: "Tripod Camera Big Sturdy", qty: "1 Unit", provider: "GIA Deliksari", status: "Verified", category: "tripod", note: "CAM 3 Dewi" },
  { id: "inv-gia-5", name: "HDMI Splitter 2CH Powered", qty: "1 Unit", provider: "GIA Deliksari", status: "Checked", category: "converter", note: "Spare splitter" },
  { id: "inv-gia-6", name: "Power Adaptor SPL", qty: "1 Pack", provider: "GIA Deliksari", status: "Checked", category: "power", note: "Splitter power" },
  { id: "inv-gia-7", name: "HDMI to HDMI Cable 1M", qty: "2 Unit", provider: "GIA Deliksari", status: "Verified", category: "cable", note: "Rack patching" },

  // GKJ Ngaliyan
  { id: "inv-gkj-1", name: "Stand Lighting Small (Hollyland RX)", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "tripod", note: "Mounting wireless RX" },
  { id: "inv-gkj-2", name: "HDMI Cable 15M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "cable", note: "Resolume to NovaStar" },
  { id: "inv-gkj-3", name: "HDMI Cable 10M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "cable", note: "CAM 3 Dewi Run" },
  { id: "inv-gkj-4", name: "HDMI Cable 5M High Speed", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Checked", category: "cable", note: "Stage aux run" },
  { id: "inv-gkj-5", name: "HDMI Cable 1.5M Patch", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Checked", category: "cable", note: "Table patch" },
  { id: "inv-gkj-6", name: "HDMI Video Capture Card USB", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "capture", note: "Spare capture" },
  { id: "inv-gkj-7", name: "HDMI Splitter 4CH 4K", qty: "1 Unit", provider: "GKJ Ngaliyan", status: "Verified", category: "converter", note: "Primary PGM Splitter" },
  { id: "inv-gkj-8", name: "Power Adaptor SPL 5V", qty: "1 Pack", provider: "GKJ Ngaliyan", status: "Verified", category: "power", note: "Splitter power" },

  // UKK UNNES
  { id: "inv-ukk-1", name: "XLR Female to Male Cable 10M", qty: "3 Unit", provider: "UKK UNNES", status: "Verified", category: "audio", note: "QL5 to NewBaxs master run" },
  { id: "inv-ukk-2", name: "Stand Lighting Small", qty: "4 Unit", provider: "UKK UNNES", status: "Checked", category: "tripod", note: "Stage perimeter" },
  { id: "inv-ukk-3", name: "Tripod Camera Big Pro", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "tripod", note: "CAM 4 Nathania" },
  { id: "inv-ukk-4", name: "HDMI to Mini HDMI Cable 2.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup camera run" },
  { id: "inv-ukk-5", name: "HDMI Cable 15M Braided", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Spare long run" },
  { id: "inv-ukk-6", name: "HDMI Cable 10M High Speed", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "cable", note: "CAM 4 Nathania Run" },
  { id: "inv-ukk-7", name: "HDMI Cable 1.5M Patch", qty: "4 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Table patch cables" },
  { id: "inv-ukk-8", name: "HDMI Splitter 4CH Active", qty: "1 Unit", provider: "UKK UNNES", status: "Verified", category: "converter", note: "Secondary distribution" },
  { id: "inv-ukk-9", name: "Power Adaptor SPL", qty: "1 Pack", provider: "UKK UNNES", status: "Verified", category: "power", note: "Splitter power" },
  { id: "inv-ukk-10", name: "VGA to VGA Cable 1.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup display" },
  { id: "inv-ukk-11", name: "VGA to VGA Cable 2.5M", qty: "1 Unit", provider: "UKK UNNES", status: "Checked", category: "cable", note: "Backup display" },
  { id: "inv-ukk-12", name: "VGA to HDMI Converter Active", qty: "2 Unit", provider: "UKK UNNES", status: "Checked", category: "converter", note: "Backup converter" },
  { id: "inv-ukk-13", name: "Power Cable XPIN", qty: "X Unit", provider: "UKK UNNES", status: "Checked", category: "power", note: "AC cables" },
  { id: "inv-ukk-14", name: "Terminal Cable XCH Master Box", qty: "X Unit", provider: "UKK UNNES", status: "Verified", category: "power", note: "Master distribution" },

  // Lio
  { id: "inv-lio-1", name: "HDMI Cable 1.5M High Speed", qty: "1 Unit", provider: "Lio", status: "Verified", category: "cable", note: "CAM 2 Hollyland RX patch" },

  // Darrel
  { id: "inv-darrel-1", name: "Television Monitor 32 Inch", qty: "1 Unit", provider: "Darrel", status: "Verified", category: "display", note: "Stage Timekeeper Display" },
  { id: "inv-darrel-2", name: "Power Adaptor TV & Remote", qty: "1 Pack", provider: "Darrel", status: "Verified", category: "power", note: "Timekeeper TV Power" },
  { id: "inv-darrel-3", name: "Memory Card 8GB", qty: "1 Unit", provider: "Darrel", status: "Checked", category: "storage", note: "Spare emergency card" },

  // Kiel
  { id: "inv-kiel-1", name: "Sony ZV-E10 Body 4K", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "camera", note: "CAM 2 Wireless Kiel 1" },
  { id: "inv-kiel-2", name: "Sony Kit Lens 16-50MM OSS", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "lens", note: "CAM 4 Nathania" },
  { id: "inv-kiel-3", name: "Sony Manual Lens 50MM F1.8", qty: "1 Unit", provider: "Kiel", status: "Checked", category: "lens", note: "Artistic b-roll spare" },
  { id: "inv-kiel-4", name: "Battery Sony NP-FW50", qty: "2 Unit", provider: "Kiel", status: "Verified", category: "power", note: "CAM 2 Battery" },
  { id: "inv-kiel-5", name: "Charger Sony Dual Slot", qty: "1 Pack", provider: "Kiel", status: "Verified", category: "power", note: "Rapid charging" },
  { id: "inv-kiel-6", name: "Memory Card 64GB Extreme Pro", qty: "1 Unit", provider: "Kiel", status: "Verified", category: "storage", note: "CAM 1 Alex" },
  { id: "inv-kiel-7", name: "Memory Card 128GB Extreme Pro", qty: "1 Unit", provider: "Kiel", status: "Checked", category: "storage", note: "Secondary master recording" },

  // Joel
  { id: "inv-joel-1", name: "Sony A6600 Body 4K", qty: "1 Unit", provider: "Joel", status: "Verified", category: "camera", note: "Cinematic Video Lead" },
  { id: "inv-joel-2", name: "Zeiss Vario-Tessar 24-70MM F4", qty: "1 Unit", provider: "Joel", status: "Verified", category: "lens", note: "Joel Cinematic Rig" },
  { id: "inv-joel-3", name: "Battery Sony NP-FZ100", qty: "2 Unit", provider: "Joel", status: "Verified", category: "power", note: "High capacity A6600" },
  { id: "inv-joel-4", name: "Charger Sony FZ100 Dual", qty: "1 Pack", provider: "Joel", status: "Verified", category: "power", note: "Joel battery hub" },
  { id: "inv-joel-5", name: "Memory Card 64GB Extreme Pro", qty: "1 Unit", provider: "Joel", status: "Verified", category: "storage", note: "Joel 4K S-Log footage" },
  { id: "inv-joel-6", name: "Gimbal 3-Axis DJI Ronin RS3", qty: "1 Unit", provider: "Joel", status: "Verified", category: "accessories", note: "Stabilized cinematic tracking" },

  // Kezia
  { id: "inv-kezia-1", name: "Television Monitor 40 Inch", qty: "1 Unit", provider: "Kezia", status: "Verified", category: "display", note: "Master Video Switcher Multiview" },
  { id: "inv-kezia-2", name: "Power Adaptor TV & HDMI Cable", qty: "1 Pack", provider: "Kezia", status: "Verified", category: "power", note: "Multiview TV Station" },

  // Jennifer
  { id: "inv-jen-1", name: "Apple iPhone 15 Pro Master", qty: "1 Unit", provider: "Jennifer", status: "Verified", category: "camera", note: "Social Media / Mobile 4K" },
  { id: "inv-jen-2", name: "Television Monitor 32 Inch", qty: "1 Unit", provider: "Jennifer", status: "Verified", category: "display", note: "Secondary Engine Preview" },
  { id: "inv-jen-3", name: "Power Adaptor TV & Stand", qty: "1 Pack", provider: "Jennifer", status: "Verified", category: "power", note: "Secondary TV station" },

  // Panitia
  { id: "inv-panitia-1", name: "HDMI to Micro HDMI Converter", qty: "2 Unit", provider: "Panitia", status: "Verified", category: "converter", note: "Camera rig adapters" },
  { id: "inv-panitia-2", name: "Terminal Cable Heavy Duty XCH", qty: "X Unit", provider: "Panitia", status: "Verified", category: "power", note: "Auditorium main feeder" }
];

export const MEDIA_ASSET_CHECKLIST = [
  {
    phase: "Pre Ibadah (Open Gate)",
    items: [
      {
        id: "mat-pre-1",
        title: "Playlist Lagu Rohani Akustik / Praise & Worship",
        dest: "FOH Sound System (Yamaha QL5)",
        pic: "Sound / Resolume DAC",
        type: "Audio Lossless / MP3 320kbps",
        status: "Ready ✅",
        notes: "Dimulai saat pintu open gate dibuka sampai 10 menit sebelum countdown."
      },
      {
        id: "mat-pre-2",
        title: "Loop Video (Profile UKK UNNES, After Movie IP25, After Movie IN25)",
        dest: "LED Tengah (Resolume Arena)",
        pic: "Bayu & Andreas",
        type: "1080p MP4 H.264 / DXV3 Video Loop",
        status: "Ready ✅",
        notes: "Diputar secara loop di LED Center dengan transisi fade halus."
      }
    ]
  },
  {
    phase: "Ibadah (Event Running)",
    items: [
      {
        id: "mat-evt-1",
        title: "Video Opening & Countdown IP26",
        dest: "LED Tengah (Resolume Arena) + FOH Audio",
        pic: "Andreas & Wilfred",
        type: "1080p MP4 + Master Stereo Audio",
        status: "Ready ✅",
        notes: "Memicu dimming lampu auditorium dan cue awal opening worship team."
      },
      {
        id: "mat-evt-2",
        title: "Video Sambutan Bu Grave (Dosen Pembina UKK)",
        dest: "LED Tengah, Kanan & Kiri (All LED Screens)",
        pic: "Rania (Pro1) & Andreas (Res)",
        type: "1080p MP4 with Clear Dialogue Audio",
        status: "Ready ✅",
        notes: "Pastikan audio terkirim ke QL5 via USB DAC tanpa clipping."
      },
      {
        id: "mat-evt-3",
        title: "Motion Background Tema Ibadah Perdana 2026",
        dest: "LED Tengah (Resolume Arena)",
        pic: "Bayu",
        type: "Seamless Motion Loop DXV3 / MP4",
        status: "Ready ✅",
        notes: "Background visual dinamis selama sesi praise and worship."
      },
      {
        id: "mat-evt-4",
        title: "Background Lagu & Ambient Pads",
        dest: "FOH Sound System (Yamaha QL5)",
        pic: "Sound Engineer",
        type: "Lossless Audio",
        status: "Ready ✅",
        notes: "Underlay musik saat doa pembuka, perjamuan/penyerahan, & altar call."
      },
      {
        id: "mat-evt-5",
        title: "Lirik Lagu Pujian & Penyembahan (Song Lyrics)",
        dest: "LED Tengah, Kanan & Kiri (ProPresenter 1 & 2)",
        pic: "Rania & Filia",
        type: "ProPresenter 7 Project Package",
        status: "Ready ✅",
        notes: "Sinkronisasi pergantian lirik sesuai arahan Worship Leader (WL)."
      },
      {
        id: "mat-evt-6",
        title: "Video Generation / Bumper Khotbah",
        dest: "LED Tengah, Kanan & Kiri",
        pic: "Andreas",
        type: "1080p Cinematic Teaser",
        status: "Ready ✅",
        notes: "Menjembatani transisi dari praise & worship ke sesi pemberitaan Firman."
      },
      {
        id: "mat-evt-7",
        title: "Slide Presentasi / PPT Pembicara Khotbah",
        dest: "LED Tengah, Kanan & Kiri (ProPresenter 1)",
        pic: "Rania",
        type: "PowerPoint / ProPresenter Slides 16:9",
        status: "Ready ✅",
        notes: "Pastikan font ter-embed dan pointer slide berfungsi lancar."
      },
      {
        id: "mat-evt-8",
        title: "Ayat Firman Alkitab Pembicara",
        dest: "LED Tengah, Kanan & Kiri (ProPresenter 1 & 2)",
        pic: "Filia",
        type: "TB1 / TB2 / NIV Scripture Overlays",
        status: "Ready ✅",
        notes: "Siapkan quick Bible search di ProPresenter untuk ayat spontan."
      },
      {
        id: "mat-evt-9",
        title: "Quote & Poin Utama Pembicara",
        dest: "LED Tengah, Kanan & Kiri",
        pic: "Rania & Filia",
        type: "Lower-third & Full Screen Graphic Cards",
        status: "Ready ✅",
        notes: "Tampilkan setiap pembicara menekankan poin-poin khotbah penting."
      },
      {
        id: "mat-evt-10",
        title: "Barcode / QRIS Persembahan UKK UNNES",
        dest: "LED Tengah, Kanan & Kiri + OBS Stream Overlay",
        pic: "Rania & Andreas",
        type: "High-contrast QRIS Graphic Card",
        status: "Ready ✅",
        notes: "Pastikan QRIS dapat di-scan dari jarak jauh auditorium & di layar HP penonton live stream."
      },
      {
        id: "mat-evt-11",
        title: "UKK News & Pengumuman Pelayanan",
        dest: "LED Tengah, Kanan & Kiri",
        pic: "Rania",
        type: "Motion Graphic / Slide Announcement",
        status: "Ready ✅",
        notes: "Jadwal ibadah rutin, fellowship kampus, dan rekruitmen panitia."
      },
      {
        id: "mat-evt-12",
        title: "Pokok Doa Syafaat Bersama",
        dest: "LED Tengah, Kanan & Kiri",
        pic: "Filia",
        type: "Typography Prayer Bullet Points",
        status: "Ready ✅",
        notes: "Ditampilkan saat pendoa syafaat memimpin doa bersama."
      }
    ]
  },
  {
    phase: "Post Ibadah (Close Gate & Demobilization)",
    items: [
      {
        id: "mat-post-1",
        title: "Usung-Usung, Inventory Check & Demobilization",
        dest: "Seluruh Divisi Produksi & Perlengkapan",
        pic: "Seluruh Crew (Koordinator: Andreas & Kiel)",
        type: "Demobilization Checklist & Equipment Packing",
        status: "Standby ⏳",
        notes: "Check-out verifikasi alat per pemilik (OWL, GIA, GKJ, UKK, Pribadi). Jangan tinggalkan kabel atau baut."
      }
    ]
  }
];

export const SOP_AND_CONTINGENCIES = [
  {
    id: "sop-1",
    title: "SOP 1: Pre-Event Checklist & Signal Synchronization (H-3 Jam)",
    steps: [
      "Nyalakan Master AC Power & periksa tegangan kabel terminal XCH (harus stabil 220V - 230V).",
      "Koneksikan seluruh kabel video HDMI CAM 1-4 ke Switcher Cinetreak V1 sebelum menyalakan kamera.",
      "Uji transmisi nirkabel Hollyland Pyro H CAM 2 (pastikan frekuensi 5.8GHz bebas interferensi WiFi auditorium).",
      "Test loop gambar ProPresenter 1, ProPresenter 2, dan Resolume Arena ke Video Processor LED Center & Sayap.",
      "Lakukan Sound Check & Level Metering: Yamaha QL5 -> NewBaxs CT80S -> OBS Studio (Target Livestream: -14 LUFS, Peak -3dB)."
    ]
  },
  {
    id: "sop-2",
    title: "SOP 2: Camera Operation Protocol",
    steps: [
      "CAM 1 (Alex): Kunci exposure & white balance secara manual. Jangan panning terlalu cepat; fokus utama pada framing altar & speaker.",
      "CAM 2 (Kiel 1): Wajib menggunakan strap kamera. Bergerak dinamis di sekitar panggung tanpa menghalangi pandangan jemaat.",
      "CAM 3 (Dewi) & CAM 4 (Nathania): Jaga komposisi framing cross-angle dan panning lambat saat perpindahan vokal.",
      "Semua operator kamera wajib mengenakan busana rapi berwarna gelap/hitam dan selalu memantau arahan Switcher di Intercom."
    ]
  },
  {
    id: "sop-3",
    title: "SOP 3: Emergency Contingency Plan (Fail-Safe Procedures)",
    steps: [
      "Jalur HDMI Kamera Terputus: Switcher operator langsung beralih (CUT) ke CAM 1 Master atau Graphic Standby di OBS.",
      "Hollyland Pyro H Dropout: Operator CAM 2 segera merapat mendekati stage Lighting Stand RX untuk re-locking sinyal.",
      "Resolume / ProPresenter Crash: Operator cadangan di Backup Station langsung beralih ke HDMI Splitter direct pass-through.",
      "Audio Clipping / Noise Grounding: Switcher OBS mengaktifkan Noise Gate & Compressor filter cadangan di OBS Audio Rack.",
      "Listrik Panggung Padam: Seluruh laptop berada dalam status baterai 100% dan UPS standby melindungi Cinetreak V1 & QL5."
    ]
  }
];
