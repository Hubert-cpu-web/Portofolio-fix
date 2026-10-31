/* ==========================================================================
   PORTFOLIO DATA CONFIGURATION
   Anda dapat dengan mudah menambahkan, mengedit, atau menghapus projek di sini.
   Cukup ikuti format objek projek di bawah ini!
   ========================================================================== */

const portfolioData = {
  profile: {
    name: "Hubert August Hero",
    title: "Junior Programmer",
    badgeStatus: "Tersedia untuk Magang & Junior Dev",
    location: "Surabaya, Indonesia",
    bio: "Junior Programmer & Web Enthusiast dari Surabaya yang bersemangat mendalami pemrograman web, menyusun antarmuka responsif dengan Tailwind CSS & JavaScript, serta siap belajar cepat dan berkontribusi dalam tim.",
    socials: {
      github: "https://github.com/Hubert-cpu-web",
      linkedin: "https://www.linkedin.com/feed/",
      instagram: "https://www.instagram.com/hubert_wuisdis/",
      email: "huberthero279@gmail.com",
      whatsapp: "https://wa.me/6281332411716"
    },
    highlights: [
      {
        id: "status",
        icon: "fa-rocket",
        tag: "Karier & Minat",
        title: "Fresh & Ready",
        shortDesc: "Siap Magang & Junior Dev",
        badge: "Tersedia",
        color: "amber",
        detailTitle: "🎯 Siap Belajar Cepat & Berkontribusi",
        detailText: "Sebagai talenta baru yang bersemangat tinggi di dunia web development, saya siap bergabung untuk program magang (internship) maupun posisi Junior Programmer. Saya berkomitmen untuk cepat beradaptasi dengan alur kerja tim dan teknologi yang digunakan.",
        points: [
          "Fokus peran: Junior Frontend Developer, Web Designer, Technical Assistant",
          "Tersedia untuk kerja Remote (Surabaya & sekitarnya)",
          "Memiliki dedikasi tinggi untuk belajar mandiri dan menyelesaikan tugas tepat waktu"
        ]
      },
      {
        id: "learning",
        icon: "fa-bolt",
        tag: "Etos Belajar",
        title: "Fast Learner",
        shortDesc: "Eksplorasi Stack Setiap Hari",
        badge: "Growth Mindset",
        color: "amber",
        detailTitle: "⚡ Semangat Belajar & Keingintahuan Tinggi",
        detailText: "Dunia teknologi bergerak sangat cepat, dan itu adalah hal yang paling menyenangkan bagi saya. Saya terbiasa membaca dokumentasi resmi, mencoba library/framework baru, dan memecahkan error melalui riset dan eksperimen.",
        points: [
          "Konsisten mengasah kemampuan coding dan praktek pembuatan projek",
          "Cepat memahami dokumentasi teknologi baru dan menerapkannya",
          "Tidak takut menghadapi error: tekun mencari solusi sampai tuntas"
        ]
      },
      {
        id: "quality",
        icon: "fa-mobile-screen",
        tag: "Standar Kode",
        title: "Clean & Responsive",
        shortDesc: "Mobile-First & Kode Rapi",
        badge: "Modern UI",
        color: "purple",
        detailTitle: "📱 Mengutamakan Tampilan Rapi & Nyaman",
        detailText: "Saya percaya kesan pertama pengguna berawal dari antarmuka yang nyaman dipandang dan mudah digunakan. Saya selalu merancang halaman web yang adaptif dari layar smartphone hingga monitor desktop.",
        points: [
          "Pendekatan Mobile-First: layout fleksibel di semua resolusi",
          "Struktur penulisan kode HTML semantik, CSS bersih, dan JavaScript teratur",
          "Website portofolio ini adalah contoh nyata penerapan antarmuka bersih & responsif"
        ]
      },
      {
        id: "collaboration",
        icon: "fa-comments",
        tag: "Komunikasi",
        title: "Open to Feedback",
        shortDesc: "Komunikatif & Mau Dibimbing",
        badge: "Team Player",
        color: "emerald",
        detailTitle: "🤝 Senang Menerima Masukan & Bimbingan",
        detailText: "Bagi seorang programmer pemula, kritik yang membangun dan arahan dari programmer yang lebih berpengalaman adalah hal yang sangat berharga. Saya selalu siap mendengarkan saran dan berkolaborasi secara positif.",
        points: [
          "Sangat terbuka terhadap code review dan masukan teknis",
          "Komunikasi yang sopan, jelas, dan proaktif mengabarkan progres",
          "Senang bertukar ide dan menghargai kerja sama antaranggota tim"
        ]
      }
    ]
  },

  rexOrangeCounty: {
    artist: "Rex Orange County",
    quote: "Keep it up, you're doing fun, you're doing great.",
    albums: ["Apricot Princess (2017)", "Pony (2019)", "WHO CARES? (2022)", "The Alexander Technique (2024)"],
    tracks: [
      {
        title: "Pluto Projector",
        album: "Pony (2019)",
        quote: "The greatest thing you'll ever learn is just to love and be loved in return.",
        mood: "Nostalgic & Reflective Coding Flow",
        tag: "Fav Track 🪐"
      },
      {
        title: "Keep It Up",
        album: "WHO CARES? (2022)",
        quote: "Keep it up, you're doing fun, you're doing great.",
        mood: "Energetic Coding & Morning Mood",
        tag: "Daily Motivation ☀️"
      },
      {
        title: "Television / So Far So Good",
        album: "Apricot Princess (2017)",
        quote: "I'm not so sure that you know what you do to me.",
        mood: "Chill Indie Bedroom Pop",
        tag: "Classic Vibe 📺"
      },
      {
        title: "10/10",
        album: "Pony (2019)",
        quote: "I stay focused on the future, looking for the light.",
        mood: "Optimistic Daily Practice",
        tag: "Confidence Boost ⚡"
      },
      {
        title: "Amazing",
        album: "WHO CARES? (2022)",
        quote: "Don't change a thing, you are amazing just the way you are.",
        mood: "Warmth & Aesthetic Focus",
        tag: "Feel Good 🌸"
      },
      {
        title: "Corduroy Dreams",
        album: "Bcoz U Will Never B Free (2015)",
        quote: "How could I ever love someone else? Got to love yourself first.",
        mood: "Acoustic Late-night Coding",
        tag: "Late Night 🌙"
      }
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      icon: "code",
      items: [
        { name: "HTML5 & Semantic Web", level: "Belajar", percent: 60 },
        { name: "CSS3 / Tailwind CSS", level: "Belajar", percent: 55 },
        { name: "JavaScript (ES6+)", level: "Belajar", percent: 45 },
        { name: "Responsive UI & Mobile First", level: "Belajar", percent: 50 }
      ]
    },
    {
      category: "Tools & Workflow",
      icon: "tool",
      items: [
        { name: "Git & GitHub", level: "Belajar", percent: 40 },
        { name: "VS Code", level: "Belajar", percent: 65 },
        { name: "Figma (Dasar)", level: "Belajar", percent: 35 }
      ]
    }
  ],

     projects: [
     {
       id: "undika-xcel",
       title: "Undika X‑CEL Campus Showcase",
       isThisWebsite: false,
       category: "frontend",
       categoryName: "Frontend & UI/UX",
       badge: "Live",
       summary: "Landing page interaktif untuk program X‑CEL Universitas Dinamika, menampilkan statistik kampus dan formulir kontak.",
       description: "Situs statis responsif menampilkan informasi program X‑CEL, galeri, statistik, dan formulir pendaftaran. Dibangun dengan Tailwind CSS dan FontAwesome.",
       features: [
         "Desain responsif full‑width",
         "Statistik dinamis dengan animasi",
         "Formulir kontak terintegrasi",
         "Optimasi kecepatan dan SEO dasar"
       ],
       techStack: ["HTML5", "Tailwind CSS", "FontAwesome"],
       demoUrl: "https://raw.githubusercontent.com/Hubert-cpu-web/Portofolio/main/HTML.HTML",
       repoUrl: "https://github.com/Hubert-cpu-web/Portofolio",
       image: "assets/images/project-undika.png",
       highlights: "Implementasi layout modern dengan animasi glassmorphism."
     },
     {
       id: "aturuang",
       title: "AturUang – Personal Finance Manager",
       isThisWebsite: false,
       category: "frontend",
       categoryName: "Frontend & UI/UX",
       badge: "Demo",
       summary: "Aplikasi web manajemen keuangan pribadi dengan tracking pemasukan, pengeluaran, dan visualisasi chart.",
       description: "Aplikasi vanilla‑JS dengan Tailwind CSS, menampilkan dashboard keuangan, grafik Chart.js, dan kalkulator budget.",
       features: [
         "Dashboard interaktif",
         "Grafik Chart.js",
         "CRUD transaksi",
         "Responsive mobile‑first"
       ],
       techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Chart.js"],
       demoUrl: "https://raw.githubusercontent.com/Hubert-cpu-web/Portofolio2/main/index.html",
       repoUrl: "https://github.com/Hubert-cpu-web/Portofolio2",
       image: "assets/images/image.png",
       highlights: "Manajemen keuangan sederhana dengan UI bersih dan chart interaktif."
     }
   ]
};
