/* eslint-disable babel/camelcase */
const path = require('path');

module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'Page name',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const {page_name} = answers;

      const component_name = `${page_name}Page`;
      const dir_path = path.join('Page', component_name);
      const abs_path = path.join(process.cwd(), 'src', 'components', dir_path);

      return {
        ...answers,
        dir_path,
        abs_path,
        component_name,
      };
    });
  },
};
