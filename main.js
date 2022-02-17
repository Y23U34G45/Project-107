function startClassification()
{
    navigator.mediaDevices,getUserMedia({audio: true});
    classfier.soundClassifier('https://teachablemachine.withgoogle.com/models/x6kD1F0On/model.json', modelReady) ;

}
function modelReady(){
    classfier.classify(gotResult);

}f