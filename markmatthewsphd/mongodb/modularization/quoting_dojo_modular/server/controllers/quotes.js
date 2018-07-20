module.exports = {
    index: function (request, response) {
        let title = "Modular Quoting Dojo";
        response.render('index', {title: title});
    },

    create: function (request, response) {
        console.log('POST DATA', request.body);
        var quote = new Quote(request.body);
        quote.name = request.body.name;
        quote.quote = request.body.quote;

        quote.save(function (errors) {
            if (errors) {
                console.log('we have errors', errors);
                for (var key in errors.errors) {
                    request.flash('adding_quote', errors.errors[key].message);
                }
                let title = "Error Page";
                response.render('error', {title: title});
            }
            else {

                response.redirect('/');
            }
        });
        console.log(quote.name, quote.quote)


        // response.redirect('/');
    }


};