import React from 'react';
//import './General.css';

function Card({ image, title, place, desc, sub, date }: any) {
    return (
        <div className="card">
            <img className="logo" src={image}/>
            <div className="flex-col">
                <div className="title">{title}</div>
                <div>{place}</div>
                <div>{desc}</div>
                <div className="sub">{sub}</div>
                <div className="sub">{date}</div>
            </div>
        </div>
    );
}

export default Card;
