import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';
import styles from './Components/styles'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <SafeAreaView>

        {/* logo vernouillet */}
        <Image style={styles.vernouilletLogo}
          source={require('../../assets/Logo-Vernouillet.jpg')} />

        {/* Swiper */}
        <Swiper style={styles.wrapper} showsButtons={false}
          dot={
            <View
              style={styles.dotStyle}
            />
          } activeDot={
            <View
              style={styles.activeDotStyle}
            />
          } autoplay>

          {/* première slide */}
          <View style={styles.slide1}>
            <Image style={styles.imageslide1} source={require('../../assets/Slide/firstSlide.png')} />
            <View style={styles.viewtextImageSlide1}>
              <Text style={styles.textimageslide1}>Ensemble construisons demain</Text>
            </View>
          </View>

          {/* deuxième slide */}
          <View style={styles.slide2}>
            <Image style={styles.imageslide2} source={require('../../assets/Slide/secondSlide.png')} />
            <View style={styles.viewtextImageSlide2}>
              <Text style={styles.textimageslide2}>Participez, proposez, et échangez sur des sujets du quotidien</Text>
            </View>
          </View>

          {/* dernière slide */}
          <View style={styles.slide3}>
            <Image style={styles.imageslide3} source={require('../../assets/Slide/thirdSlide.png')} />
            <View style={styles.viewtextImageSlide3}>
              <Text style={styles.textimageslide3}>Et redevenez l’acteur principal de votre ville</Text>
            </View>
          </View>

        </Swiper>

        {/* texte consultation a la une */}
        <View style={styles.consultation}>
          <Text style={styles.textConsultation}>Consultation à la une</Text>
        </View>

        {/* vue consultation a la une */}
        <View style={styles.viewConsultation}>
          <View style={styles.topPartConsultation}>
            <ImageBackground  resizeMode='cover' source={require('../../assets/viewConsultation/photoConsultation.jpg')} imageStyle={{ borderTopLeftRadius:9, borderTopRightRadius:9}} style={styles.imageTopPartConsultation}>
              <View style={styles.imageComponent}>
                <View style={styles.remindTimeConsultation}>
                  <Image resizeMode='contain' style={styles.timeIcon} source={require('../../assets/viewConsultation/Time.png')} />
                  <Text style={styles.textRemindTimeConsultation}>fin dans 17 jours</Text>
                </View>
                <Text style={styles.whereTopConsultation}>Sondage de Verneuil-sur-Seine</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.bottomPartConsultation}>
            <Text style={styles.tittleConsultation}>Route départementale RD 154</Text>
            <View style={styles.domainConsultation}>
              <View style={styles.roundedDot}/>
              <Text style={styles.textDomainConsultation}>Urbanisme</Text>
            </View>
            <View style={styles.whereBottomConsultation}>
              <Image resizeMode='contain' style={styles.whereIcon} source={require('../../assets/viewConsultation/where.png')} />
              <Text style={styles.textDomainConsultation}>Route départementale RD 154</Text>
            </View>
          </View>
        </View>

        {/* Connexion et création de compte */}
      <View style={styles.loginAndSignIn}>
      <LinearGradient
        // Button Linear Gradient
        colors={[ "#ff9c58","#ff9326","#ff7b29"]}
        style={styles.login}>
        <Text style={styles.textLogin}>Connexion</Text>
        </LinearGradient>
          <View style={styles.signIn}>
            <Text style={styles.textsignIn}>créer un compte</Text>
          </View>
        </View>

      </SafeAreaView>

    </ScrollView>
  );
}


