import './App.css'
import ProductArticle from "./assets/components/products.jsx";
import imgHandyBag from "./assets/bag_1.png";
import imgStylishBag from "./assets/bag_2.png";
import imgSimpleBag from "./assets/bag_3.png";
import imgTrendyBag from "./assets/bag_4.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <main>
          <ProductArticle img={imgHandyBag} labelText={"Best Seller"} alternativeText={"img"} text={"The handy bag"} price={"€400,-"}/>
          <ProductArticle img={imgStylishBag} labelText={"Best Seller"} alternativeText={"img"} text={"The stylish bag"} price={"€250,-"}/>
          <ProductArticle img={imgSimpleBag} labelText={"Best Seller"} alternativeText={"img"} text={"The simple bag"} price={"€300,-"}/>
          <ProductArticle img={imgTrendyBag} labelText={"Best Seller"} alternativeText={"img"} text={"The trendy bag"} price={"€150,-"}/>
        </main>
  </>
  )
}

export default App
