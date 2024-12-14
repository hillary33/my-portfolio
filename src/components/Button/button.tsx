import styles from './Button.module.css';

type TitleButton = {
    title: string;
};

export default function Button({title}: TitleButton) {
    return (
        <>
        <button className={styles.button}> {title} </button>
        </>
    )
}