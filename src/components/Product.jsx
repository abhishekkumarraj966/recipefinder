import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

const Product = (props) => {

    const params = useParams();
    const id = params.id

    console.log(id)

    // State to store the fetched data
    const [data, setData] = useState([]);
    const [htmlContent, setHtmlContent] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=4c712231b4504103baf2cf7743c57eec`);
                setHtmlContent(response.data.summary)
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);


    return (
        <div>
        <img src={data.image} alt="" />
        {
            data.title
            
        }
                         <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                
</div>
    )
}

export default Product