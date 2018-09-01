import { GetUserById } from "./get-user-by-id.pipe";

describe("userIdToName", () => {
  it("create an instance", () => {
    const pipe = new GetUserById();
    expect(pipe).toBeTruthy();
  });
});
