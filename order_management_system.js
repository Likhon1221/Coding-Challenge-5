// Task 1. Create an Inventory Array of Product Objects

let inventory = [
    {name: 'Espresso', price: 3, quantity: 10},
    {name: 'Latte', price: 4, quantity: 5},
    {name: 'Cappuccino', price: 4, quantity: 6},
    {name: 'Mocha', price: 5, quantity: 4},
]; // You need to click the array to see the data

console.log(inventory);

// Task 2. Create an Orders Array of Order Objects

let orders = [];

// Task 3. Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    let in_stock = true;
    for (let i = 0; i < orderedItems.length; i++) {
        const item = orderedItems[i];
        for (let j = 0; j < inventory.length; j++) {
            if (item.name == inventory[j].name) {
                if (item.quantity > inventory[j].quantity) {
                    in_stock = false;
                    console.log(`${item.name} - out of stock`);
                }
                break;
            }
        }
    }

    if (in_stock) {
        for (let i = 0; i < orderedItems.length; i++) {
            const item = orderedItems[i];
            for (let j = 0; j < inventory.length; j++) {
                if (item.name == inventory[j].name) {
                    inventory[j].quantity -= item.quantity;
                    break;
                }
            }
        }
    }
    orders.push({customerName: customerName, items: orderedItems, status: "Pending"});
}
