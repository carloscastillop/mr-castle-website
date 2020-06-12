import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from "../../styles/app.module.scss";

const Image = (props) => {
    const imageSrc = (props.imageSrc) ? props.imageSrc : 'https://via.placeholder.com/800';
    const imageTitle = (props.imageTitle) ? props.imageTitle : 'No title';
    const imageAlt = (props.imageAlt) ? props.imageAlt : 'No alternate';
    const caption = (props.imageCaption) ? <span>{props.imageCaption}</span> : null;
    return (
        <React.Fragment>
            <LazyLoadImage
                className={`${style.imgFluid} ${style.imgFluid}`}
                src={imageSrc}
                alt={imageAlt}
                title={imageTitle}
                effect="blur"
            />
            {caption}
        </React.Fragment>
    )
}

export default Image;