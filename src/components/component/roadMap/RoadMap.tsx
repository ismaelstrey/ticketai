import { RoadMapItemProps, RoadMapPropsArray } from "@/@types/ticketTypes";
import RoadMapItem from "./_roadMapItem";
import { colorTypeGeneric } from "@/components/shared/Colors";

export default function RoadMap({ roadmap }: RoadMapPropsArray) {
  const RenderRoadMap = () =>
    roadmap?.map((data: RoadMapItemProps, key: any) => {
      data.status = data.className;
      data.cor = colorTypeGeneric(data.className);
      return <RoadMapItem key={key} {...data} />;
    });
  return (
    <div className="flex w-full h-full py-10 items-center justify-center cursor-default">
      <div className="">
        <RenderRoadMap />
        <span className="h-20 flex justify-center items-center text-white">
          TEMPO TOTAL: 3 horas e 25 minutos
        </span>
      </div>
    </div>
  );
}
