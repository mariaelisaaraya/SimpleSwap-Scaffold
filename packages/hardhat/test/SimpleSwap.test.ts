import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleSwap", function () {
  let tokenA: any;
  let tokenB: any;
  let simpleSwap: any;

  beforeEach(async function () {
    const MockTokenA = await ethers.getContractFactory("MockTokenA");
    tokenA = await MockTokenA.deploy(); // <-- sin argumentos
    await tokenA.waitForDeployment();

    const MockTokenB = await ethers.getContractFactory("MockTokenB");
    tokenB = await MockTokenB.deploy(); // <-- sin argumentos
    await tokenB.waitForDeployment();

    const SimpleSwap = await ethers.getContractFactory("SimpleSwap");
    simpleSwap = await SimpleSwap.deploy(await tokenA.getAddress(), await tokenB.getAddress());
    await simpleSwap.waitForDeployment();
  });

  it("debería tener los tokens con nombre y símbolo correctos", async function () {
    expect(await tokenA.name()).to.equal("MockTokenA");
    expect(await tokenA.symbol()).to.equal("MTA");

    expect(await tokenB.name()).to.equal("MockTokenB");
    expect(await tokenB.symbol()).to.equal("MTB");
  });
});
