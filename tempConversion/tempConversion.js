const ftoc = function(t) {
  return +((t - 32) * 5 / 9).toFixed(1);
}

const ctof = function(t) {
  return +(t * 9 / 5 + 32).toFixed(1)

}

module.exports = {
  ftoc,
  ctof
}
