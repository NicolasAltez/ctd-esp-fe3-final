export const initialState = {theme: "light", dentists: []}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME":
            return {...state, theme: action.payload}
        case "SET_DENTISTS":
            return {...state, dentists: action.payload}
        default:
            return state
    }
};