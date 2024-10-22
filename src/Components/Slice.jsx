import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  tasks: []
};

const todoslice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      const newTask = { index: state.tasks.length, task: action.payload };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.index !== action.payload);
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      const taskEdit = state.tasks.find((task) => task.index === index);
      if (taskEdit) {
        taskEdit.task = updatedTask; 
      }
    }
  }
});

export const { addTask, deleteTask, editTask } = todoslice.actions;
export default todoslice.reducer;























// const initial={
//     backgroundColor:'white'
// }

// const colorSlice=createSlice({
//     name: 'color',
//     initialState:initial,
//     reducers:{
//         changeColor:(state,action)=>{
//             state.backgroundColor=action.payload;
//         }
//     }

// })
// export const {changeColor}=colorSlice.actions;
// export default colorSlice.reducer;