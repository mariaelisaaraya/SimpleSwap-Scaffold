import { expect } from "chai";
import { ethers } from "hardhat";

describe("MockTokenB", function () {
  it("debería tener nombre y símbolo correctos", async function () {
    const TokenA = await ethers.getContractFactory("MockTokenB");
    const tokenA = await TokenA.deploy();
    await tokenA.waitForDeployment();

    expect(await tokenA.name()).to.equal("MockTokenB");
    expect(await tokenA.symbol()).to.equal("MTB");
  });
});
