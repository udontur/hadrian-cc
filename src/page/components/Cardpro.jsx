
//import './General.css';

export default function Cardpro({image, title, desc, source, demo, tech, date}) {
    return (
        <div className="card">
            <div className="wrap-border">
                <img className="logo" src={image}/>
            </div>
            <div className="flex-col">
                <div className="title">{title}</div>
                <div>{desc}</div>
                <div className="sub">
                    <a href={source} className="underline">Repository</a> <a href={demo} className="underline">Demo</a>
                </div>
                <div>{tech}</div>
                <div className="sub">{date}</div>
            </div>
        </div>
    );
}
