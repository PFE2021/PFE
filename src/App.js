import logo from './logo.svg';
import './App.css';
import Menu from './components/Menus/Menu.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { DashboardPage, ProductListPage, AddProductPage, CategoryPage, CustomersPage, OrdersPage, SalesPage} from './pages'

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/dashboard" exact component={DashboardPage}/>
        <Route path="/productList" exact component={ProductListPage}/>
        <Route path="/addProduct" exact component={AddProductPage}/>
        <Route path="/category" exact component={CategoryPage}/>
        <Route path="/orders" exact component={OrdersPage}/>
        <Route path="/customers" exact component={CustomersPage}/>
        <Route path="/sales" exact component={SalesPage}/>
      </Switch>
    </Router>
  );
}

export default App;
