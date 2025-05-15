import express, {Express} from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import categoryRoutes from './routes/category.routes'
import supplierRoutes from './routes/supplier.routes'
import purchaseRoutes from './routes/purchase.routes'
import purchaseitemsRoutes from './routes/purchaseitems.routes'
import saleRoutes from './routes/sale.routes'
import saleitemRoutes from './routes/saleitems.routes'
import stockRoutes from './routes/stock.routes'
import stockmovementRoutes from './routes/stockmovement.routes'
import warehouseRoutes from './routes/warehouse.routes'
    
//  Initialize Express app
const app: Express = express()

//  Middleware
app.use(cors())
app.use(express.json())

//  Routes
app.use('/api/v1/user', userRoutes )
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/supplier', supplierRoutes)
app.use('/api/v1/purchase', purchaseRoutes)
app.use('/api/v1/purchaseitems', purchaseitemsRoutes)
app.use('/api/v1/sale', saleRoutes)
app.use('/api/v1/saleitems', saleitemRoutes)
app.use('/api/v1/stock', stockRoutes)
app.use('/api/v1/stockmovement', stockmovementRoutes)
app.use('/api/v1/warehouse', warehouseRoutes)

//  Root Route
app.get('/', (req, res) => {
    res.send(`
        API is running...
        Status: Online
        `)
})

export default app