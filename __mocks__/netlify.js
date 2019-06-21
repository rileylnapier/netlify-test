const getSite = jest.fn();
const listSites = jest.fn();

class MockedClass {
  constructor() {
    console.log("Constructed");
  }

  getSite(args) {
    return getSite(args);
  }

  listSites(args) {
    return listSites(args);
  }
}

module.exports = MockedClass;
module.exports.mocks = {
  listSites,
  getSite
};
