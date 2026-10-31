/* ==========================================================================
   MAIN JAVASCRIPT - PORTFOLIO INTERACTIVITY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initRexPlayer();
  renderProfile();
  renderHighlights();
  renderSkills();
  renderProjects("all");
  setupFilters();
  setupSearch();
  setupModal();
  setupContactForm();
  setupScrollEffects();
  setupMobileNav();
  setupCopyEmail();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
    if (themeIcon) themeIcon.className = "fa-solid fa-moon text-amber-500";
  } else {
    document.documentElement.classList.remove("light");
    if (themeIcon) themeIcon.className = "fa-solid fa-sun text-yellow-400";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light");
      localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
      if (themeIcon) {
        themeIcon.className = isLight
          ? "fa-solid fa-moon text-amber-500"
          : "fa-solid fa-sun text-yellow-400";
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. PROFILE & HIGHLIGHTS RENDERING (Interactive Fresh Talent Highlights)
   -------------------------------------------------------------------------- */
function renderProfile() {
  const { profile } = portfolioData;

  // Name & Titles
  const nameEls = document.querySelectorAll(".profile-name");
  nameEls.forEach(el => (el.textContent = profile.name));

  const titleEls = document.querySelectorAll(".profile-title");
  titleEls.forEach(el => (el.textContent = profile.title));

  const bioEl = document.getElementById("hero-bio");
  if (bioEl) bioEl.textContent = profile.bio;

  const badgeEl = document.getElementById("status-badge-text");
  if (badgeEl) badgeEl.textContent = profile.badgeStatus;
}

function renderHighlights() {
  const container = document.getElementById("highlights-grid");
  const highlights = portfolioData.profile.highlights;
  if (!container || !highlights) return;

  container.innerHTML = highlights
    .map(
      item => `
      <button 
        type="button"
        id="highlight-card-${item.id}"
        onclick="selectHighlight('${item.id}')"
        class="highlight-card glass-card p-3.5 sm:p-4 rounded-xl text-left border border-slate-700/60 transition-all duration-300 relative group hover:scale-[1.02] cursor-pointer"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="w-8 h-8 rounded-lg bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center text-sm border border-${item.color}-500/30">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            ${item.badge}
          </span>
        </div>
        <div class="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
          ${item.title}
        </div>
        <div class="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5 line-clamp-1">
          ${item.shortDesc}
        </div>
        <div class="text-[10px] text-amber-400/90 font-mono mt-2 flex items-center gap-1">
          <span>Rincian</span>
          <i class="fa-solid fa-arrow-right text-[8px] group-hover:translate-x-0.5 transition-transform"></i>
        </div>
      </button>
    `
    )
    .join("");

  // Select first highlight by default
  selectHighlight("status");
}

