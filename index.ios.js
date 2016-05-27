'use strict'
import React,{Component}from 'react';
import{
  AppRegistry
} from 'react-native';
//网易
// var appForWangyi=require('./wangyi/main');
// AppRegistry.registerComponent('Box',() => appForWangyi);
//携程
// var appForCtrip=require('./ctrip/main');
// AppRegistry.registerComponent('Box',() => appForCtrip);
//列表页跳转
// var NV=require('./navigator/main');
// AppRegistry.registerComponent('Box',() => NV);
//TextInput
// var appForGaode=require('./TextInput/main');
// AppRegistry.registerComponent('Box',() => appForGaode);
//AutomaticallyPrompts
// var autoForApp=require('./AutomaticallyPrompts/main');
// AppRegistry.registerComponent('Box',() => autoForApp);
//Touchanle
// var TouchableApp=require('./TouchableClass/main');
// AppRegistry.registerComponent('Box',() => TouchableApp);
// TouchableOpacityApp
// var TouchableOpacityApp=require('./TouchableOpacity/main');
// AppRegistry.registerComponent('Box',() => TouchableOpacityApp);
//Image组件
// var ImageForApp=require('./ImageClass/main');
// AppRegistry.registerComponent('Box',() => ImageForApp);
// TabBarIos组件 类似于QQtab切换
var TabBarForApp=require('./TabBarIosClass/main');
AppRegistry.registerComponent('Box',() => TabBarForApp);
