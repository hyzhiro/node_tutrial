/**
 * Copyright (c) 2013, Hiroyuki Suzuki<hiroyuki@hybitz.co.jp>
 * All right reserved.
 * 
 * hello_action.js - Hello someone.
 */
// 必要なモジュールのロード
var http = require('http');
var querystring = require('querystring');
var views = require('./hello_view.js');


// http.Serverを作成する
var server = http.createServer(onRequest);

// request イベントハンドラの登録
function onRequest(request, response){
	// トップディレクトリ以外はリダイレクト
	if(request.url != '/'){
		return;
	}
	
	// POST以外の時は入力画面
	if(request.method != 'POST'){
		response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		response.write(views.htmlHeader);
		response.write(views.htmlBody);
		response.write(views.htmlFooter);
		response.end();
		return;
	}
	
	// POSTの時は名前を取得して動的画面
	if(request.method = 'POST'){
		// データ取得
		request.data = '';
		request.on('data', function(chunk){request.data += chunk;});
		request.on('end', sendResponse);
		return;
	}
	
	// 受信が完了したら呼ばれる関数
	function sendResponse(){
		var query = querystring.parse(request.data);
		var resultStr = 'こんにちは ' + query.name + ' さん';
		response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		response.write(views.htmlHeader);
		response.write(resultStr);
		response.write(views.htmlFooter);
		response.end();
	}
}

var PORT = '8081';
var ADDRESS = '127.0.0.1';

// 待ち受け開始
server.listen(PORT, ADDRESS);
console.log('Server running at http://' + ADDRESS + ':' + PORT + '/');

