import React from 'react'
import Enviar from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../Hooks/Api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id,setComments}) => {
  const {request,error} = useFetch();
  const [comment,setComment] = React.useState('');
  

  async function handleSubmit(event){
    event.preventDefault();
    const {url,options} = COMMENT_POST(id,{comment});
    const {response,json} = await request(url,options);
    console.log(json)
    if(response.ok){
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} id='comment' name='comment' placeholder='Comente...' value={comment} onChange={({target}) => setComment(target.value)}> </textarea>
      <button className={styles.button}>
        <img src={Enviar}/>
      </button>
      <Error />
    </form>
  )
}

export default PhotoCommentsForm
