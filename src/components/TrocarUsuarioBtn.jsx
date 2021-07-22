import { useContext } from "react";
import UsuarioContext from "../autenticacao/UsuarioContext";

const TrocarUsuarioBtn = () => {
  const contexto = useContext(UsuarioContext);
  return <button onClick={contexto.mudarUsuario} className="btn btn-primary">Mudar usuário</button>
}

export default TrocarUsuarioBtn