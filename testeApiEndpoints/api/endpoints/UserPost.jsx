import React, { useState } from 'react'


const UserPost = () => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,email,password
      })
    }).then((response) => {
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json)
      return json;
    })

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='username' value={username} onChange={({target}) => setUsername(target.value)} />
      <input type="password" placeholder='password' value={password} onChange={({target}) => setPassword(target.value)} />
      <input type="email" placeholder='email' value={email} onChange={({target}) => setEmail(target.value)} />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
