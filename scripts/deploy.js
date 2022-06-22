const hre = require("hardhat");

const main = async () => {
    const yearbookContractFactory = await hre.ethers.getContractFactory('Yearbook');
    const yearbokContract = await yearbookContractFactory.deploy();
    await yearbokContract.deployed();
    console.log("contract deployed to:", yearbokContract.address);
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();