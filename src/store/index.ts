import { userModule } from './modules/user'

const storeModules = () => {
    return {
        user: userModule()
    }
}

export default storeModules