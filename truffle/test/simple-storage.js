const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("should read newly written values", async () => {
    const deployed = await SimpleStorage.deployed();

    let value = (await deployed.read()).toNumber();
    assert.equal(value, 0, "Value should be 0");

    await deployed.write(1);
    value = (await deployed.read()).toNumber();
    assert.equal(value, 1, "Value should be 1");

    await deployed.write(2);
    value = (await deployed.read()).toNumber();
    assert.equal(value, 2, "Value should be 2");
  });
});
