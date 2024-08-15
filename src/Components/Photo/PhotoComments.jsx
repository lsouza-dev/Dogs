import React from 'react'
import styles from './PhotoComments.module.css'
import {UserContext} from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import { Link } from 'react-router-dom'



const PhotoComments = (props) => {
  const [comments,setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)
  const commentSection = React.useRef();
  
  React.useEffect(() =>{
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  },[comments])

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => 
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} : </b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}
export default PhotoComments
