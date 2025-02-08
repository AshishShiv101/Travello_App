import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Otp = () => {
    const router = useRouter();
    const [otp, setOtp] = useState('');

    return (
        <View style={styles.wrapper}>
            {/* Background Image */}
            <Image source={require('./../../../assets/images/login.jpg')} style={styles.image} />

            {/* Overlay Text */}
            <View style={styles.overlay}>
                <Text style={styles.title}>Travello</Text>
                <Text style={styles.subtitle}>Verify your phone number</Text>
            </View>

            {/* OTP Form */}
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    placeholderTextColor={Colors.textSecondary}
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                />

                <TouchableOpacity style={styles.verifyButton}>
                    <Text style={styles.verifyButtonText}>Verify OTP</Text>
                </TouchableOpacity>

                <Text style={styles.resendText}>Didn't receive the code?</Text>
                <TouchableOpacity>
                    <Text style={styles.resendButton}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    image: {
        width: '100%',
        height: 400,
    },
    overlay: {
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'lato-bold',
        textAlign: 'center',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        marginTop: 5,
    },
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        marginTop: -20,
        paddingTop: 20,
        height: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    verifyButton: {
        width: '100%',
        backgroundColor: Colors.textPrimary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendText: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 10,
    },
    resendButton: {
        fontSize: 14,
        color: Colors.textPrimary,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default Otp;
