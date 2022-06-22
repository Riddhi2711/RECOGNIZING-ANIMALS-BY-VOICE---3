function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassfier('https://teachablemachine.withgoogle.com/models/3QGzN7TdL/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

var whale = 0;
var dog = 0;
var Bird = 0;
var elephant = 0;


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('bark.gif') 
    img1 = document.getElementById('bird.gif')
    img2 = document.getElementById('Elephant gif.gif')
    img3 = document.getElementById('Whale.gif')

    if (results[0].label == "Whale") {
        img.src = 'Whale.gif';
      } else if (results[0].label == "dog") {
        img.src = 'bark.gif';
      } else if (results[0].label == "Bird") {
        img.src = 'bird.gif';
      }else{
        img.src = 'Elephant gif.gif';
    }
  }
}