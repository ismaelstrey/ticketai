"use client";
import React from "react";
import {
  EyeIcon,
  FileEditIcon,
  TrashIcon,
  CircleEllipsisIcon,
} from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { CardProps } from "@/@types/ticketTypes";

function Card({ id, name, description, views, edit, deleta, more }: CardProps) {
  return (
    <>
      <div className="bg-[#111827] p-4 md:p-4 rounded-lg">
        <Badge className="mb-2 text-gray-400" variant="secondary">
          #{id}
          <h3 className="hidden md:block"> _ Empresa |--| Luiz</h3>
        </Badge>

        <p className="text-[#9CA3AF] hidden md:block">{name}</p>
        <p className="text-[#9CA3AF] hidden md:block">{description}</p>
        <div className="flex justify-between mt-4">
          <EyeIcon className="text-white cursor-pointer hover:text-blue-500" />
          <FileEditIcon
            className="text-white cursor-pointer hover:text-blue-500"
            onClick={() => console.log("oi FileEditIcon")}
          />
          <TrashIcon
            className="text-white cursor-pointer hover:text-blue-500"
            onClick={() => console.log("oi TrashIcon")}
          />
          <CircleEllipsisIcon
            className="text-white cursor-pointer hover:text-blue-500"
            onClick={() => console.log("oi detalhes")}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
