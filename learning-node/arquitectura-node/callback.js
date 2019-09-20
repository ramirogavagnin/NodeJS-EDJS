// Esta es la manera mas vieja de manejar código asíncrono
// Luego viene Promise y luego Async-Await

const asyncCallback = callback => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return callback(null, 'Hello World!')
        } else {
            return callback(new Error('Hubo un error!'))
        }
    }, 2000)
}

asyncCallback((error, message) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Message: ${message}`)
    }
})
