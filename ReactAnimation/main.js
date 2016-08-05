'use strict'
import React,{Component} from 'react';
import TimerMixin from 'react-timer-mixin';
// var TimerMixin = require('react-timer-mixin');
import{
  StyleSheet,
  Text,
  View
}from 'react-native';
var styles=StyleSheet.create({
  progress:{
    height:10,
    width:10,
    marginLeft:10,
    backgroundColor:'#E72D00',
    marginTop:10
  }
});
var ReactAnimationForApp=React.createClass({
  mixins:[TimerMixin],
  getInitialState:function(){
    return{
      width:10
    }
  },
  render:function(){
    var css=[];
    css.push(styles.progress);
    if(this.state.width){
      css.push({width:this.state.width,marginTop:50})
    }
    return(
      <View>
        <View style={css}></View>
      </View>
    )
  },
  componentDidMount:function(){
    var _that=this;
    function doAnimated(){
      _that.setState({
        width:_that.state.width+10
      });
      if(_that.state.width<290){
        TimerMixin.requestAnimationFrame(function(){
          setTimeout(doAnimated, 500);//0.5秒执行一次
        });
      }
    };
    TimerMixin.requestAnimationFrame(doAnimated);
  }
});
module.exports=ReactAnimationForApp;
