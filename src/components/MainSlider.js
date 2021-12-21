import React, { useState }  from "react";
import { DataSlider } from "./DataSlider";
import { DataTitele } from "./DataTitele";
import {DataTitr } from "./DataTitr";

export default function MainSlider ({ slides, titles, titrs }){
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const moveSquare = index => {
        setCurrent(index)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    if (!Array.isArray(titles) || titles.length <= 0) {
        return null
    } if (!Array.isArray(titrs) || titrs.length <= 0) {
        return null
    }
    return(
        <>
              <section className="main-news">
                    <section className="item-news">
                        {DataTitele.map((slide, index) => {
                            return (
                                <p className="item-news-text" key={index}>{index === current && slide.title}</p>)
                        })}
                    </section>
                    <section className="img-news">
                        {DataSlider.map((slide, index) => {
                            return (
                                <a href="#" className={index === current ? 'item-news-img active' : 'item-news-img'} key={index}>
                                    {index === current && (<img src={slide.image} alt="news" />)}
                                </a>)
                        })}
                    </section>
                    <section className="slider-news">
                    {DataTitr.map((slide ,index)=>{
                        return( <a href="#" className="item-news-link" key={index}>{index === current && slide.titr}</a>)
                    })}
                        <section className="carousel">
                            {Array.from({ length: 6 }).map((slide, index) => (
                                <span onClick={() => moveSquare(index)} className={current === index ? "square active" : "square"} key={index}></span>
                            ))}
                        </section>
                    </section>
                </section>
        </>
    )
}
