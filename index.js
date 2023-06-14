var mise=document.querySelector(".mise")
var m200=document.querySelector(".m200")
var m400=document.querySelector(".m400")
var m600=document.querySelector(".m600")
var m800=document.querySelector(".m800")
var m1000=document.querySelector(".m1000")
var nombre1=document.querySelector(".nombre1")
var nombre2=document.querySelector(".nombre2")
var nombre3=document.querySelector(".nombre3")
var superieur1=document.querySelector(".superieur1")
var inferieur1=document.querySelector(".inferieur1")
var superieur2=document.querySelector(".superieur2")
var inferieur2=document.querySelector(".inferieur2")
var superieur3=document.querySelector(".superieur3")
var inferieur3=document.querySelector(".inferieur3")
var i1=0
var i1_1=0
var j1=0
var j11=0
var i2=0
var i2_2=0
var j2=0
var j22=0
var i3=0
var i3_3=0
var j3=0
var j33=0

// debut fonctions
function count1() {
    i1=i1+1
    nombre1.innerHTML=i1
}
function count1_1() {
    i1_1=i1_1+1
    nombre1.innerHTML=i1_1
}
function jeu1() {
    j1=j1+1
    nombre1.innerHTML=j1
}
function jeu1_1() {
    j11=j11+1
    nombre1.innerHTML=j11
}

function count2() {
    i2=i2+1
    nombre2.innerHTML=i2
}
function count2_2() {
    i2_2=i2_2+1
    nombre2.innerHTML=i2_2
}
function jeu2() {
    j2=j2+1
    nombre2.innerHTML=j2
}
function jeu2_2() {
    j22=j22+1
    nombre2.innerHTML=j22
}