window.selectHighlight = function(id) {
  const highlights = portfolioData.profile.highlights;
  if (!highlights) return;

  const item = highlights.find(h => h.id === id) || highlights[0];

  // Update card active classes
  highlights.forEach(h => {
    const cardEl = document.getElementById(`highlight-card-${h.id}`);
    if (cardEl) {
      if (h.id === item.id) {
        cardEl.classList.add("active");
      } else {
        cardEl.classList.remove("active");
      }
    }
  });

  // Render Detail Box
  const detailBox = document.getElementById("highlight-detail-box");
  if (detailBox) {
    detailBox.innerHTML = `
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center text-lg border border-white/15 shrink-0">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5">${item.tag}</div>
            <h3 class="text-lg sm:text-xl font-bold text-white">${item.detailTitle}</h3>
          </div>
        </div>

        <a 
          href="#kontak" 
          class="px-4 py-2 rounded-full bg-white text-black hover:bg-slate-200 font-bold text-xs shadow-md transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
        >
          <span>Ajak Diskusi / Rekrut</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      <p class="text-slate-300 text-sm leading-relaxed my-4">
        ${item.detailText}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
        ${item.points
          .map(
            pt => `
          <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
            <i class="fa-solid fa-check text-emerald-400 mt-0.5 text-[11px] shrink-0"></i>
            <span>${pt}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
};

window.runTerminalCommand = function(cmd) {
  const terminalOutput = document.getElementById("terminal-output");
  if (!terminalOutput) return;

  let content = "";
  if (cmd === "status") {
    content = `<span class="text-amber-400 font-bold">hubert@dev:~$ status</span><br/>
      <span class="text-emerald-400 font-semibold">● AVAILABLE:</span> Siap bergabung untuk program Magang (Internship) maupun Junior Web Developer. Terbuka untuk Remote Surabaya.`;
  } else if (cmd === "stack") {
    content = `<span class="text-amber-400 font-bold">hubert@dev:~$ stack</span><br/>
      <span class="text-yellow-300 font-semibold">⚡ ACTIVE LEARNING:</span> HTML5 (Semantik), CSS3, Tailwind CSS, JavaScript (ES6+), Git &amp; GitHub, RESTful API. Terus bereksperimen dengan React &amp; Next.js!`;
  } else if (cmd === "goals") {
    content = `<span class="text-amber-400 font-bold">hubert@dev:~$ goals</span><br/>
      <span class="text-slate-300 font-semibold">🎯 TARGET:</span> Mengembangkan fondasi pemrograman yang kokoh, menulis kode yang rapi dan terukur, serta belajar langsung dari senior developer dalam tim yang kolaboratif.`;
  } else if (cmd === "hire") {
    content = `<span class="text-amber-400 font-bold">hubert@dev:~$ hire</span><br/>
      <span class="text-amber-300 font-semibold">📬 KONTAK HUBERT:</span> Email: <a href="mailto:huberthero279@gmail.com" class="underline text-amber-300">huberthero279@gmail.com</a> | WA: <a href="https://wa.me/6281332411716" target="_blank" class="underline text-emerald-400">+62 813-3241-1716</a>. Mari wujudkan projek bersama!`;
  } else if (cmd === "rex") {
    const tracks = portfolioData.rexOrangeCounty?.tracks || [];
    const trackList = tracks.map(t => `<li class="ml-4">🎵 <strong>${t.title}</strong> <span class="text-slate-400">(${t.album})</span>: <em>"${t.quote}"</em></li>`).join("");
    content = `<span class="text-amber-400 font-bold">hubert@dev:~$ rex</span><br/>
      <div class="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 mt-1 space-y-1.5">
        <div class="font-bold flex items-center gap-2 text-amber-300 text-xs">
          <i class="fa-solid fa-compact-disc text-amber-400 animate-spin"></i>
          <span>REX ORANGE COUNTY • SOUNDTRACK PEMROGRAMAN HUBERT</span>
        </div>
        <p class="text-xs text-slate-300">Musik indie pop, jazz chords, dan lirik positif Rex Orange County menjadi inspirasi ritme coding harian Hubert:</p>
        <ul class="text-[11px] text-amber-200/90 space-y-1 list-disc pt-1">
          ${trackList}
        </ul>
        <div class="text-[10px] text-amber-300/80 font-semibold pt-1 border-t border-amber-500/20">
          💡 Motto: "Keep it up, you're doing fun, you're doing great."
        </div>
      </div>`;
  } else if (cmd === "clear") {
    content = `<span class="text-slate-500">// Terminal bersih. Silakan pilih tombol perintah di atas.</span>`;
  }

  terminalOutput.innerHTML = content;
};

/* --------------------------------------------------------------------------
   REX ORANGE COUNTY AUDIO WIDGET & SOUNDSCAPE
   -------------------------------------------------------------------------- */
let rexIsPlaying = true;
let currentRexTrackIndex = 0;

function initRexPlayer() {
  const playBtn = document.getElementById("rex-play-btn");
  const playIcon = document.getElementById("rex-play-icon");
  const eq = document.getElementById("rex-equalizer");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      rexIsPlaying = !rexIsPlaying;
      if (rexIsPlaying) {
        if (playIcon) playIcon.className = "fa-solid fa-pause";
        if (eq) eq.classList.remove("equalizer-paused");
      } else {
        if (playIcon) playIcon.className = "fa-solid fa-play";
        if (eq) eq.classList.add("equalizer-paused");
      }
    });
  }

  updateRexTrackDisplay();
}

window.nextRexTrack = function() {
  const tracks = portfolioData.rexOrangeCounty?.tracks || [];
  if (tracks.length === 0) return;

  currentRexTrackIndex = (currentRexTrackIndex + 1) % tracks.length;
  updateRexTrackDisplay();

  rexIsPlaying = true;
  const playIcon = document.getElementById("rex-play-icon");
  const eq = document.getElementById("rex-equalizer");
  if (playIcon) playIcon.className = "fa-solid fa-pause";
  if (eq) eq.classList.remove("equalizer-paused");
};

