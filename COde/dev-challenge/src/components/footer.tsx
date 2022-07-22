import { Space } from "@mantine/core";
export const Footer = () => {
  return (
    <div className="  bg-black h-[150px] flex justify-between w-screen mb-3 text-center mt-10 text-white lg:flex-col">
      <div className="my-auto  flex flex-col ">
        <p className=" ml-[50px] text-4xl">Junior Dev Challenge </p>
        <Space h={30} />
        <p className="">Made by Tobias Domanig</p>
      </div>
      <div className="  text-lg flex my-auto mr-7 sm:mr-0 sm:flex-col">
        <p>Made with:</p>
        <a
          className="pl-4 text-lg text-emerald-400 "
          href="https://developers.giphy.com/docs/api/endpoint/"
        >
          https://developers.giphy.com/docs/api/endpoint/
        </a>
      </div>
    </div>
  );
};
