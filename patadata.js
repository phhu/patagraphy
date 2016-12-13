var partSettings = {
	"leader": {
		"left": 	{"colour": "#0000cc", "height":150, "headingOffset":-90, "label":"Ld L" },
		"right": 	{"colour": "steelblue", 		"height":120, "headingOffset":90, "label":"Ld R" },
		"chest": 	{"colour": "lightblue", 	"height":90, "headingOffset":0, "label":"Ld Ch" }
	},
	"follower": {
		"left": 	{"colour": "#cc0000", "height":0, "headingOffset":90   , "label":"Fl L" },
		"right": 	{"colour": "orange", "height":30, "headingOffset":-90   , "label":"Fl R" },
		"chest": 	{"colour": "gold", "height":60, "headingOffset":180   , "label":"Fl Ch"}				
	}
};

var rPlots = [
	{"role": "leader", "location":"left",	"tx":100, 	"ty":125	,"stroke":partSettings.leader.left.colour},
	{"role": "leader", "location":"chest",	"tx":225, 	"ty":125  ,"stroke":partSettings.leader.chest.colour},
	{"role": "leader", "location":"right",	"tx":350, 	"ty":125  ,"stroke":partSettings.leader.right.colour},
	{"role": "follower", "location":"left",	"tx":100, 	"ty":250,"stroke":partSettings.follower.left.colour},
	{"role": "follower", "location":"chest","tx":225,	"ty":250,"stroke":partSettings.follower.chest.colour},
	{"role": "follower", "location":"right","tx":350,	"ty":250,"stroke":partSettings.follower.right.colour}
];


// FOR RIGHT SHIFT INCREASE OFFSET


