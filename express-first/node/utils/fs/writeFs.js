
var fs=require('fs');
module.exports={
	writeFile:function(path,data){
		fs.writeFile(path,data,function(err){
			if(err){
				console.log('读取文件错误！');
			}
		});
	},
	writeFileSnyc:function(path,data){
		fs.writeFileSnyc(path,data);
	}
}