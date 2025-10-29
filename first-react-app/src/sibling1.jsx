export default function Sibling1({ setCount, count }) {
  return (
    <div>
      <h1>Sibling1 {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Update count</button>
    </div>
  );
}
