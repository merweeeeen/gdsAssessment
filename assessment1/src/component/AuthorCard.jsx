import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AuthorCard = ({ data }) => {
    return <Accordion
        sx={{
            width: "fit-content",
            maxWidth: "99%",
            minWidth: 600,
            marginBottom: "10px",
        }}
    >
        <AccordionSummary>
            <p style={{ fontWeight: "bold" }}>{data.name}</p>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                <Grid container>
                    {/* Author Details */}
                    <Grid
                        item
                        xs={12}
                        style={{ borderBottom: "1px solid black" }}
                    >
                        <Typography style={{ fontWeight: "bold" }}>
                            Author Details
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>ID: </span>
                            {data.id}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Username: </span>
                            {data.username}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Email: </span>
                            {data.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Phone: </span>
                            {data.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Website: </span>
                            {data.website}
                        </Typography>
                    </Grid>
                    {/* Address */}
                    <Grid
                        item
                        xs={12}
                        style={{ borderBottom: "1px solid black" }}
                    >
                        <Typography
                            style={{ fontWeight: "bold", marginTop: "10px" }}
                        >
                            <span style={{ fontWeight: "bold" }}>Address</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Street: </span>
                            {data.address.street}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Suite: </span>
                            {data.address.suite}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>City: </span>
                            {data.address.city}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Zipcode: </span>
                            {data.address.zipcode}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Geographical Lat:{" "}
                            </span>
                            {data.address.geo.lat}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Geographical Long:{" "}
                            </span>
                            {data.address.geo.lng}
                        </Typography>
                    </Grid>
                    {/* Company Details */}
                    <Grid
                        item
                        xs={12}
                        style={{
                            borderBottom: "1px solid black",
                            marginTop: "10px",
                        }}
                    >
                        <Typography style={{ fontWeight: "bold" }}>
                            Company Details
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Company Name: {data.company.name}
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Catch Phrase:{" "}
                            </span>
                            {data.company.catchPhrase}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>BS: </span>
                            {data.company.bs}
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
        </AccordionDetails>
    </Accordion>
}

export default AuthorCard;