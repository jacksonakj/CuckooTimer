var ViewModel = {
	today : new Date(2012, 3, 1),
	totalHours : 0,
	totalMinutes : 45,
	totalSeconds : 12,
	tasks : [
		{
			name: 'Email, planning, and time tracking',
			description: 'This is the description',
			dueDate: new Date(2012, 3, 5, 8, 30, 0, 0),
			tags: ['Administrative'],
			status: {id:1, description: 'In Progress'},
			time : [
				{ start: new Date(2012, 3, 1, 8, 00, 0, 0), stop: new Date(2012, 3, 1, 8, 30, 0, 0), note: 'Your eyes can deceive you. Don\'t trust them. Kid, I\'ve flown from one side of this galaxy to the other.' }
			]
		}
	]
};