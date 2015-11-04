var DIP = function() {
	var ASSET_SIZE_DIP = 100;

	function init() {
		// $(document).ready(function() {
		// 	onResize();
		// });
		// $(window).resize(onResize);

		// onResize();

		$(".dip-res").html(getIdealGrid());
		$(".display-res").html(getPracticalGrid());
		$(".density").html(getDensity());

		$(".platform").html(getPlatform());
		$(".asset-res").html(getSampleAssetSize());



		$("#ideal-grid .more").click(onMoreIdealGrid);
		$("#practical-grid .more").click(onMorePracticalGrid);
		$("#bitmap-scale .more").click(onMoreBitmapScale);
	}

	function onMoreIdealGrid(event) {
		$("#ideal-grid .more").toggleClass("is-active");
		$("#ideal-grid .description").toggleClass("is-active");
	}

	function onMorePracticalGrid(event) {
		$("#practical-grid .more").toggleClass("is-active");
		$("#practical-grid .description").toggleClass("is-active");
	}

	function onMoreBitmapScale(event) {
		$("#bitmap-scale .more").toggleClass("is-active");
		$("#bitmap-scale .description").toggleClass("is-active");
	}

	function getIdealGrid() {
		return screen.width + " &times; " + screen.height;
	}

	function getPracticalGrid() {
		return screen.width*getDensity() + " &times; " + screen.height*getDensity();
	}

	function getDensity() {
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
		return ASSET_SIZE_DIP * getDensity();
	}

	// function onResize(event) {
	// 	// Update viewport measure.
	// 	$("#viewport-resolution").html(getViewportRes());

	// 	// Center.
	// 	var halfwayDown = $(window).height() / 2;
	// 	var halfContentHeight = $(".measure-container").height() / 2;
	// 	var opticalAlignmentFudge = 0;
	// 	var marginTop = halfwayDown - halfContentHeight - opticalAlignmentFudge;
	// 	$(".measure-container").css("margin-top", marginTop);
	// }

	return {
		init:init,
		idealGrid:getIdealGrid,
		practicalGrid:getPracticalGrid,
		density:getDensity,
		platform:getPlatform,
		sampleAssetSize:getSampleAssetSize
	};
}();

DIP.init();