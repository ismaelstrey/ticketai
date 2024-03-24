import { RoadMapItemProps, RoadMapPropsArray } from "@/@types/ticketTypes";
import RoadMapItem from "./_roadMapItem";

export default function RoadMap({ roadmap }: RoadMapPropsArray) {
  const RenderRoadMap = () =>
    roadmap?.map((data: RoadMapItemProps, key: any) => (
      <RoadMapItem key={key} {...data} />
    ));
  return (
    <div className="flex w-full h-full py-10 bg-[#1A1C23] items-center justify-center">
      <div className="">
        <RenderRoadMap />
        <span className="h-20 flex justify-center items-center">
          TEMPO TOTAL: 3 horas e 25 minutos
        </span>
      </div>
    </div>
  );
}
