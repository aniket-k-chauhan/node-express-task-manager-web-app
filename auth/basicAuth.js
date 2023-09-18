function authUser(req, res, next) {
  if (!req.user) {
    res.status(403);
    return res.json({ message: "You Need to sign in" });
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.json({
        message: `Not allowed operation for ${req.user.name}`,
      });
    }
    next();
  };
}

module.exports = { authUser, authRole };
