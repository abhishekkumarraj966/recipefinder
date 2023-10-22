import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetData = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
       
      <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."/>
      <h2>Posts:</h2>
   {/* write the code to fetch data from api */}

      <ul>
        {data.map((post) => (
          <div>
            <Link to={`/product/${post.id}`} key={post.id}>
              <div key={post.id}>
<img src={post.image} alt="title" />
                <li >{post.title}</li>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
