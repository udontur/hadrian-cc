
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
                    icons="https://skillicons.dev/icons?i=cpp,rust,react,html,css,js,latex"
                />
                <Cardtech
                    title="Tools & Technologies"
                    icons="https://skillicons.dev/icons?i=linux,nix,cmake,git,github,vercel,figma"
                />
                <Cardtech
                    title="Tech Skills I want to learn"
                    icons="https://skillicons.dev/icons?i=gtk,docker,postgres,bash"
                />
                {/* boost lib, cargo */}
            </div>
        </>
    );
}

export default Techstack;
