import { useEffect, useState } from "react";
import axios from "axios";
import FavRec from "./FavRec";
import UpdateRecipeModal from "./UpdateRecipeModal";
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";

function MyKitchen() {
  const { user } = useAuth0();
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  //const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);

  useEffect(() => {
    const getFavRecipes = async () => {
      //console.log("user >>", user);

      //let username = user.email || user.nickname;
      let resultRecipes = await axios.get(
        `${serverLink}/recipes `
      );

      setResults(resultRecipes.data);
      setShowItems(true);
    };
    getFavRecipes();
  }, []);

  const deleteRecipes = async (index) => {
    //let username = user.email || user.nickname;
    let resultsRecipes = await axios.delete(
      `${serverLink}/Recipes/${index}`
    );
    setResults(resultsRecipes.data);
    // setShowItems(true);
  };

  // const showUpdateModal = async (chosenItem) => {
  //   setShowUpdateModalStatus(true);
  //   setItemInfo(chosenItem);
  // };

  // const handleCloseUpdate = () => {
  //   setShowUpdateModalStatus(false);
  // };

  // const updateRecipes = (results) => {
  //   setResults(results);
  // };

  return (
    <div>
      <h1>MyKitchen</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
         <Container>
          <Row>
          {results.map((item, index) => (
            <FavRec
              key={index}
              item={item}
              deleteRecipes={deleteRecipes}
             // showUpdateModalProps={showUpdateModal}
            />
          ))}
        </Row>
        </Container>
}
      </div>

      {/* <UpdateRecipeModal
        show={showUpdateModalStatus}
        handleClose={handleCloseUpdate}
        itemInfo={itemInfo}
        updateRecipes={updateRecipes}
      /> */}
    </div>
  );
}

export default MyKitchen;
