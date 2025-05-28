
import Title from '../components/Title.jsx';
import Cardcon from "../components/Cardcon.jsx";

function Contests() {
  return (
    <>
        <div className="center" id="contests">
            <Title
                title="Contests"
            />
            <Cardcon
                image="/img/cemc.png"
                title="Top 2%, Honor Roll, Distinction"
                place="Canadian Computing Competition (International, Junior)"
                desc="@University of Waterloo, CEMC"
                rank="Ranking: 136 / 6242"
                date="Feb 2023"
            />
            <Cardcon
                image="/img/uwaterloo.png"
                title="Top 5%, School Champion, Distinction"
                place="Cayley Mathematics Contest (International)"
                desc="@University of Waterloo"
                rank="Ranking: 1019 / 20235"
                date="Feb 2025"
            />
            <Cardcon
                image="/img/cityu.png"
                title="Bronze Award, Finalist"
                place="Hong Kong Secondary School Coding Challenge (Final Event)"
                desc="@City University of Hong Kong"
                rank="Ranking: 35 / 100"
                date="Jul 2024"
            />
        </div>
    </>
  );
}

export default Contests;
