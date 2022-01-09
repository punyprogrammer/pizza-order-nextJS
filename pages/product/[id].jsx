import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [additiveprice, setAdditivePrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [ingredientsList, setIngredientsList] = useState([]);
  const dispatch = useDispatch();

  const addIngredients = (item) => {
    if (ingredientsList.indexOf(item) === -1) {
      const newArr = [...ingredientsList, item];
      setIngredientsList(newArr);
      setAdditivePrice((prev) => prev + Number(item.price));
      console.log(ingredientsList);
    } else {
      const newArr = ingredientsList.filter((x) => x._id !== item._id);
      setIngredientsList(newArr);
      setAdditivePrice((prev) => prev - Number(item.price));
      console.log(ingredientsList);
    }
  };
  // add to cartstore

  const addToCart = () => {
    dispatch(addProduct({ ...pizza, ingredientsList, price:pizza.prices[size] + additiveprice, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt=" " src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>
          ${pizza.prices[size] + additiveprice}
        </span>
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
          {pizza.extraOptions.map((item) => {
            return (
              <div
                className={[
                  styles.ingredient,
                  ingredientsList.indexOf(item) !== -1
                    ? styles.selected
                    : "none",
                ].join(" ")}
                key={item._id}
                onClick={() => addIngredients(item)}
              >
                {item.text}
              </div>
            );
          })}
        </div>
        <div className={styles.addItems}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              console.log(quantity);
            }}
            className={styles.quantity}
            pattern="[0-9]*"
          />
          <button className={styles.addButton} onClick={addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
