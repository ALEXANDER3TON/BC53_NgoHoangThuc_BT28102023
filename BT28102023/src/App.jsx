import { useState } from "react";
import { BTShoeShop } from "./BTShoeShop/BTShoeShop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BTShoeShop />
    </div>
  );
}

export default App;
