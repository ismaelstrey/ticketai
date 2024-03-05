"use client";
import { MenuIcon, SearchIcon, BellIcon } from "@/components/ui/icons";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  search: string;
};

function NavbarKanbam() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("search")); // watch input value by passing the name of it
  return (
    <>
      <header className="flex items-center justify-between p-4 bg-[#111827]">
        <MenuIcon className="text-white" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("search", { required: true })}
            className={`rounded-md h-11 text-gray-800 ${
              errors.search && "bg-red-50"
            }`}
          />
          {/* errors will return when field validation fails  */}
          {errors.search && <span>Esse campo é Obrigatorio</span>}

          {/* <input type="submit" /> */}
        </form>
        <SearchIcon className="text-white" />
        <BellIcon className="text-white" />
      </header>
    </>
  );
}

export default NavbarKanbam;
