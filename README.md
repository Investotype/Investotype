# Investotype

Static website for the Investotype investor-personality quiz and market news pages.

## Publish on GitHub Pages

This repo is configured to auto-deploy to GitHub Pages using GitHub Actions.

1. Create a new GitHub repository.
2. Upload your files to the `main` branch.
3. In the repository, open `Settings -> Pages`.
4. Set `Source` to `GitHub Actions`.
5. Wait for the `Deploy static site to GitHub Pages` workflow to finish.

Notes:
- You can upload files directly at repo root, or upload the whole `my codex` folder.
- The workflow auto-detects where `index.html` is and deploys from there.

After the workflow finishes, your site will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## Local preview

Because this is a plain static site, you can preview by opening `index.html` directly, or with a local static server.