var sequences = {
	'PS_poema': {
		'name':'PS_poema',
		'session':'PS',
		'scores':[
			{'id':'poema','starttime':parseTimestamp("2014-12-21 20:09:00.200")}
		],
		'videos':[
			{'id':'PS_poema_GP', 'src':getYouTubeURL("Lg9NUmrR6pc"), starttime:parseTimestamp("2014-12-21 20:09:00.300")},
			{'id':'PS_poema', 'src':getYouTubeURL("LJOZksnQW2I"), starttime:parseTimestamp("2014-12-21 20:09:00.300")}
		],
		'starttime':parseTimestamp("2014-12-21 20:08:59.000"),    //"2014-12-21 20:09:07.231"
		'endtime':parseTimestamp("2014-12-21 20:12:20.000"),		//"2014-12-21 20:12:17.757"
		//'width':'1000',
		'x':'',
		},
	'PS_yumba': {
		'name':'PS_yumba',
		'session':'PS',
		'scores':[
			{'id':'yumba','starttime':parseTimestamp("2014-12-21 20:12:21.000")}   //7:21.5   end 10:05
		],
		'videos':[
			{'id':'PS yumba GP', 'src':getYouTubeURL("eHbjZmwu0Qk"), starttime:parseTimestamp("2014-12-21 20:12:23.800")},
			{'id':'PS yumba', 'src':getYouTubeURL("dr9VsVMtqeE"), starttime:parseTimestamp("2014-12-21 20:12:23.800")}
		],
		'starttime':parseTimestamp("2014-12-21 20:12:22.000"),
		'endtime':parseTimestamp("2014-12-21 20:15:10.684"),
		'x':''
		},
	'PS_movements': {
		'name':'PS_movements',
		'session':'PS',
		'scores':[
			{'id':'poema','starttime':parseTimestamp("2014-12-21 20:16:16.000")}
		],
		'videos':[
			{'id':'PS_movements_GP', 'src':getYouTubeURL("2Mub6NjJ7Tg"), starttime:parseTimestamp("2014-12-21 20:16:33.800")},
			{'id':'PS_movements', 'src':getYouTubeURL("kR0b_7ofEvc"), starttime:parseTimestamp("2014-12-21 20:16:33.800")}
		],
		'starttime':parseTimestamp("2014-12-21 20:16:30.000"),
		'endtime':parseTimestamp("2014-12-21 20:19:33.684"),
		'events':[
			{'id':'parallel_forwards',
			'starttime':parseTimestamp("2014-12-21 20:16:33:800"),		
			'endtime':parseTimestamp("2014-12-21 20:16:39:519"),
			'fill':'blue',
			'notes':'Forward parallel walk'
			},
			{'id':'parallel_forwards',
			'starttime':parseTimestamp("2014-12-21 20:16:41:258"),		
			'endtime':parseTimestamp("2014-12-21 20:16:46:198"),
			'fill':'blue',
			'notes':'Forward parallel walk'
			},
			{'id':'cross_forwards',
			'starttime':parseTimestamp("2014-12-21 20:16:50:835"),		
			'endtime':parseTimestamp("2014-12-21 20:16:55:314"),
			'fill':'blue',
			'notes':'Cross system forwards on outside'
			},
			{'id':'cross_backwards',
			'starttime':parseTimestamp("2014-12-21 20:16:55:963"),		
			'endtime':parseTimestamp("2014-12-21 20:17:01:054"),
			'fill':'blue',
			'notes':'Cross system backwards on outside'
			},
			{'id':'ochos_forwards',
			'starttime':parseTimestamp("2014-12-21 20:17:07:010"),		
			'endtime':parseTimestamp("2014-12-21 20:17:16:270"),
			'fill':'green',
			'notes':'Forwards ochos. Note the adornment on the follower\' left foot towards the end.'
			},
			{'id':'ochos_backwards',
			'starttime':parseTimestamp("2014-12-21 20:17:18:610"),		
			'endtime':parseTimestamp("2014-12-21 20:17:29:649"),
			'fill':'green',
			'notes':'Backwards ochos'
			},
			{'id':'voleo_backwards_high',
			'starttime':parseTimestamp("2014-12-21 20:17:29:649"),		
			'endtime':parseTimestamp("2014-12-21 20:17:34:447"),
			'fill':'red',
			'notes':'High Voleo backwards off back  ocho'
			},	
			{'id':'pause',
			'starttime':parseTimestamp("2014-12-21 20:17:35:822"),		
			'endtime':parseTimestamp("2014-12-21 20:17:38:299"),
			'fill':'black',
			'notes':'Pause'
			},
			{'id':'ochos_forwards',
			'starttime':parseTimestamp("2014-12-21 20:17:38:918"),		
			'endtime':parseTimestamp("2014-12-21 20:17:54:270"),
			'fill':'green',
			'notes':'Forwards ochos with sidestepping circular motion.'
			},
			{'id':'sidesteps_right',
			'starttime':parseTimestamp("2014-12-21 20:17:54:211"),
			'endtime':parseTimestamp("2014-12-21 20:18:06:930"),
			'fill':'blue',
			'notes':'Sidesteps to right'
			},
			{'id':'sidesteps_alternating',
			'starttime':parseTimestamp("2014-12-21 20:18:07:495"),
			'endtime':parseTimestamp("2014-12-21 20:18:12:483"),
			'fill':'steelblue',
			'notes':'Sidesteps alternating'
			},
			{'id':'ochos_backwards',
			'starttime':parseTimestamp("2014-12-21 20:18:14:489"),
			'endtime':parseTimestamp("2014-12-21 20:18:21:952"),
			'fill':'green',
			'notes':'Backwards ochos with rotation'
			},
			{'id':'ochos_forwards',
			'starttime':parseTimestamp("2014-12-21 20:18:22:209"),
			'endtime':parseTimestamp("2014-12-21 20:18:27:508"),
			'fill':'green',
			'notes':'Forwards ochos with parallel back ochos by him'
			},
			{'id':'giros',
			'starttime':parseTimestamp("2014-12-21 20:18:28:610"),
			'endtime':parseTimestamp("2014-12-21 20:18:36:390"),
			'fill':'green',
			'notes':'Messy giros'
			},
			{'id':'giros',
			'starttime':parseTimestamp("2014-12-21 20:18:38:976"),
			'endtime':parseTimestamp("2014-12-21 20:18:50:048"),
			'fill':'green',
			'notes':'Messy giros in tandem'
			},
			{'id':'barrada_passada',
			'starttime':parseTimestamp("2014-12-21 20:18:55:046"),
			'endtime':parseTimestamp("2014-12-21 20:19:00:376"),
			'fill':'orange',
			'notes':'Barrada and passada'
			},	
			{'id':'arrastre',
			'starttime':parseTimestamp("2014-12-21 20:19:02:530"),
			'endtime':parseTimestamp("2014-12-21 20:19:05:710"),
			'fill':'orange',
			'notes':'arrastre (foot drag)'
			},
			{'id':'barrada_passada',
			'starttime':parseTimestamp("2014-12-21 20:19:05:508"),
			'endtime':parseTimestamp("2014-12-21 20:19:08:429"),
			'fill':'orange',
			'notes':'Barrada and passada'
			},	
			{'id':'arrastre',
			'starttime':parseTimestamp("2014-12-21 20:19:08:951"),
			'endtime':parseTimestamp("2014-12-21 20:19:11:390"),
			'fill':'orange',
			'notes':'arrastre (foot drag)'
			},
			{'id':'passada',
			'starttime':parseTimestamp("2014-12-21 20:19:10:556"),
			'endtime':parseTimestamp("2014-12-21 20:19:14:015"),
			'fill':'orange',
			'heightOffset':30,
			'notes':'\n\npassada'
			},
			{'id':'walking giro',
			'starttime':parseTimestamp("2014-12-21 20:19:15:295"),
			'endtime':parseTimestamp("2014-12-21 20:19:18:965"),
			'fill':'green',
			'notes':'walking giro (turn)'
			},		
			{'id':'ochos_forwards',
			'starttime':parseTimestamp("2014-12-21 20:19:20:211"),
			'endtime':parseTimestamp("2014-12-21 20:19:26:491"),
			'fill':'green',
			'notes':'Forwards ochos with parallel back ochos by him'
			},
			
		]
		},
	/*'PS': {
		'name':'PS',
		'session':'PS',
		'scores':[
			{'id':'poema','starttime':parseTimestamp("2014-12-21 20:09:00.000")},
			{'id':'yumba','starttime':parseTimestamp("2014-12-21 20:12:23.000")}   //7:21.5   end 10:05
		],
		'starttime':parseTimestamp("2014-12-21 20:00:00.000"),
		'endtime':parseTimestamp("2014-12-21 20:30:10.684"),
		'x':''
		},
		*/
	'PVb_poema': {
		'name':'PVb_poema',
		'session':'PVb',
		'scores':[
			{'id':'poema','starttime':parseTimestamp("2014-12-21 21:20:48.000")}
		],
		'videos':[
			{'id':'PS poema GP', 'src':getYouTubeURL("FG928atJORc"), starttime:parseTimestamp("2014-12-21 21:20:47.400")},
			{'id':'PS poema', 'src':getYouTubeURL("L2_vbL_fmvs"), starttime:parseTimestamp("2014-12-21 21:20:48.000")}
		],
		'starttime':parseTimestamp("2014-12-21 21:20:50.000"),    //"2014-12-21 20:09:07.231"
		'endtime':parseTimestamp("2014-12-21 21:24:15.000"),		//"2014-12-21 20:12:17.757"
		//'width':'1000',
		'x':'',
		},
	'PVb_yumba': {
		'name':'PVb_yumba',
		'session':'PVb',
		'scores':[
			{'id':'yumba','starttime':parseTimestamp("2014-12-21 21:24:09.000")}   //7:21.5   end 10:05
		],
		'videos':[
			{'id':'PVb yumba GP', 'src':getYouTubeURL("hc8DcM0KIxY"), starttime:parseTimestamp("2014-12-21 21:24:11.700")},
			{'id':'PVb yumba', 'src':getYouTubeURL("kXbzj19cx20"), starttime:parseTimestamp("2014-12-21 21:24:11.900")}
		],
		'starttime':parseTimestamp("2014-12-21 21:24:06.000"),
		'endtime':parseTimestamp("2014-12-21 21:27:00.684"),
		'x':''
		},
/*	'PVb': {
		'name':'PVb',
		'session':'PVb',    //
		'scores':[
			{'id':'poema','starttime':parseTimestamp("2014-12-21 21:20:52.000")},
			{'id':'yumba','starttime':parseTimestamp("2014-12-21 21:24:09.000")}   //7:21.5   end 10:05
		],
		/*'videos':[
			{'id':'PVb_movements', 'src':getYouTubeURL("oPIF3Tudiss"), starttime:parseTimestamp("2014-12-21 21:24:11.700")},
			{'id':'PVb_movements_GP', 'src':getYouTubeURL("asz6M5iZOwE"), starttime:parseTimestamp("2014-12-21 21:24:11.900")}
		],*
		'starttime':parseTimestamp("2014-12-21 21:00:08.000"),
		'endtime':parseTimestamp("2014-12-21 21:35:00.684"),
		'x':''
		},*/
	'PVb_movements': {
		'name':'PVb_movements',
		'session':'PVb',
		'scores':[
			//{'id':'poema','starttime':parseTimestamp("2014-12-21 21:27:00.000")},
			//{'id':'yumba','starttime':parseTimestamp("2014-12-21 21:28:30.000")}   //7:21.5   end 10:05
		],
		'videos':[
			{'id':'PVb_movements_GP', 'src':getYouTubeURL("asz6M5iZOwE"), starttime:parseTimestamp("2014-12-21 21:27:05.500")},
			{'id':'PVb_movements', 'src':getYouTubeURL("oPIF3Tudiss"), starttime:parseTimestamp("2014-12-21 21:27:05.500")}
			
		],
		'events':[
			{'id':'parallel_forwards',
			'starttime':parseTimestamp("2014-12-21 21:27:05.000"),		
			'endtime':parseTimestamp("2014-12-21 21:27:09.700"),
			'fill':'blue',
			'notes':'Forward parallel walk'
			},
			{'id':'cross_forwards',
			'starttime':parseTimestamp("2014-12-21 21:27:10:382"),		
			'endtime':parseTimestamp("2014-12-21 21:27:16:336"),
			'fill':'blue',
			'notes':'Forward walk in cross system (on inside)'
			},
			{'id':'ochos_forwards',
			'starttime':parseTimestamp("2014-12-21 21:27:17:312"),		
			'endtime':parseTimestamp("2014-12-21 21:27:23:971"),
			'fill':'green',
			'notes':'Forwards ochos'
			},
			{'id':'ochos_backwards',
			'starttime':parseTimestamp("2014-12-21 21:27:24:089"),		
			'endtime':parseTimestamp("2014-12-21 21:27:31:608"),
			'fill':'green',
			'notes':'Backwards ochos'
			},
			{'id':'giro',
			'starttime':parseTimestamp("2014-12-21 21:27:36:611"),		
			'endtime':parseTimestamp("2014-12-21 21:27:40:688"),
			'fill':'green',
			'notes':'Giro around man'
			},			
			{'id':'giroCommonAxis',
			'starttime':parseTimestamp("2014-12-21 21:27:42:472"),		
			'endtime':parseTimestamp("2014-12-21 21:27:50:669"),
			'fill':'green',
			'notes':'Giro around common axis'
			},						
			{'id':'sacada in-line right leg',
			'starttime':parseTimestamp("2014-12-21 21:27:54:137"),		
			'endtime':parseTimestamp("2014-12-21 21:27:56:358"),
			'fill':'red',
			'notes':'Sacada in line'
			},												
			{'id':'low voleo backwards - left left - curved',
			'starttime':parseTimestamp("2014-12-21 21:28:03:520"),		
			'endtime':parseTimestamp("2014-12-21 21:28:05:545"),
			'fill':'red',
			'notes':'low voleo backwards with left leg, curved'
			},				
			
			
		],
		'starttime':parseTimestamp("2014-12-21 21:27:05.000"),
		'endtime':parseTimestamp("2014-12-21 21:28:12.684"),
		'x':'',
		'width':2500
		},
	'PVb_timing': {
		'name':'PVb_timing',
		'session':'PVb',
		'scores':[],
		'starttime':parseTimestamp("2014-12-21 21:18:30.000"),
		'endtime':parseTimestamp("2014-12-21 21:19:00.000"),
		'width':'2000',
		'x':'',
		
		}
	};

