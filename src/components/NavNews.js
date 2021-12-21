import React from "react";
import { News } from "./News";
import "../styles/Styles.css";

export default function NavNews  () {
    return (
        <>
            <nav className="news-bar">
                <ul className="news">
                    {News.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <form action=".">
                <input type="text" className="form-control" name="search-content" id="search-content" placeholder="جستجو"></input>
                    <i className="fas fa-search"></i>
                    
                </form>
            </nav>
            <nav className="update-news">
                <span> اخبار ویژه: </span>
 <a href="#"> واکاوی اظهارات کامرون علیه ایران/وجود تعارض دیپلماتیک در کشورهای غربی است</a>
            </nav>
        </>
    )
}
