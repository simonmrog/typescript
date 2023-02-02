type ConstructorFunction = new (...args: any[]) => {};

function reportableClassDecoratorFactory() {
  return function reportableClassDecorator<T extends ConstructorFunction>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
}
 
// @reportableClassDecorator
class BugReport {
  public type = "report";
  public title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}
 
// const bug = new BugReport("Needs dark mode");
const ReportableBugReport = reportableClassDecoratorFactory()(BugReport);
const bug = new ReportableBugReport("Needs dark mode");

console.log(bug.title);
console.log(bug.type);
console.log(bug.reportingURL);
