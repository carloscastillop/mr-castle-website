import React from "react";
import Image from "../Image/Image";
import style from "../../styles/app.module.scss";
import styleLocal from "./PageIntro.module.scss";

const PageIntro = () => {
    return (
        <div className={styleLocal.pageIntro}>
            <div className={style.mb3}>
                <Image
                    imageSrc='https://via.placeholder.com/1600x500'
                    imageAlt="aaaa"
                    imageTitle="bbbb"
                />
            </div>
        </div>
    )
}

export default PageIntro;