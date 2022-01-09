import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/tele.png"
            width="32"
            height="32"
            alt="call_icon"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>(476685756</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            className={styles.logo}
            src="/images/logo_pizza.png"
            alt=""
            width="160px"
            height="69px"
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passRef>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="/images/cart.png"
              width="30px"
              height="30px"
              borderradius="50%"
            />
          </div>
          <div className={styles.counter}>{quantity} </div>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
