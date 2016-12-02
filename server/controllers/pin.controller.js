import Pin from '../models/pin'
import User from '../models/user'

export function requireLoggedIn(req, res, next) {
  if (req.user) {
    return next()
  }
  res.status(403).end()
}


export function getPins(req, res) {
  Pin.find()
    .sort({ _id: -1 })
    .then(pins => Promise.all(pins.map(injectUserData)))
    .then(userDataInjectedPins => res.status(200).send({ data: userDataInjectedPins }))
    .catch(err => error(err, res))
}


function injectUserData(pinDBObject) {
  return User.findById(pinDBObject.creator)
    .then(user => {
      return Object({
        pinDBObject,
        creatorsProfilePic: user.profilePic
      })
    })
}


export function createPin(req, res) {
  const newPin = {
    image: req.body.image,
    description: req.body.description,
    creator: req.user._id
  }
  new Pin(newPin)
    .save()
    .then(injectUserData)
    .then(data => res.send({ data }))
    .catch(err => error(err, res))
}


export function updatePin(req, res) {
  const pin = req.body
  Pin.findOneAndUpdate({ _id: pin._id  }, pin)
    .then(() => res.status(200).end())
    .catch(err => error(err, res))
}


function error(error, res) {
  console.error(error) // eslint-disable-line
  res.status(500).end()
}
