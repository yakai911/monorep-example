import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = React.useContext(RouterStoreContext);

  return (
    <View>
      <Text>workout history page</Text>
      <Button
        title="create workout"
        onPress={() => {
          routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
