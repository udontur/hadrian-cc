
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
            title="IT Intern (Onsite)"
            place="@Chong Lap (H.K.) Co. Ltd."
            desc="Pharmaceutical & medical technology distributor in Hong Kong"
            info="Small-Medium Enterprise (~30 employee)"
            link="https://hk.chonglap.com"
            linktxt="www.chonglap.com"
            works={[
                "Collaborate with the IT team on pre-production testing of the ERP system",
                "Automate key company workflows to boost efficiency",
                "Identify the ERP's limitations and creating effective workarounds",
                "Maintain positive working attitude by being dedicated, reliable, and organized",
                "Collaborate with other teams to optimize existing workflows",
                "Learned about and worked with the ERP system from scratch",
                "Clean company data with Python and Excel",
                "Tech stack (Miscrosoft): Business Central, Power Automate, AI, 365 Office, Excel",
                "Tech stack (Non-Microsoft): Shopify, Python, WooCommerce, Notion"
            ]}
            sub="Onsite (9am to 6pm)"
            date="End of Jul 2025 - End of Aug 2025 • 1.25 months"
        />
        <Cardexp
            image="/img/chonglap.png"
            title="Student intern (Remote)"
            place="@Chong Lap (H.K.) Co. Ltd."
            desc="Pharmaceutical & medical technology distributor in Hong Kong"
            info="Small-Medium Enterprise (~30 employee)"
            link="https://hk.chonglap.com"
            linktxt="www.chonglap.com"
            works={[
                "Develop the company's website using WordPress",
                "Collaborate with the IT team and the design team to develop the website",
                "Create effective workarounds for technical limitations",
                "Adapt and improve the website according to different department's needs",
                "Tech stack: WordPress, Figma"
            ]}
            sub="Remote (with Onsite meetings)"
            date="Feb 2025 - Mar 2025 • 2 Months"
        />
        <Cardexp
            image="/img/elevate-logo.png"
            title="Website Developer (Volunteer)"
            place="@Elevate Global Education Group Limited"
            desc="Education center in Hong Kong and Boston"
            info="Small business (~5 employee)"
            works={[
                "Revamp website functionality according to the requirements",
                "Adapt website design to modern design principles",
                "Collaborate, track requirements and progress effectively",
                "Tech stack: SquareSpace, Figma"
            ]}
            link="https://elevate-educate.net"
            linktxt="elevate-educate.net"
            sub="Remote"
            date="Dec 2024 - Jan 2025 • 2 Month"
        />
    </div>
  );
}
