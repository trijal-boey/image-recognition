Webcam.set({
    width:100,height:100,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';

    });}
    classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json',modelLoaded);
function modelLoaded() {
    console.log('model Loaded');
    
}
function check(){
    img=document.getElementById("capture_img")
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
