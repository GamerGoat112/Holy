export interface Category {
	/**
	 * ID
	 *i18n `name` is `gameCategory_${id}`
	 *i18n `shortName` is `gameCategory_${id}_`
	 */
	id: string;
	/** i18n ID */
	short: boolean;
}

const categories: Category[] = [
	{
		id: 'action',
		short: true,
	},
	{
		id: 'platformer',
		short: false,
	},
	{
		id: 'shooter',
		short: true,
	},
	{
		id: 'rpg',
		short: false,
	},
	{
		id: 'sandbox',
		short: false,
	},
	{
		id: 'survival',
		short: true,
	},
	{
		id: 'sports',
		short: true,
	},
	{
		id: 'puzzle',
		short: false,
	},
];

export default categories;
