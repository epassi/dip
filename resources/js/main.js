var DIP = function() {
	// var member = null;

	function init() {
		$(document).ready(function() {
			onResize();
		});
		$(window).resize(onResize);

		// onResize();

		$("#screen-resolution").html(getScreenRes());
		$("#viewport-resolution").html(getViewportRes());
		$("#density").html(getDensity());
	}

	function getScreenRes() {
		return screen.width + " &times; " + screen.height;
	}

	function getViewportRes() {
		return $(window).width() + " &times; " + $(window).height();
	}

	function getDensity() {
		return window.devicePixelRatio;
	}

	function onResize(event) {
		// Update viewport measure.
		$("#viewport-resolution").html(getViewportRes());

		// Center.
		var halfwayDown = $(window).height() / 2;
		var halfContentHeight = $(".measure-container").height() / 2;
		var opticalAlignmentFudge = 0;
		var marginTop = halfwayDown - halfContentHeight - opticalAlignmentFudge;
		$(".measure-container").css("margin-top", marginTop);
	}

	return {
		init:init,
		screenRes:getScreenRes,
		viewportRes:getViewportRes,
		density:getDensity
	};
}();

DIP.init();