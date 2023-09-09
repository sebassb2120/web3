import { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { mystyles, mytext } from "./assets/styles/allstyles";
import Header from "./components/Header";

export default function App() {
  // Estados con hooks
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [result, setResult] = useState("");
  const [observacion, setObservacion] = useState("");

  // Métodos
  let calculate = (oper) => {
    let mresult = 0;
    let mvalue1 = parseFloat(value1);
    let mvalue2 = parseFloat(value2);
    let mvalue3 = parseFloat(value3);
    
    if(oper){
      mresult= (mvalue1 + mvalue2 + mvalue3) % 3
    }
    setResult(mresult.toFixed(3));
  };

  function observaciones(){
    if (calculate >= 3.0){
      return "Ganaste"
    }

    if (calculate <= 2.9 && 2.0){
      return "habilitas"
    }

    if (calculate <= 1.9){
      return "perdiste"
    }
    
  }

  return (
    <View style={mystyles.container}>
      <Header />

      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", marginBottom: 25, fontSize: 26 }}>
          Calculadora
        </Text>

        <TextInput
          style={{ fontSize: 18 }}
          label="valor 1"
          left={<TextInput.Icon icon="counter" />}
          onChangeText={(value1) => setValue1(value1)}
          value={value1}
        />

        <TextInput
          style={{ marginTop: 10, fontSize: 18 }}
          label="valor 2"
          left={<TextInput.Icon icon="counter" />}
          onChangeText={(value2) => setValue2(value2)}
          value={value2}
        />

        <TextInput
          style={{ marginTop: 10, fontSize: 18 }}
          label="valor 3"
          left={<TextInput.Icon icon="counter" />}
          onChangeText={(value3) => setValue3(value3)}
          value={value3}
        />


        <Text style={{ fontWeight: "bold" }}>RESULT</Text>
        <Text
          style={{
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "orange",
            padding: 10,
            fontWeight: "bold",
            color: "white",
            width: 200,
            height: 30,
            marginBottom: 10,
            textAlign: "center",
            fontSize: 15,
          }}
        >
          {result}
        </Text>

        <Text style={{ fontWeight: "bold" }}>observacion</Text>
        <Text
          style={{
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "orange",
            padding: 10,
            fontWeight: "bold",
            color: "white",
            width: 200,
            height: 30,
            marginBottom: 10,
            textAlign: "center",
            fontSize: 15,
          }}
        >
          {observacion}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 15,
              borderRadius: 10,
              fontSize: 20,
            }}
            onPress={() => calculate("Calcular")}
          >
            <Text style={{ color: "white" }}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            icon="backspace"
            mode="contained"
            onPress={() => {
              setValue1("");
              setValue2("");
              setValue3("");
              setResult("");
            }}
          >
            Limpiar
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
