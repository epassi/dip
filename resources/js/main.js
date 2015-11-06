var DIP = function() {
	var ASSET_SIZE_DIP = 100;

	function init() {
		$(".dip-width").html(getDIPWidth());
		$(".dip-height").html(getDIPHeight());
		$(".real-width").html(getRealWidth());
		$(".real-height").html(getRealHeight());
		$(".bitmap-export-scale").html(getBitmapExportScale);

		$(".platform").html(getPlatform());
		$(".asset-res").html(getSampleAssetSize());



		$("#setup-ideal .more").click(onMoreIdeal);
		$("#setup-practical .more").click(onMorePractical);
	}

	function onMoreIdeal(event) {
		$("#setup-ideal .more").toggleClass("is-active");
		$("#setup-ideal .description").toggleClass("is-active");
	}

	function onMorePractical(event) {
		$("#setup-practical .more").toggleClass("is-active");
		$("#setup-practical .description").toggleClass("is-active");
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
		var platform = navigator.platform;

		if (platform.indexOf("Win") >= 0) 				return "PC";
		else if (platform.indexOf("Mac") >= 0)			return "Mac";
		else if (platform.indexOf("Android") >= 0)		return "Android device";
		else if (platform.indexOf("iPod") >= 0)			return "iPod";
		else if (platform.indexOf("iPhone") >= 0)		return "iPhone";
		else if (platform.indexOf("iPad") >= 0)			return "iPad";
		else if (platform.indexOf("BlackBerry") >= 0)	return "BlackBerry";
		else 											return "device";
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

DIP.init();