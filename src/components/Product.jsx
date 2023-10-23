import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const params = useParams();
  const id = params.id;

  console.log(id);

  // State to store the fetched data
  const [data, setData] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=4c712231b4504103baf2cf7743c57eec`
        );
        setHtmlContent(response.data.summary);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    // <div>
    //   <img src={data.image} alt="" />
    //   {data.title}
    //   <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    // </div>

    // <div>
    //   <div className="flex flex-col justify-center px-10 h-auto w-30">
    //     <img className=" rounded-lg" src={data.image} alt="foodImage" />

    //     {/* <img
    //       className=" h-80"
    //         src="https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900"
    //         alt="title"
    //       /> */}
    //   </div>
    //   <div>
    //     <h1 className=" font-bold text-3xl mb-5 text-center">{data.title} </h1>
    //   </div>
    //   <div className="text-center">
    //     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    // </div>
    // </div>

    <div class="w-full p-4 text-center bg-white border border-gray-100 rounded-lg shadow sm:p-8 ">
      <h5 class="mb-2 text-3xl font-bold   text-red-900">Shop By Gender</h5>
      <p class="mb-5 text-base sm:text-lg  text-gray-900">
        first class jewellery for fast-day for Min Kide - women
      </p>
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  mx-3 ">
            <a href="/">
              <img className="rounded-t-lg h-80" src={data.image} alt="" />
            </a>
            <div className="p-5">
              <div className="flex justify-between hover:justify-start">
                <div className="">
                  <h1 className="">{data.title}</h1>
                </div>

                <div>
                  <span>Explore</span>
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
