
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
                    icons="https://skillicons.dev/icons?i=cpp,rust,html,css,latex"
                />
                <Cardtech
                    title="Tools & Technologies"
                    icons="https://skillicons.dev/icons?i=linux,nix,cmake,git,github,vercel,figma"
                />
                <Cardtech
                    title="Tech Skills I want to learn"
                    icons="https://skillicons.dev/icons?i=gtk,react,js,postgres,bash"
                />
                <Cardtech
                    title="Used before, but not familiar "
                    icons="https://skillicons.dev/icons?i=react,js,ts,next,tailwind"
                />
                {/* boost lib */}
            </div>
        </>
    );
}

export default Techstack;
