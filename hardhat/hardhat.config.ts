import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import '@nomiclabs/hardhat-ethers'


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
};

export default config;
