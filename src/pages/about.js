import React from "react";
import Header from "../components/Header/Header";
import style from "../styles/app.module.scss";
import PageHeader from "../components/PageHeader/PageHeader";
import Footer from "../components/Footer/Footer";

const About = () => {
    return (
        <React.Fragment>
            <Header/>
            <PageHeader title='About us'/>
            <section>
                <div className={style.container}>
                    <h2>WHO am I?</h2>
                    <h4>1357 AMAZING Collectible Figures</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis lacus, at fermentum
                        nisl. Suspendisse eu tortor efficitur, ultrices mauris non, iaculis lectus. Sed facilisis leo
                        lobortis justo tempus, faucibus varius urna molestie. Curabitur pretium gravida egestas.
                        Pellentesque a nunc eu tortor sollicitudin finibus. Quisque scelerisque luctus est. Pellentesque
                        sagittis, erat ut volutpat suscipit, sapien eros porta orci, quis dictum purus nisl eu massa.
                        Phasellus venenatis tincidunt dictum.
                    </p>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default About;