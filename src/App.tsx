import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';

function App() {
  const { isAuthenticated, logout, isLoading, user } = useAuth0()
  
  if (isLoading) return <p>Loading</p>

  if (isAuthenticated) {
    return (
      <div>
        <div>Logged in as: {user.email}</div>
        <div><button onClick={() => logout()}>Log out</button></div>
      </div>
      )
  }

  return (
    <div className="App">
      <LoginButton />
    </div>
  );
}


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};


export default App;
