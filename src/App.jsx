import './App.css'
import Button from "./assets/components/Button.jsx";
import ProductArticle from "./assets/components/products.jsx";
import imgHandyBag from "./assets/bag_1.png";
import imgStylishBag from "./assets/bag_2.png";
import imgSimpleBag from "./assets/bag_3.png";
import imgTrendyBag from "./assets/bag_4.png";
import Tile from "./assets/components/Tile.jsx";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {
    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
            </header>

            <nav>
                <Button
                    text="to the collection"
                    disabled={false}
                />

                <Button
                    text="shop all bags"
                    disabled={false}
                />

                <Button
                    text="pre-orders"
                    disabled={true}
                />
            </nav>

            <main>
                <ProductArticle
                    img={imgHandyBag}
                    labelText={"Best Seller"}
                    alternativeText={"img"}
                    text={"The handy bag"}
                    price={"€400,-"}
                />

                <ProductArticle
                    img={imgStylishBag}
                    labelText={"Best Seller"}
                    alternativeText={"img"}
                    text={"The stylish bag"}
                    price={"€250,-"}
                />

                <ProductArticle
                    img={imgSimpleBag}
                    labelText={"Best Seller"}
                    alternativeText={"img"}
                    text={"The simple bag"}
                    price={"€300,-"}
                />

                <ProductArticle
                    img={imgTrendyBag}
                    labelText={"Best Seller"}
                    alternativeText={"img"}
                    text={"The trendy bag"}
                    price={"€150,-"}
                />
            </main>

            <footer>
                <Tile
                   title={"The brand"}
                   text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                />

                <Tile
                    imgUrl={brand}
                    alternativeText={"Image of the product brand"}
                />

                <Tile
                    imgUrl={ourStory}
                    alternativeText={"Image of the product brand"}
                />
                <Tile
                    title={"Our story"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                />
            </footer>
        </>
    );
}

export default App;

