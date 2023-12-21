import React, { Component } from 'react'
import {
    View, Text, StatusBar, TouchableOpacity
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Ionicons } from '@expo/vector-icons';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jasa: [
                { namaJasa: 'cuci', deskripsi: 'Layanan Cuci Plus Plus', icon: 'rocket', route: 'Cuci' },
                { namaJasa: 'setrika', deskripsi: 'Layanan Strika Plus Plus', icon: 'shirt', route: '' },
                { namaJasa: 'cuci sepatu', deskripsi: 'Layanan Cuci Sepatu Plus Plus', icon: 'ios-american-football', route: '' },
                { namaJasa: 'admin', deskripsi: 'Admin Laundry', icon: 'shirt', route: 'Admin' },
            ]
        };
    }
    render() {
        return (

            <View>
                <StatusBar barStyle='#FFF' backgroundColor='#81D4FA' />
                <Text style={{
                    textAlign: 'center',
                    color: '#FFF',
                    paddingVertical: 15,
                    fontWeight: 'bold',
                    backgroundColor: '#3949AB',
                    elevation: 3
                }}>Laoundry App</Text>

                <FlatGrid
                    itemDimension={130}
                    // data={[1, 2, 3, 4, 5, 6]}
                    data={this.state.jasa}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                paddingVertical: 20,
                                height: 200,
                                paddingHorizontal: 10,
                                backgroundColor: '#29B6F6',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => this.props.navigation.navigate(item.route)}>
                            <Ionicons name={item.icon} size={24} color="#FFF" />
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{item.namaJasa}</Text>
                            <Text style={{ color: '#FFF', textAlign: 'center' }}>{item.deskripsi}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

export default Home;