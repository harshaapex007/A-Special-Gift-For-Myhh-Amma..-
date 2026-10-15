# For Mona Akka 💗 — Greeting Website

A small responsive greeting website made with HTML, CSS, and JavaScript, using your uploaded photos.

## Run it on your computer

1. Extract `mona_akka_greeting.zip`.
2. Open the `mona_akka_greeting` folder in VS Code.
3. Install the **Live Server** extension in VS Code (one time).
4. Right-click `index.html` and choose **Open with Live Server**.
5. Your browser opens the greeting website. You can also double-click `index.html` to open it, but Live Server is usually more convenient.

## Publish it free with GitHub Pages

> This is a static website, so it does not need a Python server. GitHub Pages can host HTML, CSS, JavaScript, and images for free. Python is useful for backend features, but this greeting only needs the browser.

1. Sign in to GitHub and click **New repository**.
2. Name it `mona-akka-greeting`. Choose **Public**, then create the repository.
3. In the repository page, click **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, the `assets` folder and `README.md` from this project. Keep the same folder structure.
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Choose branch **main** and folder **/(root)**, then click **Save**.
9. Wait a few minutes and refresh the Pages section. GitHub will show your website URL, usually:
   `https://YOUR-USERNAME.github.io/mona-akka-greeting/`
10. Open that URL and send it to Mona Akka. Replace `YOUR-USERNAME` with your actual GitHub username.

## Important notes

- Keep `assets` next to `index.html`; do not move the photos out of that folder.
- The website uses the five photos you supplied. The photos are optimized for website loading, not artificially claimed to be true 8K. Upscaling a photo cannot recreate details that were not in the original.
- If you want to replace a photo, put the new image in `assets` and update the matching `<img src="assets/...">` in `index.html`.
- The page uses Google Fonts when internet is available; it still works without them using fallback fonts.
- The website does not collect or send any personal data.
