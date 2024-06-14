const router = require('express').Router()
const categoryRouter = require('./api/category.routes')
const authRoutes = require('./api/auth.routes');
const tokens = require('./api/tokens.api.routes');


router.use('/categories', categoryRouter)
router.use('/auth', authRoutes);
router.use('/token', tokens);




module.exports = router;