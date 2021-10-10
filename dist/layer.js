/*! @sxzz/layui-layer-v3.5.2 Web 通用弹出层组件 MIT License */
 ;"use strict";const jQuery=require("jquery");require("./theme/default/layer.css");var isLayui=window.layui&&layui.define,$,win,ready={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,a=i;a>0;a--)if("interactive"===t[a].readyState){e=t[a].src;break}return e||t[i].src}(),t=window.LAYUI_GLOBAL||{};return t.layer_dir||e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){var i=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return i[i.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,i){if(layer.path){var a=document.getElementsByTagName("head")[0],n=document.createElement("link");"string"==typeof t&&(i=t);var o=(i||e).replace(/\.|\//g,""),r="layuicss-"+o,s="creating",l=0;n.rel="stylesheet",n.href=layer.path+e,n.id=r,document.getElementById(r)||a.appendChild(n),"function"==typeof t&&!function d(e){var i=100,a=document.getElementById(r);return++l>1e4/i?window.console&&console.error(o+".css: Invalid"):void(1989===parseInt(ready.getStyle(a,"width"))?(e===s&&a.removeAttribute("lay-status"),a.getAttribute("lay-status")===s?setTimeout(d,i):t()):(a.setAttribute("lay-status",s),setTimeout(function(){d(s)},i)))}()}}},layer={v:"3.5.1",ie:function(){var e=navigator.userAgent.toLowerCase();return!!(window.ActiveXObject||"ActiveXObject"in window)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:window.layer&&window.layer.v?1e5:0,path:ready.getPath,config:function(e,t){return e=e||{},layer.cache=ready.config=$.extend({},ready.config,e),layer.path=ready.config.path||layer.path,"string"==typeof e.extend&&(e.extend=[e.extend]),ready.config.path&&layer.ready(),e.extend?(isLayui?layui.addcss("modules/layer/"+e.extend):ready.link("theme/"+e.extend),this):this},ready:function(e){var t="layer",i="",a=(isLayui?"modules/layer/":"theme/")+"default/layer.css?v="+layer.v+i;return isLayui?layui.addcss(a,e,t):ready.link(a,e,t),this},alert:function(e,t,i){var a="function"==typeof t;return a&&(i=t),layer.open($.extend({content:e,yes:i},a?{}:t))},confirm:function(e,t,i,a){var n="function"==typeof t;return n&&(a=i,i=t),layer.open($.extend({content:e,btn:ready.btn,yes:i,btn2:a},n?{}:t))},msg:function(e,t,i){var a="function"==typeof t,n=ready.config.skin,o=(n?n+" "+n+"-msg":"")||"layui-layer-msg",r=doms.anim.length-1;return a&&(i=t),layer.open($.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},a&&!ready.config.skin?{skin:o+" layui-layer-hui",anim:r}:function(){return t=t||{},(t.icon===-1||void 0===t.icon&&!ready.config.skin)&&(t.skin=o+" "+(t.skin||"layui-layer-hui")),t}()))},load:function(e,t){return layer.open($.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,i){return layer.open($.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:260},i))}},Class=function(e){var t=this,i=function(){t.creat()};t.index=++layer.index,t.config.maxWidth=$(win).width()-30,t.config=$.extend({},t.config,ready.config,e),document.body?i():setTimeout(function(){i()},30)};Class.pt=Class.prototype;var doms=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];doms.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],doms.SHADE="layui-layer-shade",doms.MOVE="layui-layer-move",Class.pt.config={type:0,shade:.3,fixed:!0,move:doms[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,minStack:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},Class.pt.vessel=function(e,t){var i=this,a=i.index,n=i.config,o=n.zIndex+a,r="object"==typeof n.title,s=n.maxmin&&(1===n.type||2===n.type),l=n.title?'<div class="layui-layer-title" style="'+(r?n.title[1]:"")+'">'+(r?n.title[0]:n.title)+"</div>":"";return n.zIndex=o,t([n.shade?'<div class="'+doms.SHADE+'" id="'+doms.SHADE+a+'" times="'+a+'" style="'+("z-index:"+(o-1)+"; ")+'"></div>':"",'<div class="'+doms[0]+(" layui-layer-"+ready.type[n.type])+(0!=n.type&&2!=n.type||n.shade?"":" layui-layer-border")+" "+(n.skin||"")+'" id="'+doms[0]+a+'" type="'+ready.type[n.type]+'" times="'+a+'" showtime="'+n.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+n.area[0]+";height:"+n.area[1]+";position:"+(n.fixed?"fixed;":"absolute;")+'">'+(e&&2!=n.type?"":l)+'<div id="'+(n.id||"")+'" class="layui-layer-content'+(0==n.type&&n.icon!==-1?" layui-layer-padding":"")+(3==n.type?" layui-layer-loading"+n.icon:"")+'">'+(0==n.type&&n.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+n.icon+'"></i>':"")+(1==n.type&&e?"":n.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=s?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return n.closeBtn&&(e+='<a class="layui-layer-ico '+doms[7]+" "+doms[7]+(n.title?n.closeBtn:4==n.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(n.btn?function(){var e="";"string"==typeof n.btn&&(n.btn=[n.btn]);for(var t=0,i=n.btn.length;t<i;t++)e+='<a class="'+doms[6]+t+'">'+n.btn[t]+"</a>";return'<div class="'+doms[6]+" layui-layer-btn-"+(n.btnAlign||"")+'">'+e+"</div>"}():"")+(n.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],l,$('<div class="'+doms.MOVE+'" id="'+doms.MOVE+'"></div>')),i},Class.pt.creat=function(){var e=this,t=e.config,i=e.index,a=t.content,n="object"==typeof a,o=$("body");if(!t.id||!$("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==layer.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:ready.btn[0],layer.closeAll("dialog");break;case 2:var a=t.content=n?t.content:[t.content||"","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+doms[4]+i+'" name="'+doms[4]+i+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,layer.closeAll("loading");break;case 4:n||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||layer.closeAll("tips")}if(e.vessel(n,function(r,s,l){o.append(r[0]),n?function(){2==t.type||4==t.type?function(){$("body").append(r[1])}():function(){a.parents("."+doms[0])[0]||(a.data("display",a.css("display")).show().addClass("layui-layer-wrap").wrap(r[1]),$("#"+doms[0]+i).find("."+doms[5]).before(s))}()}():o.append(r[1]),$("#"+doms.MOVE)[0]||o.append(ready.moveElem=l),e.layero=$("#"+doms[0]+i),e.shadeo=$("#"+doms.SHADE+i),t.scrollbar||doms.html.css("overflow","hidden").attr("layer-full",i)}).auto(i),e.shadeo.css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==layer.ie&&e.layero.find("iframe").attr("src",a[0]),4==t.type?e.tips():function(){e.offset(),parseInt(ready.getStyle(document.getElementById(doms.MOVE),"z-index"))||function(){e.layero.css("visibility","hidden"),layer.ready(function(){e.offset(),e.layero.css("visibility","visible")})}()}(),t.fixed&&win.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(i),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){layer.close(e.index)},t.time),e.move().callback(),doms.anim[t.anim]){var r="layer-anim "+doms.anim[t.anim];e.layero.addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass(r)})}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},Class.pt.auto=function(e){var t=this,i=t.config,a=$("#"+doms[0]+e);""===i.area[0]&&i.maxWidth>0&&(layer.ie&&layer.ie<8&&i.btn&&a.width(a.innerWidth()),a.outerWidth()>i.maxWidth&&a.width(i.maxWidth));var n=[a.innerWidth(),a.innerHeight()],o=a.find(doms[1]).outerHeight()||0,r=a.find("."+doms[6]).outerHeight()||0,s=function(e){e=a.find(e),e.height(n[1]-o-r-2*(0|parseFloat(e.css("padding-top"))))};switch(i.type){case 2:s("iframe");break;default:""===i.area[1]?i.maxHeight>0&&a.outerHeight()>i.maxHeight?(n[1]=i.maxHeight,s("."+doms[5])):i.fixed&&n[1]>=win.height()&&(n[1]=win.height(),s("."+doms[5])):s("."+doms[5])}return t},Class.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],n="object"==typeof t.offset;e.offsetTop=(win.height()-a[1])/2,e.offsetLeft=(win.width()-a[0])/2,n?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=win.width()-a[0]:"b"===t.offset?e.offsetTop=win.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=win.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=win.width()-a[0]):"rb"===t.offset?(e.offsetTop=win.height()-a[1],e.offsetLeft=win.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?win.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?win.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=win.scrollTop(),e.offsetLeft+=win.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=win.height()-(i.find(doms[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},Class.pt.tips=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],n=$(t.follow);n[0]||(n=$("body"));var o={width:n.outerWidth(),height:n.outerHeight(),top:n.offset().top,left:n.offset().left},r=i.find(".layui-layer-TipsG"),s=t.tips[0];t.tips[1]||r.remove(),o.autoLeft=function(){o.left+a[0]-win.width()>0?(o.tipLeft=o.left+o.width-a[0],r.css({right:12,left:"auto"})):o.tipLeft=o.left},o.where=[function(){o.autoLeft(),o.tipTop=o.top-a[1]-10,r.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left+o.width+10,o.tipTop=o.top,r.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){o.autoLeft(),o.tipTop=o.top+o.height+10,r.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left-a[0]-10,o.tipTop=o.top,r.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],o.where[s-1](),1===s?o.top-(win.scrollTop()+a[1]+16)<0&&o.where[2]():2===s?win.width()-(o.left+o.width+a[0]+16)>0||o.where[3]():3===s?o.top-win.scrollTop()+o.height+a[1]+16-win.height()>0&&o.where[0]():4===s&&a[0]+16-o.left>0&&o.where[1](),i.find("."+doms[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),i.css({left:o.tipLeft-(t.fixed?win.scrollLeft():0),top:o.tipTop-(t.fixed?win.scrollTop():0)})},Class.pt.move=function(){var e=this,t=e.config,i=$(document),a=e.layero,n=a.find(t.move),o=a.find(".layui-layer-resize"),r={};return t.move&&n.css("cursor","move"),n.on("mousedown",function(e){e.preventDefault(),t.move&&(r.moveStart=!0,r.offset=[e.clientX-parseFloat(a.css("left")),e.clientY-parseFloat(a.css("top"))],ready.moveElem.css("cursor","move").show())}),o.on("mousedown",function(e){e.preventDefault(),r.resizeStart=!0,r.offset=[e.clientX,e.clientY],r.area=[a.outerWidth(),a.outerHeight()],ready.moveElem.css("cursor","se-resize").show()}),i.on("mousemove",function(i){if(r.moveStart){var n=i.clientX-r.offset[0],o=i.clientY-r.offset[1],s="fixed"===a.css("position");if(i.preventDefault(),r.stX=s?0:win.scrollLeft(),r.stY=s?0:win.scrollTop(),!t.moveOut){var l=win.width()-a.outerWidth()+r.stX,d=win.height()-a.outerHeight()+r.stY;n<r.stX&&(n=r.stX),n>l&&(n=l),o<r.stY&&(o=r.stY),o>d&&(o=d)}a.css({left:n,top:o})}if(t.resize&&r.resizeStart){var n=i.clientX-r.offset[0],o=i.clientY-r.offset[1];i.preventDefault(),layer.style(e.index,{width:r.area[0]+n,height:r.area[1]+o}),r.isResize=!0,t.resizing&&t.resizing(a)}}).on("mouseup",function(e){r.moveStart&&(delete r.moveStart,ready.moveElem.hide(),t.moveEnd&&t.moveEnd(a)),r.resizeStart&&(delete r.resizeStart,ready.moveElem.hide())}),e},Class.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,i);e===!1||layer.close(t.index)}var t=this,i=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?i.find("iframe").on("load",function(){a.success(i,t.index)}):a.success(i,t.index)),6==layer.ie&&t.IE6(i),i.find("."+doms[6]).children("a").on("click",function(){var e=$(this).index();if(0===e)a.yes?a.yes(t.index,i):a.btn1?a.btn1(t.index,i):layer.close(t.index);else{var n=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,i);n===!1||layer.close(t.index)}}),i.find("."+doms[7]).on("click",e),a.shadeClose&&t.shadeo.on("click",function(){layer.close(t.index)}),i.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(i,t.index);e===!1||layer.min(t.index,a)}),i.find(".layui-layer-max").on("click",function(){$(this).hasClass("layui-layer-maxmin")?(layer.restore(t.index),a.restore&&a.restore(i,t.index)):(layer.full(t.index,a),setTimeout(function(){a.full&&a.full(i,t.index)},100))}),a.end&&(ready.end[t.index]=a.end)},ready.reselect=function(){$.each($("select"),function(e,t){var i=$(this);i.parents("."+doms[0])[0]||1==i.attr("layer")&&$("."+doms[0]).length<1&&i.removeAttr("layer").show(),i=null})},Class.pt.IE6=function(e){$("select").each(function(e,t){var i=$(this);i.parents("."+doms[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},Class.pt.openLayer=function(){var e=this;layer.zIndex=e.config.zIndex,layer.setTop=function(e){var t=function(){layer.zIndex++,e.css("z-index",layer.zIndex+1)};return layer.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),layer.zIndex}},ready.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},ready.rescollbar=function(e){doms.html.attr("layer-full")==e&&(doms.html[0].style.removeProperty?doms.html[0].style.removeProperty("overflow"):doms.html[0].style.removeAttribute("overflow"),doms.html.removeAttr("layer-full"))},window.layer=layer,layer.getChildFrame=function(e,t){return t=t||$("."+doms[4]).attr("times"),$("#"+doms[0]+t).find("iframe").contents().find(e)},layer.getFrameIndex=function(e){return $("#"+e).parents("."+doms[4]).attr("times")},layer.iframeAuto=function(e){if(e){var t=layer.getChildFrame("html",e).outerHeight(),i=$("#"+doms[0]+e),a=i.find(doms[1]).outerHeight()||0,n=i.find("."+doms[6]).outerHeight()||0;i.css({height:t+a+n}),i.find("iframe").css({height:t})}},layer.iframeSrc=function(e,t){$("#"+doms[0]+e).find("iframe").attr("src",t)},layer.style=function(e,t,i){var a=$("#"+doms[0]+e),n=a.find(".layui-layer-content"),o=a.attr("type"),r=a.find(doms[1]).outerHeight()||0,s=a.find("."+doms[6]).outerHeight()||0;a.attr("minLeft");o!==ready.type[3]&&o!==ready.type[4]&&(i||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-r-s<=64&&(t.height=64+r+s)),a.css(t),s=a.find("."+doms[6]).outerHeight(),o===ready.type[2]?a.find("iframe").css({height:parseFloat(t.height)-r-s}):n.css({height:parseFloat(t.height)-r-s-parseFloat(n.css("padding-top"))-parseFloat(n.css("padding-bottom"))}))},layer.min=function(e,t){t=t||{};var i=$("#"+doms[0]+e),a=$("#"+doms.SHADE+e),n=i.find(doms[1]).outerHeight()||0,o=i.attr("minLeft")||181*ready.minIndex+"px",r=i.css("position"),s={width:180,height:n,position:"fixed",overflow:"hidden"};ready.record(i),ready.minLeft[0]&&(o=ready.minLeft[0],ready.minLeft.shift()),t.minStack&&(s.left=o,s.top=win.height()-n,i.attr("minLeft")||ready.minIndex++,i.attr("minLeft",o)),i.attr("position",r),layer.style(e,s,!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(doms[4]).hide(),ready.rescollbar(e),a.hide()},layer.restore=function(e){var t=$("#"+doms[0]+e),i=$("#"+doms.SHADE+e),a=t.attr("area").split(",");t.attr("type");layer.style(e,{width:parseFloat(a[0]),height:parseFloat(a[1]),top:parseFloat(a[2]),left:parseFloat(a[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(doms[4]).show(),ready.rescollbar(e),i.show()},layer.full=function(e){var t,i=$("#"+doms[0]+e);ready.record(i),doms.html.attr("layer-full")||doms.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===i.css("position");layer.style(e,{top:t?0:win.scrollTop(),left:t?0:win.scrollLeft(),width:win.width(),height:win.height()},!0),i.find(".layui-layer-min").hide()},100)},layer.title=function(e,t){var i=$("#"+doms[0]+(t||layer.index)).find(doms[1]);i.html(e)},layer.close=function(e,t){var i=$("#"+doms[0]+e),a=i.attr("type"),n="layer-anim-close";if(i[0]){var o="layui-layer-wrap",r=function(){if(a===ready.type[1]&&"object"===i.attr("conType")){i.children(":not(."+doms[5]+")").remove();for(var n=i.find("."+o),r=0;r<2;r++)n.unwrap();n.css("display",n.data("display")).removeClass(o)}else{if(a===ready.type[2])try{var s=$("#"+doms[4]+e)[0];s.contentWindow.document.write(""),s.contentWindow.close(),i.find("."+doms[5])[0].removeChild(s)}catch(l){}i[0].innerHTML="",i.remove()}"function"==typeof ready.end[e]&&ready.end[e](),delete ready.end[e],"function"==typeof t&&t()};i.data("isOutAnim")&&i.addClass("layer-anim "+n),$("#layui-layer-moves, #"+doms.SHADE+e).remove(),6==layer.ie&&ready.reselect(),ready.rescollbar(e),i.attr("minLeft")&&(ready.minIndex--,ready.minLeft.push(i.attr("minLeft"))),layer.ie&&layer.ie<10||!i.data("isOutAnim")?r():setTimeout(function(){r()},200)}},layer.closeAll=function(e,t){"function"==typeof e&&(t=e,e=null);var i=$("."+doms[0]);$.each(i,function(a){var n=$(this),o=e?n.attr("type")===e:1;o&&layer.close(n.attr("times"),a===i.length-1?t:null),o=null}),0===i.length&&"function"==typeof t&&t()};var cache=layer.cache||{},skin=function(e){return cache.skin?" "+cache.skin+" "+cache.skin+"-"+e:""};layer.prompt=function(e,t){var i="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var a=e.area;i='style="width: '+a[0]+"; height: "+a[1]+';"',delete e.area}var n,o=2==e.formType?'<textarea class="layui-layer-input"'+i+"></textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input">'}(),r=e.success;return delete e.success,layer.open($.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:o,skin:"layui-layer-prompt"+skin("prompt"),maxWidth:win.width(),success:function(t){n=t.find(".layui-layer-input"),n.val(e.value||"").focus(),"function"==typeof r&&r(t)},resize:!1,yes:function(i){var a=n.val();""===a?n.focus():a.length>(e.maxlength||500)?layer.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",n,{tips:1}):t&&t(a,i,n)}},e))},layer.tab=function(e){e=e||{};var t=e.tab||{},i="layui-this",a=e.success;return delete e.success,layer.open($.extend({type:1,skin:"layui-layer-tab"+skin("tab"),resize:!1,title:function(){var e=t.length,a=1,n="";if(e>0)for(n='<span class="'+i+'">'+t[0].title+"</span>";a<e;a++)n+="<span>"+t[a].title+"</span>";return n}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,a=1,n="";if(e>0)for(n='<li class="layui-layer-tabli '+i+'">'+(t[0].content||"no content")+"</li>";a<e;a++)n+='<li class="layui-layer-tabli">'+(t[a].content||"no  content")+"</li>";return n}()+"</ul>",success:function(t){var n=t.find(".layui-layer-title").children(),o=t.find(".layui-layer-tabmain").children();n.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=$(this),n=a.index();a.addClass(i).siblings().removeClass(i),o.eq(n).show().siblings().hide(),"function"==typeof e.change&&e.change(n)}),"function"==typeof a&&a(t)}},e))},layer.photos=function(e,t,i){function a(e,t,i){var a=new Image;return a.src=e,a.complete?t(a):(a.onload=function(){a.onload=null,t(a)},void(a.onerror=function(e){a.onerror=null,i(e)}))}var n={};if(e=e||{},e.photos){var o=!("string"==typeof e.photos||e.photos instanceof $),r=o?e.photos:{},s=r.data||[],l=r.start||0;n.imgIndex=(0|l)+1,e.img=e.img||"img";var d=e.success;if(delete e.success,o){if(0===s.length)return layer.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var f=$(e.photos),c=function(){s=[],f.find(e.img).each(function(e){var t=$(this);t.attr("layer-index",e),s.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(c(),0===s.length)return;if(t||f.on("click",e.img,function(){c();var t=$(this),i=t.attr("layer-index");layer.photos($.extend(e,{photos:{start:i,data:s,tab:e.tab},full:e.full}),!0)}),!t)return}n.imgprev=function(e){n.imgIndex--,n.imgIndex<1&&(n.imgIndex=s.length),n.tabimg(e)},n.imgnext=function(e,t){n.imgIndex++,n.imgIndex>s.length&&(n.imgIndex=1,t)||n.tabimg(e)},n.keyup=function(e){if(!n.end){var t=e.keyCode;e.preventDefault(),37===t?n.imgprev(!0):39===t?n.imgnext(!0):27===t&&layer.close(n.index)}},n.tabimg=function(t){if(!(s.length<=1))return r.start=n.imgIndex-1,layer.close(n.index),layer.photos(e,!0,t)},n.event=function(){n.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),n.imgprev(!0)}),n.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),n.imgnext(!0)}),$(document).on("keyup",n.keyup)},n.loadi=layer.load(1,{shade:!("shade"in e)&&.9,scrollbar:!1}),a(s[l].src,function(t){layer.close(n.loadi),i&&(e.anim=-1),n.index=layer.open($.extend({type:1,id:"layui-layer-photos",area:function(){var i=[t.width,t.height],a=[$(window).width()-100,$(window).height()-100];if(!e.full&&(i[0]>a[0]||i[1]>a[1])){var n=[i[0]/a[0],i[1]/a[1]];n[0]>n[1]?(i[0]=i[0]/n[0],i[1]=i[1]/n[0]):n[0]<n[1]&&(i[0]=i[0]/n[1],i[1]=i[1]/n[1])}return[i[0]+"px",i[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,anim:5,isOutAnim:!1,skin:"layui-layer-photos"+skin("photos"),content:'<div class="layui-layer-phimg"><img src="'+s[l].src+'" alt="'+(s[l].alt||"")+'" layer-pid="'+s[l].pid+'">'+function(){return s.length>1?'<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:'+(i?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(s[l].alt||"")+"</a><em>"+n.imgIndex+" / "+s.length+"</em></span></div></div>":""}()+"</div>",success:function(t,i){n.bigimg=t.find(".layui-layer-phimg"),n.imgsee=t.find(".layui-layer-imgbar"),n.event(t),e.tab&&e.tab(s[l],t),"function"==typeof d&&d(t)},end:function(){n.end=!0,$(document).off("keyup",n.keyup)}},e))},function(){layer.close(n.loadi),layer.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){s.length>1&&n.imgnext(!0,!0)}})})}},ready.run=function(e){$=e,win=$(window),doms.html=$("html"),layer.open=function(e){var t=new Class(e);return t.index}},function(){layer.ready(),ready.run(jQuery)}();