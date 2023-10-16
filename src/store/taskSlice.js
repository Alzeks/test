
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload]
    },
    setTaskDone: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) { task.status = 'done' }
      })
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload
      )
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload
        }
        return task
      })
    },
  },
})

export const { deleteTask, addTask, setTaskDone, updateTask } = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default taskSlice.reducer