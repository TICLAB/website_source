
function Blog () {}

Blog.prototype.start = function () {

	$.getRSS("http://www.rssmix.com/u/8256402/rss.xml", function(data) {
		var xml = $.parseXML(data.responseText);
		xml = $(xml);
		var html = "";
		xml.find("item").each(function(index, item) {
			var $item = $(item);
			var data = {
				date: $item.find("pubDate").text().substring(0, 16),
				url: $item.find("link").text(),
				title: $item.find("title").text(),
				author: $item.find("dc\\:creator").text()
			};
			html += tmpl("post_tmpl", data);
		});
		$("#posts").html(html);
		$("body").addClass("blog");
	});

};
