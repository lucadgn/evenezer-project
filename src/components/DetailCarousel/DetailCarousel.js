import React, { useState } from "react";

const DetailCarousel = ({ product }) => {
  const [current, setCurrent] = useState(product.image[0].url);

  const selectedImg = (e) => {
    e.preventDefault();
    setCurrent(e.target.src);
  };

  return (
    <div className=" col-span-3 row-span-6 flex justify-between">
      <div className="flex flex-col justify-between space-y-4 h-full">
        <button className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        {product.image.map((image) => {
          return (
            <button onClick={selectedImg} key={image.id} type="">
              <img
                className="object-cover h-full"
                src={image.url}
                alt=""
                width="120px"
              />
            </button>
          );
        })}
        <button className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center space-x-4 w-4/5">
        <img
          className="flex object-cover h-full"
          src={current}
          alt=""
          width="75%"
        />
      </div>
    </div>
  );
};

export default DetailCarousel;
