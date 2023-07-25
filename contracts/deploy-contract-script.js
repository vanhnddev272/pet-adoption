require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Adoption = await ethers.getContractFactory("Adoption");
  const adoption = await Adoption.deploy();
  await adoption.deployed();

  console.log("Adoption Contract deployed to:", adoption.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
