'use strict'
import React,{Component} from 'react';
import Camera from 'react-native-camera';
import{
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
}from 'react-native';
var styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10
  },
  instructions:{
    textAlign:'center',
    color:'#333333'
  }
});
// var Camera=require('react-native-camera');
var cameraApp=React.createClass({
  getInitialState(){
    return{
      cameraType:Camera.constants.Type.back
    }
  },
  render(){
    return(
      <Camera ref='cam' style={styles.container} onBarCodeRead={this._onBarCodeRead} type={this.state.cameraType}>
        <Text style={styles.welcome}>
          Welcome to ReactNative!
        </Text>
        <Text style={styles.instructions}>
          To get started,edit index.ios.js{'\n'} Press Com+R to reload
        </Text>
        <TouchableHighlight onPress={this._switchCamera}>
          <Text>
            Take old switcheroo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._takePicture}>
          <Text>
            Take Picture
          </Text>
        </TouchableHighlight>
      </Camera>
    )
  },
  _onBarCodeRead(e){
    console.log('_onBarCodeRead:' + e);
  },
  _switchCamera(){
    var state=this.state;
    state.cameraType =
    state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  },
  _takePicture(){
    this.refs.cam.capture(function(err,data){
      console.log(err,data);
    });
  }
});
module.exports=cameraApp;
