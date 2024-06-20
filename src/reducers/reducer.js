export const initialState = {theme: "light", dentists: [], favorites: []}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME":
            return {...state, theme: action.payload}
        case "SET_DENTISTS":
            return {...state, dentists: action.payload}
        case "SET_FAVORITES":
            return {...state, favorites: action.payload}
        default:
            return state
    }
};