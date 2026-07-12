import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import Card from "./components/Card";
import "./App.css";

function App() {
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Black",
  ];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="container">
      <Card>
        <h1>🎨 Color Palette Picker</h1>

        <div className="buttons">
          {colors.map((color) => (
            <ColorButton
              key={color}
              color={color}
              onClick={() => setSelectedColor(color)}
              isSelected={selectedColor === color}
            />
          ))}
        </div>

        {selectedColor ? (
          <ColorPreview color={selectedColor} />
        ) : (
          <p className="message">No color selected yet.</p>
        )}

        <button
          className="reset-btn"
          onClick={() => setSelectedColor("")}
        >
          Reset
        </button>
      </Card>
    </div>
  );
}

export default App;