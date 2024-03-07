"use client";
import React from "react";
import { useQuery } from "react-query";
import NavbarKanbam from "./NavbarKanbam";
import ColumnKanbam from "./Column";
import { filtraTicketType, filtraTiketPorId } from "@/helper/filters";
import { DragDropContext } from "@hello-pangea/dnd";
import { TicketProps } from "@/@types/ticketTypes";
import { getTicketApi, updateTicketApi } from "@/services/Api";
const ticketType = ["ABERTO", "INICIADO", "PAUSADO", "CONCLUIDO"];
function MainKanbam() {
  const { data, isLoading, error, refetch } = useQuery("tickets", () => {
    return getTicketApi().then((response) => response);
  });

  async function onDragEnd(result: any, tikets: TicketProps[]) {
    if (!result.destination) return;

    const { destination, draggableId } = result;
    const id: number = draggableId;
    const status: string = destination.droppableId;
    const filtrado = await filtraTiketPorId(id, tikets);
    filtrado.type = status;
    updateTicketApi({ ...filtrado }).then((teste) => console.log(teste));
    console.log(filtrado);
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
