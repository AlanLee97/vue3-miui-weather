#!/usr/bin/env sh

# 删除之前的dist文件夹
rm -rf dist

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name "AlanLee"
git config user.email "1445654576@qq.com"
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/AlanLee97/vue3-miui-weather.git master:gh-pages

cd -