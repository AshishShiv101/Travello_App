import Colors from '@/constants/Colors'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export class Login extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                {/* Background Image */}
                <Image
                    source={require('./../assets/images/login.jpg')}
                    style={styles.image}
                />

                {/* Login Form Container */}
                <View style={styles.container}>
                    {/* Overlay Text (Travello & Subtitle) */}
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Travello</Text>
                        <View style={styles.subtitleContainer}>
                            <Text style={styles.subtitle}>Explore the unexplored.</Text>
                            <Text style={styles.subtitle}>Create unforgettable memories.</Text>
                            <Text style={styles.subtitle}>Live your adventure.</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signInButton}>
                            <Text style={styles.signInButtonText}>Get Started</Text>
                            {/* Right Arrow Icon */}
                            <FontAwesome name="arrow-right" size={20} color="#fff" style={styles.arrowIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    image: {
        width: '100%',
        height: 500, // Increased image height
    },
    overlay: {
        alignItems: 'center',
        marginTop: 20, // Reduced top margin
    },
    title: {
        fontSize: 36,
        fontFamily: 'lato-bold',
        textAlign: 'center',
        color: Colors.textPrimary,
        marginBottom: 15,
        letterSpacing: 1,
    },
    subtitleContainer: {
        alignItems: 'center',
        marginTop: 5, // Reduced margin
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.textPrimary,
        marginBottom: 6, // Reduced margin
        lineHeight: 24,
        fontFamily: 'lato-regular',
        opacity: 0.9,
    },
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        maxHeight: 280, // Added maxHeight to limit white background
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: 30, // Reduced bottom padding
    },
    signInButton: {
        width: '100%',
        backgroundColor: Colors.textPrimary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    arrowIcon: {
        marginLeft: 10,
    },
})

export default Login