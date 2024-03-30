const hre = require("hardhat");

const ACCOUNT_ADDR = "0x9bd03768a7DCc129555dE410FF8E85528A4F88b5";
const ENTRYPOINT_ADDRESS = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
const PM_ADDRESS = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

async function main() {
    const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);
    const count = await account.count();

    console.log(count);
    console.log(
        "account balance",
        await hre.ethers.provider.getBalance(ACCOUNT_ADDR)
    );
    const ep = await hre.ethers.getContractAt("EntryPoint", ENTRYPOINT_ADDRESS);
    console.log("account balance on EP", await ep.balanceOf(ACCOUNT_ADDR));
    console.log("paymaster balance on EP", await ep.balanceOf(PM_ADDRESS));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
