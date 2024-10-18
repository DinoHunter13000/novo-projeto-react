import { useParams } from "react-router-dom";

const EditarContato = () => {
  let { contatoId } = useParams();
  return (
    <>
      <h1>Página de Editar Contato</h1>
      <span>O id do contato é: {contatoId}</span>
    </>
  );
};
export default EditarContato;