// migrations/2_deploy_contracts.js
const Dex = artifacts.require("Dex");

module.exports = function(deployer) {
  deployer.deploy(Dex);
};

