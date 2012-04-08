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
		var pattern = allBindings.pattern || 'minutes';
		var timespan = new Timespan(valueUnwrapped);
		if (pattern === 'minutes') {
	        $(element).text(timespan.minutes);
        } else if (pattern === 'seconds') {
	        $(element).text(pad(timespan.seconds,2));
        } else if (pattern === 'hours') {
        	$(element).text(timespan.hours);
        }        
    }
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function Timespan(timespan) {
    var self = this;
    self.days=Math.floor(timespan / 86400);
    self.hours = Math.floor((timespan - (self.days * 86400 ))/3600)
    self.minutes = Math.floor((timespan - (self.days * 86400 ) - (self.hours * 3600 ))/60)
    self.seconds = Math.floor((timespan - (self.days* 86400 ) - (self.hours * 3600 ) - (self.minutes*60)))
}



var viewModel = new ViewModel();
viewModel.today(new Date());
viewModel.totalTime(0);

var task1 = new Task('Email, planning, and time tracking');
task1.description = 'Task for tracking general administrative time.';
task1.dueDate = new Date(2012, 3, 5, 8, 30, 0, 0);
task1.tags.push('Administrative');
task1.status = new TaskStatus(1, 'New');
task1.time = new TimeEntry(new Date(2012, 3, 1, 8, 00, 0, 0));
task1.time.stop = new Date(2012, 3, 1, 8, 30, 0, 0);
task1.time.note = 'Your eyes can deceive you. Don\'t trust them. Kid, I\'ve flown from one side of this galaxy to the other.'
viewModel.tasks.push(task1);

ko.applyBindings(viewModel);

setInterval(function() {viewModel.totalTime(viewModel.totalTime() + 1);}, 1000);






















