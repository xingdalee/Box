'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    NetInfo
} from 'react-native';

var styles=StyleSheet.create({
  container:{
    flex:1
  }
});
// 获取连接类型
NetInfo.fetch().done(function(reachability){
  alert("当前网络状态:"+ reachability);
});
// 获取是否连接
NetInfo.isConnected.fetch().done(function(isConnected){
  if(isConnected===true){
    alert('获取是否连接: 已连接');
  }else {
    alert('获取是否连接: 未连接');
  }
});
// 添加网络状态变化监听
NetInfo.addEventListener('change',function(reachability){
  alert('网络状态变化监听:' + reachability);
});

// 监听获取是否连接
NetInfo.isConnected.addEventListener('change',function(isConnected){
  alert('监听获取是否连接:' + isConnected);
});

var NetInfoForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}></View>
    );
  }
});
module.exports = NetInfoForApp;
