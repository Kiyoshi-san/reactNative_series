import React from "react";
import { StyleSheet, View, Text } from "react-native";

/* export default class SeriesDetailPage extends React.Component {
    render() {
        return(
            <View>
                <Text>Pagina Serie Detail</Text>
            </View>
        );
    }
} */

const SeriesDetailPage = props => (
    <View>
        <Text>{props.navigation.state.params.serie.title}</Text>
    </View>
);

const estilo = StyleSheet.create ({

});

export default SeriesDetailPage;