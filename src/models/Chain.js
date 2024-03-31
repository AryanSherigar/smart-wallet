"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAINS_CONFIG = exports.mainnet = exports.sepolia = void 0;
//This is the RPC configuration of the Sepolia Testnet.
exports.sepolia = {
    chainId: "11155111",
    name: "Sepolia",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
};
//This is the RPC configuration of the Ethereum Mainnet.
exports.mainnet = {
    chainId: "1",
    name: "Ethereum",
    blockExplorerUrl: "https://etherscan.io",
    rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/demo",
};
exports.CHAINS_CONFIG = (_a = {},
    _a[exports.sepolia.chainId] = exports.sepolia,
    _a[exports.mainnet.chainId] = exports.mainnet,
    _a);
