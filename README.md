# SimpleStorage Hardhat Project

This repository contains a Hardhat project that demonstrates a simple Ethereum smart contract development and testing workflow. The project includes a `SimpleStorage` contract, deployment scripts, and automated testing using Hardhat and related tools.

## Table of Contents

- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
  - [Compiling Contracts](#compiling-contracts)
  - [Deploying Contracts](#deploying-contracts)
  - [Interacting with Contracts](#interacting-with-contracts)
  - [Testing](#testing)
  - [Additional Tools](#additional-tools)
- [Configuration](#configuration)
- [License](#license)

## Project Setup

This project was bootstrapped with Hardhat, a development environment for Ethereum software. It includes scripts and tasks for deploying, interacting with, and testing smart contracts.

## Project Structure

```
SimpleStorage/
├── contracts/
│   └── SimpleStorage.sol    # Solidity smart contract
├── scripts/
│   └── deploy.js            # Deployment script
├── tasks/
│   └── block-number.js      # Custom Hardhat task to get the current block number
├── test/
│   └── test-deploy.js       # Test script for the SimpleStorage contract
├── .env                     # Environment variables for private keys and API URLs
├── .gitignore               # Git ignore file
├── hardhat.config.js        # Hardhat configuration file
└── README.md                # This file
```

## Installation

To get started with this project, you'll need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed. Then, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AndreaDeBlasio95/SimpleStorage.git
   cd SimpleStorage
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Set up your environment variables:**

   Create a `.env` file in the root of your project with the following contents:

   ```bash
   SEPOLIA_RPC_URL=your-sepolia-rpc-url
   PRIVATE_KEY=your-private-key
   ETHERSCAN_API_KEY=your-etherscan-api-key
   COINMARKETCAP_API_KEY=your-coinmarketcap-api-key (optional)
   ```

## Usage

### Compiling Contracts

To compile the Solidity contracts, run:

```bash
yarn hardhat compile
```

### Deploying Contracts

To deploy the `SimpleStorage` contract locally, use:

```bash
yarn hardhat run scripts/deploy.js --network localhost
```

To deploy to the Sepolia test network:

```bash
yarn hardhat run scripts/deploy.js --network sepolia
```

### Interacting with Contracts

You can interact with the deployed contract using Hardhat's console:

```bash
yarn hardhat console --network localhost
```

To check the current block number:

```bash
yarn hardhat block-number
```

Or for the Sepolia network:

```bash
yarn hardhat block-number --network sepolia
```

### Testing

Run the tests with:

```bash
yarn hardhat test
```

You can run a specific test case using:

```bash
yarn hardhat test --grep "Should ..."
```

### Additional Tools

- **Hardhat Gas Reporter:** Automatically reports gas usage during tests.
  
  Install and enable it with:

  ```bash
  yarn add --dev hardhat-gas-reporter
  ```

- **Solidity Coverage:** Generate code coverage reports for your Solidity tests.
  
  Install and enable it with:

  ```bash
  yarn add --dev solidity-coverage
  yarn hardhat coverage
  ```

## Configuration

The Hardhat configuration file `hardhat.config.js` is already set up for both local and Sepolia test networks. Make sure to update your `.env` file with the appropriate RPC URLs and API keys.

### Example `hardhat.config.js`

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
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
  },
};
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to this project by submitting issues or pull requests. For any questions or issues, contact the repository owner.
