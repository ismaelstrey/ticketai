"use client";
import React from "react";
import { useMutation, useQuery } from "react-query";
import NavbarKanbam from "./NavbarKanbam";
import ColumnKanbam from "./Column";
import { filtraTicketType, filtraTiketPorId } from "@/helper/filters";
import { DragDropContext } from "@hello-pangea/dnd";
import { TicketProps } from "@/@types/ticketTypes";
import { getTicketApi, updateTicketApi } from "@/services/Api";
import { toast } from "react-toastify";
import { playAlertSound } from "@/helper/beep";
const ticketType = ["ABERTO", "INICIADO", "PAUSADO", "CONCLUIDO"];
function MainKanbam() {
  const { data, isLoading, error, refetch } = useQuery("tickets", () => {
    return getTicketApi().then((response) => response);
  });

  const mutation = useMutation({
    mutationFn: (ticket: TicketProps) => {
      return updateTicketApi({ ...ticket }).then((response) => response);
    },
    onSuccess: (data) => {
      playAlertSound()
      notify(data.name);
    },
  });
  const notify = (name: string) =>
    toast.success(`Ticket ${name} atualizado com sucesso`);

  async function onDragEnd(result: any, tikets: TicketProps[]) {
    if (!result.destination) return;

    const { destination, draggableId } = result;
    const id: number = draggableId;
    const status: string = destination.droppableId;
    const filtrado = await filtraTiketPorId(id, tikets);
    filtrado.type = status;
    mutation.mutate(filtrado);
  }

  const RenderColumn = () =>
    ticketType.map((ticketTypes, key) => (
      <ColumnKanbam
        key={key}
        title={ticketTypes}
        tickets={data && filtraTicketType(data, ticketTypes)}
      />
    ));
  return (
    <>
      <main className="flex-1">
        <NavbarKanbam />
        <div className="grid grid-cols-4 gap-4 p-4 w-full">
          <DragDropContext
            onDragEnd={(result) =>
              //@ts-ignore
              onDragEnd(result, data)
            }
          >
            <RenderColumn />
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default MainKanbam;
function notify(name: string) {
  throw new Error("Function not implemented.");
}
