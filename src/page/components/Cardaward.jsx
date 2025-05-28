
//import './General.css';

export default function Cardaward({image, title, diploma, award1, award2, date}) {
    return (
        <>
            <div className="card">
                <img className="logo" src={image}/>
                    <div className="flex-col">
                        <div className="title">{title}</div>
                        <div>{diploma}</div>
                        <div className="high">{award1}</div>
                        <div className="high">{award2}</div>
                        <div className="sub">{date}</div>
                    </div>
            </div>
        </>
    );
}
