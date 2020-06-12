import React from "react";
import style from "../../styles/app.module.scss";
import styleLocal from "./PageHeader.module.scss";

const PageHeader = (props) => {
    const title = (props.title)? props.title : null;
    return (
        <div className={styleLocal.pageHeader}>
            <div className={style.container}>
                {
                    title &&
                        <h1
                            className={`${style.m0}`}
                        >{title}</h1>
                }
            </div>
        </div>
    )
}

export default PageHeader;