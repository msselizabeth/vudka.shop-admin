import Link from "next/link";
import styles from "./GoodsList.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { RateContext } from "@/components/context/RateContext";

const GoodsList = ({ goods, goodFields }) => {
  const { rate } = useContext(RateContext);

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
          sale
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
              <div className={styles.goodInfoName}>
              <Link
                href={"/"}
                className={styles.goodLink}
                >{`${name} ${brand} ${series} ${model}`}</Link>
                 <p className={styles.stock}>
                {stock > 0
                  ? `На складі: ${stock}шт`
                  : "немає в наявності"}
              </p>
              <p className={styles.goodArticle}>{`Артикул: ${item}`}</p>
             
          </div>
              <p>{`Ціна: ${price}$ - ${Math.ceil(
                price * parseFloat(rate)
              )}грн`}</p>
              <p>{`Ціна(розвродаж): ${salePriceMain}$ - ${Math.ceil(
                salePriceMain * parseFloat(rate)
              )}грн`}</p>
              <p>{`Участь у розпродажі: ${sale ? "Так" : "Ні"}`}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default GoodsList;
