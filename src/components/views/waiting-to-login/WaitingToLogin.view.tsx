import React from 'react'
import { app } from '../../app'
const {userService: {showFacebookSignIn}} = app

export const WaitingToLogin_View = () => {
  return (
    <waiting-to-login-view>
      <facebook-login>
        Waiting for sign in with Facebook...
        <button className='Facebook-Login' onClick={showFacebookSignIn}>
          Login with Facebook
        </button>
      </facebook-login>
    </waiting-to-login-view>
  )
}


