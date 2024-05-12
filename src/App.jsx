import ProductCard from './ProductCard';
import ProductList from './ProductList';
import '../src/assets/icon.svg';

const App = () => {
  return (
    <div className="app">
      <nav class="navbar">
      <div class="section-container navbar-container">
      <h1> Product List</h1>
      <img src="../src/assets/icon.svg" alt="icon"></img>
      </div>
      </nav>
      <ProductList />
    </div>
  );
};

export default App;
