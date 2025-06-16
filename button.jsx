function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>My First React Webpage</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
