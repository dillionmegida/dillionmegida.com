import React from "react"
import Styles from "./index.module.css"

import Template from "../../../components/templates/website-design"

export default () => {
    return (
        <Template link="/simple-homepage1">
            <header className={Styles.header}>
                <nav>
                    <div>
                        <div className={Styles.logo}>
                            <img src={require("./airvendlogo.png")} />
                        </div>
                        <ul>
                            <li>
                                <a href="#">Personal</a>
                            </li>
                            <li>
                                <a href="#">Agents</a>
                            </li>
                            <li>
                                <a href="#">How It Works</a>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#" className={Styles.register}>
                                Register
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={Styles.landing}>
                    <div className={Styles.info}>
                        <p>
                            Pay your bills
                            <br />
                            <span className={Styles.big}>
                                seamlessly & quickly
                            </span>
                        </p>
                        <p>
                            Airvend is a bills payment platform that makes it
                            easier for users to make payment to their bank &
                            accept payments from their customers
                        </p>
                        <div>
                            Want airvent?&nbsp;&nbsp;&nbsp;&nbsp;
                            <img
                                style={{
                                    width: "20px",
                                    height: "10px",
                                }}
                                src={require("./path.png")}
                            />
                            <div className={Styles.playstores}>
                                <img src={require("./google-play.png")} />
                                <img src={require("./app-store.png")} />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.landingImage}>
                        <img src={require("./appimage.png")} />
                    </div>
                </div>
            </header>
            <main className={Styles.main}>
                <h1>The new way to transact</h1>
                <section className={Styles.summary}>
                    <div>
                        <img
                            className={Styles.checked}
                            src={require("./checked.png")}
                        />
                        <span>
                            <b>Airtime Recharge</b>
                        </span>
                        <p>
                            Takes less than a minute to recharge airtime wih
                            money from your Airvend Wallet
                        </p>
                    </div>
                    <div>
                        <img
                            className={Styles.checked}
                            src={require("./checked.png")}
                        />

                        <span>
                            <b>Bill Payment</b>
                        </span>
                        <p>
                            There are a few easier and faster things than making
                            bill payments through the Airvent App
                        </p>
                    </div>
                    <div>
                        <img
                            className={Styles.checked}
                            src={require("./checked.png")}
                        />

                        <span>
                            <b>Money Transfers</b>
                        </span>
                        <p>
                            A simple and seamless way to transfer money. Wallet
                            to wallet, transfer to Phone Number
                        </p>
                    </div>
                </section>
                <section className={Styles.detailsImg}>
                    <div>
                        <div className={Styles.img}>
                            <img src={require("./ease-payment.png")} />
                        </div>
                        <div className={Styles.details}>
                            <h2>Pay with Ease</h2>
                            <p className={Styles.big}>
                                QR Payments, Debit Cards & Wallet
                            </p>
                            <p>
                                Own full flexibility on your prefered mode of
                                payment and make a contactless payment, just
                                scan and pay
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={Styles.details}>
                            <h2>Cross platform</h2>
                            <p>
                                Own full flexibility on your prefered mode of
                                payment and make a contactless payment, just
                                scan and pay
                            </p>
                            <div className={Styles.platforms}>
                                <img src={require("./174.png")} />
                                <img src={require("./android.png")} />
                                <img src={require("./apple.png")} />
                                <img src={require("./laptop.png")} />
                            </div>
                        </div>
                        <div className={Styles.img}>
                            <img src={require("./cross-platform.png")} />
                        </div>
                    </div>
                </section>
            </main>
        </Template>
    )
}
