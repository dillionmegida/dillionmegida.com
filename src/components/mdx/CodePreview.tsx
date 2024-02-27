import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid var(--midMainColor1);
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

export default function CodePreview({ html, css }) {
  return (
    <>
      {/* {css && <CodeBlock className="language-css">{css}</CodeBlock>}
      {html && <CodeBlock className="language-html">{html}</CodeBlock>} */}

      <Container>
        <div className="top-bar">Code Preview</div>
        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <style>
                @scope {
                  ${css}
                }
              </style>
              
              ${html}

              `,
            }}
          ></div>
        </div>
      </Container>
    </>
  )
}
