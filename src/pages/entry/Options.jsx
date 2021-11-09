import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";
import Row from "react-bootstrap/Row";
import { AlertBanner } from "../common/AlertBanner";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((_) => {
        setIsError(true);
      });
  }, [optionType]);

  if (isError) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};
