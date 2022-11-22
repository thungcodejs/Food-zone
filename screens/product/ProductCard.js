import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    Dimensions
} from "react-native";

let { width } = Dimensions.get("window");

const ProductCard = (props) => {
    const { image, name, price, countInStock } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} />
            <View style={styles.card} />
            <Text style={styles.title} />
            <Text style={styles.price} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
    },
    image: {

    },
    card: {

    },
    title: {

    },
    price: {

    }
})

export default ProductCard;
