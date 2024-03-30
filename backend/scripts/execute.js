const { EntryPoint__factory } = require("@account-abstraction/contracts");
const hre = require("hardhat");

const FACTORY_NONCE = 1;
const FACTORY_ADDRESS = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
const ENTRYPOINT_ADDRESS = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
const PM_ADDRESS = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

async function main() {
    const entryPoint = await hre.ethers.getContractAt("EntryPoint", ENTRYPOINT_ADDRESS);

    //CREATE: hash(sender(deployer)+nonce)
    const sender = await hre.ethers.getCreateAddress({
        from: FACTORY_ADDRESS,
        nonce: FACTORY_NONCE
    });

    //For initCode
    const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
    const [signer0] = await hre.ethers.getSigners();
    const address0 = await signer0.getAddress();
    const initCode = "0x";
    //FACTORY_ADDRESS + AccountFactory.interface.encodeFunctionData("createAccount", [address0]).slice(2);

    console.log(sender);

    //await entryPoint.depositTo(PM_ADDRESS, { value: hre.ethers.parseEther("100"), })

    const Account = await hre.ethers.getContractFactory("Account");

    const userOP = {
        sender,
        nonce: await entryPoint.getNonce(sender, 0),
        initCode,
        callData: Account.interface.encodeFunctionData("execute"),
        callGasLimit: 200_000,
        verificationGasLimit: 200_000,
        preVerificationGas: 50_000,
        maxFeePerGas: hre.ethers.parseUnits("10", "gwei"),
        maxPriorityFeePerGas: hre.ethers.parseUnits("5", "gwei"),
        paymasterAndData: PM_ADDRESS,
        signature: "0x"
    };

    const tx = await entryPoint.handleOps([userOP], address0);
    const receipt = await tx.wait();
    console.log(receipt);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
