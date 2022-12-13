module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('Usuario',{
            nome: DataTypes.STRING,
            login: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {});
        Usuario.associate = (models)=>{
            Usuario.hasMany(models.Medicamento);
        }

        return Usuario;
}




// const Usuario = (sequelize, DataTypes)=>{
//     return sequelize.define('Usuario', {
//         nome: DataTypes.STRING,
//         login: DataTypes.STRING,
//         senha: DataTypes.STRING
//     });
// }
