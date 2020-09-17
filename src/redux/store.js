import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const dialogList = [
    {
        id: 1,
        imgUrl: 'https://sun1-47.userapi.com/VjwdhQdrVdnj0vM83TBcr11D3iBIgIFwG-0wQA/V62nA_GEtg4.jpg?ava=1',
        dialogName: 'pm301',
        senderName: 'hui',
        previewMessage: 'pizda',
        timestamp: '22:32',
        unread: 131,
        online: true,
        status: 'online'
    },
    {
        id: 2,
        imgUrl: 'https://sun9-56.userapi.com/impf/qvSmwMxG_nIXi_dnYO8XsyhibaUB56g13K72QQ/Pn9LL_twQO8.jpg?size=100x0&quality=88&crop=79,50,576,576&sign=60277e3265ac4b1b44d290b16b48b1ff&ava=1',
        dialogName: 'steffuled',
        senderName: 'steffuled',
        previewMessage: 'lollollollollollollollollollol',
        timestamp: '22:11',
        unread: 0,
        online: false,
        status: 'last seen yesterday'
    },
    {
        id: 3,
        imgUrl: 'https://sun9-52.userapi.com/impf/c851324/v851324224/1adcb3/NFwtlV8Z_bk.jpg?size=100x0&quality=88&crop=254,176,692,692&sign=642e3daacba0f787c20d0750b86b7d34&ava=1',
        dialogName: 'karpinka',
        senderName: 'you',
        previewMessage: 'f',
        timestamp: '21:32',
        unread: 5,
        online: true,
        status: 'last seen 5 minutes ago'
    },
];

const navItems = [
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/846/846449.svg', itemUrl: '/profile', itemName: 'Profile'},
    {
        iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg',
        itemUrl: '/dialogs',
        itemName: 'Messages'
    },
    {iconUrl: 'https://www.flaticon.com/premium-icon/icons/svg/2886/2886141.svg', itemUrl: '', itemName: 'News'},
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/876/876766.svg', itemUrl: '', itemName: 'Music'},
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg', itemUrl: '', itemName: 'Settings'},
]

const userData = {
    userName: 'Sver',
    userStatus: 'Koshi for work, Geine for soul',
    imgUrl: 'https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg',
};

const posts = [
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
    }
]

const state = {
    dialogs: {
        dialogList: dialogList,
        messages: [],
        textAreaContent: '',
    },
    navItems: navItems,
    profile: {
        userData: userData,
        newPostText: '',
        posts: posts
    },
}


export let store = {
    _state: state,

    _subscribedFunction: null,

    getStore() {
        return this._state;
    },

    dispatch(action) {
        profileReducer(this._state.profile, action);
        dialogsReducer(this._state.dialogs, action);
        this._subscribedFunction();
    },

    subscribe(subscriberFunction) {
        this._subscribedFunction = subscriberFunction;
    }
}

