require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // this is required to read the .env file
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat", // this is the default network
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts: given by hardhat
      chainId: 31337, // this is the chain id for localhost, same as hardhat
    },
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    //currency: "USD",
    //coinmarketcap: process.env.COINMARKETCAP_API_KEY, // if you have a coinmarketcap api key
    //token: "MATIC",
  },
};
