const { task } = require("hardhat/config");

// first argument is the task name
// the second argument is the task description
task(
  "block-number",
  "Prints the current block number",
  // the async arguments are:
  // 1. the task arguments
  // 2. the Hardhat Runtime Environment (HRE)
  async (_, { ethers }) => {
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Current block number: ", blockNumber);
  }
);

module.exports = {};
