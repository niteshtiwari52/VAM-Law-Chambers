import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
          <button
            className="mt-6 inline-block rounded bg-[#e9bc23] px-5 py-3 text-sm font-medium text-black hover:bg-[#e9bb2384]"
            onClick={() => navigate("/")}
          >
            Go To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
