var md_unit_view=8;var mdUnitNum=7;var rightMenuWidth=300;var scrDefault=960;var zoomDefault=0.45;var zoomInValue=0.7;var capImgSizedefault=800;var capImgSize1024=800;var capImgSize768=400;var capImgSize320=300;var img_url="img/patch/";var httpUrl="http://iocust.com/site/";var matchArray1
var matchArray2
var matchArray3
var matchArray4
var matchArray5
var matchArray6
var matchArray7
var mdColor_unit1;var mdColor_unit2;var mdColor_unit3;var mdColor_unit4;var mdColor_unit5;var mdColor_unit6;var mdColor_unit7;var patch_url;var fullScreen;var unitIndex;function imgColorCode_check(){if(unitIndex.indexOf("A")!=-1){angleNum=1;}else if(unitIndex.indexOf("B")!=-1){angleNum=2;}else if(unitIndex.indexOf("C")!=-1){angleNum=3;}else if(unitIndex.indexOf("D")!=-1){angleNum=4;}else if(unitIndex.indexOf("E")!=-1){angleNum=5;}else{return false;}}function patternUrl_match(index){$("#svg_pattern_"+unitIndex).find("image").attr("xlink:href","img/render/ren"+index+angleNum+".jpg");$("#svg_unit_"+unitIndex).attr("fill","url(#svg_pattern_"+unitIndex+")");}function color_match1(index){for(var i=0;i<matchArray1.length;i++){unitIndex=matchArray1[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit1=index;}function color_match2(index){for(var i=0;i<matchArray2.length;i++){unitIndex=matchArray2[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit2=index;}function color_match3(index){for(var i=0;i<matchArray3.length;i++){unitIndex=matchArray3[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit3=index;}function color_match4(index){for(var i=0;i<matchArray4.length;i++){unitIndex=matchArray4[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit4=index;}function color_match5(index){for(var i=0;i<matchArray5.length;i++){unitIndex=matchArray5[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit5=index;}function color_match6(index){for(var i=0;i<matchArray6.length;i++){unitIndex=matchArray6[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit6=index;}function color_match7(index){for(var i=0;i<matchArray7.length;i++){unitIndex=matchArray7[i];imgColorCode_check();patternUrl_match(index);}mdColor_unit7=index;}function pacth_match(index){patch_unit=index;patch_url=img_url+"patch"+index+".png";patch_url2=img_url+"patchS"+index+".png";$("#pacthBackSide").attr({"xlink:href":patch_url2});$("#pacthBack").attr({"xlink:href":patch_url});if(svg_num==1||svg_num==2||svg_num==3||svg_num==7||svg_num==8){uxBlockSlider.goToSlide(4);}else{return false}}var panZoom_angle=svgPanZoom('#svg_angle');function zoom_start(){fullScreenInit();$("#svg_angle").css({"width":screenWidth});$("#svg_angle").css({"height":screenHeight});$("#svg_angle").css("margin-top",0);panZoom_angle.resize();panZoom_angle.fit()
panZoom_angle.center();fullScreen=true;}function zoom_end(){normalScreenInit();var svgMarginHeight=$(".navigation").height()+$(".footer").height();var svgMargin=$(".navigation").height();$("#svg_angle").css({"width":screenWidth-rightMenuWidth});$("#svg_angle").css({"height":screenHeight-svgMarginHeight});$("#svg_angle").css("margin-top",svgMargin);panZoom_angle.resize();panZoom_angle.fit();panZoom_angle.center();fullScreen=false;}function svgZoomIn(){panZoom_angle.zoomIn();}function svgZoomOut(){panZoom_angle.zoomOut();}function svgZoomRe(){panZoom_angle.resize();panZoom_angle.fit()
panZoom_angle.center();}function fullScreenInit(){$("#slideBock").css("display","none");$(".fixmenu, #zoompage, .btnClass.oc, #pageMove, .navigation, .subNavi, .customSetArea, .mobileOptionProduct, .mobileOptionTool, .select").css("visibility","hidden");$(".zoomTool").css("display","block");$(".wrap").css("height",screenHeight);$(".main_title, .nextBtn").addClass("fullScreen");$("#custom_visual").css({"width":screenWidth});}function normalScreenInit(){$("#slideBock").css("display","block");$(".fixmenu, #zoompage, .btnClass.oc, #pageMove, .navigation, .subNavi, .customSetArea, .mobileOptionProduct, .mobileOptionTool, .select").css("visibility","visible");$(".zoomTool").css("display","none");$(".wrap").css("height","auto");$(".main_title, .nextBtn").removeClass("fullScreen");$("#custom_visual").css({"width":screenWidth});}var imgData;function custOk(){$("#resultLayer").css("display","block");fullScreenInit();$("#svg_angle1,#svg_angle5").css({"display":"block"});$("#svg_angle2,#svg_angle3,#svg_angle4,#svg_angle6,#svg_angle7,#svg_angle8").css({"display":"none"});$(".capImgblock").css("opacity","1.0");$("#custom_visual, #svg_sean, #canvas_capture, .capImgblock").css({"width":800,"height":800});$("#svg_angle").css({"width":800,"height":800});$("#svg_angle1").attr('transform','translate(-290 , 10)');$("#svg_angle5").attr('transform','translate(280 , 10)');panZoom_angle.reset();panZoom_angle.resize();panZoom_angle.fit();panZoom_angle.center();setTimeout(function(){var svg=$("#svg_sean").html().replace(/>\s+/g,">").replace(/\s+</g,"<");var canvas=$("#canvas_capture")[0];canvg(canvas,svg,{renderCallback:function(){$("#svg_angle5").css({"display":"none"});$("#svg_angle1").css({"display":"block"});$("#custom_visual").css({"width":screenWidth});$("#svg_angle").css({"width":screenWidth-rightMenuWidth,"height":screenHeight});$("#svg_angle1").attr('transform','translate(0 , 0)');$("#svg_angle5").attr('transform','translate(0 , 0)');panZoom_angle.resize();panZoom_angle.fit();panZoom_angle.center();imgData=canvas.toDataURL('image/png');var img=new Image();img.src=imgData;$("#cap_img").attr({"src":imgData});$("#canvas_capture, #capImgblock, #capLayout, .capImgblock ").css({"width":capImgSizedefault,"height":capImgSizedefault});$(".capImgblock").css("opacity","0");}});},5);codeInputtetx();}function copyToClipboard(text){window.prompt("Copy to clipboard: Ctrl+C, Enter",text);}function codeInputtetx(){$("#codCopyText").val(httpUrl+"index.php?mdColor_unit2="+mdColor_unit2+"&mdColor_unit3="+mdColor_unit3+"&mdColor_unit4="+mdColor_unit4+"&mdColor_unit5="+mdColor_unit5+"&mdColor_unit6="+mdColor_unit6+"&mdColor_unit7="+mdColor_unit7+"&patch_unit="+patch_unit);for(var i=2;i<8;i++){var mdColor_uniter;eval("mdColor_uniter = mdColor_unit"+i);var pdName;if(i==2){pdName="jarket"}if(i==3){pdName="sweat shir"}if(i==4){pdName="skirt"}if(i==5){pdName="gloves"}if(i==6){pdName="tights"}if(i==7){pdName="boots"}if(mdColor_uniter==0){$(".codeText"+i).text(pdName+" : "+"white");$(".codeImg"+i).css("background-color","#fff");}if(mdColor_uniter==1){$(".codeText"+i).text(pdName+" : "+"gray");$(".codeImg"+i).css("background-color","#8a8a8a");}if(mdColor_uniter==2){$(".codeText"+i).text(pdName+" : "+"black");$(".codeImg"+i).css("background-color","#333");}if(mdColor_uniter==3){$(".codeText"+i).text(pdName+" : "+"light brown");$(".codeImg"+i).css("background-color","#b27d50");}if(mdColor_uniter==4){$(".codeText"+i).text(pdName+" : "+"brown");$(".codeImg"+i).css("background-color","#715740");}if(mdColor_uniter==5){$(".codeText"+i).text(pdName+" : "+"red");$(".codeImg"+i).css("background-color","#9e474d");}if(mdColor_uniter==6){$(".codeText"+i).text(pdName+" : "+"green");$(".codeImg"+i).css("background-color","#476849");}if(mdColor_uniter==7){$(".codeText"+i).text(pdName+" : "+"indigo");$(".codeImg"+i).css("background-color","#46505e");}if(mdColor_uniter==8){$(".codeText"+i).text(pdName+" : "+"purple");$(".codeImg"+i).css("background-color","#625664");}}if(patch_unit==0||patch_unit==null){$(".codeText8").text("No Patch");$(".codeImg8 img").attr("src","img/patch/patch_none.png");}else{$(".codeText8").text(" Patch Number "+patch_unit);$(".codeImg8 img").attr("src",patch_url);}}var capImgSizeInter;$(document).ready(function(){$("#resultLayerClose").click(function(){$("#resultLayer").css({"display":"none"});normalScreenInit();});$("#resultImgSave").click(function(){var openNewWindow=window.open("about:blank");openNewWindow.location.href=imgData;});});$(document).ready(function(){$(".rightMenu.color .toggleTitle").click(function(){$(this).addClass("on");$(".rightMenu.print .toggleTitle").removeClass("on");$(".rightMenu.color .menuUl").css("height","auto");$(".rightMenu.print .menuUl").css("height","0px");$('.mobileOptionTool .tab a:eq(0)').click();return false;});$(".rightMenu.print .toggleTitle").click(function(){$(this).addClass("on");$(".rightMenu.color .toggleTitle").removeClass("on");$(".rightMenu.color .menuUl").css("height","0px");$(".rightMenu.print .menuUl").css("height","auto");$('.mobileOptionTool .tab a:eq(1)').click();return false;});$(".product .icn").click(function(){$(this).parent().parent().find(".icn").removeClass("on");$(this).addClass("on");var icnIndex=$(".product li a").index(this);$(".mobileOptionProduct .icn").removeClass("on");$(".mobileOptionProduct .icn:eq("+icnIndex+")").addClass("on");if(icnIndex==1){if(svg_num==1||svg_num==2||svg_num==8){}else{uxBlockSlider.goToSlide(0);}}$(".rightMenu.color ul").css("display","none");$(".rightMenu.color ul:eq("+icnIndex+")").css("display","block");$(".bottomMenu.color ul").css("display","none");$(".bottomMenu.color ul:eq("+icnIndex+")").css("display","block");$(".rightMenu.color .menuUl").css("height","auto");$(".rightMenu.print .menuUl").css("height","0px");$('.mobileOptionTool .tab a:eq(0)').click();return false;});$(".mobileOptionProduct .icn").click(function(){$(this).parent().parent().find(".icn").removeClass("on");$(this).addClass("on");var icnIndex=$(".mobileOptionProduct li a").index(this);$(".product .icn").removeClass("on");$(".product .icn:eq("+icnIndex+")").addClass("on");if(icnIndex==1){if(svg_num==1||svg_num==2||svg_num==8){}else{uxBlockSlider.goToSlide(0);}}$(".bottomMenu.color ul").css("display","none");$(".bottomMenu.color ul:eq("+icnIndex+")").css("display","block");$(".rightMenu.color ul").css("display","none");$(".rightMenu.color ul:eq("+icnIndex+")").css("display","block");$('.mobileOptionTool .tab a:eq(0)').click();return false;});$(".rightMenu.color .col").click(function(){var icnIndex1=$(this).parent().parent().prevAll().length-1;var icnIndex2=$(".rightMenu.color .col").index(this);$(".rightMenu.color ul:eq("+icnIndex1+") .col").removeClass("on");$(".bottomMenu.color ul:eq("+icnIndex1+") .col").removeClass("on");$(".rightMenu.color .col:eq("+icnIndex2+")").addClass("on");$(".bottomMenu.color .col:eq("+icnIndex2+")").addClass("on");console.log(icnIndex1);return false;});$(".bottomMenu.color .col").click(function(){var icnIndex1=$(this).parent().parent().prevAll().length;var icnIndex2=$(".bottomMenu.color .col").index(this);$(".rightMenu.color ul:eq("+icnIndex1+") .col").removeClass("on");$(".bottomMenu.color ul:eq("+icnIndex1+") .col").removeClass("on");$(".rightMenu.color .col:eq("+icnIndex2+")").addClass("on");$(".bottomMenu.color .col:eq("+icnIndex2+")").addClass("on");console.log(icnIndex1);return false;});$(".rightMenu.print .pnt").click(function(){$(this).parent().parent().find(".pnt").removeClass("on");$(this).addClass("on");var pntIndex=$(".rightMenu.print .pnt").index(this);$(".bottomMenu.print .pnt").removeClass("on");$(".bottomMenu.print .pnt:eq("+pntIndex+")").addClass("on");return false;});$(".bottomMenu.print .pnt").click(function(){$(this).parent().parent().find(".pnt").removeClass("on");$(this).addClass("on");var pntIndex=$(".rightMenu.print .pnt").index(this);$(".rightMenu.print .pnt").removeClass("on");$(".rightMenu.print .pnt:eq("+pntIndex+")").addClass("on");return false;});myScroll_bottomOption1=new IScroll('.bottomMenu.color',{scrollX:true,scrollY:false,freeScroll:true,mouseWheel:false,scrollbars:false,click:true});$('.mobileOptionTool .tab a').click(function(){var tabIndex=$(".mobileOptionTool .tab li a").index(this);$(".mobileOptionTool .tab li").removeClass("on");$(this).parent().addClass("on");if(tabIndex==0){$(".bottomMenu.color").css("display","block");$(".bottomMenu.print, .bottomMenu.set").css("display","none");myScroll_bottomOption1=new IScroll('.bottomMenu.color',{scrollX:true,scrollY:false,freeScroll:true,mouseWheel:false,scrollbars:false,click:true});}else if(tabIndex==1){$(".bottomMenu.color, .bottomMenu.set").css("display","none");$(".bottomMenu.print").css("display","block");myScroll_bottomOption2=new IScroll('.bottomMenu.print',{scrollX:true,scrollY:false,freeScroll:true,mouseWheel:false,scrollbars:false,click:true});}else{$(".bottomMenu.color, .bottomMenu.print").css("display","none");$(".bottomMenu.set").css("display","block");myScroll_bottomOption3=new IScroll('.bottomMenu.set',{scrollX:true,scrollY:false,freeScroll:true,mouseWheel:false,scrollbars:false,click:true});}return false;});initInfo();});function initInfo(){$(".rightMenu.color .ul01, .bottomMenu.color .ul01").find(".col0"+mdColor_unit2).addClass("on");$(".rightMenu.color .ul02, .bottomMenu.color .ul02").find(".col0"+mdColor_unit3).addClass("on");$(".rightMenu.color .ul03, .bottomMenu.color .ul03").find(".col0"+mdColor_unit4).addClass("on");$(".rightMenu.color .ul04, .bottomMenu.color .ul04").find(".col0"+mdColor_unit5).addClass("on");$(".rightMenu.color .ul05, .bottomMenu.color .ul05").find(".col0"+mdColor_unit6).addClass("on");$(".rightMenu.color .ul06, .bottomMenu.color .ul06").find(".col0"+mdColor_unit7).addClass("on");$(".rightMenu.print .menuUl").find(".pnt0"+patch_unit).addClass("on");}function load_init(){color_match1(mdColor_unit1);color_match2(mdColor_unit2);color_match3(mdColor_unit3);color_match4(mdColor_unit4);color_match5(mdColor_unit5);color_match6(mdColor_unit6);color_match7(mdColor_unit7);$(".rightMenu.print .pnt:eq("+patch_unit+")").click();$(".rightMenu.print .pnt:eq("+patch_unit+")").addClass("on");$(".bottomMenu.print .pnt:eq("+patch_unit+")").addClass("on");$("#svg_angle1").css("display","block");$("#svg_angle2, #svg_angle3, #svg_angle4, #svg_angle5").css("display","none");}function load_init2(){color_match1(mdColor_unit1);color_match2(mdColor_unit2);color_match3(mdColor_unit3);color_match4(mdColor_unit4);color_match5(mdColor_unit5);color_match6(mdColor_unit6);color_match7(mdColor_unit7);$(".rightMenu.print .pnt:eq("+patch_unit+")").click();$(".rightMenu.print .pnt:eq("+patch_unit+")").addClass("on");$(".bottomMenu.print .pnt:eq("+patch_unit+")").addClass("on");$(".rightMenu.color ul, .bottomMenu.color ul").find(".col").removeClass("on");initInfo();$("#svg_angle1").css("display","block");$("#svg_angle2, #svg_angle3, #svg_angle4, #svg_angle5").css("display","none");}load_init();var svg_num=1;$(window).load(function(){var rotate6=false;uxBlockSlider=$('#slideBock ul').bxSlider({mode:'fade',speed:0,pager:false,controls:false,adaptiveHeight:true,responsive:true,useCSS:false,touchEnabled:true,swipeThreshold:10,onSliderLoad:function(){},onSlideAfter:function(){svg_num=uxBlockSlider.getCurrentSlide()+1;$("#svg_angle1,#svg_angle2,#svg_angle3,#svg_angle4,#svg_angle5").css("display","none");$("#svg_angle"+svg_num).css("display","block");if(svg_num==6){$("#svg_angle4").css("display","block");$("#svg_angle4").attr('transform','translate(700,0)  scale(-1 , 1)');}else{$("#svg_angle4").attr('transform','translate(0,0)  scale(1 , 1)');}if(svg_num==7){$("#svg_angle3").css("display","block");$("#svg_angle3").attr('transform','translate(700,0)  scale(-1 , 1)');}else{$("#svg_angle3").attr('transform','translate(0,0)  scale(1 , 1)');}if(svg_num==8){$("#svg_angle2").css("display","block");$("#svg_angle2").attr('transform','translate(700,0)  scale(-1 , 1)');}else{$("#svg_angle2").attr('transform','translate(0,0)  scale(1 , 1)');}}});$('#unitNext').on('click',function(){uxBlockSlider.goToNextSlide();return false;});$('#unitPrev').on('click',function(){uxBlockSlider.goToPrevSlide();return false;});});var screenWidth;var screenHeight;$(document).ready(function(){$("#svg_angle1").css("display","block");$(".footer").addClass("main");screenWidth=parseInt($(window).innerWidth());screenHeight=parseInt($(window).height());if(screenHeight<880){screenHeight=880;}else{screenHeight=parseInt($(window).height());}setResolution();myScroll_CustomSet=new IScroll('.customSetList',{scrollX:true,scrollY:false,freeScroll:true,mouseWheel:false,scrollbars:false,click:true});var BmenuClose=false;$("#pageMove").click(function(){if(BmenuClose==false){BmenuClose=true;$(this).addClass("on");$(".mobileOptionTool").css("visibility","hidden");}else{BmenuClose=false;$(this).removeClass("on");$(".mobileOptionTool").css("visibility","visible");}});});$(window).resize(function(){screenWidth=parseInt($(window).innerWidth());screenHeight=parseInt($(window).height());setResolution();});$("#slideBock,#unitPrev,#unitNext,#custom_visual").mouseover(function(){$(".mainSliderBtn").css({opacity:1});});$("#slideBock,#custom_visual").mouseleave(function(){$(".mainSliderBtn").css({opacity:0.2});});