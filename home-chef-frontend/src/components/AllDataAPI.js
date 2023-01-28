import { useEffect, useState } from "react";
import axios from "axios";
import Recipecards from "./Recipecards";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";

function AllDataAPI() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showRecipesCards, setShowRecipeCards] = useState(false);

  useEffect(() => {
    // console.log(process.env.REACT_APP_SERVER);
    const getRecipe = async () => {
      let resultAPI = await axios.get(`${serverLink}/recipesapi?searchQuery=potato`);
      console.log("inside useEffect AllDataAPI", resultAPI.data.results);
            setResults(resultAPI.data.results);
      setShowRecipeCards(true);
    };
    getRecipe();
  }, []);
  
  const searchRecipe = async (e) => {
    e.preventDefault();
    let searchQuery = e.target.name.value
    let resultAPI = await axios.get(`${serverLink}/recipesapi?searchQuery=${searchQuery}`);
      console.log("inside useEffect AllDataAPI", resultAPI.data.results);
            setResults(resultAPI.data.results);
      setShowRecipeCards(true)
      };


  return (
    <div>
      <h1>
        Choose Recipes Based On Ingredients You Have In Your Cupboard Or Fridge
      </h1>
      <Form onSubmit={searchRecipe}>
          <Form.Group controlId="name">
          
            <Form.Control
            placeholder="Add Your Ingredients"
              type="text"
              name="name"
            />
            </Form.Group>
             <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      <h3>Add Your Favorite Recipe To My kitchen </h3>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showRecipesCards &&
        <Container>
          <Row>
        {results.map((item, index) => <Recipecards key={index} item={item} />)}
        </Row>
        </Container>
}
      </div>
    </div>
  );
}

export default AllDataAPI;
