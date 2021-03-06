import Sequelize from 'sequelize';

class Table extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        table_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'tables',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
    });
    this.hasMany(models.Reservation, {
      foreignKey: 'table_id',
      as: 'reservation',
    });
  }
}

export default Table;
