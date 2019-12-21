module.exports = ({ tableName = 'Session', customColumns = {} }) => {
	const table = tableName;
	const custom = customColumns;

	return (sequelize, DataTypes) => {
		
		const defaultColumns = {
			'session_id': {
				type: DataTypes.STRING(32),
				primaryKey: true,
			},
			expires: DataTypes.DATE,
			data: DataTypes.TEXT,
		}

		const columns = Object.assign(defaultColumns, custom)

		return sequelize.define(table, columns);
	}
};