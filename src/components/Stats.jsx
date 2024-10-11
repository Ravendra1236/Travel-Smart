import "../index.css";
export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got Everything ! Ready to Go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed 
          ${numPackedItems} (${percent}%)`}
      </em>
    </footer>
  );
}
