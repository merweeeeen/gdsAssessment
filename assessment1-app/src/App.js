import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AuthorCard from "./component/AuthorCard";

function App() {
  const [inputAuthor, setInputAuthors] = useState("");
  const [authors, setAuthors] = useState([]);
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

  const handleSubmit = (event) => {
    if (inputAuthor.trim() !== "") {
      event.preventDefault();
      setAuthors([...authors, inputAuthor]);
      console.log(authors);
    }
  };
  return (
    <div>
      <div style={{ margin: "2%" }}>
        <TextField
          id="outlined-basic"
          label="Enter Author Name"
          variant="outlined"
          placeholder="Input Author"
          onChange={(data) => {
            setInputAuthors(data.target.value);
          }}
          // sx={{ height: "20px" }}
          size="small"
          sx={{ marginRight: "10px", minWidth: "250px" }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div style={{ margin: "2%" }}>
        <h1>Submitted Authors</h1>
        <ol>
          {authors.map((author) => (
            <li>
              <Typography>{author}</Typography>
            </li>
          ))}
        </ol>
      </div>
      <div style={{ margin: "2%" }}>
        <h1>Pulled Data</h1>
        {pulledData.length !== 0 &&
          pulledData.map((data) => <AuthorCard data={data} />)}
      </div>
    </div>
  );
}

export default App;
