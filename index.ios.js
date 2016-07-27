'use strict'
import React,{Component}from 'react';
import{
  AppRegistry
} from 'react-native';
//1、网易
// var appForWangyi=require('./wangyi/main');
// AppRegistry.registerComponent('Box',() => appForWangyi);
//2、携程
// var appForCtrip=require('./ctrip/main');
// AppRegistry.registerComponent('Box',() => appForCtrip);
//3、列表页跳转
// var NV=require('./navigator/main');
// AppRegistry.registerComponent('Box',() => NV);
//4、TextInput:输入框p113
// var appForGaode=require('./TextInput/main');
// AppRegistry.registerComponent('Box',() => appForGaode);
//5、AutomaticallyPrompts:自动提示功能p114
// var autoForApp=require('./AutomaticallyPrompts/main');
// AppRegistry.registerComponent('Box',() => autoForApp);
//6、Touchable:点击时背景阴影效果的背景颜色p121
// var TouchableApp=require('./TouchableClass/main');
// AppRegistry.registerComponent('Box',() => TouchableApp);
//7、TouchableOpacityApp:点击时不用设置背景色，也可呈现上面的效果p123
// var TouchableOpacityApp=require('./TouchableOpacity/main');
// AppRegistry.registerComponent('Box',() => TouchableOpacityApp);
//8、Image:设置图片链接p125
// var ImageForApp=require('./ImageClass/main');
// AppRegistry.registerComponent('Box',() => ImageForApp);
//9、TabBarIos:类似于QQtab切换p129
// var TabBarForApp=require('./TabBarIosClass/main');
// AppRegistry.registerComponent('Box',() => TabBarForApp);
//10、WebView:加载外链网址或者本地的htmlp133
// var WebViewForApp=require('./WebViewClass/main');
// AppRegistry.registerComponent('Box',() => WebViewForApp);
//11、appForweibo:加载微博OAuth授权登陆p137
// var appForweibo=require('./WeiBoOAuth/main');
// 打印runApplication函数的定义
// alert(AppRegistry.runApplication);
// AppRegistry.registerComponent('Box',() => appForweibo);
//12，购物车
var ShoppingCart=require('./ShoppingCart/main');
AppRegistry.registerComponent('Box',() => ShoppingCart);
