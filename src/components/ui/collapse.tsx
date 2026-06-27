import * as React from "react";

interface CardItem {
    title: string;
    companyName: string;
    companyType: string; // SME, Pharmaceutical distributor
    jobItems: string[];
    jobType: string; // Intern, Onsite
    date: string; // Feb 2025 - Mar 2025
    time: string; // 3 months
}

interface CollapseProps {
    data: CardItem[];
}

export function Collapse({ data }: CollapseProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className="">
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>{item.title}</div>
                            <div>@{item.companyName}</div>
                            <div>{item.jobType}</div>
                            <div>{item.date} • {item.time}</div>
                        </li>
                    )
                })}
            </ul>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className=""
            >
                {isExpanded ?
                    "Show Less":
                    "Show More"
                }
            </button>
        </div>
    )
}
