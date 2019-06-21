jest.mock("netlify");
const { mocks } = require("netlify");

const mockFunction = {
  id: "mockFunctionId",
  n: "mockFunctionName"
};

const mockSite = {
  id: "mockSiteId",
  name: "mockSiteName",
  published_deploy: {
    available_functions: [mockFunction]
  }
};

describe("Functions CLI", () => {
  const functions = require("../../src/commands/functions");

  beforeEach(() => {
    mocks.getSite.mockClear();
    mocks.listSites.mockClear();
  });

  it("will throw an error if no sites are found", async () => {
    mocks.listSites.mockImplementation(() => Promise.resolve([]));

    const result = await functions.list({}).catch(ex => String(ex));
    expect(result).toEqual("Error: No Sites Found.");
  });

  it("will return all sites functions if no site_id is passed", async () => {
    mocks.listSites.mockImplementation(() => Promise.resolve([mockSite]));

    const result = await functions.list({}).catch(ex => String(ex));
    expect(result).toEqual([
      {
        site_id: mockSite.id,
        name: mockSite.name,
        functions: [
          {
            id: mockFunction.id,
            name: mockFunction.n
          }
        ]
      }
    ]);
  });

  it("will return functions fitlered by site_id", async () => {
    mocks.getSite.mockImplementation(({ site_id }) => {
      expect(site_id).toBe(mockSite.id);
      return Promise.resolve(mockSite);
    });

    const result = await functions
      .list({
        siteId: mockSite.id
      })
      .catch(ex => String(ex));
    expect(result).toEqual({
      site_id: mockSite.id,
      name: mockSite.name,
      functions: [
        {
          id: mockFunction.id,
          name: mockFunction.n
        }
      ]
    });
  });
});
