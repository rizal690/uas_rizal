import React, { useReducer, createContext } from 'react';

import LoginComp from './Component/Fungsional/LoginComp';

// import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';

// import DetailComp from './Component/Fungsional/DetailComp';
// import logo from './logo.svg';

import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';

import RegisterComp from './Component/Fungsional/RegisterComp';
import ListBarangComp from './Component/Class/ListBarangComp';
import TambahBarangComp from './Component/Class/TambahBarangComp';
import EditBarangComp from './Component/Class/EditBarangComp';


// context
export const AuthContext = createContext()

// inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <NavbarComp />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }

          <Route exact path="/" component={LoginComp} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/supplier" component={ListComp} />
          <Route exact path="/barang" component={ListBarangComp} />
          <Route exact path="/supplier/tambahsupplier" component={TambahComp} />
          <Route exact path="/barang/tambahbarang" component={TambahBarangComp} />
          <Route exact path="/supplier/edit" component={EditComp} />
          <Route exact path="/barang/editbarang" component={EditBarangComp} />
          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
