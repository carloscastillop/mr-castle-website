import React from "react";
import Header from "../components/Header/Header";
import PageHeader from "../components/PageHeader/PageHeader";
import style from "../styles/app.module.scss";
import Footer from "../components/Footer/Footer";

const Collection = () => {
    return (
        <React.Fragment>
            <Header/>
            <PageHeader title='Figure collection'/>
            <section>
                <div className={style.container}>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Collection