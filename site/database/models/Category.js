module.exports= (sequelize,dataTypes)=>{

    let alias= "Categories";

    let cols = {
        id:{
            type:dataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(45),
            allowNull:false
        }

    }

        let config={
            tableName: "categories",
            timestamps: false
        }
    
    
    
        const Category = sequelize.define(alias, cols, config)
        return Category;
    }