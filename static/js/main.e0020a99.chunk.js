(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),c=(a(27),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),p=(a(28),a(41)),h=a(12),d=a.n(h),b=a(40),E=a(17);var g={background:"#000000",textAlign:"justify",padding:"10px"},f={color:"#fff",textDecoration:"none",fontSize:"20px"},y=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("header",{style:g},l.a.createElement(E.a,{style:f,to:"/"},"Home")," ","|"," ",l.a.createElement(E.a,{style:f,to:"/about"},"About")," ","|"," ",l.a.createElement(E.a,{style:f,to:"/projects"},"Projects")," ","|"," ",l.a.createElement(E.a,{style:f,to:"/contact"},"Contact")," "," "," "))};var v=function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"icons"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/benk1"},l.a.createElement("i",{className:"fa fa-github btn btn-dark btn-sm fa-2x"}),l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement("a",{className:"nav-link",href:"http://www.linkedin.com/in/bernard-kakengi-ba2003173"},l.a.createElement("i",{className:"fa fa-linkedin btn btn-dark btn-sm fa-2x"}),l.a.createElement("span",{className:"sr-only"},"(current)"))))},w=function(e){return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("div",{className:"kilimanjaro"},l.a.createElement("div",{className:"text"},l.a.createElement("p",null,l.a.createElement("h3",null,l.a.createElement("span",{className:"highlighted"},"Hey! I'm Bernard!")),"I am a front-end developer, I really enjoy developing Apps using front-end Technologies, since my graduation in University of applied science in Finland-Helsinki, I have been involved in multiple IT projects, but this time I am in a phase of my career where I want to be very close to the user and this is to why i pursue this phase of front-end development.Beyond the web-development I am currently enjoying web-designing as well.These are technologies I have been involved with so far:",l.a.createElement("ul",null,l.a.createElement("li",null,"HTML / CSS"),l.a.createElement("li",null,"Javascript / ES6"),l.a.createElement("li",null,"Node.js/Express/MongoDB"),l.a.createElement("li",null,"Typescript/Flow-Type checking"),l.a.createElement("li",null,"React / Redux"),l.a.createElement("li",null,"Ruby / Ruby on Rails"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"Flexbox / Bootstrap / Reactstrap"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"Linux OS"),l.a.createElement("li",null,"Git/Github"),l.a.createElement("li",null,"Regular Expressions")),l.a.createElement("h4",null,"Check out what I have been up to:")),l.a.createElement("div",{className:"Links"},l.a.createElement(b.a,{to:"/about"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},"ABOUT")),l.a.createElement(b.a,{to:"/projects"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},"PROJECTS")),l.a.createElement(b.a,{to:"/contact"},l.a.createElement("button",{type:"button",className:"btn btn-primary"},"CONTACT")))),l.a.createElement(v,null)))},k=a(11),j=a(20),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={message:"",email:"",isSubmitDisabled:!0,touched:{email:!1,message:""}},a.handleBlur=function(e){var t=e.target.name;a.setState({touched:Object(j.a)({},a.state.touched,Object(k.a)({},t,!0))})},a.validate=function(e){var t={email:"",isSubmitDisabled:!0},n=0;return a.state.email&&/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(e)||(t.email=" Invalid Email address",n+=1),t.isSubmitDisabled=n>0,t},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,l="checkbox"===t.type?t.checked:t.value;a.setState(Object(k.a)({},n,l),function(){this.canSubmit()})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,l=t.message;alert("Your registration details:\n           Email: ".concat(n,"\n           Message: ").concat(l," ")),a.props.history.push("/"),a.setState({email:"",message:""})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"canSubmit",value:function(){var e=this.state.email,t=this.validate(e).isSubmitDisabled;this.setState({isSubmitDisabled:t})}},{key:"render",value:function(){var e=this.state.email,t=this.validate(e);return console.log(t),l.a.createElement("div",{className:"form"},l.a.createElement(y,null),l.a.createElement("form",{action:"POST","data-netlify":"true",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"email",name:"email",value:this.state.email,placeholder:"Email",onChange:this.handleChange,onBlur:this.handleBlur}),l.a.createElement("br",null),l.a.createElement("h6",null,t.email),l.a.createElement("br",null),l.a.createElement("label",null,"Message : "),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"10",cols:"60",name:"message",value:this.state.message,placeholder:"please write your Message here!",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:this.state.isSubmitDisabled?"disableSubmit":"submit",disabled:this.state.isSubmitDisabled},"Submit"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{"data-netlify-recaptcha":"true"}))),l.a.createElement(v,null))}}]),t}(l.a.Component),N=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"big-container"},l.a.createElement(y,null),l.a.createElement("h3",null,"Code Projects"),l.a.createElement("div",{className:"projects-container"},l.a.createElement("div",{className:"project-1"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/react-crypto-currency-"},l.a.createElement("p",null,"Reactjs App powered by Bootsrap"),l.a.createElement("div",null,l.a.createElement("p",null,"Cryptocurrency"),l.a.createElement("p",null,"This is cryptocurrency Application, implemented using ReactJS, you can search any Bitcoin by Name and view the price and rank and changes in percentage for the last seven days, you can sort any properties as you wish and see immediate result from a real live Cryptocurrency API."))))),l.a.createElement("div",{className:"project-2"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/counter-App"},l.a.createElement("p",null,"Reactjs App powered by Bootsrap"),l.a.createElement("p",null,"Counter-App"),l.a.createElement("p",null,"A Simple application but powerful application teaching how reacts work in all aspects.it is based on counter where you can increase or decrease counter while other functionalities are taking place while doing that.")))),l.a.createElement("div",{className:"project-3"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/CountryArrayInReact"},l.a.createElement("p",null,"Reactjs App "),l.a.createElement("p",null,l.a.createElement("p",null," ArrayOfCountriesInReact"),"This is the project where we are able to search any country in the World from a given array, it is implemented using ReactJs. There are two buttons where you can choose to search either by Start With or include buttons.")))),l.a.createElement("div",{className:"project-4"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/FormValidationInReact"},l.a.createElement("p",null,l.a.createElement("p",null,"Reactjs App "),l.a.createElement("p",null,"FormValidationInReact"),"This is Form Validation implemented using ReactJs, user can fill up the form under given condition for each input and if every requirement is met the Submit button will turn green and ready to be submitted.")))),l.a.createElement("div",{className:"project-5"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/TodoList"},l.a.createElement("p",null,l.a.createElement("p",null,"Reactjs App "),l.a.createElement("p",null,"TodoList"),"This is simple TodoList react App where we can add, delete and create to do list from Json placeholder backend. API")))),l.a.createElement("div",{className:"project-6"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/AccountBalanceInReact"},l.a.createElement("p",null,l.a.createElement("p",null,"Reactjs App "),l.a.createElement("p",null,"AccountBalanceInReact"),"This is Account Balance Implemented using ReactJS, the User can add income or expenses and the program will calculate the balance and dispaly all the transactions accordingly.")))),l.a.createElement("div",{className:"project-7"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/Gallery"},l.a.createElement("p",null,l.a.createElement("p",null,"Javascript App "),l.a.createElement("p",null,"Gallery"),"This is the Gallery integrify stuff, implemented using HTML, CSS and JAVASCRIPT. The Gallery is in slide show form where you can click next arrow or next button to view next or previous photo, you can view the details of a selected photo by clicking details button.")))),l.a.createElement("div",{className:"project-8"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/rails_tutorial"},l.a.createElement("p",null,"Rails App "),l.a.createElement("p",null," Rails_Tutorial"),l.a.createElement("p",null,"Ruby on Rails tutorial application")))),l.a.createElement("div",{className:"project-9"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/DataFetching"},l.a.createElement("p",null,l.a.createElement("p",null,"Javascript App "),l.a.createElement("p",null,"DataFetching_From_API"),"This is a project where we can fetch data(Countries) from given countries API as url. an App was implemented by pure vanilla javascript")))),l.a.createElement("div",{className:"project-10"},l.a.createElement("h5",null,l.a.createElement("a",{className:"project-link",href:"https://github.com/benk1/tableAssignment"},l.a.createElement("p",null,l.a.createElement("p",null,"Javascript App "),l.a.createElement("p",null,"TableGenerator"),"This is a project where we can build any table with given inputs, the app is implemeneted using vanilla javascript."))))),l.a.createElement(v,null))}}]),t}(n.Component)),S=(a(35),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement("h3",null,"About Me!"),l.a.createElement("div",{className:"circularPhoto"}),l.a.createElement("h3",null,"Welcome To My Code Life Story"),l.a.createElement("div",{className:"about"},l.a.createElement("p",null,"I am obsessed with making things happen, and even more interested on making things better.In my Software development career, I started the development based on programming with Ruby Language and developed further with Ruby on Rails framework, now looking for a role as a front-end or full-stack developer. I participated in different projects as a trainee at Sibesonke Ltd in Finland, where I trained and work as a software developer using Ruby and Ruby on Rails ,I built full tracing tool for customers in the company using Ruby and Ruby on rails framework. I had a great time doing different kind of SoftWare testing including functional and unit testing on the process."," "),l.a.createElement("p",null,"I have good communication skills and adaptability to different working environments. I am team player,highly driven and motivated person, hardworking, quick to learn with a positive attitude under pressure and this is the one which makes me who i am today. At the moment i am specializing in front-end development at Integrify oy where I am more working with HTML5, CSS, JAVASCRIPT and ReactJS/Redux and many more front-end technologies. I have good knowledge of using GIT(version control system),Mysql,MongoDB databases, good with Regular expressions, experienced with multiple editors e.g Visual studio code as one of my favourite at the moment, sublime, Atom and many more. As a graduate with a bachelor of engineering In Information Technology, I am able and flexible to do any IT-related job apart from specialized one above. My experience have taught me how to work with different tools and be able to adapt to new working environments."," "),l.a.createElement("p",null,"I have team work experience with different projects. I get along with different kinds of people and I am eager to learn new things to challenge myself. I am also interested in learning foreign languages, in this way building my understanding and experience of other cultures and communities. Currently I am excellent in Finnish language as i have been living in Finland for some time now, apart from that I am fluent in written and spoken English ."),l.a.createElement("p",null,"At my spare time, i like to take care of myself healthywise by doing different kind pf sports activities, one of my favourite sport is playing football as Americans call it soccer, couple of days in a week i like to go to the gym to maintain my fitness. During summer time you will always find me doing some evening jogging and long walks around the parks as it is beautiful out there.")),l.a.createElement(v,null))}),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(p.a,null,l.a.createElement(d.a,{exact:!0,path:"/",component:w}),l.a.createElement(d.a,{path:"/about",component:S}),l.a.createElement(d.a,{path:"/contact",component:I}),l.a.createElement(d.a,{path:"/projects",component:N})))}}]),t}(n.Component),R=a(39);i.a.render(l.a.createElement(R.a,{basename:"/PortfolioReact"},l.a.createElement(A,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e0020a99.chunk.js.map