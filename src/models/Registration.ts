import {DataTypes, Model} from "sequelize";
import bcrypt from "bcrypt";
import database from "@/src/config/database";
import User from "@/src/models/User";

class Registration extends Model {
  userId!: string;
  competitionId!: number;
}

Registration.init({
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  competitionId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, {
  tableName: 'registrations',
  sequelize: database
})

Registration.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

export default Registration;
