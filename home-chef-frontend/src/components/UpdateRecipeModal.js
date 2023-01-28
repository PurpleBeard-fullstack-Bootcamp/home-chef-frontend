import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function UpdateRecipeModal(props) {
  const { user } = useAuth0();
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  let username = user.email || user.nickname;

  const updateRecipesInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      RecipeName: e.target.name.value,
      recipeImage: e.target.image.value,
      digimonLevel: e.target.level.value,
      username: user.email || user.nickname,
    };
    const resultsUpdate = await axios.put(
      `${serverLink}/recipes/${props.itemInfo._id}`,
      itemData
    );
    props.handleClose();
    props.updateRecipes(resultsUpdate.data);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateRecipesInfo}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.recipesTName}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="level">
            <Form.Label>Level</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.recipeTitle}
              type="text"
              name="level"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.recipesImage}
              type="text"
              name="img"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Item
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateRecipeModal;
