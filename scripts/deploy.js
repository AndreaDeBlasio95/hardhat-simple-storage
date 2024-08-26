// imports
const { ethers, run, network } = require("hardhat");

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorageFactory.deploy();

  // Instead of accessing deployTransaction.wait(), wait for the contract to be deployed
  //await simpleStorage.waitForDeployment();
  //var contractAddress = await simpleStorage.getAddress();
  //console.log(`SimpleStorage deployed to: ${contractAddress}`);

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");

    // Not functionable in version 6^ ethers ----->

    await simpleStorage.deploymentTransaction().wait(1);

    // verify the contract on Etherscan
    //await verify(simpleStorage.target, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Value is: ${currentValue}`);

  // Update the current value
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);
}

/*
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      // run allows you to run a task from the command line
      // verify:verify is a task that comes with hardhat-verify
      // 1. the first argument is the name of the task
      // 2. the second argument is an object with the task's parameters
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};
*/

// main
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
