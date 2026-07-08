#!/bin/zsh
set -euo pipefail

REPO_ROOT="/Users/fengxilei/Documents/New project"
REMOTE_URL="https://github.com/2251574316-dotcom/Game-blackthorn-hall-archive.git"
COMMIT_MESSAGE="Add Blackthorn Hall archive site"

cd "$REPO_ROOT"

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "$REMOTE_URL"
else
  git remote set-url origin "$REMOTE_URL"
fi

git add .github corridor-217

if ! git diff --cached --quiet; then
  git commit -m "$COMMIT_MESSAGE"
fi

git branch -M main
git push -u origin main

echo ""
echo "Push finished."
echo "Next:"
echo "1. Open: https://github.com/2251574316-dotcom/Game-blackthorn-hall-archive/settings/pages"
echo "2. Set Source to: GitHub Actions"
echo "3. Wait for the Pages workflow to finish"
