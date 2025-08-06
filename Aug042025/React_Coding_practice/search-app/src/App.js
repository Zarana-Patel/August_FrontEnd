import './App.css';
import SearchFilter from './components/SearchFilter';

const productList = [
  { id: 1, name: "Red T-Shirt", description: "Comfortable cotton t-shirt in red." },
  { id: 2, name: "Blue Jeans", description: "Classic denim jeans, slim fit." },
  { id: 3, name: "Green Hoodie", description: "Warm and stylish hoodie with a large pocket." },
  { id: 4, name: "Sneakers", description: "Athletic shoes for running and everyday wear." }
];

function App() {
  return (
    <div className="App">
      <SearchFilter products={productList}/>
    </div>
  );
}

export default App;
