'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  WebView,
}from 'react-native';
var appKey='4263807830';
var callback='http://127.0.0.1:3000';
var url='https://api.weibo.com/oauth2/authorize?client_id='+appKey+'&redirect_uri='+callback;
var styles=StyleSheet.create({
  container:{
    flex:1
  }
});
var appForweibo=React.createClass({
  getInitialState:function(){
    return{
      code:null
    }
  },
  render:function(){
    return(
      <View style={styles.container}>
        {
          !this.state.code?
            <WebView style={styles.container} url={url}
              onNavigationStateChange={this.navChange}/>
          :<Text>{this.state.code}</Text>
        }
      </View>
    );
  },
  navChange:function(state){
    var _that=this;
    if(state.url.indexOf(callback+"/?code=")>-1){
      var code=state.url.split('?code=')[1];
      //这里可以使用code去交换accessToken
      _that.setState({
        code:code
      })
    }
  }
});
module.exports=appForweibo;
