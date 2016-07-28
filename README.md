# 语法笔记

## CSS:
backgroundColor: 'transparent'透明色

var onePT=1/PixelRatio.get();获取最小线宽

flexDirection:主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）

flex:1所有灵活的项目都带有相同的长度，忽略它们的内容

opacity: 0.7 属性设置元素的不透明级别

## React:
resizeMode="contain"图片自适应所在容器中

numberOfLines标题最多显示两行.多的用省略号表示

onEndEditing编辑结束时调用

returnKeyType虚拟键盘上显示的相应文字，如显示default、go、google、search、send等

加载本地图片：source={require('./images/meinv.jpg')}

onRightButtonPress点击事件

TabBarIOS会自动将图片进行颜色处理，不用管原来的图片是什么颜色

使用外链：source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>

activeOpacity:触摸时透明度的设置

underlayColor:点击时背景阴影效果的背景颜色

onShowUnderlay:出现背景阴影时触发该事件

onHideUnderlay:隐藏背景阴影时触发该事件

activeOpacity:触摸时透明度的设置

TouchableOpacity只有一个activeOpacity属性

访问外网：source={{uri: "http://hao123.com"}}

访问其他html:source={require('./helloworld.html')}

访问本页面的html:source=source={{html:HTML}}

injectedJavaScript注入js代码

##生命周期

componentWillMount 组件出现前 就是dom还没有渲染到html文档里面

componentDidMount 组件渲染完成 已经出现在dom文档里

可以再各个周期实现特定的操作
##报错信息和解决方式
* 类似于这样循环时报错（/box/ShoppingCart）：Each child in an array or iterator should have a unique "key" prop.
  Check the render method of `List`. See https://fb.me/react-warning-keys for more information.

>只要在<View style={styles.row} key={i}>中加上key={i}就可以了
