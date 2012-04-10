function ViewModel() {
	var self = this;
	self.today = ko.observable();
	self.totalTime = ko.observable();
	self.tasks = ko.observableArray();
}

function TimeEntry(start) {
    var self = this;
    self.start =  ko.observable(start);
    self.stop =  ko.observable();
    self.note =  ko.observable();
    self.elapsed = ko.computed(function() {
    	if (self.start()) {
    		if (self.stop()) {
    			return self.stop() - self.start();
    		} else {
    			return new Date() - self.start();
    		} 
    	} else {
    		return 0;
    	}
    });
}

function TaskStatus(id, name) {
    var self = this;
    self.id = id;
    self.name = name
}

function Task(name) {
    var self = this;
    self.name = name;
    self.description = ko.observable();
    self.dueDate = ko.observable();
    self.tags = ko.observableArray();
    self.status = ko.observable([new TaskStatus(1, 'New')]);
    self.timeEntries = ko.observableArray();   
    self.totalTime = ko.computed(function() {
    	var timespan = 0;
    	for(var i = 0; i < self.timeEntries().length; i++) {
    		timespan += self.timeEntries()[i].elapsed();
    	}
    	return timespan;
    }); 
}


