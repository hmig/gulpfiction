(function (exports) {
    'use strict';

    exports.angular.module('builder.packageBuilder', [])
        .service('packageBuilder', PackageBuilder);

    function PackageBuilder() { }

    PackageBuilder.prototype.build = function (project) {

    };

}(this));
