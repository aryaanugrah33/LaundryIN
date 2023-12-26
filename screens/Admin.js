import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaksi: [{ nama: '', harga: 0, jumlah: 0, icon: '' }],
            transaksiModal: false,
            selectedItemIndex: 0,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            let value = await AsyncStorage.getItem('@transaksi');
            value = JSON.parse(value);

            if (value !== null) {
                this.setState({ transaksi: value });
            }
            console.log('data berhasil di get', value);
        } catch (e) {
            console.log('data tidak di get');
        }
    };

    handleEdit = () => {
        // Implementasi logika untuk proses edit data
        // Misalnya, membuka halaman edit dengan data terpilih
        // atau menampilkan modal edit
        console.log('Edit data dengan index:', this.state.selectedItemIndex);
        // Contoh: Navigasi ke halaman edit dengan menggunakan react-navigation
        // this.props.navigation.navigate('EditScreen', { index: this.state.selectedItemIndex });
    };

    handleDelete = () => {
        // Implementasi logika untuk proses delete data
        // Misalnya, menampilkan konfirmasi penghapusan
        Alert.alert(
            'Konfirmasi',
            'Anda yakin ingin menghapus transaksi ini?',
            [
                {
                    text: 'Batal',
                    style: 'cancel',
                },
                {
                    text: 'Hapus',
                    onPress: () => this.confirmDelete(),
                },
            ],
            { cancelable: false }
        );
    };

    confirmDelete = () => {
        // Implementasi logika untuk menghapus data
        // Misalnya, hapus data dari AsyncStorage dan refresh halaman
        console.log('Hapus data dengan index:', this.state.selectedItemIndex);

        // Dapatkan transaksi saat ini
        const currentTransaksi = [...this.state.transaksi];

        // Hapus item dengan index yang dipilih
        currentTransaksi.splice(this.state.selectedItemIndex, 1);

        // Simpan data yang diperbarui di AsyncStorage
        this.saveData(currentTransaksi);

        // Perbarui state dan tutup modal
        this.setState({
            transaksi: currentTransaksi,
            transaksiModal: false,
        });
    };

    saveData = async (data) => {
        try {
            await AsyncStorage.setItem('@transaksi', JSON.stringify(data));
        } catch (e) {
            console.log('Gagal menyimpan data', e);
        }
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.transaksi}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#03a9f4',
                                borderRadius: 6,
                                elevation: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: 20,
                                marginBottom: 10,
                            }}
                            onPress={() => this.setState({
                                transaksiModal: true,
                                selectedItemIndex: index,
                            })}>
                            <Ionicons name={item.icon} size={24} color="#FFFFFF" />
                            <Text style={{ color: '#FFFFFF', marginTop: 10, fontWeight: 'bold' }}>
                                {item.nama}
                            </Text>
                            <Text style={{ color: '#FFFFFF' }}>{item.alamat}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <TouchableOpacity onPress={this.handleEdit} style={{ marginRight: 10 }}>
                                    <Ionicons name="create" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handleDelete}>
                                    <Ionicons name="trash" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                />

                <Modal isVisible={this.state.transaksiModal}>
                    <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 6 }}>
                        <View style={{ flex: 1 }}>
                            <FlatGrid
                                itemDimension={130}
                                data={this.state.transaksi[this.state.selectedItemIndex].cart}
                                renderItem={({ item, index }) => (

                                    <TouchableOpacity style={{ backgroundColor: '#03a9f4', borderRadius: 6, elevation: 3, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, }}
                                        onPress={() => this.setState({ transaksiModal: true, selectedItemIndex: index })}>
                                        <Text
                                            style={{ color: '#FFFFFF', marginTop: 10, fontWeight: 'bold' }}>
                                            {item.nama}
                                        </Text>
                                        <Text style={{ color: '#FFFFFF' }}>{item.harga}</Text>
                                        <Text style={{ color: '#FFFFFF' }}>{item.jumlah}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: '#212121',
                                paddingVertical: 20,
                                paddingHorizontal: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomRightRadius: 6,
                                borderBottomLeftRadius: 6,
                            }}
                            onPress={() => this.setState({ transaksiModal: false })}>
                            <Text style={{ color: '#FFFFFF' }}>selesai</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Admin;
