import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
  const [name, setValue] = useState("Filmes");
 
    return(
      <PageDefault >
        <h1>Cadastro de Categoria: {name}</h1>
        <form>
          <label>
            Nome da Categoria
          
          <input type="text" name="nome" value={name} onChange={ function setHandle(info){
                  console.log(["[name]", name]);
                  console.log('[info]',info.target.value);
                  setValue(info.target.value);
         }}/>
          </label>
          
          <button>Cadastrar</button>
        </form>
        <Link to="/">Ir pra Home</Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;