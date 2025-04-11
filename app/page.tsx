import Contests from "./page/content/Contests.tsx";
import Techstack from "./page/content/Techstack.tsx";
import Experiences from './page/content/Experiences.tsx';

import Navbar from "./page/Navbar.tsx";
import Footer from "./page/Footer.tsx";
import Landing from "./page/Landing.tsx";
import Empty from "./page/Empty.tsx";
import Linktree from "./page/Linktree.tsx";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Empty/>
        <main>
            <Landing/>
            <Linktree/>
            {/* <Aboutpage/> */}
            {/* divider */}
            <div>
                <Experiences/>
                <Contests/>
                <Techstack/>
                {/* <Projects/>
                <Awards/> */}
                {/* <Softskill/>
                <Hardskill/> (Replace tech stack?)
                
                */}
            </div>
        </main>
        <Empty/>
        <Footer/>
    </>
  );
}

