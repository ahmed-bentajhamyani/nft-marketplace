require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    local: {
      url: "http://localhost:8545",
      gasLimit: 2000000
    },
    goerli: {
      url: "https://goerli.infura.io/v3/8250f0f7367f45bcbc71a78b6fe87f19",
      accounts: ["de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"]
    }
  }
};