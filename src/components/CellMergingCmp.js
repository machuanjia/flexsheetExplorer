"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var wjcGridSheet = require("wijmo/wijmo.grid.sheet");
'use strict';
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var CellMergingCmp = (function () {
    function CellMergingCmp() {
        this.mergeState = {};
    }
    CellMergingCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
            flexSheet.selectionChanged.addHandler(function () {
                self.mergeState = flexSheet.getSelectionFormatState();
            });
        }
    };
    CellMergingCmp.prototype.mergeCells = function () {
        if (this.flexSheet) {
            this.flexSheet.mergeRange();
            this.mergeState = this.flexSheet.getSelectionFormatState();
        }
    };
    return CellMergingCmp;
}());
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], CellMergingCmp.prototype, "flexSheet", void 0);
CellMergingCmp = __decorate([
    core_1.Component({
        selector: 'cell-merging-cmp',
        templateUrl: 'src/components/cellMergingCmp.html'
    })
], CellMergingCmp);
exports.CellMergingCmp = CellMergingCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: CellMergingCmp }
]);
var CellMergingModule = (function () {
    function CellMergingModule() {
    }
    return CellMergingModule;
}());
CellMergingModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [CellMergingCmp],
    })
], CellMergingModule);
exports.CellMergingModule = CellMergingModule;
//# sourceMappingURL=CellMergingCmp.js.map