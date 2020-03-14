const button = document.getElementById('button');

        //shufflerl...
		var team = ["mission","gogetgold","excalibur","gustav","ivantheterrible","maxdrive",
					"masterrace","peasantright","knightoftherealm","dovakin","alduin","breton",
					"minuteman","thebrotherhood","wearethemaster","modussystem","rebelscum",
					"criminalscum","skyrimbelongstothenord","oblivioncrisis","oripathy",
					"mrhouse","trevor","greybeards","borisnikov","commonwealth","falmer",
					"panzerIV","blitzmegaplex","missionpossible","stromcloak","imperial"];

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
			document.getElementById("pb1.1").innerHTML = team[16];
			document.getElementById("pb1.2").innerHTML = team[17];
			document.getElementById("pb1.3").innerHTML = team[18];
			document.getElementById("pb1.4").innerHTML = team[19];
			document.getElementById("pb1.5").innerHTML = team[20];
			document.getElementById("pb1.6").innerHTML = team[21];
			document.getElementById("pb1.7").innerHTML = team[22];
			document.getElementById("pb1.8").innerHTML = team[23];
			document.getElementById("pb1.9").innerHTML = team[24];
			document.getElementById("pb1.10").innerHTML = team[25];
			document.getElementById("pb1.11").innerHTML = team[26];
			document.getElementById("pb1.12").innerHTML = team[27];
			document.getElementById("pb1.13").innerHTML = team[28];
			document.getElementById("pb1.14").innerHTML = team[29];
			document.getElementById("pb1.15").innerHTML = team[30];
			document.getElementById("pb1.16").innerHTML = team[31];
			}

			document.getElementById("random").addEventListener("click", shuffler);
			window.addEventListener("keypress", checkKeyPressed, false);

			function checkKeyPressed(e) {
			if (e.charCode == "32") {
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

			const p21 = document.getElementById('p2.1');
			const p22 = document.getElementById('p2.2');
			const p23 = document.getElementById('p2.3');
			const p24 = document.getElementById('p2.4');
			const p25 = document.getElementById('p2.5');
			const p26 = document.getElementById('p2.6');
			const p27 = document.getElementById('p2.7');
			const p28 = document.getElementById('p2.8');

			const pb21 = document.getElementById('pb2.1');
			const pb22 = document.getElementById('pb2.2');
			const pb23 = document.getElementById('pb2.3');
			const pb24 = document.getElementById('pb2.4');
			const pb25 = document.getElementById('pb2.5');
			const pb26 = document.getElementById('pb2.6');
			const pb27 = document.getElementById('pb2.7');
			const pb28 = document.getElementById('pb2.8');

			const p31 = document.getElementById('p3.1');
			const p32 = document.getElementById('p3.2');
			const p33 = document.getElementById('p3.3');
			const p34 = document.getElementById('p3.4');

			const pb31 = document.getElementById('pb3.1');
			const pb32 = document.getElementById('pb3.2');
			const pb33 = document.getElementById('pb3.3');
			const pb34 = document.getElementById('pb3.4');
        
			const psfa1 = document.getElementById('psf1');
			const psfa2 = document.getElementById('psf2');
			
      const psfb1 = document.getElementById('psfb1');
      const psfb2 = document.getElementById('psfb2');

			const pfa = document.getElementById('FinalA');
			const pfb = document.getElementById('FinalB');

     		//bracket group A round 1
				p11.onclick = function(){
				if ((p12.style.backgroundColor === 'gold') && (p21.innerHTML == p12.innerHTML)){
					p11.style.backgroundColor = 'white';} 
				else {
				p11.style.backgroundColor = 'gold';
          p21.innerHTML = p11.innerHTML;}
				};
				p12.onclick = function(){
				if ((p11.style.backgroundColor === 'gold') && (p21.innerHTML == p11.innerHTML)){
					p12.style.backgroundColor = 'white';} 
				else {
        p12.style.backgroundColor = 'gold';
        p21.innerHTML = p12.innerHTML;}
				};
				p13.onclick = function(){
				if ((p14.style.backgroundColor === 'gold') && (p22.innerHTML == p14.innerHTML)){
					p13.style.backgroundColor = 'white';} 
				else {
				p13.style.backgroundColor = 'gold';
        p22.innerHTML = p13.innerHTML;}
				};
				p14.onclick = function(){
				if ((p13.style.backgroundColor === 'gold') && (p22.innerHTML == p13.innerHTML)){
					p14.style.backgroundColor = 'white';} 
				else {
        p14.style.backgroundColor = 'gold';
        p22.innerHTML = p14.innerHTML;}
				};
				p15.onclick = function(){
				if ((p16.style.backgroundColor === 'gold') && (p23.innerHTML == p16.innerHTML)){
					p15.style.backgroundColor = 'white';} 
				else {
        p15.style.backgroundColor = 'gold';
        p23.innerHTML = p15.innerHTML;}
				};
				p16.onclick = function(){
				if ((p15.style.backgroundColor === 'gold') && (p23.innerHTML == p15.innerHTML)){
					p16.style.backgroundColor = 'white';} 
				else {
				p16.style.backgroundColor = 'gold';
        p23.innerHTML =  p16.innerHTML;}
				};
				p17.onclick = function(){
				if ((p18.style.backgroundColor === 'gold') && (p24.innerHTML == p18.innerHTML)){
					p17.style.backgroundColor = 'white';} 
				else {
        p17.style.backgroundColor = 'gold';
        p24.innerHTML = p17.innerHTML;}
				};
				p18.onclick = function(){
				if ((p17.style.backgroundColor === 'gold') && (p24.innerHTML == p17.innerHTML)){
					p18.style.backgroundColor = 'white';} 
				else {
        p18.style.backgroundColor = 'gold';
        p24.innerHTML = p18.innerHTML;}
				};
				p19.onclick = function(){
				if ((p110.style.backgroundColor === 'gold') && (p25.innerHTML == p110.innerHTML)){
					p19.style.backgroundColor = 'white';} 
				else {
        p19.style.backgroundColor = 'gold';
        p25.innerHTML = p19.innerHTML;}
				};
				p110.onclick = function(){
				if ((p19.style.backgroundColor === 'gold') && (p25.innerHTML == p19.innerHTML)){
					p110.style.backgroundColor = 'white';} 
				else {
        p110.style.backgroundColor = 'gold';
        p25.innerHTML = p110.innerHTML;}
				};
				p111.onclick = function(){
				if ((p112.style.backgroundColor === 'gold') && (p26.innerHTML == p112.innerHTML)){
					p111.style.backgroundColor = 'white';} 
				else {
        p111.style.backgroundColor = 'gold';
        p26.innerHTML = p111.innerHTML;}
				};
				p112.onclick = function(){
				if ((p111.style.backgroundColor === 'gold') && (p26.innerHTML == p111.innerHTML)){
					p112.style.backgroundColor = 'white';} 
				else {
        p112.style.backgroundColor = 'gold';
        p26.innerHTML =  p112.innerHTML;}
				};
				p113.onclick = function(){
				if ((p114.style.backgroundColor === 'gold') && (p27.innerHTML == p114.innerHTML)){
					p113.style.backgroundColor = 'white';} 
				else {
        p113.style.backgroundColor = 'gold';
        p27.innerHTML = p113.innerHTML;}
				};
				p114.onclick = function(){
				if ((p113.style.backgroundColor === 'gold') && (p27.innerHTML == p113.innerHTML)){
					p114.style.backgroundColor = 'white';} 
				else {
        p114.style.backgroundColor = 'gold';
        p27.innerHTML = p114.innerHTML;}
				};
				p115.onclick = function(){
				if ((p116.style.backgroundColor === 'gold') && (p28.innerHTML == p116.innerHTML)){
					p115.style.backgroundColor = 'white';} 
				else {
        p115.style.backgroundColor = 'gold';
        p28.innerHTML = p115.innerHTML;}
				};
				p116.onclick = function(){
				if ((p115.style.backgroundColor === 'gold') && (p28.innerHTML == p115.innerHTML)){
					p116.style.backgroundColor = 'white';} 
				else {
        p116.style.backgroundColor = 'gold';
        p28.innerHTML =  p116.innerHTML;}
				};

        //bracket group A round 2
				p21.onclick = function(){
				if ((p22.style.backgroundColor === 'gold') && (p31.innerHTML == p22.innerHTML)){
					p21.style.backgroundColor = 'white';} 
				else if ((p11.style.backgroundColor === 'gold' || p12.style.backgroundColor === 'gold') && (p13.style.backgroundColor === 'gold' || p14.style.backgroundColor === 'gold')){
        p21.style.backgroundColor = 'gold';
        p31.innerHTML = p21.innerHTML;}
				};
				p22.onclick = function(){
				if ((p21.style.backgroundColor === 'gold') && (p31.innerHTML == p21.innerHTML)){
					p22.style.backgroundColor = 'white';} 
				else if ((p11.style.backgroundColor === 'gold' || p12.style.backgroundColor === 'gold') && (p13.style.backgroundColor === 'gold' || p14.style.backgroundColor === 'gold')){
        p22.style.backgroundColor = 'gold';
        p31.innerHTML = p22.innerHTML;}
				};
				p23.onclick = function(){
				if ((p24.style.backgroundColor === 'gold') && (p32.innerHTML == p24.innerHTML)){
					p23.style.backgroundColor = 'white';} 
				else if ((p15.style.backgroundColor === 'gold' || p16.style.backgroundColor === 'gold') && (p17.style.backgroundColor === 'gold' || p18.style.backgroundColor === 'gold')){
        p23.style.backgroundColor = 'gold';
        p32.innerHTML = p23.innerHTML;}
				};
				p24.onclick = function(){
				if ((p23.style.backgroundColor === 'gold') && (p32.innerHTML == p23.innerHTML)){
					p24.style.backgroundColor = 'white';} 
				else if ((p15.style.backgroundColor === 'gold' || p16.style.backgroundColor === 'gold') && (p17.style.backgroundColor === 'gold' || p18.style.backgroundColor === 'gold')){
        p24.style.backgroundColor = 'gold';
        p32.innerHTML = p24.innerHTML;}
				};
				p25.onclick = function(){
				if ((p26.style.backgroundColor === 'gold') && (p33.innerHTML == p26.innerHTML)){
					p25.style.backgroundColor = 'white';} 
				else if ((p19.style.backgroundColor === 'gold' || p110.style.backgroundColor === 'gold') && (p111.style.backgroundColor === 'gold' || p112.style.backgroundColor === 'gold')){
        p25.style.backgroundColor = 'gold';
        p33.innerHTML = p25.innerHTML;}
				};
				p26.onclick = function(){
				if ((p25.style.backgroundColor === 'gold') && (p33.innerHTML == p25.innerHTML)){
					p26.style.backgroundColor = 'white';} 
				else if ((p19.style.backgroundColor === 'gold' || p110.style.backgroundColor === 'gold') && (p111.style.backgroundColor === 'gold' || p112.style.backgroundColor === 'gold')){
        p26.style.backgroundColor = 'gold';
        p33.innerHTML = p26.innerHTML;}
				};
				p27.onclick = function(){
				if ((p28.style.backgroundColor === 'gold') && (p34.innerHTML == p28.innerHTML)){
					p27.style.backgroundColor = 'white';} 
				else if ((p113.style.backgroundColor === 'gold' || p114.style.backgroundColor === 'gold') && (p115.style.backgroundColor === 'gold' || p116.style.backgroundColor === 'gold')){
        p27.style.backgroundColor = 'gold';
        p34.innerHTML = p27.innerHTML;}
				};
				p28.onclick = function(){
				if ((p27.style.backgroundColor === 'gold') && (p34.innerHTML == p27.innerHTML)){
					p28.style.backgroundColor = 'white';} 
				else if ((p113.style.backgroundColor === 'gold' || p114.style.backgroundColor === 'gold') && (p115.style.backgroundColor === 'gold' || p116.style.backgroundColor === 'gold')){
        p28.style.backgroundColor = 'gold';
        p34.innerHTML = p28.innerHTML;}
				};

        //bracket group A round 3
				p31.onclick = function(){
				if ((p32.style.backgroundColor === 'gold') && (psfa1.innerHTML == p32.innerHTML)){
					p31.style.backgroundColor = 'white';} 
				else if ((p21.style.backgroundColor === 'gold' || p22.style.backgroundColor === 'gold') && (p23.style.backgroundColor === 'gold' || p24.style.backgroundColor === 'gold')){
        p31.style.backgroundColor = 'gold';
        psfa1.innerHTML = p31.innerHTML;}
        }
        p32.onclick = function(){
        if ((p31.style.backgroundColor === 'gold') && (psfa1.innerHTML == p31.innerHTML)){
          p32.style.backgroundColor = 'white';}
        else if ((p21.style.backgroundColor === 'gold' || p22.style.backgroundColor === 'gold') && (p23.style.backgroundColor === 'gold' || p24.style.backgroundColor === 'gold')){
        p32.style.backgroundColor = 'gold';
        psfa1.innerHTML = p32.innerHTML;}
        }
        p33.onclick = function(){
				if ((p34.style.backgroundColor === 'gold') && (psfa2.innerHTML == p34.innerHTML)){
					p33.style.backgroundColor = 'white';} 
				else if ((p25.style.backgroundColor === 'gold' || p26.style.backgroundColor === 'gold') && (p27.style.backgroundColor === 'gold' || p28.style.backgroundColor === 'gold')){
        p33.style.backgroundColor = 'gold';
        psfa2.innerHTML = p33.innerHTML;}
        }
        p34.onclick = function(){
        if ((p33.style.backgroundColor === 'gold') && (psfa2.innerHTML == p33.innerHTML)){
          p34.style.backgroundColor = 'white';}
        else if ((p25.style.backgroundColor === 'gold' || p26.style.backgroundColor === 'gold') && (p27.style.backgroundColor === 'gold' || p28.style.backgroundColor === 'gold')){
        p34.style.backgroundColor = 'gold';
        psfa2.innerHTML = p34.innerHTML;}
        }

      	//bracket semifinal A
        psfa1.onclick = function(){
        if ((psfa2.style.backgroundColor === 'gold') && (pfa.innerHTML == psfa2.innerHTML)){
          psfa1.style.backgroundColor = 'white';}
        else if ((p31.style.backgroundColor === 'gold' || p32.style.backgroundColor === 'gold') && (p33.style.backgroundColor === 'gold' || p34.style.backgroundColor === 'gold')){
        psfa1.style.backgroundColor = 'gold';
        pfa.innerHTML = psfa1.innerHTML;}
				}
				psfa2.onclick = function(){
        if ((psfa1.style.backgroundColor === 'gold') && (pfa.innerHTML == psfa1.innerHTML)){
          psfa2.style.backgroundColor = 'white';}
        else if ((p31.style.backgroundColor === 'gold' || p32.style.backgroundColor === 'gold') && (p33.style.backgroundColor === 'gold' || p34.style.backgroundColor === 'gold')){
        psfa2.style.backgroundColor = 'gold';
        pfa.innerHTML = psfa.innerHTML;}
        }

				//bracket group B round 1
				pb11.onclick = function(){
				if ((pb12.style.backgroundColor === 'gold') && (pb21.innerHTML == pb12.innerHTML)){
					pb11.style.backgroundColor = 'white';} 
				else {
				pb11.style.backgroundColor = 'gold';
				pb21.innerHTML = pb11.innerHTML;}
				};
				pb12.onclick = function(){
				if ((pb11.style.backgroundColor === 'gold') && (pb21.innerHTML == pb11.innerHTML)){
				pb12.style.backgroundColor = 'white';} 
					else {
				pb12.style.backgroundColor = 'gold';
				pb21.innerHTML = pb12.innerHTML;}
				};
				pb13.onclick = function(){
				if ((pb14.style.backgroundColor === 'gold') && (pb22.innerHTML == pb14.innerHTML)){
					pb13.style.backgroundColor = 'white';} 
				else {
				pb13.style.backgroundColor = 'gold';
				pb22.innerHTML = pb13.innerHTML;}
				};
				pb14.onclick = function(){
				if ((pb13.style.backgroundColor === 'gold') && (pb22.innerHTML == pb13.innerHTML)){
					pb14.style.backgroundColor = 'white';} 
				else {
				pb14.style.backgroundColor = 'gold';
				pb22.innerHTML = pb14.innerHTML;}
				};
				pb15.onclick = function(){
				if ((pb16.style.backgroundColor === 'gold') && (pb23.innerHTML == pb16.innerHTML)){
					pb15.style.backgroundColor = 'white';} 
				else {
				pb15.style.backgroundColor = 'gold';
				pb23.innerHTML = pb15.innerHTML;}
				};
				pb16.onclick = function(){
				if ((pb15.style.backgroundColor === 'gold') && (pb23.innerHTML == pb15.innerHTML)){
					pb16.style.backgroundColor = 'white';} 
				else {
				pb16.style.backgroundColor = 'gold';
				pb23.innerHTML =  pb16.innerHTML;}
				};
				pb17.onclick = function(){
				if ((pb18.style.backgroundColor === 'gold') && (pb24.innerHTML == pb18.innerHTML)){
					pb17.style.backgroundColor = 'white';} 
				else {
				pb17.style.backgroundColor = 'gold';
				pb24.innerHTML = pb17.innerHTML;}
				};
				pb18.onclick = function(){
				if ((pb17.style.backgroundColor === 'gold') && (pb24.innerHTML == pb17.innerHTML)){
					pb18.style.backgroundColor = 'white';} 
				else {
				pb18.style.backgroundColor = 'gold';
        pb24.innerHTML = pb18.innerHTML;}
				};
				pb19.onclick = function(){
				if ((pb110.style.backgroundColor === 'gold') && (pb25.innerHTML == pb110.innerHTML)){
					pb19.style.backgroundColor = 'white';} 
				else {
        pb19.style.backgroundColor = 'gold';
        pb25.innerHTML = pb19.innerHTML;}
				};
				pb110.onclick = function(){
				if ((pb19.style.backgroundColor === 'gold') && (pb25.innerHTML == pb19.innerHTML)){
					pb110.style.backgroundColor = 'white';} 
				else {
        pb110.style.backgroundColor = 'gold';
        pb25.innerHTML = pb110.innerHTML;}
				};
				pb111.onclick = function(){
				if ((pb112.style.backgroundColor === 'gold') && (pb26.innerHTML == pb112.innerHTML)){
					pb111.style.backgroundColor = 'white';} 
				else {
        pb111.style.backgroundColor = 'gold';
        pb26.innerHTML = pb111.innerHTML;}
				};
				pb112.onclick = function(){
				if ((pb111.style.backgroundColor === 'gold') && (pb26.innerHTML == pb111.innerHTML)){
					pb112.style.backgroundColor = 'white';} 
				else {
        pb112.style.backgroundColor = 'gold';
        pb26.innerHTML =  pb112.innerHTML;}
				};
				pb113.onclick = function(){
				if ((pb114.style.backgroundColor === 'gold') && (pb27.innerHTML == pb114.innerHTML)){
					pb113.style.backgroundColor = 'white';} 
				else {
        pb113.style.backgroundColor = 'gold';
        pb27.innerHTML = pb113.innerHTML;}
				};
				pb114.onclick = function(){
				if ((pb113.style.backgroundColor === 'gold') && (pb27.innerHTML == pb113.innerHTML)){
					pb114.style.backgroundColor = 'white';} 
				else {
        pb114.style.backgroundColor = 'gold';
        pb27.innerHTML = pb114.innerHTML;}
				};
				pb115.onclick = function(){
				if ((pb116.style.backgroundColor === 'gold') && (pb28.innerHTML == pb116.innerHTML)){
					pb115.style.backgroundColor = 'white';} 
				else {
        pb115.style.backgroundColor = 'gold';
        pb28.innerHTML = pb115.innerHTML;}
				};
				pb116.onclick = function(){
				if ((pb115.style.backgroundColor === 'gold') && (pb28.innerHTML == pb115.innerHTML)){
					pb116.style.backgroundColor = 'white';} 
				else {
        pb116.style.backgroundColor = 'gold';
        pb28.innerHTML =  pb116.innerHTML;}
				};

        //bracket group B round 2
				pb21.onclick = function(){
				if ((pb22.style.backgroundColor === 'gold') && (pb31.innerHTML == pb22.innerHTML)){
					pb21.style.backgroundColor = 'white';} 
				else if ((pb11.style.backgroundColor === 'gold' || pb12.style.backgroundColor === 'gold') && (pb13.style.backgroundColor === 'gold' || pb14.style.backgroundColor === 'gold')){
        pb21.style.backgroundColor = 'gold';
        pb31.innerHTML = pb21.innerHTML;}
				};
				pb22.onclick = function(){
				if ((pb21.style.backgroundColor === 'gold') && (pb31.innerHTML == pb21.innerHTML)){
					pb22.style.backgroundColor = 'white';} 
				else if ((pb11.style.backgroundColor === 'gold' || pb12.style.backgroundColor === 'gold') && (pb13.style.backgroundColor === 'gold' || pb14.style.backgroundColor === 'gold')){
        pb22.style.backgroundColor = 'gold';
        pb31.innerHTML = pb22.innerHTML;}
				};
				pb23.onclick = function(){
				if ((pb24.style.backgroundColor === 'gold') && (pb32.innerHTML == pb24.innerHTML)){
					pb23.style.backgroundColor = 'white';} 
				else if ((pb15.style.backgroundColor === 'gold' || pb16.style.backgroundColor === 'gold') && (pb17.style.backgroundColor === 'gold' || pb18.style.backgroundColor === 'gold')){
        pb23.style.backgroundColor = 'gold';
        pb32.innerHTML = pb23.innerHTML;}
				};
				pb24.onclick = function(){
				if ((pb23.style.backgroundColor === 'gold') && (pb32.innerHTML == pb23.innerHTML)){
					pb24.style.backgroundColor = 'white';} 
				else if ((pb15.style.backgroundColor === 'gold' || pb16.style.backgroundColor === 'gold') && (pb17.style.backgroundColor === 'gold' || pb18.style.backgroundColor === 'gold')){
        pb24.style.backgroundColor = 'gold';
        pb32.innerHTML = pb24.innerHTML;}
				};
				pb25.onclick = function(){
				if ((pb26.style.backgroundColor === 'gold') && (pb33.innerHTML == pb26.innerHTML)){
					pb25.style.backgroundColor = 'white';} 
				else if ((pb19.style.backgroundColor === 'gold' || pb110.style.backgroundColor === 'gold') && (pb111.style.backgroundColor === 'gold' || pb112.style.backgroundColor === 'gold')){
        pb25.style.backgroundColor = 'gold';
        pb33.innerHTML = pb25.innerHTML;}
				};
				pb26.onclick = function(){
				if ((pb25.style.backgroundColor === 'gold') && (pb33.innerHTML == pb25.innerHTML)){
					pb26.style.backgroundColor = 'white';} 
				else if ((pb19.style.backgroundColor === 'gold' || pb110.style.backgroundColor === 'gold') && (pb111.style.backgroundColor === 'gold' || pb112.style.backgroundColor === 'gold')){
        pb26.style.backgroundColor = 'gold';
        pb33.innerHTML = pb26.innerHTML;}
				};
				pb27.onclick = function(){
				if ((pb28.style.backgroundColor === 'gold') && (pb34.innerHTML == pb28.innerHTML)){
					pb27.style.backgroundColor = 'white';} 
				else if ((pb113.style.backgroundColor === 'gold' || pb114.style.backgroundColor === 'gold') && (pb115.style.backgroundColor === 'gold' || pb116.style.backgroundColor === 'gold')){
        pb27.style.backgroundColor = 'gold';
        pb34.innerHTML = pb27.innerHTML;}
				};
				pb28.onclick = function(){
				if ((pb27.style.backgroundColor === 'gold') && (pb34.innerHTML == pb27.innerHTML)){
					pb28.style.backgroundColor = 'white';} 
				else if ((pb113.style.backgroundColor === 'gold' || pb114.style.backgroundColor === 'gold') && (pb115.style.backgroundColor === 'gold' || pb116.style.backgroundColor === 'gold')){
        pb28.style.backgroundColor = 'gold';
        pb34.innerHTML = pb28.innerHTML;}
				};

        //bracket group A round 3
				pb31.onclick = function(){
				if ((pb32.style.backgroundColor === 'gold') && (psfb1.innerHTML == pb32.innerHTML)){
					pb31.style.backgroundColor = 'white';} 
				else if ((pb21.style.backgroundColor === 'gold' || pb22.style.backgroundColor === 'gold') && (pb23.style.backgroundColor === 'gold' || pb24.style.backgroundColor === 'gold')){
        pb31.style.backgroundColor = 'gold';
        psfb1.innerHTML = pb31.innerHTML;}
        }
        pb32.onclick = function(){
        if ((pb31.style.backgroundColor === 'gold') && (psfb1.innerHTML == pb31.innerHTML)){
          pb32.style.backgroundColor = 'white';}
        else if ((pb21.style.backgroundColor === 'gold' || pb22.style.backgroundColor === 'gold') && (pb23.style.backgroundColor === 'gold' || pb24.style.backgroundColor === 'gold')){
        pb32.style.backgroundColor = 'gold';
        psfb1.innerHTML = pb32.innerHTML;}
        }
        pb33.onclick = function(){
				if ((pb34.style.backgroundColor === 'gold') && (psfb2.innerHTML == pb34.innerHTML)){
					pb33.style.backgroundColor = 'white';} 
				else if ((pb25.style.backgroundColor === 'gold' || pb26.style.backgroundColor === 'gold') && (pb27.style.backgroundColor === 'gold' || pb28.style.backgroundColor === 'gold')){
        pb33.style.backgroundColor = 'gold';
        psfb2.innerHTML = pb33.innerHTML;}
        }
        pb34.onclick = function(){
        if ((pb33.style.backgroundColor === 'gold') && (psfb2.innerHTML == pb33.innerHTML)){
          pb34.style.backgroundColor = 'white';}
        else if ((pb25.style.backgroundColor === 'gold' || pb26.style.backgroundColor === 'gold') && (pb27.style.backgroundColor === 'gold' || pb28.style.backgroundColor === 'gold')){
        pb34.style.backgroundColor = 'gold';
        psfb2.innerHTML = pb34.innerHTML;}
        }

      	//bracket semifinal B
        psfb1.onclick = function(){
        if ((psfb2.style.backgroundColor === 'gold') && (pfb.innerHTML == psfb2.innerHTML)){
          psfb1.style.backgroundColor = 'white';}
        else if ((pb31.style.backgroundColor === 'gold' || pb32.style.backgroundColor === 'gold') && (pb33.style.backgroundColor === 'gold' || pb34.style.backgroundColor === 'gold')){
        psfb1.style.backgroundColor = 'gold';
        pfb.innerHTML = psfb1.innerHTML;}
				}
				psfb2.onclick = function(){
        if ((psfb1.style.backgroundColor === 'gold') && (pfb.innerHTML == psfb1.innerHTML)){
          psfb2.style.backgroundColor = 'white';}
        else if ((pb31.style.backgroundColor === 'gold' || pb32.style.backgroundColor === 'gold') && (pb33.style.backgroundColor === 'gold' || pb34.style.backgroundColor === 'gold')){
        psfb2.style.backgroundColor = 'gold';
        pfb.innerHTML = psfb2.innerHTML;}
				}
				
				//bracket final
				pfa.onclick = function(){
				if (pfb.style.backgroundColor === 'gold'){
					pfa.style.backgroundColor = 'white';}
				else if ((psfa1.style.backgroundColor === 'gold' || psfa2.style.backgroundColor === 'gold') && (psfb1.style.backgroundColor === 'gold' || psfb2.style.backgroundColor === 'gold')){
					pfa.style.backgroundColor = 'gold';}
				}
				pfb.onclick = function(){
				if (pfa.style.backgroundColor === 'gold'){
					pfb.style.backgroundColor = 'white';}
				else if ((psfa1.style.backgroundColor === 'gold' || psfa2.style.backgroundColor === 'gold') && (psfb1.style.backgroundColor === 'gold' || psfb2.style.backgroundColor === 'gold')){
					pfb.style.backgroundColor = 'gold';}
				}