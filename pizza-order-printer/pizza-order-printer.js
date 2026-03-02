/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from 'fs/promises';

let oneOrAll = process.argv[2];
let orderNum = Number(process.argv[3]);

async function orders() {
    
    const data = await fs.readFile('data.json', 'utf8');
    const pizzas = JSON.parse(data);

    try {

        if (!oneOrAll) {
            return console.log('Woops! Try, getAllOrders or getOneOrder [order number]');
        }

        if (oneOrAll === 'getAllOrders') {
            for (let pizza in pizzas) {
                pizza
                    ? console.log(pizzas[pizza])
                    : null;
            }
        }

        if (orderNum > 6 || !orderNum) {
            return console.log('Order not found. Please enter a valid order number.')
        }
        
        if (oneOrAll === 'getOneOrder') {
            console.log(pizzas[orderNum]);
        }
    } catch (error) {
        console.log(error);
    }
}

orders();