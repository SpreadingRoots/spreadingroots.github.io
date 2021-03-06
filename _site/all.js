window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


/* BackgroundCheck
   http://kennethcachia.com/background-check
   v1.1.0 */

(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{a.BackgroundCheck=b(a)}}(this,function(){var h=window.orientation!==undefined?"orientationchange":"resize",d,c,b,l,t,q={};function s(x){if(x===undefined||x.targets===undefined){throw"Missing attributes"}q.targets=k(x.targets);q.images=k(x.images||"img");q.changeParent=x.changeParent||false;q.threshold=x.threshold||50;q.minComplexity=x.minComplexity||30;q.minOverlap=x.minOverlap||50;q.windowEvents=x.windowEvents||true;q.maxDuration=x.maxDuration||500;q.mask=x.mask||{r:0,g:255,b:0};q.debug=x.debug||false;q.classes=x.classes||{dark:"background--dark",light:"background--light",complex:"background--complex"};if(d===undefined){i();if(d){c.style.position="fixed";c.style.top="0px";c.style.left="0px";c.style.width="100%";c.style.height="100%";window.addEventListener(h,e.bind(null,function(){n();u()}));window.addEventListener("scroll",e.bind(null,u));n();u()}}}function w(){d=null;c=null;b=null;q={};if(l){clearTimeout(l)}}function g(x){if(v("debug")){console.log(x)}}function k(x){var y=x;if(typeof x==="string"){y=document.querySelectorAll(x)}else{if(x.nodeType===1){y=[x]}}if(!y||y.length===0){throw"Elements not found"}return y}function i(){c=document.createElement("canvas");if(c&&c.getContext){b=c.getContext("2d");d=true}else{d=false}}function j(y){var x=new Date().getTime()-y;g("Duration: "+x+"ms");if(x>v("maxDuration")){console.log("BackgroundCheck - Killed");o();w()}}function n(){t={left:0,top:0,right:document.body.clientWidth,bottom:window.innerHeight};c.width=document.body.clientWidth;c.height=window.innerHeight}function r(y){var x=y.boundingClientRect||y.getBoundingClientRect();b.drawImage(y,x.left,x.top,x.width,x.height)}function o(z){var x=z?[z]:v("targets"),A;for(var y=0;y<x.length;y++){A=x[y];A=v("changeParent")?A.parentNode:A;A.classList.remove(v("classes").light);A.classList.remove(v("classes").dark);A.classList.remove(v("classes").complex)}}function a(C){var E=C.getBoundingClientRect(),D,B,z=0,F,A=0,I=0,x,G=0,H=v("mask");if(E.width>0&&E.height>0){o(C);C=v("changeParent")?C.parentNode:C;B=b.getImageData(E.left,E.top,E.width,E.height).data;for(var y=0;y<B.length;y+=4){if(B[y]===H.r&&B[y+1]===H.g&&B[y+2]===H.b){G++}else{z++;D=(0.2126*B[y])+(0.7152*B[y+1])+(0.0722*B[y+2]);F=D-I;A+=F*F;I=I+F/z}}if(G<=(B.length/4)*(1-(v("minOverlap")/100))){x=Math.sqrt(A/z)/255;I=I/255;g("Target: "+C.className+" lum: "+I+" var: "+x);C.classList.add(I<=(v("threshold")/100)?v("classes").dark:v("classes").light);if(x>v("minComplexity")/100){C.classList.add(v("classes").complex)}}}}function f(y,x){y=y.getBoundingClientRect();x=x===t?x:x.getBoundingClientRect();return !(y.right<x.left||y.left>x.right||y.top>x.bottom||y.bottom<x.top)}function p(x){var D=new Date().getTime(),C=(x&&x.tagName==="IMG")?"image":"targets",A=x?false:true,z=v("targets").length,B;for(var y=0;y<z;y++){B=v("targets")[y];if(f(B,t)){if(C==="targets"&&(!x||x===B)){A=true;a(B)}else{if(C==="image"&&f(B,x)){a(B)}}}}if(C==="targets"&&!A){throw x+" is not a target"}j(D)}function u(D,E,x){var z,y=false,F=v("mask"),A=x?[x]:v("images");g("--- BackgroundCheck ---");g("Loading: "+y);g("onLoad event: "+(x&&x.src));if(d){if(E!==true){b.clearRect(0,0,c.width,c.height);b.fillStyle="rgb("+F.r+", "+F.g+", "+F.b+")";b.fillRect(0,0,c.width,c.height)}for(var B=0;B<A.length;B++){z=A[B];if(f(z,t)){if(z.tagName=="DIV"&&z.style.backgroundImage!==undefined){var C=new Image();C.src=z.style.backgroundImage.replace(/url\(|\)/gi,"");C.boundingClientRect=z.getBoundingClientRect();z=C}if(z.naturalWidth===0){y=true;g("Loading... "+z.src);z.addEventListener("load",u.bind(null,D,true,z))}else{g("Drawing: "+z.src);r(z)}}}if(!x&&!y){p(D)}else{if(x){p(x)}}}}function e(x){if(v("windowEvents")===true){if(l){clearTimeout(l)}l=setTimeout(x,200)}}function m(y,z){if(q[y]===undefined){throw"Unknown property - "+y}else{if(z===undefined){throw"Missing value for "+y}}if(y==="targets"||y==="images"){try{z=k(y==="images"&&!z?"img":z)}catch(x){z=[];throw x}}o();q[y]=z;u()}function v(x){if(q[x]===undefined){throw"Unknown property - "+x}return q[x]}return{init:s,destroy:w,refresh:u,set:m,get:v}}));
// this aint supposed to be private... just idiot proof
var showcasePwd = "sesame";

$(document).ready(function(){
  bindProjectNavArrows();
  bindPasswordDetect();
  fadePageIn();

  BackgroundCheck.init({
    targets: '.target',
    images: '.post-wide-hero'
  });

  setTimeout(function(){
    BackgroundCheck.refresh();
  },300);

  var $refreshButton = $('#refresh');
  var $results = $('#css_result');

  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);

  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });

});

function bindPasswordDetect(){
  $( "#showcase__password" ).keyup(function() {
    if($( "#showcase__password" ).val() == showcasePwd){
      $( "#showcase__password" ).hide();
      $( ".showcase").show();
    }
  });
}

function bindProjectNavArrows(){
  $(".next-project, .prev-project").click(function(evt){
    evt.preventDefault();
    fadePageOut($(this).attr('href'));
  });
}

function fadePageOut(targetHref){
  $("#main").fadeOut(200, function(){
    $( "#main" ).load( targetHref + " #container #main", function(response, status, xhr){
      bindProjectNavArrows();
      var stateObj = {
        html: $("#main").html()
      };
      document.title = $(response).filter("title").text();
      window.history.pushState(stateObj, document.title, targetHref);
      $("#main").fadeIn(200);
      bindPasswordDetect();
    });
  });
}

function fadePageIn(){
  $("body").fadeIn(200);
}

