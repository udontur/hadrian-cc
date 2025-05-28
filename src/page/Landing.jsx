'use client';

import React, { useState, useEffect } from 'react';

function Landing({ }) {
    const [name, setName] = useState("Hadrian");

    async function sleep(millis) {
        return new Promise(resolve => setTimeout(resolve, millis));
    }

    async function updateName() {
        while (true) {
            await sleep(2000);
            setName("udontur");
            await sleep(2000);
            setName("Hadrian");
        }
    }

    useEffect(() => {
        updateName();
    }, []);
    return (
        <div className="landing" id="home">
            <div className="intro">
                <div className="hello">
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    <span>!</span>
                    <span>!</span>
                    <span>!</span>
                    {/* <span class="emptyTXT"></span>
                    <span>I</span>
                    <span>'</span>
                    <span>m</span> */}
                </div>
                <div className="name">{name}</div>
                <div className="funny-quote">Passionate Self-taught Developer in Development
                </div>
            </div>
            <img className="profile-pic" src="/img/udontur1000-transparent.png" alt="My usual profil picture"/>
        </div>
    );
}

export default Landing;
