import React from "react";
import { StyleSheet, View } from "react-native";

const LinhaFormulario = props => {
	/*Propriedade children - nativa do react - herda os componentes filhos da TAG que está enviando*/
	const { children } = props;
	return (
		<View style={ estilo.container }>
			{ children }
		</View>
	)
}

const estilo = StyleSheet.create({
	container: {
		padding:10,
		backgroundColor: "#fff",
		marginTop: 5,
		marginBottom: 5,
		elevation: 1,
	}
});

export default LinhaFormulario;