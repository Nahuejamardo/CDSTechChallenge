const instanceMethods = {}
const classMethods = {}
const hooks = {
  afterCreate: (instance) => instance.createdAt = Date.now,
  beforeUpdate: (instance) => instance.updatedAt = Date.now,
}

export {
  instanceMethods,
  classMethods,
  hooks
}