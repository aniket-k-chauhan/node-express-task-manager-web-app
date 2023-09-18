// dump user data
const ROLE = {
  ADMIN: "admin",
  USER: "user",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "admin", role: ROLE.ADMIN },
    { id: 2, name: "user 1", role: ROLE.USER },
    { id: 3, name: "user 2", role: ROLE.USER },
  ],
};
