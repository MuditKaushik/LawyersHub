(function (global) {
    function GetPackages() {
        function angularPkgs() {
            var ngPkgs = [
                "common",
                "compiler",
                "core",
                "forms",
                "http",
                "platform-browser",
                "platform-browser-dynamic",
                "router"
            ], pkgObject = Object.create(null);
            ngPkgs.forEach(function (val, pos) {
                var pkgName = '@angular/'.concat(val);
                pkgObject[pkgName] = "node_modules/".concat(pkgName).concat("/bundles/").concat(val).concat(".umd.js");
            });
            return pkgObject;
        }

        function otherPkgs() {
            var pkgObject = Object.create(null);
            pkgObject['@angular/common/http'] = "node_modules/@angular/common/bundles/common-http.umd.js";
            pkgObject['@ng-bootstrap/ng-bootstrap'] = "node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js";
            pkgObject['rxjs'] = "node_modules/rxjs";
            pkgObject['http-status-codes'] = "node_modules/http-status-codes/index.js";
            pkgObject['tslib'] = "node_modules/tslib/tslib.js";
            return pkgObject;
        }

        return {
            ngPkgs: angularPkgs,
            otherPkgs: otherPkgs
        }
    }

    System.config({
        paths: {
            "npm:": "node_modules/"
        },
        map: Object.assign({ "app": "app" }, GetPackages().ngPkgs(), GetPackages().otherPkgs()),
        packages: {
            "app": {
                main: "./main.js",
                defaultExtension: "js"
            },
            "rxjs": {
                defaultExtension: "js"
            }
        }
    });
})(this);
