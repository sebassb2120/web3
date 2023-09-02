import { StyleSheet } from "react-native";

const mystyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body:{
        flex:1,
        backgroundColor:'orange',

    }
});

const mytext = StyleSheet.create({
    text:{
        color: '#fff',
        fontWeight:'bold',
    }
});


export {mystyles,mytext}
  