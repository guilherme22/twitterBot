var Twit = require('twit');

var express = require('express');
var app = express();

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

var user = {};

var stream = T.stream('statuses/filter', { track: '#HashTagMonitorar' })
setInterval(function(){
	T.post('statuses/update', { status: '@'+user.screen_name+'	mensagem '  }, function(err, data, response) {
		 	if(err)
		 		console.log('Erro no usuário : ' + user.screen_name + " erro: " + err );

		 	if(!err){
		
				console.log('Sucesso para ' + user.screen_name);
		 	}
		 				
			});


}, 60000);

stream.on('tweet', function (tweet) {
		
 user = tweet.user;
})

app.get('/', function(req, res){
  res.sendfile(__dirname+'/index.html');
});

app.get('/result', function(req, res){
	res.send(user.screen_name);

})

app.listen(3000);
