function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      className={`color-btn ${isSelected ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {color}
    </button>
  );
}

export default ColorButton;