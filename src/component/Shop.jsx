import { DUMMY_PRODUCTS } from "../utils/dummy-products";
import Product from "./Product";

export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul>{children}</ul>
    </section>
  );
}
