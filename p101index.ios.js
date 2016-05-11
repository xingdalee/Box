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
    View,
    PixelRatio
  } from 'react-native';
  //应用程序入口文件，render负责渲染视图，其返回jsx对象必需且只用一个容器对象包裹
  var app=React.createClass({
    render:function(){
      return(
        <View style={styles.flex}>
          <View style={styles.container}>
            <View style={[styles.item,styles.center]}>
              <Text style={styles.font}>酒店</Text>
            </View>
            <View style={[styles.item,styles.lineLeftRight]}>
              <View style={[styles.center,styles.flex,styles.lineLeftRight]}>
                <Text style={styles.font}>海外酒店</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>特惠酒店</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineLeftRight]}>
                <Text style={styles.font}>团购</Text>
              </View>
              <View style={[styles.center,styles.flex,styles.lineLeftRight]}>
                <Text style={styles.font}>客栈.公寓</Text>
              </View>
            </View>
          </View>
        </View>
      )
    }
  });
  //建议一个组件使用一个StyleSheet对象，细化，解耦
  var styles=StyleSheet.create({
    container:{
      marginTop:25,
      marginLeft:5,
      marginRight:5,
      height:84,
      flexDirection:'row',
      borderRadius:5,
      padding:2,
      backgroundColor:"#FF0067",
      // flex:1,
      // borderWidth:1,
      // borderColor:'red',
      // flexDirection:'row'
    },
    item:{
      flex:1,
      height:80,
      // borderColor:'blue',
      // borderWidth:1,
    },
    center:{
      justifyContent:'center',
      alignItems:'center',
    },
    flex:{
      flex:1
    },
    font:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold'
    },
    //1/PixelRatio.get()获取高清设备的像素比，获得最小线宽
    lineLeftRight:{
      borderLeftWidth:1/PixelRatio.get(),
      borderRightWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    },
    lineCenter:{
      borderBottomWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    }
  });
  //注册入口Box项目名称，app入口组件对象
  AppRegistry.registerComponent('Box',() => app);
