const initialState = [
    {
        id: 1,
        name: "You",
        image: "uploaded/you.png",
        lft: 1,
        rgt: 2,
        depth: 1
    }
]

export default function treeReducer(state=initialState, action) {
    switch (action.type) {
        case "UPDATE_TREE": {
            return action.response
        }
        default: return state 
    }
}
