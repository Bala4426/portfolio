#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch of
# https://github.com/Bala4426/portfolio  ->  https://bala4426.github.io/portfolio/
#
# Run from Git Bash:  bash deploy.sh
# First run will ask you to sign in to GitHub (browser or personal access token).
set -euo pipefail

REPO_URL="https://github.com/Bala4426/portfolio.git"
cd "$(dirname "$0")"

npm run build

# GitHub Pages: serve index.html for unknown paths, skip Jekyll processing.
cp dist/index.html dist/404.html
touch dist/.nojekyll

cd dist
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.name="Balamurugan V" -c user.email="muruganbala407@gmail.com" \
  commit -q -m "Deploy portfolio $(date +%Y-%m-%d)"
git push -f "$REPO_URL" gh-pages
rm -rf .git

echo
echo "Pushed. If this is the first deploy, open"
echo "  https://github.com/Bala4426/portfolio/settings/pages"
echo "and set Source = 'Deploy from a branch', Branch = gh-pages, folder = / (root)."
echo "Site: https://bala4426.github.io/portfolio/"
