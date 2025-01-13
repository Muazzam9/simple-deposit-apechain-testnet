import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-ethers";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    apeTestnet: {
      url: process.env.APE_TESTNET_RPC_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 33111,
    },
  },
  etherscan: {
    apiKey: {
      apeTestnet: process.env.APE_SCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "apeTestnet",
        chainId: 33111,
        urls: {
          apiURL: "https://curtis.explorer.caldera.xyz/api", // Correct API URL
          browserURL: "https://curtis.explorer.caldera.xyz",
        },
      },
    ],
  },
};

export default config;
