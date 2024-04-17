import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gray-50 background-Image">
        <div className="mx-auto max-w-screen-xl px-4 py-32  md:h-screen lg:flex lg:items-center">
          <div className="hidden absolute  top-1/2 -translate-y-1/2 mx-auto max-w-xl p-3 text-center bg-[#222733] md:block md:p-6">
            <h2 className="text-2xl font-bold text-[#e9bc23] md:text-3xl">
              Legal consultation from Best Advocates
            </h2>

            <p className="hidden text-[#e9bc23]/90 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
// {/* <section>
// {/* <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8"> */}
// <div className=" mx-auto max-w-screen-2xl">
//   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//     <div className="bg-blue-600 p-8 background-Image md:p-12 lg:px-16 lg:py-24">
//       <div className="mx-auto max-w-xl text-center bg-[#222733]">
//         <h2 className="text-2xl font-bold text-[#e9bc23] md:text-3xl">
//           Legal consultation from Best Advocates
//         </h2>

//         <p className="hidden text-[#e9bc23]/90 sm:mt-4 sm:block">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
//           egestas tempus tellus etiam sed. Quam a scelerisque amet
//           ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
//           quisque ut interdum tincidunt duis.
//         </p>
//       </div>
//     </div>

//     <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
//       <img
//         alt=""
//         src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
//         className="h-40 w-full object-cover sm:h-56 md:h-full"
//       />

//       <img
//         alt=""
//         src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//         className="h-40 w-full object-cover sm:h-56 md:h-full"
//       />
//     </div>
//   </div>
// </div>
// </section> */}
