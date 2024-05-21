module.exports = {
	name: "ianjmacintosh.com", // optional, falls back to object key
	description: "Ian J MacIntosh.com",
	skip: false,
	options: {
		frequency: 10, // How many minutes old will the last report need to be in order for this report to run?
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.ianjmacintosh.com/",
		"https://www.ianjmacintosh.com/articles/",
		"https://www.ianjmacintosh.com/resume/",
	]
};
