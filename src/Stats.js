export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything!Ready to go ✈️`
          : `You Have already ${numItems} items on your list and You have paked ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
