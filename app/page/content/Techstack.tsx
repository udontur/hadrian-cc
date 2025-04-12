import React from 'react';
import Cardtech from "../components/Cardtech.tsx"
import Title from "../components/Title.tsx"

function Techstack({ }) {
    return (
        <>
            <div className="center" id="skills">
                <Title
                    title="Tech Stack (Upgrading)"
                />
                <Cardtech
                    title="Languages & Frameworks"
                    icons="https://skillicons.dev/icons?i=cpp,react,html,css,js,tailwind,latex"
                />
                <Cardtech
                    title="Tools & Technologies"
                    icons="https://skillicons.dev/icons?i=linux,nix,git,github,vercel,figma"
                />
                <Cardtech
                    title="Tech Skills I want to learn"
                    icons="https://skillicons.dev/icons?i=docker,ts,nodejs,nextjs,mongodb,postgres,graphql,electron,bash"
                />
            </div>
        </>
    );
}

export default Techstack;
