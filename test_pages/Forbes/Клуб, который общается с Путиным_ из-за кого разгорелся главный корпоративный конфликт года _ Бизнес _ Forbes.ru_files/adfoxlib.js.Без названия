function AdFoxGetCode(){
	this.rnd = function(){
		return Math.floor(Math.random() * 99999999);
	};
	this.request = 'data-af';
	this.found = 'data-af-found';
	//this.allPlace;
	this.ownid = '162070';
	this.banners = [];
	this.pr = window.pr || this.rnd();
	this.stpr = 0;
	this.ref = escape(document.referrer);
	this.count = 0;
	window.pr = this.pr;
	this.init = function() {
		adfox.allPlace = document.getElementsByTagName('div');
		for(var i = 0; i < adfox.allPlace.length; ++i){
			var dafx = adfox.allPlace[i].getAttribute(adfox.request);
			if(dafx != '' && dafx != null && adfox.allPlace[i].getAttribute(adfox.found) == null){
				var addate = new Date();
				var banner = {};
					banner.ph = adfox.allPlace[i];
					banner.id = adfox.allPlace[i].id;
					banner.dl = escape(document.location);
					banner.pr1 = Math.floor(Math.random() * 1000000);
					banner.link = 'http://ads.adfox.ru/'+adfox.ownid+'/prepareCode?'+adfox.allPlace[i].getAttribute('data-af')+'&pr=' + adfox.pr +'&pt=b&pd=' + addate.getDate() + '&pw=' + addate.getDay() + '&pv=' + addate.getHours() + '&prr=' + adfox.ref + '&dl='+banner.dl+'&pr1='+banner.pr1+'&phid='+banner.id;
					adfox.banners.push(banner);
					adfox.allPlace[i].setAttribute(adfox.found,'found');
					banner.trash = {
						'elems':[],
						'oldstyle':'',
						'timers':[],
						'events':[]
					};
					adfox.createScript(adfox.banners.length-1);
					
			}
		}
		adfox.count++;
		if(adfox.count!=5){
			setTimeout(adfox.init,300);
		}
	};
	this.getBanner = function(id){
		var b = adfox.banners;
		for(var i = 0; i<b.length;i++){
			if(b[i].id == id){
				return b[i];
			}
		}
	};
	this.createScript = function(i){
            var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = this.banners[i].link+'&rnd='+this.rnd();
            this.banners[i].ph.appendChild(s);
	};
	this.addEvent = function (elem, eventType, eventHandler,plid){
		if(elem.addEventListener){
			elem.addEventListener(eventType, eventHandler, false);
		}
		else if(elem.attachEvent){
			elem.attachEvent('on'+eventType, eventHandler);
		}
		var b = adfox.getBanner(plid);
	};

	this.removeEvent = function (elem, eventType, eventHandler){
		if(elem.removeEventListener){
			elem.removeEventListener(eventType, eventHandler, false);
		}
		else if(elem.detachEvent){
			elem.detachEvent('on'+eventType, eventHandler);
		}
	};
	this.reload = function(id){
		setTimeout(function(){adfox.pr = adfox.rnd();console.log(adfox.pr);},500);
		
		if(id == 'AdFox_background'){
			var docbody = document.getElementsByTagName('body')[0];
				docbody.removeAttribute('style');
			var footer = document.getElementById('footerBanner');
			var shift = document.getElementById('contentShifter');
			var b = adfox.getBanner(id);
			var p = document.getElementById('adfoxBackground'+b.pr1);
			for(var i = 0; i<docbody.childNodes.length;i++){
				var nod = docbody.childNodes[i];
				if(nod.toString() != '[object Comment]' && nod != null && nod.toString() != '[object Text]'){
					try {
					var cl = nod.getAttribute('class');
					if(cl){
						if(cl.indexOf('adfoxClickable') > -1){
							cl = cl.replace(/adfoxClickable/g,'');
							nod.setAttribute('class',cl);
						}
					}
					} catch(e){}
				}
			}
			if(p){
				p.parentNode.removeChild(p);
			}
			if(shift){
				shift.parentNode.removeChild(shift);
			}
			if(footer){
				footer.parentNode.removeChild(footer);
			}
			if(adfox.cssfile){
				document.getElementsByTagName('head')[0].removeChild(adfox.cssfile);
			}
			if(adfox.flashcss){
				document.getElementsByTagName('head')[0].removeChild(adfox.flashcss);
			}
		}
		for(var j = 0; j < adfox.banners.length; ++j){
			var b = adfox.banners[j];
			if(id == b.id){
				//clear trash
				for(var i = b.trash.elems.length; i > 0 ;i--){
					var e = b.trash.elems;
					if(e[i-1].parentNode != null)
					{
						e[i-1].parentNode.removeChild(e[i-1]);
					}
				} 
				b.trash.elems.length = 0;
				for(var i = b.trash.timers.length; i>0; i--){
					var t = b.trash.timers;
					if(t[i-1]){
						clearTimeout(t[i-1]);
						t.splice(i-1,1);
					}
				}
				b.trash.timers.length = 0;
				if(b.trash.events.length > 0){
					var e = b.trash.events;
					for(var z = 0;z<e.length;z++)
					{						
						adfox.removeEvent(e[z].elem,e[z].event,e[z].handler);
						e.splice(z,1);
					}
				}
				adfox.addate = new Date();
				adfox.relink(j,'&pr=',adfox.pr);
				adfox.relink(j,'&pd=',adfox.addate.getDate());
				adfox.relink(j,'&pw=',adfox.addate.getDay());
				adfox.relink(j,'&pv=',adfox.addate.getHours());
				adfox.banners[j].ph.innerHTML = '';
				adfox.banners[j].ph.setAttribute('style','');
				adfox.createScript(j);
			}
		}
	};
	this.relink = function(index,parametr,replace){
		for(var z=0;z<this.banners[index].link.length;z++)
		{
			if(this.banners[index].link.slice(z,z+parametr.length) == parametr)
			{
				var est = '';
				var fst = this.banners[index].link.slice(0,z+parametr.length);
					fst += replace;
				for(x=z+parametr.length+1;x<this.banners[index].link.length;x++)
				{
					if(this.banners[index].link[x] == '&')
					{
						est = this.banners[index].link.slice(x,this.banners[index].link.length);
						this.banners[index].link = fst+est;
						break;
					}
				}
			}
		}
	};
	this.checkplug = function(){
		var hasFlash = false;
		try 
		{
			var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(fo) hasFlash = true;
		}
		catch(e)
		{
			if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
		}
		return hasFlash;
	}
}

adfox = new AdFoxGetCode();
setTimeout(adfox.init,300);
