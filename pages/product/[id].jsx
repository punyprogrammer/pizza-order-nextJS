import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
const Product = () => {
  const [size, setSize] = useState(0);
  const [ingredientsList, setIngredientsList] = useState([]);
  const addIngredients = (item) => {
    if (ingredientsList.indexOf(item) === -1) {
      const newArr = [...ingredientsList, item];
      setIngredientsList(newArr);
    } else {
      const newArr = ingredientsList.filter((x) => x !== item);
      setIngredientsList(newArr);
    }
  };
  const ingredients = [
    "Double Ingredients",
    "Extra Cheese",
    "Spicy Sauce",
    "Garlic Sauce",
  ];
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "One of the best seasoned pizzas of the ",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt=" " src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size}>
            <Image
              src="/images/size.png"
              layout="fill"
              alt=""
              onClick={() => setSize(0)}
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size}>
            <Image
              src="/images/size.png"
              layout="fill"
              alt=""
              onClick={() => setSize(1)}
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size}>
            <Image
              src="/images/size.png"
              layout="fill"
              alt=""
              onClick={() => setSize(2)}
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <div className={styles.ingredients}>
          {ingredients.map((item, idx) => {
            return (
              <div
                className={[
                  styles.ingredient,
                  ingredientsList.indexOf(item) !== -1
                    ? styles.selected
                    : "none",
                ].join(" ")}
                key={idx + 101}
                onClick={() => addIngredients(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.addItems}>
          <input
            type="number"
            className={styles.quantity}
            defaultValue={1}
            pattern="[0-9]*"
          />
          <button className={styles.addButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
