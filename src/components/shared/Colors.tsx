import { ReactNode } from "react";
import { HiTicket } from "react-icons/hi2";
import { FaRegPauseCircle } from "react-icons/fa";
import { BsOpencollective } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidErrorCircle } from "react-icons/bi";

export function limitarTexto(texto: string, limite = 70): string {
  if (texto.length > limite) {
    return texto.substring(0, limite) + " ..."; // Retorna os primeiros 150 caracteres
  } else {
    return texto; // Retorna o texto original se for menor que 150 caracteres
  }
}

export const colorType = (tipo: string): string => {
  switch (tipo) {
    case "ABERTO":
      return "bg-red-500";

    case "INICIADO":
      return "bg-blue-500";

    case "PAUSADO":
      return "bg-yellow-500";

    case "CONCLUIDO":
      return "bg-green-500";

    default:
      return "";
  }
};
export const colorTypeGeneric = (tipo: string): string => {
  switch (tipo) {
    case "ABERTO":
      return "aberto";

    case "INICIADO":
      return "iniciado";

    case "PAUSADO":
      return "pausado";

    case "CONCLUIDO":
      return "concluido";

    default:
      return "";
  }
};
export const IconType = (tipo: string): ReactNode => {
  switch (tipo) {
    case "ABERTO":
      return <BsOpencollective size={20} color="white" />;

    case "INICIADO":
      return <FaInfinity size={20} color="white" />;

    case "PAUSADO":
      return <FaRegPauseCircle size={20} color="white" />;

    case "CONCLUIDO":
      return <IoMdCheckmarkCircleOutline size={20} color="white" />;

    case "CANCELADO":
      return <BiSolidErrorCircle size={20} color="white" />;

    default:
      return "";
  }
};
// --color-aberto: #ef4444;
// --color-iniciado: #3b82f6;
// --color-pausado: #eab308;
// --color-concluido: #22c55e;
export const colorPrioridade = (prioridade: string): string => {
  switch (prioridade) {
    case "CRITICA":
      return "bg-red-500";

    case "ALTA":
      return "bg-blue-500";

    case "MEDIA":
      return "bg-yellow-500";

    case "BAIXA":
      return "bg-green-500";

    case "PLANEJADA":
      return "bg-purple-500";

    default:
      return "";
  }
};
