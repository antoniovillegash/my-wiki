import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
// import slug from 'remark-slug'

// import toc from 'remark-toc'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Toc from "react-toc";
// var slug = require('remark-slug')
var Slug = require('remark-slug')



export default function MarkDownRender() {
  
  const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter className="syntax-highlighter" style={dark} language={language} children={value}  />
    }
  }
  

  const markdown = `
# title


  esto es un párrafo

# Lorem ipsum

## subtitulo

  parrafo
  
  A paragraph with *emphasis* and **strong importance**. 

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* done
* hola

parrafo

* fo
* fo 

## tabla

| a | b |
| - | - |
| hola | esto es una celda |
| otra celda | nueva |

## Code
Este es el ejemplo de código con syntaxis:

\`\`\` python
print('hola mundo')
x = 5.001
x += x*3
\`\`\`

## Imágen
![](https://images.pexels.com/photos/3953106/pexels-photo-3953106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)


`

  return (
    <div className="markdown-render">
      <h1>Contenido</h1>
      <Toc markdownText={markdown} />
      <ReactMarkdown renderers={[renderers]} plugins={[Slug,gfm]} children={markdown} linkTarget="_blank" allowDangerousHtml="true"/>
      <h2 id="tabla">test</h2>
    </div>
  )
}

