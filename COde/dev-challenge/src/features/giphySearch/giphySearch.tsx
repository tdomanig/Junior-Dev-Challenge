import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiphyResult } from "../giphyresult/giphyResult";

export type Input = {
  searchterm: string;
};

export const GiphySearchForm = () => {
  const { register, handleSubmit } = useForm<Input>();
  const [input, setInput] = useState("");
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    setInput(data.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border border-black mt-3 ml-3"
          placeholder="Search..."
          {...register("searchterm", { required: true })}
        ></input>
        <input
          className="ml-6 border border-black"
          type="submit"
          value="Search"
        ></input>
      </form>
      <div>
        <GiphyResult test={input}></GiphyResult>
      </div>
    </div>
  );
};
