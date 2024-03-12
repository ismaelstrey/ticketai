import { RoadMapProps } from "@/@types/ticketTypes";
import { colorType } from "@/components/shared/Colors";
import moment from "moment";
import React from "react";
interface CardRoadmapProps {
  roadMap: RoadMapProps[];
}

function Roadmap({ name, message, className, created_at }: RoadMapProps) {
  console.log(className);
  return (
    <span
      className={`flex w-2 h-2  rounded-full ${colorType(className)}`}
      title={`${name} dia ${moment(created_at).format("lll")} / ${message}/`}
    ></span>
  );
}

function CardRoadmap({ roadMap }: CardRoadmapProps) {
  return (
    <div className="flex -mt-2 mb-2 w-full justify-end gap-2 ">
      {roadMap.map((valor, key) => (
        <Roadmap key={key} {...valor} />
      ))}
    </div>
  );
}

export default CardRoadmap;
