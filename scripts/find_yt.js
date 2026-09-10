const songs = [
  { title: "Ajaib Kau Tuhan - JPCC Worship", query: "Ajaib Kau Tuhan JPCC Worship Official" },
  { title: "Aku Diberkati - Sound Of Praise", query: "Aku Diberkati Sound Of Praise Sidney Mohede" },
  { title: "Bri Syukur - Viona Paays", query: "Bri Syukur Viona Paays" },
  { title: "Dengar Dia Panggil Nama Saya - Yehuda Singers", query: "Dengar Dia Panggil Nama Saya Yehuda Singers" },
  { title: "Di Badai Topan Dunia - KJ 440", query: "Di Badai Topan Dunia KJ 440" },
  { title: "I Have Decided To Follow Jesus - Amy Grant", query: "I Have Decided To Follow Jesus Amy Grant" },
  { title: "Ku Berbahagia - KJ 392", query: "Ku Berbahagia KJ 392" },
  { title: "Kumenang - Symphony Worship", query: "Kumenang Symphony Worship Live" },
  { title: "Kumenang Menang - Hosana Singers", query: "Kumenang Menang Hosana Singers" },
  { title: "KumilikMu - JPCC Worship Youth", query: "KumilikMu JPCC Worship Youth" },
  { title: "Mengikut Yesus Keputusanku - KPRI 103", query: "Mengikut Yesus Keputusanku KPRI 103" },
  { title: "Nyalakan ApiMu - GMS Live", query: "Nyalakan ApiMu GMS Live" },
  { title: "Oceans (Where Feet May Fail) - Hillsong UNITED", query: "Oceans Where Feet May Fail Hillsong UNITED Live" },
  { title: "Setinggi-tingginya Langit - Talenta Singers", query: "Setinggi-tingginya Langit Talenta Singers" }
];

async function run() {
  const results = [];
  for (const item of songs) {
    try {
      const res = await fetch('https://www.youtube.com/results?search_query=' + encodeURIComponent(item.query), {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const html = await res.text();
      const match = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
      const videoId = match ? match[1] : null;
      results.push({ title: item.title, videoId });
      console.log(`${item.title} -> https://www.youtube.com/watch?v=${videoId}`);
    } catch (err) {
      console.error(item.title, err.message);
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
