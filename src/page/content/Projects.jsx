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
            image="/img/umpire.png"
            title="Umpire"
            desc="A blazingly fast competitive programming testing helper"
            source="https://github.com/udontur/umpire"
            demo="https://github.com/udontur/umpire/blob/main/asset/demo.gif"
            tech="Tech: C++, Nix, Argparse, FTXUI, Fmt, CMake, Linux, Git, Github Actions"
            date="May 2025 - Jun 2025"
        />
        <Cardpro
            image="/img/nixconf.png"
            title="NixOS Config"
            desc="My Daily Driver OS: NixOS + Hyprland + Home Manager + Flakes"
            source="https://github.com/udontur/nixos"
            demo="https://github.com/udontur/nixos"
            tech="Tech: Nix, Linux"
            date="Mar 2025 - Present, Git"
        />
        <Cardpro
            image="/img/favicon.png"
            title="This Website, hadrian.cc"
            desc="My portfolio and web app playground."
            source="https://github.com/udontur/hadrian-cc"
            demo="https://hadrian.cc"
            tech="Tech: ReactJS, JavaScript, CSS, HTML, Vite, Figma, Git"
            date="2023 - Present"
        />
        <Cardpro
            image="/img/cs.png"
            title="udontur/cs"
            desc="A collection of competitive programming resource for my teamates."
            source="https://github.com/udontur/cs"
            demo="https://github.com/udontur/cs"
            tech="Tech: C++, Git"
            date="Jan 2024 - Nov 2024"
        />
    </div>
  );
}


