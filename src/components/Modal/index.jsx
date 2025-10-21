import { useNavigate } from "react-router-dom"

import styles from "./Modal.module.css"

export default function Modal({children}) {
    const navigate = useNavigate()

    function handleClose() {
        navigate("..")
    }

    return (<>
        <div className={styles.backdrop} onClick={handleClose}></div>
        <dialog open className={styles.modal}>{children}</dialog>
    </>)
}