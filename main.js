
$(document).ready( function(){
	setTimeout( function(){
		$('.terminal').typewriting( "TAG Club ,VIT Brings Build-to-Hack", {
			"typing_interval": 200,
			"blink_interval": "1s",
			"cursor_color": "#C5E3BF"
		}, function() {
			console.log( "END" );
		});
		
		setTimeout( function(){
			$('.terminal').rewrite( "Stay tuned for updates", function(){
				console.log( "END, 2." );
			});
		}, 3300);
	}, 1000);
});



  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


