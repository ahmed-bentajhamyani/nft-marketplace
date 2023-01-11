
const hre = require("hardhat");

async function main() {


  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nFTMarketplace = await NFTMarketplace.deploy();

  await nFTMarketplace.deployed();

  console.log(
    `methamask with  contract  :  ${nFTMarketplace.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
