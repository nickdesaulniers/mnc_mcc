#MCC_MNC
A library to help you parse the mcc and mnc codes on Firefox OS, since we make breaking changes to the API…

##Usage
```html
<script src="mcc_mnc.js"></script>
<script>console.log(mnc_mcc());</script>
```

Returns a possibly empty array of objects with the keys `mcc` and `mnc` whose values are strings, ex:

```json
[
	{
		"mcc": "310",
		"mnc": "410"
	}
]
```

This lib can only be used from a packaged app.  You must add the following fields to your manifest.json:

```json
  ...
  "type": "privileged",
  "permissions": {
    "mobilenetwork: {
      "description": ""
    }
  }
  ...
```

`MCC`: Mobile Country Code
`MNC`: Mobile Network Code
`lastKnownHomeNetwork`: `{MCC}-{MNC}` (SIM's origin)
`lastKnownNetwork`: `{MCC}-{MNC}` (could be different network if roaming)

`navigator.mozMobileConnections` is the new API.
`navigator.mozMobileConnection` is the legacy API.

List of [MCC](http://en.wikipedia.org/wiki/Mobile_country_code)s.
[How marketplace handles MCC](https://github.com/mozilla/fireplace/blob/master/src/media/js/mobilenetwork.js)s.