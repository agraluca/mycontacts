module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.jsx",
        templateFile: "templates/index.jsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.js",
        templateFile: "templates/styles.js.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.jsx",
        templateFile: "templates/test.jsx.hbs",
      },
    ],
  });
};