function updateRexTrackDisplay() {
  const tracks = portfolioData.rexOrangeCounty?.tracks || [];
  if (tracks.length === 0) return;

  const currentTrack = tracks[currentRexTrackIndex];
  const titleEl = document.getElementById("rex-track-title");
  const quoteBanner = document.getElementById("rex-quote-banner");
  const tagEl = document.getElementById("rex-track-tag");

  if (titleEl) {
    titleEl.textContent = `Rex O.C. — ${currentTrack.title}`;
  }

  if (tagEl) {
    tagEl.textContent = currentTrack.tag;
  }

  if (quoteBanner) {
    quoteBanner.innerHTML = `
      <i class="fa-solid fa-quote-left text-amber-400 text-xs mr-1 opacity-80"></i>
      <span class="text-amber-200 font-medium">"${currentTrack.quote}"</span>
      <span class="text-slate-400 text-xs ml-2 font-mono">• ${currentTrack.album}</span>
    `;
  }
}

/* --------------------------------------------------------------------------
   3. SKILLS RENDERING
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !portfolioData.skills) return;

  container.innerHTML = portfolioData.skills
    .map(category => {
      let iconClass = "fa-code";
      if (category.icon === "server") iconClass = "fa-server";
      if (category.icon === "tool") iconClass = "fa-screwdriver-wrench";

      return `
      <div class="glass-card p-6 rounded-2xl border border-white/10">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 border border-white/15">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <h3 class="text-lg font-bold text-white font-syne">${category.category}</h3>
        </div>

        <div class="space-y-4">
          ${category.items
            .map(
              item => `
            <div>
              <div class="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                <span class="font-medium text-slate-300 font-mono">${item.name}</span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-amber-300 border border-white/10 font-mono">${item.level}</span>
              </div>
              <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-white/5">
                <div class="bg-gradient-to-r from-amber-400 to-orange-500 h-1.5 rounded-full transition-all duration-1000" style="width: ${item.percent}%"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   4. PROJECTS RENDERING & FILTERING
   -------------------------------------------------------------------------- */
let currentCategory = "all";
let currentSearch = "";

function renderProjects(category = "all", searchQuery = "") {
  const grid = document.getElementById("projects-grid");
  const emptyState = document.getElementById("empty-projects");
  if (!grid) return;

  let filtered = portfolioData.projects;

  // Filter category
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter keyword
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered
    .map(project => {
      const isThisSite = project.isThisWebsite;
      const cardClass = isThisSite ? "glass-card this-website-card" : "glass-card";
      const badgeStyle = isThisSite
        ? "bg-purple-900/60 text-purple-300 border-purple-500/50 animate-pulse"
        : "bg-slate-800 text-slate-300 border-slate-700";

      return `
      <div class="${cardClass} rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300">
        <div>
          <!-- Project Image / Preview -->
          <div class="relative overflow-hidden aspect-video bg-slate-900 border-b border-slate-800/80">
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              loading="lazy" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-wrap gap-2">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md ${badgeStyle}">
                ${project.badge || project.categoryName}
              </span>
            </div>

            <!-- View Action Quick Hover -->
            <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onclick="openProjectModal('${project.id}')"
                class="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold backdrop-blur-md shadow-lg hover:bg-slate-200 flex items-center gap-1.5"
              >
                <span>Lihat Detail</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </button>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5 sm:p-6">
            <div class="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2 font-mono">
              <i class="fa-regular fa-folder text-amber-400"></i>
              <span>${project.categoryName}</span>
              ${isThisSite ? '<span class="text-amber-400 font-semibold">• Projek Portofolio Ini</span>' : ''}
            </div>

            <h3 class="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors font-syne">
              ${project.title}
            </h3>

            <p class="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
              ${project.summary}
            </p>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${project.techStack
                .map(
                  tech => `
                <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                  ${tech}
                </span>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
          <button 
            onclick="openProjectModal('${project.id}')"
            class="text-xs font-semibold text-amber-400 hover:text-white flex items-center gap-1.5 py-1.5 font-mono"
          >
            <span>Selengkapnya</span>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>

          <div class="flex items-center gap-2">
            ${
              project.repoUrl
                ? `
              <a 
                href="${project.repoUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Lihat Source Code GitHub"
                class="w-8 h-8 rounded-lg bg-black/60 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-white/15"
              >
                <i class="fa-brands fa-github text-sm"></i>
              </a>
            `
                : ""
            }
            ${
              project.demoUrl && project.demoUrl !== "#"
                ? `
              <a 
                href="${project.demoUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Buka Live Demo"
                class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-amber-400 hover:text-white transition-colors border border-white/15"
              >
                <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            `
                : ""
            }
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProjects(currentCategory, currentSearch);
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("project-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value;
      renderProjects(currentCategory, currentSearch);
    });
  }
}

