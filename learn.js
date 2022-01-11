// // // useState

// const useState = (initialValue) => {
// 	const obj = {
// 		state: initialValue,
// 		setState: function (newValue) {
// 			this.state = newValue;
// 		},
// 	};

// 	return [obj.state, obj.setState];
// };

// ====================================

// import React from 'react';
// import './App.scss';

// function App() {
// 	const [firstNumber, setFirstNumber] = React.useState(0);
// 	const [secondNumber, setSecondNumber] = React.useState(0);
// 	const [mathOperation, setMathOperation] = React.useState('+');

// 	const calculate = (_firstNumber, _secondNumber, _mathOperation) => {
// 		if (_mathOperation === '+') {
// 			return _firstNumber + _secondNumber;
// 		}

// 		if (_mathOperation === '-') {
// 			return _firstNumber - _secondNumber;
// 		}

// 		if (_mathOperation === '*') {
// 			return _firstNumber * _secondNumber;
// 		}

// 		if (_mathOperation === '/') {
// 			return _firstNumber / _secondNumber;
// 		}
// 	};

// 	return (
// 		<>
// 			<h1>Calculator</h1>
// 			<div>
// 				<label>
// 					First number:
// 					<input
// 						type='text'
// 						onChange={(evt) =>
// 							setFirstNumber(Number(evt.target.value))
// 						}
// 					/>
// 				</label>
// 			</div>
// 			<div>
// 				<select onChange={(evt) => setMathOperation(evt.target.value)}>
// 					<option value='+'>+</option>
// 					<option value='-'>-</option>
// 					<option value='*'>*</option>
// 					<option value='/'>/</option>
// 				</select>
// 			</div>
// 			<div>
// 				<label>
// 					Second number:
// 					<input
// 						type='text'
// 						onChange={(evt) =>
// 							setSecondNumber(Number(evt.target.value))
// 						}
// 					/>
// 				</label>
// 			</div>
// 			<strong>{firstNumber}</strong> {mathOperation}{' '}
// 			<strong>{secondNumber}</strong> ={' '}
// 			<strong>
// 				{calculate(firstNumber, secondNumber, mathOperation)}
// 			</strong>
// 		</>
// 	);
// }

// export default App;
