/// <reference path="./models/interfaces.ts" />
/// <reference path="./models/project.model.ts" />
/// <reference path="./state/projectState.ts" />
/// <reference path="./utils/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/projectInput.ts" />
/// <reference path="./components/projectItem.ts" />
/// <reference path="./components/projectList.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
