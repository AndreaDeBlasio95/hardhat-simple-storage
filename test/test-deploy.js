const { ethers } = require("hardhat");
const { expect, assert } = require("chai"); // chai is an assertion library

// describe is a keyword that is used to group tests
describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  // beforeEach is a keyword that is used to run a function before each test
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  // it is a keyword that is used to define a test
  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    // assert is a keyword that is used to check if the value is as expected
    assert.equal(currentValue.toString(), expectedValue);
    // expect is a keyword that is used to check if the value is as expected
    expect(currentValue.toString()).to.equal(expectedValue);
    // assert and expect do the same thing, but expect is more readable
  });

  // it.only ... run only this test

  it("Should allow a user to set their favorite number", async function () {
    const newValue = "7";
    await simpleStorage.store(newValue);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), newValue.toString());
  });
});
