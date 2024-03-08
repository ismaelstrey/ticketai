import { Label } from '@/components/ui/label';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import OpenFormTicket from './OpenFormTicket';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { RoadMapProps, TicketProps } from '@/@types/ticketTypes';
import { toast } from 'react-toastify';
import { getClienteApi, postRoadMap } from '@/services/Api';
type Inputs = {
    name: string;
    description: string;
    type: string;
    clientId?: number;
};


function NewTicket() {
    const queryClient = useQueryClient()
    const { data, isLoading, error, refetch } = useQuery("clientes", () => {
        return getClienteApi().then((response) => response);
    });

    const [ativo, setAtivo] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        mutation.mutate(data)
        setAtivo(!ativo)
    };
    const notify = (name: string) => toast.success(`Ticket ${name} cadstrado com sucesso`);
    const mutation = useMutation({
        mutationFn: (data: TicketProps) => {
            let roadMap: RoadMapProps;
            return axios.post(`/api/ticket`, data)
                .then(response => response.data).then(
                    () => {
                        roadMap.ticketId = 63
                        roadMap.name = "Abertura do ticket"
                        roadMap.message = "Ticker criado com sucesso"
                        postRoadMap(roadMap).then((res) => console.log("oi"))
                    }
                )
        },
        onSuccess: (data) => {

            notify(data.name)
            queryClient.invalidateQueries(
                ["tickets"],
            )

        },
        onError: (error) => {
            console.log(error)
        }
    })



    return (
        <>

            <div className={`w-screen bg-opacity-30 backdrop-blur-sm justify-center h-full fixed  ${ativo ? 'flex' : 'hidden'}`}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex h-[50vh] mx-auto mt-20 border-blue-300 shadow-md shadow-slate-200 border rounded-md bg-slate-900 w-2/6 flex-col gap-3 items-center justify-center content-center min-h-[50%]'>
                    <header className='text-white relative -top-6'>   <h1>Novo Ticket</h1></header>

                    <div className="grid grid-cols-1 gap-4 w-11/12 ">
                        <div className="space-y-2 flex flex-col ">
                            <Label htmlFor="clientId" className='text-white py-2'>Cliente</Label>
                            <select {...register("clientId", { required: true })} id='clientId'
                                className={`rounded-md h-11 text-gray-800 p-2 ${errors.clientId && "bg-red-50"
                                    }`}>
                                {data?.map((empresa, key) => <option key={key} value={empresa.id}>{empresa.name}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-11/12 ">
                        <div className="space-y-2 flex flex-col  ">
                            <Label htmlFor="name" className='text-white py-2'>Titulo</Label>
                            <input
                                {...register("name", { required: true })} id='name'
                                className={`rounded-md h-11 text-gray-800 p-2 ${errors.name && "bg-red-50"
                                    }`}
                            />
                        </div>
                        <div className="space-y-2 flex flex-col ">
                            <Label htmlFor="type" className='text-white py-2'>Tipo</Label>
                            <select defaultValue="ABERTO"   {...register("type", { required: true })} id='type'
                                className={`rounded-md h-11 text-gray-800 p-2 ${errors.type && "bg-red-50"
                                    }`}>
                                <option value="ABERTO">ABERTO</option>
                                <option value="INICIADO">INICIADO</option>
                                <option value="PAUSADO">PAUSADO</option>
                                <option value="CONCLUIDO">CONCLUIDO</option>
                            </select>
                        </div>

                    </div>

                    <div className="grid gap-4  w-11/12 ">
                        <div className="space-y-2 flex flex-col">
                            <Label htmlFor="description" className='text-white py-2'>Descrição</Label>
                            <textarea rows={4}

                                {...register("description", { required: true })} id='description'
                                className={`rounded-md text-gray-800 p-2 ${errors.description && "bg-red-50"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* {errors.name && <span>Esse campo é Obrigatorio</span>} */}
                    <div className="grid grid-cols-2 gap-4  w-11/12 ">
                        <span></span>
                        <span className='gap-2 flex justify-end mt-4'>
                            <button type="button" onClick={() => setAtivo(!ativo)} className='bg-gray-300 cursor-pointer px-8 py-2 rounded-md w-60'>Cancelar</button>
                            <input type="submit" className='bg-blue-500 px-8 py-2 rounded-md w-60 cursor-pointer' /></span>

                    </div>
                </form>
            </div>
            <OpenFormTicket onClick={() => setAtivo(!ativo)} />

        </>
    )
}

export default NewTicket