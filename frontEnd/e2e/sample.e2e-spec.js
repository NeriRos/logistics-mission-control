// import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
// import { assert } from "chai";
// describe("sample scenario", () => {
//     const defaultWaitTime = 5000;
//     let driver: AppiumDriver;
//     before(async () => {
//         driver = await createDriver();
//     });
//     after(async () => {
//         await driver.quit();
//         console.log("Quit driver!");
//     });
//     afterEach(async function () {
//         if (this.currentTest.state === "failed") {
//             await driver.logScreenshot(this.currentTest.title);
//         }
//     });
//     it("should find an element by text", async () => {
//         const btnTap = await driver.findElementByText("TAP", SearchOptions.exact);
//         await btnTap.click();
//         const message = " taps left";
//         const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
//         assert.equal(await lblMessage.text(), "41" + message);
//         // Image verification
//         // const screen = await driver.compareScreen("hello-world-41");
//         // assert.isTrue(screen);
//     });
//     it("should find an element by type", async () => {
//         const btnTap = await driver.findElementByClassName(driver.locators.button);
//         await btnTap.click();
//         const message = " taps left";
//         const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
//         assert.equal(await lblMessage.text(), "40" + message);
//     });
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtcGxlLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RjtBQUN2RixpQ0FBaUM7QUFFakMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFFaEMsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUN6QyxVQUFVO0FBRVYsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsVUFBVTtBQUVWLG9DQUFvQztBQUNwQyxxREFBcUQ7QUFDckQsa0VBQWtFO0FBQ2xFLFlBQVk7QUFDWixVQUFVO0FBRVYseURBQXlEO0FBQ3pELHFGQUFxRjtBQUNyRixnQ0FBZ0M7QUFFaEMsd0NBQXdDO0FBQ3hDLDhGQUE4RjtBQUM5RixpRUFBaUU7QUFFakUsZ0NBQWdDO0FBQ2hDLDBFQUEwRTtBQUMxRSxvQ0FBb0M7QUFDcEMsVUFBVTtBQUVWLHlEQUF5RDtBQUN6RCxzRkFBc0Y7QUFDdEYsZ0NBQWdDO0FBRWhDLHdDQUF3QztBQUN4Qyw4RkFBOEY7QUFDOUYsaUVBQWlFO0FBQ2pFLFVBQVU7QUFDVixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQXBwaXVtRHJpdmVyLCBjcmVhdGVEcml2ZXIsIFNlYXJjaE9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRldi1hcHBpdW1cIjtcbi8vIGltcG9ydCB7IGFzc2VydCB9IGZyb20gXCJjaGFpXCI7XG5cbi8vIGRlc2NyaWJlKFwic2FtcGxlIHNjZW5hcmlvXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBkZWZhdWx0V2FpdFRpbWUgPSA1MDAwO1xuLy8gICAgIGxldCBkcml2ZXI6IEFwcGl1bURyaXZlcjtcblxuLy8gICAgIGJlZm9yZShhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgIGRyaXZlciA9IGF3YWl0IGNyZWF0ZURyaXZlcigpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlF1aXQgZHJpdmVyIVwiKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGFmdGVyRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUZXN0LnN0YXRlID09PSBcImZhaWxlZFwiKSB7XG4vLyAgICAgICAgICAgICBhd2FpdCBkcml2ZXIubG9nU2NyZWVuc2hvdCh0aGlzLmN1cnJlbnRUZXN0LnRpdGxlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyAgICAgaXQoXCJzaG91bGQgZmluZCBhbiBlbGVtZW50IGJ5IHRleHRcIiwgYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBidG5UYXAgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoXCJUQVBcIiwgU2VhcmNoT3B0aW9ucy5leGFjdCk7XG4vLyAgICAgICAgIGF3YWl0IGJ0blRhcC5jbGljaygpO1xuXG4vLyAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIiB0YXBzIGxlZnRcIjtcbi8vICAgICAgICAgY29uc3QgbGJsTWVzc2FnZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChtZXNzYWdlLCBTZWFyY2hPcHRpb25zLmNvbnRhaW5zKTtcbi8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IGxibE1lc3NhZ2UudGV4dCgpLCBcIjQxXCIgKyBtZXNzYWdlKTtcblxuLy8gICAgICAgICAvLyBJbWFnZSB2ZXJpZmljYXRpb25cbi8vICAgICAgICAgLy8gY29uc3Qgc2NyZWVuID0gYXdhaXQgZHJpdmVyLmNvbXBhcmVTY3JlZW4oXCJoZWxsby13b3JsZC00MVwiKTtcbi8vICAgICAgICAgLy8gYXNzZXJ0LmlzVHJ1ZShzY3JlZW4pO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgaXQoXCJzaG91bGQgZmluZCBhbiBlbGVtZW50IGJ5IHR5cGVcIiwgYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBidG5UYXAgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuYnV0dG9uKTtcbi8vICAgICAgICAgYXdhaXQgYnRuVGFwLmNsaWNrKCk7XG5cbi8vICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiIHRhcHMgbGVmdFwiO1xuLy8gICAgICAgICBjb25zdCBsYmxNZXNzYWdlID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KG1lc3NhZ2UsIFNlYXJjaE9wdGlvbnMuY29udGFpbnMpO1xuLy8gICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgbGJsTWVzc2FnZS50ZXh0KCksIFwiNDBcIiArIG1lc3NhZ2UpO1xuLy8gICAgIH0pO1xuLy8gfSk7Il19