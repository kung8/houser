const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image:'',
    monthlyMortgageAmount: '',
    desiredMonthlyRent: ''
};

const ADD_FINANCE = 'ADD_FINANCE';
const ADD_HOME_INFO = 'ADD_HOME_INFO';
const ADD_IMAGE = 'ADD_IMAGE';
const CANCEL_ADD = 'CANCEL_ADD';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOME_INFO:
            const { name, address, city, state: payloadState, zipcode } = action.payload
            return { ...state, name, address, city, payloadState, zipcode }
        case ADD_IMAGE:
            const {image} = action.payload;
            return { ...state, image}
        case ADD_FINANCE:
            const { monthlyMortgageAmount, desiredMonthlyRent } = action.payload
            return { ...state, monthlyMortgageAmount, desiredMonthlyRent }
        case CANCEL_ADD:
            
            return { ...state, name:'',address:'',city:'',payloadState:'',image:'',zipcode:'',monthlyMortgageAmount:'',desiredMonthlyRent:''}
        default:
            return state
    };
};

export function addHomeInfo(name, address, city, state, zipcode) {
    return {
        type: ADD_HOME_INFO,
        payload: {
            name,
            address,
            city,
            state,
            zipcode
        }
    };
};

export function addImage(image) {
    return {
        type: ADD_IMAGE,
        payload: {
            image
        }
    };
};

export function addFinance(monthlyMortgageAmount, desiredMonthlyRent) {
    return {
        type: ADD_FINANCE,
        payload: {
            monthlyMortgageAmount,
            desiredMonthlyRent
        }
    };

};

export function cancelAdd(initialState) {
    return {
        type: CANCEL_ADD,
        payload: {
            initialState
        }

    };
};