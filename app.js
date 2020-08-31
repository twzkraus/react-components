var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Milk', 'Eggs']}/>
  </div>
);

var GroceryList = (props) => (
    <ul id="grocery-list">
      <GroceryListItem itemName={props.items[0]} />
      <GroceryListItem itemName={props.items[1]} />
    </ul>
);

var GroceryListItem = (props) => (
  <li>{props.itemName}</li>
);

// var Milk = (props) => (
//   <li>Milk</li>
// );

// var Eggs = (props) => (
//   <li>Eggs</li>
// );

ReactDOM.render(<App />, document.getElementById("app"));