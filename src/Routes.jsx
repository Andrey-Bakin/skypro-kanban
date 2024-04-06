import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Main } from './components/Main/Main.styled'
import { cardList } from './data'
import MainPage from './pages/MainPage'
import ExitPage from './pages/ExitPage'
import RegisterPage from './pages/RegisterPage'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivetRoutes />}>
            <Route path={routObject.MAIN} element={<MainPage cardList={cardList} isLoaded={isLoaded}/>}/>

        </Route>
        <Route path={routObject.EXIT} element={<ExitPage />}/>
        <Route path={routObject.LOGIN} element={<LoginPage />}/>
        <Route path={routObject.REGISTER} element={<RegisterPage cardList={cardList} isLoaded={isLoaded}/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes
