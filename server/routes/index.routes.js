const router = require('express').Router()
const categoryRouter = require('./api/category.routes')
const authRoutes = require('./api/auth.routes');


router.use('/categories', categoryRouter)
router.use('/auth', authRoutes);




module.exports = router;