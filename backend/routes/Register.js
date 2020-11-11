const router = require("express").Router()

const User = require("../models/User")
const registerValidation = require("../validation/registerValidation")

router.post("/", async (req, res) => {
  // Validate The Request
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  try {
    let { email, password, fullname } = req.body

    // Check if user exists
    const userCheck = await User.findOne({ email })
    if (userCheck) return res.status(400).json("User already exists!")

    const user = new User({ email, password, fullname })
    await user.save()
    const token = user.getToken()
    res.status(201).json(token)
  } catch (err) {
    return res.status(400).json("Error :" + err)
  }
})

module.exports = router
