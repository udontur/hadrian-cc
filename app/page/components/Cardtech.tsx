

function Techstack({title, icons}: any) {
    return (
        <div className="card">
            <div className="flex-col">
                <div className="title">{title}</div>
                <img className="skills-dev"
                    src={icons} />
            </div>
        </div>
    );
}

export default Techstack;
