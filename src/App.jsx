import React, { useEffect } from 'react'
import AppNavigation from './navigation/AppNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import './assest/css/index.scss'
import { useSelector } from 'react-redux';
import { authSelector } from './reduxtool/auth/authSlice';
import Loader from './component/AppLoader';
import ScrollToTop from './utils/scrollToTop';
import { useDispatch } from 'react-redux';
import { hideLoader, lemSelector } from './reduxtool/lem/lemSlice';

function App() {
  const dispatch = useDispatch()
  const { token } = useSelector(authSelector)
  const { loading } = useSelector(lemSelector)

  useEffect(() => {
    if (loading) {
      dispatch(hideLoader());
    }
  }, [])

  return (
    <>
      <Loader />
      <ScrollToTop />
      {token ? <AppNavigation /> : <AuthNavigation />}
    </>
  );
}

export default App;
