//Start defining functions.

var placeGreen = { //a variable that holds functions. I >3 javascript. /s

	// semver convention
	version: "v1.15",

	//Options (for what?)
	xBase: 896,
	yBase: 215,
	width: 104,
	height: 115,

	get_color_name: function (color_number) { //0 is white. 3 is black.
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
			case 10: //A
				return 'green';
			case 11: //B
				return 'cyan';
			case 12: //C
				return 'teal';
			case 13: //D
				return 'blue';
			case 14: //E
				return 'fuchsia';
			case 15: //F
				return 'purple';
		}
	},

	art: [], //art pieces will be placed here later.

	//art starts here
	/*
	Special Characters:
		_:Do not paint over this square.
		 :Is lattice. That is a space.
		*:Wildcard used in a peice when there may be possible overlap with another peice. Allows other art to write over that pixel. If there is no other art it defaults to lattice.
	Colors: See above.

	*/

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
	
	daft_logo: {
		xBase: 983,
		yBase: 325,
		width: 15,
		height: 7,
		tiles: `
_______________
_______________
_______________
_______________
_______________
_______________
_______________`.split("\n").slice(1)
	},

    skyrim_logo_alt: {
        xBase: 895,
        yBase: 237,
        width: 36,
        height: 9,
        tiles: Array(9).fill("_".repeat(36))
    },

	skyrim_logo: {
		xBase: 895,
		yBase: 237,
		width: 36,
		height: 9,
		tiles: `
777777777777777777777777777777777777
777777777777777777777777777777777777
777077770777777077777777777077777777
777007070770077070707070707770070777
770700707700777007707070077070707077
770707707777077070770070777070707077
707707077700777070777070777070777077
707777077777777777770777777777777777
777777777777777777777777777777777777`.split("\n").slice(1)
	},

	slime: {
		xBase: 894,
		yBase: 215,
		width: 28,
		height: 17,
		tiles: `
__________________________**
__________________________**
__________________________**
__________________________**
__________________________**
__________________________**
__________________________**
____________________________
____________________________
____________________________
____________________________
____________________________
____________________________
____________________________
____________________________
____________________________`.split("\n").slice(1)
	},
	
	tlfower: {
		xBase: 911,
		yBase: 211,
		width: 9,
		height: 10,
		tiles: `
_________
_________
_________
_________
_________
_________
_________
_________
_________
_________`.split("\n").slice(1)
	},
	
	owo: {
		xBase: 921,
		yBase: 215,
		width: 19,
		height: 7,
		tiles: `
3_444444444444444_3
3443344444444433443
3430C3434443430C343
343CB3434_4343CB343
343BB343434343BB343
344334443_344433443
3_444444444444444_3`.split("\n").slice(1)
	},
	
	warframe: {
		xBase: 975,
		yBase: 215,
		width: 25,
		height: 15,
		tiles: `
1111111111111111111111111
100000000000C000000000001
1000000000CCCCC0000000001
10000000CCCC0CCCC00000001
1000000CCCC000CCCC0000001
10000CCCC000C000CCCC00001
1000CCC000CCCCC000CCC0001
100CCC00CCCC0CCCC00CCC001
1CCC0CC0CC00C00CC0CC0CCC1
10C0C0C0C00CCC00C0C0C0C01
100C0C0CC0CC0CC0CC0C0C001
100C0C00_CC000CC_00C0C001
1000C0C000C000C000C0C0001
1000CC0000000000000CC0001
1111111111111111111111111`.split("\n").slice(1)
	},

	skyrim: {
		xBase: 855,
		yBase: 216,
		width: 41,
		height: 69,
		tiles: `
**********7732377777777773_2237**********
**********73_23777777777773_237**********
*********773_23777777777773_2377*********
*********73_237777377777773_2237*********
********773_237773377777773__2377********
********73_22377733377737773_2237********
*******773_2237773_377337773_22377*******
*******73_22377773_333_37773_22237*******
******773_22377773_33_2337773_22377******
*****773_22237773_22223377773_22237******
*****773_22237773_22222377773_222377*****
*****73_22223773_222222237773_222377*****
****773_22223773_2333332237773_222377****
****73_222223773_3777773223773_222237****
***773_222223773_3777773223773_2222377***
***73_222223377333777773223773_2222337***
**773_22222377733777333_23773_222222337**
**73__222222377377333__23773_22222222377*
*773_2222222237773__22337773333_22222337*
*73_2222223323773_2222377777373_222222377
773_2222223737773_2233777777773_222222337
73_22222223777773_22377777777773222222237
73_22222237777773_22377777777773_22222237
73_22222237733773_22377777737773_22222237
73_222222373_2333_222333373_3773_22222237
73_2222223333_233_222222233_3773322222237
73_2222223333323_222222222233333222222237
73_22222222332222222222222222222222222237
733_2222222222222222222222222222222222237
773_2222222222222222222222222222222222237
*773_222222222222222222222222222222222337
**73__22222222222222222222222222222223777
**773_222222222222222222222232222222237**
***73_22222233222222222222223_222222237**
***773_22222333_32222222222333_22222377**
****73_22222373_33_22222233333_2222377***
****773_2222373_373_2222337773_222237****
****773_2223377377332222377773_222237****
*****773_223777777732222377773_222337****
******73_222377777732222377733_222337****
******733_2237777773322237333_2223377****
******773_22337777773_223333_2222377*****
*******73_22233777773_22333_2222337******
*******773_2222377733_2233_22222377******
********73_222223773_22333_2222377*******
********773_22223773_23333_222237********
*********73_2222373_223373_222377********
*********773_222333_233773_22377*********
**********73_22233_2337773_2237**********
**********733_2233_2377773_2237**********
**********773_2233_3377773_2377**********
***********773_233_2377773_377***********
************73_23732377773377************
************7332373_37777777*************
************7773773_37777777*************
*************77773_23777777**************
**************773_233777777**************
***************73_23777777***************
***************73_23733377***************
***************73_2373_377***************
***************733_3332237***************
***************773_2222377***************
****************733222337****************
****************733323377****************
****************77732377*****************
******************73_37******************
******************73337******************
******************77777******************
********************7********************`.split("\n").slice(1)
	},

	assorted_art_1: {
		xBase: 853,
		yBase: 259,
		width: 38,
		height: 52,
		tiles: `
***3****3*****************************
**32333323****************************
**32FFFF23****************************
*33FFFFFF3****************************
*3222FF2223***************************
*3252222523***************************
*3222552223***************************
*3323BB3233***************************
*335BBBB533***************************
*3555555553***************************
365555555563**************************
366555555663**************************
366669966663**************************
36666FF66663**************************
66666FF666663*************************
55666FF666553*************************
5555522555553*************************
55555FF555553*************************
5555522555553*************************
5555522555553*************************
5555522555553*************************
555552255553**************************
335552255533**************************
*3223333223***************************
**333DD333********************33******
***3DCDD3******************3339A333***
**3DCCCDD3****************3A99A9AAA33*
*3DBCCDDDD3**************3A999AA999993
3DBBCDBBBDD3*************39A9AAA9A99A3
DBBBDBBCBBDD3***********39999999999A93
BBBDDCBDDBBDD33*3****3**39A9AAA9A9AA9A
DBBDDDBBDDBD33C3F3**3F3339AA9A9A9AA9AA
DDBBDDCBDDD33C3FFF3*3FF3339A769A76AA99
3DDBCDBBDD3*3CFFFFF33FFF337666A666A9AA
*3DDCCBBD3***3CCFFFF3FFF3376666677AA99
**3DDDDD3****3FFCCFFFFFF33376667339AA9
***3DDD3*****3FFF3CCFFFFC33367337793AA
****3D3******3FFF33FCCFFC33066630636A3
****333*******3FF3*3FFCC3377666666763*
***3B3B3*******3F3**3F33**37366666783*
**3B3B3B3*******3****3*****373776633**
**333B333*****************3337666333**
**3333333****************3222376670033
*3BBBBBBB33*************32000666700002
3BCCCCCCCBB3***********320000261002000
3BCCCCCCCCCB3***333***3762100100002001
3BCCCCCCCCCC3**3B3B3336667300000000200
3BCC00CCCCCC3**3BBB3766633320000002317
3BCC30CCCCCC3**3BBB36673DC332002221376
3BCCCCCCCCCCC3*33B3767533DC30000002336
300000CCCCCCCC33BC36633553D9A9A9A9A376
330000CCB000CCCCC33662035339A9A9A9A766`.split("\n").slice(1)
	},


	majora_mask: {
		xBase: 924,
		yBase: 296,
		width: 59,
		height: 57,
		tiles: `
                 _                       _                 
                ___                     ___                
               _____                   _____               
               _____                   _____               
               _____                   _____               
              _______                 _______              
              _______                 _______              
              _______                 _______              
              ________               ________              
              ________               ________              
             _________               _________             
             __________             __________             
            _____________         _____________            
           ________________     ________________           
          ___________________ ___________________          
         _________________________________________         
        ___________________________________________        
       _____________________________________________       
       _____________________________________________       
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
      _______________________________________________      
     _________________________________________________     
    ___________________________________________________    
   _____________________________________________________   
  _______________________________________________________  
 _________________________________________________________ 
___________________________________________________________
___________________________________________________________
 _____  ___________________________________________  _____ 
       _____________________________________________       
      _______________________________________________      
     _________________________________________________     
    ___________________________________________________    
   _____________________________________________________   
  _______________________________________________________   
  _______  _____________________________________  _______  
   _____  _______________________________________  _____   
          _______________________________________          
         _________________________________________         
        _________ _______________________ _________        
        _______  _________________________  _______        
        _____    _________________________    _____        
         ___     ________ _______ ________     ___         
                 _______   _____    _______                
                _______     ___      _______               
                ______       _        ______               
                _____                  _____               
                ____                    ____               
                 __                      __                `.split("\n").slice(1)
	},
	//art ends here/

    grape: {
        xBase: 947,
        yBase: 217,
        width: 20,
        height: 16,
        tiles: Array(16).fill("_".repeat(20))
    },

	bottom_left: { //the shields?
		xBase: 871,
		yBase: 311,
		width: 65,
		height: 40,
		tiles: Array(40).fill("_".repeat(65))
	}, //Probably art.

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
		if (x >= _this.xBase && x < _this.xBase + _this.width && y >= _this.yBase && y < _this.yBase + _this.height ) { //Should never fail. Period.
			for (artPiece in _this.art) {
				var piece = _this.art[artPiece];
				if (x >= piece.xBase && x < piece.xBase + piece.width && y >= piece.yBase && y < piece.yBase + piece.height ) {
					if (piece.tiles[y - piece.yBase] && piece.tiles[y - piece.yBase][x - piece.xBase]) { //This should only fail if art is defined incorrectly.
						var artColor = piece.tiles[y - piece.yBase][x - piece.xBase];
						if (artColor === " ") {
							return _this.getBackgroundLatticeColor(x,y);
						} else if (artColor === "*") {
						} else {
							return artColor;
						}
					} else {
						return "_";
						console.log('Art Defined incorrectly. ' + artPiece);
					}
				}
			}
			return _this.getBackgroundLatticeColor(x,y)
		} else {
			return "_";
			console.log('Something has gone terribly wrong.');
		}
	},

	getWrongTiles: function () {
		var _this = this;

		_this.is_fetching = !!_this.is_fetching;

		if(_this.is_fetching) {
			return;
		}

		_this.is_fetching = true;

		this.api.getCanvasBitmapState().then(function(e,i) {
			var canvas = i;

			_this.wrongTiles.length = 0;

			for (var x = _this.xBase;x < _this.xBase + _this.width; x++) {
				for (var y = _this.yBase; y < _this.yBase + _this.height; y++) {
					var _targetColor = _this.getTargetColor(x, y);
					var targetColor = parseInt(_targetColor, 16);
					var tileColor = canvas[x + y * r.config.place_canvas_width];
					if(targetColor !== tileColor && _targetColor !== "_" && _targetColor !== "*") {
						_this.wrongTiles.push([x,y,targetColor, tileColor]);
					}
				}
			}

			document.getElementById("wrongTilesNode").innerHTML = _this.wrongTiles.length + " wrong tiles in lattice"
			//console.log(_this.wrongTiles.length + " wrong tiles");

			_this.client.setInitialState(canvas);

			_this.is_fetching = false;
		});
	},

	drawOne: function () {
		var _this = this;

		this.api.getTimeToWait().then(function(timer) {

            if(isNaN(timer)) {
                console.log('timer == NaN');
                window.setTimeout(function(){_this.drawOne()}, 1000);
                return;
            }

            _this.getWrongTiles();

			if (timer < 1) {

				if(!_this.setting_should_draw_toggle) { //if should draw is on then script draws for you.
					console.log('cannot draw')
					window.setTimeout(function(){_this.drawOne()}, 1000);
					return;
				}

				console.log('now i can draw');

				if (_this.wrongTiles.length > 0) {
					var tile = _this.wrongTiles[Math.floor(Math.random()*_this.wrongTiles.length)];
					var x = tile[0];
					var y = tile[1];
					var targetColor = tile[2];
					var tileColor = tile[3];
					_this.api.getPixelInfo(x,y).then(function(bTile){
						if (bTile.color == tileColor) {
							_this.setLastColorPixel(x, y, targetColor);
							//console.log("Drawing at (" + x + "," + y + "): " + get_color_name(targetColor));
							_this.api.draw(x,y,targetColor);
							window.setTimeout(function(){_this.drawOne()}, 1000);
						} else {
							//console.log("Redrawing");
						}
					});
					// .catch(function(e) {
					//   console.error(e);
					//   window.setTimeout(function(){_this.drawOne()}, 5000);
					// });
				} else {
                    // nothing to draw, wait two seconds
                    console.log('nothing to draw, wait two seconds');
                    window.setTimeout(function(){_this.drawOne()}, 2000);
                }
			} else {
				window.setTimeout(function(){_this.drawOne()}, timer + 1000);
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

	init: function() { //This is the first function fam. It starts everything.
		var _this = this;
		_this.art.push(_this.banner);
        _this.art.push(_this.grape);
		_this.art.push(_this.daft_punk_robot);
		_this.art.push(_this.bottom_left);
		_this.art.push(_this.majora_mask);
		//_this.art.push(_this.skyrim_logo);
        _this.art.push(_this.skyrim_logo_alt);
		_this.art.push(_this.slime);
		_this.art.push(_this.tlfower);
		_this.art.push(_this.owo);
		_this.art.push(_this.warframe);
		_this.art.push(_this.skyrim);
		_this.art.push(_this.daft_logo);
		_this.art.push(_this.assorted_art_1);

		_this.wrongTiles = [];

		// set up info widgets

        _this.setupShouldRefreshToggle();
		_this.setupShouldDrawToggle();
		_this.setupBadTileToggle();
		_this.setupBorderToggle();
		_this.setupLastColorPixel();
		_this.setWrongTileCount();
		_this.setupVersionBadge();

		r.placeModule("test", function(e) { //Runs the functions that draw the outline boxes and show bad squares.
			_this.api = e("api");
			_this.canvasse = e("canvasse");
			_this.client = e("client");
			_this.timer = e("timer");

			_this.canvasse.drawBufferToDisplay =  function() { //ASee above.
	            var e = new ImageData(_this.canvasse.readBuffer, _this.canvasse.width, _this.canvasse.height);
	            _this.canvasse.ctx.putImageData(e, 0, 0);

	            if(!!_this.setting_border_toggle) {

		            for (artPiece in _this.art) {
						var piece = _this.art[artPiece];
						_this.drawBorder(piece.xBase,piece.yBase,piece.width,piece.height,"blue");
					}

					_this.drawBorder(_this.xBase,_this.yBase,_this.width,_this.height,"purple");
				}

				if(!!_this.setting_bad_tile_toggle) {

		            for (var i = 0;i < _this.wrongTiles.length; i++) {
		            	var tile = _this.wrongTiles[i];

						// var my_gradient = _this.canvasse.ctx.createLinearGradient(0, 0, 170, 0);
						// my_gradient.addColorStop(0, "red");
						// my_gradient.addColorStop(1, "white");
						// _this.canvasse.ctx.fillStyle = my_gradient;

						//this.canvasse.ctx.fillStyle = this.client.getPaletteColor(tile[3]);
						_this.canvasse.ctx.fillStyle = 'red';

						_this.canvasse.ctx.fillRect(tile[0], tile[1], 1, 1);
		            }

	        	}


	            _this.canvasse.isBufferDirty = !1;
	        }
		});

		window.setTimeout(function(){_this.drawOne()}, 3 * 1000);
		window.setInterval(function(){_this.getWrongTiles()}, 10 * 1000);
		_this.getWrongTiles();
	},

    setupShouldRefreshToggle: function() { //UI Element
        _this = this;
        var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
        var node = document.createElement("div");

        node.classList.add("place-activity-count");

        node.style.transform = "translate(-10px,-200px)";

        node.innerHTML = "<label><input type='checkbox' name='setting_should_auto_refresh'  id='setting_should_auto_refresh' /> Should refresh after 30 mins (keep script fresh)</label>";

        toolbar.appendChild(node);

        var default_state = true;
        _this.setting_should_auto_refresh = default_state;

        var timeoutID = null;

        function runRefresh() {
            if(_this.setting_should_auto_refresh) {

                timeoutID = setTimeout(function(){
                    window.location.reload(false);
                //  30 mins == 1800 seconds
                }, 1800 * 1000);

            } else {
                window.clearTimeout(timeoutID);
                timeoutID = null;
            }
        }

        var button = document.getElementById("setting_should_auto_refresh");
        button.addEventListener("change", function() {
            _this.setting_should_auto_refresh = !_this.setting_should_auto_refresh;

            runRefresh();
        });

        runRefresh();

        button.checked = default_state;
    },

	setupShouldDrawToggle: function() { //UI Element
		_this = this;
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-175px)";

		node.innerHTML = "<label><input type='checkbox' name='setting_should_draw_toggle'  id='setting_should_draw_toggle' /> Should Draw</label>";

		toolbar.appendChild(node);

        var default_state = true;
		_this.setting_should_draw_toggle = default_state;

		var button = document.getElementById("setting_should_draw_toggle");
		button.addEventListener("change", function() {
            _this.setting_should_draw_toggle = !_this.setting_should_draw_toggle;
        })

        button.checked = default_state;
	},

	setupBadTileToggle: function() { //UI Element
		_this = this;
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-150px)";

		node.innerHTML = "<label><input type='checkbox' name='setting_bad_tile_toggle'  id='setting_bad_tile_toggle' /> Show Bad Tiles</label>";

		toolbar.appendChild(node);

        var default_state = true;
		_this.setting_bad_tile_toggle = default_state;

		var button = document.getElementById("setting_bad_tile_toggle");
		button.addEventListener("change", function() {
            _this.setting_bad_tile_toggle = !_this.setting_bad_tile_toggle;
            _this.canvasse.drawBufferToDisplay();
        })

        button.checked = default_state;
	},

	setupBorderToggle: function() { //UI Element
		_this = this;
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-125px)";

		node.innerHTML = "<label><input type='checkbox' name='setting_border_toggle' id='setting_border_toggle' /> Show border</label>";

		toolbar.appendChild(node);

		var default_state = true;
		_this.setting_border_toggle = default_state;

		var button = document.getElementById("setting_border_toggle");
		button.addEventListener("change", function() {
            _this.setting_border_toggle = !_this.setting_border_toggle;
            _this.canvasse.drawBufferToDisplay();
        })

        button.checked = default_state;
	},

	setupLastColorPixel: function() { //UI Element
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");
		node.id = 'last-color-pixel';

		node.style.transform = "translate(-10px,-100px)";

		var x = 42;
		var y = 42;
		var targetColor = 5;
		node.innerHTML = "Last tile drawn: NONE";

		toolbar.appendChild(node);
	},

	setWrongTileCount: function() { //UI Element
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");
		node.id = 'wrongTilesNode';

		node.style.transform = "translate(-10px,-75px)";

		node.innerHTML = "0";

		toolbar.appendChild(node);
	},

	setupVersionBadge: function() { //UI Element
		_this = this;
		var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
		var node = document.createElement("div");

		node.classList.add("place-activity-count");

		node.style.transform = "translate(-10px,-50px)";

		node.innerHTML = 'Version: ' + _this.version;

		toolbar.appendChild(node);

	},

	setLastColorPixel: function(x, y, targetColor) {
		_this = this;
		var node = document.getElementById("last-color-pixel");

		node.innerHTML = "Last tile drawn: " + _this.get_color_name(targetColor) + " at (" + x + "," + y + ")";

	}

}

//Everything is defined now. Hooray!

placeGreen.init(); //Run one of those suckers. It's a great idea.
