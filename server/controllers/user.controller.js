import User from "../models/user.model.js";

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).json(user);
    }
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
export { login };

// async function getOne(req, res) {
//   try {
//     const user = await User.findOne({_id: req.body._id});
//     if (user) {
//       return res.status(200).json(user);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// }
