import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.desciption}>
        Keep updated on wev dev news! fast and smooth.
      </p>
    </div>
  );
};

export default Header;
