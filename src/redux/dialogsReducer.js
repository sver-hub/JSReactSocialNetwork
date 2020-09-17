const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const TEXT_AREA_UPDATE = 'TEXT-AREA-UPDATE';

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});
export const textAreaUpdateActonCreator = (text) => ({type: TEXT_AREA_UPDATE, text: text});

const initialState = {
    dialogList: [
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
    ],
    messages: [],
    textAreaContent: '',
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE :
            state.messages.push({text: state.textAreaContent});
            state.textAreaContent = '';

            return state;

        case TEXT_AREA_UPDATE:
            state.textAreaContent = action.text;
            return state;

        default:
            return state;
    }
}