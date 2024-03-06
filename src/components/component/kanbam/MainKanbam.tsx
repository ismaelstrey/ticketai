'use client'
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import NavbarKanbam from "./NavbarKanbam";
import ColumnKanbam from "./Column";
import { filtraTicketType, filtraTiketPorId } from "@/helper/filters";
import { DragDropContext } from "@hello-pangea/dnd";
import { TicketProps } from "@/@types/ticketTypes";
const ticketType = ["ABERTO", "INICIADO", "PAUSADO", "CONCLUIDO"];
function MainKanbam() {

  const { data, isLoading, error, refetch } = useQuery("tickets", () => {
    return axios.get('/api/ticket')
      .then(response => response.data)
  }, {
    // retry: 5,
    // refetchOnWindowFocus: true,
    // refetchInterval: 1000
  });

  if (isLoading) {
    return <div className="spin-in-1">Loading</div>
  }
  if (error) {
    return <div className="spin-in-1">Algo deu errado</div>
  }

  async function onDragEnd(result: any, tikets: TicketProps[]) {
    if (!result.destination) return;

    const { destination, draggableId } = result;
    const id: number = draggableId;
    const status: string = destination.droppableId;
    const filtrado = await filtraTiketPorId(id, tikets);
    filtrado.type = status;
    // await atualizarTicketFn(filtrado);
    // await atualizar(filtrado);
    console.log(filtrado)
  }

  const RenderColumn = () =>
    ticketType.map((ticketTypes, key) => (
      <ColumnKanbam
        key={key}
        title={ticketTypes}
        tickets={filtraTicketType(data, ticketTypes)}
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
