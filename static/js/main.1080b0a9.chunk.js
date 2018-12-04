(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(55)},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(24),a(18)),s=a(2),i=a.n(s),u=a(3),p=a(7),m=a(8),h=a(12),d=a(9),g=a(13),f=(a(28),function(e){var t=e.errorState;return r.a.createElement("div",{className:"error-page ".concat(t),"aria-label":"error-page"},r.a.createElement("h1",{className:"error"},"Connection lost..."))}),v=(a(30),function(e){var t=e.crawl,a=e.title,n=e.id;return r.a.createElement("section",{"aria-label":"mission-briefing"},r.a.createElement("h2",null,"Situation Briefing"),r.a.createElement("p",{className:"crawl-text"},t),r.a.createElement("p",{className:"smol-text"},"Briefing Title: ",r.a.createElement("span",null,a)),r.a.createElement("p",{className:"smol-text"},"Galaxy Date: ",r.a.createElement("span",null,n)))}),b=(a(32),function(){return r.a.createElement("div",{className:"loading","aria-label":"loading-image"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot-two"})),r.a.createElement("i",{className:"fab fa-jedi-order icon"})))}),S=(a(34),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).checkReady=function(){e.state.ready&&!e.props.error?(e.setState({showCrawl:"show-crawl",hideWelcome:"hide-welcome"}),window.innerWidth>475&&"closed"===e.props.hamburger.status&&e.props.hamburgerChange()):e.state.ready&&e.props.error&&e.setState({error:"display-crawl-error",hideWelcome:"hide-welcome"})},e.handleFingerPrint=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({thumbprint:"active-thumbprint"});case 2:return t.next=4,setTimeout(e.printConnect,500);case 4:return t.next=6,setTimeout(e.printHandshake,2500);case 6:return t.next=8,setTimeout(e.printWelcome,5e3);case 8:return t.next=10,setTimeout(e.printBriefing,6500);case 10:return t.next=12,setTimeout(e.props.setReady,6500);case 12:case"end":return t.stop()}},t,this)})),e.printConnect=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({securing:"print-securing"});case 2:case"end":return t.stop()}},t,this)})),e.printHandshake=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({handshake:"print-handshake"});case 2:case"end":return t.stop()}},t,this)})),e.printWelcome=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({welcome:"print-welcome"});case 2:case"end":return t.stop()}},t,this)})),e.printBriefing=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({briefing:"print-briefing",ready:!0});case 2:case"end":return t.stop()}},t,this)})),e.state={thumbprint:"",securing:"",handshake:"",welcome:"",briefing:"",fadeWelcome:"",hideWelcome:"",showCrawl:"",ready:!1,error:""},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("aside",{onClick:function(){e.checkReady()},"aria-label":"landing-screen"},r.a.createElement("section",{className:"header-section"},r.a.createElement("div",{className:"header-logo-wrapper"},r.a.createElement("i",{className:"fab fa-jedi-order header-logo"}))),r.a.createElement("main",{className:"main-landing-section ".concat(this.state.fadeWelcome," ").concat(this.state.hideWelcome)},r.a.createElement("section",{className:"landing-loading"},r.a.createElement("h3",null,"Imprint thumb to connect")),r.a.createElement("h3",{"data-text":"Securing connection...",className:"securing ".concat(this.state.securing)},"Securing connection..."),r.a.createElement("h3",{className:"handshake ".concat(this.state.handshake),"data-text":"Handshake successful!"},"Handshake successful."),r.a.createElement("h3",{className:"welcome ".concat(this.state.welcome),"data-text":"Welcome, Master Jedi"},"Welcome, Master Jedi."),r.a.createElement("div",{className:"thumbprint ".concat(this.state.thumbprint),onClick:function(){e.handleFingerPrint()}},r.a.createElement("img",{src:"./fingerprint.png",alt:"fingerprint"})),r.a.createElement("h2",{"data-text":"Tap to receive briefing",className:"briefing ".concat(this.state.briefing)},"Tap to receive briefing")),r.a.createElement("main",{className:"crawl-text-wrapper ".concat(this.state.showCrawl),"aria-label":"post-login-screen"},!this.props.loading&&this.props.film.opening_crawl&&r.a.createElement(v,{crawl:this.props.film.opening_crawl,title:this.props.film.title,id:this.props.film.episode_id}),this.props.loading&&r.a.createElement(b,null)),r.a.createElement(f,{errorState:this.state.error}))}}]),t}(n.Component)),w=(a(36),function(e){var t,a=e.handleSelection,n=e.buttonName;return t=e.currentSelection===n?"button-selected":"",r.a.createElement("div",{className:"nav-button ".concat(t),onClick:function(){a(n)},"aria-label":"navigation-button"},r.a.createElement("h3",{"data-text":n,className:"nav-button-text"},n))}),E={"Sand Crawler":"./sandcrawler.png","T-16 skyhopper":"./t16skyhopper.png","X-34 landspeeder":"./x34landspeeder.png","TIE/LN starfighter":"./tiefighter.png",Snowspeeder:"./snowspeeder.png","TIE bomber":"./tiebomber.png","AT-AT":"./atat.png","AT-ST":"./atst.png","Storm IV Twin-Pod cloud car":"./cloudcar.png","Sail barge":"./sailbarge.png",Alderaan:"./alderaan.png","Yavin IV":"./yavin4.png",Hoth:"./hoth.png",Dagobah:"./dagobah.png",Bespin:"./bespin.png",Endor:"./endor.png",Naboo:"./naboo.png",Coruscant:"./coruscant.png",Kamino:"./kamino.png",Geonosis:"./geonosis.png","Luke Skywalker":"./luke.png","Darth Vader":"./darthvader.png","Leia Organa":"./leia.png","Owen Lars":"./owen.png","Beru Whitesun lars":"./beru.png","C-3PO":"./c3p0.png","R2-D2":"./r2d2.png","R5-D4":"./r5d4.png","Biggs Darklighter":"./bigg.png","Obi-Wan Kenobi":"./obiwan.png","Available Memory":""},N=(a(38),function(e){var t,a=e.data,n=e.toggleFavorite;t=a.favorite?"favorited":"";var c=a.info.map(function(e){return r.a.createElement("p",{key:Object.keys(e)[0]},Object.keys(e)[0],": ",r.a.createElement("span",null,e[Object.keys(e)[0]]))});return r.a.createElement("article",{"aria-label":"item-profile-card",className:"card-wrapper",onClick:function(){n(a)}},r.a.createElement("article",{className:"figure","aria-label":"card-front"},r.a.createElement("div",{className:"marked-icon-wrapper"},r.a.createElement("div",{className:"favorite-count-wrapper"},r.a.createElement("i",{className:"fas fa-journal-whills ".concat(t)}))),r.a.createElement("img",{className:"card-image",src:E[a.name],alt:a.name}),r.a.createElement("section",{className:"caption ".concat(t),"aria-label":"card-back"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"card-title"},a.name),r.a.createElement("div",{className:"favorite-icon"})),r.a.createElement("div",{className:"card-content"},c,r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("i",{className:"fab fa-jedi-order favorite-icon"}))))))}),x=(a(40),function(e){var t,a,n=e.selection,c=e.totalFavorites;return t="people"===n?"Persons of Interest":"planets"===n?"Locations of Interest":"vehicles"===n?"Available Conveyance":"saved"===n?"Saved items":"",a="saved"===n?"tap to remove data":"tap to save data",r.a.createElement("div",{className:"card-centerpiece","aria-label":"section-label"},r.a.createElement("div",{className:"fav-total-wrapper"},r.a.createElement("i",{className:"fas fa-journal-whills total-fav-icon","aria-label":"saved-items-icon"}),r.a.createElement("h4",{className:"fav-count-display","aria-label":"saved-items-count"},c)),r.a.createElement("i",{className:"fab fa-jedi-order centerpiece-icon","aria-label":"jedi-order-icon"}),r.a.createElement("h3",{className:"centerpiece-text"},t),r.a.createElement("p",{className:"centerpiece-fav-text"},a))}),k=(a(42),function(e){var t,a,n=e.data,c=e.selection,o=e.toggleFavorite,l=e.error,s=e.loading,i=e.totalFavorites,u=n.map(function(e){return r.a.createElement(N,{data:e,key:e.name,toggleFavorite:o})});return l?t=r.a.createElement(f,null):s?t=r.a.createElement(b,null):(t=u,a=r.a.createElement(x,{selection:c,totalFavorites:i})),r.a.createElement("div",{className:"card-container","aria-label":"card-container"},t,a)}),y=(a(44),function(e){var t=e.hamburgerChange,a=e.status;return r.a.createElement("section",{className:"lightsaburger",onClick:function(){t()},"aria-label":"menu-button"},r.a.createElement("div",{className:"top ".concat(a.topToggled)},r.a.createElement("div",{className:"top-blade blade ".concat(a.topBladeToggled)}),r.a.createElement("div",{className:"top-grip grip ".concat(a.gripToggled)})),r.a.createElement("div",{className:"middle ".concat(a.middleToggled)},r.a.createElement("div",{className:"middle-grip grip ".concat(a.gripToggled)}),r.a.createElement("div",{className:"middle-blade blade ".concat(a.middleBladeToggled)})),r.a.createElement("div",{className:"bottom ".concat(a.bottomToggled)},r.a.createElement("div",{className:"bottom-blade blade ".concat(a.bottomBladeToggled)}),r.a.createElement("div",{className:"bottom-grip grip ".concat(a.gripToggled)})))}),O=a(59),P=(a(46),function(e){var t=e.currentSelection,a=e.handleSelection,n=e.hamburger;return r.a.createElement("aside",{className:"modal-buttons-wrapper ".concat(n.status),"aria-label":"mobile-navigation-section"},r.a.createElement(O.a,{to:"SWAPIBox/people",className:"nav-button people"},r.a.createElement(w,{currentSelection:t,buttonName:"people",handleSelection:a})),r.a.createElement(O.a,{to:"/SWAPIBox/planets",className:"nav-button planets"},r.a.createElement(w,{currentSelection:t,buttonName:"planets",handleSelection:a})),r.a.createElement(O.a,{to:"/SWAPIBox/vehicles",className:"nav-button vehicles"},r.a.createElement(w,{currentSelection:t,buttonName:"vehicles",handleSelection:a})),r.a.createElement(O.a,{to:"/SWAPIBox/favorites",className:"nav-button favorites"},r.a.createElement(w,{currentSelection:t,buttonName:"saved",handleSelection:a})))}),j=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),I=function e(){var t=this;Object(p.a)(this,e),this.fetchVehicles=Object(u.a)(i.a.mark(function e(){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t.fetchCall("https://swapi.co/api/vehicles/");case 3:return a=e.sent,n=t.cleanVehicles(a),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)})),this.cleanVehicles=function(e){return e.results.map(function(e){return{name:e.name,info:[{model:e.model},{class:e.vehicle_class},{passengers:e.passengers}],favorite:!1,category:"vehicles"}})},this.fetchCall=j},C=function e(){var t=this;Object(p.a)(this,e),this.fetchPlanets=Object(u.a)(i.a.mark(function e(){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t.fetchCall("https://swapi.co/api/planets/");case 3:return a=e.sent,e.next=6,t.fetchResidents(a.results);case 6:return n=e.sent,r=t.cleanPlanets(n),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)})),this.cleanPlanets=function(e){return e.map(function(e){return{name:e.name,info:[{terrain:e.terrain},{population:e.population},{climate:e.climate},{residents:e.residents.join(", ")}],favorite:!1,category:"planets"}})},this.fetchResidents=function(e){var a=e.map(function(){var e=Object(u.a)(i.a.mark(function e(a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.residents.map(function(){var e=Object(u.a)(i.a.mark(function e(a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCall(a);case 2:return n=e.sent,e.abrupt("return",n.name);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(n);case 3:return(r=e.sent).length>=1?a.residents=r:a.residents=["none"],e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());return Promise.all(a)},this.fetchCall=j},T=function e(){var t=this;Object(p.a)(this,e),this.fetchPeople=Object(u.a)(i.a.mark(function e(){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t.fetchCall("https://swapi.co/api/people/");case 3:return a=e.sent,e.next=6,t.fetchHomeWorld(a.results);case 6:return n=e.sent,e.next=9,t.fetchSpecies(n);case 9:return r=e.sent,e.abrupt("return",t.cleanPeople(r));case 11:case"end":return e.stop()}},e,this)})),this.cleanPeople=function(e){return e.map(function(e){return{name:e.name,info:[{homeworld:e.homeworld},{language:e.language},{species:e.species},{population:e.population}],favorite:!1,category:"people"}})},this.fetchHomeWorld=function(){var e=Object(u.a)(i.a.mark(function e(a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(function(){var e=Object(u.a)(i.a.mark(function e(a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCall(a.homeworld);case 2:return n=e.sent,a.homeworld=n.name,a.population=n.population,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(n));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchSpecies=function(){var e=Object(u.a)(i.a.mark(function e(a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(function(){var e=Object(u.a)(i.a.mark(function e(a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCall(a.species);case 2:return n=e.sent,a.species=n.name,a.language=n.language,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(n));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchCall=j},F={closed:{status:"closed",topToggled:"",middleToggled:"",bottomToggled:"",topBladeToggled:"",middleBladeToggled:"",bottomBladeToggled:"",gripToggled:""},deployed:{status:"deployed",topToggled:"top-toggled",middleToggled:"middle-toggled",bottomToggled:"bottom-toggled",topBladeToggled:"top-blade-toggled",middleBladeToggled:"middle-blade-toggled",bottomBladeToggled:"bottom-blade-toggled",gripToggled:"grip-toggled"}},W=a(58),B=a(56),J=(a(51),function(e){var t=e.location;return r.a.createElement("section",{className:"no-match","aria-label":"404-error"},r.a.createElement("h3",{className:"bad-path-message"},"There is no entry within the archives for ",t.pathname))}),D=(a(53),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).checkURL=function(){"/people"===window.location.pathname?(e.callFetchPeople(),e.setReady()):"/planets"===window.location.pathname?(e.callFetchPlanets(),e.setReady()):"/vehicles"===window.location.pathname?(e.callFetchVehicles(),e.setReady()):"/favorites"===window.location.pathname?(e.setState({currentSelection:"saved",loading:!1,error:!1}),e.setReady()):"/"!==window.location.pathname&&e.setReady()},e.setReady=function(){"/people"===window.location.pathname?e.setState({ready:!0,login:"",currentSelection:"people"}):"/planets"===window.location.pathname?e.setState({ready:!0,login:"",currentSelection:"planets"}):"/vehicles"===window.location.pathname?e.setState({ready:!0,login:"",currentSelection:"vehicles"}):e.setState({ready:!0,login:""})},e.loginWarning=function(){e.setState({login:"display-login"})},e.checkStorage=function(){e.setState({favorites:JSON.parse(localStorage.getItem("favorites"))||[],planets:JSON.parse(localStorage.getItem("planets"))||[],vehicles:JSON.parse(localStorage.getItem("vehicles"))||[],people:JSON.parse(localStorage.getItem("people"))||[]})},e.crawlCall=function(){localStorage.films?e.getFilms():e.fetchFilms()},e.getFilms=function(){var t=JSON.parse(localStorage.getItem("films")),a=Math.floor(Math.random()*t.count);e.setState({openingCrawl:t.results[a],loading:!1,error:!1})},e.fetchFilms=Object(u.a)(i.a.mark(function t(){var a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://swapi.co/api/films/",t.prev=1,t.next=4,e.state.fetchCall("https://swapi.co/api/films/");case 4:a=t.sent,n=Math.floor(Math.random()*a.count),e.setState({openingCrawl:a.results[n],loading:!1,error:!1}),localStorage.setItem("films",JSON.stringify(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState({error:!0,currentSelection:""});case 13:case"end":return t.stop()}},t,this,[[1,10]])})),e.hamburgerChange=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("closed"!==e.state.hamburger.status||!e.state.ready){t.next=5;break}return t.next=3,e.setState({hamburger:e.state.hamburgerHelper.deployed,buttons:"deploy-buttons",login:""});case 3:t.next=12;break;case 5:if("deployed"!==e.state.hamburger.status||!e.state.ready){t.next=10;break}return t.next=8,e.setState({hamburger:e.state.hamburgerHelper.closed,buttons:"hide-buttons",login:""});case 8:t.next=12;break;case 10:return t.next=12,e.loginWarning();case 12:case"end":return t.stop()}},t,this)})),e.handleSelection=function(t){t!==e.state.currentSelection&&window.innerWidth<476&&e.setState({hamburger:e.state.hamburgerHelper.closed}),"people"===t?e.callFetchPeople():"vehicles"===t?e.callFetchVehicles():"planets"===t?e.callFetchPlanets():e.setState({currentSelection:"saved",loading:!1,error:!1})},e.toggleFavorite=function(t){if(e.toggleFavoriteInDatabase(t),e.state.favorites.find(function(e){return t.name===e.name}))e.removeFavorite(t);else{t.favorite=!0;var a=Object(l.a)(e.state.favorites).concat([t]);localStorage.setItem("favorites",JSON.stringify(a)),e.setState({favorites:a,planets:JSON.parse(localStorage.getItem("planets"))||[],vehicles:JSON.parse(localStorage.getItem("vehicles"))||[],people:JSON.parse(localStorage.getItem("people"))||[]})}},e.toggleFavoriteInDatabase=function(e){var t=JSON.parse(localStorage.getItem(e.category)),a=t.find(function(t){return e.name===t.name});a.favorite=!a.favorite,localStorage.setItem(e.category,JSON.stringify(t))},e.removeFavorite=function(t){var a=e.state.favorites.filter(function(e){return e.name!==t.name});localStorage.setItem("favorites",JSON.stringify(a)),e.setState({favorites:a,planets:JSON.parse(localStorage.getItem("planets"))||[],vehicles:JSON.parse(localStorage.getItem("vehicles"))||[],people:JSON.parse(localStorage.getItem("people"))||[]})},e.callFetchVehicles=function(){localStorage.vehicles?e.pullVehicleData():(e.setState({loading:!0}),e.fetchVehicleData())},e.pullVehicleData=function(){var t=localStorage.getItem("vehicles"),a=JSON.parse(t);e.setState({vehicles:a,currentSelection:"vehicles",loading:!1,error:!1})},e.fetchVehicleData=Object(u.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.state.fetchVehicles.fetchVehicles();case 3:a=t.sent,e.setState({vehicles:a,currentSelection:"vehicles",loading:!1,error:!1}),localStorage.setItem("vehicles",JSON.stringify(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0,currentSelection:""});case 11:case"end":return t.stop()}},t,this,[[0,8]])})),e.callFetchPeople=function(){localStorage.people?e.pullPeopleData():(e.setState({loading:!0}),e.fetchPeopleData())},e.pullPeopleData=function(){var t=localStorage.getItem("people"),a=JSON.parse(t);e.setState({people:a,currentSelection:"people",loading:!1,error:!1})},e.fetchPeopleData=Object(u.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.state.fetchPeople.fetchPeople();case 3:a=t.sent,e.setState({people:a,currentSelection:"people",loading:!1,error:!1}),localStorage.setItem("people",JSON.stringify(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0,currentSelection:""});case 11:case"end":return t.stop()}},t,this,[[0,8]])})),e.callFetchPlanets=function(){localStorage.planets?e.pullPlanetData():(e.setState({loading:!0}),e.fetchPlanetData())},e.pullPlanetData=function(){var t=localStorage.getItem("planets"),a=JSON.parse(t);e.setState({planets:a,currentSelection:"planets",loading:!1,error:!1})},e.fetchPlanetData=Object(u.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.state.fetchPlanets.fetchPlanets();case 3:a=t.sent,e.setState({planets:a,currentSelection:"planets",loading:!1,error:!1}),localStorage.setItem("planets",JSON.stringify(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0});case 11:case"end":return t.stop()}},t,this,[[0,8]])})),e.state={ready:!1,currentSelection:"",openingCrawl:{},people:[],vehicles:[],planets:[],error:!1,loading:!0,fetchCall:j,fetchVehicles:new I,fetchPeople:new T,fetchPlanets:new C,favorites:JSON.parse(localStorage.getItem("favorites"))||[],hamburger:F.closed,hamburgerHelper:F,buttons:"hide-buttons",login:""},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.crawlCall(),this.checkStorage(),this.checkURL()}},{key:"componentDidUpdate",value:function(){var e=this;window.onpopstate=function(t){e.checkURL()}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"button-section","aria-label":"navigation-section-wrapper"},r.a.createElement("header",null,r.a.createElement(y,{hamburgerChange:this.hamburgerChange,status:this.state.hamburger}),r.a.createElement("section",{className:"modal-wrapper","aria-label":"mobile-navigation-section"},r.a.createElement(P,{hamburger:this.state.hamburger,currentSelection:this.state.currentSelection,handleSelection:this.handleSelection})),r.a.createElement("h4",{className:"please-login ".concat(this.state.login)},"Please login to access the archives"),r.a.createElement("section",{className:"button-wrapper ".concat(this.state.buttons),"aria-label":"navigation"},r.a.createElement(O.a,{to:"/SWAPIBox/people",className:"nav-button people"},r.a.createElement(w,{currentSelection:this.state.currentSelection,buttonName:"people",handleSelection:this.handleSelection})),r.a.createElement(O.a,{to:"/SWAPIBox/planets",className:"nav-button planets"},r.a.createElement(w,{currentSelection:this.state.currentSelection,buttonName:"planets",handleSelection:this.handleSelection})),r.a.createElement(O.a,{to:"/SWAPIBox/vehicles",className:"nav-button vehicles"},r.a.createElement(w,{currentSelection:this.state.currentSelection,buttonName:"vehicles",handleSelection:this.handleSelection})),r.a.createElement(O.a,{to:"/SWAPIBox/favorites",className:"nav-button favorites"},r.a.createElement(w,{currentSelection:this.state.currentSelection,buttonName:"saved",handleSelection:this.handleSelection}))))),r.a.createElement(W.a,null,r.a.createElement(B.a,{exact:!0,path:"/SWAPIBox",render:function(){return r.a.createElement(S,{film:e.state.openingCrawl,setReady:e.setReady,error:e.state.error,loading:e.state.error,hamburgerChange:e.hamburgerChange,hamburger:e.state.hamburger})}}),r.a.createElement(B.a,{exact:!0,path:"/SWAPIBox/people",render:function(){return r.a.createElement(k,{data:e.state.people,selection:e.state.currentSelection,toggleFavorite:e.toggleFavorite,error:e.state.error,loading:e.state.loading,totalFavorites:e.state.favorites.length})}}),r.a.createElement(B.a,{exact:!0,path:"/SWAPIBox/planets",render:function(){return r.a.createElement(k,{data:e.state.planets,selection:e.state.currentSelection,toggleFavorite:e.toggleFavorite,error:e.state.error,loading:e.state.loading,totalFavorites:e.state.favorites.length})}}),r.a.createElement(B.a,{exact:!0,path:"/SWAPIBox/vehicles",render:function(){return r.a.createElement(k,{data:e.state.vehicles,selection:e.state.currentSelection,toggleFavorite:e.toggleFavorite,error:e.state.error,loading:e.state.loading,totalFavorites:e.state.favorites.length})}}),r.a.createElement(B.a,{exact:!0,path:"/SWAPIBox/favorites",render:function(){return r.a.createElement(k,{data:e.state.favorites,selection:e.state.currentSelection,toggleFavorite:e.toggleFavorite,error:e.state.error,loading:e.state.loading,totalFavorites:e.state.favorites.length})}}),r.a.createElement(B.a,{render:function(){return r.a.createElement(J,{location:window.location})}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(57),R=r.a.createElement(A.a,null,r.a.createElement(D,null));o.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.1080b0a9.chunk.js.map