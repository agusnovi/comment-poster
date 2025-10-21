import styles from './Post.module.css'

function Post({author, body}) {
  return (
      <li className={styles.box}>
        <div className='label'>{author}</div>
        <div className='label'>{body}</div>
      </li>
    )
}

export default Post
