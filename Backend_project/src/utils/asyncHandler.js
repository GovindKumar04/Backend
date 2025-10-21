const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
};


export { asyncHandler };

// const asyncHndler = (fun) => {
//   return async (req, res, next) => {
//     try {
//       await fun(req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         msg: error.message,
//       });
//     }
//   };
// };

// const asyncHndler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       msg: err.message,
//     });
//   }
// };
