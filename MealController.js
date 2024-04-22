const MealModel = require('./MealModel');

module.exports.getMeal= async(reg,res)=>{
    const myMeal = await MealModel.find();
    res.send(myMeal)
}

module.exports.saveMeals = async(reg,res)=>{
    const{title}=reg.body;
    MealModel.create({title})
    .then((data)=>{console.log('Meal added')
    res.send(data)
})
}

module.exports.deleteMeal = async(reg,res)=>{
    const{_id}=reg.body
    MealModel.findByIdAndDelete(_id)
    .then(()=>res.send('Deleted a Meal'))
}

module.exports.editMeal = async(reg, res)=>{
    const{_id, title}=reg.body
    MealModel.findByIdAndUpdate(_id,{title})
    .then(()=>res.send('Edited a Meal'))
}