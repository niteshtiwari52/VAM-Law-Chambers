import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import useParallexEffect from "../components/CustomHooks/useParallexEffect";

const ErrorPage = () => {
  const [inputref] = useParallexEffect();
  return (
    <>
      <section ref={inputref} className="error-page relative py-28">
        <div className="container mx-auto px-4 w-full">
          <div className="error text-center">
            <div className="thumbnail relative inline-block mb-14">
              <img src="images/404.png" alt="404 Error" />
              <div className="shape-group hidden md:block">
                {/* shape1 */}
                <div className="absolute sm:hidden xl:block left-[-46px] top-[-5px] opacity-40 animated fadeIn w-auto max-w-full">
                  <div className="animation-container">
                    <span
                      className="shape relative block left-0 top-0"
                      data-depth="2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img src="images/shape-25.png" alt="" />
                    </span>
                  </div>
                </div>
                {/* shape2 */}
                <div className="absolute sm:hidden xl:block left-[50px] top-[-15px] animated fadeIn">
                  <div className="animation-container">
                    <span
                      className="shape relative block left-0 top-0"
                      data-depth="-2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img src="images/shape-15.png" alt="" />
                    </span>
                  </div>
                </div>
                {/* shape3 */}
                <div className="absolute sm:hidden xl:block top-[40px] right-[-12px] animated fadeIn">
                  <div className="animation-container">
                    <span
                      className="shape relative block left-0 top-0"
                      data-depth="-2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img src="images/shape-02.png" alt="" />
                    </span>
                  </div>
                </div>
                {/* shape4 */}
                <div className="absolute sm:hidden xl:block top-[-25px] right-[-46px] opacity-40 -z-[1] animated fadeIn w-auto max-w-full">
                  <div className="animation-container">
                    <span
                      className="shape relative block left-0 top-0"
                      data-depth="2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img src="images/shape-13.png" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <h2 className="title mb-2 text-5xl">404 - Page Not Found</h2>
              <h4 className="subtitle mb-12 font-semibold">
                The page you are looking for does not exist.
              </h4>
              <NavLink to="/" className="btn bg-primary">
                <span className="pr-1 text-xl">
                  <TbArrowNarrowRight />
                </span>
                Back to Homepage
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
