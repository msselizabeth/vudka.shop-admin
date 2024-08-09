"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import InnerLoad from '@/components/InnerLoad/InnerLoad';
import InputSearch from '@/components/SearchInput/InputSearch';

import styles from "./RodsList.module.css"

const RodsList = () => {
  const [rods, setRods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalGoods, setTotalGoods] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch rods data from the server
  const fetchRods = async () => {
    setIsLoading(true);
      try {
        
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin-rods`, {
        params: {
          page,
          limit,
          search: searchTerm,
        },
      });

      setRods(response.data.data);
          setTotalPages(response.data.totalPages);
          setTotalGoods(response.data.totalRods)
    } catch (error) {
      console.error('Error fetching rods:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch rods when the component mounts or dependencies change
  useEffect(() => {
    fetchRods();
  }, [page, limit, searchTerm]);

  // Handlers for pagination and search
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
    <div className={styles.goodsContainer}>
        <InputSearch onChange={handleSearchChange} value={searchTerm} />

      {/* Loading Indicator */}
      {isLoading ? (
              <InnerLoad size={50} color={"#03464F"} text={"Зачекайте відповіді сервера."} />
      ) : (
                  <div className={styles.goodsListContainer}>
                      <p>Товари: {startItemIndex}-{endItemIndex} з {totalGoods} товарів</p>
          {/* Rods Display */}
          <ul className={styles.goodsList}>
            {rods.map((rod) => (
              <li key={rod._id}>
                <h2>{rod.name}</h2>
                <p>Brand: {rod.brand}</p>
                <p>Series: {rod.series}</p>
                <p>Model: {rod.model}</p>
                <p>Item: {rod.item}</p>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className={styles.paginationContainer}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RodsList;
