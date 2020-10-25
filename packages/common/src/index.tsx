import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="增加" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

export default App;
