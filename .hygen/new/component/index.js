/* eslint-disable babel/camelcase */
const path = require('path');

module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'Component name',
      },
      {
        type: 'input',
        name: 'parent_directory',
        message: 'Parent directory',
      },
      {
        type: 'input',
        name: 'tag',
        message: 'Component tag name',
        default: 'div',
      },
      {
        type: 'confirm',
        name: 'have_graphql',
        message: 'GraphQL Query?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const {component_name, tag, parent_directory} = answers;

      const dir_path = path.join(parent_directory, component_name);
      const abs_path = path.join(process.cwd(), 'src', 'components', dir_path);

      return {
        ...answers,
        dir_path,
        abs_path,
        tag,
      };
    });
  },
};
