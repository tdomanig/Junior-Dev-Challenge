import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiphyResult } from "../giphyresult/giphyResult";

export type Input = {
  searchterm: string;
  Gifquanity: string;
};

export const GiphySearchForm = () => {
  const { register, handleSubmit } = useForm<Input>();
  const [input, setInput] = useState<Input>({ searchterm: "", Gifquanity: "" });
  const onSubmit: SubmitHandler<Input> = (data) => {
    setInput(data);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className=" ml-3 my-3 rounded-l-full p-2"
            placeholder="Search..."
            {...register("searchterm", { required: true })}
          ></input>
          <input
            className="h-[40px] w-[120px] rounded-r-full bg-emerald-400 hover:bg-emerald-600  my-3 "
            type="submit"
            value="Search"
          ></input>
        </div>

        <label className=" my-3 flex mx-auto " htmlFor="Gif-quanity">
          <select
            className="w-[75px] h-7 rounded-full text-center text-md"
            {...register("Gifquanity")}
          >
            <option className="dropdownItems" value="3">
              3
            </option>
            <option className="dropdownItems " value="6">
              6
            </option>
            <option className="dropdownItems " value="9">
              9
            </option>
            <option className="dropdownItems " value="12">
              12
            </option>
            <option className="dropdownItems" value="15">
              15
            </option>
          </select>
        </label>
      </form>
      <div>
        <GiphyResult
          searchterm={input.searchterm}
          Gifquanity={input.Gifquanity}
        ></GiphyResult>
      </div>
    </div>
  );
};
