import container from './container'

const app = container.cradle.app

app
.start('container')
.catch(err => {
    app.service.logger.error(err.stack)
    process.exit()
})