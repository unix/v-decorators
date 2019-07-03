const fs = require('fs')

const es = fs.readFileSync('../README.md', 'utf-8')
  .replace('[中文文档](README_CN.md)', '<a href="./index_cn.html">中文</a>')
const cn = fs.readFileSync('../README_CN.md', 'utf-8')
  .replace('[English MD](README.md)', '<a href="./index.html">English</a>')

const init = t => `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>v-decorators</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack@latest/dist/hack.css"</head><body class="hack"><div style="max-width: 1000px;margin: 0 auto;padding: 30px 0;">
${require('marked')(t)}<hr>This project is open-sourced on <a href="https://github.com/unix/v-decorators">GitHub</a>.</div></body>`

require('child_process').exec('mkdir dist && cp ../logo-v.png dist/ && cp -R assets/ dist/')
fs.writeFileSync('dist/index.html', init(es))
fs.writeFileSync('dist/index_cn.html', init(cn))
