import { useState } from "react";

function Image() {
  const [visible, setVisible] = useState(true);
  const [size, setSize] = useState(400);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Додати</button>
      <button onClick={() => setSize(size + 50)}>Збільшити</button>
      <button onClick={() => size > 50 && setSize(size - 50)}>Зменшити</button>
      <button onClick={() => setVisible(false)}>Видалити</button>

      {visible && (
        <img
          src="/paris.jpg"
          width={size}
          style={{ display: "block", marginTop: 20 }}
        />
      )}
    </div>
  );
}

export default Image;
