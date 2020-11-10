/*! For license information please see module.js.LICENSE.txt */
define(["react","emotion","@grafana/data","@grafana/ui"],(function(t,e,n,i){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=4)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e,n){"use strict";n.r(e);var i=n(2),s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,s,r=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){s={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function o(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t}function a(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var h=n(0),l=n.n(h),u=n(1),c=n(3);class f{constructor(t,e,n,i){this.r=t,this.g=e,this.b=n,this.a=i}}class p{constructor(){this.scaleX=1,this.scaleY=1,this.offsetX=0,this.offsetY=0,this.loop=!1,this._vbuffer=0,this._coord=0,this.visible=!0,this.intensity=1}}class g extends p{constructor(t,e){super(),this.webglNumPoints=e,this.numPoints=e,this.color=t,this.xy=new Float32Array(2*this.webglNumPoints)}setX(t,e){this.xy[2*t]=e}setY(t,e){this.xy[2*t+1]=e}getX(t){return this.xy[2*t]}getY(t){return this.xy[2*t+1]}lineSpaceX(t,e){for(let n=0;n<this.numPoints;n++)this.setX(n,t+e*n)}constY(t){for(let e=0;e<this.numPoints;e++)this.setY(e,t)}shiftAdd(t){const e=t.length;for(let t=0;t<this.numPoints-e;t++)this.setY(t,this.getY(t+e));for(let n=0;n<e;n++)this.setY(n+this.numPoints-e,t[n])}}var d=class{constructor(t,e){this.debug=!1,null==e?this.webgl=t.getContext("webgl",{antialias:!0,transparent:!1}):(this.webgl=t.getContext("webgl",{antialias:e.antialias,transparent:e.transparent,desynchronized:e.deSync,powerPerformance:e.powerPerformance,preserveDrawing:e.preserveDrawing}),this.debug=null!=e.debug&&e.debug),this.log("canvas type is: "+t.constructor.name),this.log(`[webgl-plot]:width=${t.width}, height=${t.height}`),this._lines=[],this.gScaleX=1,this.gScaleY=1,this.gXYratio=1,this.gOffsetX=0,this.gOffsetY=0,this.webgl.clear(this.webgl.COLOR_BUFFER_BIT),this.webgl.viewport(0,0,t.width,t.height),this.progThinLine=this.webgl.createProgram(),this.initThinLineProgram()}get lines(){return this._lines}update(){const t=this.webgl;this.lines.forEach(e=>{if(e.visible){t.useProgram(this.progThinLine);const n=t.getUniformLocation(this.progThinLine,"uscale");t.uniformMatrix2fv(n,!1,new Float32Array([e.scaleX*this.gScaleX,0,0,e.scaleY*this.gScaleY*this.gXYratio]));const i=t.getUniformLocation(this.progThinLine,"uoffset");t.uniform2fv(i,new Float32Array([e.offsetX+this.gOffsetX,e.offsetY+this.gOffsetY]));const s=t.getUniformLocation(this.progThinLine,"uColor");t.uniform4fv(s,[e.color.r,e.color.g,e.color.b,e.color.a]),t.bufferData(t.ARRAY_BUFFER,e.xy,t.STREAM_DRAW),t.drawArrays(e.loop?t.LINE_LOOP:t.LINE_STRIP,0,e.webglNumPoints)}})}clear(){this.webgl.clear(this.webgl.COLOR_BUFFER_BIT)}addLine(t){t._vbuffer=this.webgl.createBuffer(),this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER,t._vbuffer),this.webgl.bufferData(this.webgl.ARRAY_BUFFER,t.xy,this.webgl.STREAM_DRAW),this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER,t._vbuffer),t._coord=this.webgl.getAttribLocation(this.progThinLine,"coordinates"),this.webgl.vertexAttribPointer(t._coord,2,this.webgl.FLOAT,!1,0,0),this.webgl.enableVertexAttribArray(t._coord),this.lines.push(t)}initThinLineProgram(){const t=this.webgl.createShader(this.webgl.VERTEX_SHADER);this.webgl.shaderSource(t,"\n      attribute vec2 coordinates;\n      uniform mat2 uscale;\n      uniform vec2 uoffset;\n      void main(void) {\n         gl_Position = vec4(uscale*coordinates + uoffset, 0.0, 1.0);\n      }"),this.webgl.compileShader(t);const e=this.webgl.createShader(this.webgl.FRAGMENT_SHADER);this.webgl.shaderSource(e,"\n         precision mediump float;\n         uniform highp vec4 uColor;\n         void main(void) {\n            gl_FragColor =  uColor;\n         }"),this.webgl.compileShader(e),this.progThinLine=this.webgl.createProgram(),this.webgl.attachShader(this.progThinLine,t),this.webgl.attachShader(this.progThinLine,e),this.webgl.linkProgram(this.progThinLine)}popLine(){this.lines.pop()}removeAllLines(){this._lines=[]}viewport(t,e,n,i){this.webgl.viewport(t,e,n,i)}log(t){this.debug&&console.log("[webgl-plot]:"+t)}},b=function(){function t(t){this.size=t,this.data=[],this.reset(0)}return t.prototype.reset=function(t){for(var e=0;e<this.size;e+=1)this.data[e]=t},t.prototype.push=function(t){if(t.length>=this.size)this.data=t.slice(-this.size);else{for(var e=0;e<this.size-t.length;e+=1)this.data[e]=this.data[e+t.length];for(e=0;e<t.length;e+=1)this.data[e+this.size-t.length]=t[e]}},t.prototype.getData=function(){return this.data},t.prototype.mean=function(){return this.sum()/this.data.length},t.prototype.sum=function(){return this.data.reduce((function(t,e){return t+e}),0)},t}(),v=function(){function t(t,e,n){this.nPoints=t,this.glLine=new g(e,this.nPoints),this.glLine.lineSpaceX(-1,2/t),n.addLine(this.glLine),this.scaling=1,this.offset=0,this.enabled=!0,this.buffer=new b(t)}return t.prototype.setScaling=function(t){this.scaling=t},t.prototype.setOffset=function(t){this.offset=t},t.prototype.setData=function(t){for(var e=0;e<this.nPoints;e+=1)this.glLine.setY(e,t[e]/this.scaling+this.offset)},t.prototype.push=function(t){this.buffer.push(t)},t}(),m=[[0,0,0],[.2824,.1882,.1882],[.4588,.2714,.2714],[.549,.4719,.4719],[.698,.7176,.7176],[.7882,.7553,.7553],[1,.9922,.9922]],w=[[0,0,0],[.0275,0,0],[.1098,.1893,.1893],[.1647,.3035,.3035],[.2078,.3841,.3841],[.2824,.502,.502],[.5216,.6397,.6397],[.698,.7171,.7171],[.7882,.6392,.6392],[.7922,.6413,.6413],[.8,.6447,.6447],[.8078,.6481,.6481],[.8157,.6549,.6549],[.8667,.6991,.6991],[.8745,.7103,.7103],[.8824,.7216,.7216],[.8902,.7323,.7323],[.898,.743,.743],[.9412,.8275,.8275],[.9569,.8635,.8635],[.9647,.8816,.8816],[.9961,.9733,.9733],[1,.9843,.9843]],y=[[0,0,0],[.0039,.1684,.1684],[.0078,.2212,.2212],[.0275,.4329,.4329],[.0314,.4549,.4549],[.2824,.5004,.5004],[.4667,.2748,.2748],[.5451,.3205,.3205],[.7843,.3961,.3961],[.8941,.6651,.6651],[1,.9843,.9843]];function P(t,e){for(var n=0;n+1<e.length&&!(t>=e[n][0]&&t<e[n+1][0]);n+=1);return(e[n+1][0]-t)/(e[n+1][0]-e[n][0])*(e[n+1][1]-e[n][2])+e[n][2]}var L,S,x,_,A=function(t){for(var e=[],n=0;n<t;n+=1){var i=(n+.5)/t,s=new f(P(i,m),P(i,w),P(i,y),1);e.push(s)}return e},O=function(){function t(t,e){var n=this;this.webGLPlot=new d(t),this.data=e,this.lines=[],this.scaling=void 0,this.nLines=0,this.nPoints=1,this.reconfigure();requestAnimationFrame((function t(){n.update()&&n.webGLPlot.update(),requestAnimationFrame(t)}))}return t.prototype.determineNPoints=function(){if(void 0===this.data.request)return 1;var t=this.data.request,e=t.range.to.diff(t.range.from)/t.intervalMs;return void 0!==t.maxDataPoints&&(e=Math.min.apply(Math,o([e,t.maxDataPoints]))),e},t.prototype.reconfigure=function(){this.webGLPlot.removeAllLines(),this.nLines=this.getData().length,this.nPoints=this.data.request.maxDataPoints,this.nPoints=this.determineNPoints();var t=A(this.nLines);this.lines=[];for(var e=0;e<this.nLines;e+=1)this.lines[e]=new v(this.nPoints,t[e],this.webGLPlot)},t.prototype.getData=function(){return this.data.series.map((function(t){return t.fields.filter((function(t){return"number"===t.type})).map((function(t){return t.values.toArray()}))})).reduce((function(t,e){return t.concat(e,[])}))},t.prototype.update=function(){var t=this.getData();this.nPoints===this.determineNPoints()&&this.nLines===t.length||this.reconfigure(),this.setScaling(this.getAutoScaling(t));for(var e=void 0!==this.scaling?this.scaling:this.getAutoScaling(t),n=0;n<this.nLines;n+=1){var i=this.lines[n];if(i.setData(t[n]),i.enabled){i.setScaling(e*this.nLines*1.1);var s=-t[n].reduce((function(t,e){return t+e}),0)/t[n].length;s/=e*this.nLines*1.1;var r=1-2*(.5+n)/this.nLines;this.lines[n].setOffset(s+r)}else this.lines[n].setScaling(1e9),this.lines[n].setOffset(-1e5)}return!0},t.prototype.setScaling=function(t){this.scaling=t},t.prototype.getAutoScaling=function(t){var e=Math.max.apply(Math,o(t.map((function(t){return Math.max.apply(Math,o(t.map(Math.abs)))}))));return e=e>0?e:1},t}(),R=function(t){function e(e){var n=t.call(this,e)||this;return n.myCanvasRef=l.a.createRef(),n}return function(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){var t=this.myCanvasRef.current,e=this.props.data;this.webGLGraph=new O(t,e)},e.prototype.onCanvasScroll=function(t){var e;console.log(t),null===(e=this.webGLGraph)||void 0===e||e.setScaling(1.2*(this.webGLGraph.scaling||1))},e.prototype.render=function(){var t=this,e=T(),n=this.props,i=n.options,s=n.width,r=n.height,o=n.data;return l.a.createElement("div",{className:Object(u.cx)(e.wrapper,Object(u.css)(L||(L=a(["\n            width: ","px;\n            height: ","px;\n          "],["\n            width: ","px;\n            height: ","px;\n          "])),s,r))},l.a.createElement("canvas",{ref:this.myCanvasRef,width:s,height:r,onWheel:function(e){return t.onCanvasScroll(e)}}),l.a.createElement("div",{className:e.textBox},i.showSeriesCount&&l.a.createElement("div",null,"Number of series: ",o.series.length),l.a.createElement("div",null,"Text option value: ",i.text)))},e}(h.PureComponent),T=Object(c.stylesFactory)((function(){return{wrapper:Object(u.css)(S||(S=a(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(u.css)(x||(x=a(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),textBox:Object(u.css)(_||(_=a(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))}}));n.d(e,"plugin",(function(){return Y}));var Y=new i.PanelPlugin(R).setPanelOptions((function(t){return t.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:function(t){return t.showSeriesCount}})}))}])}));
//# sourceMappingURL=module.js.map