const { getApiData } = require('../joke');

beforeAll(() => {
    require("whatwg-fetch");
});

describe("Jokes API", () => {
  test("it returns a joke object", async () => {
    const expected = {
        "id": "R7UfaahVfFd",
        "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
        "status": 200
    };
    mockFetch(expected);
    const json = await getApiData();
    expect(json).toMatchObject(expected);
    console.log(json);
    unMockFetch();
  });
});

function mockFetch(expected) {
    global.fetch = jest.fn().mockImplementation(() => {
        const fetchResponse = {
            ok: true,
            json: () => Promise.resolve(expected)
        };
        return Promise.resolve(fetchResponse);
    });
}

function unMockFetch() {
    global.fetch.mockClear();
    delete global.fetch;
}
