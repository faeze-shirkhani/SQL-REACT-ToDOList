import mongoose from "mongoose"

const connect = (uri)=>{
try {
    return mongoose.connect(uri)
} catch (error) {
    console.log(error)
}
}

export default connect