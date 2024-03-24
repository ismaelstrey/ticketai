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
  user = "Sem usuario",
}: RoadMapItemProps) {
  return (
    <div
      className={`flex flex-col justify-start border-l-4 py-4 border-${cor}-500`}
    >
      <span className={`w-6 h-6 -ml-4 rounded-full bg-${cor}-500`}>
        {status && IconType(status)}
      </span>
      <div className="flex ml-3">
        <ul>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <FaRegCircleUser />
              {user}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <GrStatusGood />

              {name}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <MdOutlineMessage />
              {message}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-3 mt-2 text-white">
              <IoIosTime />
              {created_at}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RoadMapItem;
