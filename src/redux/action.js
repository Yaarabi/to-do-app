

export const getTasks = () => {
  return {
    type: 'GET'
  };
};

export const addTask = (task) => {
    return {
        type: "ADD",
        payload: task
    }; 
}

export const update = (task) => {
    return {
        type: "UPDATE",
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETE",
        payload: { id }
    };
}

export const isDoneTask = () => {
    return {
        type: "ISDONE"
    };
}

export const isNotDoneTask = () => {
    return {
        type: "ISNOT"
    };
}