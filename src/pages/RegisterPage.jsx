import React from 'react';
import Register from '../components/Register/Register';

const RegisterPage = ({userLogin, error}) => {
  
  return (
    <Register userLogin={userLogin} error={error}/>
  )
}

export default RegisterPage
