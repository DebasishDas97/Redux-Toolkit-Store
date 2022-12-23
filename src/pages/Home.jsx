import Products from "../components/Product";

export default function Home() {
  return (
    <div>
      <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
}
