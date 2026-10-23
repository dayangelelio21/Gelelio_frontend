function Products({ products = ['Product One', 'Product Two', 'Product Three'] }) {
  return (
    <section className="demo-panel">
      <h2>Products</h2>
      <ul>
        {products.map((product) => <li key={product}>{product}</li>)}
      </ul>
    </section>
  );
}

export default Products;
