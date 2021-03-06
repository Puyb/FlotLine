WAF.define('FlotLine', ['waf-core/widget'], function(widget) {

    var FlotLine = widget.create('FlotLine', {
        data: widget.property({
            type: 'datasource',
            attributes: ['x', 'y']
        }),
        name: widget.property({ type: 'string' }),
        color: widget.property({ type: 'string' }),
        // dataSet: widget.property({
        //     type: 'datasource',
        //     attributes: ['name', 'color']
        // }),
        init: function() {
            this.data.onPageChange(function(page) {
                data = page.map(function(item) { return [ item.x, item.y ] });
                $.plot(this.node, [ data ], {
                    series: {
                        curvedLines: {
                            apply: true,
                            active: true,
                            monotonicFit: true
                        }
                    }
                });
            });
        }
    });

    return FlotLine;

});
