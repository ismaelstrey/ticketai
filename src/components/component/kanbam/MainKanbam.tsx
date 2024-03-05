'use client'
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import NavbarKanbam from "./NavbarKanbam";

const ticketType = ["ABERTO", "INICIADO", "PAUSADO", "CONCLUIDO"];
import ColumnKanbam from "./Column";
import { filtraTicketType } from "@/helper/filters";


function MainKanbam() {

  const { data, isLoading, error } = useQuery("tickets", () => {
    return axios.get('/api/ticket')
      .then(response => response.data)
  }, {
    retry: 5,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
  });
  if (isLoading) {
    return <div className="spin-in-1">Loading</div>
  }
  if (error) {
    return <div className="spin-in-1">Algo deu errado</div>
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
          <RenderColumn />
        </div>
      </main>
    </>
  );
}

export default MainKanbam;
