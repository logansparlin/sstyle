var subs = new SubsManager();

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        ReactLayout.render(App)
    }
})
