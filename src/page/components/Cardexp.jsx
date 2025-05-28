
//import './General.css';

export default function Cardexp({image, title, place, desc, link, linktxt, sub, date}) {
    return (
        <div className="card">
            <img className="logo" src={image}/>
            <div className="flex-col">
                <div className="title">{title}</div>
                <div>{place}</div>
                <div>{desc}, <a href={link} className="underline">{linktxt}</a></div>
                <div className="sub">{sub}</div>
                <div className="sub">{date}</div>
            </div>
        </div>
    );
}

