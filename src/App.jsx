export default function App() {
  return (
    <>
      <h1>My Wish List</h1>
      <h2>Add Item to Wish List</h2>
      <form>
        <div className="form-control">
          <label htmlFor="item">New Item</label>
          <input type="text" name="item" id="item" />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Wish List Items</h2>
      <ul>
        <li>
          <input type="checkbox" name="purchasedItem1" id="purchasedItem1" />
          <label htmlFor="purchasedItem1">Item 1</label>
          <button type="button">Remove</button>
        </li>
        <li>
          <input type="checkbox" name="purchasedItem2" id="purchasedItem2" />
          <label htmlFor="purchasedItem2">Item 2</label>
          <button type="button">Remove</button>
        </li>
      </ul>
    </>
  );
}
