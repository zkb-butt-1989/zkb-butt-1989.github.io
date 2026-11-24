# Zubair Khalid - Portfolio

Live at **https://zkb-butt-1989.github.io** (repository `zkb-butt-1989/zkb-butt-1989.github.io`).

A single-page personal portfolio written in plain HTML, CSS and JavaScript. It has no build step and no dependencies, so GitHub Pages can serve it as-is.

## Structure

```
index.html              page skeleton (sections, nav, modal)
assets/css/styles.css   design tokens (light + dark), layout, responsive rules
assets/js/data.js       ALL content: profile, skills, experience, projects, archive, education
assets/js/main.js       renders data.js and handles theme, menu, filters, modal, animations
assets/img/             favicon, profile photo and project screenshots
.nojekyll               tells GitHub Pages to serve files untouched
```

## Editing content

Everything you see on the page comes from **`assets/js/data.js`**:

| To change… | Edit in `data.js` |
| --- | --- |
| Name, title, pitch, about text | `profile` |
| Profile photo | `profile.photo`: `"assets/img/profile.jpg"` (square, at least 400×400) |
| Résumé button | `profile.resume`: `"assets/Zubair-Khalid-Resume.pdf"` |
| GitHub icon/button | `profile.github`: `"https://github.com/<username>"` |
| Hero numbers | `stats` |
| Achievement cards | `highlights` (icons: `users`, `trending`, `zap`, `shield`, `award`, `check`) |
| Skill groups | `skills` (`wide: true` makes a card span two columns) |
| Jobs | `experience` and `earlierExperience`. Two or more `roles` show a "Promoted" badge |
| Projects | `projects` (category: `android`, `cross`, `web`, `blockchain`; links: `play`, `appStore`, `web`, `github`) |
| Hardware / academic list | `archive` |
| Education & certificates | `education`, `certifications` |

### Adding project details

Add a `details` object to any project. A **View details** button then appears on its card and opens a dialog:

```js
details: {
  overview: "What the product is and who it's for.",
  role: "What you owned.",
  features: ["Feature one", "Feature two"],
  challenges: ["A hard problem and how you solved it"],
  results: ["Measurable outcome, e.g. crash-free sessions 97% → 99.6%"],
  screenshots: ["assets/img/projects/app-1.png", "assets/img/projects/app-2.png"],
},
```

Every field is optional. Projects still marked `// TODO: details` need your write-ups.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deploy to GitHub Pages (free)

1. Create a **public** repository named exactly `<your-username>.github.io`.
2. Push this folder to the `main` branch.
3. In the repository, open **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, then **main** and **/ (root)**.
4. After a minute or two the site is live at `https://<your-username>.github.io`.

### Optional: custom domain

Buy a domain such as `zubairkhalid.dev` (Cloudflare Registrar and Porkbun sell at cost, roughly $10-15 a year). Then:

1. Add a file named `CNAME` to this folder containing just the domain, e.g. `zubairkhalid.dev`.
2. At your DNS provider, add `A` records for the apex domain pointing to GitHub Pages
   (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), plus a `CNAME` record for `www` pointing to `<your-username>.github.io`.
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once the certificate is ready.
