var __reflect=this&&this.__reflect||function(e,t,a){e.__class__=t,a?a.push(t):a=[t],e.__types__=e.__types__?a.concat(e.__types__):a},__extends=this&&this.__extends||function(e,t){function a(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);a.prototype=t.prototype,e.prototype=new a},__awaiter=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))(function(n,h){function s(e){try{r(i.next(e))}catch(t){h(t)}}function o(e){try{r(i["throw"](e))}catch(t){h(t)}}function r(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(s,o)}r((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function a(e){return function(t){return i([e,t])}}function i(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,h&&(s=h[2&a[0]?"return":a[0]?"throw":"next"])&&!(s=s.call(h,a[1])).done)return s;switch(h=0,s&&(a=[0,s.value]),a[0]){case 0:case 1:s=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,h=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(s=r.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){r.label=a[1];break}if(6===a[0]&&r.label<s[1]){r.label=s[1],s=a;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(a);break}s[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(i){a=[6,i],h=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var n,h,s,o,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),"throw":a(1),"return":a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},BaseChunk=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(egret.Sprite);__reflect(BaseChunk.prototype,"BaseChunk");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,a){function i(i){t.call(a,i,e)}if(RES.hasRes(e)){var n=RES.getRes(e);n?i(n):RES.getResAsync(e,i,this)}else RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var ChunkType;!function(e){e[e.None=0]="None",e[e.Chunk1=1]="Chunk1",e[e.Chunk2=2]="Chunk2",e[e.Chunk3=3]="Chunk3",e[e.Chunk4=4]="Chunk4",e[e.Chunk5=5]="Chunk5"}(ChunkType||(ChunkType={}));var Chunk=function(e){function t(t){var a=e.call(this)||this;return a.stageSize={col:4,row:4,boxsize:70},a.chunkMap=new Array,a.chunkChooseMap=new Array,a.weiZhiX=0,a.weiZhiY=0,a.ChunkType=t,a}return __extends(t,e),Object.defineProperty(t.prototype,"ChunkType",{get:function(){return this._ChunkType},set:function(e){this._ChunkType=e,this.showChunk(e)},enumerable:!0,configurable:!0}),t.prototype.flipUpDown=function(){for(var e,t=(new Array,0);2>t;t++)for(var a=0;4>a;a++)e=this.chunkMap[t][a],this.chunkMap[t][a]=this.chunkMap[4-t-1][a],this.chunkMap[4-t-1][a]=e;this.removeChildren(),this.showStage()},t.prototype.chunkFlipUp=function(){GameData.chunkTempX=0,GameData.chunkTempY=0;for(var e=new Array,t=0;t<this.chunkMap.length;t++)e[t]=new Array,e[t][0]=this.chunkMap[t][0],e[t][1]=this.chunkMap[t][1],t>0&&(this.chunkMap[t][0]=e[t][0],this.chunkMap[t][1]=-e[t][1]);this.chunkMap[this.chunkMap.length-1][1]<0&&(GameData.chunkTempX=Math.abs(this.chunkMap[this.chunkMap.length-1][1])),this.chunkMap[this.chunkMap.length-1][0]<0&&(GameData.chunkTempY=Math.abs(this.chunkMap[this.chunkMap.length-1][0])),this.removeChildren(),this.drawChunk(this.chunkMap)},t.prototype.chunkChage=function(){GameData.chunkTempX=0,GameData.chunkTempY=0;for(var e=new Array,t=0;t<this.chunkMap.length;t++)e[t]=new Array,e[t][0]=this.chunkMap[t][0],e[t][1]=this.chunkMap[t][1],t>0&&(this.chunkMap[t][0]=e[t][1],this.chunkMap[t][1]=-e[t][0]);this.chunkMap[this.chunkMap.length-1][1]<0&&(GameData.chunkTempX=Math.abs(this.chunkMap[this.chunkMap.length-1][1])),this.chunkMap[this.chunkMap.length-1][0]<0&&(GameData.chunkTempY=Math.abs(this.chunkMap[this.chunkMap.length-1][0])),console.log("chunkChage"+this.chunkMap[this.chunkMap.length-1][1]),this.removeChildren(),this.drawChunk(this.chunkMap)},t.prototype.change=function(){for(var e=new Array,t=3,a=0;4>a;a++){e[a]=new Array;for(var i=0;4>i;i++)e[a][i]=this.chunkMap[a][i]}for(var a=0;4>a;a++){for(var i=0;4>i;i++)this.chunkMap[a][i]=e[t][a],t--;t=3}this.removeChildren(),this.drawChunk(this.chunkMap),console.log("子元素："+this.numChildren)},t.prototype.showStage=function(){for(var e=0;e<this.stageSize.row;e++)for(var t=0;t<this.stageSize.col;t++)this.shape=new egret.Shape,0==this.chunkMap[e][t]?(this.shape.graphics.beginFill(12434877),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.shape.alpha=1):(1==this.chunkMap[e][t]||2==this.chunkMap[e][t])&&(1==this.ChunkType,this.shape.graphics.lineStyle(1,12434877),this.shape.graphics.beginFill(GameData.chunkbg[this.ChunkType]),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape))},t.prototype.showChunk=function(e){GameData.chunkTempX=0,GameData.chunkTempY=0;var t=this.initChunk(e);this.chunkMap=t,this.chunkMap[this.chunkMap.length-1][1]<0&&(GameData.chunkTempX=Math.abs(this.chunkMap[this.chunkMap.length-1][1])),this.chunkMap[this.chunkMap.length-1][0]<0&&(GameData.chunkTempY=Math.abs(this.chunkMap[this.chunkMap.length-1][0])),this.drawChunk(this.chunkMap)},t.prototype.drawChunk=function(e){for(var t=0;t<e.length;t++)this.shape=new egret.Shape,this.shape.graphics.lineStyle(1,12434877),this.shape.graphics.beginFill(GameData.chunkbg[this.ChunkType]),this.shape.graphics.drawRect(e[t][1]*this.stageSize.boxsize,e[t][0]*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape)},t.prototype.initChunk=function(e){var t=new Array;switch(e){case 1:t.push([0,0]),t.push([0,1]),t.push([0,2]),t.push([0,3]),t.push([1,3]);break;case 2:t.push([0,0]),t.push([0,0]),t.push([0,1]),t.push([0,2]),t.push([1,2]),t.push([0,3]);break;case 3:t.push([0,0]),t.push([1,0]),t.push([1,1]),t.push([2,0]),t.push([2,1]);break;case 4:t.push([0,0]),t.push([0,1]),t.push([1,1]),t.push([2,1]),t.push([2,2]);break;case 5:t.push([0,0]),t.push([1,0]),t.push([1,-1]),t.push([2,-1]),t.push([2,-2])}return t},t.prototype.initSeven=function(e){var t=new Array;switch(e){case 1:t=[[0,0,1,1],[1,1,1,0],[0,0,0,0],[0,0,0,0]];break;case 2:t=[[1,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]];break;case 3:t=[[1,0,0,0],[1,1,0,0],[1,1,0,0],[0,0,0,0]];break;case 4:t=[[0,1,1,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]];break;case 5:t=[[1,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]];break;case 6:t=[[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]];break;case 7:t=[[0,0,1,0],[0,1,1,1],[0,0,1,0],[0,0,0,0]];break;case 8:t=[[1,1,1,1],[0,0,1,0],[0,0,0,0],[0,0,0,0]];break;case 9:t=[[1,1,1,1],[0,0,0,1],[0,0,0,0],[0,0,0,0]]}return t},t.prototype.showButton=function(e){for(var t=this.initSeven(e),a=0;a<this.stageSize.row;a++)for(var i=0;i<this.stageSize.col;i++)this.chunkMap[a][i]=t[a][i];this.showStage()},t}(BaseChunk);__reflect(Chunk.prototype,"Chunk");var CreateGame=function(e){function t(){var t=e.call(this)||this;return t.moveChunk=null,t.chooseChunk=null,t.startTap=!0,t.stageSize={col:20,row:20,boxsize:60},t.buttomStageSize={col:9,row:5,boxsize:60,buttomX:20,buttomHeight:300},t.chunkGroup=new Array,GameData.initData(),t.GameChunkGroup=new egret.Sprite,t.GameChunkGroup.y=500,t.GameMapGroup=new egret.Sprite,t.GameMapGroup.graphics.beginFill(65280),t.GameMapGroup.graphics.drawRect(0,0,GameData.gameStageSize.row*GameData.gameStageSize.boxsize,GameData.gameStageSize.col*GameData.gameStageSize.boxsize),t.GameMapGroup.graphics.endFill(),t.addChild(t.GameMapGroup),t.begin(),t}return __extends(t,e),t.prototype.getTouchPoint=function(e){var t=new Array;return t[0]=Math.floor(e.x/GameData.gameStageSize.boxsize),t[1]=Math.floor(e.y/GameData.gameStageSize.boxsize),t},t.prototype.begin=function(){this.showGameStage();for(var e=1;6>e;e++)this.chunkone=new Chunk(e),this.chunkGroup.push(this.chunkone),this.GameChunkGroup.addChild(this.chunkone),this.chunkone.touchEnabled=!0,this.chunkone.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this),this.chunkone.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this),this.chunkone.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);this.addChild(this.GameChunkGroup);var t=new egret.TextField;t.touchEnabled=!0,t.text="点击翻转",t.x=400,this.addChild(t),t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onlabel_tap,this);var a=new egret.TextField;a.touchEnabled=!0,a.text="点击旋转",a.x=400,a.y=100,this.addChild(a),a.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onlabel_tap_rot,this);var i=new egret.TextField;i.touchEnabled=!0,i.text="提交",i.x=400,i.y=200,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onDone,this)},t.prototype.onDone=function(){if(GameData.GameDone()){var e=new egret.TextField;e.touchEnabled=!0,e.text="恭喜你,已经挑战成功",e.x=400,e.y=300,this.addChild(e)}},t.prototype.onlabel_tap=function(){console.log("点击"),null!=this.chooseChunk&&(this.chooseChunk.chunkFlipUp(),GameData.cleanData(this.chooseChunk.ChunkType),this.chooseChunk.alpha=1)},t.prototype.onlabel_tap_rot=function(){console.log("点击"),null!=this.chooseChunk&&(this.chooseChunk.chunkChage(),GameData.cleanData(this.chooseChunk.ChunkType),this.chooseChunk.alpha=1)},t.prototype.ontouch_begin=function(e){if(this.startTap){this.startTap=!1,this.begigTapX=e.localX,this.begigTapY=e.localY;var t={x:e.localX,y:e.localY},a=this.getTouchPoint(t);this.begigTapPorinCol=a[0],this.begigTapPorinRow=a[1],this.isflipUp=!0,this.longtime=egret.getTimer();var i=e.currentTarget;this.moveChunk=i,this.chooseChunk=i,this.offsetX=e.stageX-i.x,this.offsetY=e.stageY-500-i.y,GameData.cleanData(i.ChunkType),i.alpha=1,this.GameChunkGroup.setChildIndex(i,this.GameChunkGroup.numChildren-1)}},t.prototype.onMove=function(e){this.draggedObject.x=e.stageX-this.offsetX,this.draggedObject.y=e.stageY-this.offsetY},t.prototype.ontouch_move=function(e){null!=this.moveChunk&&(this.moveChunk.x=e.stageX-GameData.gameStageSize.boxsize/2,this.moveChunk.y=e.stageY-GameData.gameStageSize.boxsize/2-500)},t.prototype.ontouch_end=function(e){var t=e.currentTarget;this.startTap=!0;var a=t.x,i=t.y+500,n={x:a,y:i};console.log("ret x: "+n.x+"reg y:"+n.y);var h=this.getTouchPoint(n);if(this.endTapPorinRow=h[1],this.endTapPorinCol=h[0],!(this.endTapPorinRow<0||this.endTapPorinCol<0||null==this.moveChunk||this.endTapPorinRow>=GameData.gameStageSize.row||this.endTapPorinCol>=GameData.gameStageSize.col||0!=GameData.mapData[this.endTapPorinRow][this.endTapPorinCol])){for(var s=0;s<t.chunkMap.length;s++){var o=this.endTapPorinRow+t.chunkMap[s][0],r=this.endTapPorinCol+t.chunkMap[s][1];if(0>o||0>r||o>GameData.gameStageSize.row-1||r>GameData.gameStageSize.col-1)return;if(o<GameData.gameStageSize.row&&r<GameData.gameStageSize.col&&0!=GameData.mapData[o][r])return}for(var s=0;s<t.chunkMap.length;s++){var o=this.endTapPorinRow+t.chunkMap[s][0],r=this.endTapPorinCol+t.chunkMap[s][1];console.log("curRow"+o+"curCol"+r),o<GameData.gameStageSize.row&&r<GameData.gameStageSize.col&&0==GameData.mapData[o][r]&&(GameData.mapData[o][r]=t.ChunkType,t.y=t.y-(500+t.y-this.endTapPorinRow*GameData.gameStageSize.boxsize),t.x=t.x-(t.x-this.endTapPorinCol*GameData.gameStageSize.boxsize))}this.moveChunk=null,console.log("row: "+this.endTapPorinRow+"col:"+this.endTapPorinCol+" map "+t.chunkMap.length)}},t.prototype.showGameStage=function(){for(var e=0;e<GameData.gameStageSize.row;e++)for(var t=0;t<GameData.gameStageSize.col;t++)this.shape=new egret.Shape,0==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.gameStageSize.color),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):1==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[1]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):2==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[2]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):3==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[3]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):4==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[4]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):5==GameData.mapData[e][t]?(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[5]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape)):6==GameData.mapData[e][t]&&(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.chunkbg[6]),this.shape.graphics.drawRect(t*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomX,e*GameData.gameStageSize.boxsize+GameData.gameStageSize.buttomY,GameData.gameStageSize.boxsize,GameData.gameStageSize.boxsize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape))},t.prototype.showStage=function(){for(var e=0;e<this.stageSize.row;e++)for(var t=0;t<this.stageSize.col;t++)this.shape=new egret.Shape,0==this.erwei[e][t]?(this.shape.graphics.beginFill(13684944),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape)):(1==this.erwei[e][t]||2==this.erwei[e][t])&&(this.shape.graphics.beginFill(14423100),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape))},t}(egret.Sprite);__reflect(CreateGame.prototype,"CreateGame");var GameData=function(){function e(){}return e.initData=function(){this.chunkbg=[10494192,15597806,15658496,10494192,15608876,15636992,13445520,13639824,16766720,13481421],e.stageW=egret.MainContext.instance.stage.stageWidth,e.stageH=egret.MainContext.instance.stage.stageHeight,e.mapData=new Array;for(var t=0;t<e.gameStageSize.row;t++){e.mapData[t]=new Array;for(var a=0;a<e.gameStageSize.col;a++)e.mapData[t][a]=0}},e.GameDone=function(){for(var t=0;t<e.gameStageSize.row;t++)for(var a=0;a<e.gameStageSize.col;a++)if(0==e.mapData[t][a])return!1;return!0},e.cleanData=function(t){for(var a=0;a<e.gameStageSize.row;a++)for(var i=0;i<e.gameStageSize.col;i++)e.mapData[a][i]==t&&(e.mapData[a][i]=0)},e.chunkTempX=0,e.chunkTempY=0,e.gameStageSize={col:5,row:5,boxsize:70,buttomX:0,buttomY:0,color:12434877},e.chunkTypeNum=2,e.stageW=0,e.stageH=0,e}();__reflect(GameData.prototype,"GameData");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.drawText=function(){this.txt=new egret.TextField,this.txt.size=12,this.txt.x=250,this.txt.width=200,this.txt.height=200,this.txt.text="事件文字"},t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json","resource/")},t.prototype.onConfigComplete=function(e){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.loadGroup("preload")},t.prototype.onResourceLoadComplete=function(e){"preload"==e.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.createGameScene())},t.prototype.onItemLoadError=function(e){console.warn("Url:"+e.resItem.url+" has failed to load")},t.prototype.onResourceLoadError=function(e){console.warn("Group:"+e.groupName+" has failed to load"),this.onResourceLoadComplete(e)},t.prototype.onResourceProgress=function(e){"preload"==e.groupName&&this.loadingView.onProgress(e.itemsLoaded,e.itemsTotal)},t.prototype.createGameScene=function(){this.drawText();var e=new CreateGame;this.addChild(e)},t.prototype.onTouch=function(e){this.txt.text+="\n点击了spr1"},t.prototype.ontouch_begin=function(e){},t.prototype.ontouch_move=function(e){this.chunkone.x=e.stageX,this.chunkone.y=e.stageY},t.prototype.ontouch_end=function(e){},t}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,a,i){function n(e){t.call(i,e)}function h(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,h,null),a.call(i))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(i,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,a){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(i,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,h,null),RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);