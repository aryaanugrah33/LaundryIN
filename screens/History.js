import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riwayatTransaksi: [],
        };
    }

    componentDidMount() {
        this.getRiwayatTransaksi();
    }

    getRiwayatTransaksi = async () => {
        try {
            let riwayatTransaksi = await AsyncStorage.getItem('@riwayatTransaksi');
            riwayatTransaksi = JSON.parse(riwayatTransaksi) || [];

            this.setState({ riwayatTransaksi });
            console.log('Riwayat transaksi berhasil diambil', riwayatTransaksi);
        } catch (error) {
            console.log('Gagal mengambil riwayat transaksi', error);
        }
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
                    Riwayat Transaksi
                </Text>

                <FlatList
                    data={this.state.riwayatTransaksi}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: '#03a9f4', borderRadius: 6, elevation: 3, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, margin: 10 }}>
                            <Text style={{ color: '#FFFFFF', marginTop: 10, fontWeight: 'bold' }}>
                                {item.nama}
                            </Text>
                            <Text style={{ color: '#FFFFFF' }}>{item.alamat}</Text>
                            {/* Mungkin tambahkan info lain dari transaksi di sini */}
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default History;
