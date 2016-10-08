module.exports = {
  priority: 6,
  process: function (obj, done) {
    const { settings, msg } = obj
    const { prefix, admin_prefix } = settings

    const standardCheck = msg.content.startsWith(prefix)
    const adminCheck = msg.content.startsWith(admin_prefix)
    if (!standardCheck && !adminCheck) return done(true)

    const trigger = msg.content.substring(standardCheck ? prefix.length : admin_prefix.length).split(' ')[0]
    obj.trigger = trigger[standardCheck ? 'toLowerCase' : 'toUpperCase']()
    return done(null, obj)
  }
}
