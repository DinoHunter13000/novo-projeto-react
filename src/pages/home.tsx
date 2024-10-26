import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../style/estilos.css'

const Home = () => {
  let { contatoId } = useParams();
  return (
    <>
    <main>
      <div className="login">
          <label htmlFor="Email">Email: </label>
          <TextField id="outlined-basic" label="Email" variant="outlined" required type="email" name="email" itemID="email" size="small" className="input_email"/>
          <label htmlFor="Senha">Senha: </label>
          <TextField id="outlined-basic" label="Senha" variant="outlined" required type="password" name="password" itemID="password" size="small" className="input_senha"/>
          <label>Esqueceu a senha? </label>
          <div className="botao"><Button variant="contained" color="success">Logar</Button></div>
      </div>
    </main>
    </>
  );
};
export default Home;