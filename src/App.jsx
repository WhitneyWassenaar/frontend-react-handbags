import './App.css'
import ProductArticle from "./assets/components/products.jsx";
import imgBag from "./assets/bag_1.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <main>
            <ProductArticle img={imgBag} labelText={"Best Seller"} alternativeText={"img"} text={"The handy bag"} price={"€400,-"}/>
        </main>
  </>
  )
}

export default App
