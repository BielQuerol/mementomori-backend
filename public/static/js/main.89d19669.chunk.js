(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/memento2.99038721.jpg"},33:function(e,t,a){e.exports=a(72)},38:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),i=a(5),o=a(1),s=a(2),u=a(4),m=a(3),h=(a(38),a(6)),p=a(7),d=a.n(p),g=new(function(){function e(){Object(o.a)(this,e),this.auth=d.a.create({baseURL:"https://memento-mori.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/signup",{email:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),E=r.a.createContext(),v=E.Consumer,f=E.Provider,b=function(e){return function(t){Object(u.a)(n,t);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(v,null,(function(a){var n=a.login,l=a.signup,c=a.user,i=a.logout,o=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:l,user:c,logout:i,isLoggedin:o},t.props))}))}}]),n}(r.a.Component)},y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.email,n=t.password;g.signup({email:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.email,n=t.password;g.login({email:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e,"Email or password are incorrect")}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,l=this.login,c=this.logout,i=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(f,{value:{isLoggedin:a,user:n,login:l,logout:c,signup:i}},this.props.children)}}]),a}(r.a.Component),O=(a(56),a(16)),C=a.n(O),j=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"btnavbar"},r.a.createElement("img",{className:"logo",src:C.a,alt:"Logo"})),r.a.createElement("div",{className:"navbarlinks"},r.a.createElement(i.b,{className:"btnavbar",style:{textDecoration:"none"},to:"/userindex"},r.a.createElement("h2",null,"Index")),r.a.createElement(i.b,{className:"btnavbar",style:{textDecoration:"none"},to:"/login"},r.a.createElement("h2",null,"Login")),r.a.createElement(i.b,{className:"btnavbar",style:{textDecoration:"none"},to:"/signup"},r.a.createElement("h2",null,"Signup"))))}}]),a}(n.Component)),w=(a(62),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"startbox"},r.a.createElement("div",{className:"itembox"},r.a.createElement("img",{src:C.a})),r.a.createElement("div",{className:"itembox"},r.a.createElement("h4",null," MEMENTO MORI The webpage to help each other."))))}}]),a}(n.Component)),N=a(13),x=(a(63),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;e.props.signup({email:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(N.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",null,r.a.createElement("form",{className:"box",onSubmit:this.handleFormSubmit},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("input",{type:"text",name:"email",placeholder:"youremail@whatever.com",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"your password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"}),r.a.createElement("p",null,"Already have an account?"),r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/login"}," Login")))}}]),a}(n.Component))),S=(a(64),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;e.props.login({email:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(N.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",null,r.a.createElement("form",{className:"box",onSubmit:this.handleFormSubmit},r.a.createElement("h1",null,"Login"),r.a.createElement("input",{type:"text",name:"email",placeholder:"youremail@whatever.com",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"your password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),a}(n.Component))),k=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Private Route"))}}]),a}(n.Component)),q=a(17);var D=b((function(e){var t=e.component,a=e.isLoggedin,n=Object(q.a)(e,["component","isLoggedin"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(h.a,{to:"/userindex"}):r.a.createElement(t,e)}}))}));var I=b((function(e){var t=e.component,a=e.isLoggedin,n=Object(q.a)(e,["component","isLoggedin"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/login"})}}))})),L=(a(65),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"userbox"},r.a.createElement("div",{className:"useritem"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/helpotherslist"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Help Requests")))),r.a.createElement("div",{className:"useritem"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/userindex/helpmeform"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Help me")))),r.a.createElement("div",{className:"useritem"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/userindex/profile"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Profile")))),r.a.createElement("div",{className:"useritem"}),r.a.createElement("button",{className:"btngrey",onClick:this.props.logout},r.a.createElement("h2",null,"Log out"))))}}]),a}(n.Component))),R=(a(66),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.title,a=n.state.description,r=n.state.city;d.a.post("".concat("https://memento-mori.herokuapp.com","/api/helprequest"),{title:t,description:a,city:r},{withCredentials:!0}).then((function(){n.props.history.push("/userindex")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.state={title:"",description:"",city:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapform"},r.a.createElement("h2",null,"Help me form"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"City:"),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(n.Component))),F=(a(67),a(68),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleChange=function(t){var a=t.target.value;e.setState({search:a}),e.props.filterHelpRequests(a)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.handleChange})}}]),a}(r.a.Component)),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getAllHelpRequests=function(){d.a.get("".concat("https://memento-mori.herokuapp.com","/api/helprequest"),{withCredentials:!0}).then((function(t){t.data.reverse();e.setState({listOfHelpRequests:t.data})}))},e.state={listOfHelpRequests:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllHelpRequests()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},this.state.listOfHelpRequests.map((function(e){return r.a.createElement("div",{key:e._id,className:"probando"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/helpothersdetail/".concat(e._id)},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,e.title))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("p",null,e.city)))))}))))}}]),a}(n.Component))),H=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.senderTel,a=n.state.senderEmail,r=n.state.message,l=n.props.match.params;n.props.requestId;d.a.post("".concat("https://memento-mori.herokuapp.com","/api/sendhelpform/").concat(l.requestId),{senderTel:t,senderEmail:a,message:r},{withCredentials:!0}).then((function(){n.props.history.push("/userindex")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.state={title:"",senderTel:"",senderEmail:"",message:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapform"},r.a.createElement("h2",null,"Sender Form"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"senderEmail",value:this.state.senderEmail,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Phone number:"),r.a.createElement("input",{type:"text",name:"senderTel",value:this.state.senderTel,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"How can I help?"),r.a.createElement("textarea",{name:"message",value:this.state.message,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"submit"}))))}}]),a}(n.Component)),M=(a(69),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getSingleHelpRequest=function(){console.log("Aqu\xed",n.props);var e=n.props.match.params;d.a.get("".concat("https://memento-mori.herokuapp.com","/api/helprequest/").concat(e.requestId),{withCredentials:!0}).then((function(e){console.log(e);var t=e.data,a=t._id,r=t.title,l=t.description,c=t.city;n.setState({_id:a,title:r,description:l,city:c})})).catch((function(e){console.log(e)}))},n.state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getSingleHelpRequest()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,this.state.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,this.state.description)),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("p",null,this.state.city))))),r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/helpothersdetail/senderform/".concat(this.state._id)},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"I can help"))),r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/helpotherslist"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Help requests"))))}}]),a}(n.Component))),T=d.a.create({baseURL:"".concat("https://memento-mori.herokuapp.com","/api"),withCredentials:!0}),_=function(e){throw e},P=function(e){return T.post("/upload",e).then((function(e){return e.data})).catch(_)},A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){var t=n.state.email,a=n.state.password,r=n.state.userImage;e.preventDefault(),d.a.put("".concat("https://memento-mori.herokuapp.com","/api/users"),{email:t,password:a,userImage:r},{withCredentials:!0}).then((function(){n.props.history.push("/userindex/profile")})).catch((function(e){return console.log(e)}))},n.handleChangeEmail=function(e){n.setState({email:e.target.value})},n.handleChangePassword=function(e){n.setState({password:e.target.value})},n.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("userImage",e.target.files[0]),P(t).then((function(e){console.log(e),n.setState({userImage:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},n.state={email:"",password:"",userImage:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("".concat("https://memento-mori.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){console.log(t);var a=t.data,n=a.email,r=a.password,l=a.userImage,c=a._id;e.setState({email:n,password:r,userImage:l,_id:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapform"},r.a.createElement("h2",null,"Edit profile"),r.a.createElement("img",{src:this.state.userImage}),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChangeEmail(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"text",name:"password",value:"",onChange:function(t){return e.handleChangePassword(t)}}),r.a.createElement("label",null,"Profile Picture"),r.a.createElement("input",{type:"file",name:"userImage",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{className:"btngrey",type:"submit",value:"submit"},r.a.createElement("h2",null,"Submit"))))," ",r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/userindex/profile"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Profile"))))}}]),a}(n.Component),U=Object(h.g)(b(A)),J=(a(70),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){var t=n.state.title,a=n.state.description,r=n.state.city;e.preventDefault();var l=n.props.match.params;d.a.put("".concat("https://memento-mori.herokuapp.com","/api/helprequest/").concat(l.requestId),{title:t,description:a,city:r},{withCredentials:!0}).then((function(){n.props.history.push("/helpotherslist")})).catch((function(e){return console.log(e)}))},n.handleChangeTitle=function(e){n.setState({title:e.target.value})},n.handleChangeDescription=function(e){n.setState({description:e.target.value})},n.handleChangeCity=function(e){n.setState({city:e.target.value})},n.deleteHelpRequest=function(){var e=n.props.match.params;d.a.delete("".concat("https://memento-mori.herokuapp.com","/api/helprequest/").concat(e.requestId),{withCredentials:!0}).then((function(){n.props.history.push("/helpotherslist")})).catch((function(e){console.log(e)}))},n.state={title:"",description:"",city:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;d.a.get("".concat("https://memento-mori.herokuapp.com","/api/helprequest/").concat(t.requestId),{withCredentials:!0}).then((function(t){console.log(t);var a=t.data,n=a._id,r=a.title,l=a.description,c=a.city;e.setState({_id:n,title:r,description:l,city:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapform"},r.a.createElement("h2",null,"Edit form"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChangeTitle(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChangeDescription(t)}}),r.a.createElement("label",null,"City:"),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChangeCity(t)}}),r.a.createElement("h2",null,r.a.createElement("input",{type:"submit",value:"Submit"})))),r.a.createElement("button",{className:"btngrey",onClick:function(){return e.deleteHelpRequest()}},r.a.createElement("h2",null,"Delete")))}}]),a}(n.Component))),B=(a(71),b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",userImage:"",helpMeRequests:[],helpOthersRequests:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("".concat("https://memento-mori.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){var a=t.data,n=a.email,r=a.password,l=a.userImage,c=a.helpMeRequests,i=a.helpOthersRequests;e.setState({email:n,password:r,userImage:l,helpMeRequests:c,helpOthersRequests:i})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("div",{className:"hello"},r.a.createElement("img",{className:"profilepic",src:this.state.userImage,alt:"profilepic"}),r.a.createElement("div",{className:"emailitem"},r.a.createElement("h3",null,this.state.email)),this.state.helpMeRequests.map((function(e){return r.a.createElement("div",{key:e._id,className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,e.description)),e.helpMessages.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"Contact message:"),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"Phone contact number:"),r.a.createElement("p",null,e.senderTel)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"Contact email:"),r.a.createElement("p",null,e.senderEmail)))})),r.a.createElement("div",{className:"enlace"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/userindex/helpmeform/edit/".concat(e._id)},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Edit help form")))))})),this.state.helpOthersRequests.map((function(e){return r.a.createElement("div",{className:"hello",key:e._id}," ",r.a.createElement("h3",{className:"letras"},"Helping with:"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",null,e.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("p",null,e.city))))}))," "),r.a.createElement("div",{className:"useritem"},r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/userindex/edit"},r.a.createElement("button",{className:"btngrey"},r.a.createElement("h2",null,"Edit profile")))))}}]),a}(n.Component))),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(h.d,null,r.a.createElement(D,{path:"/signup",component:x}),r.a.createElement(D,{path:"/login",component:S}),r.a.createElement(I,{path:"/private",component:k}),r.a.createElement(D,{exact:!0,path:"/",component:w}),r.a.createElement(I,{exact:!0,path:"/userindex",component:L}),r.a.createElement(I,{exact:!0,path:"/userindex/edit",component:U}),r.a.createElement(I,{exact:!0,path:"/userindex/helpmeform",component:R}),r.a.createElement(I,{exact:!0,path:"/userindex/helpmeform/edit/:requestId",component:J}),r.a.createElement(I,{exact:!0,path:"/helpotherslist",component:F}),r.a.createElement(I,{exact:!0,path:"/helpothersdetail/senderform/:requestId",component:H}),r.a.createElement(I,{exact:!0,path:"/helpothersdetail/:requestId",component:M}),r.a.createElement(I,{exact:!0,path:"/userindex/profile",component:B}))))}}]),a}(n.Component);c.a.render(r.a.createElement(i.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.89d19669.chunk.js.map