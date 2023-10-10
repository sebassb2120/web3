import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { mystyles, mytext } from "./assets/styles/allstyles";
import Header from "./components/Header";

const Formulario = () => {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [materia, setMateria] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [definitiva, setDefinitiva] = useState('');
  const [observacion, setObservacion] = useState('');

  const [datosGuardados, setDatosGuardados] = useState([]); // Arreglo para almacenar los datos de los estudiantes

  // Función para calcular la definitiva y la observación
  const calcularDefinitiva = () => {
    // Validar que las notas sean números válidos entre 0 y 5
    const nota1Num = parseFloat(nota1);
    const nota2Num = parseFloat(nota2);
    const nota3Num = parseFloat(nota3);

    if (isNaN(nota1Num) || isNaN(nota2Num) || isNaN(nota3Num)) {
      // Al menos una de las notas no es válida
      setDefinitiva('');
      setObservacion('Notas inválidas');
    } else if (nota1Num < 0 || nota1Num > 5 || nota2Num < 0 || nota2Num > 5 || nota3Num < 0 || nota3Num > 5) {
      // Al menos una de las notas está fuera del rango válido
      setDefinitiva('');
      setObservacion('Notas invalidas no estan en el rango de (0 - 5)');
    } else {
      // Calcular la definitiva y la observación
      const definitivaCalculada = (nota1Num * 0.3 + nota2Num * 0.35 + nota3Num * 0.35).toFixed(2);
      setDefinitiva(definitivaCalculada);

      if (definitivaCalculada >= 3) {
        setObservacion('Gana');
      } else if (definitivaCalculada < 2) {
        setObservacion('Pierde');
      } else {
        setObservacion('Habilita');
      }
    }
  };

  // Función para guardar los datos en un objeto y almacenarlos en el arreglo de datosGuardados
  const guardar = () => {
    // Validar que todos los campos estén llenos
    if (!identificacion || !nombres || !materia || !nota1 || !nota2 || !nota3) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Verificar si ya existe una entrada con la misma identificación y materia
    const existente = datosGuardados.find((dato) => dato.identificacion === identificacion && dato.materia === materia);

    if (existente) {
      alert('Este usuario y Materia ya fueron ingresados');
      return;
    }

    // Crear un nuevo objeto con los datos ingresados y agregarlo al arreglo
    const nuevoDato = {
      identificacion,
      nombres,
      materia,
      nota1,
      nota2,
      nota3,
      definitiva,
      observacion,
    };

    setDatosGuardados([...datosGuardados, nuevoDato]);
    limpiar();
  };

  // Función para buscar información por identificación o asignatura
  const buscar = () => {
    if (!identificacion && !materia) {
      alert('Ingrese al menos la identificación o la materia para buscar');
      return;
    }

    // Buscar en datosGuardados por identificación o materia
    const resultadoBusqueda = datosGuardados.filter(
      (dato) => dato.identificacion === identificacion || dato.materia === materia
    );

    if (resultadoBusqueda.length === 0) {
      alert('No se encontraron resultados');
    } else {
      // Mostrar el primer resultado encontrado en el formulario
      const primerResultado = resultadoBusqueda[0];
      setIdentificacion(primerResultado.identificacion);
      setNombres(primerResultado.nombres);
      setMateria(primerResultado.materia);
      setNota1(primerResultado.nota1);
      setNota2(primerResultado.nota2);
      setNota3(primerResultado.nota3);
      setDefinitiva(primerResultado.definitiva);
      setObservacion(primerResultado.observacion);
    }
  };

  // Función para limpiar los campos del formulario
  const limpiar = () => {
    setIdentificacion('');
    setNombres('');
    setMateria('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinitiva('');
    setObservacion('');
  };

  const imagen = {uri:"https://legacy.reactjs.org/logo-og.png"}

  return (
    <View style={mystyles.container}>

      <View>
        <ImageBackground source={imagen} resizeMode='cover' style={mystyles.image}/>
      </View>
    
      {/* Campos del formulario */}
      <TextInput
        label="Identificación"
        value={identificacion}
        onChangeText={(identificacion) => setIdentificacion(identificacion)}
      />

      <TextInput
        label="Nombre del Alumno"
        value={nombres}
        onChangeText={(nombres) => setNombres(nombres)}
      />

      <TextInput
        label="Materia"
        value={materia}
        onChangeText={(materia) => setMateria(materia)}
      />

      <TextInput
        label="Nota momento 1"
        value={nota1}
        onChangeText={(nota1) => setNota1(nota1)}
      />

      <TextInput
        label="Nota momento 2"
        value={nota2}
        onChangeText={(nota2) => setNota2(nota2)}
      />

      <TextInput
        label="Nota momento 3"
        value={nota3}
        onChangeText={(nota3) => setNota3(nota3)}
      />

      <Text style={{ marginTop: 12 }} variant="titleMedium">
        Nota definitiva
      </Text>
      <Text variant="titleLarge">{definitiva}</Text>

      <Text style={{ marginTop: 12 }} variant="titleMedium">
        Observacion
      </Text>
      <Text variant="titleLarge">{observacion}</Text>

      <Button
        style={{ marginTop: 24 }}
        icon="Calculate"
        mode="contained"
        onPress={calcularDefinitiva}
      >
        Calcular
      </Button>
      <Button
        style={{ marginTop: 24 }}
        icon="Save"
        mode="contained"
        onPress={guardar}
      >
        Guardar
      </Button>
      <Button
        style={{ marginTop: 8 }}
        icon="backspace"
        mode="contained"
        onPress={limpiar}
      >
        Limpiar
      </Button>
      <Button
        style={{ marginTop: 8 }}
        icon="camera"
        mode="contained"
        onPress={buscar}
      >
        Buscar
      </Button>
    </View>
  );
};


export default Formulario;
