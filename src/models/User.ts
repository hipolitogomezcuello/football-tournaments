import {DataTypes, Model} from "sequelize";
import bcrypt from "bcrypt";
import database from "@/src/config/database";

class User extends Model {
  id!: string;
  email!: string;
  password!: string;

  static async login(email: string, password: string): Promise<User> {
    const user = await this.findOne({
      where: {
        email
      }
    })
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return user
      }
    }
    throw Error('incorrect email or password')
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'users',
  sequelize: database
})

User.addHook('beforeCreate', async (user: User) => {
  user.password = await bcrypt.hash(user.password, 10);
})

export default User;
