const fs = require('fs');
const { logger } = require('../../../core/util/logger');

exports.mod = (mod_info) => {

	if(global === undefined 
		|| global._database === undefined
		|| global._database.items == undefined
		) {
		logger.logError("[MOD] SIT-M4 - Unable to find global database");
		return;
	}

	// for(let b in global._database.items) {
	// 	if(b === "5447a9cd4bdc2dbd208b4567") {
	// 		const m4obj = global._database.items[b];
	// 		// console.log(m4obj);
	// 		const itemBaseFilePath = 'user/mods/SIT-M4-1.0.0/M4Data.json';
	// 		const replacementM4obj = JSON.parse(fs.readFileSync(itemBaseFilePath));
	// 		// console.log(replacementM4obj);
	// 		global._database.items[b] = replacementM4obj;

	// 		logger.logSuccess("[MOD] SIT-M4 - M4A1 Updated");
			
	// 		break;
	// 	}
	// }

	const M4 = global._database.items["5447a9cd4bdc2dbd208b4567"];
	// console.log(M4);
	M4["_props"]["RecoilForceUp"] = 35; // ogv - 140
	M4["_props"]["RecoilForceBack"] = 90; // ogv - 350
	M4["_props"]["CameraRecoil"] = 0.02; // ogv - 0.124
	
	const ammo556_M855 = global._database.items["54527a984bdc2d4e668b4567"];
	ammo556_M855["_props"]["Damage"] = 55;
	ammo556_M855["_props"]["PenetrationPower"] = 50;

	const ammo556_M855A1 = global._database.items["54527ac44bdc2d36668b4567"];
	ammo556_M855A1["_props"]["Damage"] = 55;
	ammo556_M855A1["_props"]["PenetrationPower"] = 50;

	const ammo556_M856 = global._database.items["59e68f6f86f7746c9f75e846"];
	ammo556_M856["_props"]["Damage"] = 60;
	ammo556_M856["_props"]["PenetrationPower"] = 35;

	const ammo556_M856A1 = global._database.items["59e6906286f7746c9f75e847"];
	ammo556_M856A1["_props"]["Damage"] = 60;
	ammo556_M856A1["_props"]["PenetrationPower"] = 35;


	

}