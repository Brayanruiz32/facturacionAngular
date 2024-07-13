import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'componentes de pc', 
    client:{
        name: 'brayan', 
        lastname: 'ruiz',
        address:{
            country: 'usa',
            city: 'los angeles', 
            street: 'one street',
            number: 15,
        }
    }, 
    company:{
        name: 'new age', 
        fiscalNumber: 123124,
    },
    items:[
        {
            id:1,
            product: 'cpu',
            price: 423, 
            quantity: 1
        },
        {
            id:1,
            product: 'mouse',
            price: 222, 
            quantity: 5
        },
        {
            id:1,
            product: 'monitor',
            price: 111, 
            quantity: 3
        }
    ]
}