export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(401).json({ error: result.error.format() });
  }
  req.validated = result.data;
  next();
};
