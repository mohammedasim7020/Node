//it's a wraper function for request, responst and next if there is any problem check chai aur code video number 9.

//old version for build higher order function using promises

const asyncHandler = (requestHanlder) =>{
    return (req,res,next)=>{
      Promise.resolve(requestHanlder(req,res,next)).catch((err)=>next(err))

    }
}

// adavance version for build higher order function
// const asyncHandler = (requestHanlder) => async (req, res, next) => {
//     try {
//         await requestHanlder(req,res,next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success:false,
//             error: err,
//             message:`my msg ${err.message}`
//         })
//     }
// }



export default asyncHandler


