import React from "react";
import style from "../../styles/app.module.scss";
import styleLocal from "./Footer.module.scss"
import Image from "../Image/Image";
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faEtsy} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/images/logo.png';

const iconFacebook = <FontAwesomeIcon icon={faFacebook} size="2x"/>
const iconInstagram = <FontAwesomeIcon icon={faInstagram} size="2x"/>
const iconTwitter = <FontAwesomeIcon icon={faTwitter} size="2x"/>
const iconEtsy = <FontAwesomeIcon icon={faEtsy} size="2x"/>
const iconEnveloped = <FontAwesomeIcon icon={faEnvelope} size="2x"/>



const Footer = () => {
    return (
        <footer className={styleLocal.footer}>
            <div className={style.container}>
                <section>
                    <div className={`${style.py3}`}>
                        <div className={`${style.row}`}>
                            <div className={`${style.col12} ${style.colSm6} ${style.colMd2}`}>
                                <Image imageSrc={logo}/>
                            </div>
                            <div className={`${style.col12} ${style.colSm6} ${style.colMd5}`}>
                                <h4
                                    className={style.h5}>
                                    Mr Castle figures
                                </h4>
                                <p className={style.small}>
                                    Duis sagittis nisl accumsan rhoncus posuere. Duis nec pretium justo. In pellentesque
                                    est
                                    nec orci porta condimentum. Cras rhoncus lobortis mi, a tempus quam ornare nec. Nunc
                                    vel
                                    libero metus. Phasellus ultrices urna nunc. Orci varius natoque penatibus et magnis
                                    dis
                                    parturient montes, nascetur ridiculus mus. Donec pulvinar non elit sed mollis.
                                    Aenean
                                    lacinia scelerisque ultricies.
                                </p>
                            </div>
                            <div className={`${style.col}`}>
                                <ul className={`${style.listInline}`}>
                                    <li
                                        className={style.listInlineItem}
                                    >
                                        <a
                                            href="https://www.facebook.com/mrcastlefigures/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={style.p2}
                                        >
                                            {iconFacebook}
                                        </a>
                                    </li>
                                    <li
                                        className={style.listInlineItem}
                                    >
                                        <a
                                            href="https://www.instagram.com/mr.castle.figures/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={style.p2}
                                        >
                                            {iconInstagram}
                                        </a>
                                    </li>
                                    <li
                                        className={style.listInlineItem}
                                    >
                                        <a
                                            href="https://twitter.com/mrcastle_art"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={style.p2}
                                        >
                                            {iconTwitter}
                                        </a>
                                    </li>
                                    <li
                                        className={style.listInlineItem}
                                    >
                                        <a
                                            href="https://www.etsy.com/uk/shop/mrcastlefigures"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={style.p2}
                                        >
                                            {iconEtsy}
                                        </a>
                                    </li>
                                    <li
                                        className={style.listInlineItem}
                                    >
                                        <Link
                                            to="/contact/"
                                            className={style.p2}
                                        >
                                            {iconEnveloped}
                                        </Link>
                                    </li>

                                </ul>
                                <h6>Join to our Newsletter</h6>
                                <form className={style.formInline}>
                                    <div className={`${style.inputGroup} ${style.mb3}`}>
                                        <input
                                            type="text"
                                            className={`${style.formControl}`}
                                            placeholder="Your email here!"
                                            aria-label="Recipient's email"
                                            aria-describedby="button-addon2"
                                        />
                                            <div
                                                className={`${style.inputGroupAppend}`}
                                            >
                                                <button
                                                    className={`${style.btn} ${style.btnOutlineSecondary}`}
                                                    type="button"
                                                    id="button-addon2"
                                                >
                                                    Join
                                                </button>
                                            </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`${style.row} ${style.py1} ${style.small}`}>
                        <div className={`${style.col}`}>
                            <Link
                                title="Mr Castle figures"
                                to="/"
                                className={style.p2}
                            >
                                Mr Castle Figures 2020
                            </Link>
                        </div>
                        <div className={`${style.col} ${style.textRight}`}>
                            <ul className={`${style.listInline}`}>
                                <li
                                    className={style.listInlineItem}
                                >
                                    <Link
                                        to="/"
                                        className={style.p2}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className={style.listInlineItem}
                                >
                                    <Link
                                        to="/gallery/"
                                        className={style.p2}
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li
                                    className={style.listInlineItem}
                                >
                                    <Link
                                        to="/collection/"
                                        className={style.p2}
                                    >
                                        Collection
                                    </Link>
                                </li>
                                <li
                                    className={style.listInlineItem}
                                >
                                    <Link
                                        to="/about/"
                                        className={style.p2}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li
                                    className={style.listInlineItem}
                                >
                                    <Link
                                        to="/contact/"
                                        className={style.p2}
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
export default Footer;