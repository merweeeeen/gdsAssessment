import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Submit() {
    const [inputAuthor, setInputAuthors] = useState("");
    const [authors, setAuthors] = useState([]);

    const handleSubmit = (event) => {
        if (inputAuthor.trim() !== "") {
            event.preventDefault();
            setAuthors([...authors, inputAuthor]);
            console.log(authors);
            setInputAuthors("");
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
                    value={inputAuthor}
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
        </div>
    );
}

export default Submit;
