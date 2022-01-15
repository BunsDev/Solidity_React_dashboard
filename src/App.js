import React, { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import { getTotalReward, getUserReward, getPendingReward, claim } from "./api/reward";

function App() {
  const [account, setAccount] = useState('');
  const [total, setTotal] = useState(0);
  const [userReward, setUserReward] = useState(0)
  const [pendingReward, setPendingReward] = useState(0)

  const connect = async () => {
    if (account !== '') {
      setAccount('')
    }
    else {
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.requestAccounts();
    
      setAccount(accounts[0]);
    }
  }

  const disconnect = async () => {
    
  }

  useEffect(() => {
    (async () => {
      const _total = await getTotalReward()
      console.log('total', total);
      setTotal(_total)
      if (account !== '') {
        const _userReward = await getUserReward(account)
        console.log('user reward', _userReward);
        setUserReward(_userReward)
      }
      const _pendingReward = await getPendingReward()
      console.log('pending reward', _pendingReward);
      setPendingReward(_pendingReward)
    })()
  }, [account])
  return (
    <div className="main">
      <button className="my-btn connect-btn" onClick={() => connect()}>
        <div className="connect-btn-text">
          {account === '' ? 'Connect to metamask' : account}
        </div>
      </button>
      <div className="header">Dashboard</div>
      <div className="row board">
        <div className="col-lg-6 col-sm-12">
          <div className="item">
            <div className="item-header">Total $USDC Rewards</div>
            <div className="item-body">
              <div className="item-name">$USDC</div>
              <div className="item-value">{ eval(parseInt(total)/1e15).toFixed(3)  }</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="item">
            <div className="item-header">Your Total $USDC Rewards</div>
            <div className="item-body">
              <div className="item-name">$USDC</div>
              <div className="item-value">{ userReward }</div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="item">
            <div className="item-header">Pending $USDC Rewards</div>
            <div className="item-body">
              <div className="item-name">$USDC</div>
              <div className="item-value">{ pendingReward }</div>
              <div className="d-flex justify-content-center">
                <button className="my-btn" onClick={() => claim(account)}>Claim Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
