import Cardtech from "../components/Cardtech.jsx"
import Title from "../components/Title.jsx"

export default function Techstack({ }) {
    return (
        <>
            <div className="center" id="skills">
                <Title
                    title="Tech Stack"
                />
                <Cardtech
                    title="Languages & Frameworks"
                    icons="https://skillicons.dev/icons?i=cpp,rust,py,react,css,html,latex"
                />
                <Cardtech
                    title="Tools & Technologies"
                    icons="https://skillicons.dev/icons?i=linux,nix,cmake,git,githubactions,figma"
                />
                <Cardtech
                    title="Tech Skills I want to learn (or used before)"
                    icons="https://skillicons.dev/icons?i=js,gtk,docker,bash,postgres"
                />
            </div>
        </>
    );
}

