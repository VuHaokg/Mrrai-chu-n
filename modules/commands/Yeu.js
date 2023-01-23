
module.exports.config = {
name: "Yeu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "hi",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "Dcm ";
	let varinput = [ "Yêu", "yêu", "Tán", "Dạ", "ju", "Iu", "iu" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + ' Nít nôi yêu đương con c. Lo học bài cho thành tài di',
					  mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}