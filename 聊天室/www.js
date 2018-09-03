var http = require('http')
var fs = require('fs')
var ws = require('socket.io');
var server = http.createServer(function(req, res){
	// 设置发送头信息
	var html = fs.readFileSync('chat.html')
	res.setHeader('Content-type', 'text/html');
	res.end(html)
});

// 新建io实例挂载到web server 服务器中
var io = ws(server);

io.on('connection', function(socket){
	console.log('用户已经连接聊天室')
	// 自定义方法监听到消息接收
	socket.on('message',function(msg){
		// 向所有的客户端广播消息
		io.emit('message',msg);
	})
})

server.listen(3000)