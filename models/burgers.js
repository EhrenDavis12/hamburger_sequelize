module.exports = function(sequelize, DataTypes) {
  
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            isUUID: 4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg: "Name length is not in range of 1-255"
                }
            },
            defaultValue: false
        },
        devoured: {
            type: DataTypes.BOOLEAN					 ,
            allowNull: true,
            defaultValue: false
        }
  
    },{
        freezeTableName: true
    });
    return Burger;
  };
    