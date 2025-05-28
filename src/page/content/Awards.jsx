
import Title from '../components/Title.jsx';
import Cardaward from "../components/Cardaward.jsx";

export default function Awards() {
  return (
    <>
        <div className="center">
            <Title
                title="Education & Awards"
            />
            <Cardaward
                image="/img/dsc.png"
                title="DSC International School"
                diploma="Ontario Secondary School Diploma (Starting from Grade 9.5)"
                award1="Academic Honor Roll: S2 2024, S1 2025"
                award2="Highest Course Academic Achievement: MPM2D"
                date="Feb 2024 - Present"
            />
            <Cardaward
                image="/img/wyhk.png"
                title="Wah Yan College, Hong Kong"
                diploma="Hong Kong Secondary School Diploma (Grade 7 to Grade 9.5)"
                award1="Fr. McGaley Memorial Award (Nov 2022)"
                award2=""
                date="Sep 2021 - Jan 2024"
            />
        </div>
    </>
  );
}

