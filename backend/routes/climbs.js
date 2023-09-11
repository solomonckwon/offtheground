const express = require('express')
const {
    getClimb,
    getClimbs,
    createClimb,
    deleteClimb,
    updateClimb
} = require('../controllers/climbController')

const router = express.Router()

router.get('/', getClimb)

router.get('/:id', getClimbs)

router.post('/', createClimb)

router.delete('/:id', deleteClimb)

router.patch('/:id', updateClimb)

module.exports = router 