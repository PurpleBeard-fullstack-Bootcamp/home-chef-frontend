import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";

function Recipecards(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const addToMyKitchen = async (recipes) => {
    await axios.post(`${serverLink}/recipes`, recipes);
  };
  return (
  
       
        <Col xs>
          <Card>
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
              <Card.Title>{props.item.title}</Card.Title>
              <Card.Text>
                {props.item.summary}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  addToMyKitchen(props.item);
                }}
              >
                Add To My Kitchen
              </Button>
            </Card.Body>
          </Card>
        </Col>
      
   
  );
}

export default Recipecards;
