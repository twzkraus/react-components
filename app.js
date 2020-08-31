var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Milk', 'Eggs', 'Potatoes', 'Cheese']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onMouseEnter() {
    this.setState({
      done: true
    })
  }

  onMouseLeave() {
    this.setState({
      done: false
    })
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 800 : 400
    };

    return (
    <li style ={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li>
    );

  }

};

ReactDOM.render(<App />, document.getElementById("app"));