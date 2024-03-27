#!/usr/bin/env sh

set -x;

pnpm build
cd dist
git init
git add .
git commit -m 'deploy'
git checkout -b master
git push -f git@github.com:enorekids/homepage.git master:gh-pages