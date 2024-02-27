import React from "react"
import { Highlight, themes } from "prism-react-renderer"
import styled from "styled-components"

const Inline = styled.span`
  padding: 0 4px;
  border-radius: 5px;
  font-family: "Roboto Mono";
  letter-spacing: -1px;
  font-size: calc(100% - 2px);
  background-color: color-mix(in srgb, white, transparent 80%);
  border: 2px solid color-mix(in srgb, white, transparent 90%);
`

const Multiline = styled.div`
  font-family: "Roboto Mono";
  width: 100%;
  font-size: 1.025rem;

  .block {
    padding: 25px 40px 25px 20px;
    border-radius: 5px;
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    line-height: 30px;
  }

  .inline-highlight {
    font-weight: 600;
    position: relative;
    background-color: #2c5c2c;
    padding: 1px 0.2px;
    border-radius: 2px;
  }
`

export default function CodeBlock({
  children,
  className,
  category = "regular",
}) {
  const language = className?.replace(/language-/, "") || ""

  const inline = !className

  if (inline) return <Inline className="inline-code">{children}</Inline>

  return (
    <Multiline className="multiline-code">
      <Highlight theme={themes.dracula} code={children} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => {
          if (tokens && tokens[tokens.length - 1][0].content === "\n") {
            tokens.pop()
          }

          return (
            <pre className="block" style={{ ...style }}>
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })
                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key, i) => {
                      if (
                        (token.content.includes("<hi>") ||
                          token.content.includes("``")) &&
                        token.types.includes("plain")
                      ) {
                        return (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: token.content
                                .replace(
                                  /``.*?``/g,
                                  match =>
                                    `<span class='inline-highlight'>${match.substring(
                                      2,
                                      match.length - 2
                                    )}</span>`
                                )
                                .replace(
                                  /<hi>/g,
                                  `<span class='inline-highlight'>`
                                )
                                .replace(/<\/hi>/g, "</span>"),
                            }}
                          />
                        )
                      }

                      return (
                        <span key={key} {...getTokenProps({ token, key })} />
                      )
                    })}
                  </div>
                )
              })}
            </pre>
          )
        }}
      </Highlight>
    </Multiline>
  )
}