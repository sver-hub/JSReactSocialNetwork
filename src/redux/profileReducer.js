const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})


export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST :
            state.posts.unshift({
                userName: 'Sver',
                date: 'Sem 13, 22:10',
                message: state.newPostText,
                likes: 0,
                comments: 0,
                shares: 0,
                imgUrl: 'https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg'
            })

            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
}