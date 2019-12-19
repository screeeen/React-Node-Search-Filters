import React from 'react'

export default function Chevron() {
  return (
    <div>
    {props.open ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  )
}
