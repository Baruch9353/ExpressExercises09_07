let users = [{ id: 1, name: 'Alice' }];

export function getAllUsers (req, res)
{
  res.json(users);
}

export function postUser(req, res)
{
  const newUser = { id: Date.now() , name: req.body.name };
  users.push(newUser);
  res.json(newUser);
}

export function getUser(req, res)
{
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
}

export function putUser(req, res)
{
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
}

export function deleteUser(req, res) {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).send("User not found");
  users = users.filter(u => u.id !== user.id);
  res.json({ deleted: user });
}