var sourcesCSV = [
	{"file":"dataPSV/2014-12-21_20-05-08_leader_left_PS.csv",    "session":"PS",     "offset": 2.9, "dancer": "Philip", "role": "leader", "location":"left"},
	{"file":"dataPSV/2014-12-21_20-05-09_leader_right_PS.csv",   "session":"PS",     "offset": -1, "dancer": "Philip", "role": "leader", "location":"right"},
	{"file":"dataPSV/2014-12-21_20-05-14_leader_chest_PS.csv",   "session":"PS",     "offset": -2.2, "dancer": "Philip", "role": "leader", "location":"chest"},
	{"file":"dataPSV/2014-12-21_20-05-00_follower_left_PS.csv",  "session":"PS",	"offset": 3.2, "dancer": "Sharon", "role": "follower", "location":"left"},
	{"file":"dataPSV/2014-12-21_20-05-01_follower_right_PS.csv", "session":"PS",	"offset": 1.1, "dancer": "Sharon", "role": "follower", "location":"right"},
	{"file":"dataPSV/2014-12-21_20-05-05_follower_chest_PS.csv", "session":"PS",	"offset": -0.5, "dancer": "Sharon", "role": "follower", "location":"chest"},
	
	{"file":"dataPSV/2014-12-21_20-31-04_leader_left_PVa.csv",   "session":"PVa",     "offset": 2.9, "dancer": "Philip", "role": "leader", "location":"left"},
	{"file":"dataPSV/2014-12-21_20-31-10_leader_right_PVa.csv",  "session":"PVa",     "offset": -1, "dancer": "Philip", "role": "leader", "location":"right"},
	{"file":"dataPSV/2014-12-21_20-31-15_leader_chest_PVa.csv",  "session":"PVa",     "offset": -2.2, "dancer": "Philip", "role": "leader", "location":"chest"},
	{"file":"dataPSV/2014-12-21_20-31-00_follower_left_PVa.csv", "session":"PVa",     "offset": 3.2, "dancer": "Vanessa", "role": "follower", "location":"left"},
	{"file":"dataPSV/2014-12-21_20-31-05_follower_right_PVa.csv","session":"PVa",     "offset": 1.1, "dancer": "Vanessa", "role": "follower", "location":"right"},
	{"file":"dataPSV/2014-12-21_20-31-15_follower_chest_PVa.csv","session":"PVa",     "offset": -0.5, "dancer": "Vanessa", "role": "follower", "location":"chest"},
	
	{"file":"dataPSV/2014-12-21_21-18-13_leader_left_PVb.csv",   "session":"PVb",     "offset": 2.9, "dancer": "Philip", "role": "leader", "location":"left"},
	{"file":"dataPSV/2014-12-21_21-18-16_leader_right_PVb.csv",  "session":"PVb",     "offset": -1, "dancer": "Philip", "role": "leader", "location":"right"},
	{"file":"dataPSV/2014-12-21_21-18-23_leader_chest_PVb.csv",  "session":"PVb",     "offset": -2.2, "dancer": "Philip", "role": "leader", "location":"chest"},
	{"file":"dataPSV/2014-12-21_21-18-14_follower_left_PVb.csv", "session":"PVb",     "offset": 3.2, "dancer": "Vanessa", "role": "follower", "location":"left"},
	{"file":"dataPSV/2014-12-21_21-18-15_follower_right_PVb.csv","session":"PVb",     "offset": 1.1, "dancer": "Vanessa", "role": "follower", "location":"right"},
	{"file":"dataPSV/2014-12-21_21-18-22_follower_chest_PVb.csv","session":"PVb",     "offset": -0.5, "dancer": "Vanessa", "role": "follower", "location":"chest"},
];
var scores = {
	"poema": {
		"name": 		"Poema",
		"id": 			"poema",
		"scoreprefix": 	"p",
		'starttime':parseTimestamp("2014-12-19 21:35:25.772"),
		'endtime':parseTimestamp("2014-12-19 21:38:46.342"),
		'length':parseTimestamp("2014-12-19 21:38:46.342") - parseTimestamp("2014-12-19 21:35:25.772"),
		'firstbar': 1,
		'lastbar' : 96,
		'baroffset': '00:00:02.03',
		'bartimings':{
			'p97':		'00:03:19:00',    //extra for width of last bar
			'p96':		'00:03:16.82',
			'p95':		'00:03:14.70',
			'p94':		'00:03:12.69',
			'p93':		'00:03:10.69',
			'p92':		'00:03:08.66',
			'p91':		'00:03:06.70',
			'p90':		'00:03:04.66',
			'p89':		'00:03:02.61',
			'p88':		'00:03:00.55',
			'p87':		'00:02:58.51',
			'p86':		'00:02:56.48',
			'p85':		'00:02:54.46',
			'p84':		'00:02:52.41',
			'p83':		'00:02:50.39',
			'p82':		'00:02:48.26',
			'p81':		'00:02:46.23',
			'p80':		'00:02:44.08',
			'p79':		'00:02:42.10',
			'p78':		'00:02:39.94',
			'p77':		'00:02:37.87',
			'p76':		'00:02:35.73',
			'p75':		'00:02:33.65',
			'p74':		'00:02:31.46',
			'p73':		'00:02:29.40',
			'p72':		'00:02:27.28',
			'p71':		'00:02:25.16',
			'p70':		'00:02:22.91',
			'p69':		'00:02:20.86',
			'p68':		'00:02:18.77',
			'p67':		'00:02:16.70',
			'p66':		'00:02:14.47',
			'p65':		'00:02:12.33',
			'p64':		'00:02:10.25',
			'p63':		'00:02:08.25',
			'p62':		'00:02:06.28',
			'p61':		'00:02:04.28',
			'p60':		'00:02:02.33',
			'p59':		'00:02:00.34',
			'p58':		'00:01:58.30',
			'p57':		'00:01:56.34',
			'p56':		'00:01:54.32',
			'p55':		'00:01:52.25',
			'p54':		'00:01:50.14',
			'p53':		'00:01:48.12',
			'p52':		'00:01:46.02',
			'p51':		'00:01:43.95',
			'p50':		'00:01:41.85',
			'p49':		'00:01:39.82',
			'p48':		'00:01:37.76',
			'p47':		'00:01:35.81',
			'p46':		'00:01:33.64',
			'p45':		'00:01:31.64',
			'p44':		'00:01:29.60',
			'p43':		'00:01:27.61',
			'p42':		'00:01:25.44',
			'p41':		'00:01:23.35',
			'p40':		'00:01:21.19',
			'p39':		'00:01:19.18',
			'p38':		'00:01:17.13',
			'p37':		'00:01:15.07',
			'p36':		'00:01:13.01',
			'p35':		'00:01:11.01',
			'p34':		'00:01:08.90',
			'p33':		'00:01:06.78',
			'p32':		'00:01:04.69',
			'p31':		'00:01:02.67',
			'p30':		'00:01:00.56',
			'p29':		'00:00:58.54',
			'p28':		'00:00:56.48',
			'p27':		'00:00:54.49',
			'p26':		'00:00:52.29',
			'p25':		'00:00:50.15',
			'p24':		'00:00:48.06',
			'p23':		'00:00:46.06',
			'p22':		'00:00:44.09',
			'p21':		'00:00:42.09',
			'p20':		'00:00:40.17',
			'p19':		'00:00:38.27',
			'p18':		'00:00:36.25',
			'p17':		'00:00:34.21',
			'p16':		'00:00:32.11',
			'p15':		'00:00:30.05',
			'p14':		'00:00:27.84',
			'p13':		'00:00:25.81',
			'p12':		'00:00:23.70',
			'p11':		'00:00:21.62',
			'p10':		'00:00:19.44',
			'p9':		'00:00:17.29',
			'p8':		'00:00:15.17',
			'p7':		'00:00:13.06',
			'p6':		'00:00:10.94',
			'p5':		'00:00:08.85',
			'p4':		'00:00:06.66',
			'p3':		'00:00:04.48',
			'p2':		'00:00:02.31',
			'p1':		'00:00:00.00'
			}
		},
	"yumba":{
		"name": "La Yumba",
		"id": "yumba",
		"scoreprefix": "y",
		'starttime':parseTimestamp("2014-12-19 21:39:05.971"),
		'endtime':parseTimestamp("2014-12-19 21:41:56.706"),
		'length':parseTimestamp("2014-12-19 21:41:56.706") - parseTimestamp("2014-12-19 21:39:05.971"),
		'firstbar': 0,
		'lastbar' : 82,
		'bartimings': {
		'y83':	'00:02:47.87',   //extra
		'y82':	'00:02:45.77',
		'y81':	'00:02:43.50',
		'y80':	'00:02:41.43',
		'y79':	'00:02:39.46',
		'y78':	'00:02:37.15',
		'y77':	'00:02:35.14',
		'y76':	'00:02:33.15',
		'y75':	'00:02:31.12',
		'y74':	'00:02:29.17',
		'y73':	'00:02:27.19',
		'y72':	'00:02:25.15',
		'y71':	'00:02:23.10',
		'y70':	'00:02:21.06',
		'y69':	'00:02:19.09',
		'y68':	'00:02:17.08',
		'y67':	'00:02:15.10',
		'y66':	'00:02:13.11',
		'y65':	'00:02:11.12',
		'y64':	'00:02:09.10',
		'y63':	'00:02:07.10',
		'y62':	'00:02:05.09',
		'y61':	'00:02:02.99',
		'y60':	'00:02:00.99',
		'y59':	'00:01:58.85',
		'y58':	'00:01:56.88',
		'y57':	'00:01:54.62',
		'y56':	'00:01:52.55',
		'y55':	'00:01:50.40',
		'y54':	'00:01:48.41',
		'y53':	'00:01:46.41',
		'y52':	'00:01:44.40',
		'y51':	'00:01:42.35',
		'y50':	'00:01:40.34',
		'y49':	'00:01:38.28',
		'y48':	'00:01:36.33',
		'y47':	'00:01:34.35',
		'y46':	'00:01:32.21',
		'y45':	'00:01:30.31',
		'y44':	'00:01:28.19',
		'y43':	'00:01:26.11',
		'y42':	'00:01:23.97',
		'y41':	'00:01:21.88',
		'y40':	'00:01:19.85',
		'y39':	'00:01:17.82',
		'y38':	'00:01:15.83',
		'y37':	'00:01:13.87',
		'y36':	'00:01:11.42',
		'y35':	'00:01:09.56',
		'y34':	'00:01:07.97',
		'y33':	'00:01:05.98',
		'y32':	'00:01:03.98',
		'y31':	'00:01:01.95',
		'y30':	'00:00:59.94',
		'y29':	'00:00:57.98',
		'y28':	'00:00:55.99',
		'y27':	'00:00:54.03',
		'y26':	'00:00:51.98',
		'y25':	'00:00:50.22',
		'y24':	'00:00:48.13',
		'y23':	'00:00:46.03',
		'y22':	'00:00:44.06',
		'y21':	'00:00:42.08',
		'y20':	'00:00:40.11',
		'y19':	'00:00:38.14',
		'y18':	'00:00:36.21',
		'y17':	'00:00:34.31',
		'y16':	'00:00:32.33',
		'y15':	'00:00:30.37',
		'y14':	'00:00:28.31',
		'y13':	'00:00:26.35',
		'y12':	'00:00:24.36',
		'y11':	'00:00:22.44',
		'y10':	'00:00:20.44',
		'y9':	'00:00:18.47',
		'y8':	'00:00:16.48',
		'y7':	'00:00:14.56',
		'y6':	'00:00:12.60',
		'y5':	'00:00:10.63',
		'y4':	'00:00:08.66',
		'y3':	'00:00:06.70',
		'y2':	'00:00:04.76',
		'y1':	'00:00:02.78',
		'y0':	'00:00:00.78',
		}
	}
};