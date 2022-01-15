import { getContractInstance,   getWeb3 } from './index'

async function getTotalReward() {
  try {
    const contractInstance = getContractInstance()
    console.log('contract instance', contractInstance);

    // let decimals = await contractInstance.methods.decimals().call();
    let res = await contractInstance.methods.totalDividends().call();
    // res = res / Math.pow(10, decimals);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getUserReward() {
  try {
    const contractInstance = getContractInstance();
    // let res = await contractInstance.methods.balanceOf().call();

    // return Promise.resolve(res);
  } catch (error) {
    // return Promise.reject(error);
  }
}

async function getPendingReward() {
  try {
    // const contractInstance = getContractInstance();
    // let res = await contractInstance.methods.claimDividend().call();

    // return Promise.resolve(res);
  } catch (error) {
    // return Promise.reject(error);
  }
}

async function claim(address) {
  try {
    console.log('claim', address);
    let from = address;
    let gasPrice = await getWeb3().eth.getGasPrice();


    const contractInstance = getContractInstance();
    // let param = {
    //   from: from,
    //   to: '0x12896bf73bc456aabcad48d0c5662199def840f8',
    //   gasPrice: gasPrice,
    //   gas: '9000000'
    //   // value: 10000000000000
    // }
    let res = await contractInstance.methods.claimDividend().send({from:address});
    console.log(res);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  getTotalReward,
  getUserReward,
  getPendingReward,
  claim,
};
