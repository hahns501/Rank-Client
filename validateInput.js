//Code created by Fah Sysavanh
export function validateInput(id,pw)
{
	//storing user input into given variables
	var employeeID = id;
	var password = pw;

	//If employeeID field is blank or not numeric, alert
	if (employeeID == '' || isNaN(employeeID))
		alert('Employee ID should not be left blank or be a string of characters... Please try again');
	
	//If password is blank, try again
	else if (password == '')
		alert('Password should not be blank. Please try again');
	else
		alert('Input successful');

}
