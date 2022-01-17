import styles from './LoadingData.module.css';

const LoadingData = () => {
    return (
        <div className={styles.spinner}>
              <div className={styles.halfSpinner}></div>
              <span>Loading...</span>
        </div>
    )
}
export default LoadingData;