"use client";
import InnerLoad from "@/components/InnerLoad/InnerLoad";
import styles from "./Goods.module.css";
import InputSearch from "@/components/SearchInput/InputSearch";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/components/Pagination/Pagination";
import GoodsList from "./GoodsList";

const Goods = ({ goodFields, apiEndpoint, collection }) => {
  const [goods, setGoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalGoods, setTotalGoods] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGoods = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`,
        {
          params: {
            page,
            limit,
            search: searchTerm,
          },
        }
      );

      setGoods(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalGoods(response.data.totalRods);
    } catch (error) {
      console.error("Error fetching rods:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGoods();
  }, [page, limit, searchTerm, apiEndpoint]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const startItemIndex = (page - 1) * limit + 1;
  const endItemIndex = Math.min(page * limit, totalGoods);

  

  return (
    <>
      <div className={styles.goodsContainer}>
        <InputSearch onChange={handleSearchChange} value={searchTerm} />

        {isLoading ? (
          <InnerLoad
            size={50}
            color={"#03464F"}
            text={"Зачекайте відповіді сервера."}
          />
        ) : (
          <div className={styles.goodsListContainer}>
            <p className={styles.goodsQuantity}>
              Товари: {startItemIndex}-{endItemIndex} з {totalGoods} товарів
            </p>
            <GoodsList goods={goods} collectionName={collection} />
            <Pagination
              onClick={handlePageChange}
              page={page}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Goods;
