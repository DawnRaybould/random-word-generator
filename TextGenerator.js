/*
DR: Text is from Good Omens, Terry Pratchett & Neil Gaiman, May 1, 1990

*/
	var strng = "Along with the standard computer warranty agreement which said that if the machine 1) didn't work, 2) didn't do what the expensive advertisement said, 3) electrocuted the immediate neighbourhood, 4) and in fact failed entirely to be inside the expensive box when you opened it, this was expressly, absolutely, implicitly and in no event the fault or responsibility of the manufacturer, that the purchaser should consider himself lucky to be allowed to give his money to the manufacturer, and that any attempt to treat what had just been paid for as the purchaser's own property would result in the attentions of serious men with menacing briefcases and very thin watches.";
	
var parseCorpus = function(strng) {
	var res = strng.split(/[^\w']+/);
	return res;
	};
var markovChain = function(strng) {
	var obj1 = {};
	var arr = [];
	var parse = parseCorpus(strng);
		for(i = 0; i < parse.length; i++) {
			if(obj1.hasOwnProperty(parse[i])) {
				arr = obj1[parse[i]];
		} else {
			arr = [];
		}
		if(parse[i + 1]!== undefined) {
				arr.push(parse[i + 1]);
		}
				obj1[parse[i]] = arr;
	
	}
		
return obj1;
};	
 var randomWord = function (obj1) {
   	 var keys = Object.keys(obj1);
     var arr = obj1[keys[keys.length * Math.random() << 0]];
     
     	if(arr[0] === undefined || arr[0] === '' || arr[0] === ' ') {
     		return randomWord(obj1);
     }
     	return arr[0];
     };
	
var writeLine = function(n){
var chain = markovChain(strng);
var retStrng  = "";
		for(i = 0; i < n; i++) {
			var word = randomWord(chain);
				retStrng += word + " ";
	
		}
return retStrng;

};
writeLine(5);