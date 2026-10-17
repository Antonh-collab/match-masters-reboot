/* Minimal MRAID stand-in so ad-network builds run outside an ad SDK */
(function(){
  if (window.mraid) return;
  var L={};
  function fire(ev,args){(L[ev]||[]).slice().forEach(function(f){try{f.apply(null,args||[])}catch(e){console.error(e)}})}
  window.mraid={
    getVersion:function(){return '3.0'},
    getState:function(){return 'default'},
    getPlacementType:function(){return 'interstitial'},
    isViewable:function(){return true},
    getAudioVolumePercentage:function(){return 100},
    addEventListener:function(ev,f){(L[ev]=L[ev]||[]).push(f);
      if(ev==='ready')setTimeout(function(){f()},0);
      if(ev==='viewableChange')setTimeout(function(){f(true)},0);
      if(ev==='stateChange')setTimeout(function(){f('default')},0);},
    removeEventListener:function(ev,f){L[ev]=(L[ev]||[]).filter(function(g){return g!==f})},
    open:function(url){try{var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();}catch(e){}},
    close:function(){}, expand:function(){}, resize:function(){}, useCustomClose:function(){},
    getMaxSize:function(){return {width:innerWidth,height:innerHeight}},
    getScreenSize:function(){return {width:innerWidth,height:innerHeight}},
    getCurrentPosition:function(){return {x:0,y:0,width:innerWidth,height:innerHeight}},
    getDefaultPosition:function(){return {x:0,y:0,width:innerWidth,height:innerHeight}},
    getExpandProperties:function(){return {width:innerWidth,height:innerHeight,useCustomClose:false,isModal:true}},
    setExpandProperties:function(){}, getOrientationProperties:function(){return {allowOrientationChange:true,forceOrientation:'none'}},
    setOrientationProperties:function(){}, supports:function(){return false}
  };
})();
