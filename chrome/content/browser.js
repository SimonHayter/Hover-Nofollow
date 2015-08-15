window.addEventListener("load", function() { hnf.init(); }, false);
	var hnf = {
  		init: function() {
    		var appcontent = document.getElementById("appcontent");
    			if(appcontent)
     		appcontent.addEventListener("DOMContentLoaded", hnf.onPageLoad, true);
  		},
	onPageLoad: function(event) {
    	var doc = event.originalTarget;
		var head = content.document.getElementsByTagName("head")[0],
		style = content.document.getElementById("hover-nofollow-style");	
			if (!style) {
				style = content.document.createElement("link");
				style.id = "hover-nofollow-style";
				style.type = "text/css";
				style.rel = "stylesheet";
				style.href = "chrome:hovernofollow/skin/style.css";
				head.appendChild(style);
			}
		}
	}
