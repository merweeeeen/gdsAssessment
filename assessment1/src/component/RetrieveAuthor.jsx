import { useState, useEffect } from "react";
import axios from "axios";
import AuthorCard from "./AuthorCard";

function Retrieve() {
    const [pulledData, setPulledData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setPulledData(response.data);
            console.log(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div style={{ margin: "2%" }}>
                <h1>Retrieved Authors</h1>
                {pulledData.length !== 0 &&
                    pulledData.map((data) => <AuthorCard data={data} />)}
            </div>
        </div>
    );
}

export default Retrieve;
