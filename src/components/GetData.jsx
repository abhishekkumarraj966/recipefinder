import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetData = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the input value
  };

  // Call fetchData on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=4c712231b4504103baf2cf7743c57eec`
        );
        console.log(response);
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [inputValue]);

  return (
    <div>
      <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" value={inputValue} onChange={handleInputChange} id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search on Recap" required />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      {/* <h2>Posts:</h2> */}
      {/* write the code to fetch data from api */}

      <div>
        {data.map((post) => (
          <div>
            <Link to={`/product/${post.id}`} key={post.id}>
              <div key={post.id}>
                <div className="drop-shadow-lg   w-80 mb-5">
                  <div>
                    {/* <img className=" h-80" src={post.image} alt="title" /> */}

                    <img
          className=" h-80"
            src="https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900"
            alt="title"
          />
                  </div>
                  <div className="">
                    <h1 className=" py-2 text-center text-3xl ">
                      {post.title}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
