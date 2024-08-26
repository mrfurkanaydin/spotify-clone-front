import Button from '@/components/Button';
import { BlurView } from 'expo-blur';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function Modes() {

  return (
    <View style={styles.container} >
      <ImageBackground source={require('../../assets/images/boarding/dua lipa.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/spotify_logo_green.webp')} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Choose Mode</Text>
          <View style={styles.modeContainer}>
            <View style={styles.modeWrapper}>
              <BlurView
                intensity={50}
                style={styles.blurView}
              >
                <Feather name="moon" size={24} color="white" />
              </BlurView>
            </View>
            <View style={styles.modeWrapper}>
              <BlurView
                intensity={50}
                style={styles.blurView}
              >
                <Feather name="sun" size={24} color="white" />
              </BlurView>
            </View>
          </View>
          <Button text={"Continue"} action={"/(boarding)"} style={{ marginTop: 50 }} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
  modeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: 'center',
  },
  modeWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
