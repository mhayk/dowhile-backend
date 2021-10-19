import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLast3MessageController } from './controllers/GetLast3MessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { GetLast3MessagesService } from './services/GetLast3MessagesService'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

router.get('/messages/last3', new GetLast3MessageController().handle)

export { router }