module.exports = function (eleventyConfig) {
	// Output directory: _site

	// Copy the `css` directory to the output
	eleventyConfig.addPassthroughCopy("css");

	// Watch the `css` directory for changes
	eleventyConfig.addWatchTarget("css");

	// Copy fonts to the build output folder
	eleventyConfig.addPassthroughCopy("css/fonts");
};
