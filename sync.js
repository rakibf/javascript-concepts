const takeOrder = function(customer, callback) {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = function(customer, callback) {
    console.log(`processing order for ${customer}`);

    // waits 3 seconds
    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`processed order for ${customer}`);
        callback(customer)
    }, 3000);
}

const completedOrder = function(customer) {
    console.log(`completed order for ${customer}`);
}

/* takeOrder('Rakib Hassan', (customer) => {
    processOrder(customer, (customer) => {
        completedOrder(customer);
    })
});
 */

function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading from ${url}`);
        callback(url);
    }, 1000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

/* download(url1, (url) => {
    console.log(`Processing ${url}...`);
    download(url2, (url) => {
        console.log(`Processing ${url}`);
        download(url3, (url) => {
            console.log(`Processing ${url}`);
        })
    })
})
 */



