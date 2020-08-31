var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
);

var GroceryList = () => (
    <ul id="grocery-list">
      <Milk />
      <Eggs />
    </ul>
);

var Milk = (props) => (
  <li>Milk</li>
);

var Eggs = (props) => (
  <li>Eggs</li>
);

ReactDOM.render(<App />, document.getElementById("app"));