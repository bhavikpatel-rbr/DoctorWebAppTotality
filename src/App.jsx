import React, { useEffect } from 'react'
import AppNavigation from './navigation/AppNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import './assest/css/index.scss'
import { useSelector } from 'react-redux';
import { authSelector } from './reduxtool/auth/authSlice';
import Loader from './component/AppLoader';
import ScrollToTop from './utils/scrollToTop';
import { useDispatch } from 'react-redux';
import { allPatientsUsersAction, getAllUserAction } from './reduxtool/app/middleware';
import { appSelector } from './reduxtool/app/appslice';

function App() {
  const { token } = useSelector(authSelector)
  const users = useSelector(appSelector)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (token) {
  //     dispatch(getAllUserAction())
  //     dispatch(allPatientsUsersAction())
  //   }
  // }, [token])

  return (
    <>
      <Loader />
      <ScrollToTop />
      {token ? <AppNavigation /> : <AuthNavigation />}
    </>
  );
}

export default App;
