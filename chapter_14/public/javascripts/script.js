function loader() 
{
    const canvas = document.getElementById('canvas');
    const triangle = document.getElementById('triangle');
    const bezier = document.getElementById('bezier');
    const cnv = canvas.getContext('2d');
    const trn = triangle.getContext('2d');
    const bzr = bezier.getContext('2d');

    cnv.fillStyle = "rgba(200,200,0,1)";
    cnv.fillRect(70,50,55,70);

    cnv.fillStyle = "rgba(0,0,200,1)";
    cnv.fillRect(30,30,75,70);

    cnv.fillStyle = "rgba(200,0,0,1)";
    cnv.fillRect(90,50,75,50);

    cnv.fillStyle = "rgba(200,200,0,1)";
    cnv.fillRect(70,70,55,70);

    trn.fillStyle = "rgba(0,200,0,0.5)";
    trn.beginPath();
    trn.strokeStyle = "rgba(200,0,0,0.5)";    
    trn.moveTo(170,205);
    trn.lineTo(110,125);
    trn.lineTo(30,205);
    trn.closePath();
    trn.stroke();
    trn.fill();

    trn.fillStyle = "rgba(100,100,0,10)";
    trn.beginPath();
    trn.moveTo(100,205);
    trn.lineTo(100,125);
    trn.lineTo(20,205);
    trn.closePath();
    trn.stroke();
    trn.fill();
    
    trn.fillStyle = "rgba(255,100,100,1)";
    trn.beginPath();
    trn.moveTo(90,205);
    trn.lineTo(90,125);
    trn.lineTo(10,205);
    trn.closePath();
    trn.stroke();
    trn.fill();

    trn.fillStyle = "rgba(255,200,100,1)";
    trn.beginPath();
    trn.moveTo(0,0);
    trn.lineTo(0,125);
    trn.lineTo(100,65);
    trn.closePath();
    trn.stroke();
    trn.fill();

    trn.fillStyle = "rgba(255,200,100,1)";
    trn.beginPath();
    trn.moveTo(200,0);
    trn.lineTo(100,65);
    trn.lineTo(200,125);
    trn.closePath();
    trn.stroke();
    trn.fill();


    bzr.fillStyle = "rgba(200, 0, 0, 0.5)";
    bzr.beginPath();
    bzr.moveTo(75, 250);
    bzr.bezierCurveTo(75,247,70,235,50,235);
    bzr.bezierCurveTo(20,235,20,272.5,20,272);
    bzr.bezierCurveTo(20,290,40,312,75,330);
    bzr.bezierCurveTo(110,312,130,290,130,272);
    bzr.bezierCurveTo(130,272.5,130,235,100,235);
    bzr.bezierCurveTo(85,235,75,247,75,250);
    bzr.closePath();
    bzr.fill();
}