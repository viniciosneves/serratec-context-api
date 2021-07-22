import { useContext } from 'react';
import UsuarioContext from '../autenticacao/UsuarioContext';
import './estilos.css'
import TrocarUsuarioBtn from './TrocarUsuarioBtn';

const CardUsuario = () => {

  const contexto = useContext(UsuarioContext);

  return (
    <div className="card">
      <img src={contexto.usuario.avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{contexto.usuario.nome}</h5>
        <p className="card-text">
          Especialidade: {contexto.usuario.especialidade}
        </p>
        <TrocarUsuarioBtn />
      </div>
    </div>
  )
}

export default CardUsuario