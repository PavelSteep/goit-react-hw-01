import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from './Profile';
import userData from "../userData.json";
import FriendList from "./FriendList";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <>
      <div className="component-spacing">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className="component-spacing">
        <h1>Friend List</h1>
        <FriendList friends={friends} />
      </div>
      <div className="component-spacing">
        <h1>Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App;
