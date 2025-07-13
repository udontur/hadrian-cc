
//import './General.css';

export default function Cardcon({image, title, place, desc, rank, date}) {
    return (
        <div className="card">
            <div className="wrap-border">
                <img className="logo" src={image}/>
            </div>
            <div className="flex-col">
                <div className="title">{title}</div>
                <div>{place}</div>
                <div>{desc}</div>
                <div className="sub">{rank}</div>
                <div className="sub">{date}</div>
            </div>
        </div>
    );
}
