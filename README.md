# /jobbot
## find folks looking for work on yr slack

This bot is originally intended to augment [MWDC's](midwestdevchat.slack.com) #jobopportunities channel, to facilitate finding those looking for work, their skillsets and availability. Eventually will be used to register folks for work maybe? ¯\\_(ツ)\_/¯

Who knows... 

## configuration

Set up env vars `SLACK_VERIFY` and `SHEET_TOKEN` to allow your app access to the necessary information.

## commands

### available, list

These commands will eventually read out a list of names as listed on the spreadsheet. They will accept the following subcommands:

* in {location} - searches within the person's listed acceptable travel radius
* skills - lists all the skills of everyone that has work availability
* with {skills} - list people that have availability with the specified skills
* [no] remote - list people that are available for remote work (or the opposite)
* [no] contract - list people that are available for contract work (or the opposite)
* (full|part) time - list people that have full or part time availability

### register, activate

Tells the person where to find the spreadsheet to add themselves.

### deactivate

Tells the person where to find the spreadsheet to remove themselves.

### help

Displays a help that lists all of the available commands.
