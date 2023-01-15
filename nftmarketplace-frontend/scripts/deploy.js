// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
async function main() {
  const RichRhinos = await ethers.getContractFactory("NFTMarketplace");
  const gasPrice = await RichRhinos.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);
  const estimatedGas = await RichRhinos.signer.estimateGas(
    RichRhinos.getDeployTransaction()
  );
  console.log(`Estimated gas: ${estimatedGas}`);
  const deploymentPrice = gasPrice.mul(estimatedGas);
  const deployerBalance = await RichRhinos.signer.getBalance();
  console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
  console.log(`Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);
  if (Number(deployerBalance) < Number(deploymentPrice)) {
    throw new Error("You dont have enough balance to deploy.");
  }
  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await RichRhinos.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
  // const NFTMarket = await hre.ethers.getContractFactory("NFTMarketplace");
  // const nftMarket = await NFTMarket.deploy();
  // await nftMarket.deployed();
  // console.log("nftMarket deployed to: " + nftMarket.address);

  // let config = `
  //     export const nftmarketaddress = "${nftMarket.address}"
  // `
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
