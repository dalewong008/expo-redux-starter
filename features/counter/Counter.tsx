import React from "react";
import type { RootState } from "../../store";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

type Styles = {
  container: ViewStyle;
  counter: TextStyle;
  button: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 32,
    marginBottom: 12,
  },
  button: {
    // Example button styling
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}
        accessibilityLabel="Increment value"
      >
        <Text style={{ color: "#ffffff" }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decrement())}
        accessibilityLabel="Decrement value"
      >
        <Text style={{ color: "#ffffff" }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
