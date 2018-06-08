"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_dev_appium_1 = require("nativescript-dev-appium");
var chai_1 = require("chai");
describe("sample scenario", function () {
    var defaultWaitTime = 5000;
    var driver;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nativescript_dev_appium_1.createDriver()];
                case 1:
                    driver = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    console.log("Quit driver!");
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentTest.state === "failed")) return [3 /*break*/, 2];
                        return [4 /*yield*/, driver.logScreenshot(this.currentTest.title)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    });
    it("should find an element by text", function () { return __awaiter(_this, void 0, void 0, function () {
        var btnTap, message, lblMessage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, driver.findElementByText("TAP", 0 /* exact */)];
                case 1:
                    btnTap = _c.sent();
                    return [4 /*yield*/, btnTap.click()];
                case 2:
                    _c.sent();
                    message = " taps left";
                    return [4 /*yield*/, driver.findElementByText(message, 1 /* contains */)];
                case 3:
                    lblMessage = _c.sent();
                    _b = (_a = chai_1.assert).equal;
                    return [4 /*yield*/, lblMessage.text()];
                case 4:
                    _b.apply(_a, [_c.sent(), "41" + message]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should find an element by type", function () { return __awaiter(_this, void 0, void 0, function () {
        var btnTap, message, lblMessage, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, driver.findElementByClassName(driver.locators.button)];
                case 1:
                    btnTap = _c.sent();
                    return [4 /*yield*/, btnTap.click()];
                case 2:
                    _c.sent();
                    message = " taps left";
                    return [4 /*yield*/, driver.findElementByText(message, 1 /* contains */)];
                case 3:
                    lblMessage = _c.sent();
                    _b = (_a = chai_1.assert).equal;
                    return [4 /*yield*/, lblMessage.text()];
                case 4:
                    _b.apply(_a, [_c.sent(), "40" + message]);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtcGxlLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkEyQ0c7O0FBM0NILG1FQUFvRjtBQUNwRiw2QkFBOEI7QUFFOUIsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQ3hCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixJQUFJLE1BQW9CLENBQUM7SUFFekIsTUFBTSxDQUFDOzs7d0JBQ00scUJBQU0sc0NBQVksRUFBRSxFQUFBOztvQkFBN0IsTUFBTSxHQUFHLFNBQW9CLENBQUM7Ozs7U0FDakMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDOzs7d0JBQ0YscUJBQU0sTUFBTSxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBbkIsU0FBbUIsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7OztTQUMvQixDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7Ozs7OzZCQUNGLENBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFBLEVBQW5DLHdCQUFtQzt3QkFDbkMscUJBQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBbEQsU0FBa0QsQ0FBQzs7Ozs7O0tBRTFELENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTs7Ozt3QkFDbEIscUJBQU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssZ0JBQXNCLEVBQUE7O29CQUFuRSxNQUFNLEdBQUcsU0FBMEQ7b0JBQ3pFLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQXBCLFNBQW9CLENBQUM7b0JBRWYsT0FBTyxHQUFHLFlBQVksQ0FBQztvQkFDVixxQkFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxtQkFBeUIsRUFBQTs7b0JBQTVFLFVBQVUsR0FBRyxTQUErRDtvQkFDbEYsS0FBQSxDQUFBLEtBQUEsYUFBTSxDQUFBLENBQUMsS0FBSyxDQUFBO29CQUFDLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXBDLGNBQWEsU0FBdUIsRUFBRSxJQUFJLEdBQUcsT0FBTyxFQUFDLENBQUM7Ozs7U0FLekQsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFOzs7O3dCQUNsQixxQkFBTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7b0JBQXBFLE1BQU0sR0FBRyxTQUEyRDtvQkFDMUUscUJBQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBcEIsU0FBb0IsQ0FBQztvQkFFZixPQUFPLEdBQUcsWUFBWSxDQUFDO29CQUNWLHFCQUFNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLG1CQUF5QixFQUFBOztvQkFBNUUsVUFBVSxHQUFHLFNBQStEO29CQUNsRixLQUFBLENBQUEsS0FBQSxhQUFNLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMscUJBQU0sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBcEMsY0FBYSxTQUF1QixFQUFFLElBQUksR0FBRyxPQUFPLEVBQUMsQ0FBQzs7OztTQUN6RCxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGl1bURyaXZlciwgY3JlYXRlRHJpdmVyLCBTZWFyY2hPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kZXYtYXBwaXVtXCI7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiY2hhaVwiO1xuXG5kZXNjcmliZShcInNhbXBsZSBzY2VuYXJpb1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFdhaXRUaW1lID0gNTAwMDtcbiAgICBsZXQgZHJpdmVyOiBBcHBpdW1Ecml2ZXI7XG5cbiAgICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgICAgICBkcml2ZXIgPSBhd2FpdCBjcmVhdGVEcml2ZXIoKTtcbiAgICB9KTtcblxuICAgIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJRdWl0IGRyaXZlciFcIik7XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGVzdC5zdGF0ZSA9PT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgYXdhaXQgZHJpdmVyLmxvZ1NjcmVlbnNob3QodGhpcy5jdXJyZW50VGVzdC50aXRsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGZpbmQgYW4gZWxlbWVudCBieSB0ZXh0XCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuVGFwID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KFwiVEFQXCIsIFNlYXJjaE9wdGlvbnMuZXhhY3QpO1xuICAgICAgICBhd2FpdCBidG5UYXAuY2xpY2soKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCIgdGFwcyBsZWZ0XCI7XG4gICAgICAgIGNvbnN0IGxibE1lc3NhZ2UgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQobWVzc2FnZSwgU2VhcmNoT3B0aW9ucy5jb250YWlucyk7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCBsYmxNZXNzYWdlLnRleHQoKSwgXCI0MVwiICsgbWVzc2FnZSk7XG5cbiAgICAgICAgLy8gSW1hZ2UgdmVyaWZpY2F0aW9uXG4gICAgICAgIC8vIGNvbnN0IHNjcmVlbiA9IGF3YWl0IGRyaXZlci5jb21wYXJlU2NyZWVuKFwiaGVsbG8td29ybGQtNDFcIik7XG4gICAgICAgIC8vIGFzc2VydC5pc1RydWUoc2NyZWVuKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGZpbmQgYW4gZWxlbWVudCBieSB0eXBlXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuVGFwID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlDbGFzc05hbWUoZHJpdmVyLmxvY2F0b3JzLmJ1dHRvbik7XG4gICAgICAgIGF3YWl0IGJ0blRhcC5jbGljaygpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIiB0YXBzIGxlZnRcIjtcbiAgICAgICAgY29uc3QgbGJsTWVzc2FnZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChtZXNzYWdlLCBTZWFyY2hPcHRpb25zLmNvbnRhaW5zKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IGxibE1lc3NhZ2UudGV4dCgpLCBcIjQwXCIgKyBtZXNzYWdlKTtcbiAgICB9KTtcbn0pOyJdfQ==