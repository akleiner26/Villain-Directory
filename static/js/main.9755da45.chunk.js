(this["webpackJsonpvillain-directory"]=this["webpackJsonpvillain-directory"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"The Joker","image":"images/theJoker.jpeg","firstAppearance":1940,"alias":"Jack Napier","ability":"Criminal Mastermind"},{"id":2,"name":"Ra\'s Al Ghul","image":"images/rasAlGhul.jpg","firstAppearance":1971,"alias":"The Demon\'s Head","ability":"Criminal Mastermind"},{"id":3,"name":"Red Hood","image":"images/redHood.jpg","firstAppearance":1951,"alias":"Jason Todd","ability":"Expert Marksman"},{"id":4,"name":"Catwoman","image":"images/catwoman.jpg","firstAppearance":1940,"alias":"The Cat","ability":"Expert Burglar"},{"id":5,"name":"Two Face","image":"images/twoFace.jpg","firstAppearance":1942,"alias":"Harvey Dent","ability":"Criminal Mastermind"},{"id":6,"name":"Harley Quinn","image":"images/harleyQuinn.jpg","firstAppearance":1992,"alias":"The Cupid of Crime","ability":"Utilizes Weaponized Props"},{"id":7,"name":"The Riddler","image":"images/riddler.jpg","firstAppearance":1948,"alias":"Edward Nigma","ability":"Genius Level Intellect"},{"id":8,"name":"Bane","image":"images/bane.jpg","firstAppearance":1993,"alias":"Unknown","ability":"Superhuman Strength"},{"id":9,"name":"Hugo Strange","image":"images/hugoStrange.jpg","firstAppearance":1940,"alias":"Doctor Todhunter","ability":"Genius Level Intellect"},{"id":10,"name":"Scarecrow","image":"images/scarecrow.jpg","firstAppearance":1941,"alias":"Jonathan Crane","ability":"Utilizes Fear Inducing Gas and Toxins"},{"id":11,"name":"Mr. Freeze","image":"images/freeze.jpeg","firstAppearance":1959,"alias":"Victor Fries","ability":"Utilizes Cryogenic Weaponry"},{"id":12,"name":"Talia Al Ghul","image":"images/taliaAlGhul.jpg","firstAppearance":1971,"alias":"Leviathan","ability":"Resurrection"},{"id":13,"name":"Penguin","image":"images/penguin.jpg","firstAppearance":1941,"alias":"Oswald Chesterfield Cobblepot","ability":"Criminal Mastermind"},{"id":14,"name":"Poison Ivy","image":"images/poisonIvy.jpg","firstAppearance":1966,"alias":"Paula Irving","ability":"Weaponized Botany"},{"id":15,"name":"Clayface","image":"images/clayface.jpg","firstAppearance":1940,"alias":"Basil Karlo","ability":"Shapeshifting"},{"id":16,"name":"Black Mask","image":"images/blackMask.jpeg","firstAppearance":1985,"alias":"Roman Sionis","ability":"Criminal Mastermind"},{"id":17,"name":"Killer Croc","image":"images/killerCroc.jpg","firstAppearance":1983,"alias":"Waylon Jones","ability":"Enhanced Strength"}]')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),l=t(5),r=t.n(l),s=(t(11),t(1)),c=t(2);t(12);var m=function(e){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid header"},n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"row"},n.a.createElement("h4",{className:"col-3 batman"},"Batman Villain Database"),n.a.createElement("div",{className:"col-6 col-md-0"}),n.a.createElement("img",{className:"logo col-3",src:"images/batmanLogo.jpg",alt:"Batman Logo"}))))};t(13);var o=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};t(14),t(15);var d=function(e){return console.log(e.image),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:e.image,alt:e.name})),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.firstAppearance),n.a.createElement("td",null,e.alias),n.a.createElement("td",null,e.ability))};var p=function(e){return n.a.createElement("table",{className:"table scroll table-striped table-dark"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",null,"Photo"),n.a.createElement("th",{className:"nameHead",onClick:e.sortByName},"Name",n.a.createElement("i",{id:"down",className:"fa fa-caret-down aFirst","aria-hidden":"true"}),n.a.createElement("i",{id:"up",className:"fa fa-caret-up zFirst","aria-hidden":"true"})),n.a.createElement("th",{onClick:e.sortByYear},"First Appearance ",n.a.createElement("i",{id:"numDown",className:"fa fa-caret-down aFirst","aria-hidden":"true"}),n.a.createElement("i",{id:"numUp",className:"fa fa-caret-up zFirst","aria-hidden":"true"})),n.a.createElement("th",{onClick:e.sortByAlias},"Alias ",n.a.createElement("i",{id:"aliasDown",className:"fa fa-caret-down aFirst","aria-hidden":"true"}),n.a.createElement("i",{id:"aliasUp",className:"fa fa-caret-up zFirst","aria-hidden":"true"})),n.a.createElement("th",{onClick:e.sortByAbility},"Abilities ",n.a.createElement("i",{id:"abilityDown",className:"fa fa-caret-down aFirst","aria-hidden":"true"}),n.a.createElement("i",{id:"abilityUp",className:"fa fa-caret-up zFirst","aria-hidden":"true"})))),n.a.createElement("tbody",null,e.villains.map((function(e){return n.a.createElement(d,{key:e.id,image:e.image,name:e.name,firstAppearance:e.firstAppearance,alias:e.alias,ability:e.ability})}))))};t(16);var u=function(e){return n.a.createElement("section",{className:"cell"},n.a.createElement("input",{type:"text",className:"input col-2 offset-1 align-middle",onChange:e.handleSearch,placeholder:"Search Villain"}))},y=t(3);var g=function(){var e=Object(i.useState)({all:y,filtered:y}),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(i.useState)(""),d=Object(c.a)(r,2),g=d[0],f=d[1],b=Object(i.useState)(""),E=Object(c.a)(b,2),h=E[0],j=E[1],A=Object(i.useState)(""),v=Object(c.a)(A,2),C=v[0],B=v[1],w=Object(i.useState)(""),S=Object(c.a)(w,2),k=S[0],N=S[1],I=function(){document.getElementById("up").style.display="none",document.getElementById("down").style.display="none",document.getElementById("numUp").style.display="none",document.getElementById("numDown").style.display="none",document.getElementById("aliasUp").style.display="none",document.getElementById("aliasDown").style.display="none",document.getElementById("abilityUp").style.display="none",document.getElementById("abilityDown").style.display="none"};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement(u,{handleSearch:function(e){var a=t.all.filter((function(a){return a.name.toLowerCase().includes(e.target.value.toLowerCase())}));l(Object(s.a)(Object(s.a)({},t),{},{filtered:a}))}}),n.a.createElement(o,null,n.a.createElement("p",{className:"instructions"},"Click On Column to Sort"),n.a.createElement(p,{villains:t.filtered,sortByName:function(){var e=t.filtered.sort((function(e,a){var t=e.name,i=a.name,n=0;return t>i?n=1:t<i&&(n=-1),n}));"DESC"===g?(e.reverse(),f("ASC"),I(),document.getElementById("up").style.display="block"):(f("DESC"),I(),document.getElementById("down").style.display="block"),l(Object(s.a)(Object(s.a)({},t),{},{sortedNames:e}))},sortByYear:function(){var e=t.filtered.sort((function(e,a){var t=e.firstAppearance,i=a.firstAppearance,n=0;return t>i?n=1:t<i&&(n=-1),n}));"DESC"===h?(e.reverse(),j("ASC"),I(),document.getElementById("numUp").style.display="block"):(j("DESC"),I(),document.getElementById("numDown").style.display="block"),l(Object(s.a)(Object(s.a)({},t),{},{sortedYears:e}))},sortByAlias:function(){var e=t.filtered.sort((function(e,a){var t=e.alias,i=a.alias,n=0;return t>i?n=1:t<i&&(n=-1),n}));"DESC"===C?(e.reverse(),B("ASC"),I(),document.getElementById("aliasUp").style.display="block"):(B("DESC"),I(),document.getElementById("aliasDown").style.display="block"),l(Object(s.a)(Object(s.a)({},t),{},{sortedAlias:e}))},sortByAbility:function(){var e=t.filtered.sort((function(e,a){var t=e.ability,i=a.ability,n=0;return t>i?n=1:t<i&&(n=-1),n}));"DESC"===k?(e.reverse(),N("ASC"),I(),document.getElementById("abilityUp").style.display="block"):(N("DESC"),I(),document.getElementById("abilityDown").style.display="block"),l(Object(s.a)(Object(s.a)({},t),{},{sortedAbilities:e}))}})))};r.a.render(n.a.createElement(g,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.9755da45.chunk.js.map