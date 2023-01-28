import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function FavRec(props) {
  return (
   
        <Col>
          <Card>
            <Card.Img variant="top" src={props.item.recipeImage} />
            <Card.Body>
              <Card.Title>{props.item.recipeTitle}</Card.Title>
              <Card.Text>
                {props.item.recipeSummary}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => props.deleteRecipes(props.item._id)}
              >
                Delete
              </Button>
              {/* <Button
                variant="primary"
                onClick={() => props.showUpdateModalProps(props.item)}
              >
                Update
              </Button> */}
            </Card.Body>
          </Card>
        </Col>
    
  );
}

export default FavRec;
