(this["webpackJsonpexpense-manager"]=this["webpackJsonpexpense-manager"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(13),a(4)),i=a(1),s=a(5);a(14);var m=function(){var e=Object(n.useState)({id:0,description:"",value:"",isSettled:!1,date:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),m=Object(s.a)(r,2),d=m[0],u=m[1],p=Object(n.useState)([]),E=Object(s.a)(p,2),b=E[0],f=E[1];return c.a.createElement("div",{className:"ExpenseManagerApp container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",{style:{padding:"1rem 0"}},"Expense Manager"),c.a.createElement("form",{className:"needs-validation",onSubmit:function(e){e.preventDefault();var t=d+1,n={id:t,description:a.description,value:a.value,isSettled:a.isSettled,date:(new Date).toLocaleDateString()};l(Object(i.a)(Object(i.a)({},a),{},{id:t})),f([].concat(Object(o.a)(b),[n])),u(t)}},c.a.createElement("label",{htmlFor:"formGroupExampleInput",id:"formGroupExampleInput"},"Description"),c.a.createElement("input",{type:"text",value:a.description,onChange:function(e){l(Object(i.a)(Object(i.a)({},a),{},{description:e.target.value}))},id:"validationCustom01",className:"form-control form-control-sm",placeholder:"Expense Description",required:!0}),c.a.createElement("label",{htmlFor:"formGroupExampleInput2",id:"formGroupExampleInput2"},"Value"),c.a.createElement("input",{type:"text",value:a.value,onChange:function(e){l(Object(i.a)(Object(i.a)({},a),{},{value:e.target.value}))},className:"form-control form-control-sm",id:"formGroupInput2",placeholder:"Value in dolla dolla money",required:!0}),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",checked:a.isSettled,onChange:function(){l(Object(i.a)(Object(i.a)({},a),{},{isSettled:!a.isSettled}))},type:"checkbox",id:"gridCheck"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"gridCheck"}," Settled? ")),c.a.createElement("span",{className:"form-text text-muted"}," Settle your bills on time. Maintain a good credit score! "),c.a.createElement("button",{className:"btn btn-primary",type:"submit"}," Record Transaction "),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=b.findIndex((function(e){return e.id===a.id}));if(-1!==t){var n={id:a.id,description:a.description,value:a.value,isSettled:a.isSettled,date:(new Date).toLocaleDateString()};console.log(t);var c=Object(o.a)(b);c.splice(t,1,n),f(Object(o.a)(c))}},type:"submit"}," Update Transaction "))),c.a.createElement("div",{className:"col-6"},c.a.createElement("h3",{style:{padding:"1rem 0"}}," Expense List "),c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Value"),c.a.createElement("th",{scope:"col"},"Status"),c.a.createElement("th",{scope:"col"},"Date"))),c.a.createElement("tbody",null,b&&b.length>0&&b.map((function(e,t){return c.a.createElement("tr",{key:t+1,onClick:function(){return function(e,t,a,n){var c=b.findIndex((function(t){return t.id===e})),r=(new Date).toLocaleDateString();l({id:c+1,description:t,value:a,isSettled:n,newDate:r})}(e.id,e.description,e.value,e.isSettled)}},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",{className:"row-item"},e.description),c.a.createElement("td",{className:"row-item"},e.value),c.a.createElement("td",{className:e.isSettled?"paid":"not-paid"},e.isSettled?"Paid":"Not Paid"),c.a.createElement("td",{className:"row-item"},e.date))})))))))};a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8211f640.chunk.js.map