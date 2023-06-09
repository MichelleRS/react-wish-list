import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(() => {
    // get items from local storage
    const localValue = localStorage.getItem("ITEMS");
    // if there are no items in local storage, return an empty array
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // store items in local storage any time there is a change to items
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

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
    // clear previous input value
    setNewItem("");
  }

  // determine if checkbox is checked or not
  function toggleItem(id, completed) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  // delete item from wish list
  function deleteItem(id) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

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
        {/* render message to user if there are no items in wish list  */}
        {items.length === 0 &&
          "Your wish list is empty. Use the form to add items to your list."}

        {/* loop through items and return as list elements */}
        {items.map((item) => {
          return (
            // use a unique key to know which item is changing
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleItem(item.id, e.target.checked)}
                name={item.id}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.title}</label>
              <button type="button" onClick={() => deleteItem(item.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
