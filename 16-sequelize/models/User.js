const User = (Sequelize,DataTypes)=>{

    const model = Sequelize.define(
        'user',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            userid:{
                type:DataTypes.STRING(20),
                allowNull:false
            },
            name:{
                type:DataTypes.STRING(10),
                allowNull:false
            },
            pw:{
                type:DataTypes.STRING(20),
                allowNull:false
            }
        },
        {
            tableName:'user',
            freezeTableName:true,
            timestamps:false,
        }
    )
    return model;

    // return model을 생략하고 싶다면 const model = 하지않고 바로 return 해주면 된다.
    // 여기서 model은 객체인가?
}

module.exports = User;