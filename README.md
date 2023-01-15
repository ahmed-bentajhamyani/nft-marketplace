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
	<img width="902" alt="Class Diagram II" src="https://user-images.githubusercontent.com/101653735/212502917-a0462fbb-849e-4e12-91ec-00fc6b6f8981.png">
</p>

## Configuration

### Maven Project

To provide all the dependencies, spring uses the ```pom.xml``` file, which allows a better management of these independences and helps to simplify the process of configuring and setting up a Spring-based application.

So this is the ```pom.xml``` file of the microservice-parent:

```
<modelVersion>4.0.0</modelVersion>

<parent>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-parent</artifactId>
	<version>3.0.1</version>
	<relativePath/>
</parent>

<groupId>ma.fstt</groupId>
<artifactId>microservices-parent</artifactId>
<packaging>pom</packaging>
<version>1.0-SNAPSHOT</version>
<modules>
	<module>category-service</module>
	<module>collection-service</module>
	<module>transaction-service</module>
	<module>user-service</module>
	<module>image-service</module>
	<module>service-registry</module>
	<module>cloud-gateway</module>
	<module>cart-service</module>
	<module>nft-service</module>
</modules>

<properties>
	<maven.compiler.source>17</maven.compiler.source>
	<maven.compiler.target>17</maven.compiler.target>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	<spring-cloud.version>2022.0.0</spring-cloud.version>
</properties>

<dependencyManagement>
	<dependencies>
	    <dependency>
		<groupId>org.springframework.cloud</groupId>
		<artifactId>spring-cloud-dependencies</artifactId>
		<version>${spring-cloud.version}</version>
		<type>pom</type>
		<scope>import</scope>
	    </dependency>
	</dependencies>
</dependencyManagement>
```

### Services

So our services uses several dependencies to function properly. The first dependency, **spring-boot-starter-data-mongodb**, allows for the integration of MongoDB as the application's database.

The second dependency, **spring-boot-starter-web**, enables the application to handle HTTP requests and responses.

The third dependency, **spring-cloud-starter-netflix-eureka-server**, is used to manage service registration and discovery manager.

The fourth dependency, **lombok**, is a library that is used to minimize or remove the boilerplate code. It saves time and effort. Just by using the annotations, we can save space and readability of the source code.

The last dependency, **spring-boot-starter-test**, is used for testing the application.

Our application is based on a microservices architecture which  is an architectural style in which a large application is built as a collection of small and independent services that communicate with each other through lightweight APIs. This approach can be beneficial in many ways, such as:

**Scalability** : Microservices can be scaled independently, which allows for more efficient use of resources.

**Flexibility** : Because services are independent, it's easier to make changes or updates to a specific part of the application without affecting the whole system.

**Resilience** : When a service fails, it doesn't bring the whole application down. Instead, the other services can continue to function.

**Ease of deployment**: Microservices can be deployed and updated independently, which can make the deployment process faster and less risky.

```
<parent>
	<artifactId>microservices-parent</artifactId>
	<groupId>ma.fstt</groupId>
	<version>1.0-SNAPSHOT</version>
</parent>
<modelVersion>4.0.0</modelVersion>

<artifactId>name-service</artifactId>

<properties>
	<maven.compiler.source>17</maven.compiler.source>
	<maven.compiler.target>17</maven.compiler.target>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>

<dependencies>
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter-data-mongodb</artifactId>
	</dependency>
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter-web</artifactId>
	</dependency>
	<dependency>
	    <groupId>org.springframework.cloud</groupId>
	    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
	</dependency>

	<dependency>
	    <groupId>org.projectlombok</groupId>
	    <artifactId>lombok</artifactId>
	    <optional>true</optional>
	</dependency>
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter-test</artifactId>
	    <scope>test</scope>
	</dependency>
</dependencies>
```

### Service Registry

We did implement a service registry, which is a database of services, their instances and their locations. Service instances are registered with the service registry on startup and deregistered on shutdown. So the ```pom.xml``` of our serivce-registry contains the following dependencies: 


