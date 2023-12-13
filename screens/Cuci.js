import react, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatGrid } from 'react-native-super-grid';

class Cuci extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftarJenisPakaian: [
                { nama: 'Baju', harga: 2000, jumlah: 0, icon: 'shirt' },
                { nama: 'Celana', harga: 2500, jumlah: 0, icon: 'shirt' },
                { nama: 'Jaket', harga: 4000, jumlah: 0, icon: 'shirt' },
            ],
            total: 0
        };
    }

    editQty = (command, index) => {
        let daftarJenisPakaian = [...this.state.daftarJenisPakaian]; // Gunakan spread operator untuk membuat salinan array
        if (command === '+') {
            daftarJenisPakaian[index].jumlah++;
        } else {
            if (daftarJenisPakaian[index].jumlah > 0) {
                daftarJenisPakaian[index].jumlah--;
            }
        }
        this.hitungTotal();
        this.setState({ daftarJenisPakaian });
    };
    
    hitungTotal = () => {
        let daftarJenisPakaian = this.state.daftarJenisPakaian;
        let total = 0;
        for (let i = 0; i < daftarJenisPakaian.length; i++) {
            total += daftarJenisPakaian[i].harga * daftarJenisPakaian[i].jumlah;
        }
        this.setState({ total });
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: '#3949AB', elevation: 3, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10,
                    paddingVertical: 15,
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#FFF',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        backgroundColor: '#3949AB',
                        elevation: 3
                    }}>Layanan Cuci</Text>
                </View>
                <FlatGrid
                    itemDimension={130}
                    data={this.state.daftarJenisPakaian}
                    renderItem={({ item, index }) => (

                        <View style={{ backgroundColor: '#03a9f4', borderRadius: 6, elevation: 3, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, }}>
                            <Ionicons name={item.icon} size={24} color="#FFFFFF" />
                            <Text
                                style={{ color: '#FFFFFF', marginTop: 10, fontWeight: 'bold' }}>
                                {item.nama}
                            </Text>
                            <Text style={{ color: '#FFFFFF' }}>{item.harga}</Text>
                            <Text style={{ color: '#FFFFFF' }}>{item.jumlah}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.editQty('-', index)}>
                                    <Ionicons name="remove-circle" size={24} color="#FFFFFF" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.editQty('+', index)}>
                                    <Ionicons name="add-circle" size={24} color="#FFFFFF" />
                                </TouchableOpacity>


                            </View>
                        </View>
                    )}
                />
                <View style={{paddingVertical:20, backgroundColor: '#03a9f4'}}>
                    <Text style={{color: '#FFFFFF', marginLeft:20}}>
                        Total : <Text style= {{fontWeight: 'bold'}}>{this.state.total} </Text>
                        </Text>
                </View>
            </View>
        )
    }
}

export default Cuci;