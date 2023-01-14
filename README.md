<p align="center">
	<img src="https://user-images.githubusercontent.com/101653735/202849820-dfeaabcf-4dd9-4452-a847-5a767462fd9d.png" >
</p>

# NFT Marketplace As Single Page Application

In this project we develop a **web based DApp** NFTs Marketplace, the transactions at the level of the Marketplace is done through crypto currencies **Ethereum, bitcoin, etc** and the user.
* Authenticates through an Ethereum wallet.
* Can sell NFTs.
* Proceed with NFTs Minting.

The Marketplace based on hybrid architecture a NoSQL database **MongoDB** to stock general information whereas NFTs transactions are managed by **Smart Contracts**.

**Tools :** Spring Boot, Microservices, Angular, MongoDB, Solidity , Ether.js, Hardhat, MetaMask, Devops : CI/CD, Docker, Github, Jenkins.

## Class Diagram
To effectively convey the dynamic nature of our application, we created a general class diagram. This diagram represents the abstraction of the application's functionality, allowing for a better understanding of the various interactions between classes. To organize NFTs, you can group them into collections and then categorize each collection. This allows you to interact with either individual NFTs or entire collections.

<p align="center">
	<img width="904" alt="Class Diagram II" src="https://user-images.githubusercontent.com/101653735/212497055-84d670d2-5724-47fc-9898-b7fed83578eb.png">
</p>

## Testing the Application

### Home page

In the home page of our application you can just explore NFTs already created, connect your wallet, create collection, create NFT or buy one.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212497965-a31791c4-4792-40f3-a4e4-a61fe8a48f8c.png">
</p>

### Connect wallet

To authenticate in our marketplace you have to use your wallet

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498252-cc3fc98b-740b-4e41-8d67-a8b191875219.png">
</p>

When you authenticate with your wallet for the first time a new unnamed user will be created

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498356-47ed064c-a3c5-44f1-b422-aac82fd4259f.png">
</p>

### Update account

So if you want to give your account a name or change the profile picture you can click the ellipsis button and tap settings.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498542-d91e7566-6875-4b26-85ff-18676d98827c.png">
</p>

And when you finish click **submit changes**.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498576-e07aadb7-bd54-45a9-acd5-e2f2fdf28912.png">
</p>
