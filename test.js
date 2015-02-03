function log (text) {
  var p = document.createElement("p");
  p.textContent = text;
  document.body.appendChild(p);
  console.log(text);
};

if ("mozMobileConnection" in navigator) {
  log("old API");
  log(mcc_mnc());
} else if ("mozMobileConnections" in navigator) {
  log("new API");
  log(mcc_mnc());
} else {
  log("no API");
}
