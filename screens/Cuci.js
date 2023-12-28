import react, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";

class Cuci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftarJenisPakaian: [
        {
          nama: "Baju",
          harga: 2000,
          jumlah: 0,
          image: require("../assets/baju.png"),
        },
        {
          nama: "Celana",
          harga: 2500,
          jumlah: 0,
          image: require("../assets/celana.png"),
        },
        {
          nama: "Jaket",
          harga: 4000,
          jumlah: 0,
          image: require("../assets/jaket.png"),
        },
      ],
      cart: [],
      total: 0,
      totalModal: false,
      nama: "",
      alamat: "",
      transaksi: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem("@transaksi");
      value = JSON.parse(value);

      if (value !== null) {
        this.setState({ transaksi: value });
      }
      console.log("data berhasil di get", value);
    } catch (e) {
      console.log("data tidak di get");
    }
  };

  saveData = async () => {
    try {
      await AsyncStorage.setItem(
        "@transaksi",
        JSON.stringify(this.state.transaksi)
      );
      console.log("data berhasil disimpan");
    } catch (e) {
      console.log("data tidak disimpan");
    }
  };

  prosesTransaksi = () => {
    let detailTransaksi = {
      nama: this.state.nama,
      alamat: this.state.alamat,
      cart: this.state.cart,
    };

    let transaksi = this.state.transaksi;
    transaksi.push(detailTransaksi);
    this.saveData();

    this.setState({
      nama: "",
      alamat: "",
      cart: [],
      daftarJenisPakaian: [
        {
            nama: "Baju",
            harga: 2000,
            jumlah: 0,
            image: require("../assets/baju.png"),
          },
          {
            nama: "Celana",
            harga: 2500,
            jumlah: 0,
            image: require("../assets/celana.png"),
          },
          {
            nama: "Jaket",
            harga: 4000,
            jumlah: 0,
            image: require("../assets/jaket.png"),
          },
      ],
    });
  };

  editQty = (command, index) => {
    let daftarJenisPakaian = [...this.state.daftarJenisPakaian]; // Gunakan spread operator untuk membuat salinan array
    if (command === "+") {
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

  displayCheckout = () => {
    let daftarJenisPakaian = [...this.state.daftarJenisPakaian];
    for (let i = 0; i < daftarJenisPakaian.length; i++) {
      if (daftarJenisPakaian[i].jumlah == 0) {
        daftarJenisPakaian.splice(i--, 1);
      }
      // total += daftarJenisPakaian[i].harga * daftarJenisPakaian[i].jumlah;
    }
    this.setState({ cart: daftarJenisPakaian, totalModal: true });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#3949AB",
            elevation: 3,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Ionicons name="arrow-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#FFF",
              fontWeight: "bold",
              marginLeft: 10,
              backgroundColor: "#3949AB",
              elevation: 3,
            }}
          >
            Layanan Cuci
          </Text>
        </View>
        <FlatGrid
          itemDimension={130}
          data={this.state.daftarJenisPakaian}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#03a9f4",
                borderRadius: 6,
                elevation: 3,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <Image source={item.image} style={{ width: 100, height: 100 }} />
              <Text
                style={{ color: "#FFFFFF", marginTop: 10, fontWeight: "bold" }}
              >
                {item.nama}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>{item.jumlah}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => this.editQty("-", index)}>
                  <Ionicons name="remove-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.editQty("+", index)}>
                  <Ionicons name="add-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <View
          style={{
            backgroundColor: "#03a9f4",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#FFFFFF", marginLeft: 20 }}>
              Total :{" "}
              <Text style={{ fontWeight: "bold" }}>
                Rp{" "}
                {this.state.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#212121",
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}
            onPress={() => this.displayCheckout()}
          >
            <Text style={{ color: "#FFFFFF" }}>selesai</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.totalModal}>
          <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 28 }}
            >
              Total
            </Text>
            <FlatGrid
          itemDimension={130}
          data={this.state.daftarJenisPakaian}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#03a9f4",
                borderRadius: 6,
                elevation: 3,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <Image source={item.image} style={{ width: 100, height: 100 }} />
              <Text
                style={{ color: "#FFFFFF", marginTop: 10, fontWeight: "bold" }}
              >
                {item.nama}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>
                Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Text>
              <Text style={{ color: "#FFFFFF" }}>{item.jumlah}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => this.editQty("-", index)}>
                  <Ionicons name="remove-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.editQty("+", index)}>
                  <Ionicons name="add-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
            <View style={{ marginVertical: 20 }}>
              <TextInput
                style={{ borderBottomWidth: 1, marginHorizontal: 20 }}
                value={this.state.nama}
                placeholder="masukkan nama pelanggan"
                onChangeText={(text) => this.setState({ nama: text })}
              />
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
                value={this.state.alamat}
                placeholder="masukkan alamat"
                onChangeText={(text) => this.setState({ alamat: text })}
              />
            </View>

            <Text style={{ marginVertical: 20, textAlign: "center" }}>
              Total :{" "}
              <Text style={{ fontWeight: "bold" }}>
                Rp{" "}
                {this.state.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              </Text>
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "crimson",
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => this.setState({ totalModal: false })}
              >
                <Text style={{ color: "#FFFFFF" }}>cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#212121",
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() =>
                  this.setState({ totalModal: false }, () =>
                    this.prosesTransaksi()
                  )
                }
              >
                <Text style={{ color: "#FFFFFF" }}>selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Cuci;
