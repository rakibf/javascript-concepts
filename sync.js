const takeOrder = function (customer, callback) {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = function (customer, callback) {
    console.log(`processing order for ${customer}`);

    // waits 3 seconds
    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`processed order for ${customer}`);
        callback(customer)
    }, 3000);
}

const completedOrder = function (customer) {
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

let hasMeeting = false;

const meeting = new Promise(function (resolve, reject) {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        }
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already has been scheduled"));
    }
});

const addToCalendar = function (meetingDetails) {
    const calendar = `${meetingDetails.name} is scheduled on ${meetingDetails.location} at ${meetingDetails.time}.`;
    return Promise.resolve(calendar);
}


/* meeting
    .then(addToCalendar)
    .then((calendar) => {
        console.log(calendar);
    })
    .catch(err => {
        console.log(err.message);
    }) */

// async await use

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    } catch(err) {
        console.log(err.message);
    }
}

myMeeting();


const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
})

/* Promise.all([promise1, promise2])
    .then((resArray) => {
        console.log(resArray);
    })
    .catch(err => {
        console.log(err);
    })
 */


// async function returns promise
async function friendlyFunction() {
    return 'Hello'; // we can explicitly return promise as well
}

// console.log(friendlyFunction()); // Promise { 'Hello' }

