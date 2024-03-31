//The type aliases Chain is used to create a new type for object to create a type aliases for writing RPC configuration.
export type Chain = {
  chainId: string;
  name: string;
  blockExplorerUrl: string;
  rpcUrl: string;
};

//This is the RPC configuration of the Sepolia Testnet.
export const sepolia: Chain = {
  chainId: "11155111",
  name: "Sepolia",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
};

//This is the RPC configuration of the Ethereum Mainnet.
export const mainnet: Chain = {
  chainId: "1",
  name: "Ethereum",
  blockExplorerUrl: "https://etherscan.io",
  rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/demo",
};

export const CHAINS_CONFIG = {
  [sepolia.chainId]: sepolia,
  [mainnet.chainId]: mainnet,
};
