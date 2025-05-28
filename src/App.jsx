// Content
import Landing from "./page/Landing.jsx";
import Linktree from "./page/Linktree.jsx";
import Contests from "./page/content/Contests.jsx";
import Techstack from "./page/content/Techstack.jsx";
import Experiences from './page/content/Experiences.jsx';
import Projects from "./page/content/Projects.jsx";
import Awards from "./page/content/Awards.jsx";
import Contact from "./page/content/Contact.jsx";

// Website
import Navbar from "./page/Navbar.jsx";
import Footer from "./page/Footer.jsx";
import Empty from "./page/Empty.jsx";
import Divider from "./page/Divider.jsx";
// import About from "./page/About.jsx"

// Vercel
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next"

import "./index.css";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Empty/>
        <main>
            <Landing/>
            <Linktree/>
            {/* <About/>
            <div className="m-32"></div> */}
            <Divider/>
            <div>
                <Experiences/>
                <Contests/>
                <Projects/> {/* Different structure? v3 */}
                <Techstack/>
                {/* v3
                <Softskill/>                                                                                                                  https://docs.google.com/spreadsheets/d/1Bkowf7nFh9SGMkJsDxa_5fZ2fzpaSVcksXklhdGuNiM/edit?gid=0#gid=0
                
                <Hardskill/> (Replace tech stack?)
                */}
                <Awards/>
            </div>
            <div className="m-32"></div>
            <Divider/>

            <Contact/>
            <div className="m-48"></div>
            {/* <Divider/> */}
        </main>
        <Empty/>
        <Footer/>

        {/* <Analytics/>
        <SpeedInsights/> */}
    </>
  );
}

