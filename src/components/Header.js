import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavNews from "./NavNews";
import "../styles/Styles.css";

export default function Header() {
    return (
        <>
        <Navbar />
        <Logo />
        <NavNews />
        </>
    )
}

