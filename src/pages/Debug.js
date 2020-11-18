import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navigation, CenterContent, BigTitle } from '../components'

import { login } from '../redux-toolkit/slices/authSlice'

const Debug = () => {
  const accessToken = useSelector((state) => state.auth.accessToken)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(login('tester@zidence.com', 'zidence-creator'))
  }, [dispatch])
  return (
    <>
      <Navigation />
      <CenterContent flexDirection='column'>
        <BigTitle>Debug Mode</BigTitle>
        <p>{accessToken}</p>
      </CenterContent>
    </>
  )
}

export default Debug
