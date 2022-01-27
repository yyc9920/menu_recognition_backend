import mongoose from 'mongoose';

const restaurantsInfoSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    category: Array,
    menus: Array,
    recent: Date,
    rate: Number
});

export default mongoose.model('restaurants', restaurantsInfoSchema);