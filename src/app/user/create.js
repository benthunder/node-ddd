import { EventEmitter } from 'events'

import User from './domain/user'

class createUser extends EventEmitter {
    constructor({ userRepository }) {
        super()
        this.userRepository = userRepository
        this.events = { USER_CREATED: 'USER_CREATED' }
    }

    async exec({ email, userName, password, sponsor }) {
        const userEntity = new User(email, userName, password)
        const user = await this.userRepository.create(userEntity)
        this.emit(this.events.USER_CREATED, { user, sponsor })

        return user
    }
}