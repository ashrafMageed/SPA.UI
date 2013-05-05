define('router', ['Sammy', 'underscore'],
    function (Sammy, _) {
        var
            //set up sammy.js
            sammy = new Sammy.Application(function () {
                if (Sammy.Title) {
                    this.use(Sammy.Title);
                    this.setTitle(config.title);
                }
            }),

            register = function (options) {
                if (options.routes) {
                    // Register a list of routes
                    _.each(options.routes, function (route) {
                        registerRoute({
                            route: route.route,
                            title: route.title,
                            callback: route.callback,
                            view: options.view,
                            group: route.group,
                            isDefault: !!route.isDefault,
                            id: route.id
                        });
                    });
                    return;
                }

                // Register 1 route
                registerRoute(options);
            },

            registerRoute = function (options) {
                if (!options.callback) {
                    throw Error('callback must be specified.');
                }

                if (options.isDefault) {
                    defaultRoute = options.route;
                    setupGet(options, '/');
                }

                setupGet(options);
            },

            navigateTo = function (url) {
                sammy.setLocation(url);
            },

            getUsableRoute = function (value) {
                return value && value.indexOf('/#') != -1 ? value : null;
            },

            setupGet = function (options, routeOverride) {
                var route = routeOverride || options.route;
                sammy.get(route, function (context) { //context is 'this'
                    options.callback(context.params); // Activate the viewmodel
                    
                    // move this into presenter module
                    var $group = $(options.group);
                    alert(options.group);
                    if (options.group === '.booking-steps') {
                        $group.hide();//.find(".active").hide().removeClass('active');
                        var $section = $(options.id);
                        $section.css({
                            display: 'block',
                            visibility: 'visible'
                        }).addClass('active');
                        
                    } else {
                        $('.view').hide();
                        // reset views
                        //$('.view').css({
                        //    marginLeft: '20px',
                        //    marginRight: '-20px',
                        //    opacity: 0
                        //});
                        $(options.view).css({
                            display: 'block',
                            visibility: 'visible'
                        }).addClass('view-active');
                    }
                    
                    //    .animate({
                    //    marginRight: 0,
                    //    marginLeft: 0,
                    //    opacity: 1
                    //}, 100, 500);
                    //presenter.transitionTo(
                    //    $(options.view),
                    //    options.route, //context.path, // We want to find the route we defined in the config
                    //    options.group
                    //        );
                    //if (this.title) {
                    //    this.title(options.title);
                    //}
                });
            },

            run = function () {
                var addressBarUrl = sammy.getLocation();
                startupUrl = getUsableRoute(addressBarUrl) ||  defaultRoute;

                sammy.run();
                navigateTo(startupUrl);
            };

        return {
            navigateTo: navigateTo,
            register: register,
            run: run
        };

    });