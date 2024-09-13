"use client";
import React, { useState } from "react";
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
import { GrFormViewHide } from "react-icons/gr";
import CardRoadmap from "../../roadMap/CardRoadmap";
import RoadMap from "../../roadMap/RoadMap";
import { motion } from "framer-motion";

function Card({
  id,
  name,
  description,
  client,
  ticketRoadMap,
  views,
  edit,
  deleta,
  more,
}: CardProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (ticketId: number) => {
      return deleteTicketApi(ticketId).then((response) => response);
    },
    onSuccess: (data) => {
      notify(data.name);
      playAlertLixo();
      queryClient.refetchQueries(["tickets"]);
    },
    onError() {
      notify("Erro ao deletar");
    },
  });

  const notify = (name: string) =>
    toast.warning(`Ticket ${name} deletado com sucesso`);

  const [detalhes, setDetalhes] = useState(false);

  return (
    <>
      <Draggable
        key={id}
        draggableId={id ? id.toString() : ""}
        index={id ? id : 0}
        shouldRespectForcePress
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <motion.div
              className="bg-[#111827] p-4 md:p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              {ticketRoadMap && <CardRoadmap roadMap={ticketRoadMap} />}
              <Badge
                className="mb-2 text-gray-400 flex flex-col justify-items-start content-start w-full"
                variant="secondary"
              >
                <div className="flex w-full">
                  <span className="text-white font-extrabold">#{id}</span>
                  <h3 className="hidden text-blue-800 ml-3 md:block">
                    / {client?.name} /{" "}
                    <span className="text-yellow-700">{client?.type}</span>
                  </h3>
                </div>
              </Badge>
              <div>
                <p className="text-[#9CA3AF] hidden md:block">{name}</p>
                <p className="text-[#9CA3AF] hidden md:block">{description}</p>
                {ticketRoadMap && detalhes && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      onClick={() => setDetalhes(!detalhes)}
                      className="flex justify-center cursor-pointer"
                      title="Ocultar detalhes"
                    >
                      <GrFormViewHide color="white" size={30} />
                    </span>
                    <RoadMap roadmap={ticketRoadMap} />
                  </motion.div>
                )}
              </div>
              <div className="flex justify-between mt-4 p-2 border-t border-t-gray-600 border-dotted">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <EyeIcon className="text-white cursor-pointer hover:text-blue-500" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FileEditIcon
                    className="text-white cursor-pointer hover:text-blue-500"
                    onClick={() => console.log("oi FileEditIcon")}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <span title={`Excluir ${name}`}>
                    <TrashIcon
                      className="text-white cursor-pointer hover:text-blue-500"
                      onClick={() => id && mutation.mutate(id)}
                    />
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <CircleEllipsisIcon
                    className="text-white cursor-pointer hover:text-blue-500"
                    onClick={() => setDetalhes(!detalhes)}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default Card;
