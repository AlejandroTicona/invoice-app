import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address:{
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company:{
        name: 'New Age',
        fiscalNumber: 313132121,
    },
    items:[
        {
            id:1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity: 1,
        },
        {
            id:2,
            product: 'Teclado Mecanico Corsair',
            price: 399,
            quantity: 2,
        },
        {
            id:3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 1,
        },{
            id:4,
            product: 'Mouse RedDragon',
            price: 99,
            quantity: 3,
        },
    ]        
}
