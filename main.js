      $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20%2A%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%27cambridge%2C%20uk%27%29&format=json&callback', function(data) {
        var weathercode = data.query.results.channel.item.condition.code;
        weather_code = weathercode;
        console.log(weather_code);
        $(document).ready( function() {
          updateWeather(weather_code);
        })
      });

      setInterval(function(){
        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20%2A%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%27cambridge%2C%20uk%27%29&format=json&callback', function(data) {
          var weathercode = data.query.results.channel.item.condition.code;
          weather_code = weathercode;
          console.log(weather_code);
          $(document).ready( function() {
            updateWeather(weather_code);
          })
        });
      }, 3600000);

      function updateWeather(wcode) {
          switch(wcode) {
            case '19':
            case '20':
            case '21':
            case '22':
            case '23':
            case '24':
            case '25':
            case '26':
            case '27':
            case '28':
            case '29':
            case '30':
            case '44':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('cloudyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('cloudy');
                break;
            case '6':
            case '8':
            case '9':
            case '10':
            case '11':
            case '12':
            case '13':
            case '18':
            case '35':
            case '40':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('rainyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('rainy');
                break;
            case '32':
            case '34':
            case '36':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('sunnyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('sunny');
                break;
            case '31':
            case '33':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('starryBackground');
              $('#weather').removeClass();
              $('#weather').addClass('starry');
                break;
            case '5':
            case '7':
            case '14':
            case '15':
            case '16':
            case '17':
            case '41':
            case '42':
            case '43':
            case '46':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('snowyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('snowy');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '37':
            case '38':
            case '39':
            case '45':
            case '47':
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('stormyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('stormy');
                break;
            default:
              $('#weatherBackground').removeClass();
              $('#weatherBackground').addClass('sunnyBackground');
              $('#weather').removeClass();
              $('#weather').addClass('sunny');
          }
      }
