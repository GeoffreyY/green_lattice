var placeGreen = {
	//Options
	xBase: 900,
	yBase: 240,
	width: 100,
	height: 70,

	art: [],

	//Banner
	banner: {
		xBase: 909,
		yBase: 281,
		width: 81,
		height: 5,
		tiles: `
00000     303 00000 00000 00000 00000 003 0 0     _000_ 00000 00000 0 00000 00000
0   0     0   0     0   0 0     0     0 0 0 0     0   0   0     0   0 0     0    
00000   303   0 000 00000 000_  000_  0 0 0 0     00000   0     0   0 0     000_ 
0 0     0     0   0 0 0   0     0     0 0 0 0     0   0   0     0   0 0     0    
0 300 303     00000 0 300 00000 00000 0 300 00000 0   0   0     0   0 00000 00000`.split("\n").slice(1)
	},
	daft_punk_robot: {
		xBase: 985,
		yBase: 289,
		width: 13,
		height: 35,
		tiles: `
  _________  
 ___________ 
 ___________ 
_____________
_____________
_____________
_____________
_____________
 ___________ 
 ___________ 
  _________  
  _________  
  _________  
  _________  
  _________  
   _______   
   _______   

  _________  
 ___________ 
 ___________ 
 ___________ 
 ___________ 
 ___________ 
 ___________ 
 ___________ 
 ___________ 
 ___________ 
  _________  
  _________  
  _________  
  _________  
  _________  
   _______   
   _______   `.split("\n").slice(1)
	},

	majora_mask: {
		xBase: 925,
		yBase: 297,
		width: 57,
		height: 55,
		tiles: Array(55).fill("_".repeat(57))
	},

	getBackgroundLatticeColor: function (x,y) {
		if (x % 2 == 1 && y % 2 == 1) {
			if ((x+y) % 4 == 0) {
				return "A";
			} else {
				return "9";
			}
		} else {
			return "3";
		}
	},

	getTargetColor: function (x, y) {
		var _this = this;
		if (x >= _this.xBase && x < _this.xBase + _this.width && y >= _this.yBase && y < _this.yBase + _this.height ) {
			for (artPiece in _this.art) {
				var piece = _this.art[artPiece];
				if (x >= piece.xBase && x < piece.xBase + piece.width && y >= piece.yBase && y < piece.yBase + piece.height ) {
					if (piece.tiles[y - piece.yBase] && piece.tiles[y - piece.yBase][x - piece.xBase]) {
						var artColor = piece.tiles[y - piece.yBase][x - piece.xBase];
						if (artColor === " ") {
							return _this.getBackgroundLatticeColor(x,y);
						} else {
							return artColor;
						}
					} else {
						return "_";
					}

				}
			}
			return _this.getBackgroundLatticeColor(x,y)
		} else {
			return "_";
		}
	},

	getWrongTiles: function () {
		var _this = this;
		this.api.getCanvasBitmapState().then(function(e,i) {
			var canvas = i;

			_this.wrongTiles.length = 0;

			for (var x = _this.xBase;x < _this.xBase + _this.width; x++) {
				for (var y = _this.yBase; y < _this.yBase + _this.height; y++) {
					var _targetColor = _this.getTargetColor(x, y);
					var targetColor = parseInt(_targetColor, 16);
					var tileColor = canvas[x + y * r.config.place_canvas_width];
					if(targetColor !== tileColor && _targetColor !== "_") {
						_this.wrongTiles.push([x,y,targetColor, tileColor]);
					}
				}
			}
			_this.wrongTilesNode.innerHTML = _this.wrongTiles.length + " wrong tiles in lattice"
			//console.log(_this.wrongTiles.length + " wrong tiles");
		});
	},

	drawOne: function () {
		var _this = this;
		this.api.getTimeToWait().then(function(timer) {
			if (timer < 1) {
				if (_this.wrongTiles.length > 0) {
					var tile = _this.wrongTiles[Math.floor(Math.random()*_this.wrongTiles.length)];
					var x = tile[0];
					var y = tile[1];
					var targetColor = tile[2];
					var tileColor = tile[3];
					_this.api.getPixelInfo(x,y).then(function(bTile){
						if (bTile.color == tileColor) {
							console.log("Drawing at (" + x + "," + y + "): " + get_color_name(targetColor));
							_this.api.draw(x,y,targetColor);
							window.setTimeout(function(){_this.drawOne()}, 5000);
						} else {
							console.log("Redrawing");
						}
					});
				}
			} else {
				window.setTimeout(function(){_this.drawOne()}, timer + 5000);
				_this.timer.startTimer(timer + Date.now());
				_this.timer.show();
			}
		})
	},

	drawBorder: function(xBase,yBase,width,height,color) {
		_this = this;
		_this.canvasse.ctx.fillStyle = color;

        for (var x = xBase - 1;x < xBase + width + 1; x++) {
        	_this.canvasse.ctx.fillRect(x, yBase - 1, 1, 1);
        	_this.canvasse.ctx.fillRect(x, yBase + height, 1, 1);
        }

        for (var y = yBase - 1;y < yBase + height; y++) {
        	_this.canvasse.ctx.fillRect(xBase - 1, y, 1, 1);
        	_this.canvasse.ctx.fillRect(xBase + width, y, 1, 1);
        }
	},

	setLastColorPixel: function() {
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-75px)";

		var x = 42;
		var y = 42;
		var targetColor = 5;
		node.innerHTML = "Drawing at (" + x + "," + y + "): " + get_color_name(targetColor);

		toolbar.appendChild(node);
	},

	setWrongTileCount: function() {
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");
		this.wrongTilesNode = node;

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-50px)";

		node.innerHTML = "0";

		toolbar.appendChild(node);
	},

	init: function() {
		var _this = this;
		_this.art.push(_this.banner);
		_this.art.push(_this.daft_punk_robot);
		_this.art.push(_this.majora_mask);
		_this.wrongTiles = [];
		_this.setWrongTileCount();
		_this.setLastColorPixel();
		r.placeModule("test", function(e) {
			_this.api = e("api");
			_this.canvasse = e("canvasse");
			_this.client = e("client");
			_this.timer = e("timer");

			_this.canvasse.drawBufferToDisplay =  function() {
	            var e = new ImageData(_this.canvasse.readBuffer, _this.canvasse.width, _this.canvasse.height);
	            _this.canvasse.ctx.putImageData(e, 0, 0);

	            for (artPiece in _this.art) {
					var piece = _this.art[artPiece];
					_this.drawBorder(piece.xBase,piece.yBase,piece.width,piece.height,"blue");
				}

				_this.drawBorder(_this.xBase,_this.yBase,_this.width,_this.height,"purple");

	            for (var i = 0;i < _this.wrongTiles.length; i++) {
	            	var tile = _this.wrongTiles[i];

					//this.canvasse.ctx.fillStyle = this.client.getPaletteColor(tile[3]);
					_this.canvasse.ctx.fillStyle = 'red';

					_this.canvasse.ctx.fillRect(tile[0], tile[1], 1, 1);
	            }


	            _this.canvasse.isBufferDirty = !1;
	        }
		});

		window.setTimeout(function(){_this.drawOne()}, 3 * 1000);
		window.setInterval(function(){_this.getWrongTiles()}, 10 * 1000);
		_this.getWrongTiles();
	}

}

function get_color_name(color_number) {
	switch(color_number) {
		case 0:
			return 'white';
		case 1:
			return 'lightGrey';
		case 2:
			return 'grey';
		case 3:
			return 'black';
		case 4:
			return 'pink';
		case 5:
			return 'red';
		case 6:
			return 'orange';
		case 7:
			return 'brown';
		case 8:
			return 'yellow';
		case 9:
			return 'lightGreen';
		case 10:
			return 'green';
		case 11:
			return 'cyan';
		case 12:
			return 'teal';
		case 13:
			return 'blue';
		case 14:
			return 'fuchsia';
		case 15:
			return 'purple';
	}
}

placeGreen.init();
