			//support functions
			function parseTimestamp(ts){
				//2014-11-13 12:44:55.186
				return ts.replace(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})[:\.](\d{3})Z?$/, 
					function(match,year,month,day,hour,minute,second,ms){
						return parseFloat((parseInt(hour) * 60 * 60) + (parseInt(minute) * 60) + parseInt(second) + (parseInt(ms)/1000));
					}
				);
			}
			function parseTime(ts){
				//2014-11-13 12:44:55.186
				return ts.replace(/^(\d{2}):(\d{2}):(\d{2})[:\.](\d{2,3})$/, 
					function(match,hour,minute,second,ms){
						return parseFloat((parseInt(hour) * 60 * 60) + (parseInt(minute) * 60) + parseInt(second) + (parseInt(ms)/1000));
					}
				);
			}
			function isNumber(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}
			function getYouTubeURL(videoCode){
				return "https://www.youtube.com/embed/" + videoCode + "?enablejsapi=1";
			}
			
			function toggle_visibility(id) {
			   var e = document.getElementById(id);
			   if(e.style.display == 'block')
				  e.style.display = 'none';
			   else
				  e.style.display = 'block';
			}
			
		    function toggle(id) {
				divs.forEach(function(div){
					document.getElementById(div).style.display='none';
						document.getElementById(div + '_menu').style.fontSize='10pt';
				});
				document.getElementById(id).style.display='block';
				document.getElementById(id + '_menu').style.fontSize='20pt';
			}	
			//motion functions
			function getAcc2(d){
				//return parseFloat(d.motionUserAccelerationZ)*4;
				if (d.motionUserAccelerationX != undefined){
					return Math.abs(parseFloat(d.motionUserAccelerationX)) + 
						Math.abs(parseFloat(d.motionUserAccelerationY)) + 
						Math.abs(parseFloat(d.motionUserAccelerationZ)) +
						0
					;
				} else{
					return Math.abs(parseFloat(d.accelerationX)) + 
						Math.abs(parseFloat(d.accelerationY)) -1 + 
						Math.abs(parseFloat(d.accelerationZ)) +
						0
					;				
				}
			}

			//motion functions
			function getAccXY(d){
				//return parseFloat(d.motionUserAccelerationZ)*4;
				if (d.motionUserAccelerationX != undefined){
					return Math.abs(parseFloat(d.motionUserAccelerationX)) + 
						Math.abs(parseFloat(d.motionUserAccelerationY)) + 
						//Math.abs(parseFloat(d.motionUserAccelerationZ)) +
						0
					;
				} else{
					return Math.abs(parseFloat(d.accelerationX)) + 
						Math.abs(parseFloat(d.accelerationY)) + 
						//Math.abs(parseFloat(d.accelerationZ)) +
						0
					;				
				}
			}			
			
			function getAcc(d){
				//return parseFloat(d.motionUserAccelerationZ)*4;
				return Math.abs(parseFloat(d.accelerationX)) + 
					//Math.abs(parseFloat(d.accelerationY) - 1) + 
					Math.abs(parseFloat(d.accelerationZ)) +
					0
				;
			}			
			function getMot(d){
				return Math.abs(parseFloat(d.motionRotationRateX)) + 
					Math.abs(parseFloat(d.motionRotationRateY)) + 
					Math.abs(parseFloat(d.motionRotationRateZ)) +
					0
				;
			}	
			function getRot(d){
				return (parseFloat(d.motionYaw)/1);
			}