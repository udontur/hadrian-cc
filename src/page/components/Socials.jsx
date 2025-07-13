
//import './General.css';

function Socials({link, svg}) {
    return (
        <a className="no-under" href={link}>
            <button className="socials">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="#fff" d={svg} />
                </svg>
            </button>
        </a>
    );
}

export default Socials;
