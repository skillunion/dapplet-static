({
    _querySelector: '.topic-owner .post-controls .actions',
    _uniqueClass: '.nonorg-widget',
    _buttonHtmlString: '<button class=\"widget-button btn-flat share no-text btn-icon nonorg-widget\" style=\"background-color: #08c;color: #fff;\">Add to NonOrg</button>',

    _onMutate: function (mutationsList) {
        var me = this;

        for (var j = 0; j < mutationsList.length; j++) {
            var actionsDiv = mutationsList[j].target.querySelector(me._querySelector);
            if (actionsDiv != null) {
                var widget = actionsDiv.querySelector(me._uniqueClass);
                if (widget == null) {
                    me._injectWidget(actionsDiv, me._buttonHtmlString);
                }
                break;
            }
        }
    },

    _injectWidget: function (node, html) {
        var me = this,
            widget = me._createElementFromHTML(html);

        widget.addEventListener("click", function () {
            me._onWidgetButtonClick.call(me);
        });

        node.appendChild(widget);
    },

    _createElementFromHTML: function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    },

    _onWidgetButtonClick: function () {
        this._pushTransactionCallback('2', {
          title: 'test'
        });
    },

    init: function (doc, pushTransactionCallback) {
        var me = this;
        me._pushTransactionCallback = pushTransactionCallback;
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        me.observer = new MutationObserver(function (mutationsList) {
            me._onMutate.call(me, mutationsList);
        });
        me.observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }
})
