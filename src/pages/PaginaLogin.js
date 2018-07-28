import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Button,
	ActivityIndicator /*Simbolo do Loading*/

} from "react-native";
import LinhaFormulario from "../components/LinhaFormulario";
import firebase from "firebase";

export default class PaginaLogin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			senha: "",
			estaCarregando: false,
			mensagem: "",
		}
	}

	/*componentDidMount - é um método LifeCycle do React, portanto será acionado assim que o componente for montado - equivalente ao onReady do JQuery*/
	componentDidMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyDkNY25plEQnLw-aRRQLHIILVxpFrJG-5k",
			authDomain: "series-f40c5.firebaseapp.com",
			databaseURL: "https://series-f40c5.firebaseio.com",
			projectId: "series-f40c5",
			storageBucket: "series-f40c5.appspot.com",
			messagingSenderId: "227328473985"
		};
		firebase.initializeApp(config);

	}

	/*fn_atualiza_valor_simult(valor) {
		this.setState ({
			email: valor,
		})
	}
	fn_atualiza_senha_simult(senha) {
		this.setState ({ 		senha: senha
		})
	}
	OU
	*/
	fnMudouInput(referencia, valor) {

		//	const newState = {};

		//	/*referencia == "email" ? this.setState({
		//		email: valor,
		//	});*/

		//	/*busca a propriedade em tempo de execução - só qdo recebe o valor da variável*/

		//	// o objeto newState vai buscar uma propriedade cujo valor é igual a referencia recebida
		// newState[referencia] = value;
		//	this.setState(newState);

		//OU

		this.setState({
			[referencia]: valor
		});
	}


	tentaLogar() {
		this.setState({ estaCarregando: true });
		const { email, senha } = this.state;

		firebase
			.auth()
			// .signInWithEmailAndPassword("teste@teste.com","12341234")
			.signInWithEmailAndPassword(email, senha)
			.then(usuario => {
				// console.log("Usuario autenticado!", usuario);
				this.setState({ mensagem: "Sucesso!" });
			})
			.catch(erro => {
				// console.log("Usuario nao encontrado!", erro);
				this.setState({ mensagem: "Nao foi possivel logar!" })
			})
			.then(() => this.setState({ estaCarregando: false }));
	}

	renderizarBotao() {
		if (this.state.estaCarregando)
			return <ActivityIndicator />;
		return (
			<Button 
				title="Entrar" 
				onPress={() => this.tentaLogar()}
				/>
		);
	}

	renderizarMensagem() {
		const { mensagem } = this.state;

		if(!mensagem) return null;

		return (
			<View>
				<Text>
					{ mensagem }
				</Text>
			</View>
		)
	}

	render(){
		return(
			<View style={estilo.container}>
				<LinhaFormulario primeiro>
					<TextInput 
						style={estilo.input}
						placeholder="usuario@text.com"
						value={this.state.email}

		    			/*função de callback*/
		    			/*onChangeText = { valor => this.fn_atualiza_valor_simult(valor)}
						OU
		    			*/
						onChangeText = { valor => this.fnMudouInput("email", valor) }
					/>
				</LinhaFormulario>
				<LinhaFormulario ultimo>
					<TextInput 
						style={estilo.input}
						placeholder="******"
					/*secureTextEntry={false} - por default é false - basta por - secureTextEntry*/
					secureTextEntry={true}
					value = {this.state.senha}

					/*função de callback*/
					/*onChangeText = { valor => this.fn_atualiza_senha_simult(valor)}
					OU
					*/
					onChangeText = { valor => this.fnMudouInput("senha", valor)}
					/>
				</LinhaFormulario>

				{ this.renderizarBotao() }
				{ this.renderizarMensagem() }
			</View>
		)
	}
}

const estilo = StyleSheet.create ({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
});