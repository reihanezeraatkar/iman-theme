import React from "react";
import { FooterItems } from "./FooterItems";
import "../styles/Styles.css"

export default function Footer() {
    return (
        <>
            <nav className="footer-container">
                <ul className="fnav-menu">
                    {FooterItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                |
                            </li>
                        )
                    })}
                </ul>
                <span className="copy-right">کلیه حقوق این سایت متعلق به سایت خبری ایمان بوده و استفاده از مطالب آن با ذکر منبع بلامانع
                    است</span>
                <span className="flogo">ایمان</span>
            </nav>
        </>
    )
}
