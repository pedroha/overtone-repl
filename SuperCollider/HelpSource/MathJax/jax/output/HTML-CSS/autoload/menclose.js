/*
 *  /MathJax/jax/output/HTML-CSS/autoload/menclose.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var d="1.1.1";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];var c="http://www.w3.org/2000/svg";var f="urn:schemas-microsoft-com:vml";var e="mjxvml";a.menclose.Augment({toHTML:function(Q){var j=this.getValues("notation","thickness","padding","mathcolor","color");if(j.color&&!this.mathcolor){j.mathcolor=j.color}if(j.thickness==null){j.thickness=".075em"}if(j.padding==null){j.padding=".2em"}var M=b.length2em(j.padding);var E=b.length2em(j.thickness);var x=b.Em(E)+" solid";Q=this.HTMLcreateSpan(Q);var u=b.createStack(Q);var q=b.createBox(u);this.HTMLmeasureChild(0,q);var A=q.bbox.h+M+E,G=q.bbox.d+M+E,k=q.bbox.w+2*(M+E);var F=b.createFrame(u,A+G,0,k,E,"none");F.id="MathJax-frame-"+this.spanID;b.addBox(u,F);u.insertBefore(F,q);var l=j.notation.split(/ /);var n=0,K=0,o=0,v=0,C=0,z=0;var J,g;if(!j.mathcolor){j.mathcolor="black"}else{Q.style.color=j.mathcolor}for(var P=0,O=l.length;P<O;P++){switch(l[P]){case a.NOTATION.BOX:F.style.border=x;if(!b.msieBorderWidthBug){n=K=v=o=E}break;case a.NOTATION.ROUNDEDBOX:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}var I=Math.floor(1000*Math.min(k,A+G)-2*E);var y=Math.floor(4000*(k-2*E)),S=Math.floor(4000*(A+G-2*E));this.HTMLvmlElement(g,"shape",{style:{width:this.HTMLpx(k-2*E),height:this.HTMLpx(A+G-2*E),left:this.HTMLpx(E,0.5),top:this.HTMLpx(E,0.5)},path:"m "+I+",0 qx 0,"+I+" l 0,"+(S-I)+" qy "+I+","+S+" l "+(y-I)+","+S+" qx "+y+","+(S-I)+" l "+y+","+I+" qy "+(y-I)+",0 x e",coordsize:y+","+S})}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"rect",{x:1,y:1,width:this.HTMLpx(k-E)-1,height:this.HTMLpx(A+G-E)-1,rx:this.HTMLpx(Math.min(A+G,k)/4)})}break;case a.NOTATION.CIRCLE:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}this.HTMLvmlElement(g,"oval",{style:{width:this.HTMLpx(k-2*E),height:this.HTMLpx(A+G-2*E),left:this.HTMLpx(E,0.5),top:this.HTMLpx(E,0.5)}})}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"ellipse",{rx:this.HTMLpx(k/2-E),ry:this.HTMLpx((A+G)/2-E),cx:this.HTMLpx(k/2),cy:this.HTMLpx((A+G)/2)})}break;case a.NOTATION.LEFT:F.style.borderLeft=x;if(!b.msieBorderWidthBug){v=E}break;case a.NOTATION.ACTUARIAL:F.style.borderTop=x;if(!b.msieBorderWidthBug){n=E;F.bbox.w+=M-E}case a.NOTATION.RIGHT:F.style.borderRight=x;if(!b.msieBorderWidthBug){o=E}break;case a.NOTATION.VERTICALSTRIKE:var s=b.createRule(u,A+G-E/2,0,E);b.addBox(u,s);b.placeBox(s,M+E+q.bbox.w/2,-G,true);break;case a.NOTATION.TOP:F.style.borderTop=x;if(!b.msieBorderWidthBug){n=E}break;case a.NOTATION.BOTTOM:F.style.borderBottom=x;if(!b.msieBorderWidthBug){K=E}break;case a.NOTATION.HORIZONTALSTRIKE:var N=b.createRule(u,E,0,k-E/2);b.addBox(u,N);b.placeBox(N,0,(A+G)/2-G,true);break;case a.NOTATION.UPDIAGONALSTRIKE:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}this.HTMLvmlElement(g,"line",{from:"0,"+this.HTMLpx(A+G-E),to:this.HTMLpx(k)+",0"})}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"line",{x1:1,y1:this.HTMLpx(A+G-E),x2:this.HTMLpx(k-E),y2:this.HTMLpx(E)})}break;case a.NOTATION.DOWNDIAGONALSTRIKE:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}this.HTMLvmlElement(g,"line",{from:"0,0",to:this.HTMLpx(k)+","+this.HTMLpx(A+G-E)})}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"line",{x1:1,y1:this.HTMLpx(E),x2:this.HTMLpx(k-E),y2:this.HTMLpx(A+G-E)})}break;case a.NOTATION.MADRUWB:F.style.borderBottom=x;F.style.borderRight=x;if(!b.msieBorderWidthBug){K=o=E}break;case a.NOTATION.RADICAL:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}this.HTMLvmlElement(g,"shape",{style:{width:this.HTMLpx(k),height:this.HTMLpx(A+G)},path:"m "+this.HTMLpt(E/2,0.6*(A+G))+" l "+this.HTMLpt(M,A+G-E)+" "+this.HTMLpt(2*M,E/2)+" "+this.HTMLpt(k,E/2)+" e",coordsize:this.HTMLpt(k,A+G)});C=M}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"path",{d:"M 1,"+this.HTMLpx(0.6*(A+G))+" L "+this.HTMLpx(M)+","+this.HTMLpx(A+G)+" L "+this.HTMLpx(2*M)+",1 L "+this.HTMLpx(k)+",1"});b.placeBox(J.parentNode,0,M/2-G,true);C=M;z=E}break;case a.NOTATION.LONGDIV:if(b.useVML){if(!g){g=this.HTMLvml(u,A,G,k,E,j.mathcolor)}this.HTMLvmlElement(g,"line",{from:"0,"+this.HTMLpx(E/2),to:this.HTMLpx(k-E)+","+this.HTMLpx(E/2)});this.HTMLvmlElement(g,"arc",{style:{width:this.HTMLpx(2*M),height:this.HTMLpx(A+G-2*E),left:this.HTMLpx(-M),top:this.HTMLpx(E)},startangle:"10",endangle:"170"});C=M}else{if(!J){J=this.HTMLsvg(u,A,G,k,E,j.mathcolor)}this.HTMLsvgElement(J.firstChild,"path",{d:"M "+this.HTMLpx(k)+",1 L 1,1 a"+this.HTMLpx(M)+","+this.HTMLpx((A+G)/2-E)+" 0 0,1 1,"+this.HTMLpx(A+G-2*E)});b.placeBox(J.parentNode,0,E-G,true);C=M;z=E}break}}F.style.width=b.Em(k-v-o);F.style.height=b.Em(A+G-n-K);b.placeBox(F,0,z-G,true);b.placeBox(q,C+M+E,0);this.HTMLhandleSpace(Q);this.HTMLhandleColor(Q);return Q},HTMLpx:function(g){return(g*b.em)},HTMLpt:function(g,h){return Math.floor(1000*g)+","+Math.floor(1000*h)},HTMLhandleColor:function(h){var i=document.getElementById("MathJax-frame-"+this.spanID);if(i){var g=this.getValues("mathbackground","background");if(this.style&&h.style.backgroundColor){g.mathbackground=h.style.backgroundColor}if(g.background&&!this.mathbackground){g.mathbackground=g.background}if(g.mathbackground&&g.mathbackground!==a.COLOR.TRANSPARENT){i.style.backgroundColor=g.mathbackground}}else{this.SUPER(arguments).HTMLhandleColor.call(this,h)}},HTMLsvg:function(h,l,m,g,k,j){var i=document.createElementNS(c,"svg");if(i.style){i.style.width=b.Em(g);i.style.height=b.Em(l+m)}var n=b.createBox(h);n.appendChild(i);b.placeBox(n,0,-m,true);this.HTMLsvgElement(i,"g",{fill:"none",stroke:j,"stroke-width":k*b.em});return i},HTMLsvgElement:function(g,h,i){var j=document.createElementNS(c,h);if(i){for(var k in i){if(i.hasOwnProperty(k)){j.setAttributeNS(null,k,i[k].toString())}}}g.appendChild(j);return j},HTMLvml:function(i,l,m,h,k,j){var g=b.createFrame(i,l+m,0,h,0,"none");b.addBox(i,g);b.placeBox(g,0,-m,true);this.constructor.VMLcolor=j;this.constructor.VMLthickness=this.HTMLpx(k);return g},HTMLvmlElement:function(g,h,i){var j=b.addElement(g,e+":"+h);j.style.position="absolute";j.style.left=j.style.top=0;MathJax.Hub.Insert(j,i);if(!i.fillcolor){j.fillcolor="none"}if(!i.strokecolor){j.strokecolor=this.constructor.VMLcolor}if(!i.strokeweight){j.strokeweight=this.constructor.VMLthickness}}});MathJax.Hub.Browser.Select({MSIE:function(g){a.menclose.Augment({HTMLpx:function(i,h){return(i*b.em+(h||0))+"px"}});b.useVML=true;if(!document.namespaces[e]){if(document.documentMode&&document.documentMode>=8){document.namespaces.add(e,f,"#default#VML")}else{document.namespaces.add(e,f);document.createStyleSheet().addRule(e+"\\: *","{behavior: url(#default#VML)}")}}}});MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/menclose.js")});

