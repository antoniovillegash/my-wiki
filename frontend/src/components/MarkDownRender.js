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
  
  const markdown = `
# Tittle
Repellendus harum labore eveniet amet itaque blanditiis. Officiis aliquam veritatis delectus doloremque ab at. Tempora quis beatae nostrum. Quo dignissimos temporibus rerum esse.

Quas quo est fugit reiciendis doloribus ut. Suscipit quis et explicabo sed deleniti explicabo et maiores. Accusantium dolor quibusdam est voluptatum. Mollitia ex excepturi molestias quibusdam velit possimus.



## subtittle

  A paragraph with *emphasis* and **strong importance**.

Quas quo est fugit reiciendis doloribus ut. Suscipit quis et explicabo sed deleniti explicabo et maiores. Accusantium dolor quibusdam est voluptatum. Mollitia ex excepturi molestias quibusdam velit possimus.

A block quote with ~strikethrough~ and a URL: https://reactjs.org.

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
| otra celda | nueva |
| otra celda | nueva |
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

Quas quo est fugit reiciendis doloribus ut. Suscipit quis et explicabo sed deleniti explicabo et maiores. Accusantium dolor quibusdam est voluptatum. Mollitia ex excepturi molestias quibusdam velit possimus.

`

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={dark} language={language} children={value} className="syntax-highlighter"/>
  }
}

  return (
    <div className="markdown-render">
      <h1>Contenido</h1>
      <Toc markdownText={markdown} />
      <ReactMarkdown renderers={renderers} plugins={[Slug,gfm]} children={markdown} linkTarget="_blank" allowDangerousHtml="true"/>
      
    </div>
  )
}

