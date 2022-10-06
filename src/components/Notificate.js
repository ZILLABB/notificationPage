import { data } from "./data";
import React from "react";

const Notificate = () => {
  return (
    <div className="px-40  ">
      {data.map((datum, index) => (
        <div key={index} className="">
          <div className="bg-[#E5EFFA] mt-[10px] h-[100px] p-7 flex text-center gap-5  ">
            <div className=" w-[60px] ">{datum.img}</div>
            <div>
              {datum.name}
              {datum.article}
              {datum.dot} 
              {datum.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notificate;
