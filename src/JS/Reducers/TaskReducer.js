import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Action Type/ActionType";

//initialState
const initialState = {
  Tasks: [
    {
      id: Math.random(),
      name: "Task 1",
      IsDone: false,
    },
    {
      id: Math.random(),
      name: "Task 2",
      IsDone: true,
    },
    {
      id: Math.random(),
      name: "Task 3",
      IsDone: false,
    },
  ],
};
//pure function
const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state, 
        Tasks: [...state.Tasks, payload] 
      };
      
    case DELETE_TASK:
      return {
        ...state,
        Tasks:state.Tasks.filter(el=>el.id!==payload)
      };
      
    case DONE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((e) =>
          e.id == payload ? { ...e, IsDone: !e.IsDone } : e)
      };
    case EDIT_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((e) =>
          e.id == payload.id ? { ...e, name: payload.newName } : e)
      };
    default:
      return state;
  }
};
export default TaskReducer;
