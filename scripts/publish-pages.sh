#!/usr/bin/env bash
set -euo pipefail
npm run build
rm -rf docs/assets
mkdir -p docs
cp dist/index.html docs/index.html
cp -R dist/assets docs/assets
cp official-rules.md docs/official-rules.md
printf '\nPublished dist to docs/\n'
