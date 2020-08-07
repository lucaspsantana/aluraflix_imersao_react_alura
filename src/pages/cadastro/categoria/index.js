import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);
  const initialValues ={
    name: "Movies",
    description: "The good movie",
    color: "#fff"    
  };
  const [values, setValues] = useState(initialValues);

  function setValue(key, val){
    setValues({
      ...values,
      [key]:val
    })
  
  }
 
    return(
      <PageDefault >
        <div>
        <h1>Cadastro de Categoria: {values.name}</h1>
        <form onSubmit={function setHandleSubmit(info){
          info.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);          
        }}>
          <div>
          <label>
            Nome da Categoria
          
          <input type="text" name="name" value={values.name} onChange={ function setHandle(info){
              setValue("name",info.target.value);
         }}/>
          </label>
          </div>
          <div>
          <label>
            Descrição          
          <textarea type="text" name="description" value={values.description} onChange={ function setHandle(info){
              setValue("description",info.target.value);
            }}/>
          </label>
          </div>
          <div>
          <label>
            Cor
          
          <input type="color" name="color" value={values.color} onChange={ function setHandle(info){
              setValue("color",info.target.value);
            }}/>
          </label>
          </div>
          
          <div>
          <button>Cadastrar</button>
          </div>
        </form>
        <ul>
          {categorias.map((categoria, indice)=>{
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>
        </div>
        <Link to="/">Ir pra Home</Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;