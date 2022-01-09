import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PizzaCard = ({ pizza }) => {
  const maxChars = 60;
  const maxOcc = pizza.desc.length;
  const remaining = maxOcc < maxChars ? Math.abs(maxChars - maxOcc) : 0;
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className={styles.container}>
        <Image src={pizza.img} alt="" width="500" height="500" />
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
          {pizza.desc}
          {/* {pizza.desc.slice(0, Math.min(maxOcc, maxChars)) +
          " ".repeat(remaining) +
          "..."} */}
        </p>
      </div>
    </Link>
  );
};

export default PizzaCard;
