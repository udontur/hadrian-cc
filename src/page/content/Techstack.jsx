
import Cardtech from "../components/Cardtech.jsx"
import Title from "../components/Title.jsx"

function Techstack({ }) {
    return (
        <>
            <div className="center" id="skills">
                <Title
                    title="Tech Stack"
                />
                <Cardtech
                    title="Languages & Frameworks"
                    icons="https://skillicons.dev/icons?i=cpp,rust,nix,html,css,latex"
                />
                <Cardtech
                    title="Tools & Technologies"
                    icons="https://skillicons.dev/icons?i=linux,nix,cmake,git,github,figma"
                />
                <Cardtech
                    title="Tech Skills I want to learn (or used before)"
                    icons="https://skillicons.dev/icons?i=gtk,react,js,postgres,bash,python"
                />
                {/* argparse fmt ftxui*/}
            </div>
        </>
    );
}

export default Techstack;
