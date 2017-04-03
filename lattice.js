//Start defining functions.

var placeGreen = { //a variable that holds functions. I >3 javascript. /s

	// semver convention
	version: "v1.28",

	//Options (for what?)
    //
    // invariants: xBase + width == 1000
	xBase: 851,
	yBase: 214,
	width: 149,
	height: 116,

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
		xBase: 977,
		yBase: 307,
		width: 24,
		height: 17,
		tiles: `
**000000000**000000000*
*0022222220000F33333F00
*0221111122006C33333C60
00211111112006A33333A60
02233333332206933333960
02355555553206833333860
02233333332206633333660
00211111112006533333560
*0221333122006633333660
*0022222220000666666600
**003313300**003313300*
**033323330**033323330*
**033333330**033333330*
**023333320**063333360*
**003333300**003333300*
***0330330****0330330**
***0000000****0000000**`.split("\n").slice(1)
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
		yBase: 216,
		width: 28,
		height: 16,
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
		yBase: 215,
		width: 41,
		height: 70,

        tiles: Array(69).fill("_".repeat(41)),

		tiles_old: `
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
		tiles: Array(52).fill("_".repeat(38))
	},

	purple_n: {
		xBase: 864,
		yBase: 289,
		width: 15,
		height: 11,
		tiles: `
*****3****3*3**
****3F3**3F3C3*
***3FFF3*3FF3C3
**3FFFFF33FFFC3
**3FFFFFF3FCC3*
*33FFFFFFCCFF3*
3C3FFF3CCFFFF3*
3C3FFCC3FFFFF3*
*3CCCF3*3FFF3**
**333F3**3F3***
*****3****3****`.split("\n").slice(1)
	},

	blue_spiral: {
		xBase: 851,
		yBase: 282,
		width: 16,
		height: 16,
		tiles: `
*******33*******
******3DD33*****
*****3DCDD33****
****3DCCCDD33***
***3DBCCDDDD33**
**3DBBCDBBBDD33*
*3DBBBDBBCBBDD33
3DBBBDDBBDDBBDD3
3DDBBDDDBBDDBD3*
*3DDBBDDCBDDD3**
**3DDBCDBBDD3***
***3DDCCBBD3****
****3DDDDD3*****
*****3DDD3******
******3D3*******
*******3********`.split("\n").slice(1)
	},

	character_1: {
		xBase: 852,
		yBase: 259,
		width: 14,
		height: 25,
		tiles: `
****3****3****
***32333323***
***32FFFF23***
***3FFFFFF3***
**3222FF2223**
**3252222523**
**3222552223**
***323BB323***
***35BBBB53***
**3555555553**
*365555555563*
*366555555663*
*366669966663*
*36666FF66663*
366666FF666663
355666FF666553
35555522555553
355555FF555553
35555522555553
35555522555553
35555522555553
*355552255553*
**3555225553**
**3223333223**
***33****33***`.split("\n").slice(1)
	},

	whale: {
		xBase: 853,
		yBase: 297,
		width: 20,
		height: 15,
		tiles: `
****3*3*************
***3B3B3************
**3B3B3B3***********
***33B33************
*33333333***********
*3BBBBBBB33*********
33BBBBBBBB3*********
3BCCCCCCCCCB3***3*3*
3BCCCCCCCCCC3**3B3B3
3BCC00CCCCCC3**3BBB3
3BCC30CCCCCC3**3BBB3
3BCCCCCCCCCCC3**3B3*
300000CCCCCCCC33BC3*
*30000CCB000CCCCC3**
********B***********`.split("\n").slice(1)
	},

	green_player: {
		xBase: 871,
		yBase: 285,
		width: 21,
		height: 26,
		tiles: `
********3A9AA9AAA3***
*******3A9A99A99993**
*******3AA99AA9A99A3*
******39999A99999A933
******3399AAA9A9AA99A
******39AA9A9A9AA9AA3
*******37A769A76AA99A
*******376666666A9AA3
*******376666677A99AA
*******3376663339AA93
********3367337793A3*
********3066306636A3*
********37666666763**
********37366666783**
*********373776633***
********3337666333***
****3333222376670033*
***388320006667000023
**3383200002610020003
*38837621002600020012
*38366673000000002001
*37666333200000003176
*36673DC3320022223766
3767533DC300000023366
36633555D9A9A9A9A3766
3362035333A9A9A9A7666`.split("\n").slice(1)
	},

	majora_mask: {
		xBase: 924,
		yBase: 295,
		width: 59,
		height: 58,
		tiles: `
                 _                       _                 
                ___                     ___                
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

	tesla: {
		xBase: 859,
		yBase: 197,
		width: 51,
		height: 19,
		tiles: Array(19).fill("_".repeat(51))
	},

	starbound: {
		xBase: 898,
		yBase: 357,
		width: 35,
		height: 21,
		tiles: `
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
C88CC8CCCCCCCCC8CCCCCCCCCCCCCCCCC8C
C86C888CC88C88C88CC888C8C8C88CCC88C
C68C686C868C86C868C868C8C8C868C868C
C88CC8CC888C8CC888C888C888C8C8C888C
C66CC6CC666C6CC666C666C666C6C6C666C
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
CCCCCCCCCCCCCC888C888CCCCCCCCCCCCCC
CCCCCCCCCCCCC8888C8888CCCCCCCCCCCCC
CCCCCCCCCCCCC8888C8888CCCCCCCCCCCCC
CCCCCCCCCCCCC8888C8888CCCCCCCCCCCCC
CCCCCCCCCCCCC8886C6888CCCCCCCCCCCCC
CCCCCC888888C888CCC888C888888CCCCCC
CCCCCC688888C888CCC888C888886CCCCCC
CCCCCCC68888C888CCC888C88886CCCCCCC
CCCCCCCC6666C888CCC888C6666CCCCCCCC
CCCCCCCCC888C888CCC888C888CCCCCCCCC
CCCCCCCCC688C886CCC688C886CCCCCCCCC
CCCCCCCCCC68C86CCCCC68C86CCCCCCCCCC
CCCCCCCCCCC6C6CCCCCCC6C6CCCCCCCCCCC
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`.split("\n").slice(1)
	},


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

	assorted_art_2: { //flag + dude
		xBase: 851,
		yBase: 311,
		width: 20,
		height: 42,
		tiles: Array(42).fill("_".repeat(20))
	}, //Probably art?

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
						} else {
							//console.log("Redrawing");
						}

                        window.setTimeout(function(){_this.drawOne()}, 1000);
					});
					// .catch(function(e) {
					//   console.error(e);
					//   window.setTimeout(function(){_this.drawOne()}, 5000);
					// });
				} else {
                    // nothing to draw, wait two seconds
                    console.log('nothing to draw, wait one second');
                    window.setTimeout(function(){_this.drawOne()}, 1000);
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
		//_this.art.push(_this.tlfower);
		_this.art.push(_this.owo);
		_this.art.push(_this.warframe);
		_this.art.push(_this.skyrim);
		_this.art.push(_this.daft_logo);
		//_this.art.push(_this.assorted_art_1);
		_this.art.push(_this.purple_n);
		_this.art.push(_this.blue_spiral);
		_this.art.push(_this.character_1);
		_this.art.push(_this.whale);
		_this.art.push(_this.green_player);
		_this.art.push(_this.assorted_art_2);
		_this.art.push(_this.tesla);
		_this.art.push(_this.starbound);

		_this.wrongTiles = [];

		// set up info widgets

        _this.setupShowExpectedColorToggle();
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

                        if(_this.setting_show_expected_color) {
                            switch(tile[2]) {
                                case 0:
                                    _this.canvasse.ctx.fillStyle = '#fff';
                                    break;
                                case 1:
                                    _this.canvasse.ctx.fillStyle = '#E4E4E4';
                                    break;
                                case 2:
                                    _this.canvasse.ctx.fillStyle = '#888888';
                                    break;
                                case 3:
                                    _this.canvasse.ctx.fillStyle = '#222';
                                    break;
                                case 4:
                                    _this.canvasse.ctx.fillStyle = '#FFA7D1';
                                    break;
                                case 5:
                                    _this.canvasse.ctx.fillStyle = '#E50000';
                                    break;
                                case 6:
                                    _this.canvasse.ctx.fillStyle = '#E59500';
                                    break;
                                case 7:
                                    _this.canvasse.ctx.fillStyle = '#A06A42';
                                    break;
                                case 8:
                                    _this.canvasse.ctx.fillStyle = '#E5D900';
                                    break;
                                case 9:
                                    _this.canvasse.ctx.fillStyle = '#94E044';
                                    break;
                                case 10: //A
                                    _this.canvasse.ctx.fillStyle = '#02BE01';
                                    break;
                                case 11: //B
                                    _this.canvasse.ctx.fillStyle = '#00D3DD';
                                    break;
                                case 12: //C
                                    _this.canvasse.ctx.fillStyle = '#0083C7';
                                    break;
                                case 13: //D
                                    _this.canvasse.ctx.fillStyle = '#0000EA';
                                    break;
                                case 14: //E
                                    _this.canvasse.ctx.fillStyle = '#CF6EE4';
                                    break;
                                case 15: //F
                                    _this.canvasse.ctx.fillStyle = '#820080';
                                    break;
                                default:
                                    _this.canvasse.ctx.fillStyle = 'red';
                            }

                        } else {
                            _this.canvasse.ctx.fillStyle = 'red';
                        }

						_this.canvasse.ctx.fillRect(tile[0], tile[1], 1, 1);
		            }

	        	}


	            _this.canvasse.isBufferDirty = !1;
	        }
		});

		window.setTimeout(function(){_this.drawOne()}, 3 * 1000);
        window.setInterval(function(){_this.drawOne()}, 30 * 1000);
		window.setInterval(function(){_this.getWrongTiles()}, 10 * 1000);
		_this.getWrongTiles();
	},

    setupShowExpectedColorToggle: function() { //UI Element
        _this = this;
        var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
        var node = document.createElement("div");

        node.classList.add("place-activity-count");

        node.style.transform = "translate(-10px,-250px)";

        node.innerHTML = "<label><input type='checkbox' name='setting_show_expected_color'  id='setting_show_expected_color' /> Show expected tile color<br/>(only when bad tiles enabled)</label>";

        toolbar.appendChild(node);

        var default_state = false;
        _this.setting_show_expected_color = default_state;

        var button = document.getElementById("setting_show_expected_color");
        button.addEventListener("change", function() {
            _this.setting_show_expected_color = !_this.setting_show_expected_color;
        });

        button.checked = default_state;
    },

    setupShouldRefreshToggle: function() { //UI Element
        _this = this;
        var toolbar = document.getElementsByClassName('place-bottom-toolbar')[0];
        var node = document.createElement("div");

        node.classList.add("place-activity-count");

        node.style.transform = "translate(-10px,-200px)";

        node.innerHTML = "<label><input type='checkbox' name='setting_should_auto_refresh'  id='setting_should_auto_refresh' /> Should refresh<br/>after 30 mins<br/>(keeps script fresh)</label>";

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