```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

### Cloud Gateway

A cloud gateway is designed to act as a single-entry point for defined back-end APIs and microservices (which can be both internal and external). This is the  ```pom.xml``` file of our cloud-gateway:


```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

And this is the ```application.yml``` file to specify our services and their paths:

```
server:
  port: 9191

spring:
  application:
    name: CLOUD-GATEWAY
  cloud:
    gateway:
      default-filters:
        - DedupeResponseHeader=Access-Control-Allow-Credentials Access-Control-Allow-Origin
      globalcors:
        corsConfigurations:
          '[/**]':
            allowedOrigins: "*"
            allowedMethods: "*"
            allowedHeaders: "*"
      routes:
        - id: TRANSATION-SERVICE
          uri: lb://TRANSATION-SERVICE
          predicates:
            - Path=/api/transactions/**
        - id: CART-SERVICE
          uri: lb://CART-SERVICE
          predicates:
            - Path=/api/cart/**
        - id: NFT-SERVICE
          uri: lb://NFT-SERVICE
          predicates:
            - Path=/api/nfts/**
        - id: USER-SERVICE
          uri: lb://USER-SERVICE
          predicates:
            - Path=/api/users/**
        - id: CATEGORY-SERVICE
          uri: lb://CATEGORY-SERVICE
          predicates:
            - Path=/api/categories/**
        - id: COLLECTION-SERVICE
          uri: lb://COLLECTION-SERVICE
          predicates:
            - Path=/api/collections/**
        - id: IMAGE-SERVICE
          uri: lb://IMAGE-SERVICE
          predicates:
            - Path=/api/image/**
```

## Hardhat

### Testing Accounts

As a tool for Ethereum development, Hardhat provides a number of features that make it easier to test, deploy and develop smart contracts on the Ethereum network. One of the main advantages of using Hardhat is its local development network feature. This allows developers to test their smart contracts on a local network, without incurring real-world gas costs or making transactions on the main Ethereum network.

One of the key features of the local development network is the ability to use predefined accounts with a balance of 10000 ETH each. This allows developers to easily test their contracts without worrying about funding the accounts or paying for gas costs.

<p align="center">
  <img width="650" alt="II" src="https://user-images.githubusercontent.com/101653735/212501410-f63b7af4-9928-4cc3-b396-b5b119376152.png">
</p>

### Smart Contract Deployment

<p align="center">
  <img width="634" alt="I" src="https://user-images.githubusercontent.com/101653735/212501522-7e890f35-8fdb-46a3-a8d7-05cfbd467ead.png">
</p>

The deployment of our smart contract was completed successfully using the Hardhat manager. For each deployment, we have included information on the deployer and the contracts, including the gas price, the deployer's balance, the deployment price, and the contract address.

<p align="center">
  <img width="515" alt="III" src="https://user-images.githubusercontent.com/101653735/212501710-50b5fed8-f968-4819-a5c6-f7756563b376.png">
</p>

## Testing the Application

### Home Page

In the home page of our application you can just explore NFTs already created, connect your wallet, create collection, create NFT or buy one.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212497965-a31791c4-4792-40f3-a4e4-a61fe8a48f8c.png">
</p>

### Connect Wallet

To authenticate in our marketplace you have to use your wallet

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498252-cc3fc98b-740b-4e41-8d67-a8b191875219.png">
</p>

When you authenticate with your wallet for the first time a new unnamed user will be created

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498356-47ed064c-a3c5-44f1-b422-aac82fd4259f.png">
</p>

### Update Account

So if you want to give your account a name or change the profile picture you can click the ellipsis button and tap settings.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498542-d91e7566-6875-4b26-85ff-18676d98827c.png">
</p>

And when you finish click **submit changes**.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498576-e07aadb7-bd54-45a9-acd5-e2f2fdf28912.png">
</p>

BLA BLA

<p align="center">
  <img width="755" alt="4 IV" src="https://user-images.githubusercontent.com/101653735/212502455-83dbbffc-22e0-4f46-9a0e-e4d96dbfed15.png">
</p>

### Create Collection

To create a collection you have to click the link in the navbar **create** and choose **collection**.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212498909-541481d8-3daf-459d-83f0-80ef677e5579.png">
</p>

