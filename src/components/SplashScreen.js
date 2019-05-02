import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native';
import {
  RED, WHITE,
  ITEMS_CENTER,
  TEXT_LARGER_BOLD,
  FONT_SIZE_LARGER,
  LAYOUT_PADDING,
  TEXT_BASE
} from '../configs/styles';
import NavigationService from '../navigations/NavigationService';

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      // if (this.props.loginReducer.data && this.props.loginReducer.login === true) {
      //   NavigationService.reset('MainScreen')
      // } else {
      //   NavigationService.reset('LoginScreen')
      // }
    }, 2500);
  }

  render() {
    return (
      <View style={styles.layout}>
        <StatusBar hidden={true} />
        <Image style={{ width: 120, height: 120, marginBottom: 20 }}
          source={require('../assets/images/logo_hk.png')} />
        <Text>
          <Text style={styles.textHead}>Tol Trans</Text>
          <Text style={{ ...TEXT_LARGER_BOLD, ...styles.textHead }}> Sumatera</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    ...ITEMS_CENTER,
    ...LAYOUT_PADDING,
    backgroundColor: WHITE,
  },
  splashWrap: {
    ...ITEMS_CENTER,
    flex: 1,
    width: '100%',
    backgroundColor: WHITE,
  },
  textHead: {
    ...TEXT_BASE,
    color: RED,
    fontSize: FONT_SIZE_LARGER
  },
})

export default SplashScreen
