(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),o=(c(10),c(11),c(3)),i=c.n(o),d=c(0),r=function(e){var t=e.todo,c=e.selectedTodoId,s=e.onTodoSelection,a=t.id,n=t.title,l=t.completed,o=c===a;return Object(d.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":o}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:a}),l?Object(d.jsx)("td",{className:"is-vcentered",children:Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}):Object(d.jsx)("td",{className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:i()({"has-text-danger":!l},{"has-text-success":l}),children:n})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:i()("button",{"is-link":o}),type:"button",onClick:function(){return s(a)},children:Object(d.jsx)("span",{className:"icon",children:o?Object(d.jsx)("i",{className:"far fa-eye-slash"}):Object(d.jsx)("i",{className:"far fa-eye"})})})})]})},j=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onTodoSelection;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(r,{todo:e,selectedTodoId:c,onTodoSelection:s},e.id)}))})]})},b=function(e){var t=e.onSelectionCategory,c=e.searchQuery,s=e.onQueryChange;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},u=(c(13),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),o=a[0],i=a[1],r=Object(l.useCallback)((function(){var e;null!==t&&void 0!==t&&t.id&&(e=t.userId,h("/users/".concat(e))).then(i).catch((function(e){throw new Error(e)}))}),[]);return Object(l.useEffect)((function(){r()}),[o]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),o?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]}):Object(d.jsx)(u,{})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),o=Object(n.a)(a,2),i=o[0],r=o[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],v=x[1],N=Object(l.useState)(""),p=Object(n.a)(N,2),y=p[0],g=p[1],C=c.find((function(e){return e.id===i}))||null,k=Object(l.useCallback)((function(){r(0)}),[]),S=Object(l.useCallback)((function(e){v(e)}),[]),T=Object(l.useCallback)((function(e){g(e)}),[]),w=Object(l.useCallback)((function(e){r(e)}),[]);Object(l.useEffect)((function(){h("/todos").then(s)}),[]);var I=Object(l.useMemo)((function(){return c.filter((function(e){switch(f){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){var t=e.title.toLowerCase(),c=y.toLowerCase();return t.includes(c)}))}),[y,f,c]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{onSelectionCategory:S,searchQuery:y,onQueryChange:T})}),Object(d.jsxs)("div",{className:"block",children:[0===c.length&&Object(d.jsx)(u,{}),Object(d.jsx)(j,{todos:I,selectedTodoId:i,onTodoSelection:w})]})]})})}),i&&Object(d.jsx)(m,{selectedTodo:C,onClose:k})]})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e53c8007.chunk.js.map