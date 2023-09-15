const Climb = require('../models/climbModel')
const mongoose = require('mongoose')

const getClimbs = async(req,res) => {
    try{
        const climbs = await Climb.find({}).sort({createdAt: -1})
        res.status(200).json(climbs)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getClimb = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such climb!'})
    }
    try{
        const climb = await Climb.findById(id)
        if(!climb) {
            return res.status(404).json({error: 'No such climb!'})
        }
        res.status(200).json(climb)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const createClimb = async (req, res) =>{
    const { name, grade, location, priority } = req.body

    try {
        const climb = await Climb.create({ name, grade, location, priority })
        res.status(200).json(climb)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteClimb = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId(id)){
        return res.status(404).json({error: 'No such climb!'})
    }

    try {
        const climb = await Climb.findByIdAndDelete(id)
        if (!climb) {
            return res.status(404).json({error: 'No such climb!'})
        }
        res.status(200).json(climb)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const updateClimb = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId(id)){
        return res.status(404).json({error: 'No such climb!'})
    }

    try {
        const climb = await Climb.findByIdAndUpdate(id, {...req.body})
        if (!climb) {
            return res.status(404).json({error: 'No such climb!'})
        }
        res.status(200).json(climb)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getClimb,
    getClimbs,
    createClimb,
    deleteClimb,
    updateClimb
}