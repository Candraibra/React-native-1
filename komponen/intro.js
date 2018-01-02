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
        <Text>
                Daftar Sosial media Terpopuler didunia
              </Text>
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
                Facebook
              </Text>
              <Image 
              source={require("../assets/img/png/facebook.png")}/>
           
           </View>
            <View style={styles.contentContainer}>
            <Text>
                Qzone
              </Text>
            <Image 
              source={require("../assets/img/png/qzone.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Google +
              </Text>
            <Image 
              source={require("../assets/img/png/google+.png")}/>
            </View>
            <View style={styles.contentContainer}>
              <Text>
                Linkedln
              </Text>
              <Image 
              source={require("../assets/img/png/linkedin.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Instagram
              </Text>
            <Image 
              source={require("../assets/img/png/instagram.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Twitter
              </Text>
            <Image 
              source={require("../assets/img/png/twitter.png")}/>
            </View>
            <View style={styles.contentContainer}>
              <Text>
                Tumblr
              </Text>
              <Image 
              source={require("../assets/img/png/tumblr.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Sina Weibo
              </Text>
            <Image 
              source={require("../assets/img/png/sina-weibo.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>
                Vkontakte
              </Text>
            <Image 
              source={require("../assets/img/png/vkontakte.png")}/>
            </View>
            <View style={styles.contentContainer}>
              <Text>
                Snapchat
              </Text>
              <Image 
              source={require("../assets/img/png/snapchat.png")}/>
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
    backgroundColor: 'white',
  },
});


AppRegistry.registerComponent('intro', () => intro);