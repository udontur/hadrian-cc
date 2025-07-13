

function Techstack({title, icons}) {
    return (
        <div className="card">
            <div className="flex-col">
                <div className="title fix-title-tech">{title}</div>
                <div className="fix-plate-tech">
                    <img className="skills-dev" src={icons} />
                </div>
            </div>
        </div>
    );
}

export default Techstack;
