import { useState, useEffect } from "react";
import { Pet } from "../@types/Pet";
import { api } from "../services/ApiService";
import { AxiosError } from "axios";

export const useIndex = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petSelected, setPetSelected] = useState<Pet | null>(null);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/pets")
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAdotar = () => {
    if (petSelected !== null && validate()) {
      api
        .post("/adocoes", {
          pet_id: petSelected.id,
          email,
          value,
        })
        .then((res) => {
          setMessage("Adoção realizada com sucesso!");
          setPetSelected(null);
          resetForm();
        })
        .catch((err: AxiosError) => {
          setMessage(err.response?.data.message);
        });
    } else if (!validate()) {
      setMessage("Preencha todos os campos");
    }
  };

  const validate = () => email.length > 0 && value.length > 0;

  const resetForm = () => {
    setEmail("");
    setValue("");
  };

  return {
    pets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    handleAdotar,
  };
};
