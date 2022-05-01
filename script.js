function myFunction() {
    
    setInterval(()=>{
       
        
        let randomNumbex =  Math.floor(Math.random() * (90 - 10 + 1)) + 10;
        let randomNumbey =  Math.floor(Math.random() * (90 - 10 + 1)) + 10;

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        newStringx=randomNumbex.toString()+"%"
        newStringy=randomNumbey.toString()+"%"
        
        document.getElementById('1').style.left=newStringx;
        document.getElementById('1').style.top=newStringy;
        document.getElementById('1').style.transitionDuration="2s"
        document.getElementById('1').style.backgroundColor=bgColor
        
    },2000)
    
    

}

myFunction()