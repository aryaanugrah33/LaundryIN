import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

    render() {
        return <View>
            <FlatGrid
                itemDimension={130}
                data={this.state.transaksi}
                renderItem={({ item, index }) => (

                    <TouchableOpacity style={{ backgroundColor: '#03a9f4', borderRadius: 6, elevation: 3, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, }}
                        onPress={() => this.setState({ transaksiModal: true, selectedItemIndex: index, })}>
                        <Ionicons name={item.icon} size={24} color="#FFFFFF" />
                        <Text
                            style={{ color: '#FFFFFF', marginTop: 10, fontWeight: 'bold' }}>
                            {item.nama}
                        </Text>
                        <Text style={{ color: '#FFFFFF' }}>{item.alamat}</Text>
                    </TouchableOpacity>
                )}
            />
            <Modal isVisible={this.state.transaksiModal}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 6, }}>
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

                    <TouchableOpacity style={{
                        backgroundColor: '#212121',
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomRightRadius: 6,
                        borderBottomLeftRadius: 6,
                    }}
                        onPress={() => this.setState({ transaksiModal: false })}>
                        <Text style={{ color: '#FFFFFF' }}>
                            selesai
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>;
    }
}

export default Admin;