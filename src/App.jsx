import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    // prevent page from refreshing
    e.preventDefault();

    // set in state: pass a function to modify existing data
    setItems((currentItems) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  console.log("items", items);

  return (
    <>
      <h1>My Wish List</h1>
      <h2>Add Item to Wish List</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            name="item"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Wish List Items</h2>
      <ul>
        {/* loop through items and return as list elements */}
        {items.map((item) => {
          return (
            // use a unique key to know which item is changing
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                name="purchasedItem1"
                id="purchasedItem1"
              />
              <label htmlFor="purchasedItem1">{item.title}</label>
              <button type="button">Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
