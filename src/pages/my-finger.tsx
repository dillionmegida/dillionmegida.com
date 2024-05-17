import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px;
  color: var(--text-color);

  h1 {
    font-size: clamp(1.4rem, 7vw, 2.4rem);
    margin-bottom: 20px;
  }

  img {
    aspect-ratio: 3024 / 4032;
    max-width: 500px;
    width: 100%;
    border: 4px solid var(--midMainColor1);
    margin-bottom: 20px;
    display: block;
  }

  p {
    font-size: clamp(0.7rem, 5vw, 1.6rem);
    line-height: 1.3;
    margin-bottom: 20px;
  }
`

export default function MyFinger() {
  return (
    <Container>
      <h1>What happened to your finger?</h1>
      <p>
        You've probably seen a picture of my finger recently--a cast/splint on
        the middle finger of my left hand.
      </p>
      <img src="/img/my-finger.JPG" alt="" />
      <p>What happened?</p>
      <p>
        I pointed you to this website because a lot of people have asked me and
        I'm tired of explaining myself over and over again. It's the reason why
        I kept my finger out of the media since last year when this happened.
        But now that I have a white splint on it, it's hard to keep hiding it. I
        appreciate the concern though. It's just me not comfortable with my
        situation.
      </p>
      <p>
        Anyways, long story short, I had a fracture in my finger last year
        October. I had a "small" accident, and the joint shifted a little. I
        didn't even realize this early, as I thought it was just "pain". I
        definitely didn't see any sign on my finger that "something broke". I
        visited a physiotherapist two days later, and he also assured me that
        nothing seems wrong and the small swelling that was building will go
        back if I do some of the exercises he recommended.
      </p>
      <p>
        Few weeks later, my finger is still swolen and the finger is no longer
        straight.
      </p>
      <img src="/img/finger-bent.JPG" alt="" />
      <p>I know...crazy!</p>
      <p>
        Then I went to the doctor, they did an X-ray and discovered I had a
        fracture. But here's the thing: the fracture was already healing, but it
        was healing in the wrong way. My understanding of this is that scar
        tissues had grown to fill up the space created after the bone shifted.
        So since December/January, I've been trying to "rectify" the scar
        tissue. More like telling it "hey, thanks for your help the other time,
        I know you had to heal, but please, you need to reduce your size".
      </p>
      <p>
        I've been trying to make my finger as straight as possible again. I
        doubt it would ever be perfect, but it could be better than what it is
        now, as my hand therapist says.
      </p>

      <p>Life has been a bit different since this incident. I struggle with doing some things like lifting, holding, e.t.c. A simple hit on the wall with the finger, and I'm in so much pains. My girlfriend sat on the finger one time and I almost reconsidered the relationship 😂. I'm hopeful for the future of this finger.</p>

      <p>
        I used to be insecure about this honestly. I put my hands together, and
        you see that ugly bump somewhere in the middle. I also wasn't ready to
        talk about this, so I consciously kept it out of the media. My videos
        too, you would never see my left hand. But now my left hand shows,
        because I feel better now. Which is why I'm getting the questions now
        for something that happened last year.
      </p>

      <p>There's improvement on the finger though.</p>
      <img src="/img/finger-improvement.JPG" alt="" />
      <p>
        Thanks to my hand therapist who causes me to cry in our every
        appointment. While writing this, I'm already imagining the pains she
        would trigger in our appointment today. But if those pains would make the finger better, then she better massage the life out of the scar tissue 😭. Not to talk about all the bills that await me though 🤫
      </p>
     
      <p>
        Please don't ask me what the accident was 🙏🏾. Thanks again for your
        concern.
      </p>
    </Container>
  )
}
