const sheetsy = require('sheetsy');
const express = require('express');
const bodyParser = require('body-parser');

const slackVerify = process.env.SLACK_VERIFY;
const slackAuth = process.env.SLACK_TOKEN;
const sheetAuth = process.env.SHEET_TOKEN;

console.log(slackVerify);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/jobbot', (req, res) => {
  let b = req.body;
  let cmd = b.text.split(' ')[0];

  console.log(b.user_name, cmd);

  if (slackVerify === b.token) {
    return res.json({
      'response_type': 'in_channel',
      'text': 'shut up Donny'
    });
  }

  return res.json({
    'response_type': 'ephemeral',
    'text': 'yr on the wrong slack, foolio'
  });
});

app.listen(3324, () => {
  console.log('jobbot runs on :3324');
});
