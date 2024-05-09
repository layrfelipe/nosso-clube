// scripts/deploySimpleERC4337Wallet.ts
import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying SimpleERC4337Wallet...");

    const SimpleERC4337Wallet = await ethers.getContractFactory("SimpleERC4337Wallet");
    const wallet = await SimpleERC4337Wallet.deploy(deployer.address);

    await wallet.deployed();

    console.log("SimpleERC4337Wallet deployed to:", wallet.address);
    console.log("Wallet owner set to:", deployer.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
