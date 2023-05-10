// const promise = new Promise((resolve, reject) => {
//     resolve('Rejected')
// });
//
// promise.then(value => {
//     console.log(value)
// })
//     .catch(err => console.log(err))

// const promise = new Promise(resolve => {
//     resolve(10)
// })
//
// promise
//     .then(value => {
//     return new Promise(resolve => {
//         resolve(value * 2)
//     })
// })
//     .then(value => console.log(value))

// Promise.all

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm Promise1")
//     }, 2000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm Promise2")
//     }, 2500)
// });

// Promise.all([promise1, promise2])
//     .then(data => console.log(data))

// Promise.race
// Promise.race([promise1, promise2])
//     .then(data => console.log(data))

//
// let delay = 0;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, delay);
//     delay += 1000;
// }

const commentArea = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');
const statusArea = document.querySelector('.status');

button.addEventListener('click', onButtonHandler);

function onButtonHandler () {
    const inputValue = input.value;

    statusArea.innerText = 'Your comment in progress...';
    statusArea.style.color = 'black';
    saveCommentOnServer(inputValue)
        .then(data => {
            input.value = '';

            const commentMarkup = createCommentMarkup(data);
            commentArea.insertAdjacentHTML('beforeend', commentMarkup);

            statusArea.innerText = 'Successfully added to page!';
            statusArea.style.color = 'green';
        })
        .catch(err => {
            alert(err)
            statusArea.innerText = 'Error happened, try again';
            statusArea.style.color = 'red';
        })
}

function createCommentMarkup (text) {
    return `<h3>${text}</h3>`;
}

function saveCommentOnServer (comment) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(comment)
            } else {
                reject('Error happened. Try again..')
            }
        }, 2500)
    })
}
