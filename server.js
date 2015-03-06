var Twit = require('twit');

var express = require('express');
var app = express();

var T = new Twit({
    consumer_key:         'Bu59yVjSYcPSHyythQanS4E1V'
  , consumer_secret:      'M2mJeClZP7ULGwwMh9dfl8wqSMYhYT5CeJUjxe6uAm6MMPmFqe'
  , access_token:         '193105220-Dug27CDo033VkrvIQgHYpJP2bGJVsnDzvIAoK1bk'
  , access_token_secret:  'ruoMUQTSS6eQjF6UujmIHwXyLBeOtgFlopQNDcE6vYEty'
})

var user = {};

var stream = T.stream('statuses/filter', { track: '#EuQueria' })
setInterval(function(){
	T.post('statuses/update', { status: '@'+user.screen_name+' ##Rebelde3x066 que voce divulga-se no Twitter e Face. Rola? #AskHozier http://foradilma.azurewebsites.net/'  }, function(err, data, response) {
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
