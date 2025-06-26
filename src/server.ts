import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './router'
import { errorHandlerMiddleware } from './middlewares/errorHandler'

import path from 'node:path'
import fs from 'node:fs'

//config swagger
import swaggerUi from 'swagger-ui-express'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

// use swagger for API documentation
app.use('/docs', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) => {
  const swaggerPath = path.resolve(__dirname, '../swagger.json')
  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf-8'))
  swaggerUi.setup(swaggerDocument)(req, res, next)
})

app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running!`))
