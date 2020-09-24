import { ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    vernouilletLogo: {
        height: 100,
        width: 300,
        alignSelf: 'center',
        top: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // style de la première slide
    slide1: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageslide1: {
        flex: 1,
        width: 900,
        height: '100%',
        resizeMode: 'contain',


    },
    viewtextImageSlide1: {
        justifyContent: "center",
        width: 230,
    },
    textimageslide1: {
        marginTop: 30,
        fontSize: 20,
        color: '#857e89',
        textAlign: 'center',
    },
    // style de la deuxième slide
    slide2: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageslide2: {
        flex: 1,
        width: 900,
        height: '100%',
        resizeMode: 'contain',
        marginBottom: 30

    },
    viewtextImageSlide2: {
        justifyContent: "center",
        width: 230,
    },
    textimageslide2: {
        textAlign: 'center',
        fontSize: 20,
        color: '#857e89'
    },
    // style de la dernière slide
    slide3: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageslide3: {
        flex: 1,
        width: 900,
        height: '100%',
        resizeMode: 'contain',
        marginBottom: 30

    },
    viewtextImageSlide3: {
        justifyContent: "center",
        // alignContent:'center',

        paddingHorizontal: 30

    },
    textimageslide3: {
        textAlign: 'center',
        fontSize: 20,
        color: '#857e89'
    },

    // swiper style
    wrapper: {
        height: 320,
        marginTop: 120
    },
    dotStyle: {
        backgroundColor: '#a29ebb',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 3,
        marginBottom: 3
    },
    activeDotStyle: {
        backgroundColor: '#262964',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },

    //   consultation styles
    consultation: {
        marginTop: 20,
        alignSelf: "center"
    },
    textConsultation: {
        fontSize: 20,
        color: '#262964',
        fontWeight: 'bold'
    },

    // view consultation
    viewConsultation: {
        marginTop: 30,

        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    topPartConsultation: {
        borderRadius: 8
    },
    imageTopPartConsultation: {
        width: '100%',
        height: 200,

    },
    imageComponent: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: "space-between",
        height: '100%',
        borderTopLeftRadius:9, 
        borderTopRightRadius:9
    },
    remindTimeConsultation: {
        flexDirection: 'row',
        marginLeft: 12,
        marginTop: 10
    },
    timeIcon: {
        width: 20,
        height: 20,
        marginRight: 7
    },
    textRemindTimeConsultation: {
        color: 'white',
        fontWeight: "bold",
        marginTop: 1
    },
    whereTopConsultation: {
        color: 'white',
        marginLeft: 11,
        marginBottom: 9
    },
    bottomPartConsultation: {
       backgroundColor:"white",
       paddingVertical:5,
       paddingHorizontal:14,
       borderBottomRightRadius:9,
       borderBottomLeftRadius:9
    },
    tittleConsultation: {
        fontWeight:"bold",
        color:'grey',
        marginTop:11,
        fontSize:18
    },
    domainConsultation: {
        flexDirection:'row',
        marginTop:14,
        marginBottom:8
    },
    roundedDot:{
        backgroundColor:'grey',
        height:20,
        width:20,
        borderRadius:100
    },
    textDomainConsultation: {
        marginTop:2,
        marginLeft:10
    },
    whereBottomConsultation: {
        flexDirection:'row',
        marginBottom:10
    },
    whereIcon:{
       width:20,
       height:20 
    },
    // styles Connexion et création de compte 

    loginAndSignIn:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:40,
        marginBottom:20,

        marginHorizontal:20
    },
    login:{
        paddingHorizontal:29,
        backgroundColor:"#ff7b29",
        paddingVertical:12,
        borderRadius:20
    },
    textLogin:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    signIn:{
        paddingHorizontal:20,
        paddingVertical:10,
    },
    textsignIn:{
        color:'grey',
        fontSize:18,
        fontWeight:'bold'
    }
});

export default styles