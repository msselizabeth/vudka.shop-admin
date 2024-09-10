import Link from "next/link";
import styles from "./GoodsList.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { RateContext } from "@/components/context/RateContext";
import { calcPrice } from "@/middlewares/calcPrice";
import YesComponent from "@/components/Highlights/YesComponent";
import NoComponent from "@/components/Highlights/NoComponent";
import EditButton from "@/components/Buttons/EditButton";
import DeleteButton from "@/components/Buttons/DeleteButton";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";
import axios from "axios";
import { toast } from "react-toastify";

const GoodsList = ({ goods, collectionName }) => {
  const { rate } = useContext(RateContext);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [updatedGoods, setUpdatedGoods] = useState([...goods]);

  const handleDeleteClick = (item) => {
    setCurrentItem(item);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${collectionName}/${currentItem._id}`
      );

      if (response.status === 200) {
        toast.success(
          `Товар -> ${currentItem.name} ${currentItem.brand} ${currentItem.series} ${currentItem.model} <- успішно видалено з бази даних.`
        );

        // Обновляем список товаров, убирая удаленный элемент
        setUpdatedGoods((prevGoods) =>
          prevGoods.filter((item) => item._id !== currentItem._id)
        );
      } else {
        toast.error("Виникла помилка при видаленні товара. Повторіть спробу.");
      }
    } catch (error) {
      toast.error("Виникла помилка при видаленні товара. Повторіть спробу.");
      console.error("Помилка:", error);
    } finally {
      setIsConfirmModalOpen(false);
      setCurrentItem(null);
    }
  };

  const handleCancelDelete = () => {
    setIsConfirmModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <ul className={styles.goodsList}>
      {updatedGoods.map(
        ({
          name,
          brand,
          series,
          model,
          length,
          _id,
          price,
          item,
          salePriceMain,
          img,
          imgMain,
          stock,
          alt,
          promotion,
          discount,
          sale,
        }) => (
          <li key={_id} className={styles.goodItem}>
            <Image
              src={img && img[0] || imgMain}
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
                >{`${name} ${brand} ${series} ${model || length}`}</Link>
                <div className={styles.buttonsContainer}>
                  <EditButton onClick={"onEdit"} />
                  <DeleteButton
                    onClick={() =>
                      handleDeleteClick({
                        _id,
                        name,
                        brand,
                        series,
                        model,
                      })
                    }
                  />
                  {isConfirmModalOpen && (
                    <ConfirmationModal
                      element={`${currentItem.name} ${currentItem.brand} ${currentItem.series} ${currentItem.model}`}
                      onConfirm={handleConfirmDelete}
                      onCancel={handleCancelDelete}
                    />
                  )}
                </div>
              </div>
              <table className={styles.priceTable}>
                <tr>
                  <th>Параметр</th>
                  <th>Значення</th>
                </tr>
                <tr>
                  <td>Артикул</td>
                  <td>{item}</td>
                </tr>
                <tr>
                  <td>На складі</td>
                  <td>{stock > 0 ? `${stock} шт` : "немає в наявності"}</td>
                </tr>
                <tr>
                  <td>Ціна(звичайна)</td>
                  <td>{`${price}$ - ${calcPrice(
                    false,
                    price,
                    discount,
                    rate
                  )} грн`}</td>
                </tr>
                <tr>
                  <td>Знижку активовано</td>
                  <td>{promotion ? <YesComponent /> : <NoComponent />}</td>
                </tr>
                <tr>
                  <td>Група знижки</td>
                  <td>{`${discount} %`}</td>
                </tr>
                
                  <tr>
                    <td>Ціна (акційна)</td>
                    <td>{`${price}$ - ${calcPrice(
                      promotion,
                      price,
                      discount,
                      rate
                    )} грн`}</td>
                  </tr>
                
                <tr>
                  <td>Участь у розпродажі</td>
                  <td>{sale ? <YesComponent /> : <NoComponent />}</td>
                </tr>
                
                  <tr>
                    <td>Ціна (розпродаж)</td>
                    <td>{`${salePriceMain}$ - ${calcPrice(
                      promotion,
                      salePriceMain,
                      discount,
                      rate
                    )} грн`}</td>
                  </tr>
                
              </table>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default GoodsList;
