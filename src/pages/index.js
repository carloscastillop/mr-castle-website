import React from "react";
import style from "../styles/app.module.scss";
import Header from "../components/Header/Header";
import PageIntro from "../components/PageIntro/PageIntro";
import Image from "../components/Image/Image";
import Footer from "../components/Footer/Footer";
import {useStaticQuery, graphql} from "gatsby"


const Home = () => {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <React.Fragment>
            <Header/>
            <PageIntro/>
            <section>
                <div className={style.container}>
                    <div className={style.mb3}>
                        <Image
                            imageSrc='https://via.placeholder.com/800x500'
                            imageAlt="aaaa"
                            imageTitle="bbbb"
                        />
                    </div>
                    <h1
                        className={`${style.h2} ${style.mb3}`}
                    >
                        Welcome to Mr Castle Figures
                    </h1>
                    <h3
                        className={`${style.h4} ${style.mb3} ${style.textMuted}`}
                    >
                        Collectables Figurine, resin sculpture, Art toy resin, resine figurine
                    </h3>
                    <p>
                        {data.site.siteMetadata.title}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu odio consequat, egestas nisl
                        eget, efficitur est. Sed a congue dui. Praesent consectetur dolor eget tellus iaculis volutpat.
                        Morbi metus eros, egestas sit amet pretium elementum, suscipit sed est. Nullam at laoreet
                        tellus. Praesent sollicitudin porttitor nibh vel feugiat. Nulla vitae urna blandit, ultricies
                        lectus a, iaculis dolor. Nullam eget dolor sodales, rutrum felis at, lobortis magna. Sed congue
                        pellentesque nibh, ac placerat massa accumsan vitae. Integer nulla elit, aliquam a lorem ut,
                        condimentum venenatis odio. In hac habitasse platea dictumst. Cras gravida lectus eget nibh
                        commodo, ut sagittis massa vehicula. Praesent eu feugiat diam, non viverra justo. Praesent a
                        enim tellus. Suspendisse nec semper felis.

                    </p>
                    <button className={`${style.btn} ${style.btnPrimary} ${style.mr2}`}>
                        test
                    </button>
                    <button className={`${style.btn} ${style.btnSecondary}`}>
                        test 2
                    </button>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;