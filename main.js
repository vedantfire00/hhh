function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelloaded);
}

function modelloaded()
{
    console.log("model loaded");

}

function draw()
{
  image(0, 0, 300, 300);
  classifier.classify(gotrest);
}
function gotrest(error, results)
{
  if(error)
  {
     console.error("error");
  }
}