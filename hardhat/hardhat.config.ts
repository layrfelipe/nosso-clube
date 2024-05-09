import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: "0x50A8C7f3D07BA8f05458F229D639c17C3D82D44A",
    },
  },
  networks: {
    hardhat: {
      // You can specify chainId here if you need to match an Ethereum testnet or mainnet
      chainId: 1337,
      // If you require more detailed logging:
      loggingEnabled: true
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: ["4930b757aea4eb56c559918760f72f647ec87f1333c5c68eab12274f54074191"],
    },
    chilizSpicy: {
      chainId: 88882,
      url: "https://spicy-rpc.chiliz.com/",
      accounts: ["4930b757aea4eb56c559918760f72f647ec87f1333c5c68eab12274f54074191"],
    },    
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

export default config;