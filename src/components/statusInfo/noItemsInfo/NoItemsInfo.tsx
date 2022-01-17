import styles from './NoItemsInfo.module.css';

const NoItemsInfo = () => {
    return (
        <div className={styles.info}>
              <p>Ups... no items as required.</p>
              <p>Press "enter" to create new item.</p>
        </div>
    )
}
export default NoItemsInfo;