import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import { Colors } from '@/constants/color'

export default function BarangViewPage() {
    return (
        <View style={styles.frame}>
            <Text style={styles.title}>Tampil Data Barang</Text>
            {/* <Text style={[styles.title]}>Contoh CSS (Internal)</Text>
            <Text style={{textAlign: 'center', color:'red', backgroundColor: 'yellow'}}>Halaman Tampil Barang</Text> */}

                {/* komponen search */}
                <View style={{ width: "100%" }}>
                    <TextInput
                        label="Password"
                        // secureTextEntry
                        right={<TextInput.Icon icon="search" />}
                    />
                </View>

                {/* komponen card */}

                {/* komponen FAB */}
            <FAB
                icon="plus"
                color= {Colors.white}
                style={styles.fab}
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

// buat style css
const styles = StyleSheet.create({
    title : {
        backgroundColor: Colors.sponsor,
        color: Colors.white,
        width: "100%",
        textAlign: "left",
        padding : 10,
        fontSize: 20
    },
    frame : {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: "red",
        // height: 500,
    },
    fab: {
        position: 'absolute',
        margin: 15,
        right: 10,
        bottom: 25,
        backgroundColor: Colors.sponsor,
        borderRadius: 35,
    },
})