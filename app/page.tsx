import Contests from "./page/content/Contests.tsx";
import Techstack from "./page/content/Techstack.tsx";
import Experiences from './page/content/Experiences.tsx';
import Projects from "./page/content/Projects.tsx";
import Awards from "./page/content/Awards.tsx";

import Navbar from "./page/Navbar.tsx";
import Footer from "./page/Footer.tsx";
import Landing from "./page/Landing.tsx";
import Empty from "./page/Empty.tsx";
import Linktree from "./page/Linktree.tsx";
import Divider from "./page/Divider.tsx";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
        <Navbar/>
        <Empty/>
        <main>
            <Landing/>
            <Linktree/>
            {/* <Aboutpage/> */}
            <Divider/>
            <div>
                <Experiences/>
                <Contests/>
                <Projects/> {/* Different structure? */}
                <Techstack/>
                {/* 
                <Softskill/>
                <Hardskill/> (Replace tech stack?)
                */}
                <Awards/>
                
                {/* contactme */}
            </div>
            <div className="m-32"></div>
            {/* <Divider/> */}
        </main>
        <Empty/>
        <Footer/>

        <Analytics/>
        <SpeedInsights/>
    </>
  );
}

