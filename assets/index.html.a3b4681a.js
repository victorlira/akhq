import{_ as r,r as a,o as l,c,b as e,a as t,w as i,d as o}from"./app.e64a207b.js";const d={},_=e("h1",{id:"quick-preview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-preview","aria-hidden":"true"},"#"),o(" Quick preview")],-1),h=o("Download "),u={href:"https://raw.githubusercontent.com/tchiotludo/akhq/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"},p=o("docker-compose.yml"),m=o(" file"),f=e("li",null,[o("run "),e("code",null,"docker-compose pull"),o(" to be sure to have the last version of AKHQ")],-1),k=e("li",null,[o("run "),e("code",null,"docker-compose up")],-1),x=o("go to "),w={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},b=o("http://localhost:8080"),v=e("p",null,"It will start a Kafka node, a Zookeeper node, a Schema Registry, a Kafka Connect, fill with some sample data, start a consumer group and a kafka stream & start AKHQ.",-1),g=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),o(" Installation")],-1),I=o("More standard installation can be found "),K=o("here");function L(q,y){const n=a("ExternalLinkIcon"),s=a("RouterLink");return l(),c("div",null,[_,e("ul",null,[e("li",null,[h,e("a",u,[p,t(n)]),m]),f,k,e("li",null,[x,e("a",w,[b,t(n)])])]),v,g,e("p",null,[I,t(s,{to:"/docs/installation.html"},{default:i(()=>[K]),_:1})])])}const C=r(d,[["render",L],["__file","index.html.vue"]]);export{C as default};