/* --------------------------------------------------------------------------
   5. PROJECT DETAILS MODAL
   -------------------------------------------------------------------------- */
window.openProjectModal = function (projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-project-details");
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <!-- Modal Header Image -->
    <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 mb-6">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
      <div class="absolute top-3 left-3 flex gap-2">
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-black/80 text-amber-400 border border-white/20 backdrop-blur-md font-mono">
          ${project.categoryName}
        </span>
        ${
          project.isThisWebsite
            ? '<span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/50 backdrop-blur-md">🌟 Projek Ini Sendiri</span>'
            : ""
        }
      </div>
    </div>

    <!-- Title & Summary -->
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-syne">${project.title}</h2>
      <p class="text-slate-300 text-sm sm:text-base leading-relaxed">${project.description}</p>
    </div>

    <!-- Highlight Box -->
    ${
      project.highlights
        ? `
      <div class="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 mb-6 flex items-start gap-3">
        <i class="fa-solid fa-sparkles text-amber-400 mt-1"></i>
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5 font-mono">Highlight Projek</div>
          <div class="text-sm text-slate-200 font-medium">${project.highlights}</div>
        </div>
      </div>
    `
        : ""
    }

    <!-- Features Checklist -->
    <div class="mb-6">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-mono">
        <i class="fa-solid fa-list-check text-amber-400"></i>
        <span>Fitur Utama &amp; Keunggulan</span>
      </h3>
      <ul class="space-y-2.5">
        ${project.features
          .map(
            feat => `
          <li class="flex items-start gap-2.5 text-sm text-slate-300">
            <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5 text-xs"></i>
            <span>${feat}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>

    <!-- Tech Stack -->
    <div class="mb-8">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-mono">
        <i class="fa-solid fa-layer-group text-amber-400"></i>
        <span>Teknologi &amp; Framework</span>
      </h3>
      <div class="flex flex-wrap gap-2">
        ${project.techStack
          .map(
            tech => `
          <span class="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-black/60 text-slate-200 border border-white/10">
            ${tech}
          </span>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- External Links / CTA -->
    <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
      ${
        project.demoUrl && project.demoUrl !== "#"
          ? `
        <a 
          href="${project.demoUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 font-bold text-sm shadow-lg transition-all"
        >
          <span>Buka Demo Langsung</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
        </a>
      `
          : `
        <span class="text-xs text-slate-400 italic">
          ${project.isThisWebsite ? "💡 Anda sedang membuka website ini sekarang!" : "Live demo tersedia sesuai permintaan."}
        </span>
      `
      }

      ${
        project.repoUrl
          ? `
        <a 
          href="${project.repoUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/15 transition-all"
        >
          <i class="fa-brands fa-github text-base"></i>
          <span>Repository GitHub</span>
        </a>
      `
          : ""
      }
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

function setupModal() {
  const modalOverlay = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  if (!modalOverlay) return;

  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM SIMULATION
   -------------------------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("contact-alert");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      <span>Mengirim Pesan...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (alertBox) {
        alertBox.classList.remove("hidden");
        alertBox.innerHTML = `
          <div class="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 flex items-start gap-3">
            <i class="fa-solid fa-circle-check text-emerald-400 mt-1"></i>
            <div>
              <div class="font-bold text-sm">Pesan Berhasil Terkirim!</div>
              <div class="text-xs text-emerald-300/90 mt-0.5">Terima kasih <strong>${name}</strong>, saya akan segera membalas email Anda ke <strong>${email}</strong> dalam waktu maksimal 24 jam.</div>
            </div>
          </div>
        `;

        setTimeout(() => {
          alertBox.classList.add("hidden");
        }, 7000);
      }
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL EFFECTS & BACK TO TOP
   -------------------------------------------------------------------------- */
function setupScrollEffects() {
  const backToTopBtn = document.getElementById("back-to-top");
  const currentYearEl = document.getElementById("current-year");

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  window.addEventListener("scroll", () => {
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
        backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none");
        backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* --------------------------------------------------------------------------
   8. MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function setupMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

/* --------------------------------------------------------------------------
   9. COPY EMAIL TO CLIPBOARD
   -------------------------------------------------------------------------- */
function setupCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const email = portfolioData.profile.socials.email;
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <i class="fa-solid fa-check text-emerald-400"></i>
        <span class="text-emerald-400 font-semibold">Email Tersalin!</span>
      `;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}
