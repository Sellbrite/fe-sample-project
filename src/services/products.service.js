export const getProducts = () => {
  return fetch('/product-payload.json')
    .then((res) => res.json())
    .then(({ products }) => {
      return products.map((product, index) => {
        const { name, inventory } = product;
        const price = product.price / 100;
        const filename = `/assets/images/${product.filename}`;
        const altname = `${product.name} for ${price}`;
        const id = index;

        return {
          id,
          filename,
          name,
          price,
          altname,
          inventory
        };

      });
    });
}
