import type { NextPage } from "next";

import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title title="" subtitle="Com um pequeno valor você pode adotar um pet" />

      <List pets={pets} onSelect={(pet) => setPetSelected(pet)} />

      <Dialog
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Valor"
              type="number"
              fullWidth
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setPetSelected(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => handleAdotar()}>
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
