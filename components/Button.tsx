import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

interface ButtonProps {
    text: string;
    action: any;
    style?: ViewStyle | ViewStyle[];  // Optional 'style' prop
}

export default function Button({ text, action, style }: ButtonProps) {
    return (
        <Link href={action} style={[styles.container, style]} asChild>
            <TouchableOpacity>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#42C83C",
        width: "80%",
        alignSelf: "center",
        marginVertical: 35,
        paddingVertical: 15,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
    },
});
