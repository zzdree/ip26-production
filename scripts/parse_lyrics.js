const fs = require('fs');
const path = require('path');

const dir = 'X:\\IP26\\Assets\\Lyrics\\Statics';

const ytMapping = {
  'Ajaib Kau Tuhan - JPCC Worship': 'u4OuBnoEpcc',
  'Aku Diberkati - Sound Of Praise': '8HDwaUuxb18',
  'Bri Syukur - Viona Paays': 'WE0QMkO-bSw',
  'Dengar Dia Panggil Nama Saya - Yehuda Singers': '9C3DqiW9aA0',
  'Di Badai Topan Dunia - KJ 440': 'o5_tW24XDW8',
  'I Have Decided To Follow Jesus - Amy Grant': 'BjQ3YYBGAqI',
  'Ku Berbahagia - KJ 392': '1afPkMjn6Js',
  'Kumenang - Symphony Worship': 'ceBDhQV_fT4',
  'Kumenang Menang - Hosana Singers': '8yr_XGBFb30',
  'KumilikMu - JPCC Worship Youth': 'D81OXqGb40s',
  'Mengikut Yesus Keputusanku - KPRI 103': '7PGGUUr2nFQ',
  'Nyalakan ApiMu - GMS Live': 'FsIT-wdq4bA',
  'Oceans (Where Feet May Fail) - Hillsong UNITED': '1m_sWJQm2fs',
  'Setinggi-tingginya Langit - Talenta Singers': '8t_UCR64cKM'
};

const files = fs.readdirSync(dir);
console.log('Total files found:', files.length);

const parsedSongs = files.map(file => {
  const fullPath = path.join(dir, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const baseName = file.replace(/\.txt$/, '');
  
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
        label: linesInBlock[1] || 'BLANK',
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
    title: baseName,
    youtubeId: ytMapping[baseName] || '',
    totalSlides: slides.length,
    slides: slides
  };
});

fs.writeFileSync(path.join(__dirname, 'songs_data.json'), JSON.stringify(parsedSongs, null, 2), 'utf-8');
console.log('Saved songs_data.json successfully.');
parsedSongs.forEach(s => {
  console.log(`${s.title} (${s.slides.length} slides) -> YT: ${s.youtubeId}`);
});
