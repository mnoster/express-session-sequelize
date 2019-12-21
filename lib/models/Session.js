module.exports = ({ tableName = 'Session', customColumns = {} }) => {

	return (sequelize, DataTypes) => {
		
		const defaultColumns = {
			'session_id': {
				type: DataTypes.STRING(32),
				primaryKey: true,
			},
			expires: DataTypes.DATE,
			data: DataTypes.TEXT,
		}

		const columns = Object.assign(defaultColumns, customColumns)

		return sequelize.define(tableName, columns);
	}
};