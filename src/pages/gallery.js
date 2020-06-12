import React from "react";
import Header from "../components/Header/Header";
import PageHeader from "../components/PageHeader/PageHeader";
import style from "../styles/app.module.scss";
import Footer from "../components/Footer/Footer";

const Gallery = () => {
    return (
        <React.Fragment>
            <Header/>
            <PageHeader title='Gallery'/>
            <section>
                <div className={style.container}>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Gallery