module.exports = (sequelize, DataTypes)=>{
const Medicamento = sequelize.define('Medicamento',{
        usuario: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        usuarioId: DataTypes.INTEGER,
    }, {});

    Medicamento.associate = (models)=>{
        Medicamento.belongsTo(models.Usuario,
        {foreignKey: 'usuarioId'})
    }

    return Medicamento;
}