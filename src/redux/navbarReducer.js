const initialState = {
    navItems: [
        {
            iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/846/846449.svg',
            itemUrl: '/profile',
            itemName: 'Profile'
        },
        {
            iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg',
            itemUrl: '/dialogs',
            itemName: 'Messages'
        },
        {
            iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/3462/3462328.svg',
            itemUrl: '/findFriends',
            itemName: 'Find Friends'
        },
        {iconUrl: 'https://www.flaticon.com/premium-icon/icons/svg/2886/2886141.svg', itemUrl: '', itemName: 'News'},
        {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/876/876766.svg', itemUrl: '', itemName: 'Music'},
        {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg', itemUrl: '', itemName: 'Settings'},
    ],
}

export const navbarReducer = (state = initialState, action) => {
    return state;
}