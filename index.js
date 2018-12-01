/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/


'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.0ddb0b3c-3aed-499d-a885-845625bb367f';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FOODIDEAS: [
                {name: "Cheese Burgers", cuisine: "American", meal: "Dinner"},
                {name: "Fried Chicken", cuisine: "American", meal: "Dinner"},
                {name: "Pizza", cuisine: "American", meal: "Dinner"},
                {name: "Hot Dogs", cuisine: "American", meal: "Dinner"},
                {name: "Grilled Cheese", cuisine: "American", meal: "Dinner"},
                {name: "Pot Roast", cuisine: "American", meal: "Dinner"},
                {name: "Pulled Pork Sandwiches", cuisine: "American", meal: "Dinner"},
                {name: "Mac and Cheese", cuisine: "American", meal: "Dinner"},
                {name: "Sloppy Joes", cuisine: "American", meal: "Dinner"},
                {name: "Baby Back Ribs", cuisine: "American", meal: "Dinner"},
                {name: "Cobb Salad", cuisine: "American", meal: "Dinner"},
                {name: "Buffalo Wings", cuisine: "American", meal: "Dinner"},
                {name: "Grilled Salmon", cuisine: "American", meal: "Dinner"},
                {name: "Sirloin Steak", cuisine: "American", meal: "Dinner"},
                {name: "Pizza", cuisine: "American", meal: "Dinner"},
                {name: "Minestrone", cuisine: "Italian", meal: "Dinner"},
                {name: "Spaghetti", cuisine: "Italian", meal: "Dinner"},
                {name: "Meatball Subs", cuisine: "Italian", meal: "Dinner"},
                {name: "Chicken Parm", cuisine: "Italian", meal: "Dinner"},
                {name: "Shrimp Scampi", cuisine: "Italian", meal: "Dinner"},
                {name: "Ravioli", cuisine: "Italian", meal: "Dinner"},
                {name: "Fettuccine Alfredo", cuisine: "Italian", meal: "Dinner"},
                {name: "Lasagna", cuisine: "Italian", meal: "Dinner"},
                {name: "Orange Chicken", cuisine: "Chinese", meal: "Dinner"},
                {name: "Peking Pork", cuisine: "Chinese", meal: "Dinner"},
                {name: "Beef and Broccoli", cuisine: "Chinese", meal: "Dinner"},
                {name: "Sweet and Sour Chicken", cuisine: "Chinese", meal: "Dinner"},
                {name: "Kung Pao Chicken", cuisine: "Chinese", meal: "Dinner"},
                {name: "Grilled Teriyaki Chicken", cuisine: "Chinese", meal: "Dinner"},
                {name: "Eggplant Tofu", cuisine: "Chinese", meal: "Dinner"},
                {name: "Hibachi Chicken", cuisine: "Japanese", meal: "Dinner"},
                {name: "Hibachi Steak", cuisine: "Japanese", meal: "Dinner"},
                {name: "Yakisoba", cuisine: "Japanese", meal: "Dinner"},
                {name: "Ramen", cuisine: "Japanese", meal: "Dinner"},
                {name: "Shrimp Tempura", cuisine: "Japanese", meal: "Dinner"},
                {name: "Sushi", cuisine: "Japanese", meal: "Dinner"},
                {name: "Tacos", cuisine: "Mexican", meal: "Dinner"},
                {name: "Burritos", cuisine: "Mexican", meal: "Dinner"},
                {name: "Quesadillas", cuisine: "Mexican", meal: "Dinner"},
                {name: "Chili and Corn Bread", cuisine: "Mexican", meal: "Dinner"},
                {name: "Nachos", cuisine: "Mexican", meal: "Dinner"},
                {name: "Pancakes", cuisine: "American", meal: "Breakfast"},
                {name: "Eggs and Bacon", cuisine: "American", meal: "Breakfast"},
                {name: "Cereal", cuisine: "American", meal: "Breakfast"},
                {name: "Fresh Fruit", cuisine: "American", meal: "Breakfast"},
                {name: "Biscuits and Gravy", cuisine: "American", meal: "Breakfast"},
                {name: "Crostata", cuisine: "Italian", meal: "Breakfast"},
                {name: "Mini Frittatas", cuisine: "Italian", meal: "Breakfast"},
                {name: "Mascarpone Toast with Burst Tomatoes", cuisine: "Italian", meal: "Breakfast"},            
                {name: "Pork Buns", cuisine: "Chinese", meal: "Breakfast"},
                {name: "Tofu Pudding", cuisine: "Chinese", meal: "Breakfast"},
                {name: "Rice Porridge", cuisine: "Chinese", meal: "Breakfast"},
                {name: "Sesame Balls", cuisine: "Chinese", meal: "Breakfast"},
                {name: "Grilled Fish", cuisine: "Japanese", meal: "Breakfast"},
                {name: "Seasoned Dried Seaweed", cuisine: "Japanese", meal: "Breakfast"},
                {name: "Steamed Rice", cuisine: "Japanese", meal: "Breakfast"},
                {name: "Apple Pie", cuisine: "American", meal: "Dessert"},
                {name: "Brownies", cuisine: "American", meal: "Dessert"},
                {name: "Chocolate Chip Cookies", cuisine: "American", meal: "Dessert"},
                {name: "Churros", cuisine: "Mexican", meal: "Dessert"},
                {name: "Cannoli", cuisine: "Italian", meal: "Dessert"},
                {name: "Tiramisu", cuisine: "Italian", meal: "Dessert"},
                {name: "Almond Jelly", cuisine: "Chinese", meal: "Dessert"},
                {name: "Moon Cakes", cuisine: "Chinese", meal: "Dessert"},
            ],
            
            SKILL_NAME: 'Foodie',
            WELCOME_MESSAGE: "Welcome to %s. You can ask a question like, what's for dinner? ... Now, what can I help you with?",
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - Recipe for %s.',
            GET_FOOD_MESSAGE: "I think today is a great day to have ",
            HELP_MESSAGE: 'You can say give me a food idea, what is for breakfast, dinner, or dessert. You can give me the type of food you are in the mood for, Chinese for example. Or you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'GetDinnerIdeaIntent': function () {
        this.emit('GetDinner');
    },
        'GetBreakfastIdeaIntent': function () {
        this.emit('GetBreakfast');
    },
    'GetDessertIdeaIntent': function () {
        this.emit('GetDessert');
    },
    'SetPreferenceIntent' : function () {
        this.emit('SetPreference');
    },
    'ChangeFoodSuggestionIntent' : function () {
        this.emit('ChangeFoodSuggestion');
    },
    'SetPreference': function () {
      
      this.attributes["foodPref"] = this.event.request.intent.slots.foodPref.value;
      var reply = "Okay, you're in the mood for " + this.attributes["foodPref"] + ". I'll keep that in mind. Do you want breakfast, dinner, or dessert?";
      this.emit(':ask', reply, reply);
    },
    'ChangeFoodSuggestion': function () {
        
        var lastMealGiven = this.attributes["lastMeal"];
        
        switch(lastMealGiven) {
            case "dinner":
                this.emit('GetDinner');
                break;
            case "breakfast":
                this.emit('GetBreakfast');
                break;
            case "dessert":
                this.emit('GetDessert');
                break;
            default:
                this.response.speak("What meal would you like?");
                this.emit(':responseReady');
        }
    },
  
    'GetDinner': function () {
        var foodArr = this.t('FOODIDEAS');
        var foodPref = this.attributes["foodPref"];
        var lastFoodSuggestion = this.attributes["foodChoice"];
        var dinnerArr = filterFoodIdeas(foodArr, "Dinner", foodPref, lastFoodSuggestion);
        var foodPrefMessage = "";
        
        if (typeof foodPref !== "undefined") {
            foodPrefMessage = "Since you're in the mood for " + foodPref + ", ";
        }

        const dinnerIndex = Math.floor(Math.random() * dinnerArr.length);
        const randomDinner = dinnerArr[dinnerIndex].name;
        
        this.attributes["foodChoice"] = randomDinner;
        this.attributes["lastMeal"] = "dinner";

        // Create speech output
        const speechOutput = foodPrefMessage + this.t('GET_FOOD_MESSAGE') + randomDinner + " for dinner.";
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomDinner);
    },
    
    
    'GetBreakfast': function () {
            
        var foodArr = this.t('FOODIDEAS');
        var foodPref = this.attributes["foodPref"];
        var lastFoodSuggestion = this.attributes["foodChoice"];
        var breakfastArr = filterFoodIdeas(foodArr, "Breakfast", foodPref, lastFoodSuggestion);
        var foodPrefMessage = "";
        
        if (typeof foodPref !== "undefined") {
            foodPrefMessage = "Since you're in the mood for " + foodPref + ", ";
        }

        const breakfastIndex = Math.floor(Math.random() * breakfastArr.length);
        const randomBreakfast = breakfastArr[breakfastIndex].name;

        this.attributes["foodChoice"] = randomBreakfast;
        this.attributes["lastMeal"] = "breakfast";

        // Create speech output
        const speechOutput = foodPrefMessage + this.t('GET_FOOD_MESSAGE') + randomBreakfast + " for breakfast.";
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomBreakfast);
    },
    
    
    'GetDessert': function () {
                
        var foodArr = this.t('FOODIDEAS');
        var foodPref = this.attributes["foodPref"];
        var lastFoodSuggestion = this.attributes["foodChoice"];
        var dessertArr = filterFoodIdeas(foodArr, "Dessert", foodPref, lastFoodSuggestion);
        var foodPrefMessage = "";
        
        if (typeof foodPref !== "undefined") {
            foodPrefMessage = "Since you're in the mood for " + foodPref + ", ";
        }
    
        const dessertIndex = Math.floor(Math.random() * dessertArr.length);
        const randomDessert = dessertArr[dessertIndex].name;
    
        this.attributes["foodChoice"] = randomDessert;
        this.attributes["lastMeal"] = "dessert";
    
    
        // Create speech output
        const speechOutput = foodPrefMessage + this.t('GET_FOOD_MESSAGE') + randomDessert + " for dessert.";
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomDessert);
    },
    
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};


function filterFoodIdeas(arr, mealChoice, foodPref, lastFoodSuggestion) {
    
    var filteredArr = [];
    
    if (typeof foodPref !== "undefined") {
        filteredArr = arr.filter(function (x) {
                return x.meal == mealChoice &&
                    x.cuisine == foodPref &&
                    x.name != lastFoodSuggestion;
            });
    }
    else {
        filteredArr = arr.filter(function (x) {
            return x.meal == mealChoice &&
                   x.name != lastFoodSuggestion;
        });
    }
    return filteredArr;
}



exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};