//import {computedFrom} from 'aurelia-framework';
import Web3 from 'ethereum/web3.js';

  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  var web3Listening;
  var web3IsConnected;
  var peerCount;
  var coinbaseAddr;
  var coinbaseBalance;
  var accounts;

export class Welcome {
  web3Listening = web3.net.listening;
  web3IsConnected = web3.isConnected()
  peerCount = web3.net.peerCount;
  coinbaseAddr = web3.eth.coinbase;
  coinbaseBalance = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), 'ether');
  accounts = web3.eth.accounts;
}