function count3() {
    i3=i3+1
    nombre3.innerHTML=i3
}
function count3_3() {
    i3_3=i3_3+1
    nombre3.innerHTML=i3_3
}
function jeu3() {
    j3=j3+1
    nombre3.innerHTML=j3
}
function jeu3_3() {
    j33=j33+1
    nombre3.innerHTML=j33
}
//fin fonctions
m200.addEventListener("click",mise200)
function mise200(){
    mise.style.display="none"
    var rm1=Math.floor(Math.random()*12)
    var rm2=Math.floor(Math.random()*12)
    var rm3=Math.floor(Math.random()*12)
    if (rm1==0) {
        rm1=1
     }
     if (rm2==0) {
         rm2=1
    }
    if (rm3==0) {
        rm3=1
   }
   i1=0
   i1_1=0
   j1=0
   j11=0
   resultat1=0

   i2=0
   i2_2=0
   j2=0
   j22=0
   resultat2=0

   i3=0
   i3_3=0
   j3=0
   j33=0
   resultat3=0
    var d1 = setInterval(() => {
        count1()
        if (i1>11) {
            count1_1()
            if (i1_1>rm1-1) {
                clearInterval(d1)
                superieur1.childNodes[1].innerHTML=" "+rm1
                inferieur1.childNodes[1].innerHTML=" "+rm1
             }
        }
    }, 100);

    var d2 = setInterval(() => {
        count2()
        if (i2>11) {
            count2_2()
            if (i2_2>rm2-1) {
                clearInterval(d2)
                superieur2.childNodes[1].innerHTML=" "+rm2
                inferieur2.childNodes[1].innerHTML=" "+rm2
             }
        }
    }, 100);

    var d3 = setInterval(() => {
        count3()
        if (i3>11) {
            count3_3()
            if (i3_3>rm3-1) {
                clearInterval(d3)
                superieur3.childNodes[1].innerHTML=" "+rm3
                inferieur3.childNodes[1].innerHTML=" "+rm3
             }
        }
    }, 100);
    superieur1.addEventListener("click",tour1sup)
    superieur2.addEventListener("click",tour2sup)
    superieur3.addEventListener("click",tour3sup)
    inferieur1.addEventListener("click",tour1inf)
    inferieur2.addEventListener("click",tour2inf)
    inferieur3.addEventListener("click",tour3inf)
    function tour1sup() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1>rm1) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour1inf() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1<rm1) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour2sup() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2>rm2) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
    function tour2inf() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2<rm2) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }


    function tour3sup() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3>rm3) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour3inf() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3<rm3) {
                    alert("Félicitation!! vous avez gagner 400FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
}







m400.addEventListener("click",mise400)
function mise400(){
    mise.style.display="none"
    var rm1=Math.floor(Math.random()*12)
    var rm2=Math.floor(Math.random()*12)
    var rm3=Math.floor(Math.random()*12)
    if (rm1==0) {
        rm1=1
     }
     if (rm2==0) {
         rm2=1
    }
    if (rm3==0) {
        rm3=1
   }
   i1=0
   i1_1=0
   j1=0
   j11=0
   resultat1=0

   i2=0
   i2_2=0
   j2=0
   j22=0
   resultat2=0

   i3=0
   i3_3=0
   j3=0
   j33=0
   resultat3=0
    var d1 = setInterval(() => {
        count1()
        if (i1>11) {
            count1_1()
            if (i1_1>rm1-1) {
                clearInterval(d1)
                superieur1.childNodes[1].innerHTML=" "+rm1
                inferieur1.childNodes[1].innerHTML=" "+rm1
             }
        }
    }, 100);

    var d2 = setInterval(() => {
        count2()
        if (i2>11) {
            count2_2()
            if (i2_2>rm2-1) {
                clearInterval(d2)
                superieur2.childNodes[1].innerHTML=" "+rm2
                inferieur2.childNodes[1].innerHTML=" "+rm2
             }
        }
    }, 100);

    var d3 = setInterval(() => {
        count3()
        if (i3>11) {
            count3_3()
            if (i3_3>rm3-1) {
                clearInterval(d3)
                superieur3.childNodes[1].innerHTML=" "+rm3
                inferieur3.childNodes[1].innerHTML=" "+rm3
             }
        }
    }, 100);
    superieur1.addEventListener("click",tour1sup)
    superieur2.addEventListener("click",tour2sup)
    superieur3.addEventListener("click",tour3sup)
    inferieur1.addEventListener("click",tour1inf)
    inferieur2.addEventListener("click",tour2inf)
    inferieur3.addEventListener("click",tour3inf)
    function tour1sup() {
        var resultat1=Math.floor(Math.random()*12)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1>rm1) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour1inf() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1<rm1) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour2sup() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2>rm2) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
    function tour2inf() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2<rm2) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }


    function tour3sup() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3>rm3) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour3inf() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3<rm3) {
                    alert("Félicitation!! vous avez gagner 800FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
}







m600.addEventListener("click",mise600)
function mise600(){
    mise.style.display="none"
    var rm1=Math.floor(Math.random()*12)
    var rm2=Math.floor(Math.random()*12)
    var rm3=Math.floor(Math.random()*12)
    if (rm1==0) {
        rm1=1
     }
     if (rm2==0) {
         rm2=1
    }
    if (rm3==0) {
        rm3=1
   }
   i1=0
   i1_1=0
   j1=0
   j11=0
   resultat1=0

   i2=0
   i2_2=0
   j2=0
   j22=0
   resultat2=0

   i3=0
   i3_3=0
   j3=0
   j33=0
   resultat3=0
    var d1 = setInterval(() => {
        count1()
        if (i1>11) {
            count1_1()
            if (i1_1>rm1-1) {
                clearInterval(d1)
                superieur1.childNodes[1].innerHTML=" "+rm1
                inferieur1.childNodes[1].innerHTML=" "+rm1
             }
        }
    }, 100);

    var d2 = setInterval(() => {
        count2()
        if (i2>11) {
            count2_2()
            if (i2_2>rm2-1) {
                clearInterval(d2)
                superieur2.childNodes[1].innerHTML=" "+rm2
                inferieur2.childNodes[1].innerHTML=" "+rm2
             }
        }
    }, 100);

    var d3 = setInterval(() => {
        count3()
        if (i3>11) {
            count3_3()
            if (i3_3>rm3-1) {
                clearInterval(d3)
                superieur3.childNodes[1].innerHTML=" "+rm3
                inferieur3.childNodes[1].innerHTML=" "+rm3
             }
        }
    }, 100);
    superieur1.addEventListener("click",tour1sup)
    superieur2.addEventListener("click",tour2sup)
    superieur3.addEventListener("click",tour3sup)
    inferieur1.addEventListener("click",tour1inf)
    inferieur2.addEventListener("click",tour2inf)
    inferieur3.addEventListener("click",tour3inf)
    function tour1sup() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1>rm1) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour1inf() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1<rm1) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour2sup() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2>rm2) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
    function tour2inf() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2<rm2) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }


    function tour3sup() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3>rm3) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour3inf() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3<rm3) {
                    alert("Félicitation!! vous avez gagner 1200FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
}









m800.addEventListener("click",mise800)
function mise800(){
    mise.style.display="none"
    var rm1=Math.floor(Math.random()*12)
    var rm2=Math.floor(Math.random()*12)
    var rm3=Math.floor(Math.random()*12)
    if (rm1==0) {
        rm1=1
     }
     if (rm2==0) {
         rm2=1
    }
    if (rm3==0) {
        rm3=1
   }
   i1=0
   i1_1=0
   j1=0
   j11=0
   resultat1=0

   i2=0
   i2_2=0
   j2=0
   j22=0
   resultat2=0

   i3=0
   i3_3=0
   j3=0
   j33=0
   resultat3=0
    var d1 = setInterval(() => {
        count1()
        if (i1>11) {
            count1_1()
            if (i1_1>rm1-1) {
                clearInterval(d1)
                superieur1.childNodes[1].innerHTML=" "+rm1
                inferieur1.childNodes[1].innerHTML=" "+rm1
             }
        }
    }, 100);

    var d2 = setInterval(() => {
        count2()
        if (i2>11) {
            count2_2()
            if (i2_2>rm2-1) {
                clearInterval(d2)
                superieur2.childNodes[1].innerHTML=" "+rm2
                inferieur2.childNodes[1].innerHTML=" "+rm2
             }
        }
    }, 100);

    var d3 = setInterval(() => {
        count3()
        if (i3>11) {
            count3_3()
            if (i3_3>rm3-1) {
                clearInterval(d3)
                superieur3.childNodes[1].innerHTML=" "+rm3
                inferieur3.childNodes[1].innerHTML=" "+rm3
             }
        }
    }, 100);
    superieur1.addEventListener("click",tour1sup)
    superieur2.addEventListener("click",tour2sup)
    superieur3.addEventListener("click",tour3sup)
    inferieur1.addEventListener("click",tour1inf)
    inferieur2.addEventListener("click",tour2inf)
    inferieur3.addEventListener("click",tour3inf)
    function tour1sup() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1>rm1) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour1inf() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1<rm1) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour2sup() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2>rm2) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
    function tour2inf() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2<rm2) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }


    function tour3sup() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3>rm3) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour3inf() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3<rm3) {
                    alert("Félicitation!! vous avez gagner 1600FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
}







m1000.addEventListener("click",mise1000)
function mise1000(){
    mise.style.display="none"
    var rm1=Math.floor(Math.random()*12)
    var rm2=Math.floor(Math.random()*12)
    var rm3=Math.floor(Math.random()*12)
    if (rm1==0) {
        rm1=1
     }
     if (rm2==0) {
         rm2=1
    }
    if (rm3==0) {
        rm3=1
   }
   i1=0
   i1_1=0
   j1=0
   j11=0
   resultat1=0

   i2=0
   i2_2=0
   j2=0
   j22=0
   resultat2=0

   i3=0
   i3_3=0
   j3=0
   j33=0
   resultat3=0
    var d1 = setInterval(() => {
        count1()
        if (i1>11) {
            count1_1()
            if (i1_1>rm1-1) {
                clearInterval(d1)
                superieur1.childNodes[1].innerHTML=" "+rm1
                inferieur1.childNodes[1].innerHTML=" "+rm1
             }
        }
    }, 100);

    var d2 = setInterval(() => {
        count2()
        if (i2>11) {
            count2_2()
            if (i2_2>rm2-1) {
                clearInterval(d2)
                superieur2.childNodes[1].innerHTML=" "+rm2
                inferieur2.childNodes[1].innerHTML=" "+rm2
             }
        }
    }, 100);

    var d3 = setInterval(() => {
        count3()
        if (i3>11) {
            count3_3()
            if (i3_3>rm3-1) {
                clearInterval(d3)
                superieur3.childNodes[1].innerHTML=" "+rm3
                inferieur3.childNodes[1].innerHTML=" "+rm3
             }
        }
    }, 100);
    superieur1.addEventListener("click",tour1sup)
    superieur2.addEventListener("click",tour2sup)
    superieur3.addEventListener("click",tour3sup)
    inferieur1.addEventListener("click",tour1inf)
    inferieur2.addEventListener("click",tour2inf)
    inferieur3.addEventListener("click",tour3inf)
    function tour1sup() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1>rm1) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour1inf() {
        var resultat1=Math.floor(Math.random()*8)
       var r1 = setInterval(() => {
            jeu1()
            if (j1>11) {
               jeu1_1() 
               if (j11>resultat1) {
                clearInterval(r1)
                nombre1.innerHTML=resultat1
                if (resultat1<rm1) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour2sup() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2>rm2) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
    function tour2inf() {
        var resultat2=Math.floor(Math.random()*8)
       var r2 = setInterval(() => {
            jeu2()
            if (j2>11) {
               jeu2_2() 
               if (j22>resultat2) {
                clearInterval(r2)
                nombre2.innerHTML=resultat2
                if (resultat2<rm2) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }


    function tour3sup() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3>rm3) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }

    function tour3inf() {
        var resultat3=Math.floor(Math.random()*8)
       var r3 = setInterval(() => {
            jeu3()
            if (j3>11) {
               jeu3_3() 
               if (j33>resultat3) {
                clearInterval(r3)
                nombre3.innerHTML=resultat3
                if (resultat3<rm3) {
                    alert("Félicitation!! vous avez gagner 2000FCFA")
                }else{
                    alert("vous avez perdu")
                }
                superieur1.removeEventListener("click",tour1sup,false)
                superieur2.removeEventListener("click",tour2sup,false)
                superieur3.removeEventListener("click",tour3sup,false)
                inferieur1.removeEventListener("click",tour1inf,false)
                inferieur2.removeEventListener("click",tour2inf,false)
                inferieur3.removeEventListener("click",tour3inf,false)
                mise.style.display="block"
               }
            }
        }, 100); 
    }
}