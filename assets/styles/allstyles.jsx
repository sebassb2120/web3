import { StyleSheet } from "react-native";

const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      background: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body:{
        flex:1,
        backgroundColor:'orange',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
});


const mytext = StyleSheet.create({
    text:{
        color: '#fff',
        fontWeight:'bold',
    }
});


export {mystyles,mytext}
  