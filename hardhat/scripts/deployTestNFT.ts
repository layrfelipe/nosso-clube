// scripts/deployTestNFT.ts
import { ethers } from "hardhat";

async function main() {
    console.log("Deploying TestNFT...");

    // Ensure that IntermediaryContract is deployed first and replace 'intermediaryAddress' with its deployed address
    const intermediaryAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    
    const TestNFT = await ethers.getContractFactory("TestNFT");
    const testNFT = await TestNFT.deploy(intermediaryAddress);

    await testNFT.deployed();

    console.log("TestNFT deployed to:", testNFT.address);
    console.log("Intermediary Contract linked:", intermediaryAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
