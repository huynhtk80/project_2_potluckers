import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RecipeSearchCard({ recipe }) {
  const shortSummary = recipe.summary.split(" ").splice(0, 20).join(" ");

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: shortSummary }}
          ></Typography>
        </CardContent>
        <CardActions>
          <Link to={`/home/fullrecipe/`} state={{ value: recipe }}>
            <Button>See Recipe</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default RecipeSearchCard;
