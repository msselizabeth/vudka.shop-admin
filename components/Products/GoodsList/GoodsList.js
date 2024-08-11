import Link from "next/link";
import styles from "./GoodsList.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { RateContext } from "@/components/context/RateContext";

const GoodsList = ({ goods, goodFields }) => {
  
  const { rate
} = useContext(RateContext);
  
  return (
    <ul className={styles.goodsList}>
      {goods.map(
        ({
          name,
          brand,
          series,
          model,
          _id,
          price,
          item,
          salePriceMain,
          img,
          stock,
          alt,
        }) => (
          <li key={_id} className={styles.goodItem}>
            <Image
              src={img[0]}
              alt={alt}
              width={200}
              height={200}
              className={styles.goodImage}
            />
            <div className={styles.goodInfo}>
              <Link
                href={"/"}
                className={styles.goodLink}
              >{`${name} ${brand} ${series} ${model}`}</Link>
              <p className={styles.stock}>
                {stock > 0 ? `Кількість на складі: ${stock}шт` : "немає в наявності"}
              </p>
              <p>{`Ціна: ${price}$ - ${(price * parseFloat(rate)).toFixed(0)}грн`}</p>
              <p>{`Ціна зі знижкою: ${salePriceMain}$ - ${
                salePriceMain * parseFloat(rate)
              }грн`}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default GoodsList;
