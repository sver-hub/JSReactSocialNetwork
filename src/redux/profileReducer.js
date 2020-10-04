const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

const initialState =
    {
    userData: null,

    posts: [
        {
            userName: 'steffuld',
            date: 'Sem 13, 22:10',
            message: 'message 1',
            likes: 32,
            comments: 2,
            shares: 14,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
        {
            userName: 'steffuld',
            date: 'Sem 12, 13:24',
            message: 'message 2',
            likes: 312,
            comments: 14,
            shares: 120,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
    ],
}


export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :

            let newPost = {
                userName: 'Sver',
                date: 'Sem 13, 22:10',
                message: state.newPostText,
                likes: 0,
                comments: 0,
                shares: 0,
                imgUrl: 'https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg'
            }

            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            }


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            }

        default:
            return state
    }
}