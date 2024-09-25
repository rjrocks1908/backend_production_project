import express, { Application } from 'express'
import path from 'path'
import globalErrorHandler from './middleware/globalErrorHandler'
import { router } from './router/apiRouter'

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api', router)

// 404 Handler
// app.use((req: Request, res: Response, next: NextFunction) => {
//   try {
//     throw new Error('Not Found')
//   } catch (error) {
//     httpError(next, error, req, 404)
//   }
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
