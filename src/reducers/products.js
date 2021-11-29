import * as Types from './../constants/ActionTypes';

var randomID = require('randomstring');

var intialState = [
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold tím cam',
        image : './../images/product-1.png',
        price : 199000,
        inventory : 10,
        rating : 4
    },
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold tím xanh',
        image : './../images/product-2.png',
        price : 299000,
        inventory : 10,
        rating : 5
    },
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold xanh',
        image : './../images/product-3.png',
        price : 399000,
        inventory : 10,
        rating : 4
    },
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold tím hồng',
        image : './../images/product-4.png',
        price : 199000,
        inventory : 10,
        rating : 5
    },
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold xanh nâu',
        image : './../images/product-5.png',
        price : 299000,
        inventory : 10,
        rating : 5
    },
    {
        id : randomID.generate(),
        name : 'Hạt Solidgold cam tím',
        image : './../images/product-6.png',
        price : 399000,
        inventory : 10,
        rating : 3
    },
    {
        id : randomID.generate(),
        name : 'Hạt Wholehearted cam',
        image : './../images/product-7.png',
        price : 230000,
        inventory : 10,
        rating : 5
    },
    {
        id : randomID.generate(),
        name : 'Hạt Wholehearted xanh',
        image : './../images/product-8.png',
        price : 240000,
        inventory : 10,
        rating : 5
    },
    {
        id : randomID.generate(),
        name : 'Hạt Wholehearted tím',
        image : './../images/product-9.png',
        price : 250000,
        inventory : 10,
        rating : 3
    }
]

const products = (state = intialState, action) => {
    switch(action.Types){
        default: return [...state]
    }
}

export default products;