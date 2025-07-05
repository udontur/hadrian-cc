
import Title from '../components/Title.jsx';
import Cardexp from "../components/Cardexp.jsx";

function Experiences() {
  return (
    <div className="center" id="experience">
        <Title
            title="Valuable Experiences"
        />
        <Cardexp
            image="/img/chonglap.png"
            title="Front-End Web Developer (student)"
            place="@Chong Lap (H.K.) Co. Ltd."
            desc="Developed the company website with the IT team"
            link="https://hk.chonglap.com"
            linktxt="chonglap.com"
            sub="Onsite and Remote"
            date="Feb 2025 - Mar 2025 • 2 Months"
        />
        <Cardexp
            image="/img/elevate-logo.png"
            title="Website Revamp"
            place="@Elevate Global Education Group Limited"
            desc="Revamp a small business' website"
            link="https://elevate-educate.net"
            linktxt="elevate-educate.net"
            sub="Remote"
            date="Dec 2024 - Jan 2025 • 1 Month"
        />
    </div>
  );
}

export default Experiences;
