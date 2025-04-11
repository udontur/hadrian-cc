import React from 'react';
import Title from '../components/Title.tsx';
import Card from "../components/Card.tsx";

function Contests() {
  return (
    <>
        <div className="center">
            <Title
                title="Contests"
            />
            <Card
                image="/img/cemc.png"
                title="Top 2%, Group 2 Honor Roll, Distinction"
                place="Canadian Computing Competition (International, Junior)"
                desc="University of Waterloo"
                sub="Ranking: 136 / 6242"
                date="Feb 2023"
            />
            <Card
                image="/img/uwaterloo.png"
                title="Top 5%, Distinction, School Champion"
                place="Cayley Mathematics Contest (International)"
                desc="University of Waterloo"
                sub="Ranking: 1019 / 20235"
                date="Feb 2025"
            />
            <Card
                image="/img/cityu.png"
                title="Bronze Award, Finalist"
                place="Hong Kong Secondary School Coding Challenge (Final Event)"
                desc="City University of Hong Kong"
                sub="Ranking: 35 / 100"
                date="Jul 2024"
            />
        </div>
    </>
  );
}

export default Contests;
