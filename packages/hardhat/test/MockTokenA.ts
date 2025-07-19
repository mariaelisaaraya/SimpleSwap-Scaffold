import { expect } from "chai";
import { ethers } from "hardhat";

describe("MockTokenA", function () {
  it("debería tener nombre y símbolo correctos", async function () {
    const TokenA = await ethers.getContractFactory("MockTokenA");
    const tokenA = await TokenA.deploy();
    await tokenA.waitForDeployment();

    expect(await tokenA.name()).to.equal("MockTokenA");
    expect(await tokenA.symbol()).to.equal("MTA");
  });
});
