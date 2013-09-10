/**
 * Copyright (c) 2013, Hiroyuki Suzuki<hiroyuki@hybitz.co.jp>
 * All right reserved.
 * 
 * hello_someone.js - Hello someone.
 */
// 必要なモジュールのロード
var http = require('http');
var querystring = require('querystring');

// HTML
var htmlHeader = '<!DOCTYPE html>\
	<html lang="ja">\
	<head>\
	  <meta charset="utf-8">\
	  <title>Hello someone</title>\
	</head>\
	<body>';

var htmlBody = '<form method="post" action="/">\
	<div>名前：<input type="text" name="name" size="20"></div>\
	<input type="submit" value="こんちには">\
	</form>';

var htmlFooter = '</body></html>';


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
		response.write(htmlHeader);
		response.write(htmlBody);
		response.write(htmlFooter);
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
		response.write(htmlHeader);
		response.write(resultStr);
		response.write(htmlFooter);
		response.end();
	}
}

var PORT = '8080';
var ADDRESS = '127.0.0.1';

// 待ち受け開始
server.listen(PORT, ADDRESS);
console.log('Server running at http://' + ADDRESS + ':' + PORT + '/');



