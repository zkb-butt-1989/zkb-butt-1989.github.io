/* ==========================================================================
   Renders the content from data.js and wires up the page interactions.
   No libraries; works on GitHub Pages as-is.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) return;

  /* ---------- Helpers ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode etc. */ }
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (inline SVG, stroke style) ---------- */
  var ICONS = {
    sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M1.5 12H4M20 12h2.5M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    award: '<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    trending: '<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
    play: '<path d="M5 3.5v17a1 1 0 0 0 1.5.86l14.5-8.5a1 1 0 0 0 0-1.72L6.5 2.64A1 1 0 0 0 5 3.5z"/>',
    appStore: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="m8 16.5 4-8.5 4 8.5M9.5 13.5h5"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  };

  function icon(name) {
    var body = ICONS[name] || ICONS.link;
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      body +
      "</svg>"
    );
  }

  var CATEGORY_ICON = { android: "smartphone", cross: "layers", web: "server", blockchain: "box" };

  function categoryLabel(filters, id) {
    for (var i = 0; i < filters.length; i++) if (filters[i].id === id) return filters[i].label;
    return id;
  }

  function tagsHtml(tags) {
    if (!tags || !tags.length) return "";
    return (
      '<ul class="tags" aria-label="Technologies">' +
      tags.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") +
      "</ul>"
    );
  }

  function extLink(href) {
    return 'href="' + esc(href) + '" target="_blank" rel="noopener noreferrer"';
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    var p = D.profile;
    $("#hero-role").innerHTML = '<span class="dot" aria-hidden="true"></span>' + esc(p.currentRole);
    $("#hero-name").textContent = p.name;
    $("#hero-title").innerHTML = esc(p.title) + '<span class="stack">' + esc(p.stack) + "</span>";
    $("#hero-pitch").textContent = p.pitch;

    if (p.resume) {
      var r = $("#hero-resume");
      r.href = p.resume;
      r.hidden = false;
      r.setAttribute("target", "_blank");
      r.setAttribute("rel", "noopener");
      r.innerHTML = icon("file") + "Résumé";
    }

    var socials = [
      { name: "LinkedIn", href: p.linkedin, icon: "linkedin", ext: true },
      { name: "GitHub", href: p.github, icon: "github", ext: true },
      { name: "Email", href: p.email ? "mailto:" + p.email : "", icon: "mail" },
    ].filter(function (s) { return s.href; });

    $("#hero-socials").innerHTML = socials
      .map(function (s) {
        var attrs = s.ext ? extLink(s.href) : 'href="' + esc(s.href) + '"';
        return "<li><a " + attrs + ' aria-label="' + esc(s.name) + '" title="' + esc(s.name) + '">' + icon(s.icon) + "</a></li>";
      })
      .join("");

    var avatar = p.photo
      ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" width="96" height="96" decoding="async" />'
      : esc(p.initials);

    $("#profile-card").innerHTML =
      '<div class="profile-card__top">' +
      '<div class="avatar"' + (p.photo ? "" : ' aria-hidden="true"') + ">" + avatar + "</div>" +
      "<div>" +
      '<p class="profile-card__name">' + esc(p.name) + "</p>" +
      '<p class="profile-card__role">' + esc(p.title) + "</p>" +
      "</div></div>" +
      '<ul class="info-list">' +
      (p.quickInfo || [])
        .map(function (row) {
          return (
            "<li>" +
            '<span class="info-icon">' + icon(row.icon) + "</span>" +
            "<span>" +
            '<span class="info-label">' + esc(row.label) + "</span>" +
            '<span class="info-value">' + esc(row.value) + "</span>" +
            "</span></li>"
          );
        })
        .join("") +
      "</ul>";

    $("#stats").innerHTML = D.stats
      .map(function (s) {
        return (
          '<li class="stat">' +
          '<span class="stat__value">' + esc(s.value) + "</span>" +
          '<span class="stat__label">' + esc(s.label) + "</span>" +
          "</li>"
        );
      })
      .join("");
  }

  /* ---------- About ---------- */
  function renderAbout() {
    // about paragraphs are authored in data.js and may contain simple HTML (<strong>)
    $("#about-text").innerHTML = D.profile.about.map(function (para) { return "<p>" + para + "</p>"; }).join("");

    $("#highlights").innerHTML = D.highlights
      .map(function (h) {
        return (
          '<li class="highlight reveal">' +
          '<span class="highlight__icon">' + icon(h.icon) + "</span>" +
          "<div>" +
          '<h3 class="highlight__title">' + esc(h.title) + "</h3>" +
          '<p class="highlight__text">' + esc(h.text) + "</p>" +
          "</div></li>"
        );
      })
      .join("");
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    $("#skills-grid").innerHTML = D.skills
      .map(function (g) {
        return (
          '<article class="skill-card reveal' + (g.wide ? " skill-card--wide" : "") + '">' +
          '<div class="skill-card__head">' +
          '<span class="skill-card__icon">' + icon(g.icon) + "</span>" +
          '<h3 class="skill-card__title">' + esc(g.title) + "</h3>" +
          "</div>" +
          '<ul class="chips">' +
          g.items.map(function (s) { return '<li class="chip">' + esc(s) + "</li>"; }).join("") +
          "</ul></article>"
        );
      })
      .join("");
  }

  /* ---------- Experience ---------- */
  function jobHtml(job) {
    var name = esc(job.company);
    var company = job.url ? "<a " + extLink(job.url) + ">" + name + icon("arrowUpRight") + "</a>" : name;
    var native = job.companyNative ? '<span class="job__native" lang="ar">' + esc(job.companyNative) + "</span>" : "";
    var promoted = job.roles.length > 1;

    var roles = job.roles
      .map(function (role, i) {
        var badge = promoted && i === 0 ? '<span class="role__badge">' + icon("trending") + "Promoted</span>" : "";
        return (
          '<div class="role">' +
          '<div class="role__head">' +
          '<h4 class="role__title">' + esc(role.title) + badge + "</h4>" +
          '<span class="role__dates">' + esc(role.start) + " - " + esc(role.end) + "</span>" +
          "</div>" +
          '<ul class="role__bullets">' +
          role.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
          "</ul></div>"
        );
      })
      .join("");

    return (
      '<li class="job reveal"><article class="job__card">' +
      '<header class="job__head">' +
      '<h3 class="job__company">' + company + native + "</h3>" +
      '<span class="job__location">' + icon("pin") + esc(job.location) + "</span>" +
      "</header>" +
      roles +
      tagsHtml(job.tags) +
      "</article></li>"
    );
  }

  function renderExperience() {
    $("#timeline").innerHTML = D.experience.map(jobHtml).join("");
    if (D.earlierExperience && D.earlierExperience.length) {
      $("#timeline-earlier").innerHTML = D.earlierExperience.map(jobHtml).join("");
    } else {
      $("#earlier").hidden = true;
    }
  }

  /* ---------- Filters (shared) ---------- */
  function renderFilters(container, filters, items, key, onChange) {
    container.innerHTML = filters
      .map(function (f, i) {
        var count = f.id === "all" ? items.length : items.filter(function (it) { return it[key] === f.id; }).length;
        if (!count) return "";
        return (
          '<button type="button" class="filter" data-filter="' + esc(f.id) + '" aria-pressed="' + (i === 0) + '">' +
          esc(f.label) + '<span class="filter__count">' + count + "</span></button>"
        );
      })
      .join("");

    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", container).forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      onChange(btn.getAttribute("data-filter"));
    });
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    var grid = $("#projects-grid");

    grid.innerHTML = D.projects
      .map(function (p, i) {
        var links = p.links || {};
        var linkHtml = "";
        if (links.play) linkHtml += "<a " + extLink(links.play) + ' aria-label="' + esc(p.name) + ' on Google Play" title="Google Play">' + icon("play") + "</a>";
        if (links.appStore) linkHtml += "<a " + extLink(links.appStore) + ' aria-label="' + esc(p.name) + ' on the App Store" title="App Store">' + icon("appStore") + "</a>";
        if (links.github) linkHtml += "<a " + extLink(links.github) + ' aria-label="' + esc(p.name) + ' source code" title="Source code">' + icon("github") + "</a>";
        if (links.web) linkHtml += "<a " + extLink(links.web) + ' aria-label="' + esc(p.name) + ' website" title="Website">' + icon("arrowUpRight") + "</a>";

        var stores = [links.play && "Google Play", links.appStore && "App Store"].filter(Boolean);
        var badge = stores.length
          ? '<span class="project__badge project__badge--live">Live on ' + stores.join(" & ") + "</span>"
          : '<span class="project__badge">' + esc(categoryLabel(D.projectFilters, p.category)) + "</span>";

        var more = p.details
          ? '<button type="button" class="project__more" data-project="' + i + '">View details' + icon("arrowUpRight") + "</button>"
          : "";

        return (
          '<li class="project reveal" data-category="' + esc(p.category) + '">' +
          '<div class="project__top">' +
          '<span class="project__icon">' + icon(CATEGORY_ICON[p.category] || "smartphone") + "</span>" +
          '<div class="project__links">' + linkHtml + "</div>" +
          "</div>" +
          badge +
          '<h3 class="project__name">' + esc(p.name) + "</h3>" +
          (p.client ? '<p class="project__client">' + esc(p.client) + "</p>" : "") +
          '<p class="project__summary">' + esc(p.summary) + "</p>" +
          tagsHtml(p.tags) +
          more +
          "</li>"
        );
      })
      .join("");

    renderFilters($("#project-filters"), D.projectFilters, D.projects, "category", function (id) {
      $$(".project", grid).forEach(function (card) {
        card.hidden = !(id === "all" || card.getAttribute("data-category") === id);
      });
    });

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".project__more");
      if (btn) openProject(Number(btn.getAttribute("data-project")), btn);
    });
  }

  /* ---------- Archive ---------- */
  function renderArchive() {
    var body = $("#archive-body");
    body.innerHTML = D.archive
      .map(function (a) {
        var note = a.note
          ? '<span class="note-badge' + (/final/i.test(a.note) ? " note-badge--accent" : "") + '">' + esc(a.note) + "</span>"
          : "";
        return (
          '<tr data-category="' + esc(a.category) + '">' +
          '<td class="archive__name">' + esc(a.name) + "</td>" +
          '<td class="archive__cat">' + esc(categoryLabel(D.archiveFilters, a.category)) + "</td>" +
          '<td class="archive__tech">' + esc(a.tech) + "</td>" +
          '<td class="archive__note">' + note + "</td>" +
          "</tr>"
        );
      })
      .join("");

    renderFilters($("#archive-filters"), D.archiveFilters, D.archive, "category", function (id) {
      $$("tr", body).forEach(function (row) {
        row.hidden = !(id === "all" || row.getAttribute("data-category") === id);
      });
    });
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    $("#education-list").innerHTML = D.education
      .map(function (e) {
        return (
          '<li class="edu-item reveal">' +
          '<div class="edu-item__top">' +
          '<h4 class="edu-item__degree">' + esc(e.degree) + "</h4>" +
          (e.period ? '<span class="edu-item__period">' + esc(e.period) + "</span>" : "") +
          "</div>" +
          '<p class="edu-item__school">' + esc(e.school) + "</p>" +
          (e.note ? '<p class="edu-item__note">' + esc(e.note) + "</p>" : "") +
          "</li>"
        );
      })
      .join("");

    $("#cert-list").innerHTML = D.certifications
      .map(function (c) {
        return (
          '<li class="cert reveal">' +
          '<span class="cert__icon">' + icon("award") + "</span>" +
          '<div class="cert__body">' +
          '<p class="cert__name">' + esc(c.name) + "</p>" +
          '<p class="cert__issuer">' + [c.issuer, c.date].filter(Boolean).map(esc).join(" · ") + "</p>" +
          (c.description ? '<p class="cert__desc">' + esc(c.description) + "</p>" : "") +
          (c.link ? '<a class="cert__link" ' + extLink(c.link) + ">View certificate" + icon("arrowUpRight") + "</a>" : "") +
          "</div></li>"
        );
      })
      .join("");

    $("#languages").innerHTML = D.profile.languages
      .map(function (l) { return '<li class="chip">' + esc(l) + "</li>"; })
      .join("");
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    var p = D.profile;
    var html = "";
    if (p.email) html += '<a class="btn btn--primary" href="mailto:' + esc(p.email) + '">' + icon("mail") + "Email me</a>";
    if (p.linkedin) html += '<a class="btn btn--ghost" ' + extLink(p.linkedin) + ">" + icon("linkedin") + "LinkedIn</a>";
    if (p.github) html += '<a class="btn btn--ghost" ' + extLink(p.github) + ">" + icon("github") + "GitHub</a>";
    $("#contact-actions").innerHTML = html;
  }

  /* ---------- Project modal ---------- */
  var modal = $("#project-modal");
  var lastTrigger = null;

  function listSection(title, items, withIcon) {
    if (!items || !items.length) return "";
    return (
      '<div class="modal__section"><h3>' + esc(title) + '</h3><ul class="modal__list">' +
      items.map(function (it) { return "<li>" + (withIcon ? icon("check") : "") + esc(it) + "</li>"; }).join("") +
      "</ul></div>"
    );
  }

  function textSection(title, text) {
    return text ? '<div class="modal__section"><h3>' + esc(title) + "</h3><p>" + esc(text) + "</p></div>" : "";
  }

  function openProject(index, trigger) {
    var p = D.projects[index];
    if (!p || !p.details || !modal || typeof modal.showModal !== "function") return;
    var d = p.details;
    var links = p.links || {};
    lastTrigger = trigger || null;

    var shots = d.screenshots && d.screenshots.length
      ? '<div class="modal__section"><h3>Screenshots</h3><div class="modal__shots">' +
        d.screenshots.map(function (src, i) {
          return '<img src="' + esc(src) + '" alt="' + esc(p.name) + " screenshot " + (i + 1) + '" loading="lazy" />';
        }).join("") +
        "</div></div>"
      : "";

    var actions = "";
    if (links.play) actions += '<a class="btn btn--primary" ' + extLink(links.play) + ">" + icon("play") + "Google Play</a>";
    if (links.appStore) actions += '<a class="btn ' + (links.play ? "btn--ghost" : "btn--primary") + '" ' + extLink(links.appStore) + ">" + icon("appStore") + "App Store</a>";
    if (links.web) actions += '<a class="btn btn--ghost" ' + extLink(links.web) + ">" + icon("arrowUpRight") + "Website</a>";
    if (links.github) actions += '<a class="btn btn--ghost" ' + extLink(links.github) + ">" + icon("github") + "Source</a>";

    $("#modal-content").innerHTML =
      '<button type="button" class="icon-btn modal__close" data-close aria-label="Close details">' + icon("x") + "</button>" +
      '<p class="modal__eyebrow">' + esc(categoryLabel(D.projectFilters, p.category)) + "</p>" +
      '<h2 class="modal__title" id="modal-title">' + esc(p.name) + "</h2>" +
      (p.client ? '<p class="modal__client">' + esc(p.client) + "</p>" : "") +
      textSection("Overview", d.overview || p.summary) +
      textSection("My role", d.role) +
      listSection("Key features", d.features, true) +
      listSection("Challenges", d.challenges, true) +
      listSection("Results", d.results, true) +
      shots +
      (p.tags && p.tags.length ? '<div class="modal__section"><h3>Tech</h3>' + tagsHtml(p.tags) + "</div>" : "") +
      (actions ? '<div class="modal__actions">' + actions + "</div>" : "");

    modal.showModal();
    document.body.classList.add("modal-open");
    var closeBtn = $("[data-close]", modal);
    if (closeBtn) closeBtn.focus();
  }

  function initModal() {
    if (!modal) return;
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) modal.close();
    });
    modal.addEventListener("close", function () {
      document.body.classList.remove("modal-open");
      if (lastTrigger) lastTrigger.focus();
    });
  }

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);
    var meta = $("#meta-theme-color");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b1220" : "#f8fafc");
    var btn = $("#theme-toggle");
    if (btn) {
      var next = theme === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", "Switch to " + next + " theme");
      btn.setAttribute("title", "Switch to " + next + " theme");
    }
  }

  function initTheme() {
    var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current);

    $("#theme-toggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      storageSet("theme", next);
    });

    // Follow OS changes until the visitor picks a theme themselves.
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (e) {
        var saved = storageGet("theme");
        if (saved !== "light" && saved !== "dark") applyTheme(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    var nav = $("#nav");
    var toggle = $("#menu-toggle");
    var menu = $("#nav-menu");

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target)) setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && nav.classList.contains("is-open")) setOpen(false);
    });

    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Scroll-spy: the active section is the last one whose top has passed 40% of the
    // viewport; at the very bottom of the page the last section wins.
    var links = $$(".nav__links a");
    var sections = $$("main > section[id]");
    var activeId = null;
    var ticking = false;

    function setActive(id) {
      if (id === activeId) return;
      activeId = id;
      links.forEach(function (a) {
        var on = a.getAttribute("href") === "#" + id;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }

    function spy() {
      ticking = false;
      var line = window.innerHeight * 0.4;
      var current = sections[0] ? sections[0].id : null;
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      });
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current);
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(spy);
      }
    }, { passive: true });
    window.addEventListener("resize", spy);
    spy();
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.remove("reveal"); });
      return;
    }

    // Stagger siblings that enter together (e.g. a row of cards).
    var io = new IntersectionObserver(
      function (entries) {
        var batch = entries.filter(function (e) { return e.isIntersecting; });
        batch.forEach(function (entry, i) {
          var el = entry.target;
          io.unobserve(el);
          var delay = Math.min(i, 5) * 70;
          el.style.transitionDelay = delay + "ms";
          el.classList.add("is-visible");
          // Hand transitions back to the component once the reveal is done.
          window.setTimeout(function () {
            el.classList.remove("reveal", "is-visible");
            el.style.transitionDelay = "";
          }, 750 + delay);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Icons in static markup ---------- */
  function hydrateIcons() {
    $$("[data-icon]").forEach(function (el) {
      el.innerHTML = icon(el.getAttribute("data-icon"));
    });
  }

  /* ---------- Boot ---------- */
  hydrateIcons();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderArchive();
  renderEducation();
  renderContact();
  initModal();
  initTheme();
  initNav();
  initReveal();
  $("#year").textContent = String(new Date().getFullYear());
})();
