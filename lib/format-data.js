'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'jobs', status: data.jobs || 0})
  status.push({name: 'errors', status: data.errors || 0})
  status.push({name: 'done', status: data.done || 0})
  status.push({name: 'archive', status: data.archive || 0})
  status.push({name: 'distribution', status: data.distribution || 0})

  return status
}
