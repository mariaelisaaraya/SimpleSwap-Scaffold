import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const tokenA = await deploy("MockTokenA", {
    from: deployer,
    args: [], // si tenés parámetros, ponelos acá
    log: true,
  });

  const tokenB = await deploy("MockTokenB", {
    from: deployer,
    args: [],
    log: true,
  });

  await deploy("SimpleSwap", {
    from: deployer,
    args: [tokenA.address, tokenB.address], // asegurate de que el constructor use estos args
    log: true,
  });
};

export default func;
func.tags = ["all"];
