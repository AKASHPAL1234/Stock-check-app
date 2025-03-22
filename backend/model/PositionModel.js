const {model}=require("mongoose");

const {positionsSchema}=require('../schemas/PositionsSchema');
const PositionModel = new model('Position', positionsSchema);
module.exports={PositionModel};