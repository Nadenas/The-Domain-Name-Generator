let pronoun = ["the", "our"];
adj = ['great', 'big' ];
noun = ["jogger", "racoon"];

(function(x, y, z){
let domainName = [];
for (var i = 0, l = x.length; i < l; i++){
for (var j = 0, k = 0; j < y.length; j++){
domainName.push([pronoun[i], adj[j], noun[k]]+'.com');
if (j == y.length - 1 && k < z.length - 1){
k++;
j = -1;
}
}
}
console.log(domainName.join('\n').replaceAll(',',''));
})
(pronoun, adj, noun);