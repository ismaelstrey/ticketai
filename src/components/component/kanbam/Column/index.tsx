"use client";
import React from "react";
import Card from "../Card";
import { Droppable } from "@hello-pangea/dnd";
import { ColumnKanbamProps } from "@/@types/ticketTypes";
import { IconType, colorType } from "@/components/shared/Colors";

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
            <section className="bg-[#1F2937] rounded-lg">
              <div className={`flex h-14 rounded-t-lg w-full justify-around content-center items-center mb-4 ${colorType(title)}`}>
                <span>{IconType(title)}</span>
                <h2 className="text-white">{title}</h2>
                <span></span>
              </div>
              <div className="space-y-4 min-h-4 p-4">
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
