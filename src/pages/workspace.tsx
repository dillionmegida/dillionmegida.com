import React from "react"
import styled from "styled-components"

import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import AnchorLink from "../components/AnchorLink"

const Main = styled.main`
  h1 {
    color: var(--mainColor2);
    font-size: 40px;
  }

  .img-container {
    width: 100%;
    position: relative;
    border: 2px solid var(--mainColor2);

    img {
      width: 100%;
    }
  }

  .tools-text {
    font-size: 24px;
    color: white;
    margin: 20px 0 30px;
  }

  .tools {
    color: white;
    font-size: 24px;
    display: grid;
    --columns: 3;
    grid-template-columns: repeat(var(--columns), 1fr);
    padding: 0;
    gap: 30px;

    @media (max-width: 800px) {
      --columns: 2;
    }

    @media (max-width: 500px) {
      --columns: 1;
    }

    li {
      /* list-style: disc; */
      padding: 0;
      line-height: 30px;
      a {
        padding: 10px;
        /* color: white; */
        &:hover {
          /* color: var(--mainColor2); */
          /* text-decoration: underline; */
        }
      }
    }
  }

  @media (max-width: 500px) {
    .tools-text,
    .tools {
      font-size: 22px;
    }
  }
`

const tools = [
  {
    name: "LG 32` 4k Monitor",
    link:
      "https://www.bol.com/nl/nl/p/lg-32uk550-4k-va-gaming-monitor-32-inch/9200000099339777/?s2a=",
  },
  {
    name: "Mac Mini M2",
    link: "https://www.apple.com/nl/mac-mini/",
  },
  {
    name: "Sony ZV-E10 Camera",
    link:
      "https://www.amazon.com/Sony-Alpha-ZV-E10-Interchangeable-Mirrorless/dp/B09BBGN298",
  },
  {
    name: "Logitech Z200 - Multimedia Speakers",
    link:
      "https://www.bol.com/nl/nl/p/logitech-z200-multimedia-speakers-zwart/9200000018742825/?s2a=",
  },
  {
    name: "Monitor screen stand - 100 cm wide",
    link:
      "https://www.bol.com/nl/nl/p/monitor-verhoger-beeldscherm-standaard-100-cm-breed/9300000074833852/?s2a=",
  },
  {
    name: "Philips Hue Lightstrip Plus base 2 meter",
    link:
      "https://www.bol.com/nl/nl/p/philips-hue-lightstrip-plus-basis-2-meter-white-and-color-ambiance-wit-20w-bluetooth-v4-incl-voeding/9300000004671570/?s2a=",
  },
  {
    name: "Shure MV7X Microphone",
    link: "https://www.tonecontrol.nl/shure-mv7x",
  },
  {
    name: "Focusrite Scarlett 2i2 3rd Gen",
    link: "https://www.thomann.de/nl/focusrite_scarlett_2i2_3rd_gen.htm",
  },
  {
    name: "Mic Stand",
    link:
      "https://www.bax-shop.nl/broadcast-microfoon-statief/tie-mic-stand-flexible-pro-microfoonarm",
  },
  {
    name: "Desk pad",
    link: "https://www.ikea.com/nl/en/p/skrutt-desk-pad-black-60291746/",
  },
  {
    name: "Standing Desk",
    link:
      "https://www.ikea.com/nl/nl/p/rodulf-bureau-zit-sta-grijs-wit-s99326170/",
  },
  {
    name: "Ergonomic Office Chair",
    link:
      "https://www.bol.com/nl/nl/p/ergonomische-bureaustoel-bureaustoelen-voor-volwassenen-office-chair-ergonomisch/9300000018945667/?s2a=",
  },
  {
    name: "Quantum Ear Gaming Headset",
    link:
      "https://www.jumia.com.ng/jbl-quantum-200-wired-over-ear-gaming-headset-black-70309498.html",
  },
  {
    name: "Magic Keyboard with Numeric Keypad",
    link:
      "https://www.apple.com/shop/product/MQ052LL/A/magic-keyboard-with-numeric-keypad-us-english",
  },
  {
    name: "Magic Mouse",
    link:
      "https://www.apple.com/nl/shop/product/MK2E3Z/A/magic-mouse-wit-multi%E2%80%91touch-oppervlak",
  },
  {
    name: "Foldable Laptop Stand",
    link:
      "https://www.bol.com/nl/nl/p/lurk-pro-opvouwbare-laptopstandaard-laptophouder-tablethouder-laptopverhoger-11-t-m-17-inch/9300000019157953/?s2a=",
  },
  {
    name: "Belkin 3-in-1 Wireless Charger with MagSafe",
    link:
      "https://www.apple.com/shop/product/HPGA2ZM/A/belkin-boost%E2%86%91charge-pro-3-in-1-wireless-charger-with-magsafe-white?fnode=59f7115971d07c84294fc7a4c1e78c0ec363e460d7b1dd55f0baea7ab54280373cd76a0989e50e21ac07a9ebed92a91f369549799866c0213c5a33553e894b376c83114a4db5702c2e81c4025e5201d7588e5d64224f6117b4a3c29ed8230dd564a1d1451f047157d08ed633f285b445e59a8a6bf0866879efce5157396c87ae",
  },
  {
    name: "Godox SL 60W LED Light",
    link:
      "https://www.amazon.nl/-/en/gp/product/B091HY331D/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
  },
  {
    name: "Godox Softbox",
    link:
      "https://www.amazon.nl/-/en/gp/product/B019DFIGGM/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
  },
]

export default function Workspace() {
  return (
    <Layout>
      <Helmet
        pageLink="/workspace"
        pageDesc="Tools in my workspace"
        pageTitle="My workspace"
        imageCard="/img/workspace.jpeg"
        largeTwitterCard={true}
      />
      <Main className="container">
        <h1>Tools in my workspace</h1>
        {/* <div className="img-container">
          <img src="/img/workspace.jpeg" alt="My office workspace" />
          <div className="numbers"></div>
        </div> */}
        <p className="tools-text">
          Here is a list of the tools in my workspace. Note that these prices
          may have changed since the time I bought them.
        </p>
        <ul className="tools">
          {tools.map(t => (
            <li key={t.name}>
              <AnchorLink link={t.link}>{t.name}</AnchorLink>
              {/* <span className="link-icon">🔗</span> */}
            </li>
          ))}
        </ul>
        {/* <p>The lamp came with my apartment</p> */}
      </Main>
    </Layout>
  )
}
