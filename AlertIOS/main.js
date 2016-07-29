'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  AlertIOS
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
    borderColor:'#ddd'
  }
});
var AlertIosForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.tip}>提示对话框</Text>
        <Text style={styles.item} onPress={this.input}>输入对话框</Text>
      </View>
    );
  },
  tip:function(){
    AlertIOS.alert('提示','选择学习RN',[
      {
        text:'取消',
        onPress:function(){
          alert('您点击了取消');
        }
      },
      {
        text:'确认',
        onPress:function(){
          alert('您点击了确认');
        }
      }
    ]);
  },
  input:function(){
    AlertIOS.prompt('提示','使用RN开发App',[
      {
        text:'取消',
        onPress:function(){
          alert('您点击了取消');
        }
      },
      {
        text:'确认',
        onPress:function(e){
          alert(e);
        }
      }
    ]);
  }
});
module.exports=AlertIosForApp;
