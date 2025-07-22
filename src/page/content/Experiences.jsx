
import Title from '../components/Title.jsx';
import Cardexp from "../components/Cardexp.jsx";

export default function Experiences() {
  return (
    <div className="center" id="experience">
        <Title
            title="Valuable Experiences"
        />
        <Cardexp
            image="/img/chonglap.png"
            title="IT Intern (Remote)"
            place="@Chong Lap (H.K.) Co. Ltd."
            desc="Developed the company website with the IT team"
            link="https://hk.chonglap.com"
            linktxt="chonglap.com"
            sub="Remote (with Onsite meetings)"
            date="Feb 2025 - Mar 2025 • 2 Months"
        />
        <Cardexp
            image="/img/elevate-logo.png"
            title="Website Developer (Volunteer)"
            place="@Elevate Global Education Group Limited"
            desc="Revamp a small tutor center's website"
            link="https://elevate-educate.net"
            linktxt="elevate-educate.net"
            sub="Remote"
            date="Dec 2024 - Jan 2025 • 1 Month"
        />
    </div>
  );
}
