
//import './General.css';

export default function Cardpro({image, title, desc, source, demo, tech, date}) {
    return (
        <div className="card">
            <img className="logo" src={image}/>
            <div className="flex-col">
                <div className="title">{title}</div>
                <div>{desc}</div>
                <div>
                    <a href={source} className="underline">Repository</a> <a href={demo} className="underline">Demo</a>
                </div>
                <div>{tech}</div>
                <div className="sub">{date}</div>
            </div>
        </div>
    );
}
