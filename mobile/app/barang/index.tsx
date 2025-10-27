import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { FAB, TextInput } from 'react-native-paper'
import { Colors } from '@/constants/color'
import Feather from "react-native-vector-icons/Feather";
import axios from 'axios'

export default function BarangViewPage() {

    // react hook (useEffect)
    useEffect(() => {
        // panggil fungsi getData
        getData();
    })

    // buat fungsi untuk ambil data barang (GET)
    const getData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // return response;
    }

    return (
        <View style={styles.frame}>
            <Text style={styles.title}>Tampil Data Barang</Text>
            {/* <Text style={[styles.title]}>Contoh CSS (Internal)</Text>
            <Text style={{textAlign: 'center', color:'red', backgroundColor: 'yellow'}}>Halaman Tampil Barang</Text> */}

                {/* komponen search */}
                <View style={{ width: "100%" }}>
                    <TextInput
                        label="Cari Data Barang"
                        // secureTextEntry
                        right={
                            <TextInput.Icon 
                                icon={() => <Feather name="search" size={20} color="gray" onPress={() => console.log('Pressed')} />} 
                            />
                        }
                        style={{ backgroundColor: Colors.white }}
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
        backgroundColor: Colors.white,
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