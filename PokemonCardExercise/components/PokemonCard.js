import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" }
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" }
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" }
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" }
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" }

    }
}


export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>♥{hp}</Text>
            </View>

            <Image source={image}
                style={styles.image}
                resizeMode='contain'
                accessibilityLabel={`${name} pokemon`} />

            <View>
                <Text>{type}</Text>
            </View>

            <View>
                <Text>Moves:{moves.join(",")}</Text>
            </View>

            <View>
                <Text>Weaknesses:{weaknesses.join(",")}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    }
})