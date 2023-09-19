const express = require('express')
const {
    getClimb,
    getClimbs,
    createClimb,
    deleteClimb,
    updateClimb
} = require('../controllers/climbController.js')

const router = express.Router()

router.get('/', getClimbs)

router.get('/:id', getClimb)

router.post('/', createClimb)

router.delete('/:id', deleteClimb)

router.patch('/:id', updateClimb)

module.exports = router 