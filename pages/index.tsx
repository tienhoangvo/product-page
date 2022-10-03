import Header from "../components/Header"
import ProductDetailsCard from "../components/ProductDetailsCard"
import { useProductDetails } from "../contexts/ProductDetailsContext"

const HomePage = () => {
  const product = useProductDetails()
  return (
    <>
      <Header/>
      <ProductDetailsCard product={product}/>
    </>
  )
}

export default HomePage