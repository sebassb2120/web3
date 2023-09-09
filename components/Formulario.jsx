// components/Formulario.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../assets/styles/allstyles';

const Formulario = ({ onGuardar }) => {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [notaMomento1, setNotaMomento1] = useState('');
  const [notaMomento2, setNotaMomento2] = useState('');
  const [notaMomento3, setNotaMomento3] = useState('');


    // Implementa la lógica de cálculo y validación aquí

    return (
        <View style={styles.container}>
        {/* Agrega los TextInput y otros elementos del formulario aquí */}
        <Button title="Calcular/Guardar" onPress={onGuardar} />
        <Button title="Limpiar" onPress={limpiarFormulario} />
        <Button title="Buscar" onPress={buscarInformacion} />
        </View>
    );
};

export default Formulario;