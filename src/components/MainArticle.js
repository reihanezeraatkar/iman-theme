import React, { useState } from 'react';
import { DataArticle } from './DataArticle';

export default function MainArticle({ articles }) {
    const [article, setArticle] = useState(0)
    const length = articles.length;
    const nextPage = () =>{
        setArticle(article === length - 1 ?  0 : article + 1)
    }
    const prevPage = () =>{
        setArticle(article === 0 ? length - 1 : article - 1 )
    }
    if (!Array.isArray(articles) || articles.length <= 0) {
        return null
    }
    return (
        <>
            <section className="main-update">
                <section className="update-news-tittle">
                    <span className="update-news-tittle-r">آخرین اخبار</span>
                    <span className="update-news-tittle-l">بروزرسانی: 1 ساعت پیش</span>
                </section>
                {DataArticle.map((item, index) => {
                    return (
                        <section className="main-update-news-item" key={index}>
                        <a href="#" >{(<img src={item.image} alt="news"/>)}</a>  
                            <article className="update-news-item">
                                <a href="#">{item.titr}</a>
                                <p >{item.caption}</p>
                            </article>
                        </section>)
                })}
                <section className="new-old-btn">
                    <a href="#" className="new-btn" onClick={nextPage}> « اخبار جدید </a>
                    <a href="#" className="old-btn" onClick={prevPage}>» اخبار قدیمی</a>
                </section>
            </section>

        </>)

}