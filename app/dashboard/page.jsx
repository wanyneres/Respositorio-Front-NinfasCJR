"use client";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, Pressable} from "react-native";


const Modal = () => {
    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <Pressable style={styles.button} onPress={() => setModalVisivel(true)}>
            <Text style={styles.buttonText}></Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({});

export default Modal;