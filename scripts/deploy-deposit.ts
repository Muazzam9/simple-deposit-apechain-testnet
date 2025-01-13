import { ethers } from "hardhat";

async function main() {
  console.log(
    "Deploying contracts with the account:",
    (await ethers.getSigners())[0].address
  );

  const simpleDeposit = await ethers.deployContract("SimpleDeposit");
  await simpleDeposit.waitForDeployment();

  console.log("SimpleDeposit deployed to:", await simpleDeposit.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
