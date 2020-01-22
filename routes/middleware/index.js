// const valAccountsPost = (req, res, next) =>
//   JSON.stringify(req.body) !== '{}'
//     ? req.body.name
//       ? req.body.budget
//         ? next()
//         : res.status(400).json({ message: 'Missing required budget field' })
//       : res.status(400).json({ message: 'Missing required name field' })
//     : res.status(400).json({ message: 'Missing account data' })

const valId = (db, table) => async (req, res, next) =>
  (await db(table)
    .where('id', req.params.id)
    .first()) === undefined
    ? res.status(404).json({ message: 'Invalid ID' })
    : next()

// const valAccountsPut = (req, res, next) =>
//   JSON.stringify(req.body) !== '{}'
//     ? req.body.name || req.body.budget
//       ? next()
//       : res
//           .status(400)
//           .json({ message: 'Must contain one of or both fields: name, budget' })
//     : res
//         .status(400)
//         .json({ message: 'Must contain one of or both fields: name, budget' })

module.exports = { valId }
