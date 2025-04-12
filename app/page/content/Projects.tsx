// Add id =projects
import React from 'react';
import Title from '../components/Title.tsx';
import Cardpro from "../components/Cardpro.tsx";

export default function Projects() {
  return (
    <div className="center" id="projects">
        <Title
            title="Featured Projects"
        />
        <Cardpro
            image="/img/favicon.png"
            title="hadrian.cc"
            desc="This website! My portfolio and web app playground."
            source="https://hadrian.cc"
            demo="https://hadrian.cc"
            tech="react,ts,js,tailwind,css,vercel,github,git,html,figma"
            date="Mar 2024 - Present"
        />
        <Cardpro
            image="/img/favicon.png"
            title="hadrian.cc"
            desc="This website! My portfolio and web app playground."
            source="https://hadrian.cc"
            demo="https://hadrian.cc"
            tech="react,js,html,css,github,git,figma"
            date="Mar 2024 - Present"
        />
    </div>
  );
}


