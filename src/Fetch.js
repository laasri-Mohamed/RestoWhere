import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo1 from "./imgs/jason-leung-poI7DelFiVA-unsplash.jpg";
/*function Fetch() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8093/restos/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []);
  console.log(data);
}*/
function MediaCard() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8093/restos/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []);
  let [dataa, setDataa] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8093/specialites/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setDataa(apiData);
      });
  }, []);

  return (
    <>
  {data.map((d) => (
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={Logo1}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {d.nom}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {d.adresse}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Zone : {d.zone.nom}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Rank : {d.rank}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Open Time : {d.openTime}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Close Time : {d.closeTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Position</Button>
      </CardActions>
    </Card>
  ))}
  </>
  );
}
export { MediaCard };
