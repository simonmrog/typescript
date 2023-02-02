"use strict";
function reportableClassDecoratorFactory() {
    return function reportableClassDecorator(constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.reportingURL = "http://www...";
            }
        };
    };
}
// @reportableClassDecorator
class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
}
// const bug = new BugReport("Needs dark mode");
const ReportableBugReport = reportableClassDecoratorFactory()(BugReport);
const bug = new ReportableBugReport("Needs dark mode");
console.log(bug.title);
console.log(bug.type);
console.log(bug.reportingURL);
