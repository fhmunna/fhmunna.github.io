$_REVECHAT_API=window.$_REVECHAT_API||{},$_REVECHAT_API.getLocale=function(){return this.locale},$_REVECHAT_API.setLocale=function(a){return this.locale=a},function(){function a(){if($_REVECHAT_API._)for(var a=$_REVECHAT_API._.length,b=0;b<a;++b)$_REVECHAT_API._[b]()}function b(){var a,b=document.documentElement.clientWidth,c=window.screen.availWidth;return a=b/c,a=a||1}function c(){var a=document.createElement("style");a.type="text/css",a.innerHTML="@media only screen and (max-device-width:667px),screen and (max-width:450px){@media (max-width:667px){#reve-chat-container-div{min-width:82px;right:0!important;max-height:inherit;border-radius:0!important}.reve-chat-container-div{top:0!important}}} body.revechat-no-scroll{position: fixed !important; overflow: hidden; text-size-adjust: 100%; width: 100%; min-height: 100% !important; margin: 0px;}",document.body.appendChild(a)}function d(){$_REVECHAT_API.account_id=window.__revechat_account}function e(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|WPDesktop|IEMobile|Opera Mini/i.test(navigator.userAgent)}function f(){var a="10px",b=document.createElement("div");return e()&&(a="12px"),b.id="reve-chat-container-div",b.style.bottom="0px",b.style.right=a,b.style.position="fixed",b.style.zIndex=2147483647,b.style.border="0px none",b.style.overflow="hidden",b.style.marginTop="0px",b.style.marginBottom="0px",b.style.marginRight="0px",b.style.padding="0px",b.style.width="400px",b.style.height="39px",e()&&(q=!0,p=!!document.querySelector("meta[name=viewport]"),p?console.log("view port exists ! following the general responsive rules"):b.style.marginBottom="10px"),b}function g(){var a="10px",b=document.createElement("div");return e()&&(a="12px"),b.id="reve-chat-container-div",b.style.bottom="0px",b.style.right=a,b.style.position="fixed",b.style.zIndex=2147483647,b.style.border="0px none",b.style.overflow="hidden",b.style.marginTop="0px",b.style.marginBottom="0px",b.style.marginRight="0px",b.style.padding="0px",b.style.width="0px !important",b.style.height="0px",b.style.borderRadius="4px 4px 0 0 !important",e()&&(q=!0,p=!!document.querySelector("meta[name=viewport]"),p?console.log("view port exists ! following the general responsive rules"):b.style.marginBottom="10px"),b}function h(){var a=document.createElement("iframe");return a.id="reve-chat-widget-holder",a.frameBorder="0",a.src="about:blank",a.name="reve-chat-widget-holder",a.style.zIndex=2147483647,a.style.margin="0px",a.style.overflow="hidden",a.style.position="relative",a.style.verticalAlign="text-bottom",a.style.width="100%",a.style.height="100%",a}function i(){var a="";a=1==n?f():g();var b=h();a.appendChild(b),b.addEventListener?b.addEventListener("load",j,!0):b.attachEvent("onload",j),document.body?(2==n&&c(),document.body.insertBefore(a,document.body.firstChild)):setTimeout(function b(){document.body?(2==n&&c(),document.body.insertBefore(a,document.body.firstChild)):setTimeout(b,100)},100)}function j(){d(),0==r&&(l(o,$_REVECHAT_API.writeIframeContent),r=!0)}function k(){for(var a=!1,b=0;b<s.length;b++){try{a=s[b]()}catch(a){continue}break}return a}function l(a,b){if(window.XDomainRequest){var c=new XDomainRequest;c&&(c.onload=function(){b(c.responseText)},c.open("get",a,!0),c.send())}else{var c=k();c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(c.responseText)},c.open("GET",a),c.send()}}function m(a){var b=document.getElementById("reve-chat-widget-holder"),c=b.contentDocument;null!=c&&(c.open(),$_REVECHAT_API.IS_IFRAME_CONTENT_READY=!0,c.write(a),c.close())}var n=2,o="https://static.revechat.com/widget/d/html/client_version_2.html?ver=32";if("12602"!==window.__revechat_account&&"22695"!==window.__revechat_account||(o="https://static.revechat.com/widget/d/html/client.html?",n=1),"10664769"!==window.__revechat_account&&"4894233"!==window.__revechat_account&&"2814654"!==window.__revechat_account&&"2287008"!==window.__revechat_account||(o="https://static.revechat.com/widget/d/html/client_version_2-tripfur_2.html?ver=6",n=2),"2658144"!==window.__revechat_account){var p,q,r=!1;$_REVECHAT_API.getScaleValue=b,$_REVECHAT_API.fireAttachedEvents=a;var s=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];$_REVECHAT_API.writeIframeContent=m,i()}}(),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;c<f;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;c<f;c+=1)"string"==typeof rep[c]&&(d=rep[c],(e=str(d,i))&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i))&&g.push(quote(d)+(gap?": ":":")+e);return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;d<c;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),(reve_chat_ie_fallback=function(){window.objectSize=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.forEach||(Array.prototype.forEach=function(a){"use strict";if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=arguments[1],e=0;e<c;e++)e in b&&a.call(d,b[e],e,b)}),"undefined"!=typeof console&&void 0!==console.log||(console={},console.log=function(a){}),"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1}),window.isIE=function(){var a=navigator.userAgent.toLowerCase();return-1!=a.indexOf("msie")&&parseInt(a.split("msie")[1])}})();