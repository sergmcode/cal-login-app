import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';
import DatePickerTest from './components/DatePickerTest';
import LayoutTest from './components/LayoutTest';
import MenuTest from './components/MenuTest';
import FormTest from './components/FormTest';
import GridTest from './components/GridTest';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from './store/reducers/auth/action-creators';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setUser({ username: localStorage.getItem('username') || '', password: '' }))
      dispatch(AuthActionCreators.setIsAuth(true))
    }
  }, [])
  return (
    <div>
      <MenuTest />
      <AppRouter />
    </div>
  );
}

export default App;
