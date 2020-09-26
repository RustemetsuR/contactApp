import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddNewContact from './containers/AddNewContact/AddNewContact';
import ContactsList from './containers/ContactsList/ContactsList';
import EditContact from './containers/EditContact/EditContact';
import Layout from './components/UI/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact component={ContactsList} />
          <Route path='/addContact' component={AddNewContact} />
          <Route path='/edit' component={EditContact} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
