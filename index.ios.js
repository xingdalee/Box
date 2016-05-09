  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */
  'use strict';
  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  //应用程序入口文件，render负责渲染视图，其返回jsx对象必需且只用一个容器对象包裹
  var app=React.createClass({
    render:function(){
      return(
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text>客栈.公寓</Text>
            </View>
          </View>
        </View>
      )
    }
  });
  //建议一个组件使用一个StyleSheet对象，细化，解耦
  var styles=StyleSheet.create({
    container:{
      flex:1,
      borderWidth:1,
      borderColor:'red',
      flexDirection:'row'
    },
    item:{
      flex:1,
      height:80,
      borderColor:'blue',
      borderWidth:1,
    },
    center:{
      justifyContent:'center',
      alignItems:'center',
    },
    flex:{
      flex:1
    }
  });
  //注册入口Box项目名称，app入口组件对象
  AppRegistry.registerComponent('Box',() => app);
