(()=>{"use strict";document.getElementById("form").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("search-input");(async(e,t)=>{try{const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${t}`),n=await o.json();return(e=>{const[t,o,n,c,{wind:s}]=[e.main,e.name,e.sys.country,e.weather[0],e];console.log(t,o,n,c,s)})(n),console.log(n),n}catch(e){console.log(e)}})(t.value,"49eaa4abf6e4f3d9db8f20bfed37ffca"),t.value=""}));const e=document.getElementById("switch-measurement");e.addEventListener("click",(()=>{console.log(e.checked)})),console.log(function(e){const t=Object.keys(e).forEach((o=>(console.log(o),"humidity"===o&&"pressure"===o||(e[o]=function(e){const t=Math.floor(e/10);return console.log(t),t}(e[o])),console.log(t),t)));return t}({feels_like:301.95,humidity:33,pressure:1014,temp:304.54,temp_max:305.93,temp_min:303.15}))})();