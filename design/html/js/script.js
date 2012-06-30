/* Author: 

*/
ko.bindingHandlers.dateString = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
		var pattern = allBindings.datePattern || 'MM/dd/yyyy';
        $(element).text(valueUnwrapped.toString(pattern));
    }
}

ko.bindingHandlers.timespan = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
		var pattern = allBindings.pattern || 'd.H:mm:ss';
		var timespan = new TimeSpan(valueUnwrapped);
		$(element).text(timespan.toString(pattern));   
    }
}

var viewModel = new ViewModel();
viewModel.today(new Date());
viewModel.totalTime(0);

var task1 = new Task('Email, planning, and time tracking');
task1.description('Task for tracking general administrative time.');
task1.dueDate(new Date(2012, 3, 5, 8, 30, 0, 0));
task1.tags.push('Administrative');
task1.tags.push('Misc');
task1.status(new TaskStatus(1, 'New'));
viewModel.tasks.push(task1);

ko.applyBindings(viewModel);

setInterval(function() {viewModel.totalTime(viewModel.totalTime() + 1000);}, 1000);

var timeEntry1 = new TimeEntry(new Date(2012, 5, 30, 01, 20, 0, 0));
timeEntry1.stop(new Date(2012, 5, 30, 01, 30, 0, 0));
timeEntry1.note('Your eyes can deceive you. Don\'t trust them. Kid, I\'ve flown from one side of this galaxy to the other.');
task1.timeEntries.push(timeEntry1);























