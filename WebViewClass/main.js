'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  WebView,
}from 'react-native';
var Dimensions=require('Dimensions');
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
var styles=StyleSheet.create({
  container:{
    flex:1
  }
});
const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>Hello Static World</h1>
  </body>
</html>
`;
// 访问外网：source={{uri: "http://hao123.com"}}
// 访问其他html:source={require('./helloworld.html')}
// 访问本页面的html:source=source={{html:HTML}}
// injectedJavaScript注入js代码
var WebViewForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <WebView injectedJavaScript="alert('欢迎使用WebView')" bounces={true}
          style={{width:width,height:height}}
          source={{uri: "http://hao123.com"}}
          >
        </WebView>
      </View>
    )
  }
});
module.exports=WebViewForApp;
