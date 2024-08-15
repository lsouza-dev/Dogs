import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import {UserContext} from "../../UserContext";
import { USER_POST } from '../../Hooks/Api';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const {userLogin} = React.useContext(UserContext)
  const {loading,error,request} = useFetch();


  async function createUser(event){
    event.preventDefault();
    const {url,options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response, json} = await request(url,options);
    console.log(response)
      if(response.ok) userLogin(username.value,password.value)
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input 
          label={'Usuário'} 
          type={'text'}
          name={'username'}
          {...username}
         />
        <Input 
          label={'Email'} 
          type={'email'}
          name={'email'}
          {...email}
         />
        <Input 
          label={'Password'} 
          type={'password'}
          name={'password'}
          {...password}
         />
         {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate
