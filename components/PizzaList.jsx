import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> The Best Pizza In Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
        quae consequuntur distinctio accusantium sed magnam animi sequi
        cupiditate porro?
      </p>
<div className={styles.wrapper}>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
</div>
    </div>
  );
};

export default PizzaList;
