import RoadMap from "@/components/component/roadMap/RoadMap";
import React from "react";
const roadmap = [
  {
    id: 141,
    name: "Ticket criado",
    message: "Esse ticket foi aberto via api",
    cor: "red",
    user: "Ismael strey",
    className: "ABERTO",
    status: "CONCLUIDO",
    created_at: "2024-03-22T00:00:43.818Z",
    upadted_at: "2024-03-22T00:00:43.818Z",
    ticketId: 148,
  },
  {
    id: 149,
    name: "Ticket criado status PAUSADO",
    message: "O ticket foi PAUSADO",
    cor: "red",
    user: "Ismael strey",
    className: "PAUSADO",
    status: "CONCLUIDO",
    created_at: "2024-03-22T00:01:35.751Z",
    upadted_at: "2024-03-22T00:01:35.751Z",
    ticketId: 148,
  },
  {
    id: 152,
    name: "Ticket criado status INICIADO",
    message: "O ticket foi INICIADO",
    cor: "blue",
    user: "Ismael strey",
    className: "INICIADO",
    status: "CONCLUIDO",
    created_at: "2024-03-22T00:05:45.535Z",
    upadted_at: "2024-03-22T00:05:45.535Z",
    ticketId: 148,
  },
  {
    id: 156,
    name: "Ticket criado status PAUSADO",
    message: "O ticket foi PAUSADO",
    cor: "yellow",
    user: "Ismael strey",
    className: "PAUSADO",
    status: "CONCLUIDO",
    created_at: "2024-03-22T00:05:09.768Z",
    upadted_at: "2024-03-22T00:05:09.768Z",
    ticketId: 148,
  },
  {
    id: 165,
    name: "Ticket criado status CONCLUIDO",
    message: "O ticket foi CONCLUIDO",
    cor: "green",
    user: "Ismael strey",
    className: "CONCLUIDO",
    status: "CONCLUIDO",
    created_at: "2024-03-22T11:30:42.897Z",
    upadted_at: "2024-03-22T11:30:42.897Z",
    ticketId: 148,
  },
];

function Home() {
  return <RoadMap roadmap={roadmap} />;
}

export default Home;
