function alertObject(message, color) {
  const id = Math.floor(Math.random() * 1000)
  return {
    id,
    message,
    color,
  }
}

export default alertObject
