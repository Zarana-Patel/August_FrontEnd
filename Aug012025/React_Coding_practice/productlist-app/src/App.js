import ProductList from './components/ProductList';
import './App.css';

const productList = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with USB receiver",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 49.99,
    description: "Mechanical keyboard with RGB lighting",
  },
  {
    id: 3,
    name: "Monitor",
    price: 199.99,
    description: "24-inch Full HD monitor",
  }
];
function App() {
  return (
    <div className="App">
        <ProductList products ={productList}/>
    </div>
  );
}

export default App;
