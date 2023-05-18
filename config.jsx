# config-bottle-react-
enum BottlesEnum {
	blue,
	brown,
	green,
	red,
	white,
}

const bottles: Record<BottlesEnum, BottleType> = {
	[BottlesEnum.blue]: {
		id: BottlesEnum.blue,
		image: require('./img/blue.png'),
	},
	/*...*/
}

const correctPositions = [
	BottlesEnum.green,
	BottlesEnum.white,
	BottlesEnum.brown,
	BottlesEnum.red,
	BottlesEnum.blue,
];

enum ShelvesEnum {
	top,
	bottom,
}
