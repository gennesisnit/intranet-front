import styles from './styles.module.scss'


export default function Events(){
    return(
        <div className={styles.containerEvent}>
        <div className={styles.cardEvent}>
       
        <div  className={styles.calendar}>
        <span>
           3
         </span>
         <span>
           MAR
         </span>
        </div>
        </div>
       
       <div>
       <p className={styles.titulo}>Treinanemento</p>
        <p className={styles.time}>08:00 PM - 09:00 PM</p>
       </div>

        

        </div>
    )
}