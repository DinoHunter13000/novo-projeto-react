import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../style/estilos.css'
import { Margin } from "@mui/icons-material";

const Home = () => {
  let { contatoId } = useParams();
  return (
    <>
    <main>
      
      <div className="login">
        <h1> Senac Dourados</h1>
        <label htmlFor="Email">Email: </label>
        <TextField id="outlined-basic" label="Email" variant="outlined" required type="email" 
        name="email" itemID="email" size="small"sx={{margin: "0.5em 0 1em 0"}}/>
        <label htmlFor="Senha">Senha: </label>
        <TextField id="outlined-basic" label="Senha" variant="outlined" required type="password" 
        name="password" itemID="password" size="small" sx={{margin: "0.5em 0"}}/>
        <label className="label">Esqueceu a senha? </label>
        <Button variant="contained" color="success" sx={{margin: "0.5em 0", display: "flex", width: "25%",}}>Logar</Button>
      </div>
    </main>
    </>
  );
};
export default Home;