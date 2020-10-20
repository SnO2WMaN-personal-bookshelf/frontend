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
        name: 'dir',
        message: 'Base directory',
      },
      {
        type: 'input',
        name: 'tag',
        message: 'Component tag name',
        default: 'div',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const {component_name, dir, tag} = answers;

      const dir_path = path.join(dir, component_name);
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
