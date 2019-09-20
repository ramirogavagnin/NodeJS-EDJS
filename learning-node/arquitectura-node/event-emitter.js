// Traigo el módulo nativo de NodeJS
const EventEmitter = require('events')

// Creo una clase Logger que extiende de EventEmitter
class Logger extends EventEmitter {
    // Método execute recibe un callback
    execute(callback) {
        // Se empieza a ejecutar nuestro código
        console.log('Before')
        // Emitir eventos a través de this.emit()
        this.emit('start')
        // ejucatmos nuestro callback
        callback()
        // evento finish
        this.emit('finish')
        // termina la ejecución de nuestro logger
        console.log('After')
    }
}

const logger = new Logger()
// con logger.on() me suscribo al evento => this.emit('start') o ('finish') las veces que quiera
logger.on('start', () => console.log('Starting!'))
logger.on('finish', () => console.log('Finishing!!'))
logger.on('finish', () => console.log("It's Done!!"))

// logger.execute(() => console.log('Hello World!'))

logger.execute(() => setTimeout(() => console.log('Hello World!'), 500))
