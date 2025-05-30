

export const getTasks = () => {
  return {
    type: 'GET'
  };
};

export const addTask = () => {
    return {
        type: "ADD"
    };
}

export const deleteTask = () => {
    return {
        type: "DELETE"
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