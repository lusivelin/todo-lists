import { FC } from "react";
import styles from "@/styles/component/Navigation.module.css";

const Navigation: FC<NavigationProps> = () => {
  return (
    <header className={styles.container}>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
