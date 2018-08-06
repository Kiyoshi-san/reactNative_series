import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import SerieCard from "../components/SerieCard";

import series from "../../series.json"

const fn_isPar = numero => numero % 2 === 0;


const SeriesPage = (props) => (
	<View>
		<FlatList
			data={ series }
			renderItem={({ item, index }) => (
				<SerieCard 
					serie={item} 
					isPrimeiraColuna={ fn_isPar(index) }
					// navegar={serie => props.navigation.navigate("SerieDetailPage", serie)}
					navegar={() => props.navigation.navigate("PaginaDetalhe", { serie: item })}
				/>
			)}
			// QDO CARREGAMOS UM JSON, É ESPERADO UMA KEY DO OBJETO, PARA ISSO UTILIZAREMOS A keyExtractor - COMO A ID É UNICA SERVIRA DE KEY
			// SE O JSON IMPORTADO, JA TIVESSE UM ATTR CHAMADO "key" NAO PRECISARIA DESTE RECURSO
			keyExtractor={item => item.id}
			numColumns={2}
			ListHeaderComponent={props => (
				<View style={estilo.jaja}>
					<Text>Header</Text>
				</View>
			)}
			ListFooterComponent={props => (
				<View style={estilo.jaja}>
					<Text>Footer</Text>
				</View>
			)}
		/>
	</View>
);

const estilo = StyleSheet.create({

});

export default SeriesPage;