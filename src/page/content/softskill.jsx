
import Title from '../components/Title.jsx';
import Card from "../components/Cardcon.jsx";

function Experiences() {
  return (
    <>
        <Title
            title="Valuable Experiences"
        />
        <Card
            image="/img/chonglap.png"
            title="Front-End Web Developer (Student)"
            place="@Chong Lap (H.K.) Co. Ltd."
            desc="Developed chonglap.com with the IT team."
            sub="Onsite and Remote"
            date="Feb 2025 - Mar 2025 • 2 Months"
        />
        <Card
            image="/img/elevate-logo.png"
            title="Website Re-Make (Volunteer)"
            place="@Elevate Global Education Group Limited"
            desc="Develop elevate-educate.net for a small business in Hong Kong."
            sub="Remote"
            date="Dec 2024 - Jan 2025 • 1 Month"
        />
    </>
  );
}

export default Experiences;
