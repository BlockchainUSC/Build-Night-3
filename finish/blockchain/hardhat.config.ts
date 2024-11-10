import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const Private_Key = process.env.PRIVATE_KEY;
const API_URL= process.env.API_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `${API_URL}`,
      accounts: [`0x${Private_Key}`],
      chainId: 11155111,
    },
  },
};

export default config;