import ProductsNav from "@/components/Products/Navigation/ProductsNav";
import styles from "./productsPage.module.css";

  
export default function ProductsLayout({ children }) {
  
    return (
        <>
            <ProductsNav />
            <div className={styles.prodChildrenContainer}> { children } </div>
    </>
    );
  }