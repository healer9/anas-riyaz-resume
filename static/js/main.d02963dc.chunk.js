(this["webpackJsonpresume-anas-riyaz"]=this["webpackJsonpresume-anas-riyaz"]||[]).push([[0],{11:function(e,i,t){},13:function(e,i,t){"use strict";t.r(i);var n=t(0),c=t(1),s=t.n(c),a=t(5),r=t.n(a),o={firstName:"Anas",lastName:"Riyaz",contactList:{number:"(+91) - 8299088679",email:"anasriyaz92@gmail.com",github:"github.com/healer9",linkedIn:"linkedin.com/anas-riyaz",portfolio:"anas-riyaz-portfolio"},links:{mail:"mailto:anasriyaz92@gmail.com",githubLink:"https://github.com/healer9",linkedInLink:"http://linkedin.com/in/anas-riyaz/",portfolioLink:"https://healer9.github.io/anas-riyaz-portfolio/"},education:{school:{name:"Kendriya Vidyalaya Balrampur",highSchoolMarks:"10 CGPA",intermediateMarks:"90.80%"},college:{name:"Jamia Millia Islamia",duration:"2018 - present",course:"B.Tech (Computer Engineering)",cgpa:"9.54 CGPA (till-now)"}},skills:["C++","Python","JavaScript","MongoDB","Express Js","React Js","Node Js","RESTfull API","GitHub"],projects:[{name:"Quiz App",type:"Web Application",sourceCode:"https://github.com/healer9/quiz-app",liveAt:"https://healer9.github.io/quiz-app/#",buildWith:"React Js",description:"This app is completely built with React JS. It contains the questions from various topics that are helpful in cracking the technical interviews for SDE."},{name:"Sudoku Solver",type:"Web Application",sourceCode:"https://github.com/healer9/sudoku-solver",liveAt:"https://healer9.github.io/sudoku-solver/",buildWith:"React Js",description:"This app uses AXIOS to fetch API data and generate sudoku puzzle. Backtracking and Recursive approach is used to solve the generated sudoku puzzle on a click."},{name:"School Website",type:"Web Application",sourceCode:"https://github.com/healer9/gurukul",liveAt:"https://healer9.github.io/gurukul/#",buildWith:"React Js",description:"This is a modern school website. Having all the content (e.g School news, Admission Notice, Student/Faculty Login etc)"}],achievements:[{description:"HackerRank Certificate",link:"https://www.hackerrank.com/certificates/38d459dd5662"},{description:"5 Star at HackerRank",link:"https://www.hackerrank.com/anasriyaz92"},{description:"3 Star at CodeChef",link:"https://www.codechef.com/users/almoizzu"}]},l=(t(3),function(){var e=o.contactList,i=e.number,t=e.email,c=e.github,s=e.linkedIn,a=e.portfolio,r=o.links,l=r.mail,h=r.githubLink,d=r.linkedInLink,j=r.portfolioLink,u={cursor:"pointer",textDecoration:"underline"};return Object(n.jsxs)("ul",{className:"contact",children:[Object(n.jsx)("i",{className:"fa fa-phone contact-icon","aria-hidden":"true"}),Object(n.jsx)("li",{children:i}),Object(n.jsx)("i",{className:"fa fa-envelope contact-icon","aria-hidden":"true"}),Object(n.jsx)("li",{onClick:function(){return window.location=l},style:u,children:t}),Object(n.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(n.jsx)("li",{onClick:function(){return window.open(j)},style:u,children:a}),Object(n.jsx)("i",{className:"fa fa-github contact-icon"}),Object(n.jsx)("li",{onClick:function(){return window.open(h)},style:u,children:c}),Object(n.jsx)("i",{className:"fa fa-linkedin contact-icon"}),Object(n.jsx)("li",{onClick:function(){return window.open(d)},style:u,children:s})]})}),h=function(){var e=o.firstName,i=o.lastName;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("header",{className:"container",children:[Object(n.jsxs)("h1",{className:"name",children:[Object(n.jsx)("span",{className:"fname",children:e.toUpperCase()})," ",i.toUpperCase()]}),Object(n.jsx)(l,{})]})})},d=function(){var e=o.education.college;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsx)("h2",{className:"institute-name",children:e.name}),Object(n.jsx)("p",{className:"",children:e.duration})]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:e.course}),Object(n.jsx)("h3",{children:e.cgpa})]})]})},j=function(){var e=o.education.school;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{className:"heading institute-name",children:e.name}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:"Class 12"}),Object(n.jsxs)("h3",{children:["Marks : ",e.intermediateMarks]})]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:"Class 10"}),Object(n.jsxs)("h3",{children:["Marks : ",e.highSchoolMarks]})]})]})},u=(t(4),function(){return Object(n.jsxs)("div",{className:"section-container",children:[Object(n.jsx)("h1",{className:"section-heading",children:"Education"}),Object(n.jsx)(d,{}),Object(n.jsx)(j,{})]})}),m=(t(11),function(){var e=o.projects;return Object(n.jsxs)("div",{className:"section-container",children:[Object(n.jsx)("h1",{className:"section-heading",children:"Projects"}),e.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"project-heading",children:[Object(n.jsx)("h1",{className:"pro-name",children:e.name}),Object(n.jsx)("h2",{className:"type",children:e.type})]}),Object(n.jsxs)("div",{className:"project-link",children:[Object(n.jsxs)("h3",{children:["Source Code : ",Object(n.jsx)("span",{onClick:function(){return window.open(e.sourceCode)},style:{textDecoration:"underline",cursor:"pointer"},children:e.sourceCode.slice(8)})]}),Object(n.jsxs)("h3",{children:["Live At : ",Object(n.jsx)("span",{onClick:function(){return window.open(e.liveAt)},style:{textDecoration:"underline",cursor:"pointer"},children:e.liveAt.slice(8)})]})]}),Object(n.jsxs)("h3",{style:{marginTop:"1%"},children:["Build With : ",e.buildWith]}),Object(n.jsx)("p",{className:"project-description",children:e.description})]},e.name.toString())}))]})}),p=function(){var e=o.skills;return Object(n.jsxs)("div",{className:"section-container",children:[Object(n.jsx)("h1",{className:"section-heading",children:"Skills"}),Object(n.jsx)("ul",{className:"skills",children:e.map((function(e){return Object(n.jsxs)("li",{children:[" ",e]},e.toString())}))})]})},b=function(){var e=o.achievements,i={marginTop:"1%",marginRight:"1%",fontSize:"1.2rem",fontWeight:"bold",listStyle:"inside"};return Object(n.jsxs)("div",{className:"section-container",children:[Object(n.jsx)("h1",{className:"section-heading",children:"Achievements"}),e.map((function(e){return Object(n.jsxs)("div",{className:"achievement",style:{display:"flex",alignItems:"center"},children:[Object(n.jsx)("li",{style:i,children:e.description}),Object(n.jsx)("i",{className:"fa fa-external-link","aria-hidden":"true",onClick:function(){return window.open(e.link)},style:{cursor:"pointer"}})]},e.link)}))]})},x=t.p+"static/media/Anas Riyaz Resume.cae7ac30.pdf",O=function(){return Object(n.jsx)("a",{href:x,download:!0,children:Object(n.jsx)("button",{children:"Download"})})},f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsx)(u,{}),Object(n.jsx)(m,{}),Object(n.jsx)(p,{}),Object(n.jsx)(b,{}),Object(n.jsx)(O,{}),Object(n.jsx)("footer",{children:"Build with \u2764 using React JS"})]})};t(12);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))},3:function(e,i,t){},4:function(e,i,t){}},[[13,1,2]]]);
//# sourceMappingURL=main.d02963dc.chunk.js.map