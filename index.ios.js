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
var appForGaode=require('./TextInput/main');
AppRegistry.registerComponent('Box',() => appForGaode);
