import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 2px solid #3a3e4d;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;

  .top-bar {
    padding: 10px 20px;
    background-color: var(--mainColor1);
    font-size: 1rem;
    color: whitesmoke;
  }

  .content {
    padding: 20px;
    background-color: color-mix(in srgb, var(--mainColor1) 90%, white);

    * {
      margin: 0;
      padding: 0;
      all: unset;
    }

    img {
      all: unset !important;
    }

    iframe {
      border: 2px solid #aaa;
    }

    style {
      display: none !important;
    }
  }
`

type Props = {
  html: string
  css?: string
}

const defaultCSS = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

`

export default function CodePreview({ html, css }: Props) {
  const contentElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentElem.current) {
      const shadow = contentElem.current.attachShadow({ mode: "open" })

      const div = document.createElement("div")
      div.innerHTML = html

      shadow.appendChild(div)

      if (css) {
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(defaultCSS + css)

        shadow.adoptedStyleSheets = [sheet]
      }
    }
  }, [])

  return (
    <>
      {/* {css && <CodeBlock className="language-css">{css}</CodeBlock>}
      {html && <CodeBlock className="language-html">{html}</CodeBlock>} */}

      <Container>
        <div className="top-bar">Code Preview</div>
        <div className="content">
          <div ref={contentElem} />
        </div>
      </Container>
    </>
  )
}
