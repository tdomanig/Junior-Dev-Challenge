import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiphyResult } from "../giphyresult/giphyResult";

export type Input = {
  searchterm: string;
  Gifquanity: string;
};

export const GiphySearchForm = () => {
  const { register, handleSubmit } = useForm<Input>();
  const [input, setInput] = useState({});
  const onSubmit: SubmitHandler<Input> = (data) => {
    setInput(data);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border border-gray-500 ml-3 my-3 rounded-full p-2"
          placeholder="Search..."
          {...register("searchterm", { required: true })}
        ></input>
        <label className=" my-3 flex mx-auto " htmlFor="Gif-quanity">
          <select
            className="w-[75px] h-7 rounded-full text-center text-md"
            {...register("Gifquanity")}
          >
            <option className="bg-gray-500 text-md hover" value="3">
              3
            </option>
            <option className="bg-gray-500 text-md" value="6">
              6
            </option>
            <option className="bg-gray-500 text-md" value="9">
              9
            </option>
            <option className="bg-gray-500 text-md" value="12">
              12
            </option>
            <option className="bg-gray-500 text-md" value="15">
              15
            </option>
          </select>
        </label>
        <input
          className="h-[35px] w-[120px] rounded-md border  border-black bg-white  my-3 hover:translate-y-3 hover:border-collapse "
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
