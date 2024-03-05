import React from "react";
import NavbarKanbam from "./NavbarKanbam";
const tickets = [
  {
    id: 1,
    name: "Suporte",
    description: "Houve um raio as 14 hora  tudo vermelho  tudo vermelho",
    type: "ABERTO",
  },
  {
    id: 2,
    name: "Suporte",
    description: "Houve um raio as 14 hora  tudo vermelho  tudo vermelho",
    type: "INICIADO",
  },
  {
    id: 3,
    name: "Suporte",
    description: "Houve um raio as 14 hora  tudo vermelho  tudo vermelho",
    type: "PAUSADO",
  },
  {
    id: 4,
    name: "Suporte",
    description: "Houve um raio as 14 hora  tudo vermelho  tudo vermelho",
    type: "CONCLUIDO",
  },
  {
    id: 5,
    name: "Suporte",
    description: "Houve um raio as 14 hora  tudo vermelho  tudo vermelho",
    type: "CONCLUIDO",
  },
];
const ticketType = ["ABERTO", "INICIADO", "PAUSADO", "CONCLUIDO"];
import ColumnKanbam from "./Column";
import { filtraTicketType } from "@/helper/filters";

function MainKanbam() {
  const RenderColumn = () =>
    ticketType.map((ticketTypes, key) => (
      <ColumnKanbam
        key={key}
        title={ticketTypes}
        tickets={filtraTicketType(tickets, ticketTypes)}
      />
    ));
  return (
    <>
      <main className="flex-1">
        <NavbarKanbam />
        <div className="grid grid-cols-4 gap-4 p-4 w-full">
          <RenderColumn />
        </div>
      </main>
    </>
  );
}

export default MainKanbam;
