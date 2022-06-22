const hre = require("hardhat");

const main = async () => {
    const yearbookContractFactory = await hre.ethers.getContractFactory("Yearbook");
    const yearbookContract = await yearbookContractFactory.deploy();
    await yearbookContract.deployed();
    console.log("contract deployed to:", yearbookContract.address);

    let memCID = "bafybeihe2gh5zypdiacmz5zl7z3wuhohlepjwysjkbzar5wgaopr4nwqyi"
    let eventTimeStamp = 1952517724
    let friends = ["0x8A9cF9dABAC03273Ae81c7BB1029edabfB97550a", "0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106"]

    let txn = await yearbookContract.createNewMemory(memCID, eventTimeStamp, friends);
    let wait = await txn.wait();
    console.log("NEW ENTRY CREATED, console log from the run script", wait.events[0].event, wait.events[0].args)

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
  //in order to run this:
  //npx hardhat node in a terminal
  //open a new terminal window and run npx hardhat run --network localhost scripts/YOUR_SCRIPT_FILE.js