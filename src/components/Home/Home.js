import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Nice to see you again!</h1>
      <Button onClick={ctx.onLogout}>Exit</Button>
    </Card>
  );
};

export default Home;
