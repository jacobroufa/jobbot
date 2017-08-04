const utils = {
  msg: function (text, type) {
    return {
      'response_type': type || 'in_channel',
      'text': text
    };
  },

  ephMsg: function (text) {
    return this.msg(text, 'ephemeral');
  },

  act: function (paths, defaultPath, input) {
    return input in paths ?
      paths[input] :
      defaultPath;
  }
};

module.exports = utils;
