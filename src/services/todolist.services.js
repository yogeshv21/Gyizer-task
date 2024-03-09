export const getDataFromStorage = () => {
    try {
        const data = localStorage.getItem("todoList");
        if (data) return JSON.parse(data);
        return null;
    } catch (error) {
        return null;
    }
};

export const setDataToStorage = (value) => {
    const data = JSON.stringify(value);
    localStorage.setItem("todoList", data);
};

export const removeDataFromStorage = () => {
    try {
        localStorage.removeItem("todoList");
        return true;
    } catch (error) {
        return null;
    }
};

export const clearStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        return null;
    }
};