var __reflect=this&&this.__reflect||function(e,t,a){e.__class__=t,a?a.push(t):a=[t],e.__types__=e.__types__?a.concat(e.__types__):a},__extends=this&&this.__extends||function(e,t){function a(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);a.prototype=t.prototype,e.prototype=new a},__awaiter=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))(function(o,i){function s(e){try{h(n.next(e))}catch(t){i(t)}}function r(e){try{h(n["throw"](e))}catch(t){i(t)}}function h(e){e.done?o(e.value):new a(function(t){t(e.value)}).then(s,r)}h((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function a(e){return function(t){return n([e,t])}}function n(a){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,i&&(s=i[2&a[0]?"return":a[0]?"throw":"next"])&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[0,s.value]),a[0]){case 0:case 1:s=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,i=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){h=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){h.label=a[1];break}if(6===a[0]&&h.label<s[1]){h.label=s[1],s=a;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(a);break}s[2]&&h.ops.pop(),h.trys.pop();continue}a=t.call(e,h)}catch(n){a=[6,n],i=0}finally{o=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var o,i,s,r,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:a(0),"throw":a(1),"return":a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},BaseChunk=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(egret.Sprite);__reflect(BaseChunk.prototype,"BaseChunk");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var ChunkType;!function(e){e[e.None=0]="None",e[e.Chunk1=1]="Chunk1",e[e.Chunk2=2]="Chunk2",e[e.Chunk3=3]="Chunk3",e[e.Chunk4=4]="Chunk4",e[e.Chunk5=5]="Chunk5"}(ChunkType||(ChunkType={}));var Chunk=function(e){function t(t,a){var n=e.call(this)||this;return n.stageSize={col:4,row:4,boxsize:70},n.chunkMap=new Array,n.chunkChooseMap=new Array,n.weiZhiX=0,n.weiZhiY=0,n.chunkCurLevelNum=a,n.ChunkType=t,n}return __extends(t,e),Object.defineProperty(t.prototype,"ChunkType",{get:function(){return this._ChunkType},set:function(e){this._ChunkType=e,this.showChunk(e)},enumerable:!0,configurable:!0}),t.prototype.flipUpDown=function(){for(var e,t=(new Array,0);2>t;t++)for(var a=0;4>a;a++)e=this.chunkMap[t][a],this.chunkMap[t][a]=this.chunkMap[4-t-1][a],this.chunkMap[4-t-1][a]=e;this.removeChildren(),this.showStage()},t.prototype.chunkFlipUp=function(){for(var e=new Array,t=0;t<this.chunkMap.length;t++)e[t]=new Array,e[t][0]=this.chunkMap[t][0],e[t][1]=this.chunkMap[t][1],t>0&&(this.chunkMap[t][0]=e[t][0],this.chunkMap[t][1]=-e[t][1]);this.removeChildren(),this.drawChunk(this.chunkMap)},t.prototype.chunkChage=function(){for(var e=new Array,t=0;t<this.chunkMap.length;t++)e[t]=new Array,e[t][0]=this.chunkMap[t][0],e[t][1]=this.chunkMap[t][1],t>0&&(this.chunkMap[t][0]=e[t][1],this.chunkMap[t][1]=-e[t][0]);console.log("chunkChage"+this.chunkMap[this.chunkMap.length-1][1]),this.removeChildren(),this.drawChunk(this.chunkMap)},t.prototype.change=function(){for(var e=new Array,t=3,a=0;4>a;a++){e[a]=new Array;for(var n=0;4>n;n++)e[a][n]=this.chunkMap[a][n]}for(var a=0;4>a;a++){for(var n=0;4>n;n++)this.chunkMap[a][n]=e[t][a],t--;t=3}this.removeChildren(),this.drawChunk(this.chunkMap),console.log("子元素："+this.numChildren)},t.prototype.showStage=function(){for(var e=0;e<this.stageSize.row;e++)for(var t=0;t<this.stageSize.col;t++)this.shape=new egret.Shape,0==this.chunkMap[e][t]?(this.shape.graphics.beginFill(12434877),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.shape.alpha=1):(1==this.chunkMap[e][t]||2==this.chunkMap[e][t])&&(1==this.ChunkType,this.shape.graphics.lineStyle(1,12434877),this.shape.graphics.beginFill(GameData.chunkbg[this.ChunkType]),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape))},t.prototype.showChunk=function(e){var t=this.initChunk(e);this.chunkMap=t,this.drawChunk(this.chunkMap)},t.prototype.drawChunk=function(e){for(var t=0;t<e.length;t++)this.shape=new egret.Shape,this.shape.graphics.lineStyle(1,12434877),this.shape.graphics.beginFill(GameData.chunkbg[this.ChunkType]),this.shape.graphics.drawRect(e[t][1]*GameData.stageBoxSize,e[t][0]*GameData.stageBoxSize,GameData.stageBoxSize,GameData.stageBoxSize),this.shape.graphics.endFill(),this.addChild(this.shape)},t.prototype.initChunk=function(e){return GameData.chunkGroupMap[this.chunkCurLevelNum][e-1]},t.prototype.initSeven=function(e){var t=new Array;switch(e){case 1:t=[[0,0,1,1],[1,1,1,0],[0,0,0,0],[0,0,0,0]];break;case 2:t=[[1,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]];break;case 3:t=[[1,0,0,0],[1,1,0,0],[1,1,0,0],[0,0,0,0]];break;case 4:t=[[0,1,1,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]];break;case 5:t=[[1,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]];break;case 6:t=[[1,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]];break;case 7:t=[[0,0,1,0],[0,1,1,1],[0,0,1,0],[0,0,0,0]];break;case 8:t=[[1,1,1,1],[0,0,1,0],[0,0,0,0],[0,0,0,0]];break;case 9:t=[[1,1,1,1],[0,0,0,1],[0,0,0,0],[0,0,0,0]]}return t},t.prototype.showButton=function(e){for(var t=this.initSeven(e),a=0;a<this.stageSize.row;a++)for(var n=0;n<this.stageSize.col;n++)this.chunkMap[a][n]=t[a][n];this.showStage()},t}(BaseChunk);__reflect(Chunk.prototype,"Chunk");var CreateGame=function(e){function t(){var t=e.call(this)||this;t.moveChunk=null,t.chooseChunk=null,t.startTap=!0,t.gameMapOffsetX=10,t.gameMapOffsetY=100,t.gameChunkOffsetX=10,t.gameChunkOffsetY=500,t.stageSize={col:20,row:20,boxsize:60},t.buttomStageSize={col:9,row:5,boxsize:60,buttomX:20,buttomHeight:300},t.chunkGroup=new Array;var a=RES.getRes("l1_json");return GameDataParse.createGameData(a),t.initData(0),GameData.curLevelNum=0,t.Cur(1),t}return __extends(t,e),t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.getTouchPoint=function(e){var t=new Array;return t[0]=Math.round(e.x/GameData.stageBoxSize),t[1]=Math.round(e.y/GameData.stageBoxSize),t},t.prototype.initData=function(e){GameData.initData(),this.removeChildren(),this.GameChunkGroup=new egret.Sprite,this.GameChunkGroup.y=this.gameChunkOffsetY,this.GameChunkGroup.x=this.gameChunkOffsetX,this.GameMapGroup=new egret.Sprite,this.GameMapGroup.graphics.beginFill(65280),this.GameMapGroup.y=this.gameMapOffsetY,this.GameMapGroup.x=this.gameMapOffsetX,this.GameMapGroup.graphics.drawRect(0,0,GameData.stageCol*GameData.stageBoxSize,GameData.stageRow*GameData.stageBoxSize),this.GameMapGroup.graphics.endFill(),this.addChild(this.GameMapGroup),this.begin(e)},t.prototype.Cur=function(e){var t=new egret.TextField;t.touchEnabled=!0,t.text="当前关卡"+e,t.x=100,t.y=10,this.addChild(t)},t.prototype.begin=function(e){this.showGameStage();for(var t=1;t<GameData.chunkGroupMap[e].length+1;t++)this.chunkone=new Chunk(t,e),this.chunkGroup.push(this.chunkone),this.GameChunkGroup.addChild(this.chunkone),this.chunkone.touchEnabled=!0,this.chunkone.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this),this.chunkone.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this),this.chunkone.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);this.addChild(this.GameChunkGroup);var a=new egret.TextField;a.touchEnabled=!0,a.text="点击翻转",a.x=10,a.y=50,this.addChild(a),a.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onlabel_tap,this);var n=new egret.TextField;n.touchEnabled=!0,n.text="点击旋转",n.x=150,n.y=50,this.addChild(n),n.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onlabel_tap_rot,this);var o=new egret.TextField;o.touchEnabled=!0,o.text="提交",o.x=300,o.y=50,this.addChild(o),o.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onDone,this);var i=new egret.TextField;i.touchEnabled=!0,i.text="高级模式",i.x=500,i.y=50,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTopMode,this);var s=new egret.TextField;s.touchEnabled=!0,s.text="选关",s.x=400,s.y=50,this.addChild(s),s.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChoose,this)},t.prototype.onChoose=function(){this.addChild(LevelGroup.getInstance())},t.prototype.onTopMode=function(){GameData.stageCol=9,GameData.stageRow=5,this.initData(5)},t.prototype.onNext=function(){GameData.curLevelNum<GameData.chunkGroupMap.length-1&&(console.log("a"+GameData.curLevelNum),GameData.curLevelNum++,GameData.curLevelNum==GameData.chunkGroupMap.length-1?(GameData.stageCol=9,GameData.stageRow=5):(GameData.stageRow=5,GameData.stageCol=5),this.initData(GameData.curLevelNum),this.Cur(GameData.curLevelNum+1))},t.prototype.onInit=function(){this.initData(0)},t.prototype.onDone=function(){this.addChild(new PopupButton)},t.prototype.onlabel_tap=function(){console.log("点击"),null!=this.chooseChunk&&(this.chooseChunk.chunkFlipUp(),GameData.cleanData(this.chooseChunk.ChunkType),this.chooseChunk.alpha=1)},t.prototype.onlabel_tap_rot=function(){console.log("点击"),null!=this.chooseChunk&&(this.chooseChunk.chunkChage(),GameData.cleanData(this.chooseChunk.ChunkType),this.chooseChunk.alpha=1)},t.prototype.ontouch_begin=function(e){this.startTap=!1;var t=e.currentTarget;this.begigTapX=t.x,this.begigTapY=t.y;var a={x:e.localX,y:e.localY},n=this.getTouchPoint(a);this.begigTapPorinCol=n[0],this.begigTapPorinRow=n[1],this.isflipUp=!0,this.longtime=egret.getTimer();var t=e.currentTarget;this.moveChunk=t,this.chooseChunk=t,this.offsetX=e.stageX-t.x-this.gameChunkOffsetX,this.offsetY=e.stageY-t.y-this.gameChunkOffsetY,GameData.cleanData(t.ChunkType),t.alpha=1,this.GameChunkGroup.setChildIndex(t,this.GameChunkGroup.numChildren-1)},t.prototype.onMove=function(e){this.draggedObject.x=e.stageX-this.offsetX,this.draggedObject.y=e.stageY-this.offsetY},t.prototype.ontouch_move=function(e){null!=this.moveChunk&&this.moveChunk.ChunkType==e.currentTarget.ChunkType&&(this.moveChunk.x=e.stageX-this.offsetX-this.gameChunkOffsetX,this.moveChunk.y=e.stageY-this.offsetY-this.gameChunkOffsetY)},t.prototype.ontouch_end=function(e){var t=e.currentTarget,a=t.x+this.gameChunkOffsetX-this.gameMapOffsetX,n=t.y+this.gameChunkOffsetY-this.gameMapOffsetY,o={x:a,y:n};console.log("ret x: "+t.x+"reg y:"+t.y);var i=this.getTouchPoint(o);if(this.endTapPorinRow=i[1],this.endTapPorinCol=i[0],console.log("endTapPorinRow: "+this.endTapPorinRow+"endTapPorinCol:"+this.endTapPorinCol),!(this.endTapPorinRow<0||this.endTapPorinCol<0||null==this.moveChunk||this.endTapPorinRow>=GameData.stageRow||this.endTapPorinCol>=GameData.stageCol||0!=GameData.mapData[this.endTapPorinRow][this.endTapPorinCol])){for(var s=0;s<t.chunkMap.length;s++){var r=this.endTapPorinRow+t.chunkMap[s][0],h=this.endTapPorinCol+t.chunkMap[s][1];if(0>r||0>h||r>GameData.stageRow-1||h>GameData.stageCol-1)return;if(r<GameData.stageRow&&h<GameData.stageCol&&0!=GameData.mapData[r][h])return}for(var s=0;s<t.chunkMap.length;s++){var r=this.endTapPorinRow+t.chunkMap[s][0],h=this.endTapPorinCol+t.chunkMap[s][1];r<GameData.stageRow&&h<GameData.stageCol&&0==GameData.mapData[r][h]&&(GameData.mapData[r][h]=t.ChunkType,t.alpha=.5,t.y=t.y-(t.y+this.gameChunkOffsetY-this.gameMapOffsetY-this.endTapPorinRow*GameData.stageBoxSize),t.x=t.x-(t.x+this.gameChunkOffsetX-this.gameMapOffsetX-this.endTapPorinCol*GameData.stageBoxSize))}console.log("row: "+this.endTapPorinRow+"col:"+this.endTapPorinCol+" map "+t.chunkMap.length)}},t.prototype.showGameStage=function(){for(var e=0;e<GameData.stageRow;e++)for(var t=0;t<GameData.stageCol;t++)this.shape=new egret.Shape,0==GameData.mapData[e][t]&&(this.shape.graphics.lineStyle(1,10494192),this.shape.graphics.beginFill(GameData.stageBoxColor),this.shape.graphics.drawRect(t*GameData.stageBoxSize+GameData.boxButtomX,e*GameData.stageBoxSize+GameData.boxButtomY,GameData.stageBoxSize,GameData.stageBoxSize),this.shape.graphics.endFill(),this.GameMapGroup.addChild(this.shape))},t.prototype.showStage=function(){for(var e=0;e<this.stageSize.row;e++)for(var t=0;t<this.stageSize.col;t++)this.shape=new egret.Shape,0==this.erwei[e][t]?(this.shape.graphics.beginFill(13684944),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape)):(1==this.erwei[e][t]||2==this.erwei[e][t])&&(this.shape.graphics.beginFill(14423100),this.shape.graphics.drawRect(t*this.stageSize.boxsize,e*this.stageSize.boxsize,this.stageSize.boxsize,this.stageSize.boxsize),this.shape.graphics.endFill(),this.addChild(this.shape))},t._instance=null,t}(eui.Component);__reflect(CreateGame.prototype,"CreateGame");var GameData=function(){function e(){}return e.initData=function(){this.chunkbg=[10494192,15597806,15658496,10494192,15608876,15636992,13445520,13639824,16766720,13481421],e.stageW=egret.MainContext.instance.stage.stageWidth,e.stageH=egret.MainContext.instance.stage.stageHeight,e.mapData=new Array;for(var t=0;t<e.stageRow;t++){e.mapData[t]=new Array;for(var a=0;a<e.stageCol;a++)e.mapData[t][a]=0}},e.GameDone=function(){for(var t=0;t<e.stageRow;t++)for(var a=0;a<e.stageCol;a++)if(0==e.mapData[t][a])return!1;return!0},e.cleanData=function(t){for(var a=0;a<e.stageRow;a++)for(var n=0;n<e.stageCol;n++)e.mapData[a][n]==t&&(e.mapData[a][n]=0)},e.chunkTempW=0,e.chunkTempH=500,e.stageBoxSize=70,e.stageBoxColor=12434877,e.boxButtomX=0,e.boxButtomY=0,e.curLevelNum=0,e.chunkTypeNum=2,e.stageW=0,e.stageH=0,e}();__reflect(GameData.prototype,"GameData");var GameDataParse=function(){function e(){}return e.createGameData=function(e){var t=e.chunkGroupMap.length;GameData.chunkGroupMap=new Array;for(var a=0;t>a;a++)GameData.chunkGroupMap.push(e.chunkGroupMap[a]);GameData.stageCol=e.stageCol,GameData.stageRow=e.stageRow},e}();__reflect(GameDataParse.prototype,"GameDataParse");var LevelGroup=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/levelgroup.exml",t.x=200,t.y=200,t.createLvButton(),t}return __extends(t,e),t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.createLvButton=function(){for(var e=0;e<GameData.chunkGroupMap.length;e++){var t=new eui.Button;t.width=70,t.height=70,t.label=e+1+"",t.x=70*e,t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnTap,this),this.lv_group.addChild(t)}},t.prototype.onBtnTap=function(e){var t=e.currentTarget;GameData.curLevelNum=t.label,GameData.curLevelNum==GameData.chunkGroupMap.length?(GameData.stageCol=9,GameData.stageRow=5):(GameData.stageRow=5,GameData.stageCol=5),CreateGame.getInstance().initData(t.label-1),CreateGame.getInstance().Cur(t.label-0)},t._instance=null,t}(eui.Component);__reflect(LevelGroup.prototype,"LevelGroup");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,a){function n(n){t.call(a,n,e)}if(RES.hasRes(e)){var o=RES.getRes(e);o?n(o):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isThemeLoadEnd=!1,t.isResourceLoadEnd=!1,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this);var t=new AssetAdapter;this.stage.registerImplementation("eui.IAssetAdapter",t),this.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json","resource/")},t.prototype.onConfigComplete=function(e){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);var t=new eui.Theme("resource/default.thm.json",this.stage);t.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.loadGroup("preload")},t.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.createScene()},t.prototype.onResourceLoadComplete=function(e){"preload"==e.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.isResourceLoadEnd=!0,this.createScene())},t.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&this.startCreateScene()},t.prototype.onItemLoadError=function(e){console.warn("Url:"+e.resItem.url+" has failed to load")},t.prototype.onResourceLoadError=function(e){console.warn("Group:"+e.groupName+" has failed to load"),this.onResourceLoadComplete(e)},t.prototype.onResourceProgress=function(e){"preload"==e.groupName&&this.loadingView.onProgress(e.itemsLoaded,e.itemsTotal)},t.prototype.startCreateScene=function(){this.addChild(CreateGame.getInstance())},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var PopupButton=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/popup.exml",t.init(),t.x=200,t.y=200,t.btn_comple.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onComple,t),t}return __extends(t,e),t.prototype.onComple=function(){GameData.GameDone()?(this.lb_text.text="恭喜你！可以进入下一关",this.btn_comple.label="下一关",this.parent.removeChild(this),CreateGame.getInstance().onNext()):(this.lb_text.text="很遗憾！请继续游戏",this.btn_comple.label="关闭",this.parent.removeChild(this))},t.prototype.init=function(){GameData.GameDone()?(this.lb_text.text="恭喜你！可以进入下一关",this.btn_comple.label="下一关"):(this.lb_text.text="很遗憾！请继续游戏",this.btn_comple.label="关闭")},t}(eui.Component);__reflect(PopupButton.prototype,"PopupButton");var PopupFailButton=function(){function e(){}return e}();__reflect(PopupFailButton.prototype,"PopupFailButton");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,a,n){function o(e){t.call(n,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),a.call(n))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,a){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);