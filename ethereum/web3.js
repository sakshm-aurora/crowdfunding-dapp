import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  //web3 = new Web3(window.web3.currentProvider);
  web3=new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c92c090449954a098692f5081a352d17'
  );
  web3 = new Web3(provider);
}

export default web3;
