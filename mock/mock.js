var lists = require('./list.json');
var moreList = require('./listMore.json');
module.exports = function() {
	return {
		"tit": lists, //tit 表示  例如localhost/api/tit  不用写后缀名,可以直接访问json
		"more": moreList
	}
}