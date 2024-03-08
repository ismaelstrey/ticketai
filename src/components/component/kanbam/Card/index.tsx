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
import { useMutation, useQueryClient } from "react-query";

import { toast } from "react-toastify";
import { Draggable } from "@hello-pangea/dnd";
import { playAlertLixo } from "@/helper/beep";
import { deleteTicketApi } from "@/services/Api";

function Card({ id, name, description, client, views, edit, deleta, more }: CardProps) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (ticketId: number) => {
      return deleteTicketApi(ticketId).then((response) => response)
    },
    onSuccess: (data) => {
      notify(data.name)
      playAlertLixo()
      queryClient.invalidateQueries(
        ["tickets"],
      )
    },
    onError() {
      notify("Erro ao deletar")
    },
  })

  const notify = (name: string) => toast.warning(`Ticket ${name} deletado com sucesso`);
  return (
    <>
      <Draggable
        key={id}
        draggableId={id ? id.toString() : ''}
        index={id ? id : 0}
        shouldRespectForcePress
      >
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef} className="bg-[#111827] p-4 md:p-4 rounded-lg">
            <Badge className="mb-2 text-gray-400" variant="secondary">
              <span className="text-white font-extrabold">#{id}</span>
              <h3 className="hidden text-blue-800 ml-3 md:block">/ {client?.name} / <span className="text-yellow-700">{client?.type}</span></h3>
            </Badge>
            <div>
              <p className="text-[#9CA3AF] hidden md:block">{name}</p>
              <p className="text-[#9CA3AF] hidden md:block">{description}</p>
            </div>
            <div className="flex justify-between mt-4 p-2 border-t border-t-gray-600 border-dotted">
              <EyeIcon className="text-white cursor-pointer hover:text-blue-500" />
              <FileEditIcon
                className="text-white cursor-pointer hover:text-blue-500"
                onClick={() => console.log("oi FileEditIcon")}
              />
              <TrashIcon
                className="text-white cursor-pointer hover:text-blue-500"
                onClick={() => id && mutation.mutate(id)}
              />
              <CircleEllipsisIcon
                className="text-white cursor-pointer hover:text-blue-500"
                onClick={() => console.log("oi detalhes")}
              />
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default Card;
