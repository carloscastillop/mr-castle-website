import React, {useState} from "react";
import {Link} from "gatsby";
import style from "../../styles/app.module.scss";
import styleLocal from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faEtsy } from "@fortawesome/free-brands-svg-icons";
const iconFacebook = <FontAwesomeIcon icon={faFacebook} />
const iconInstagram = <FontAwesomeIcon icon={faInstagram} />
const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
const iconEtsy = <FontAwesomeIcon icon={faEtsy} />

const Header = () => {
    const [collapseMenu, setCollapseMenu] = useState(false);
    const collapseBtnClass = !(collapseMenu) ? `${style.navbarToggler} collapsed` : `${style.navbarToggler}`;
    const collapseMenuClass = !(collapseMenu) ? `${style.navbarCollapse} ${style.collapse}` : `${style.navbarCollapse} ${style.collapse} ${style.show}`;
    return (
        <nav
            className={`${style.navbar} ${styleLocal.navbarNav} ${style.navbarExpandSm} ${style.navbarDark}`}>
            <Link
                className={style.navbarBrand}
                to='/'
                title='Mr Castle Figures'
            >
                Mr Castle Figures
            </Link>
            <button
                className={collapseBtnClass}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={event => {
                    setCollapseMenu(!collapseMenu)
                }}
            >
                <span className={style.navbarTogglerIcon}></span>
            </button>

            <div
                className={`${collapseMenuClass}  ${styleLocal.navbarCollapseRight}`}
                id="navbarSupportedContent"
            >
                <ul className={`${style.navbarNav} ${style.mlAuto}`}>
                    <li className={`${style.navItem} ${style.active}`}>
                        <Link className={style.navLink} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLink} to="/gallery">
                            Gallery
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={style.navLink} to="/collection">
                            Collection
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link
                            className={`${style.navLink} ${style.mr4}`}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <a
                            className={style.navLink}
                            href="https://www.facebook.com/mrcastlefigures/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {iconFacebook}
                        </a>
                    </li>
                    <li>
                        <a
                            className={style.navLink}
                            href="https://www.instagram.com/mr.castle.figures/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {iconInstagram}
                        </a>
                    </li>
                    <li>
                        <a
                            className={style.navLink}
                            href="https://twitter.com/mrcastle_art"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {iconTwitter}
                        </a>
                    </li>
                    <li>
                        <a
                            className={style.navLink}
                            href="https://www.etsy.com/uk/shop/mrcastlefigures"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {iconEtsy}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;