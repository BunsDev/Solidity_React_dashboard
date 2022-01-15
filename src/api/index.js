import { contactAddress, http } from '../config/site.config'
import ABI from '../data/sub.token.json'
import Web3 from 'web3';

const getContractInstance = () => {
  const web3 = new Web3(new Web3.providers.HttpProvider(http));
  let res = new web3.eth.Contract(ABI, contactAddress);
  return res
}

const getWeb3 = () => {
  const web3 = new Web3(new Web3.providers.HttpProvider(http));
  return web3
}

export {
  getContractInstance,
  getWeb3
};
