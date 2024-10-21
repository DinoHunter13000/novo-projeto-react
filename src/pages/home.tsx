import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Home = () => {
  let { contatoId } = useParams();
  return (
    <>
    <main>
      <div className="caixa_de_login">
          <label htmlFor="Email">Email: </label>
          <TextField id="outlined-basic" label="Email" variant="outlined" required type="email" name="email" itemID="email" size="small"/>
          <label htmlFor="Senha">Senha: </label>
          <TextField id="outlined-basic" label="Senha" variant="outlined" required type="email" name="email" itemID="email" size="small"/>
          <Button variant="contained" color="success">Logar</Button>
      </div>
    </main>
    </>
  );
};
export default Home;