import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);
  const initialValues ={
    name: "",
    description: "",
    color: ""    
  };
  const [values, setValues] = useState(initialValues);

  function setValue(key, val){
    setValues({
      ...values,
      [key]:val
    })
  }
  function setHandleChange(info){
    setValue(info.target.getAttribute("name"),
    info.target.value);
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
          setValues(initialValues)        
        }}>
          <FormField label="Nome da Categoria" name="name" value={values.name} type="text" onChange={setHandleChange} />

          <FormField label="Descrição" type="textarea" name="description" value={values.description} onChange={setHandleChange} />    
      
          <FormField label="Cor" type="color" name="color" value={values.color} onChange={setHandleChange}/>
          
          <Button>
            Cadastrar
          </Button>

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