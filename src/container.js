import { createContainer, asValue, asClass } from 'awilix'

import Server from './interfaces/http/server'
import Application from './app/app'
import CreateUser from './app/user/create'
import UpdateUser from './app/user/update'
import RemoveUser from './app/user/remove'
import SearchUser from './app/user/search'
import GetUser from './app/user/get'
import Repository from './infra/database/repository'
import logger from './infra/logger'

const container = createContainer()
container.register({
    server: asClass(Server).singleton(),
    // Application layer
    app: asClass(Application).singleton(),
    createUser: asClass(CreateUser).singleton(),
    removeUser: asClass(RemoveUser).singleton(),
    updateUser: asClass(UpdateUser).singleton(),
    searchUser: asClass(SearchUser).singleton(),
    getchUser: asClass(GetUser).singleton(),
    // Infra layer
    db: asClass(ManageDB).singleton(),
    userRepository: asClass(Repository).singleton(),
    logger: asValue(logger)
    // ...
})