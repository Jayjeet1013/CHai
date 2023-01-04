
const hre = require("hardhat");

async function main() {


  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy();

  await contract.deployed();

  console.log(
    `Contract address is ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
