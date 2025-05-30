import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "@/src/BasicComponents/Button/button";
import React from "react";

export default function ButtonEx() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.module}>
          <View>
            <Text style={styles.title}>Type</Text>
          </View>
          <View style={styles.group}>
            <Button title="Solid" />
            <Button title="Outline" type="outline" />
            <Button title="Clear" type="clear" />
          </View>
        </View>
        <View style={styles.module}>
          <View>
            <Text style={styles.title}>Size</Text>
          </View>
          <View style={styles.group}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </View>
        </View>
        <View style={styles.module}>
          <View>
            <Text style={styles.title}>Color</Text>
          </View>
          <View style={styles.group}>
            <Button color="secondary">Secondary</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
          </View>
        </View>
        <View style={styles.module}>
          <View>
            <Text style={styles.title}>Disabled</Text>
          </View>
          <View style={styles.group}>
            <Button title="Solid" disabled />
            <Button title="Outline" type="outline" disabled />
            <Button title="Clear" type="clear" disabled />
          </View>
        </View>
        <View style={styles.module}>
          <View>
            <Text style={styles.title}>Loading</Text>
          </View>
          <View style={styles.group}>
            <Button title="Solid" type="solid" loading />
          </View>
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.subHeader}>Basic Buttons</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title={"React Native Elements"}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="Basic Button"
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="Dark"
            buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />

          <Button
            title="Log in"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "rgba(111, 202, 186, 1)",
              borderRadius: 5,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
            }}
            onPress={() => console.log("aye")}
          />
          <Button
            title="Secondary"
            buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{
              color: "white",
              marginHorizontal: 20,
            }}
          />
          <Button
            title="Warning"
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            buttonStyle={{ backgroundColor: "rgba(255, 193, 7, 1)" }}
            titleStyle={{
              color: "white",
              marginHorizontal: 20,
            }}
          />
          <Button
            title="Danger"
            buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />
          <Button
            title="Request an agent"
            titleStyle={{ fontWeight: "500" }}
            buttonStyle={{
              backgroundColor: "rgba(199, 43, 98, 1)",
              borderColor: "transparent",
              borderWidth: 0,
            }}
            containerStyle={{
              width: 200,
              height: 45,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>

        <Text style={styles.subHeader}>Rounded Buttons</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>

        <Text style={styles.subHeader}>Light Buttons</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="SIGN UP"
            disabled={true}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
            }}
            containerStyle={{
              width: 200,
              height: 45,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="Outline Button"
            buttonStyle={{
              borderColor: "rgba(78, 116, 289, 1)",
            }}
            type="outline"
            titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="Raised Button"
            buttonStyle={{
              borderColor: "rgba(78, 116, 289, 1)",
            }}
            type="outline"
            raised
            titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            title="Clear Button"
            type="clear"
            titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
          />
          <Button
            title="Light"
            buttonStyle={{
              backgroundColor: "rgba(244, 244, 244, 1)",
              borderRadius: 3,
            }}
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ marginHorizontal: 20, color: "black" }}
          />
        </View>
        <Text style={styles.subHeader}>Loading Buttons</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="HOME"
            loading
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(111, 202, 186, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              paddingVertical: 5,
            }}
            containerStyle={{
              width: 200,
              height: 40,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="SIGN UP"
            loading={true}
            loadingProps={{
              size: "small",
              color: "rgba(111, 202, 186, 1)",
            }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              paddingVertical: 10,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  module: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  group: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
