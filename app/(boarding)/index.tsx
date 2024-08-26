import Button from '@/components/Button';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';


export default function GetStartedScreen() {
  return (
    <View style={styles.container} >
      <ImageBackground source={require('../../assets/images/boarding/ariana.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/spotify_logo_green.webp')} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Enjoy Listening To Music</Text>
          <Text style={styles.description}>Discover, Listen, Enjoy! Stream millions of songs, albums, and playlists anytime, anywhere. Start your music journey now!</Text>
          <Button text={"GET STARTED"} action={"/modes"} />
        </View>
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "60%",
    height: "50%",
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: '500',
    textAlign: 'center',
  },
  description: {
    marginHorizontal: 20,
    fontSize: 24,
    color: "#797979",
    fontWeight: '500',
    textAlign: 'center',
  }
});
