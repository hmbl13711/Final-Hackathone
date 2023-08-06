const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect('mongodb+srv://subheislam:subh@1121@cluster1.ptn7ndk.mongodb.net/?retryWrites=true&w=majority'
        );
        console.log('dbConnected...');
    } catch (error) {
        console.log('while db_connection', error);
    }
}

module.exports = {
    dbConnector
}