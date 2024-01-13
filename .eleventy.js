module.exports = function (eleventyConfig) {
	// Output directory: _site

	// Copy the `css` directory to the output _site folder
	eleventyConfig.addPassthroughCopy("sass");

	// Watch the `css` directory for changes
	eleventyConfig.addWatchTarget("sass");

	eleventyConfig.setBrowserSyncConfig({
		files: "./_site/css/**/*.css",
	});
};
