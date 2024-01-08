import React, { useState } from "react";
import dl from "../Images/DL.jpg";
import car from "../Images/car.jpg";
import HeadPhone from "../Images/Headphones.jpg";
import Specs from "../Images/Specs.jpg";
import Phone from "../Images/Phone.jpg";
import Bag from "../Images/Bag.jpg";
import Home from "../Images/home.jpg";
import Shoes from "../Images/shoes.jpg";
import chair from "../Images/Chair.jpg";
import Laptop from "../Images/lap.jpg";
import Playstation from "../Images/playstation.jpg";
import AS from "../Images/savings.jpg";

const Calculator = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [savings, setSavings] = useState(0);
  const [personalExpense, setPersonalExpense] = useState(0);
  const [familyExpense, setFamilyExpense] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [savingsBalance, setSavingsBalance] = useState(0);

  const handleCalculate = () => {
    const amount = parseFloat(enteredAmount);
    if (!isNaN(amount)) {
      const savingsPercentage = 0.7;
      const personalExpensePercentage = 0.15;
      const familyExpensePercentage = 0.15;

      const calculatedSavings = amount * savingsPercentage;
      const calculatedPersonalExpense = amount * personalExpensePercentage;
      const calculatedFamilyExpense = amount * familyExpensePercentage;
      const totalSavings = [
        dl,
        HeadPhone,
        Specs,
        Phone,
        Bag,
        Home,
        Shoes,
        chair,
        Laptop,
        car,
        Playstation,
      ]
        .slice(1)
        .reduce(
          (total, item, index) =>
            total + calculatedSavings * 0.5 ** (index + 1),
          0
        );
      const savingsBalance = calculatedSavings - totalSavings;

      setTotalAmount(amount);
      setSavings(calculatedSavings);
      setPersonalExpense(calculatedPersonalExpense);
      setFamilyExpense(calculatedFamilyExpense);
      setSavingsBalance(savingsBalance);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid numeric amount.");
    }
  };

  return (
    <div className="main min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Savings Calculator</h1>
        </div>
        <div className="flex items-center mb-4">
          <input
            className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-100 text-gray-700"
            type="text"
            placeholder="Enter Amount"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-left mb-4">{errorMessage}</p>
        )}
        <div className="text-left mb-4">
          <h1 className="text-blue-500">Total Amount: {totalAmount}₹</h1>
          <h1 className="text-green-500">Savings(70%): {savings}₹</h1>
          <h1 className="text-yellow-500">
            Personal Expense(15%): {personalExpense}₹
          </h1>
          <h1 className="text-orange-500">
            Family Expense(15%): {familyExpense}₹
          </h1>
          <h1 className="text-rose-500">balance:{savingsBalance}</h1>
        </div>

        <div className="text-left mb-4">
          <h1 className="font-bold text-xl mb-4">SAVINGS</h1>
          <div className="grid grid-cols-2 gap-4">
            {[
              {},
              {  image: AS, title: "Actual Savings" },
              { image: Phone, title: "New Phone" },
              { image: Specs, title: "Specs" },
              { image: HeadPhone, title: "Gaming HeadPhone" },
              { image: chair, title: "Gaming chair" },
              { image: Bag, title: "Bag" },
              { image: Shoes, title: "Shoes" },
              { image: dl, title: "Driving License" },
              { image: Home, title: "Home renovation" },
              { image: Laptop, title: "Upgrade Laptop" },
              { image: car, title: "New Car" },
              { image: Playstation, title: "Playstation" },
            ].map(
              (item, index) =>
                index !== 0 && (
                  <div
                    key={index}
                    className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-32 h-20 rounded-md mx-auto"
                    />
                    <div className="p-4 bg-white text-center mt-2">
                      <h1 className="text-lg font-bold mb-2">{item.title}</h1>
                      <p>{(0.5**index)*100}%</p>
                      <p>{savings * 0.5 ** index}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
