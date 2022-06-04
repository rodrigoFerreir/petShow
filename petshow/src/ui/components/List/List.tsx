import React from "react";
import {
  ListStyled,
  ListItemStyled,
  ListItemInfoStyled,
  ListItemNameStyled,
  ListItemPhotoStyled,
  ListItemDescriptionStyled,
} from "./List.styles";

import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextServices } from "../../../data/services/TextServices";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

const List = ({ pets, onSelect }: ListProps) => {
  const maxLengthText = 100;

  return (
    <ListStyled>
      {pets.map((pet) => (
        <ListItemStyled key={pet.id}>
          <ListItemPhotoStyled src={pet.photo} />
          <ListItemInfoStyled>
            <ListItemNameStyled>{pet.name}</ListItemNameStyled>
            <ListItemDescriptionStyled>
              {TextServices.limitText(pet.history, maxLengthText)}
            </ListItemDescriptionStyled>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </ListItemInfoStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};

export default List;
