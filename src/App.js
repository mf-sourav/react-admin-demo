import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './modules/users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './modules/Dashboard';
import authProvider from './modules/authProvider';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} icon={UserIcon}/>
  </Admin>
);

export default App;