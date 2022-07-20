import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  searchterm: string;
};

export const GiphySearch = () => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border border-black mt-3 ml-3"
        placeholder="Search..."
        {...register("searchterm", { required: true })}
      ></input>
      <input className="ml-6" type="submit"></input>
    </form>
  );
};
