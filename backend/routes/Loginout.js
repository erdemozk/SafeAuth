const router = require("express").Router()

const User = require("../models/User")
const auth = require("../middleware/auth")

const loginValidation = require("../validation/loginValidation")

router.post("/login", async (req, res) => {
  // Validate The Request
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    let { email, password } = req.body

    // Check if user exists
    const userCheck = await User.findOne({ email })
    if (!userCheck) return res.status(400).json("Invalid Credentials!")

    // Check Password
    const passCheck = await userCheck.checkPass(password)
    if (!passCheck) return res.status(400).json("Invalid Credentials!")

    // Get token and Send
    const token = userCheck.getToken()
    res.status(200).json(token)
  } catch (err) {
    return res.status(400).json("Error :" + err)
  }
})

router.post("/logout", auth, async (req, res) => {
  try {
    const userID = req.user.id
    const user = await User.findById(userID)
    user.logout()
    return res.status(200).json("Logged Out Succesfuly!")
  } catch (err) {
    return res.status(400).json("Error :" + err)
  }
})

module.exports = router
