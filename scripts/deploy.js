
const fs = require('fs');

async function main() {
	const StoreFront = await ethers.getContractFactory("StoreFront2");

	const storeFront = await StoreFront.deploy()

	// await storeFront.deployed();


	const contract = storeFront.address;
	fs.writeFileSync(__dirname + '/../src/config/v1.json', JSON.stringify({ contract }, null, '\t'))
}

main().then(() => {
}).catch((error) => {
	console.error(error);
	
});
