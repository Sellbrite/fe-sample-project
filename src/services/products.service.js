// fetch products service
export const getProducts = () => {
  return fetch('/product-payload.json')
    .then((res) => res.json())
    .then((res) => res)
}