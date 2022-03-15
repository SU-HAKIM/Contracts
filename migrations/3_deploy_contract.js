const BlindAuction = artifacts.require("BlindAuction");

module.exports = function (deployer) {
    deployer.deploy(BlindAuction, 20031, "0xda5f977daf6975b4d12ff514df25e28155f70537");
};
