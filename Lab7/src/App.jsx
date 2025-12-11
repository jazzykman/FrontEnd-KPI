import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

import "./App.css";

function App() {
  const goods = [
    { img: "/g1.jpg", title: "Телефон", price: 45000 },
    { img: "/g2.jpg", title: "Кроссівки", price: 2200 },
    { img: "/g3.jpg", title: "Навушники", price: 2000 },
    { img: "/g4.jpg", title: "Блокнот", price: 399 },
    { img: "/g5.jpg", title: "Рюкзак", price: 450 },
    { img: "/g6.jpg", title: "Годинник", price: 1500 },
  ];

  return (
    <div>
      <Header />
      <Content />
      <Image />

      <h2>Галерея товарів</h2>
      <div className="goods-container">
        {goods.map((g) => (
          <GoodsCard key={g.title} img={g.img} title={g.title} price={g.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
