import { useState } from 'react';
import UsuarioContext from './autenticacao/UsuarioContext';
import CardUsuario from './components/CardUsuario';

function App() {

  const joao = {
    nome: 'João das Neves',
    especialidade: 'Saber de nada',
    avatar: 'https://i.pinimg.com/originals/1b/78/8c/1b788cca4bc37c88904d14dcd2d120af.png'
  }

  const dany = {
    nome: 'Daenerys Targaryen',
    especialidade: 'Fazer churrasco',
    avatar: 'https://i.pinimg.com/originals/4f/0f/9a/4f0f9a2bf1ec4cd7c03d3da4d5ed2427.png'
  }

  const [usuario, setUsuario] = useState(joao)
 
  const contexto = {
    usuario
  }
  contexto.mudarUsuario = () => {
    if (contexto.usuario.nome === 'Daenerys Targaryen') {
      setUsuario(joao)
    } else {      
      setUsuario(dany)
    }
  }

  return (
    <UsuarioContext.Provider value={contexto}>
      <div className="App">
        <CardUsuario />
      </div>
    </UsuarioContext.Provider>
  );
}

export default App;
