import{_ as n,r as a,o as s,c as i,b as e,a as r,d as o}from"./app.e64a207b.js";const c={},h=e("h1",{id:"others",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#others","aria-hidden":"true"},"#"),o(" Others")],-1),d=e("h2",{id:"server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#server","aria-hidden":"true"},"#"),o(" Server")],-1),_=e("code",null,"micronaut.server.context-path",-1),l=o(": if behind a reverse proxy, path to akhq without trailing slash (optional). Example: akhq is behind a reverse proxy with url "),u={href:"http://my-server/akhq",target:"_blank",rel:"noopener noreferrer"},p=o("http://my-server/akhq"),f=o(", set "),m=e("code",null,'context-path: "/akhq"',-1),k=o(". Not needed if you're behind a reverse proxy with subdomain "),b={href:"http://akhq.my-server/",target:"_blank",rel:"noopener noreferrer"},g=o("http://akhq.my-server/"),v=e("h2",{id:"kafka-admin-producer-consumer-default-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kafka-admin-producer-consumer-default-properties","aria-hidden":"true"},"#"),o(" Kafka admin / producer / consumer default properties")],-1),x=e("code",null,"akhq.clients-defaults.{{admin|producer|consumer}}.properties",-1),q=o(": default configuration for admin producer or consumer. All properties from "),y={href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"},M=o("Kafka documentation"),w=o(" is available."),E=e("h2",{id:"micronaut-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#micronaut-configuration","aria-hidden":"true"},"#"),o(" Micronaut configuration")],-1),N=o("Since AKHQ is based on "),B={href:"https://micronaut.io/",target:"_blank",rel:"noopener noreferrer"},K=o("Micronaut"),S=o(", you can customize configurations (server port, ssl, ...) with "),V={href:"https://docs.micronaut.io/snapshot/guide/configurationreference.html#io.micronaut.http.server.HttpServerConfiguration",target:"_blank",rel:"noopener noreferrer"},A=o("Micronaut configuration"),C=o(". More information can be found on "),H={href:"https://docs.micronaut.io/snapshot/guide/index.html#config",target:"_blank",rel:"noopener noreferrer"},I=o("Micronaut documentation");function L(z,O){const t=a("ExternalLinkIcon");return s(),i("div",null,[h,d,e("ul",null,[e("li",null,[_,l,e("a",u,[p,r(t)]),f,m,k,e("a",b,[g,r(t)])])]),v,e("ul",null,[e("li",null,[x,q,e("a",y,[M,r(t)]),w])]),E,e("blockquote",null,[e("p",null,[N,e("a",B,[K,r(t)]),S,e("a",V,[A,r(t)]),C,e("a",H,[I,r(t)])])])])}const T=n(c,[["render",L],["__file","others.html.vue"]]);export{T as default};