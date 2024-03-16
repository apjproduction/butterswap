// test/DexTest.js
const Dex = artifacts.require("Dex");

contract("Dex", (accounts) => {
    it("should deposit tokens", async () => {
        let dex = await Dex.deployed();
        await dex.deposit(100, 0); // Assuming token 0 is Ether
        let balance = await dex.balances(accounts[0], 0);
        assert.equal(balance.toNumber(), 100);
    });

    it("should withdraw tokens", async () => {
        let dex = await Dex.deployed();
        await dex.withdraw(100, 0);
        let balance = await dex.balances(accounts[0], 0);
        assert.equal(balance.toNumber(), 0);
    });
});

