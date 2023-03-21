// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/SimpleStorage.sol";
// These files are created dynamically at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract SimpleStorageTest {
  function testWriteValue() public {
    SimpleStorage simpleStorage = SimpleStorage(
      DeployedAddresses.SimpleStorage()
    );

    Assert.equal(simpleStorage.read(), 0, "Value should be 0");
    simpleStorage.write(1);
    Assert.equal(simpleStorage.read(), 1, "Value should be 1");
    simpleStorage.write(2);
    Assert.equal(simpleStorage.read(), 2, "Value should be 2");
  }
}
