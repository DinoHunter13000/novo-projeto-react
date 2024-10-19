import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

const Home = () => {
  let { contatoId } = useParams();
  return (
    <>
    <main>
      <div className="caixa_de_login">
          <label htmlFor="Email">Email</label>
          <input className="input_email" placeholder="Digite aqui o seu email" type="email" name="email" id="email" required />
          <label htmlFor="Senha">Senha</label>
          <input className="input_senha" placeholder="Digite aqui a sua senha" type="password" name="password" id="password" required /> 
          <Button variant="contained" color="success">Logar</Button>
      </div>
    </main>
    </>
  );
};
export default Home;