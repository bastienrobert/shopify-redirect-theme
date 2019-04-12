import pathToRegexp from 'path-to-regexp'
import './map'
import './find'
import './reduce'

function getRoutesRegexp(rules) {
  return rules.map(rule => {
    const path = rule.split('=>')
    return {
      regex: pathToRegexp(path),
      fromPath: path[0],
      toPath: path[1]
    }
  })
}

function move(location) {
  window.top.location.href = location
  return false
}

function redirect(root, rules) {
  if (!root) {
    return false
  }
  if (!rules) {
    move(root)
    return
  }

  const location = window.location.pathname
  const match = getRoutesRegexp(rules).find(rule => location.match(rule.regex))
  if (!match) move(root)
  const keys = match.fromPath.match(match.regex).slice(1)
  const values = location.match(match.regex).slice(1)
  const final = keys
    .map((key, i) => [key, values[i]])
    .reduce((obj, el) => obj.replace(el[0], el[1]), match.toPath || '')

  if (!final) move(root)
  move(root + final)
}

redirect(window.REDIRECT_ROOT, window.REDIRECT_RULES)
