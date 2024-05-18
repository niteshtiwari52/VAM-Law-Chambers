import React from "react";
import { LiaLinkSolid } from "react-icons/lia";

import { FaLinkedinIn } from "react-icons/fa";
const Teams = () => {
  return (
    <>
      <div className="">
        <div>
          {/* heading */}
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            OUR TEAMS
          </h2>
          <div className="w-2/3 mx-auto my-8 text-center">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam corrupti dolores sit quo unde, labore tenetur iusto non
              necessitatibus nulla voluptate sint ad asperiores earum ratione
              sunt quos nemo. Ex eius odit dolorem velit illo? Minus aspernatur
              distinctio libero veritatis voluptatibus, nisi eaque totam, quod
              temporibus incidunt sit. Quidem, nostrum?
            </p>
          </div>
          {/* images */}
          <div className="w-2/3 h-[460px] mx-auto flex flex-wrap gap-4">
            {/* member 1 */}
            <div className="w-1/2 rounded-md bg-gray-300 relative">
              {/* <img src="" alt="" /> */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="text-center my-3">
                  <p className="font-normal text-sm">Managaing Director</p>
                  <h3 className="font-medium text-xl">Nitesh Tiwari</h3>
                </div>
                <div className=" flex justify-center items-center gap-4">
                  <div className="bg-blue-700 w-10 h-10 p-2 rounded-full flex justify-center items-center">
                    <FaLinkedinIn className="text-white w-6 h-6" />
                  </div>
                  <div className="bg-gray-500 w-10 h-10 p-2 rounded-full flex justify-center items-center">
                    <LiaLinkSolid className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            {/* member 2 */}
            <div className="w-1/2 rounded-md bg-gray-300 relative">
              {/* <img src="" alt="" /> */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="text-center my-3">
                  <p className="font-normal text-sm">Managaing Director</p>
                  <h3 className="font-medium text-xl">Nitesh Tiwari</h3>
                </div>
                <div className=" flex justify-center items-center gap-4">
                  <div className="bg-blue-700 w-10 h-10 p-2 rounded-full flex justify-center items-center">
                    <FaLinkedinIn className="text-white w-6 h-6" />
                  </div>
                  <div className="bg-gray-500 w-10 h-10 p-2 rounded-full flex justify-center items-center">
                    <LiaLinkSolid className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
