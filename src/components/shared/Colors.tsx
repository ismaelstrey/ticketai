import { ReactNode } from "react";
import { HiTicket } from "react-icons/hi2";


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
export const IconType = (tipo: string): ReactNode => {
    switch (tipo) {
        case "ABERTO":
            return <HiTicket size={40} color="#fff" className="rotate-180" />;

        case "INICIADO":
            return <HiTicket size={40} className="rotate-180" color="#fff" />;

        case "PAUSADO":
            return <HiTicket size={40} className="rotate-180" color="#fff" />;

        case "CONCLUIDO":
            return <HiTicket size={40} className="rotate-180" color="#fff" />;

        case "CANCELADO":
            return <HiTicket size={40} className="rotate-180" color="#fff" />;

        default:
            return "";
    }
};
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



