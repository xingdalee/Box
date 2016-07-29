'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  ActionSheetIOS
}from 'react-native';

var styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  item:{
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    height:30,
    borderWidth:1,
    padding:6,
    borderColor:"#ddd"
  }
});

var ActionSheetIOSForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.tip}>
          showActionSheetWithOptions
        </Text>
        <Text style={styles.item} onPress={this.share}>
          showShareActionSheetWidthOptions
        </Text>
      </View>
    )
  },
  tip:function(){
    // cancelButtonIndex：表示“取消”按钮的位置，即是它在options中的索引
    // destructiveButtonIndex：不能使用的按钮的位置，即是它在options中的索引
    ActionSheetIOS.showActionSheetWithOptions({
      options:[
        '拨打电话',
        '发送邮件',
        '发送短信',
        '取消'
      ],
      cancelButtonIndex:3,
      destructiveButtonIndex:0
    },function(index){
      alert(index);
    });
  },
  share:function(){
    ActionSheetIOS.showShareActionSheetWithOptions({
      url:'https://github.com/XingdaLee/Box',
    },function(err){
      alert(err);
    },function(e){
      alert(e);
    });
  }
});
module.exports=ActionSheetIOSForApp;
