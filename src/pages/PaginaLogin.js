import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import LinhaFormulario from "../components/LinhaFormulario";

export default class PaginaLogin extends React.Component {
  render(){
    return(
    	<View>
    		<LinhaFormulario>
    			<TextInput 
    				style={estilo.input}
    				placeholder="usuario@text.com"
    			/>
    		</LinhaFormulario>
    		<LinhaFormulario>
    			<TextInput 
    				style={estilo.input}
    				placeholder="******"
    			/*secureTextEntry={false} - por default é false - basta por - secureTextEntry*/
    			secureTextEntry={true}
    			/>
    		</LinhaFormulario>
    	</View>
    )
  }
}

const estilo = StyleSheet.create ({
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	}
});