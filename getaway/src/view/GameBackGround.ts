//
//背景类显示列表
class GameBackGround extends egret.Sprite{
	public constructor() {
		super();
	}

	public changeBackground(){
		this.cacheAsBitmap = false;
		this.removeChildren();
		this.createBackGroundImage();
		this.createMapbg();
		this.createLevelReqBg();
		this.createStepBg();
		this.cacheAsBitmap = true;
	}

	private bgImage: egret.Bitmap;
	private girdBg: egret.Bitmap[];

	//创建地图背景图片
	private createBackGroundImage(){
		if(!this.bgImage){
			this.bgImage = new egret.Bitmap();
		}

		//场景
		this.bgImage.texture = RES.getRes(GameData.levelBackgroundImageName);
		this.bgImage.width = GameData.stageW;
		this.bgImage.height = GameData.stageH;
		this.addChild(this.bgImage);

		//道具背景
		var propbg: egret.Bitmap = new egret.Bitmap();
		propbg.texture = RES.getRes("propbg_png");
		propbg.width =GameData.stageW;
		propbg.height = GameData.stageH / 5 + 20;
		propbg.y = GameData.stageH - propbg.height;
		this.addChild(propbg);
	}

	/**
	 * 创建地图背景图片的格子图
	 */
	private createMapbg(){
		if(!this.girdBg){
			this.girdBg = new Array();
		}
		var gird:egret.Bitmap;
		var girdWidth:number = (GameData.stageW - 40) / GameData.MaxColumn;
		var startY: number = (GameData.stageH - (GameData.stageW - 30 )/6 -60)-girdWidth* GameData.MaxColumn; 
		for(var i:number =0;i<GameData.MaxRow;i++){
			for(var t:number =0; t<GameData.MaxColumn;t++){
				if(GameData.mapData[i][t] != -1){
					if(this.girdBg.length<(i*GameData.MaxRow+t)){
						gird = new egret.Bitmap();
						this.girdBg.push(gird);
					}else{
						gird = this.girdBg[i*GameData.MaxRow+t];
					}
					gird.width = girdWidth;
					gird.height = girdWidth;
					gird.x = 20+girdWidth*i;
					gird.y = startY + girdWidth * i;
					if( (i % 2 == 0 && t%2 == 0) || (i%2 ==1 && t%2 ==1) ){
						gird.texture = RES.getRes("elementbg1_png");
					}else{
						gird.texture = RES.getRes("elementbg2_png");
					}
					this.addChild(gird);
				}
			}
		}

	}

	/**
	 * 创建关卡地图场景
	 */
	private createLevelReqBg(){
		var girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn;
		var bg:egret.Bitmap = new egret.Bitmap();
		bg.texture = RES.getRes("levelreqbg_png");
		bg.width = GameData.levelreq.getLevelReqNum() * (10 + girdWidth) + 20;
		bg.height = girdWidth + 60;
		bg.x = 20;
		bg.y = 50;
		this.addChild(bg);

		var bgtxt: egret.Bitmap = new egret.Bitmap();
		bgtxt.texture = RES.getRes("levelreqtitle_png");
		bgtxt.x = bg.x + (bg.width - bgtxt.width) / 2;
		bgtxt.y = bg.y -18;
		this.addChild(bgtxt);
	}

	/**
	 * 剩余步数背景
	 */
	private createStepBg(){
		var bg: egret.Bitmap = new egret.Bitmap();
		bg.texture = RES.getRes("levelreqbg_png");
		bg.width = 100;
		bg.height = 100;
		bg.x = GameData.stageW - 110;
		bg.y =50;
		this.addChild(bg);

		var bgtxt: egret.Bitmap = new egret.Bitmap();
		bgtxt.texture = RES.getRes("sursteptitle_png");
		bgtxt.x = bg.x + (bg.width - bgtxt.width) / 2;
		bgtxt.y = bg.y + 10;
		this.addChild(bgtxt);
	}

}