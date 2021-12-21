import React from "react";
import "../styles/Styles.css";
import MainSlider from "./MainSlider";
import { DataSlider } from "./DataSlider";
import { DataTitele } from "./DataTitele";
import { DataTitr } from "./DataTitr";
import MainArticle from "./MainArticle";
import { DataArticle } from './DataArticle';
import MainHits from "./MainHits";
import { DataHits } from "./DataHits";
import MainImage from "./MainImage";
import { DataImage } from "./DataImage";


export default function Main() {
    return (
        <>
            <section className="main-container">
                <MainSlider slides={DataSlider} titles={DataTitele} titrs={DataTitr} />
                <section className="main-advertise">
                    <a href="#"> مکان تبلیغات شما</a>
                </section>
                <section className="main-advertise-hits">
                    <section className="tittle-hits">پربازدیدها</section>
                    <MainHits hits={DataHits} />
                </section>
                <section className="advertise">
                    <section className="advertise-top">
                        <a href="#"> مکان تبلیغات شما</a>
                    </section>
                    <section className="advertise-bottom">
                        <a href="#"> مکان تبلیغات شما</a>
                    </section>
                </section>
                <MainImage imgs={DataImage} />
                <MainArticle articles={DataArticle} />
                <section className="peyvandha">
                    <span className="peyvand-tittle">پیوندها</span>
                    <a href="#">باشگاه خبرنگاران جوان</a>
                </section>
            </section>
        </>
    );
}
