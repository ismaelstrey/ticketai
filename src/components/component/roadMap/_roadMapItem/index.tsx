import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { RoadMapItemProps } from "@/@types/ticketTypes";
import { IconType } from "@/components/shared/Colors";

function RoadMapItem({
  cor,
  name,
  message,
  created_at,
  status,
  user = "Fernando de Souza",
}: RoadMapItemProps) {
  const borderClass = `border-l-4 py-4 border-${cor}`;
  const bgClass = `bg-${cor}`;

  return (
    <div className={`flex flex-col justify-start ${borderClass}`}>
      <span className="bg-iniciado border-iniciado"></span>
      <span className="bg-pausado border-pausado"></span>
      <span className="bg-aberto border-aberto"></span>
      <span className="bg-cancelado border-cancelado"></span>
      <span className="bg-concluido border-concluido"></span>
      <span
        className={`flex w-6 h-6 -ml-[14px]  justify-center content-center items-center rounded-full ${bgClass}`}
      >
        {status && IconType(status)}
      </span>
      <div className="flex ml-3">
        <ul>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <FaRegCircleUser size={25} />
              {user}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <GrStatusGood size={25} />
              {status}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <MdOutlineMessage size={25} />
              {message}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <IoIosTime size={25} />
              {created_at}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RoadMapItem;
