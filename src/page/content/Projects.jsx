// Add id =projects

import Title from '../components/Title.jsx';
import Cardpro from "../components/Cardpro.jsx";

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
            source="https://github.com/udontur/hadrian-cc"
            demo="https://hadrian.cc"
            tech="react,js,css,html,vercel,github,git,figma"
            date="Mar 2024 - Present"
        />
        <Cardpro
            image="/img/nixconf.png"
            title="NixOS Configuration"
            desc="Daily Driver OS: NixOS + Hyprland + Home Manager + Flakes"
            source="https://github.com/udontur/nixos"
            demo="https://github.com/udontur/nixos"
            tech="linux,nix,git,github"
            date="Mar 2025 - Present"
        />
        <Cardpro
            image="/img/cs.png"
            title="udontur/cs"
            desc="A collection of competitive programming resource for my wonderful teammates."
            source="https://github.com/udontur/cs"
            demo="https://github.com/udontur/cs"
            tech="cpp,git,latex,github"
            date="Jan 2024 - Nov 2024"
        />
        <Cardpro
            image="/img/judgel.png"
            title="Judgel"
            desc="A local C++ CLI judgel for competitive programming"
            source="https://github.com/udontur/judgel"
            demo="https://www.youtube.com/watch?v=e7oIRxXZv3U"
            tech="cpp,linux,git,github"
            date="Mar 2024 - Present"
        />
    </div>
  );
}


