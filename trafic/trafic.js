// function change(){
function yellow(){
setTimeout(function(){ document.getElementById("yelw").style.background= "yellow"  //on yellow + off red
// style.background= "yellow" 
},5000);	

}
yellow();
function red(){
    setTimeout(function(){ document.getElementById("new").style.background= "red"  //on yellow + off red 
    },10000);	
    
    }
    red();
    yellow();
function green(){
    setTimeout(function(){ document.getElementById("grn").style.background= "green"  //on yellow + off red 
    },13000);	
    
    }
    green();
//     setTimeout(change(),15000);
//  }