(window.webpackJsonpforeignexchange=window.webpackJsonpforeignexchange||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);a(77);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(82),a(6)),i=a(10),u=a(7),l=a(8),p=a(9),h=(a(83),a(35)),d=a(24),m=a(127),b=function(){return n.createElement(m.a,{variant:"dark",bg:"dark",expand:"lg"},n.createElement(m.a.Brand,{as:h.b,to:"/foreignexchange/"},"David's Foreign Exchange"))},f=a(18),v=a.n(f),k=a(27),g=a(71),y=a.n(g),E="https://api.exchangeratesapi.io";function O(e){return y.a.get("".concat(E,"/latest?base=").concat(e)).then(function(e){return e.data})}var w=a(126),C=a(125),x=a(73),j=a(129),S=a(75),D=a(72);function B(e){var t="";switch(e){case"USD":t="United States Dollar";break;case"CAD":t="Canadian Dollar";break;case"IDR":t="Indonesian Rupiah";break;case"GBP":t="Pound Sterling";break;case"CHF":t="Swiss Franc";break;case"SGD":t="Singapore Dollar";break;case"INR":t="Indian Rupee";break;case"MYR":t="Malaysian Ringgit";break;case"JPY":t="Japan Yen";break;case"KRW":t="South Korean Won";break;case"HKD":t="Hong Kong Dollar";break;case"ISK":t="Icelandic Crona";break;case"PHP":t="Philipines Peso";break;case"DKK":t="Danish Krone";break;case"HUF":t="Hungarian Forint";break;case"CZK":t="Czech Koruna";break;case"RON":t="Romanian Leu";break;case"SEK":t="Swedish Krona";break;case"BRL":t="Brazilian Real";break;case"RUB":t="Russian Ruble";break;case"HRK":t="Croatian Kuna";break;case"THB":t="Thai Baht";break;case"EUR":t="Euro";break;case"BGN":t="Bulgarian Lev";break;case"TRY":t="Turkish Lira";break;case"NOK":t="Norwegian Krone";break;case"CNY":t="Chinese Yuan";break;case"NZD":t="New Zealand Dollar";break;case"ZAR":t="South African Rand";break;case"MXN":t="Mexican Peso";break;case"AUD":t="Australian Dollar";break;case"ILS":t="Israeli New Shekel";break;case"PLN":t="Poland Zloty"}return t}function R(e){return Object(D.formatMoney)(e,"",4,",",".")}var K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.onBaseChange(e.value)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.baseOptions.map(function(e){return{label:e,value:e}}),t={label:this.props.base,value:this.props.base};return n.createElement("div",null,n.createElement(C.a,{style:{marginBottom:"10px"}},n.createElement(x.a,{xs:6,md:3},n.createElement(S.a,{options:e,value:t,onChange:this.onChange}))),n.createElement(C.a,null,n.createElement(x.a,{xs:8},n.createElement("h4",null,this.props.base+" - "+B(this.props.base))),n.createElement(x.a,{xs:4},n.createElement(j.a.Control,{type:"number",value:this.props.amount,name:"quantity",onChange:this.props.onChange,className:"float-right",style:{borderRadius:"3px"}}))))}}]),t}(n.Component),N=a(130),A=a(131),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).formatKeyName=function(e){return e+" - "+B(e)},a.formatDesc=function(e,t){return"1 ".concat(e," = ").concat(t.id," ").concat(R(t.rate))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cart,a=this.props.base;return n.createElement(N.a,{style:{marginBottom:"10px",marginTop:"10px"}},n.createElement(N.a.Body,null,n.createElement(N.a.Title,null,t.id),n.createElement("span",{className:"float-right"},n.createElement(N.a.Title,null,R(t.value))),n.createElement(N.a.Subtitle,null,this.formatKeyName(t.id)),n.createElement(N.a.Text,null,this.formatDesc(a,t)),n.createElement(A.a,{variant:"danger",onClick:function(){e.props.onDelete(t.id)}},"Delete")))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement(A.a,{onClick:this.props.onClick,variant:"secondary",size:"lg",block:!0},"Add More Currency")}}]),t}(n.Component),P=a(128),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={checkeds:[]},a.componentWillReceiveProps=function(e){e.show!==a.props.show&&a.setState({checkeds:[]})},a.onSelect=function(e){var t,n=a.state.checkeds;e.target.checked?n.push(e.target.value):(t=n.indexOf(e.target.value),n.splice(t,1)),a.setState({checkeds:n})},a.render=function(){var e=[];for(var t in a.props.rates)a.props.rates.hasOwnProperty(t)&&e.push(n.createElement(x.a,{xs:12,md:6},n.createElement(j.a.Check,{onChange:a.onSelect,id:t,value:t,custom:!0,type:"checkbox",label:"".concat(t," - ").concat(B(t))})));return n.createElement(P.a,{onHide:a.props.onHide,show:a.props.show,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},n.createElement(P.a.Header,{closeButton:!0},n.createElement(P.a.Title,{id:"contained-modal-title-vcenter"},"Add New Currency")),n.createElement(P.a.Body,null,n.createElement(w.a,null,n.createElement(C.a,{className:"show-grid"},e))),n.createElement(P.a.Footer,null,n.createElement(A.a,{variant:"primary",onClick:function(){return a.props.onSubmit(a.state.checkeds)}},"Add Selected Currencies")))},a}return Object(p.a)(t,e),t}(n.Component),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={currency:{},cart:[],amount:10,addModalShow:!1,base:"USD",baseOptions:[]},a.populateCurrency=function(){var e=Object(k.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a.state.base).then(function(e){return a.setState({currency:e})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.populateBaseOptions=function(){var e=[];for(var t in a.state.currency.rates)e.push(t);a.setState({baseOptions:e})},a.calculate=function(){var e=a.state.cart.map(function(e){return e.rate=a.state.currency.rates[e.id],e.value=a.state.currency.rates[e.id]*a.state.amount,e});a.setState({cart:e})},a.handleBaseChange=function(){var e=Object(k.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({base:t});case 2:return e.next=4,a.populateCurrency(a.state.base);case 4:a.calculate();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(){var e=Object(k.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({amount:t.target.value});case 2:a.calculate();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.openAddModal=function(){a.setState({addModalShow:!0})},a.closeAddModal=function(){a.setState({addModalShow:!1})},a.addCurrencies=function(){var e=Object(k.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.cart,t.forEach(function(e){0===n.filter(function(t){return t.id===e}).length&&n.push({id:e,name:B(e),rate:a.state.currency.rates[e],value:0})}),e.next=4,a.setState({cart:n});case 4:a.calculate(),a.closeAddModal();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteCurrencies=function(){var e=Object(k.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(n=a.state.cart).filter(function(e){return e.id!==t}),e.next=4,a.setState({cart:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateCurrency(this.state.base);case 2:this.populateBaseOptions();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.currency,r=t.cart;return n.createElement(w.a,null,n.createElement(C.a,null,n.createElement(x.a,{xs:!0,md:{span:6,offset:3}},n.createElement(K,{base:this.state.base,baseOptions:this.state.baseOptions,onBaseChange:this.handleBaseChange,amount:this.state.amount,onChange:this.onInputChange}),r.map(function(t){return n.createElement(M,{cart:t,base:a.base,onDelete:e.deleteCurrencies})}))),n.createElement(C.a,{style:{marginTop:"20px"}},n.createElement(x.a,{xs:!0,md:{span:6,offset:3}},n.createElement(H,{onClick:this.openAddModal}))),n.createElement(I,{rates:this.state.currency.rates,show:this.state.addModalShow,onHide:this.closeAddModal,onSubmit:this.addCurrencies}))}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="David's Foreign Exchange"}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement(d.a,{exact:!0,path:"/foreignexchange/",component:T}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a(123)},82:function(e,t,a){},83:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.24a84839.chunk.js.map