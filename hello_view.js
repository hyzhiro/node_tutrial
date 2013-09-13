/**
 * Copyright (c) 2013, Hiroyuki Suzuki<hiroyuki@hybitz.co.jp>
 * All right reserved.
 * 
 * hello_view.js
 */
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

exports.htmlHeader = htmlHeader;
exports.htmlBody = htmlBody;
exports.htmlFooter = htmlFooter;
