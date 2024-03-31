const hre = require("hardhat");


const EP_ADDRESS = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
const PM_ADDRESS = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

async function main() {
    const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

    await entryPoint.depositTo(PM_ADDRESS, {
        value: hre.ethers.parseEther(".2"),
    });

    console.log("deposit was successful!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});