BLA BLA.

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212499164-18b307d8-6e7a-43f6-a64b-04ecc6257e1b.png">
</p>

BLA BLA

<p align="center">
  <img width="753" alt="8 II" src="https://user-images.githubusercontent.com/101653735/212502398-abd833e8-f5cf-4e21-9cfd-d84470d003d5.png">
</p>

### Create NFT

<p align="center">
  <img width="960" alt="2" src="https://user-images.githubusercontent.com/101653735/212499377-57345e56-91d4-4ce1-811d-ac5969893c5b.png">
</p>

The user need to confirm the transaction before send it to the Blockchain.

<p align="center">
  <img width="960" alt="9 II" src="https://user-images.githubusercontent.com/101653735/212499506-9c422a43-3d30-4b5b-aa0d-b1d1d171be4a.png">
</p>

Our NFT is created successfully.

<p align="center">
  <img width="960" alt="9 III" src="https://user-images.githubusercontent.com/101653735/212499872-229627ba-94b7-4898-bacb-61c96a25d8ef.png">
</p>

And the transaction r, the hardhat tool provides a lot of information, which allows us to understand it  such us  address, it creates from whom to whom, and the  gas used.

<p align="center">
  <img width="562" alt="9 IV" src="https://user-images.githubusercontent.com/101653735/212499929-c85fd98f-4f54-403b-bf73-b95e4f8a0f84.png">
</p>

### Edit NFT

After you create your NFT, always there is the possibility to edit it, often to decrease the price, it allows for flexibility in the buying and selling process for both the creator and potential buyers. This can help to boost the liquidity of the marketplace.

<p align="center">
  <img width="562" alt="9 IV" src="https://user-images.githubusercontent.com/101653735/212502850-2ed2b92a-faf2-4d70-94a3-effa510aae45.png">
</p>

### Buy NFT

When exploring the marketplace, users can choose a collection and view its details, such as the NFTs it contains. They can also view information about the creator of the collection, as well as the total number of NFTs in the collection.

<p align="center">
	<img width="562" alt="9 IV" src="https://user-images.githubusercontent.com/101653735/212501833-7b55d89f-99ab-4e2b-a7b6-a0b6015a8e1b.png">
</p>

When a user chooses a NFT, he can better view it by examining the details and characteristics of the digital item. If interested, he can also choose to add it to its shopping cart for later purchase. This allows the user to review different options before making a purchasing decision.

<p align="center">
	<img width="562" alt="9 IV" src="https://user-images.githubusercontent.com/101653735/212501844-48c31c2f-3cf5-4d9e-a7bb-550accf14518.png">
</p>

When the user clicks on the cart icon, a new screen will appear displaying a list of all the items that have been  added to the cart plus a button for deleting items. The items are listed with their name, quantity, and price, making it easy for the user to review their selections. Additionally, the user can also modify the quantity of an item or remove it from the cart if they no longer wish to purchase it. This feature is designed to provide a more convenient and user-friendly shopping experience for our customers

<p align="center">
	<img width="562" alt="9 IV" src="https://user-images.githubusercontent.com/101653735/212501885-537c7303-2721-46df-bee8-51a6c2d38e39.png">
</p>

## DevOps : CI/CD

### Angular Application

#### Docker

To create an image in docker and run it as a container we add this ```Dockerfile``` file in our application:

```
# First stage
FROM node:latest as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build

# Second stage
FROM nginx:latest
COPY --from=build /app/dist/nftmarketplace-frontend /usr/share/nginx/html
```

We create the image with the command ```docker build -t nftmarketplace-angular-app .```

<p align="center">
	<img width="779" alt="Docker Angular" src="https://user-images.githubusercontent.com/101653735/212503208-67f18474-b81d-4304-871c-6793b518b152.png">
</p>

Run the image we just create as a container with the command ```docker run -d --name nftmarketplace-angular nftmarketplace-angular-app```

<p align="center">
	<img width="776" alt="Docker Angular container" src="https://user-images.githubusercontent.com/101653735/212503453-6df08148-0faa-4907-af70-d3cb3274db2d.png">
</p>

#### Jenkins



### Spring Boot Application


