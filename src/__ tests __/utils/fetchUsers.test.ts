import { fetchUsers } from "../../lib/utils";
import { mockUsers } from "../../test/__ mocks __/mockData";

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve(mockUsers),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "basic",
      url: "",
    }) as Promise<Response>
);
describe("fetchUsers fetches data correctly", () => {
  it("should fetch users", async () => {
    const users = await fetchUsers("/api/mock");
    expect(users).toEqual(mockUsers);
  });

  it("should return an error if fetch fails", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject("API is down")
    );
    const users = await fetchUsers("/api/mock");
    expect(users).toEqual(undefined);
  });
  //check if fetch is called with the correct url
  it("should call fetch with the correct url", async () => {
    await fetchUsers("/api/mock");
    expect(global.fetch).toHaveBeenCalledWith("/api/mock");
  });

  //check if data length is correct
  it("should return the correct number of users", async () => {
    const users = await fetchUsers("/api/mock");
    expect(users?.length).toEqual(3);
  });
});
