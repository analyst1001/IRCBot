var config = {
channels: ["#tempChannel"],
					server: "irc.freenode.net",
					botName: "testBod"
};

var irc = require("irc");
var fs = require("fs");
var util = require("util");

var bot = new irc.Client(config.server, config.botName, {channels: config.channels});

bot.addListener("message", function(from, to, text, message) {
		fs.appendFile('message.txt', 'From:' + from + '\n To: ' + to + '\n Text: ' + text + '\n Message: ' + util.inspect(message) + '\n\n', function (err) {
			if (err) throw err;
			console.log('Message appended');
			});
		});
