import React from 'react';
import {
    SectionList,
    Image,
    ToastAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Data source with colors for each section
const datasource = [
    {
        title: 'Fire',
        color: 'orange',
        data: [
            { key: 'Charmander', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png" },
            { key: 'Vulpix', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png" },
            {key: 'Chimchar', pic: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM5/SM5_EN_20.png"}
        ]
    },
    {
        title: 'Lightning',
        color: 'yellow',
        data: [
            { key: 'Pikachu', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png" },
            { key: 'Electabuzz', pic: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/EX2/EX2_EN_35.png" },
            { key: 'Jolteon', pic: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW91.png" }
        ]
    },
];

const styles = StyleSheet.create({
    titleHeader: {
        padding: 12,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#e6e6ff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    itemText: {
        fontSize: 25,
        flex: 1,
    },
    itemImage: {
        width: 150,
        height: 200,
        resizeMode: 'contain'
    }
});


const handler = (pokemonName) => {
    ToastAndroid.show(`A ${pokemonName} appeared nearby!`, ToastAndroid.SHORT);
};

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.itemCard} onPress={() => handler(item.key)}>
            <Text style={styles.itemText}>{item.key}</Text>
            <Image source={{ uri: item.pic }} style={styles.itemImage} />
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#1a75ff',
                    padding: 15,
                    margin: 10,
                    borderRadius: 8,
                }}
                onPress={() => ToastAndroid.show('Add Pokémon!', ToastAndroid.SHORT)}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    ADD POKEMON
                </Text>
            </TouchableOpacity>

            {/* SECTION LIST */}
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.key + index}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <Text style={[styles.titleHeader, { backgroundColor: section.color }]}>
                        {section.title}
                    </Text>
                )}
            />
        </View>
    );
};

export default App;