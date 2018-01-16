
var Schema = mongoose.Schema;

// create a schema
var selectorSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    age: Number,
    email: String,
    phone: String,
    selection_status : SelectionStatus,
    adress: {
        street: String,
        number: Number,
    },
    company: {
        name: String,
    },
    created_at: Date
});

// on every save, add the date
selectorSchema.pre('save', function(next) {
    
    if(!this.created_at){

        // get the current date
        this.created_at = new Date();
    }
  
    next();
});

var Selectors = mongoose.model('selectors', selectorSchema);

module.exports = Selectors;