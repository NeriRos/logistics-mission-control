import { StatusToMarkPipe } from "./status-to-mark.pipe";

describe("StatusToMarkPipe", () => {
  it("create an instance", () => {
    const pipe = new StatusToMarkPipe();
    expect(pipe).toBeTruthy();
  });
});
