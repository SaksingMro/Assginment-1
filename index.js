import { divisionList } from "./division.js";
divisionList.map((item,i)=>{
	let details =`My Division name is ${item.name}`
	let shortDetails=`My Short Division name is ${item.shortName}`
	
	console.log(details);
	console.log(shortDetails);
	console.log("\n");
})