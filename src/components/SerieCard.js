import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";

const SerieCard = ({ serie, isPrimeiraColuna, navegar }) => (
    <TouchableOpacity 
        // onPress={() => navegar(serie)}
        onPress={navegar}
        style={[
            estilo.container, 
            isPrimeiraColuna ? estilo.primeiraColuna : estilo.ultimaColuna
    ]}>
        <View style={estilo.card}>
            <Image 
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={estilo.cardTitleWrapper}>
                {/* <Text>{`${serie.id} - ${serie.title}`}</Text> */}
                <Text style={estilo.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const estilo = StyleSheet.create({
    container: {
        // flex: 1,
        width: "50%",
        height: Dimensions.get("window").width / 2,
        padding: 5,
        
    },
    card: {
        flex: 1,
        borderWidth: 1
    },
    cardTitleWrapper: {
        backgroundColor: "#000",
        height: 50,
        
        position: "absolute",
        bottom: 0,
        opacity: .8,

        width: "100%",

        paddingTop: 10,
        paddingBottom: 10,

        paddingLeft: 5,
        paddingRight: 5,

        alignItems: "center"
    },
    cardTitle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold"
    },
    primeiraColuna: {
        paddingLeft: 10
    },
    ultimaColuna: {
        paddingRight: 10        
    }
});

export default SerieCard;