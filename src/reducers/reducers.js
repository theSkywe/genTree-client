const initialState = [
    {
        id: 1,
        name: "One",
        image: "you.png",
        lft: 1,
        rgt: 11,
        depth: 0
    },
    {
        id: 2,
        name: "Two",
        image: "you.png",
        lft: 3,
        rgt: 4,
        depth: 1
    },
    {
        id: 3,
        name: "Three",
        image: "you.png",
        lft: 5,
        rgt: 10,
        depth: 1
    },
    {
        id: 4,
        name: "Four",
        image: "you.png",
        lft: 6,
        rgt: 7,
        depth: 2
    },
    {
        id: 5,
        name: "Five",
        image: "you.png",
        lft: 8,
        rgt: 9,
        depth: 2
    },
]

export default function treeReducer(state=initialState, action) {
    switch (action.type) {
        case "UPDATE_TREE": {
            return action.response
        }
        default: return state 
    }
}
