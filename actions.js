const sheetsy = require('sheetsy');

const sheetAuth = process.env.SHEET_TOKEN;

const getSheet = sheetsy.getWorkbook(sheetAuth).then((workbook) => {
  console.log(workbook, workbook.sheets[0], workbook.sheets[0].id);

  return sheetsy.getSheet(sheetAuth, workbook.sheets[0].id)
                .then((sheet) => console.log(sheet))
                .catch((err) => console.log(err))
}).catch((err) => console.log(err));

const actions = {
  listUsers: (txt) => {
    const response = 'list of stuff' + (txt ? `with ${txt}` : '');

    // TODO: make this do something more than log rows, duh
    getSheet.then(({ rows }) => console.log(rows)).catch((err) => console.log(err));

    return {
      fn: 'msg',
      response
    };
  },

  registerUser: () => {
    return {
      fn: 'ephMsg',
      response: 'To register a user, visit: https://docs.google.com/spreadsheets/d/18o5PhXY91o0NQb6Il10IN1eUwZuQYA-YgSh5zcBYh2w/edit#gid=0 and add yourself!\nEventually, we plan to add an interactive bot for registration.'
    };
  },

  deactivateUser: () => {
    return {
      fn: 'ephMsg',
      response: 'To deactivate yourself, visit: https://docs.google.com/spreadsheets/d/18o5PhXY91o0NQb6Il10IN1eUwZuQYA-YgSh5zcBYh2w/edit#gid=0 and set the "inactive" column to some value.\nEventually, we plan to make this step automatic.'
    };
  },

  help: () => {
    return {
      fn: 'ephMsg',
      response: 'This bot lets you quickly search for people looking for work.\n\nAvailable commands are:\n"available" or "list" to list users,\n"register" or "activate" to get information about registration,\n"deactivate" for information about deactivating yourself,\nand this command "help" (which is also triggered by default).\n\nThanks for using this bot!'
    };
  }
};

module.exports = actions;
