const button = document.getElementById('button');

        //shufflerl...
		var team = ["Bimbel","PAZEROS","AFeNGER Bot","Fenrir","MRT BAD BOYS",".ZIP","Ekoke",
					"Kokubilli","Kindly tigers","SUPPORT SYSTEAM","MRT WhiteWolf","TISAVE JUNIOR U-1",
					"H8","PBB","ESC_B0T","MRT - Al Mulk","MRT-Qada","Capture","Armory","Semar","MEN",
					"Syndicate","Hamba Tuhan","Aleph Null","ancor","Ace Slapper","VnC Electronic","Sad Frog",
					"I-RO","Mekatronika 6","Basketball Field","Morning Stars","deadshoot","Veshi",
					"HexaPrime","IBANEZ","int a = 3","Gokil","BOOM","Paradigma","Double RF","Smekza bot",
					"Elfath_Unknown","Angkasa Robotic Club","Micro Avengers","Micro Al-Fath","X CREATIVE",
					"TISAVE X","SIERA X","MOTIONS X","HERO X","X GODAM","Tisave Corona-N-Cov","MRC Assidqi",
					"MRC Master","MRC Al-Hadid"];

		var text = "";

		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

    		// Pick a remaining element...
    			var randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

    		// And swap it with the current element.
				var temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
				}
			return array;
			}

			function shuffler() {
			shuffle(team);
			document.getElementById("p1.1").innerHTML = team[0];
			document.getElementById("p1.2").innerHTML = team[1];
			document.getElementById("p1.3").innerHTML = team[2];
			document.getElementById("p1.4").innerHTML = team[3];
			document.getElementById("p1.5").innerHTML = team[4];
			document.getElementById("p1.6").innerHTML = team[5];
			document.getElementById("p1.7").innerHTML = team[6];
			document.getElementById("p1.8").innerHTML = team[7];
			document.getElementById("p1.9").innerHTML = team[8];
			document.getElementById("p1.10").innerHTML = team[9];
			document.getElementById("p1.11").innerHTML = team[10];
			document.getElementById("p1.12").innerHTML = team[11];
			document.getElementById("p1.13").innerHTML = team[12];
			document.getElementById("p1.14").innerHTML = team[13];
			document.getElementById("p1.15").innerHTML = team[14];
			document.getElementById("p1.16").innerHTML = team[15];
			document.getElementById("p1.17").innerHTML = team[16];
			document.getElementById("p1.18").innerHTML = team[17];
			document.getElementById("p1.19").innerHTML = team[18];
			document.getElementById("p1.20").innerHTML = team[19];
			document.getElementById("p1.21").innerHTML = team[20];
			document.getElementById("p1.22").innerHTML = team[21];
			document.getElementById("p1.23").innerHTML = team[22];
			document.getElementById("p1.24").innerHTML = team[23];

			document.getElementById("p2.13").innerHTML = team[24];
			document.getElementById("p2.14").innerHTML = team[25];
			document.getElementById("p2.15").innerHTML = team[26];
			document.getElementById("p2.16").innerHTML = team[27];


			document.getElementById("pb1.1").innerHTML = team[28];
			document.getElementById("pb1.2").innerHTML = team[29];
			document.getElementById("pb1.3").innerHTML = team[30];
			document.getElementById("pb1.4").innerHTML = team[31];
			document.getElementById("pb1.5").innerHTML = team[32];
			document.getElementById("pb1.6").innerHTML = team[33];
			document.getElementById("pb1.7").innerHTML = team[34];
			document.getElementById("pb1.8").innerHTML = team[35];
			document.getElementById("pb1.9").innerHTML = team[36];
			document.getElementById("pb1.10").innerHTML = team[37];
			document.getElementById("pb1.11").innerHTML = team[38];
			document.getElementById("pb1.12").innerHTML = team[39];
			document.getElementById("pb1.13").innerHTML = team[40];
			document.getElementById("pb1.14").innerHTML = team[41];
			document.getElementById("pb1.15").innerHTML = team[42];
			document.getElementById("pb1.16").innerHTML = team[43];
			document.getElementById("pb1.17").innerHTML = team[44];
			document.getElementById("pb1.18").innerHTML = team[45];
			document.getElementById("pb1.19").innerHTML = team[46];
			document.getElementById("pb1.20").innerHTML = team[47];
			document.getElementById("pb1.21").innerHTML = team[48];
			document.getElementById("pb1.22").innerHTML = team[49];
			document.getElementById("pb1.23").innerHTML = team[50];
			document.getElementById("pb1.24").innerHTML = team[51];

			document.getElementById("pb2.13").innerHTML = team[52];
			document.getElementById("pb2.14").innerHTML = team[53];
			document.getElementById("pb2.15").innerHTML = team[54];
			document.getElementById("pb2.16").innerHTML = team[55];
			}

			var ronde_2 = false;
			var ronde_3 = false;
			var ronde_4 = false;
			var sf = false;


			document.getElementById("ronde-1").onclick = function(){
				ronde_2=false;
				ronde_3=false;
				ronde_4=false;
				sf = false;
				alert("ronde 1 dimulai")
			}
			document.getElementById("ronde-2").onclick = function(){
				ronde_2 = true;
				alert("ronde 2 dimulai")
				
			}
			document.getElementById("ronde-3").onclick = function(){
				ronde_3 = true;
				alert("ronde 3 dimulai")

			}
			document.getElementById("ronde-4").onclick = function(){
				ronde_4 = true;
				alert("ronde 4 dimulai")

			}
			document.getElementById("juara").onclick = function(){
				sf = true;
				alert("Semifinal dimulai")

			}
			document.getElementById("random").onclick = function(){
				if (ronde_2 == false && ronde_3 == false && ronde_4 == false && sf == false){
					shuffler();
				}
				else if (sf == true){
					var timsf = [psfa1.innerHTML,psfa2.innerHTML,psfb1.innerHTML,psfb2.innerHTML];
					shuffle(timsf);

					document.getElementById("psf1").innerHTML = timsf[0];
					document.getElementById("psf2").innerHTML = timsf[1];
					document.getElementById("psfb1").innerHTML = timsf[2];
					document.getElementById("psfb2").innerHTML = timsf[3];
									
				}
				else if (ronde_4 == true){
					var team_4 = [p41.innerHTML,p42.innerHTML,p43.innerHTML,p44.innerHTML,pb41.innerHTML,pb42.innerHTML,
						pb43.innerHTML,pb44.innerHTML];
					shuffle(team_4);

					document.getElementById("p4.1").innerHTML = team_4[0];
					document.getElementById("p4.2").innerHTML = team_4[1];
					document.getElementById("p4.3").innerHTML = team_4[2];
					document.getElementById("p4.4").innerHTML = team_4[3];
					
					document.getElementById("pb4.1").innerHTML = team_4[4];
					document.getElementById("pb4.2").innerHTML = team_4[5];
					document.getElementById("pb4.3").innerHTML = team_4[6];
					document.getElementById("pb4.4").innerHTML = team_4[7];					
				}
				else if (ronde_3 == true){
					var team_3 = [p31.innerHTML,p32.innerHTML,p33.innerHTML,p34.innerHTML,p35.innerHTML,
								p36.innerHTML,p37.innerHTML,p38.innerHTML,pb31.innerHTML,pb32.innerHTML,
								pb33.innerHTML,pb34.innerHTML,pb35.innerHTML,pb36.innerHTML,pb37.innerHTML,
								pb38.innerHTML];
					shuffle(team_3);

					document.getElementById("p3.1").innerHTML = team_3[0];
					document.getElementById("p3.2").innerHTML = team_3[1];
					document.getElementById("p3.3").innerHTML = team_3[2];
					document.getElementById("p3.4").innerHTML = team_3[3];
					document.getElementById("p3.5").innerHTML = team_3[4];
					document.getElementById("p3.6").innerHTML = team_3[5];
					document.getElementById("p3.7").innerHTML = team_3[6];
					document.getElementById("p3.8").innerHTML = team_3[7];

					document.getElementById("pb3.1").innerHTML = team_3[8];
					document.getElementById("pb3.2").innerHTML = team_3[9];
					document.getElementById("pb3.3").innerHTML = team_3[10];
					document.getElementById("pb3.4").innerHTML = team_3[11];
					document.getElementById("pb3.5").innerHTML = team_3[12];
					document.getElementById("pb3.6").innerHTML = team_3[13];
					document.getElementById("pb3.7").innerHTML = team_3[14];
					document.getElementById("pb3.8").innerHTML = team_3[15];
				}
				else if (ronde_2 == true){
					var team_2 = [p21.innerHTML,p22.innerHTML,p23.innerHTML,p24.innerHTML,
						p25.innerHTML,p26.innerHTML,p27.innerHTML,p28.innerHTML,p29.innerHTML,p210.innerHTML,
						p211.innerHTML,p212.innerHTML,p213.innerHTML,p214.innerHTML,p215.innerHTML,p216.innerHTML,
								pb21.innerHTML,pb22.innerHTML,pb23.innerHTML,
								pb24.innerHTML,pb25.innerHTML,pb26.innerHTML,pb27.innerHTML,
								pb28.innerHTML,pb29.innerHTML,pb210.innerHTML,pb211.innerHTML,pb212.innerHTML,
								pb213.innerHTML,pb214.innerHTML,pb215.innerHTML,pb216.innerHTML];
					
								shuffle(team_2);
								

								document.getElementById("p2.1").innerHTML = team_2[0];
								document.getElementById("p2.2").innerHTML = team_2[1];
								document.getElementById("p2.3").innerHTML = team_2[2];
								document.getElementById("p2.4").innerHTML = team_2[3];
								document.getElementById("p2.5").innerHTML = team_2[4];
								document.getElementById("p2.6").innerHTML = team_2[5];
								document.getElementById("p2.7").innerHTML = team_2[6];
								document.getElementById("p2.8").innerHTML = team_2[7];
								document.getElementById("p2.9").innerHTML = team_2[8];
								document.getElementById("p2.10").innerHTML = team_2[9];
								document.getElementById("p2.11").innerHTML = team_2[10];
								document.getElementById("p2.12").innerHTML = team_2[11];
								document.getElementById("p2.13").innerHTML = team_2[12];
								document.getElementById("p2.14").innerHTML = team_2[13];
								document.getElementById("p2.15").innerHTML = team_2[14];
								document.getElementById("p2.16").innerHTML = team_2[15];

								document.getElementById("pb2.1").innerHTML = team_2[16];
								document.getElementById("pb2.2").innerHTML = team_2[17];
								document.getElementById("pb2.3").innerHTML = team_2[18];
								document.getElementById("pb2.4").innerHTML = team_2[19];
								document.getElementById("pb2.5").innerHTML = team_2[20];
								document.getElementById("pb2.6").innerHTML = team_2[21];
								document.getElementById("pb2.7").innerHTML = team_2[22];
								document.getElementById("pb2.8").innerHTML = team_2[23];
								document.getElementById("pb2.9").innerHTML = team_2[24];
								document.getElementById("pb2.10").innerHTML = team_2[25];
								document.getElementById("pb2.11").innerHTML = team_2[26];
								document.getElementById("pb2.12").innerHTML = team_2[27];
								document.getElementById("pb2.13").innerHTML = team_2[28];
								document.getElementById("pb2.14").innerHTML = team_2[29];
								document.getElementById("pb2.15").innerHTML = team_2[30];
								document.getElementById("pb2.16").innerHTML = team_2[31];
				}
				
			}

			// document.getElementById("random").addEventListener("click", shuffler);
			window.addEventListener("keypress", checkKeyPressed, false);

			function checkKeyPressed(e) {
			if (e.charCode == "56") {
				document.getElementById("random").addEventListener("click", shuffler);
				}
			}

      //bracket 
			const p11 = document.getElementById('p1.1');
			const p12 = document.getElementById('p1.2');
			const p13 = document.getElementById('p1.3');
			const p14 = document.getElementById('p1.4');
			const p15 = document.getElementById('p1.5');
			const p16 = document.getElementById('p1.6');
			const p17 = document.getElementById('p1.7');
			const p18 = document.getElementById('p1.8');
			const p19 = document.getElementById('p1.9');
			const p110 = document.getElementById('p1.10');
			const p111 = document.getElementById('p1.11');
			const p112 = document.getElementById('p1.12');
			const p113 = document.getElementById('p1.13');
			const p114 = document.getElementById('p1.14');
			const p115 = document.getElementById('p1.15');
			const p116 = document.getElementById('p1.16');
			const p117 = document.getElementById('p1.17');
			const p118 = document.getElementById('p1.18');
			const p119 = document.getElementById('p1.19');
			const p120 = document.getElementById('p1.20');
			const p121 = document.getElementById('p1.21');
			const p122 = document.getElementById('p1.22');
			const p123 = document.getElementById('p1.23');
			const p124 = document.getElementById('p1.24');


			const pb11 = document.getElementById('pb1.1');
			const pb12 = document.getElementById('pb1.2');
			const pb13 = document.getElementById('pb1.3');
			const pb14 = document.getElementById('pb1.4');
			const pb15 = document.getElementById('pb1.5');
			const pb16 = document.getElementById('pb1.6');
			const pb17 = document.getElementById('pb1.7');
			const pb18 = document.getElementById('pb1.8');
			const pb19 = document.getElementById('pb1.9');
			const pb110 = document.getElementById('pb1.10');
			const pb111 = document.getElementById('pb1.11');
			const pb112 = document.getElementById('pb1.12');
			const pb113 = document.getElementById('pb1.13');
			const pb114 = document.getElementById('pb1.14');
			const pb115 = document.getElementById('pb1.15');
			const pb116 = document.getElementById('pb1.16');
			const pb117 = document.getElementById('pb1.17');
			const pb118 = document.getElementById('pb1.18');
			const pb119 = document.getElementById('pb1.19');
			const pb120 = document.getElementById('pb1.20');
			const pb121 = document.getElementById('pb1.21');
			const pb122 = document.getElementById('pb1.22');
			const pb123 = document.getElementById('pb1.23');
			const pb124 = document.getElementById('pb1.24');


			const p21 = document.getElementById('p2.1');
			const p22 = document.getElementById('p2.2');
			const p23 = document.getElementById('p2.3');
			const p24 = document.getElementById('p2.4');
			const p25 = document.getElementById('p2.5');
			const p26 = document.getElementById('p2.6');
			const p27 = document.getElementById('p2.7');
			const p28 = document.getElementById('p2.8');
			const p29 = document.getElementById('p2.9');
			const p210 = document.getElementById('p2.10');
			const p211 = document.getElementById('p2.11');
			const p212 = document.getElementById('p2.12');
			const p213 = document.getElementById('p2.13');
			const p214 = document.getElementById('p2.14');
			const p215 = document.getElementById('p2.15');
			const p216 = document.getElementById('p2.16');

			const pb21 = document.getElementById('pb2.1');
			const pb22 = document.getElementById('pb2.2');
			const pb23 = document.getElementById('pb2.3');
			const pb24 = document.getElementById('pb2.4');
			const pb25 = document.getElementById('pb2.5');
			const pb26 = document.getElementById('pb2.6');
			const pb27 = document.getElementById('pb2.7');
			const pb28 = document.getElementById('pb2.8');
			const pb29 = document.getElementById('pb2.9');
			const pb210 = document.getElementById('pb2.10');
			const pb211 = document.getElementById('pb2.11');
			const pb212 = document.getElementById('pb2.12');
			const pb213 = document.getElementById('pb2.13');
			const pb214 = document.getElementById('pb2.14');
			const pb215 = document.getElementById('pb2.15');
			const pb216 = document.getElementById('pb2.16');

			const p31 = document.getElementById('p3.1');
			const p32 = document.getElementById('p3.2');
			const p33 = document.getElementById('p3.3');
			const p34 = document.getElementById('p3.4');
			const p35 = document.getElementById('p3.5');
			const p36 = document.getElementById('p3.6');
			const p37 = document.getElementById('p3.7');
			const p38 = document.getElementById('p3.8');

			const pb31 = document.getElementById('pb3.1');
			const pb32 = document.getElementById('pb3.2');
			const pb33 = document.getElementById('pb3.3');
			const pb34 = document.getElementById('pb3.4');
			const pb35 = document.getElementById('pb3.5');
			const pb36 = document.getElementById('pb3.6');
			const pb37 = document.getElementById('pb3.7');
			const pb38 = document.getElementById('pb3.8');
			
			const p41 = document.getElementById('p4.1');
			const p42 = document.getElementById('p4.2');
			const p43 = document.getElementById('p4.3');
			const p44 = document.getElementById('p4.4');

			const pb41 = document.getElementById('pb4.1');
			const pb42 = document.getElementById('pb4.2');
			const pb43 = document.getElementById('pb4.3');
			const pb44 = document.getElementById('pb4.4');

			const psfa1 = document.getElementById('psf1');
			const psfa2 = document.getElementById('psf2');
			
      		const psfb1 = document.getElementById('psfb1');
      		const psfb2 = document.getElementById('psfb2');

			const pfa = document.getElementById('FinalA');
			const pfb = document.getElementById('FinalB');

			const pj3a = document.getElementById('Juara3A');
			const pj3b = document.getElementById('Juara3B')

			

     		//bracket group A round 1
				p11.onclick = function(){
					p11.style.backgroundColor = 'gold';
					p12.style.backgroundColor = 'white';
					p21.innerHTML = p11.innerHTML;}
				p12.onclick = function(){
					p12.style.backgroundColor = 'gold';
					p11.style.backgroundColor = 'white';
					p21.innerHTML = p12.innerHTML;}
				p13.onclick = function(){
					p13.style.backgroundColor = 'gold';
					p14.style.backgroundColor = 'white';
        			p22.innerHTML = p13.innerHTML;}
				p14.onclick = function(){
        			p14.style.backgroundColor = 'gold';
					p13.style.backgroundColor = 'white';
					p22.innerHTML = p14.innerHTML;}
				p15.onclick = function(){
        			p15.style.backgroundColor = 'gold';
					p16.style.backgroundColor = 'white';
					p23.innerHTML = p15.innerHTML;}
				p16.onclick = function(){
					p16.style.backgroundColor = 'gold';
					p15.style.backgroundColor = 'white';
					p23.innerHTML =  p16.innerHTML;}
				p17.onclick = function(){
        			p17.style.backgroundColor = 'gold';
					p18.style.backgroundColor = ' white';
					p24.innerHTML = p17.innerHTML;}
				p18.onclick = function(){
					p18.style.backgroundColor = 'gold';
					p17.style.backgroundColor = 'white';
        			p24.innerHTML = p18.innerHTML;}
				p19.onclick = function(){
        			p19.style.backgroundColor = 'gold';
					p110.style.backgroundColor = 'white';
					p25.innerHTML = p19.innerHTML;}
				p110.onclick = function(){
        			p110.style.backgroundColor = 'gold';
					p19.style.backgroundColor = 'white';
					p25.innerHTML = p110.innerHTML;}
				p111.onclick = function(){
        			p111.style.backgroundColor = 'gold';
					p112.style.backgroundColor = 'white';
					p26.innerHTML = p111.innerHTML;}
				p112.onclick = function(){
        			p112.style.backgroundColor = 'gold';
					p111.style.backgroundColor = 'white';
					p26.innerHTML =  p112.innerHTML;}
				p113.onclick = function(){
        			p113.style.backgroundColor = 'gold';
					p114.style.backgroundColor = 'white';
					p27.innerHTML = p113.innerHTML;}
				p114.onclick = function(){
			        p114.style.backgroundColor = 'gold';
					p113.style.backgroundColor = 'white';
					p27.innerHTML = p114.innerHTML;}
				p115.onclick = function(){
        			p115.style.backgroundColor = 'gold';
					p116.style.backgroundColor = 'white';
					p28.innerHTML = p115.innerHTML;}
				p116.onclick = function(){
			        p116.style.backgroundColor = 'gold';
					p115.style.backgroundColor = ' white';
					p28.innerHTML =  p116.innerHTML;}
				p117.onclick = function(){
					p117.style.backgroundColor = 'gold';
					p118.style.backgroundColor='white';
					p29.innerHTML = p117.innerHTML;
				}
				p118.onclick=function(){
					p117.style.backgroundColor='white';
					p118.style.backgroundColor='gold';
					p29.innerHTML=p118.innerHTML;
				}
				p119.onclick=function(){
					p119.style.backgroundColor='gold';
					p120.style.backgroundColor='white';
					p210.innerHTML=p119.innerHTML;
				}
				p120.onclick=function(){
					p119.style.backgroundColor='white';
					p120.style.backgroundColor='gold';
					p210.innerHTML=p120.innerHTML;
				}
				p121.onclick=function(){
					p121.style.backgroundColor='gold';
					p122.style.backgroundColor='white';
					p211.innerHTML=p121.innerHTML;
				}
				p122.onclick=function(){
					p121.style.backgroundColor='white';
					p122.style.backgroundColor='gold';
					p211.innerHTML=p122.innerHTML;
				}
				p123.onclick=function(){
					p123.style.backgroundColor='gold';
					p124.style.backgroundColor='white';
					p212.innerHTML=p123.innerHTML;
				}
				p124.onclick=function(){
					p123.style.backgroundColor='white';
					p124.style.backgroundColor='gold';
					p212.innerHTML=p124.innerHTML;
				}

				pb11.onclick = function(){
					pb11.style.backgroundColor = 'gold';
					pb12.style.backgroundColor = 'white';
					pb21.innerHTML = pb11.innerHTML;}
				pb12.onclick = function(){
					pb12.style.backgroundColor = 'gold';
					pb11.style.backgroundColor = 'white';
					pb21.innerHTML = pb12.innerHTML;}
				pb13.onclick = function(){
					pb13.style.backgroundColor = 'gold';
					pb14.style.backgroundColor = 'white';
        			pb22.innerHTML = pb13.innerHTML;}
				pb14.onclick = function(){
        			pb14.style.backgroundColor = 'gold';
					pb13.style.backgroundColor = 'white';
					pb22.innerHTML = pb14.innerHTML;}
				pb15.onclick = function(){
        			pb15.style.backgroundColor = 'gold';
					pb16.style.backgroundColor = 'white';
					pb23.innerHTML = pb15.innerHTML;}
				pb16.onclick = function(){
					pb16.style.backgroundColor = 'gold';
					pb15.style.backgroundColor = 'white';
					pb23.innerHTML =  pb16.innerHTML;}
				pb17.onclick = function(){
        			pb17.style.backgroundColor = 'gold';
					pb18.style.backgroundColor = ' white';
					pb24.innerHTML = pb17.innerHTML;}
				pb18.onclick = function(){
					pb18.style.backgroundColor = 'gold';
					pb17.style.backgroundColor = 'white';
        			pb24.innerHTML = pb18.innerHTML;}
				pb19.onclick = function(){
        			pb19.style.backgroundColor = 'gold';
					pb110.style.backgroundColor = 'white';
					pb25.innerHTML = pb19.innerHTML;}
				pb110.onclick = function(){
        			pb110.style.backgroundColor = 'gold';
					pb19.style.backgroundColor = 'white';
					pb25.innerHTML = pb110.innerHTML;}
				pb111.onclick = function(){
        			pb111.style.backgroundColor = 'gold';
					pb112.style.backgroundColor = 'white';
					pb26.innerHTML = pb111.innerHTML;}
				pb112.onclick = function(){
        			pb112.style.backgroundColor = 'gold';
					pb111.style.backgroundColor = 'white';
					pb26.innerHTML =  pb112.innerHTML;}
				pb113.onclick = function(){
        			pb113.style.backgroundColor = 'gold';
					pb114.style.backgroundColor = 'white';
					pb27.innerHTML = pb113.innerHTML;}
				pb114.onclick = function(){
			        pb114.style.backgroundColor = 'gold';
					pb113.style.backgroundColor = 'white';
					pb27.innerHTML = pb114.innerHTML;}
				pb115.onclick = function(){
        			pb115.style.backgroundColor = 'gold';
					pb116.style.backgroundColor = 'white';
					pb28.innerHTML = pb115.innerHTML;}
				pb116.onclick = function(){
			        pb116.style.backgroundColor = 'gold';
					pb115.style.backgroundColor = ' white';
					pb28.innerHTML =  pb116.innerHTML;}
				pb117.onclick = function(){
					pb117.style.backgroundColor = 'gold';
					pb118.style.backgroundColor='white';
					pb29.innerHTML = pb117.innerHTML;
				}
				pb118.onclick=function(){
					pb117.style.backgroundColor='white';
					pb118.style.backgroundColor='gold';
					pb29.innerHTML=pb118.innerHTML;
				}
				pb119.onclick=function(){
					pb119.style.backgroundColor='gold';
					pb120.style.backgroundColor='white';
					pb210.innerHTML=pb119.innerHTML;
				}
				pb120.onclick=function(){
					pb119.style.backgroundColor='white';
					pb120.style.backgroundColor='gold';
					pb210.innerHTML=pb120.innerHTML;
				}
				pb121.onclick=function(){
					pb121.style.backgroundColor='gold';
					pb122.style.backgroundColor='white';
					pb211.innerHTML=pb121.innerHTML;
				}
				pb122.onclick=function(){
					pb121.style.backgroundColor='white';
					pb122.style.backgroundColor='gold';
					pb211.innerHTML=pb122.innerHTML;
				}
				pb123.onclick=function(){
					pb123.style.backgroundColor='gold';
					pb124.style.backgroundColor='white';
					pb212.innerHTML=pb123.innerHTML;
				}
				pb124.onclick=function(){
					pb123.style.backgroundColor='white';
					pb124.style.backgroundColor='gold';
					pb212.innerHTML=pb124.innerHTML;
				}

				p21.onclick = function(){
        			p21.style.backgroundColor = 'gold';
					p22.style.backgroundColor = 'white';
					p31.innerHTML = p21.innerHTML;}
				p22.onclick = function(){
        			p22.style.backgroundColor = 'gold';
					p21.style.backgroundColor = 'white';
					p31.innerHTML = p22.innerHTML;}
				p23.onclick = function(){
        			p23.style.backgroundColor = 'gold';
					p24.style.backgroundColor = 'white';
					p32.innerHTML = p23.innerHTML;}
				p24.onclick = function(){
        			p24.style.backgroundColor = 'gold';
					p23.style.backgroundColor = 'white';
					p32.innerHTML = p24.innerHTML;}
				p25.onclick = function(){
        			p25.style.backgroundColor = 'gold';
					p26.style.backgroundColor = 'white';
					p33.innerHTML = p25.innerHTML;}
				p26.onclick = function(){
        			p26.style.backgroundColor = 'gold';
					p25.style.backgroundColor = 'white';
					p33.innerHTML = p26.innerHTML;}
				p27.onclick = function(){
        			p27.style.backgroundColor = 'gold';
					p28.style.backgroundColor = 'white';
					p34.innerHTML = p27.innerHTML;}
				p28.onclick = function(){
        			p28.style.backgroundColor = 'gold';
					p27.style.backgroundColor = 'white';
					p34.innerHTML = p28.innerHTML;}
				p29.onclick = function(){
					p29.style.backgroundColor = 'gold';
					p210.style.backgroundColor = 'white';
					p35.innerHTML = p29.innerHTML;}
				p210.onclick = function(){
        			p210.style.backgroundColor = 'gold';
					p29.style.backgroundColor = 'white';
					p35.innerHTML = p210.innerHTML;}
				p211.onclick = function(){
        			p211.style.backgroundColor = 'gold';
					p212.style.backgroundColor = 'white';
					p36.innerHTML = p211.innerHTML;}
				p212.onclick = function(){
        			p212.style.backgroundColor = 'gold';
					p211.style.backgroundColor = 'white';
					p36.innerHTML = p212.innerHTML;}
				p213.onclick = function(){
        			p213.style.backgroundColor = 'gold';
					p214.style.backgroundColor = 'white';
					p37.innerHTML = p213.innerHTML;}	
				p214.onclick = function(){
        			p214.style.backgroundColor = 'gold';
					p213.style.backgroundColor = 'white';
					p37.innerHTML = p214.innerHTML;}
				p215.onclick = function(){
        			p215.style.backgroundColor = 'gold';
					p216.style.backgroundColor = 'white';
					p38.innerHTML = p215.innerHTML;}
				p216.onclick = function(){
        			p216.style.backgroundColor = 'gold';
					p215.style.backgroundColor = 'white';
					p38.innerHTML = p216.innerHTML;}
				
				pb21.onclick = function(){
        			pb21.style.backgroundColor = 'gold';
					pb22.style.backgroundColor = 'white';
					pb31.innerHTML = pb21.innerHTML;}
				pb22.onclick = function(){
        			pb22.style.backgroundColor = 'gold';
					pb21.style.backgroundColor = 'white';
					pb31.innerHTML = pb22.innerHTML;}
				pb23.onclick = function(){
        			pb23.style.backgroundColor = 'gold';
					pb24.style.backgroundColor = 'white';
					pb32.innerHTML = pb23.innerHTML;}
				pb24.onclick = function(){
        			pb24.style.backgroundColor = 'gold';
					pb23.style.backgroundColor = 'white';
					pb32.innerHTML = pb24.innerHTML;}
				pb25.onclick = function(){
        			pb25.style.backgroundColor = 'gold';
					pb26.style.backgroundColor = 'white';
					pb33.innerHTML = pb25.innerHTML;}
				pb26.onclick = function(){
        			pb26.style.backgroundColor = 'gold';
					pb25.style.backgroundColor = 'white';
					pb33.innerHTML = pb26.innerHTML;}
				pb27.onclick = function(){
        			pb27.style.backgroundColor = 'gold';
					pb28.style.backgroundColor = 'white';
					pb34.innerHTML = pb27.innerHTML;}
				pb28.onclick = function(){
        			pb28.style.backgroundColor = 'gold';
					pb27.style.backgroundColor = 'white';
					pb34.innerHTML = pb28.innerHTML;}
				pb29.onclick = function(){
					pb29.style.backgroundColor = 'gold';
					pb210.style.backgroundColor = 'white';
					pb35.innerHTML = pb29.innerHTML;}
				pb210.onclick = function(){
        			pb210.style.backgroundColor = 'gold';
					pb29.style.backgroundColor = 'white';
					pb35.innerHTML = pb210.innerHTML;}
				pb211.onclick = function(){
        			pb211.style.backgroundColor = 'gold';
					pb212.style.backgroundColor = 'white';
					pb36.innerHTML = pb211.innerHTML;}
				pb212.onclick = function(){
        			pb212.style.backgroundColor = 'gold';
					pb211.style.backgroundColor = 'white';
					pb36.innerHTML = pb212.innerHTML;}
				pb213.onclick = function(){
        			pb213.style.backgroundColor = 'gold';
					pb214.style.backgroundColor = 'white';
					pb37.innerHTML = pb213.innerHTML;}	
				pb214.onclick = function(){
        			pb214.style.backgroundColor = 'gold';
					pb213.style.backgroundColor = 'white';
					pb37.innerHTML = pb214.innerHTML;}
				pb215.onclick = function(){
        			pb215.style.backgroundColor = 'gold';
					pb216.style.backgroundColor = 'white';
					pb38.innerHTML = pb215.innerHTML;}
				pb216.onclick = function(){
        			pb216.style.backgroundColor = 'gold';
					pb215.style.backgroundColor = 'white';
					pb38.innerHTML = pb215.innerHTML;}
				
				//ronde 3
				p31.onclick = function(){
        			p31.style.backgroundColor = 'gold';
					p32.style.backgroundColor = 'white';
					p41.innerHTML = p31.innerHTML;}
				p32.onclick = function(){
        			p32.style.backgroundColor = 'gold';
					p31.style.backgroundColor = 'white';
					p41.innerHTML = p32.innerHTML;}
				p33.onclick = function(){
        			p33.style.backgroundColor = 'gold';
					p34.style.backgroundColor = 'white';
					p42.innerHTML = p33.innerHTML;}
				p34.onclick = function(){
        			p34.style.backgroundColor = 'gold';
					p33.style.backgroundColor = 'white';
					p42.innerHTML = p34.innerHTML;}
				p35.onclick = function(){
        			p35.style.backgroundColor = 'gold';
					p36.style.backgroundColor = 'white';
					p43.innerHTML = p35.innerHTML;}
				p36.onclick = function(){
        			p36.style.backgroundColor = 'gold';
					p35.style.backgroundColor = 'white';
					p43.innerHTML = p36.innerHTML;}
				p37.onclick = function(){
        			p37.style.backgroundColor = 'gold';
					p38.style.backgroundColor = 'white';
					p44.innerHTML = p37.innerHTML;}
				p38.onclick = function(){
        			p38.style.backgroundColor = 'gold';
					p37.style.backgroundColor = 'white';
					p44.innerHTML = p38.innerHTML;}

				pb31.onclick = function(){
        			pb31.style.backgroundColor = 'gold';
					pb32.style.backgroundColor = 'white';
					pb41.innerHTML = pb31.innerHTML;}
				pb32.onclick = function(){
        			pb32.style.backgroundColor = 'gold';
					pb31.style.backgroundColor = 'white';
					pb41.innerHTML = pb32.innerHTML;}
				pb33.onclick = function(){
        			pb33.style.backgroundColor = 'gold';
					pb34.style.backgroundColor = 'white';
					pb42.innerHTML = pb33.innerHTML;}
				pb34.onclick = function(){
        			pb34.style.backgroundColor = 'gold';
					pb33.style.backgroundColor = 'white';
					pb42.innerHTML = pb34.innerHTML;}
				pb35.onclick = function(){
        			pb35.style.backgroundColor = 'gold';
					pb36.style.backgroundColor = 'white';
					pb43.innerHTML = pb35.innerHTML;}
				pb36.onclick = function(){
        			pb36.style.backgroundColor = 'gold';
					pb35.style.backgroundColor = 'white';
					pb43.innerHTML = pb36.innerHTML;}
				pb37.onclick = function(){
        			pb37.style.backgroundColor = 'gold';
					pb38.style.backgroundColor = 'white';
					pb44.innerHTML = pb37.innerHTML;}
				pb38.onclick = function(){
        			pb38.style.backgroundColor = 'gold';
					pb37.style.backgroundColor = 'white';
					pb44.innerHTML = pb38.innerHTML;}

				p41.onclick = function(){
					p41.style.backgroundColor = 'gold';
					p42.style.backgroundColor = 'white';
					psfa1.innerHTML = p41.innerHTML;}
				p42.onclick = function(){
					p42.style.backgroundColor = 'gold';
					p41.style.backgroundColor = 'white';
					psfa1.innerHTML = p42.innerHTML;}
				p43.onclick = function(){
					p43.style.backgroundColor = 'gold';
					p44.style.backgroundColor = 'white';
					psfa2.innerHTML = p43.innerHTML;}
				p44.onclick = function(){
					p44.style.backgroundColor = 'gold';
					p43.style.backgroundColor = 'white';
					psfa2.innerHTML = p44.innerHTML;}

				pb41.onclick = function(){
					pb41.style.backgroundColor = 'gold';
					pb42.style.backgroundColor = 'white';
					psfb1.innerHTML = pb41.innerHTML;}
				pb42.onclick = function(){
					pb42.style.backgroundColor = 'gold';
					pb41.style.backgroundColor = 'white';
					psfb1.innerHTML = pb42.innerHTML;}
				pb43.onclick = function(){
					pb43.style.backgroundColor = 'gold';
					pb44.style.backgroundColor = 'white';
					psfb2.innerHTML = pb43.innerHTML;}
				pb44.onclick = function(){
					pb44.style.backgroundColor = 'gold';
					pb43.style.backgroundColor = 'white';
					psfb2.innerHTML = pb44.innerHTML;}

				psfa1.onclick = function(){
					psfa1.style.backgroundColor = 'gold';
					psfa2.style.backgroundColor = 'white';
					pfa.innerHTML = psfa1.innerHTML;
					pj3a.innerHTML = psfa2.innerHTML;
				}
				psfa2.onclick = function(){
					psfa2.style.backgroundColor = 'gold';
					psfa1.style.backgroundColor = 'white';
					pfa.innerHTML = psfa2.innerHTML;
					pj3a.innerHTML = psfa1.innerHTML;
				}
				psfb1.onclick = function(){
					psfb1.style.backgroundColor = 'gold';
					psfb2.style.backgroundColor = 'white';
					pfb.innerHTML = psfb1.innerHTML;
					pj3b.innerHTML = psfb2.innerHTML;
				}
				psfb2.onclick = function(){
					psfb2.style.backgroundColor = 'gold';
					psfb1.style.backgroundColor = 'white';
					pfb.innerHTML = psfb2.innerHTML;
					pj3b.innerHTML = psfb1.innerHTML;
				}

				pfa.onclick = function(){
					pfa.style.backgroundColor = 'gold';
					pfb.style.backgroundColor = 'white';
				}
				pfb.onclick = function(){
					pfb.style.backgroundColor = 'gold';
					pfa.style.backgroundColor = 'white';
				}

				pj3a.onclick = function(){
					pj3a.style.backgroundColor = 'gold';
					pj3b.style.backgroundColor = 'white';
				}
				pj3b.onclick = function(){
					pj3b.style.backgroundColor = 'gold';
					pj3a.style.backgroundColor = 'white';
				}
				// di sini banget yang pb2	


        /*bracket group A round 3
				p31.onclick = function(){
				if ((p21.style.backgroundColor === 'gold' || p22.style.backgroundColor === 'gold') && (p23.style.backgroundColor === 'gold' || p24.style.backgroundColor === 'gold')){
        			p31.style.backgroundColor = 'gold';
					p32.style.backgroundColor = 'white';
					psfa1.innerHTML = p31.innerHTML;}}
				p32.onclick = function(){
				if ((p21.style.backgroundColor === 'gold' || p22.style.backgroundColor === 'gold') && (p23.style.backgroundColor === 'gold' || p24.style.backgroundColor === 'gold')){
					p32.style.backgroundColor = 'gold';
					p31.style.backgroundColor = 'white';
					psfa1.innerHTML = p32.innerHTML;}}
        		p33.onclick = function(){
				if ((p25.style.backgroundColor === 'gold' || p26.style.backgroundColor === 'gold') && (p27.style.backgroundColor === 'gold' || p28.style.backgroundColor === 'gold')){
        			p33.style.backgroundColor = 'gold';
					p34.style.backgroundColor = 'white';
					psfa2.innerHTML = p33.innerHTML;}}
				p34.onclick = function(){
				if ((p25.style.backgroundColor === 'gold' || p26.style.backgroundColor === 'gold') && (p27.style.backgroundColor === 'gold' || p28.style.backgroundColor === 'gold')){
					p34.style.backgroundColor = 'gold';
					p33.style.backgroundColor = 'white';
					psfa2.innerHTML = p34.innerHTML;}}

      	bracket semifinal A
				psfa1.onclick = function(){
				if ((p31.style.backgroundColor === 'gold' || p32.style.backgroundColor === 'gold') && (p33.style.backgroundColor === 'gold' || p34.style.backgroundColor === 'gold')){
					psfa1.style.backgroundColor = 'gold';
					psfa2.style.backgroundColor = 'white';
					pfa.innerHTML = psfa1.innerHTML;}}
				psfa2.onclick = function(){
					if ((p31.style.backgroundColor === 'gold' || p32.style.backgroundColor === 'gold') && (p33.style.backgroundColor === 'gold' || p34.style.backgroundColor === 'gold')){
					psfa2.style.backgroundColor = 'gold';
					psfa1.style.backgroundColor = 'white';
					pfa.innerHTML = psfa2.innerHTML;
					}
				}
SEMNFAL SEMFIN SEMFIN SEMFIN SEM FIN 
				bracket group B round 1
			
			

        bracket group B round 2
				pb21.onclick = function(){
				if ((pb11.style.backgroundColor === 'gold' || pb12.style.backgroundColor === 'gold') && (pb13.style.backgroundColor === 'gold' || pb14.style.backgroundColor === 'gold')){
        			pb21.style.backgroundColor = 'gold';
					pb22.style.backgroundColor = 'white';
					pb31.innerHTML = pb21.innerHTML;}}
				pb22.onclick = function(){
				if ((pb11.style.backgroundColor === 'gold' || pb12.style.backgroundColor === 'gold') && (pb13.style.backgroundColor === 'gold' || pb14.style.backgroundColor === 'gold')){
        			pb22.style.backgroundColor = 'gold';
					pb21.style.backgroundColor = 'white';
					pb31.innerHTML = pb22.innerHTML;}}
				pb23.onclick = function(){
				if ((pb15.style.backgroundColor === 'gold' || pb16.style.backgroundColor === 'gold') && (pb17.style.backgroundColor === 'gold' || pb18.style.backgroundColor === 'gold')){
        			pb23.style.backgroundColor = 'gold';
					pb24.style.backgroundColor = 'white';
					pb32.innerHTML = pb23.innerHTML;}}
				pb24.onclick = function(){
				if ((pb15.style.backgroundColor === 'gold' || pb16.style.backgroundColor === 'gold') && (pb17.style.backgroundColor === 'gold' || pb18.style.backgroundColor === 'gold')){
        			pb24.style.backgroundColor = 'gold';
					pb23.style.backgroundColor = 'white';
					pb32.innerHTML = pb24.innerHTML;}}
				pb25.onclick = function(){
				if ((pb19.style.backgroundColor === 'gold' || pb110.style.backgroundColor === 'gold') && (pb111.style.backgroundColor === 'gold' || pb112.style.backgroundColor === 'gold')){
        			pb25.style.backgroundColor = 'gold';
					pb26.style.backgroundColor = 'white';
					pb33.innerHTML = pb25.innerHTML;}}
				pb26.onclick = function(){
				if ((pb19.style.backgroundColor === 'gold' || pb110.style.backgroundColor === 'gold') && (pb111.style.backgroundColor === 'gold' || pb112.style.backgroundColor === 'gold')){
        			pb26.style.backgroundColor = 'gold';
					pb25.style.backgroundColor = 'whute';
					pb33.innerHTML = pb26.innerHTML;}}
				pb27.onclick = function(){
				if ((pb113.style.backgroundColor === 'gold' || pb114.style.backgroundColor === 'gold') && (pb115.style.backgroundColor === 'gold' || pb116.style.backgroundColor === 'gold')){
        			pb27.style.backgroundColor = 'gold';
					pb28.style.backgroundColor = 'white';
					pb34.innerHTML = pb27.innerHTML;}}
				pb28.onclick = function(){
				if ((pb113.style.backgroundColor === 'gold' || pb114.style.backgroundColor === 'gold') && (pb115.style.backgroundColor === 'gold' || pb116.style.backgroundColor === 'gold')){
        			pb28.style.backgroundColor = 'gold';
					pb27.style.backgroundColor = 'white';
					pb34.innerHTML = pb28.innerHTML;}}
			
				pb211.onclick = function(){
        			pb211.style.backgroundColor = 'gold';
					pb212.style.backgroundColor = 'white';
					pb36.innerHTML = pb211.innerHTML;}
				pb212.onclick = function(){
        			pb212.style.backgroundColor = 'gold';
					pb211.style.backgroundColor = 'white';
					pb36.innerHTML = pb212.innerHTML;}
				pb213.onclick = function(){
        			pb213.style.backgroundColor = 'gold';
					pb214.style.backgroundColor = 'white';
					pb37.innerHTML = pb213.innerHTML;}	
				pb214.onclick = function(){
        			pb214.style.backgroundColor = 'gold';
					pb213.style.backgroundColor = 'white';
					pb37.innerHTML = pb214.innerHTML;}
				pb215.onclick = function(){
        			pb215.style.backgroundColor = 'gold';
					pb216.style.backgroundColor = 'white';
					pb38.innerHTML = pb215.innerHTML;}
				pb216.onclick = function(){
        			pb216.style.backgroundColor = 'gold';
					pb215.style.backgroundColor = 'white';
					pb38.innerHTML = pb215.innerHTML;}

        bracket group A round 3
				pb31.onclick = function(){
				if ((pb21.style.backgroundColor === 'gold' || pb22.style.backgroundColor === 'gold') && (pb23.style.backgroundColor === 'gold' || pb24.style.backgroundColor === 'gold')){
        			pb31.style.backgroundColor = 'gold';
					pb32.style.backgroundColor = 'white';
					psfb1.innerHTML = pb31.innerHTML;}}
				pb32.onclick = function(){
				if ((pb21.style.backgroundColor === 'gold' || pb22.style.backgroundColor === 'gold') && (pb23.style.backgroundColor === 'gold' || pb24.style.backgroundColor === 'gold')){
					pb32.style.backgroundColor = 'gold';
					pb31.style.backgroundColor = 'white';
					psfb1.innerHTML = pb32.innerHTML;}}
				pb33.onclick = function(){
				if ((pb25.style.backgroundColor === 'gold' || pb26.style.backgroundColor === 'gold') && (pb27.style.backgroundColor === 'gold' || pb28.style.backgroundColor === 'gold')){
					pb33.style.backgroundColor = 'gold';
					pb34.style.backgroundColor = 'white';
					psfb2.innerHTML = pb33.innerHTML;}}
				pb34.onclick = function(){
				if ((pb25.style.backgroundColor === 'gold' || pb26.style.backgroundColor === 'gold') && (pb27.style.backgroundColor === 'gold' || pb28.style.backgroundColor === 'gold')){
					pb34.style.backgroundColor = 'gold';
					pb33.style.backgroundColor = 'white';
					psfb2.innerHTML = pb34.innerHTML;}}

      	bracket semifinal B
				psfb1.onclick = function(){
				if ((pb31.style.backgroundColor === 'gold' || pb32.style.backgroundColor === 'gold') && (pb33.style.backgroundColor === 'gold' || pb34.style.backgroundColor === 'gold')){
					psfb1.style.backgroundColor = 'gold';
					psfb2.style.backgroundColor = 'white';
					pfb.innerHTML = psfb1.innerHTML;}}
				psfb2.onclick = function(){
				if ((pb31.style.backgroundColor === 'gold' || pb32.style.backgroundColor === 'gold') && (pb33.style.backgroundColor === 'gold' || pb34.style.backgroundColor === 'gold')){
					psfb2.style.backgroundColor = 'gold';
					psfb1.style.backgroundColor = 'white';
					pfb.innerHTML = psfb2.innerHTML;}}
				
				bracket final
				pfa.onclick = function(){
				if ((psfa1.style.backgroundColor === 'gold' || psfa2.style.backgroundColor === 'gold') && (psfb1.style.backgroundColor === 'gold' || psfb2.style.backgroundColor === 'gold')){
					pfb.style.backgroundColor = 'white';
					pfa.style.backgroundColor = 'gold';}}
				pfb.onclick = function(){
				if ((psfa1.style.backgroundColor === 'gold' || psfa2.style.backgroundColor === 'gold') && (psfb1.style.backgroundColor === 'gold' || psfb2.style.backgroundColor === 'gold')){
					pfa.style.backgroundColor = 'white';
					pfb.style.backgroundColor = 'gold';}}*/