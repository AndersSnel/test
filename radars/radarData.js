//This is the title for your window tab, and your Radar
document.title = "Java-avdelingens Teknologiradar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Teknikker",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
			{"name":"Promises (JavaSqript) Async prog", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Restifisering", "pc":{"r":80,"t":110},"movement":"c"},   
            {"name":"Design Patterns", "pc":{"r":80,"t":100},"movement":"c"},   
            {"name":"Scrum", "pc":{"r":70,"t":170},"movement":"c"},   
            {"name":"Test Driven Development", "pc":{"r":30,"t":100},"movement":"c"},   
            {"name":"Domain Driven Design", "pc":{"r":30,"t":160},"movement":"c"},
			{"name":"Client side capturing av Javasqript errors", "pc":{"r":120,"t":160},"movement":"c"},  
			{"name":"Utviklingsmiljø i skyen", "pc":{"r":175,"t":150},"movement":"c"},
			{"name":"Kanban", "pc":{"r":170,"t":130},"movement":"c"},  
			{"name":"Responsive Design", "pc":{"r":140,"t":110},"movement":"c"},
			{"name":"Command Query Responsibility Segregation (CQRS)", "pc":{"r":130,"t":140},"movement":"c"}, 
			{"name":"Continuous delivery", "pc":{"r":160,"t":120},"movement":"c"},  
			{"name":"Mobile First", "pc":{"r":120,"t":100},"movement":"c"}, 
			{"name":"Databasemigrering til NoSQL", "pc":{"r":230,"t":100},"movement":"c"}, 
			{"name":"Behavior-Driven Development(BDD)", "pc":{"r":280,"t":130},"movement":"c"}, 
			{"name":"DevOps", "pc":{"r":220,"t":120},"movement":"c"}, 
			{"name":"Automated Acceptance Test", "pc":{"r":230,"t":150},"movement":"c"}, 
			{"name":"Event Driven Architecture", "pc":{"r":80,"t":150},"movement":"c"},  
			{"name":"Lean", "pc":{"r":250,"t":130},"movement":"c"},  
			{"name":"Micro services", "pc":{"r":230,"t":170},"movement":"c"},  
			{"name":"HTML 5 storage", "pc":{"r":280,"t":100},"movement":"c"},
			{"name":"Vannfall", "pc":{"r":380,"t":150},"movement":"c"}			
        ]
    },
    { "quadrant": "Verktøy",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Team Foundation Server (TFS)", "pc":{"r":390,"t":20},"movement":"c"},   
            {"name":"SVN", "pc":{"r":340,"t":10},"movement":"c"},			
            {"name":"Ant", "pc":{"r":330,"t":85},"movement":"c"},			
            {"name":"BYO IDE", "pc":{"r":350,"t":70},"movement":"c"},			
            {"name":"GIT Flow", "pc":{"r":280,"t":50},"movement":"c"},			
            {"name":"Puppet", "pc":{"r":260,"t":30},"movement":"c"},			
            {"name":"Liquibase", "pc":{"r":230,"t":85},"movement":"c"},			
            {"name":"Bamboo", "pc":{"r":280,"t":75},"movement":"c"},		
            {"name":"STASH", "pc":{"r":180,"t":65},"movement":"c"},			
            {"name":"GIT", "pc":{"r":180,"t":50},"movement":"c"},			
            {"name":"Sonar", "pc":{"r":160,"t":85},"movement":"c"},   
            {"name":"JRebel", "pc":{"r":130,"t":85},"movement":"c"},			
            {"name":"Vagrant", "pc":{"r":130,"t":55},"movement":"c"}, 		
            {"name":"Spunk", "pc":{"r":130,"t":30},"movement":"c"},    
            {"name":"Grant", "pc":{"r":80,"t":85},"movement":"c"},   
            {"name":"Jenkins", "pc":{"r":80,"t":10},"movement":"c"}            
        ]
    },
    { "quadrant": "Plattform",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Websphere", "pc":{"r":390,"t":265},"movement":"c"},   
            {"name":"Weblogic", "pc":{"r":390,"t":250},"movement":"c"},   
            {"name":"Solr", "pc":{"r":390,"t":230},"movement":"c"},  
            {"name":"Neo4j Graph DB", "pc":{"r":290,"t":265},"movement":"c"},   
            {"name":"Web Components", "pc":{"r":275,"t":260},"movement":"c"},   
            {"name":"Cloud Founding", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Heroku postgres", "pc":{"r":230,"t":245},"movement":"c"},   
            {"name":"Hadoop", "pc":{"r":290,"t":200},"movement":"c"},   
            {"name":"Heroku", "pc":{"r":190,"t":185},"movement":"c"},			
            {"name":"Force.com", "pc":{"r":180,"t":260},"movement":"c"},   
            {"name":"Node.js", "pc":{"r":130,"t":260},"movement":"c"},   
            {"name":"Elastic Search", "pc":{"r":130,"t":250},"movement":"c"},			
            {"name":"MongoDB", "pc":{"r":130,"t":230},"movement":"c"},   
            {"name":"Redis", "pc":{"r":130,"t":220},"movement":"c"},    
            {"name":"Postgres", "pc":{"r":90,"t":265},"movement":"c"},			
            {"name":"Utvikling for alle flater", "pc":{"r":90,"t":215},"movement":"c"},		
            {"name":"Linux for utvikling", "pc":{"r":90,"t":190},"movement":"c"},   
            {"name":"JBoss", "pc":{"r":70,"t":260},"movement":"c"},			
            {"name":"Jetty", "pc":{"r":70,"t":245},"movement":"c"}
        ]
    },
    { "quadrant": "Språk & Rammeverk",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Objective-C", "pc":{"r":390,"t":355},"movement":"c"},   
            {"name":"Shell sqripting (unix)", "pc":{"r":370,"t":330},"movement":"c"},
            {"name":"Lisp", "pc":{"r":370,"t":320},"movement":"c"},   
            {"name":"Wicket", "pc":{"r":360,"t":310},"movement":"c"}, 		
            {"name":"Java 6", "pc":{"r":350,"t":275},"movement":"c"},   
            {"name":"Lift", "pc":{"r":330,"t":340},"movement":"c"}, 			
			{"name":"Scala", "pc":{"r":290,"t":355},"movement":"c"},   
            {"name":"Guice", "pc":{"r":270,"t":330},"movement":"c"},			
            {"name":"Phyton", "pc":{"r":230,"t":320},"movement":"c"},   
            {"name":"Scalatra", "pc":{"r":240,"t":310},"movement":"c"},			
            {"name":"DART", "pc":{"r":250,"t":285},"movement":"c"},   
            {"name":"Ruby on Rails", "pc":{"r":230,"t":340},"movement":"c"},
			{"name":"Groovy", "pc":{"r":190,"t":280},"movement":"c"}, 
			{"name":"Clojure", "pc":{"r":190,"t":300},"movement":"c"}, 
			{"name":"Play", "pc":{"r":170,"t":320},"movement":"c"}, 
			{"name":"Java 8", "pc":{"r":180,"t":340},"movement":"c"}, 
			{"name":"Backbone.js", "pc":{"r":140,"t":280},"movement":"c"}, 
			{"name":"AngularJS", "pc":{"r":160,"t":285},"movement":"c"},
			{"name":"Ember", "pc":{"r":140,"t":350},"movement":"c"}, 			
            {"name":"JQuery", "pc":{"r":90,"t":355},"movement":"c"},   
            {"name":"Spring", "pc":{"r":90,"t":330},"movement":"c"},   
            {"name":"CSS Frameworks", "pc":{"r":90,"t":285},"movement":"c"},   
            {"name":"Less", "pc":{"r":50,"t":320},"movement":"c"}, 			
            {"name":"Java 7", "pc":{"r":20,"t":330},"movement":"c"},   
            {"name":"RequireJS", "pc":{"r":60,"t":300},"movement":"c"},   
            {"name":"HTML 5", "pc":{"r":50,"t":282},"movement":"c"}
        ]
    }
];
