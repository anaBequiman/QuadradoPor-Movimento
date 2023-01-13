diferenca = 0;
narizX = 0;
narizY = 0;
pulsoDireito = 0;
pulsoEsquerdo = 0;

function draw(){
    background("burlywood");
    document.getElementById("la").innerHTML = diferenca;
    fill("burlywood");
    stroke("#FFFAFA");
    square(narizX, narizX, diferenca);
}
function setup(){
    video = createCapture(VIDEO);
    video.size(425, 425);
    video.position(200,200);
    canvas = createCanvas(325, 325);
    canvas.position(1000, 250);
    poseNet = ml5.poseNet(video, modeloCarregado);
    poseNet.on("pose", pegarResultado);
}
function modeloCarregado(){
    console.log("Modelo carregado : )");
}
function pegarResultado(results){
    if(results.length > 0){
        console.log(results);
        pulsoDireito = results[0].pose.rightWrist.x;
        pulsoEsquerdo = results[0].pose.leftWrist.x;
        narizX = results[0].pose.nose.x;
        narizY = results[0].pose.nose.y;

        console.log(pulsoDireito);
        console.log(pulsoEsquerdo);
        console.log(narizX);
        console.log(narizY);

        console.log("Pulso Direito :" + pulsoDireito + ". Pulso Esquerdo :" + pulsoEsquerdo);

        diferenca = floor(pulsoEsquerdo - pulsoDireito);
    }
}