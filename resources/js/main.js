var Main = function() {
	var ASSET_SIZE_DIP = 100;

	function init() {

		$(".dip-width").text(getDIPWidth());
		$(".dip-height").text(getDIPHeight());
		$(".real-width").text(getRealWidth());
		$(".real-height").text(getRealHeight());
		$(".bitmap-export-scale").text(getBitmapExportScale);

		$(".platform").text(getPlatform());
		$(".asset-res").text(getSampleAssetSize());

		$("#setup-ideal .more").click(onMoreIdeal);
		$("#setup-practical .more").click(onMorePractical);
	}

	function onMoreIdeal(event) {
		$("#setup-ideal .more").toggleClass("is-active");
		$("#setup-ideal .description").toggleClass("is-active");
		$("#di-unit").addClass("is-active");
	}

	function onMorePractical(event) {
		$("#setup-practical .more").toggleClass("is-active");
		$("#setup-practical .description").toggleClass("is-active");
		$("#di-unit").addClass("is-active");
	}

	function getDIPWidth() {
		return screen.width;
	}

	function getDIPHeight() {
		return screen.height;
	}

	function getRealWidth() {
		return screen.width*window.devicePixelRatio;
	}

	function getRealHeight() {
		return screen.height*window.devicePixelRatio;
	}

	function getBitmapExportScale() {
		return window.devicePixelRatio;
	}

	function getPlatform() {
		// var platform = navigator.platform;

		// if (platform.indexOf("Win") >= 0) 				return "PC";
		// else if (platform.indexOf("Mac") >= 0)			return "Mac";
		// else if (platform.indexOf("Android") >= 0)		return "Android device";
		// else if (platform.indexOf("iPod") >= 0)			return "iPod";
		// else if (platform.indexOf("iPhone") >= 0)		return "iPhone";
		// else if (platform.indexOf("iPad") >= 0)			return "iPad";
		// else if (platform.indexOf("BlackBerry") >= 0)	return "BlackBerry";
		// else 											return "device";

		var platform = "";
		var userAgent = navigator.platform;
		if (WURFL.form_factor === "Desktop") {
			if (userAgent.indexOf("Win") >= 0) 				platform = "this PC";
			else if (userAgent.indexOf("Mac") >= 0)			platform = "this Mac";
			// else if (userAgent.indexOf("Android") >= 0)		platform = "Android device";
			// else if (userAgent.indexOf("iPod") >= 0)		platform = "iPod";
			// else if (userAgent.indexOf("iPhone") >= 0)		platform = "iPhone";
			// else if (userAgent.indexOf("iPad") >= 0)		platform = "iPad";
			// else if (userAgent.indexOf("BlackBerry") >= 0)	platform = "BlackBerry";
			else 											platform = "device";
		} else {
			platform = WURFL.complete_device_name;
		}

		return platform;
	}

	function getSampleAssetSize() {
		return ASSET_SIZE_DIP * window.devicePixelRatio;
	}

	return {
		init:init,
		dipWidth:getDIPWidth,
		dipHeight:getDIPHeight,
		realWidth:getRealWidth,
		realHeight:getRealHeight,
		bitmapExportScale:getBitmapExportScale,
		platform:getPlatform,
		sampleAssetSize:getSampleAssetSize
	};
}();

Main.init();