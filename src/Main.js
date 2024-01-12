import React from "react";
import  './Main.css';
import TopG from './assets/TopG.png';

export default function Main(){
    return(
        <section className="hero">
            <img src={TopG} alt="Pics" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one of a kind hosts all without leaving home.
            </p>

        </section>
    )
}