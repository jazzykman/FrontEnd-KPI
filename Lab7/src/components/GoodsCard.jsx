function GoodsCard({ img, title, price }) {
  return (
    <div
      style={{
        width: 200,
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
      }}
    >
      <img src={img} width="180" />
      <h4>{title}</h4>
      <p>{price} грн</p>
    </div>
  );
}

export default GoodsCard;
