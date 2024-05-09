import { ethers } from "hardhat";

async function main() {
    console.log("Deploying IntermediaryContract...");

    const Intermediary = await ethers.getContractFactory("IntermediaryContract");
    const intermediary = await Intermediary.deploy();

    await intermediary.deployed();

    console.log("IntermediaryContract deployed to:", intermediary.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
