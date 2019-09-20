const promiseFunction = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('Hello World!')
            } else {
                reject(new Error('Hubo un error!'))
            }
        }, 500)
    })

const asyncAwait = async () => {
    try {
        let message = await promiseFunction()
        console.log(`Message: ${message}`)
    } catch (error) {
        console.log(error)
    }
}

asyncAwait()
