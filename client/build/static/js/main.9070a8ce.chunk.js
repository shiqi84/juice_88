(this["webpackJsonpquiz-app-starter"]=this["webpackJsonpquiz-app-starter"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(6),i=a.n(r),l=(a(12),a(1)),o=a(2),c=a(4),m=a(3),u=(s.Component,a(13),a(14),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={trigger:!1,userName:"",email:"",password:"",conformPassword:""},s}return Object(o.a)(a,[{key:"handleChangeUserName",value:function(e){this.setState({userName:e.target.value}),this.props.getUserName(this.state.userName)}},{key:"handleChangePassWord",value:function(e){this.setState({password:e.target.value}),this.props.getPassword(this.state.password)}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value}),this.props.getEmail(this.state.email)}},{key:"handleChangeConfirmPassword",value:function(e){this.setState({conformPassword:e.target.value}),this.props.getConfirm(this.state.conformPassword)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"signUpBoard"},n.a.createElement("label",{className:"SIGNUP"},"SignUp"),n.a.createElement("div",{className:"userInput"},n.a.createElement("label",null,"Email:"),n.a.createElement("input",{type:"text",placeholder:"Enter Email",name:"email",required:!0,onChange:this.handleChangeEmail.bind(this)})),n.a.createElement("div",{className:"userInput"},n.a.createElement("label",null,"UserName:"),n.a.createElement("input",{type:"text",placeholder:"Enter UserName",name:"useName",required:!0,onChange:this.handleChangeUserName.bind(this)})),n.a.createElement("div",{className:"userInput"},n.a.createElement("label",null,"Password:"),n.a.createElement("input",{type:"text",placeholder:"Enter password",name:"password",required:!0,onChange:this.handleChangePassWord.bind(this)})),n.a.createElement("div",{className:"userInput"},n.a.createElement("label",null,"Confirm your pass word:"),n.a.createElement("input",{type:"text",placeholder:"Confirm your password",name:"confirmPassword",required:!0,onChange:this.handleChangeConfirmPassword.bind(this)}))))}}]),a}(s.Component)),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={visible:!1,userName:"",email:"",password:"",confirmPassword:""},s}return Object(o.a)(a,[{key:"getEmail",value:function(e){this.setState({email:e}),console.log("parent email is:"),console.log(this.state.email)}},{key:"getConfirm",value:function(e){this.setState({confirmPassword:e}),console.log("parent confirmpassword is:"),console.log(this.state.confirmPassword)}},{key:"getUserName",value:function(e){this.setState({userName:e}),console.log("parent userName is:"),console.log(this.state.userName)}},{key:"getPassword",value:function(e){this.setState({password:e}),console.log("parent password is:"),console.log(this.state.password)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("button",{onClick:function(){return e.setState({visible:!0})},type:"button",className:"signUp"},"Sign up")),this.state.visible&&n.a.createElement(u,{getEmail:this.getEmail.bind(this),getConfirm:this.getConfirm.bind(this),getPassword:this.getPassword.bind(this),getUserName:this.getUserName.bind(this)}),this.state.visible&&n.a.createElement("div",null," ",n.a.createElement("button",{className:"submit",onClick:function(){return e.submit()}},"submit"),n.a.createElement("button",{className:"cancel",onClick:function(){return e.setState({visible:!1})}},"X")))}}]),a}(s.Component);i.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9070a8ce.chunk.js.map