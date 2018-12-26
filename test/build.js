const marked = require('marked')
const fs = require('fs')
const path = require('path')
const child = require('child_process')
const es = fs.readFileSync('../README.md', 'utf-8')
  .replace('[中文文档](README_CN.md)', '<a href="./index_cn.html">中文</a>')
const cn = fs.readFileSync('../README_CN.md', 'utf-8')
  .replace('[English MD](README.md)', '<a href="./index.html">English</a>')

const init = t => `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>v-decorators</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack@latest/dist/hack.css"><style>.main {max-width: 1000px;margin: 0 auto;padding: 10px;}</style></head>
<body class="hack"><div class="main">${marked(t)}<hr>This project is open-sourced on <a href="https://github.com/HaiFengFE/v-decorators">GitHub</a>.</div></body>`

child.exec('mkdir dist')
fs.writeFileSync(path.join(__dirname, 'dist/index.html'), init(es))
fs.writeFileSync(path.join(__dirname, 'dist/index_cn.html'), init(cn))
