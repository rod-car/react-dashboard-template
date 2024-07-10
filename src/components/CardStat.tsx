import { ReactNode } from "react";

type CardStateProps = {
    title?: string;
    value?: string | number;
    link?: string;
    evolution?: {
        type: string;
        value: number;
    } 
}

export function CardState({ title = "Titre de test", value = '$12,628', link = "#" }: CardStateProps): ReactNode {
    return <div className="app-card app-card-stat shadow-sm h-100">
        <div className="app-card-body p-3 p-lg-4">
            <h4 className="stats-type mb-1">{title}</h4>
            <div className="stats-figure">{value}</div>
            <div className="stats-meta text-success">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg> 20%</div>
        </div>
        <a className="app-card-link-mask" href={link}></a>
    </div>
}