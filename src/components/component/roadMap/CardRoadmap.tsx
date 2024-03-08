import React from 'react'
interface CardRoadmapProps {
    roadMap: RoadMapProps[];
}
interface RoadMapProps {
    className: string;
    data: string;
    name: string;
    message: string;
}
interface color {
    nome: string;
}



function Roadmap({ name, message, className, data }: RoadMapProps) {
    return (

        <span className={`flex w-2 h-2  rounded-full ${className}`} title={`${name} dia ${data} / ${message}`}></span>

    )
}

function CardRoadmap({ roadMap }: CardRoadmapProps) {
    return (
        <div className="flex w-full justify-end gap-2">
            {roadMap.map((valor, key) => <Roadmap key={key} {...valor} />)}
        </div>
    )
}

export default CardRoadmap