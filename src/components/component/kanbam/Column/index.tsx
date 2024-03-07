"use client";
import React from "react";
import Card from "../Card";
import { Droppable } from "@hello-pangea/dnd";
import { ColumnKanbamProps } from "@/@types/ticketTypes";

function ColumnKanbam({ title, tickets }: ColumnKanbamProps) {
  const ListaTicket = () =>
    tickets?.map((ticket, key) => {
      return <Card key={key} {...ticket} />;
    });
  return (
    <>
      <Droppable
        droppableId={title}
        direction="vertical"
        type="COLUMN"
        key={title}
      >
        {(provided) => (
          <article ref={provided.innerRef} {...provided.droppableProps}>
            <section className="bg-[#1F2937] p-4 md:p-4 rounded-lg">
              <h2 className="text-white mb-4">{title}</h2>
              <div className="space-y-4">
                <ListaTicket />
              </div>
            </section>
            {provided.placeholder}
          </article>
        )}
      </Droppable>

      {/* --------------- */}
    </>
  );
}

export default ColumnKanbam;
