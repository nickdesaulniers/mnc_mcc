var mcc_mnc = (function () {
  function f (c) { return !!c.lastKnownHomeNetwork && !!c.lastKnownNetwork; };
  function m (c) {
    var s = (c.lastKnownHomeNetwork || c.lastKnownNetwork).split("-");
    return { mcc: s[0], mnc: s[1], };
  };
  return function () {
    if ("mozMobileConnections" in navigator) {
      return Array.prototype.filter.call(navigator.mozMobileConnections, f).map(m);
    } else if ("mozMobileConnection" in navigator) {
      return [navigator.mozMobileConnection].filter(f).map(m);
    } else {
      return [];
    }
  };
})();

