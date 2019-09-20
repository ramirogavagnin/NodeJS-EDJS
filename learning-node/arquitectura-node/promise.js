// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Hello World!')
        } else {
            reject(new Error('Hubo un error!'))
        }
    }, 2000)
})

promise
    .then(message => message.toUpperCase())
    .then(message => console.log(`Message: ${message}`))
    .catch(error => console.log(error))
