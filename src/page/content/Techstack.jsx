
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
                    icons="https://skillicons.dev/icons?i=linux,nix,git,github,figma"
                />
                <Cardtech
                    title="New Tech Skills I want to learn"
                    icons="https://skillicons.dev/icons?i=gtk,react,js,postgres,bash"
                />
                <Cardtech
                    title="Tech I have used before"
                    icons="https://skillicons.dev/icons?i=react,js,vite,cmake"
                />
                {/* boost fmt ftxui hyprland bazel*/}
            </div>
        </>
    );
}

export default Techstack;
