'use strict'
import React,{Component}from 'react';
import{
  AppRegistry,
  StyleSheet,
  View,
  PixelRatio,
  Text,
  NavigatorIOS,
  ScrollView,
} from 'react-native';
var styles=StyleSheet.create({
  flex:{
    flex:1
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});
//initialRoute初始化路由为List,启动时会自动加载List
var NV =React.createClass({
  render:function(){
    return(
      <NavigatorIOS style={{flex:1}} initialRoute={{
          component:List,
          title:'邮轮',
          passProps:{},
        }}
      />
    )
  }
});
// push(route) - 跳转到新的场景，并且将场景入栈，你可以稍后跳转过去
//http://reactnative.cn/docs/0.25/navigator.html#content
//onRightButtonPress点击事件
var List=React.createClass({
  render:function(){
    return(
        <ScrollView style={styles.flex}>
          <Text style={styles.list_item} onPress={this.goTo}>
            豪华邮轮济州岛3日游
          </Text>
          <Text style={styles.list_item} onPress={this.goTo}>
            豪华邮轮济州岛4日游
          </Text>
          <Text style={styles.list_item} onPress={this.goTo}>
            豪华邮轮济州岛5日游
          </Text>
        </ScrollView>
      );
    },
    goTo:function(){
      this.props.navigator.push({
        component:Detail,
        title:'邮轮详情',
        rightButtonTitle:'购物车',
        onRightButtonPress:function(){
          alert('进入我的购物车');
        }
      })
    }
  });
var Detail=React.createClass({
  render:function(){
    return(
      <ScrollView>
        <Text>详情页</Text>
        <Text>详情页a899adsasd</Text>
      </ScrollView>
    )
  }
});
module.exports=NV;
