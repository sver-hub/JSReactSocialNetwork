const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});

const initialState = {
    friendsSearchResult: [
        {
            id: 1,
            userName: 'Ilya Doroshenko',
            userStatus: 'Gay',
            userLocation: {country: 'Ukraine', place: 'Sevastopol'},
            imgUrl: 'https://sun1-90.userapi.com/mZbN9mOgxGWYzfzUgWx01DmAwwBfSq8MMQRsHA/owGzTmb5YYg.jpg',
            friend: false,
        },
        {
            id: 2,
            userName: 'Pavel Kizilov',
            userStatus: 'Ponimayu',
            userLocation: {country: 'Russia', place: 'Sevastopol'},
            imgUrl: 'https://sun1-19.userapi.com/c855736/v855736114/a8d46/1h5UNX9Nwr8.jpg',
            friend: true,
        },
        {
            id: 3,
            userName: 'Maxim Borsch',
            userStatus: 'Fucking Weeb',
            userLocation: {country: 'Russia', place: 'Sevastopol'},
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ahegao_by_Kira_I.png/226px-Ahegao_by_Kira_I.png',
            friend: false,
        },
        {
            id: 4,
            userName: 'Andrey Kulik',
            userStatus: 'The Machine',
            userLocation: {country: 'Ukraine', place: 'Sevastopol'},
            imgUrl: 'https://sun1-47.userapi.com/impf/xFs2enalzhXAJE7kv3_NVYaKLzLXe_e769k3pA/5-KcqDF0zik.jpg?size=200x0&quality=88&crop=128,128,1025,1025&sign=2dc392b30f0453fcf197ecc62b354df7&ava=1',
            friend: true,
        },
        {
            id: 5,
            userName: 'Efim Stulov',
            userStatus: 'Stuffuld -- CSS guru',
            userLocation: {country: 'Ukraine', place: 'Sevastopol'},
            imgUrl: 'https://sun1-98.userapi.com/impf/qvSmwMxG_nIXi_dnYO8XsyhibaUB56g13K72QQ/Pn9LL_twQO8.jpg?size=200x0&quality=88&crop=79,50,576,576&sign=669e315f68f59e8ce55516a9af9efd1f&ava=1',
            friend: true,
        }
    ]

}

export const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        case FOLLOW_UNFOLLOW :
            return {
                ...state,
                friendsSearchResult: state.friendsSearchResult.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, friend: !u.friend};
                    }
                    return u;
                })
            };

        default:
            return state;
    }
}