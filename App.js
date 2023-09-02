import { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { mystyles, mytext } from "./assets/styles/allstyles";
import Header from "./components/Header";

export default function App() {
  // Estados con hooks
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  // Métodos
  let calculate = (oper) => {
    let mresult = 0;
    let mvalue1 = parseFloat(value1);
    let mvalue2 = parseFloat(value2);
    switch (oper) {
      case "+":
        mresult = mvalue1 + mvalue2;
        break;
      case "-":
        mresult = mvalue1 - mvalue2;
        break;
      case "*":
        mresult = mvalue1 * mvalue2;
        break;
      case "/":
        mresult = mvalue1 / mvalue2;
        break;
    }
    setResult(mresult.toFixed(2));
  };

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
            fontSize:15
          }}
        >
          {result}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 15, borderRadius: 10, fontSize:20
          }}
            onPress={() => calculate("+")}
          >
            <Text style={{ color: "white" }}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 15,
              borderRadius: 10,
              marginLeft: 5,
              fontSize:20
            }}
            onPress={() => calculate("-")}
          >
            <Text style={{ color: "white" }}>-</Text>
          </TouchableOpacity>

          <Button
            icon="alpha-x-circle"
            mode="contained"
            onPress={() => calculate("*")}
          >
            Multiplicar
          </Button>
          <Button
            icon="slash-forward-box"
            mode="contained"
            onPress={() => calculate("/")}
          >
            Dividir        
          </Button>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            icon="backspace"
            mode="contained"
            onPress={() => {
              setValue1("");
              setValue2("");
              setResult("");
            }}
          >
            Limpiar
          </Button>
        </View>
      </View>

      <View
        style={[
          mytext.text,
          { flex: 2, alignItems: "center", alignContent: "center" },
        ]}
      >
        <Text>Footer</Text>
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
