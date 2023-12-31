export default function (req: any, res: any, next: any) {
  try {
    if (!req.user.isAdmin) res.status(403).send("Forbiden. Access Denied");
    next();
  } catch (error) {
    res.send(error);
  }
}
