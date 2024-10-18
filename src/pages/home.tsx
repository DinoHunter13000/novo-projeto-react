import { useParams } from "react-router-dom";

const Home = () => {
  let { contatoId } = useParams();
  return (
    <>
      <h1>Página Home</h1>
      <span>O id do contato é: {contatoId}</span>
    </>
  );
};
export default Home;