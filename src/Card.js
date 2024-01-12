import React from "react";
import './Card.css'
import No1 from './assets/No1.png'
import Star from './assets/Star.png'
import App from "./App";

export default function Card(props){


    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    // console.log(props.openSpots);
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="Main card image." className="card--image"/>
            
            <div className="card--stats">
                <img src= {Star} alt="Star icon." className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>

            </div>
            <p className="card--title">
            <h2>{props.title}</h2></p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}

