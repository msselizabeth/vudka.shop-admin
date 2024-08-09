import Link from "next/link";
import styles from "./GoodsList.module.css";
import Image from "next/image";

const GoodsList = ({goods, goodFields}) => {
  return (
    <ul className={styles.goodsList}>
      {goods.map(({name, brand, series, model, _id, priceMain, item, salePriceMain,  img, stock, alt}) => (
          <li key={_id} className={styles.goodItem}>
              <Image src={img[0]} alt={alt} width={200} height={200} className={styles.goodImage} />
              <div className={styles.goodInfo}>
              <Link href={"/"} className={styles.goodLink}>{`${name} ${brand} ${series} ${model}`}</Link>
              <p className={styles.stock}>{stock ? "в наявності" : "немає в наявності"}</p>
                  <p>{`Ціна: ${priceMain}$ - ${priceMain * 40}грн`}</p>
                  <p>{`Ціна зі знижкою: ${salePriceMain}$ - ${salePriceMain * 40}грн`}</p>
            </div>
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
