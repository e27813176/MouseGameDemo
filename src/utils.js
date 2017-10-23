export const centerGameObjects = obj => obj.forEach(x => x.anchor.setTo(0.5))

export const initText = obj => obj.forEach(x => {
  return (
    x.anchor.setTo(0.5),
    x.scale.setTo(0)
  )
})
