import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
} from 'react-native';
import Carousel from 'react-native-carousel-view';
export default class Intro extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={20}
            //indicatorText="*"
            indicatorColor="#0b1526"
            >
            <View style={styles.contentContainer}>
              <Text>
                Ini Bayi yang unch):
              </Text>
              <Image 
              source={require("../assets/img/1.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Ini Remaja yang unch):
              </Text>
            <Image 
              source={require("../assets/img/2.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Ini orang tua yang unch):
              </Text>
            <Image 
              source={require("../assets/img/3.png")}/>
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


AppRegistry.registerComponent('intro', () => intro);