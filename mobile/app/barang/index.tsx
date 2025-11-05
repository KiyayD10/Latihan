import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, FAB, TextInput } from 'react-native-paper'
import { Colors } from '@/constants/color'
import { Feather } from "@expo/vector-icons";
import axios from 'axios'

export default function BarangViewPage() {

    // react hook (useEffect)
    useEffect(() => {
        // panggil fungsi getData
        getData();
    });

    // react hook (useState)
    const [data, setData] = useState<{id: number; kode: string; nama: string; harga: number; satuan: string} []>([]);

    // buat fungsi untuk ambil data barang (GET)
    const getData = async () => {
        await axios.get('http://10.122.250.72:3001/api/barang')
        .then(function (response) {
            // console.log(response.data.barang);
            setData(response.data.barang);
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
                {/* <Text>
                    {data.map((item, index) => (
                        <Text key={index.id}>{item.satuan}></Text>
                    ))}
                </Text> */}

                {/* {data.map((item, index) => ( */}
                <FlatList
                    data={data}
                    style={{ width: "100%", backgroundColor: Colors.sponsor }}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ padding: 10 }}
                    renderItem={({ item }) => (
                        <Card key={item.id} style={styles.card}>
                            <Card.Title
                                title={item.nama}
                                subtitle={item.harga}
                            />
                            <Card.Actions>
                                <Button style={styles.card_button_primary}>
                                    <Feather name="trash" size={20} color="white" onPress={() => console.log('delete')} />
                                </Button>
                                <Button style={styles.card_button_secondary}>
                                    <Feather name="edit" size={20} color="blue" onPress={() => console.log('edit')} />
                                </Button>
                            </Card.Actions>
                        </Card>
                    )}
                />
                {/* ))} */}

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
    card: {
        width: '90%',
        margin: 10,
    },
    card_button_primary: {
        backgroundColor: Colors.sponsor,
        color: Colors.white,
    },
    card_button_secondary: {
        color: Colors.white,
        backgroundColor: Colors.white,
    },
});