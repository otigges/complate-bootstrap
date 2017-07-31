let js = {
	manifest: false,
	bundles: [{
		entryPoint: "./lib/views/index.jsx",
		target: "./dist/views.js",
		format: "cjs",
		moduleName: "createElement",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}, {
		entryPoint: "./components/index.js",
		target: "./assets/bundle.js",
		transpiler: {
			features: ["es2015"]
		}
	}]
};

let sass = {
	manifest: {
		file: "dist/manifest_css.json",
		baseURI: "/assets"
	},
	assets: [],
	bundles: [{
		entryPoint: "./components/index.scss",
		target: "./assets/bundle.css"
	}]
};

module.exports = { sass, js };
