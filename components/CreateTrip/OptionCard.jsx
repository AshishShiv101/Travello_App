import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OptionCard = ({ option, isSelected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={0.7}>
            <View style={[styles.card, isSelected && styles.selectedCard]}>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.title}>{option?.title}</Text>
                        <Text style={styles.desc}>{option?.desc}</Text>
                    </View>
                    <Ionicons name={option?.icon || 'airplane'} size={24} color="#333" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default OptionCard;

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'transparent', // Default no border color
    },
    selectedCard: {
        borderColor: '#000', // Blue border when selected
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    desc: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#555',
    },
});
