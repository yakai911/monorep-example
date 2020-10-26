import { createContext } from "react";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    excercise: string;
    value: number;
  }>;
}

class WorkoutStore {
  currentSquat: number;
  currentBenchPress: number;
  currentOverheadPress: number;
  currentDeadlift: number;
  currentBarbelRow: number;

  lastWorkoutType: WorkoutDay;

  history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
