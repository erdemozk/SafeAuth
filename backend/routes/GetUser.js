const router = require("express").Router()

const User = require("../models/User")
const auth = require("../middleware/auth")

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select(["-password", "-logintoken"])
  res.status(200).json(user)
})

module.exports = router
