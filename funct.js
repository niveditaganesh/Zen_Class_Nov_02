
var API_key='8dab3e7c8e9a69a5505914c2d57f64de';
var restCountries= `https://restcountries.eu/rest/v2/all`
async function makeRequest(){
try{
    let response1=await fetch(restCountries)
let data= await response1.json();
console.log(data);
for(i=0;i<data.length;i++){
 var lat=data[i].latlng[0];
  var lon=data[i].latlng[1];
 var title=`<b>${data[i].name}</b>`;
 var info=`Region:<b>${data[i].region}</b><br>` 
 var capital=`Capital: <b>${data[i].capital}</b>`;
 if(lat !==undefined || lon !==undefined){
 //console.log(data[i].flag)
 weatherResponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`)
 let weatherdata= await weatherResponse.json();
 //console.log(weatherdata.main);

var div1=document.createElement('div');
       div1.setAttribute('class','card')
       div1.setAttribute('id','div1')
       var div2=document.createElement('div');
       div2.setAttribute('class','card-header')
       var tit=document.createElement('h4');
       tit.setAttribute('class','card-title');
       tit.innerHTML=title;
       div2.append(tit);
       var div3=document.createElement('div');
       div3.setAttribute('class','card-body')
       var image=document.createElement('img');
       image.setAttribute('id','image')
       image.setAttribute('class','card-img-top');
       image.setAttribute('src',`${data[i].flag}`)
       image.setAttribute('alt',`${data[i].flag}`)
       var capn=document.createElement('p');
       capn.setAttribute('class','card-text ');
       capn.setAttribute('id','capn')
       capn.innerHTML=capital;
       var list=document.createElement('ul');
       list.setAttribute('class','list-group list-group-flush')
       var line=document.createElement('li')
       line.setAttribute('class','list-group-item');
       line.innerHTML=info;
       var line2=document.createElement('a')
       line2.href='#'
       line2.setAttribute('class','card-link mods pops btn btn-primary');
       line2.innerHTML='Click for Weather';
       line2.setAttribute("data-placement","top")
       line2.setAttribute('data-toggle','modal')
      line2.setAttribute('data-target',"#nextModal"+i)
     line2.setAttribute('data-trigger','focus')
       $('.pops').popover('toggleEnabled');
       $('.popover-dismiss').popover({
        trigger: 'focus'
      })
    var mod1=document.createElement('div')
    mod1.setAttribute('id','nextModal'+i)
    mod1.setAttribute('class','modal modz')
    var mod_dialog1=document.createElement('div')
    mod_dialog1.setAttribute('class','modal-dialog')
    var mod_cont1=document.createElement('div')
    mod_cont1.setAttribute('class','modal-content')
    var mod_header1=document.createElement('div')
    mod_header1.setAttribute('class','modal-header')
    var mod_title1=document.createElement('h4')
    mod_title1.setAttribute('class','modal-title')
    mod_title1.innerHTML=`Weather: ${data[i].name}`;
    var btn_top1=document.createElement('button')
   btn_top1.setAttribute('class','close')
   btn_top1.setAttribute('type','button')
   btn_top1.setAttribute('data-dismiss',"modal")
   btn_top1.innerHTML= '&times';
   mod_header1.append(mod_title1,btn_top1)
   var mod_body1=document.createElement('div')
   mod_body1.setAttribute('class','modal-body') 
   var list1=document.createElement('ul')
   var li1=document.createElement('li')
   li1.innerHTML=`Temperature:${weatherdata.main.temp} F`
   var li2=document.createElement('li')
   li2.innerHTML=`Humidity: ${weatherdata.main.humidity} `
   var li3=document.createElement('li')
   li3.innerHTML=`Pressure: ${weatherdata.main.pressure} `
   var li4=document.createElement('li')
   li4.innerHTML=`Feels_Like: ${weatherdata.main.feels_like} `
   list1.append(li1,li2,li3,li4)
   mod_body1.append(list1);
   var mod_footer1=document.createElement('div')
   mod_footer1.setAttribute('class','modal-footer')
   var btn_btm1=document.createElement('button')
   btn_btm1.setAttribute('type','button')
   btn_btm1.setAttribute('class','btn btn-danger')
   btn_btm1.setAttribute('data-dismiss',"modal")
   btn_btm1.innerHTML='Close';
   mod_footer1.append(btn_btm1)
   mod1.append(mod_header1,mod_body1,mod_footer1)
   document.body.append(mod1)

       list.append(line)
       div3.append(image,capn,list,line2)
       div1.append(div2,div3)
       document.body.append(div1)
    }
}
}

catch(error){
        console.log(error)
    }
   }
   makeRequest();
   
