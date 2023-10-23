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
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=d652cb9b0e924955bb7b17f8c469c44f `
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
    <div className="w-full p-4 text-center bg-white border border-gray-100 rounded-lg shadow sm:p-8 ">
      <h5 className="mb-2 text-3xl font-bold   text-red-900">Recipe Search</h5>
     
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
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
    // </div>
  );
};

export default Product;
