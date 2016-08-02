'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    // StatusBarIOS,
    StatusBar
} from 'react-native';
var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1FB9FF"
  }
});

// StatusBarIOS已经过时了，目前使用StatusBar来代替

// -------分割线-setStyle('light-content')与setStyle('default',true);不能一起使用--------
// StatusBarIOS.setStyle('light-content');
// StatusBarIOS.setStyle('default',true);
// StatusBarIOS.setNetworkActivityIndicatorVisible(true);
// StatusBarIOS.setHidden(false);

// -------分割线---------

StatusBar.setBarStyle('light-content');
// StatusBar.setBarStyle('default',true);
// StatusBar.setNetworkActivityIndicatorVisible(true);
// StatusBar.setHidden(false);

var StatusBarIosForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}></View>
    );
  }
});

module.exports = StatusBarIosForApp;
