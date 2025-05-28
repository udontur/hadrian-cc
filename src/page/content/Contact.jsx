'use client';

import Title from '../components/Title.jsx';
import { useState } from 'react';

export default function Contact(){
    const [copyState, setCopyState] = useState("Copy");
    
    return (
        <>
            <Title
                title="Let's Get in Touch"
            />
            <div className="center">
                <div className="con-email" id="contact">
                    <div className="email">contact@hadrian.cc</div>
                    <div className="bottom-sec">
                        <div className="reply-time">
                            Reply within 24 hours (I would love to chat in real life too)
                        </div>
                        <div className="methods">
                            <button className="send">
                                <a href="mailto:contact@hadrian.cc">Send</a>
                            </button>
                            <button 
                                onClick={async ()=>{
                                    await navigator.clipboard.writeText("contact@hadrian.cc");
                                    setCopyState("Copied ✓");
                                }}
                            >{copyState}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
