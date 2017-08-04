const express = require('express');
const bodyParser = require('body-parser');

const utils = require('./utils');
const { listUsers, registerUser, deactivateUser, help } = require('./actions');

const slackVerify = process.env.SLACK_VERIFY;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/jobbot', (req, res) => {
  const b = req.body;
  const name = b.user_name;
  const txt = b.text.split(' ');
  const cmd = txt[0];
  const subcmd = cmd === 'list' && txt[1];
  const getListUsers = () => listUsers(subcmd ? txt : undefined);

  console.log(name, cmd);

  if (slackVerify === b.token) {
    // TODO: figure out better way to assign synonyms in act()
    const action = utils.act({
      // list things (users, skills, etc), optionally filtered
      'available': getListUsers,
      'list': getListUsers,
      // register yourself in this database
      'activate': registerUser,
      'register': registerUser,
      // take yourself out of the active listing (maintaining registration)
      'deactivate': deactivateUser,
      // HALP MEEEEEEEEEEE!!!!!1one
      'help': help
    }, help, cmd);
    console.log(action);
    const { fn, response } = action();
    console.log(fn, response);

    return res.json(utils[fn](response));
  }

  return res.json(utils.ephMsg('yr on the wrong slack, foolio'));
});

app.listen(3324, () => {
  console.log('jobbot runs on :3324');
});
