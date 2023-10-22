import React from "react";

const MockUp = () => {
  return (
    <div>
        {/* put this in GetData page */}
      <div className="drop-shadow-lg   w-80 mb-5">
        <div>
          <img
          className=" h-80"
            src="https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900"
            alt="title"
          />
        </div>
        <div className="">
          <h1 className=" py-2 text-center text-3xl ">Title Of food</h1>
        </div>
      </div>


{/* put this in product page */}
      <div>
        <div className="flex flex-col justify-center px-10">
            <img className=" rounded-lg" src="https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900" alt="foodImage" />
        </div>
        <div>
            <h1 className=" font-bold text-3xl mb-5 text-center">Food Title </h1>
        </div>
        <div className="text-center">
            <p>Summary</p>
        </div>
      </div>
    </div>
  );
};

export default MockUp;
