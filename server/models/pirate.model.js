const mongoose = require("mongoose");

const piratesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Titulo no puede estar vacio"]
        },
        image: {
            type:String,
            required: [true, "Imagen no puede ir vacio"]
        },
        phrase: {
            type:String,
            required: [true, "Descripcion no puede ir vacio"]
        },
        position: {
            type:String,
            required: [true, "Tipo no puede ir vacio"]
        }, 
        treasure: {
            type:Number,
            required: [true, "Tiempo no puede ir vacio"]
        },
        leg: {
            type:Boolean,
            default: true
        },
        eye: {
            type: Boolean,
            default: true
        },
        hook: {
        type: Boolean,
        default: true
        }
    }, {timestamps: true, versionKey: false}
)

const pirates = mongoose.model("pirates", piratesSchema);
module.exports = pirates;