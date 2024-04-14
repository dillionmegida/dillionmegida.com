import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #e4e4e4;

  h1 {
    font-size: clamp(1.7rem, 7vw, 2.5rem);
    line-height: 1;
  }

  hr {
    margin: 40px 0;
    border-color: color-mix(in srgb, white, transparent 90%);
  }

  p {
    font-size: clamp(1.1rem, 7vw, 1.4rem);
    margin-bottom: 10px;
    line-height: 1.5;

    b {
      color: yellow;
    }

    a {
      background-color: #9a169a;
      color: white;
      display: inline-block;
      border-radius: 2px;
      border: 3px solid #7b177b;
      padding: 5px 15px;
      font-size: 2.5em;
      margin-top: 10px;
    }
  }

  .input-group {
    label {
      display: block;
      color: white;
      font-size: clamp(1.1rem, 7vw, 1.6rem);
      line-height: 1.4;
    }

    .input {
      margin: 30px 0;

      span {
        display: block;
        color: #f97a7a;
        font-weight: 500;
        opacity: 0;
        margin-top: 10px;

        &.show {
          opacity: 1;
        }
      }
    }

    input {
      width: 100%;
      padding: 20px;
      background-color: color-mix(in srgb, white, transparent 90%);
      border: 4px solid color-mix(in srgb, white, transparent 80%);
      font-size: clamp(1.3rem, 7vw, 2rem);
      color: white;

      &:not(:focus).error {
        border-color: #f97a7a;
        color: #f97a7a;
      }

      &:not(:focus).success {
        border-color: #7af97a;
        color: #7af97a;
      }
    }

    button {
      padding: 15px 30px;
      background-color: #1f7777;
      font-size: clamp(1rem, 7vw, 1.6rem);
      color: white;
      border: 4px solid #144c4c;

      &:disabled {
        pointer-events: none;
      }

      &:hover, &:disabled {
        background-color: yellow;
        border-color: #abab05;
        color: #2f2f2f;
      }
    }
  }
`

const EXPECTED_ANSWER = "your first name"
const NAME = "doing-life-with-marissa"
const WEBSITE = `https://${NAME}.netlify.app`

export default function Marissa() {
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const submit = () => {
    const value = input.toLowerCase().trim()

    if (value === EXPECTED_ANSWER) return setSuccess(true)

    setError(true)
  }

  return (
    <Container>
      <h1>Welcome back to the website 🥰</h1>
      <p>
        How did it feel like been <b>patient</b> for a few days? 😏
      </p>
      <hr />
      <div className="input-group">
        <label>
          Okay, to see the amazing surprise I have prepared for you, enter your
          first name in the box below and click Submit:
        </label>
        <div className="input">
          <input
            className={`${error && "error"} ${success && 'success'}`}
            value={input}
            onChange={e => {
              setError(false)
              setInput(e.target.value)
            }}
          />
          <span className={error && "show"}>
            Nope, that's wrong. You can keep guessing or you can ask your
            boyfriend for your first name 🤭🤣
          </span>
        </div>
        <button disabled={success} onClick={submit}>Submit</button>
        <br />
        {success && (
          <>
            <hr />
            <p>
              Correct! 😂 You can find the surprise by clicking on this link:
              <br /> <a href={WEBSITE}>{NAME}</a>
            </p>
          </>
        )}
      </div>
    </Container>
  )
}
