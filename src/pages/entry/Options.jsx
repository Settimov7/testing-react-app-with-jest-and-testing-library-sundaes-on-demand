import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ScoopOption } from "./ScoopOption";
import Row from "react-bootstrap/Row";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};
