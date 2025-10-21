import { Link } from 'react-router-dom'

import styles from './Post.module.css'

function Post({author, body, idPost}) {
  return (
      <li className={styles.box}>
        <Link to={idPost}>
          <div className='label'>{author}</div>
          <div className='label'>{body}</div>
        </Link>
      </li>
    )
}

export default Post
