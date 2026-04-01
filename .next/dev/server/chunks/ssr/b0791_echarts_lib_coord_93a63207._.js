module.exports = [
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s([
    "isCoordinateSystemType",
    ()=>isCoordinateSystemType
]);
function isCoordinateSystemType(coordSys, type) {
    return coordSys.type === type;
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/GridModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OUTER_BOUNDS_CLAMP_DEFAULT",
    ()=>OUTER_BOUNDS_CLAMP_DEFAULT,
    "OUTER_BOUNDS_DEFAULT",
    ()=>OUTER_BOUNDS_DEFAULT,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
var OUTER_BOUNDS_DEFAULT = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var OUTER_BOUNDS_CLAMP_DEFAULT = [
    '25%',
    '25%'
];
var GridModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(GridModel, _super);
    function GridModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridModel.prototype.mergeDefaultAndTheme = function(option, ecModel) {
        var outerBoundsCp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutParams"])(option.outerBounds);
        _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
        if (outerBoundsCp && option.outerBounds) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(option.outerBounds, outerBoundsCp);
        }
    };
    GridModel.prototype.mergeOption = function(newOption, ecModel) {
        _super.prototype.mergeOption.apply(this, arguments);
        if (this.option.outerBounds && newOption.outerBounds) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(this.option.outerBounds, newOption.outerBounds);
        }
    };
    GridModel.type = 'grid';
    GridModel.dependencies = [
        'xAxis',
        'yAxis'
    ];
    GridModel.layoutMode = 'box';
    GridModel.defaultOption = {
        show: false,
        // zlevel: 0,
        z: 0,
        left: '15%',
        top: 65,
        right: '10%',
        bottom: 80,
        // If grid size contain label
        containLabel: false,
        outerBoundsMode: 'auto',
        outerBounds: OUTER_BOUNDS_DEFAULT,
        outerBoundsContain: 'all',
        outerBoundsClampWidth: OUTER_BOUNDS_CLAMP_DEFAULT[0],
        outerBoundsClampHeight: OUTER_BOUNDS_CLAMP_DEFAULT[1],
        // width: {totalWidth} - left - right,
        // height: {totalHeight} - top - bottom,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.transparent,
        borderWidth: 1,
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral30
    };
    return GridModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = GridModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisModelCommonMixin",
    ()=>AxisModelCommonMixin
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ // eslint-disable-next-line @typescript-eslint/no-unused-vars
var AxisModelCommonMixin = /** @class */ function() {
    function AxisModelCommonMixin() {}
    AxisModelCommonMixin.prototype.getNeedCrossZero = function() {
        var option = this.option;
        return !option.scale;
    };
    /**
   * Should be implemented by each axis model if necessary.
   * @return coordinate system model
   */ AxisModelCommonMixin.prototype.getCoordSysModel = function() {
        return;
    };
    return AxisModelCommonMixin;
}();
;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/AxisModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartesianAxisModel",
    ()=>CartesianAxisModel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
;
;
;
;
var CartesianAxisModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisModel, _super);
    function CartesianAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxisModel.prototype.getCoordSysModel = function() {
        return this.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
    };
    CartesianAxisModel.type = 'cartesian2dAxis';
    return CartesianAxisModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixin"](CartesianAxisModel, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"]);
const __TURBOPACK__default__export__ = CartesianAxisModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisDefault.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
var defaultOption = {
    show: true,
    // zlevel: 0,
    z: 0,
    // Inverse the axis.
    inverse: false,
    // Axis name displayed.
    name: '',
    // 'start' | 'middle' | 'end'
    nameLocation: 'end',
    // By degree. By default auto rotate by nameLocation.
    nameRotate: null,
    nameTruncate: {
        maxWidth: null,
        ellipsis: '...',
        placeholder: '.'
    },
    // Use global text style by default.
    nameTextStyle: {
    },
    // The gap between axisName and axisLine.
    nameGap: 15,
    // Default `false` to support tooltip.
    silent: false,
    // Default `false` to avoid legacy user event listener fail.
    triggerEvent: false,
    tooltip: {
        show: false
    },
    axisPointer: {},
    axisLine: {
        show: true,
        onZero: true,
        onZeroAxisIndex: null,
        lineStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.axisLine,
            width: 1,
            type: 'solid'
        },
        // The arrow at both ends the the axis.
        symbol: [
            'none',
            'none'
        ],
        symbolSize: [
            10,
            15
        ],
        breakLine: true
    },
    axisTick: {
        show: true,
        // Whether axisTick is inside the grid or outside the grid.
        inside: false,
        // The length of axisTick.
        length: 5,
        lineStyle: {
            width: 1
        }
    },
    axisLabel: {
        show: true,
        // Whether axisLabel is inside the grid or outside the grid.
        inside: false,
        rotate: 0,
        // true | false | null/undefined (auto)
        showMinLabel: null,
        // true | false | null/undefined (auto)
        showMaxLabel: null,
        margin: 8,
        // formatter: null,
        fontSize: 12,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.axisLabel,
        // In scenarios like axis labels, when labels text's progression direction matches the label
        // layout direction (e.g., when all letters are in a single line), extra start/end margin is
        // needed to prevent the text from appearing visually joined. In the other case, when lables
        // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
        // compact, so NO extra top/bottom margin should be applied.
        textMargin: [
            0,
            3
        ]
    },
    splitLine: {
        show: true,
        showMinLine: true,
        showMaxLine: true,
        lineStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.axisSplitLine,
            width: 1,
            type: 'solid'
        }
    },
    splitArea: {
        show: false,
        areaStyle: {
            color: [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.backgroundTint,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.backgroundTransparent
            ]
        }
    },
    breakArea: {
        show: true,
        itemStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral00,
            // Break border color should be darker than the splitLine
            // because it has opacity and should be more prominent
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.border,
            borderWidth: 1,
            borderType: [
                3,
                3
            ],
            opacity: 0.6
        },
        zigzagAmplitude: 4,
        zigzagMinSpan: 4,
        zigzagMaxSpan: 20,
        zigzagZ: 100,
        expandOnClick: true
    },
    breakLabelLayout: {
        moveOverlap: 'auto'
    }
};
var categoryAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]({
    // The gap at both ends of the axis. For categoryAxis, boolean.
    boundaryGap: true,
    // Set false to faster category collection.
    deduplication: null,
    jitter: 0,
    jitterOverlap: true,
    jitterMargin: 2,
    // splitArea: {
    // show: false
    // },
    splitLine: {
        show: false
    },
    axisTick: {
        // If tick is align with label when boundaryGap is true
        alignWithLabel: false,
        interval: 'auto',
        show: 'auto'
    },
    axisLabel: {
        interval: 'auto'
    }
}, defaultOption);
var valueAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]({
    boundaryGap: [
        0,
        0
    ],
    axisLine: {
        // Not shown when other axis is categoryAxis in cartesian
        show: 'auto'
    },
    axisTick: {
        // Not shown when other axis is categoryAxis in cartesian
        show: 'auto'
    },
    // TODO
    // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
    splitNumber: 5,
    minorTick: {
        // Minor tick, not available for cateogry axis.
        show: false,
        // Split number of minor ticks. The value should be in range of (0, 100)
        splitNumber: 5,
        // Length of minor tick
        length: 3,
        // Line style
        lineStyle: {
        }
    },
    minorSplitLine: {
        show: false,
        lineStyle: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.axisMinorSplitLine,
            width: 1
        }
    }
}, defaultOption);
var timeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]({
    splitNumber: 6,
    axisLabel: {
        // To eliminate labels that are not nice
        showMinLabel: false,
        showMaxLabel: false,
        rich: {
            primary: {
                fontWeight: 'bold'
            }
        }
    },
    splitLine: {
        show: false
    }
}, valueAxis);
var logAxis = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
    logBase: 10
}, valueAxis);
const __TURBOPACK__default__export__ = {
    category: categoryAxis,
    value: valueAxis,
    time: timeAxis,
    log: logAxis
};
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisCommonTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_context__.s([
    "AXIS_TYPES",
    ()=>AXIS_TYPES
]);
var AXIS_TYPES = {
    value: 1,
    category: 1,
    time: 1,
    log: 1
};
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>axisModelCreator
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisCommonTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisCommonTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function axisModelCreator(registers, axisName, BaseAxisModelClass, extraDefaultOption) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisCommonTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AXIS_TYPES"], function(v, axisType) {
        var defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][axisType], true), extraDefaultOption, true);
        var AxisModel = /** @class */ function(_super) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(AxisModel, _super);
            function AxisModel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = axisName + 'Axis.' + axisType;
                return _this;
            }
            AxisModel.prototype.mergeDefaultAndTheme = function(option, ecModel) {
                var layoutMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchLayoutMode"])(this);
                var inputPositionParams = layoutMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutParams"])(option) : {};
                var themeModel = ecModel.getTheme();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(option, themeModel.get(axisType + 'Axis'));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(option, this.getDefaultOption());
                option.type = getAxisType(option);
                if (layoutMode) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(option, inputPositionParams, layoutMode);
                }
            };
            AxisModel.prototype.optionUpdated = function() {
                var thisOption = this.option;
                if (thisOption.type === 'category') {
                    this.__ordinalMeta = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$OrdinalMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createByAxisModel(this);
                }
            };
            /**
       * Should not be called before all of 'getInitailData' finished.
       * Because categories are collected during initializing data.
       */ AxisModel.prototype.getCategories = function(rawData) {
                var option = this.option;
                // FIXME
                // warning if called before all of 'getInitailData' finished.
                if (option.type === 'category') {
                    if (rawData) {
                        return option.data;
                    }
                    return this.__ordinalMeta.categories;
                }
            };
            AxisModel.prototype.getOrdinalMeta = function() {
                return this.__ordinalMeta;
            };
            AxisModel.prototype.updateAxisBreaks = function(payload) {
                var axisBreakHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisBreakHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAxisBreakHelper"])();
                return axisBreakHelper ? axisBreakHelper.updateModelAxisBreak(this, payload) : {
                    breaks: []
                };
            };
            AxisModel.type = axisName + 'Axis.' + axisType;
            AxisModel.defaultOption = defaultOption;
            return AxisModel;
        }(BaseAxisModelClass);
        registers.registerComponentModel(AxisModel);
    });
    registers.registerSubTypeDefaulter(axisName + 'Axis', getAxisType);
}
function getAxisType(option) {
    // Default axis with data is category axis
    return option.type || (option.data ? 'category' : 'value');
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleRawExtentInfo",
    ()=>ScaleRawExtentInfo,
    "ensureScaleRawExtentInfo",
    ()=>ensureScaleRawExtentInfo,
    "parseAxisModelMinMax",
    ()=>parseAxisModelMinMax
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-ssr] (ecmascript)");
;
;
var ScaleRawExtentInfo = /** @class */ function() {
    function ScaleRawExtentInfo(scale, model, // Usually: data extent from all series on this axis.
    originalExtent) {
        this._prepareParams(scale, model, originalExtent);
    }
    /**
   * Parameters depending on outside (like model, user callback)
   * are prepared and fixed here.
   */ ScaleRawExtentInfo.prototype._prepareParams = function(scale, model, // Usually: data extent from all series on this axis.
    dataExtent) {
        if (dataExtent[1] < dataExtent[0]) {
            dataExtent = [
                NaN,
                NaN
            ];
        }
        this._dataMin = dataExtent[0];
        this._dataMax = dataExtent[1];
        var isOrdinal = this._isOrdinal = scale.type === 'ordinal';
        this._needCrossZero = scale.type === 'interval' && model.getNeedCrossZero && model.getNeedCrossZero();
        var axisMinValue = model.get('min', true);
        if (axisMinValue == null) {
            axisMinValue = model.get('startValue', true);
        }
        var modelMinRaw = this._modelMinRaw = axisMinValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(modelMinRaw)) {
            // This callback always provides users the full data extent (before data is filtered).
            this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw({
                min: dataExtent[0],
                max: dataExtent[1]
            }));
        } else if (modelMinRaw !== 'dataMin') {
            this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw);
        }
        var modelMaxRaw = this._modelMaxRaw = model.get('max', true);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(modelMaxRaw)) {
            // This callback always provides users the full data extent (before data is filtered).
            this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw({
                min: dataExtent[0],
                max: dataExtent[1]
            }));
        } else if (modelMaxRaw !== 'dataMax') {
            this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw);
        }
        if (isOrdinal) {
            // FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
            // and progressive rendering is using, here the category result might just only contain
            // the processed chunk rather than the entire result.
            this._axisDataLen = model.getCategories().length;
        } else {
            var boundaryGap = model.get('boundaryGap');
            var boundaryGapArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(boundaryGap) ? boundaryGap : [
                boundaryGap || 0,
                boundaryGap || 0
            ];
            if (typeof boundaryGapArr[0] === 'boolean' || typeof boundaryGapArr[1] === 'boolean') {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn('Boolean type for boundaryGap is only ' + 'allowed for ordinal axis. Please use string in ' + 'percentage instead, e.g., "20%". Currently, ' + 'boundaryGap is set to be 0.');
                }
                this._boundaryGapInner = [
                    0,
                    0
                ];
            } else {
                this._boundaryGapInner = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(boundaryGapArr[0], 1),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(boundaryGapArr[1], 1)
                ];
            }
        }
    };
    /**
   * Calculate extent by prepared parameters.
   * This method has no external dependency and can be called duplicatedly,
   * getting the same result.
   * If parameters changed, should call this method to recalcuate.
   */ ScaleRawExtentInfo.prototype.calculate = function() {
        // Notice: When min/max is not set (that is, when there are null/undefined,
        // which is the most common case), these cases should be ensured:
        // (1) For 'ordinal', show all axis.data.
        // (2) For others:
        //      + `boundaryGap` is applied (if min/max set, boundaryGap is
        //      disabled).
        //      + If `needCrossZero`, min/max should be zero, otherwise, min/max should
        //      be the result that originalExtent enlarged by boundaryGap.
        // (3) If no data, it should be ensured that `scale.setBlank` is set.
        var isOrdinal = this._isOrdinal;
        var dataMin = this._dataMin;
        var dataMax = this._dataMax;
        var axisDataLen = this._axisDataLen;
        var boundaryGapInner = this._boundaryGapInner;
        var span = !isOrdinal ? dataMax - dataMin || Math.abs(dataMin) : null;
        // Currently if a `'value'` axis model min is specified as 'dataMin'/'dataMax',
        // `boundaryGap` will not be used. It's the different from specifying as `null`/`undefined`.
        var min = this._modelMinRaw === 'dataMin' ? dataMin : this._modelMinNum;
        var max = this._modelMaxRaw === 'dataMax' ? dataMax : this._modelMaxNum;
        // If `_modelMinNum`/`_modelMaxNum` is `null`/`undefined`, should not be fixed.
        var minFixed = min != null;
        var maxFixed = max != null;
        if (min == null) {
            min = isOrdinal ? axisDataLen ? 0 : NaN : dataMin - boundaryGapInner[0] * span;
        }
        if (max == null) {
            max = isOrdinal ? axisDataLen ? axisDataLen - 1 : NaN : dataMax + boundaryGapInner[1] * span;
        }
        (min == null || !isFinite(min)) && (min = NaN);
        (max == null || !isFinite(max)) && (max = NaN);
        var isBlank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eqNaN"])(min) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eqNaN"])(max) || isOrdinal && !axisDataLen;
        // If data extent modified, need to recalculated to ensure cross zero.
        if (this._needCrossZero) {
            // Axis is over zero and min is not set
            if (min > 0 && max > 0 && !minFixed) {
                min = 0;
            // minFixed = true;
            }
            // Axis is under zero and max is not set
            if (min < 0 && max < 0 && !maxFixed) {
                max = 0;
            // maxFixed = true;
            }
        // PENDING:
        // When `needCrossZero` and all data is positive/negative, should it be ensured
        // that the results processed by boundaryGap are positive/negative?
        // If so, here `minFixed`/`maxFixed` need to be set.
        }
        var determinedMin = this._determinedMin;
        var determinedMax = this._determinedMax;
        if (determinedMin != null) {
            min = determinedMin;
            minFixed = true;
        }
        if (determinedMax != null) {
            max = determinedMax;
            maxFixed = true;
        }
        // Ensure min/max be finite number or NaN here. (not to be null/undefined)
        // `NaN` means min/max axis is blank.
        return {
            min: min,
            max: max,
            minFixed: minFixed,
            maxFixed: maxFixed,
            isBlank: isBlank
        };
    };
    ScaleRawExtentInfo.prototype.modifyDataMinMax = function(minMaxName, val) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!this.frozen);
        }
        this[DATA_MIN_MAX_ATTR[minMaxName]] = val;
    };
    ScaleRawExtentInfo.prototype.setDeterminedMinMax = function(minMaxName, val) {
        var attr = DETERMINED_MIN_MAX_ATTR[minMaxName];
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(!this.frozen && this[attr] == null);
        }
        this[attr] = val;
    };
    ScaleRawExtentInfo.prototype.freeze = function() {
        // @ts-ignore
        this.frozen = true;
    };
    return ScaleRawExtentInfo;
}();
;
var DETERMINED_MIN_MAX_ATTR = {
    min: '_determinedMin',
    max: '_determinedMax'
};
var DATA_MIN_MAX_ATTR = {
    min: '_dataMin',
    max: '_dataMax'
};
function ensureScaleRawExtentInfo(scale, model, // Usually: data extent from all series on this axis.
originalExtent) {
    // Do not permit to recreate.
    var rawExtentInfo = scale.rawExtentInfo;
    if (rawExtentInfo) {
        return rawExtentInfo;
    }
    rawExtentInfo = new ScaleRawExtentInfo(scale, model, originalExtent);
    // @ts-ignore
    scale.rawExtentInfo = rawExtentInfo;
    return rawExtentInfo;
}
function parseAxisModelMinMax(scale, minMax) {
    return minMax == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eqNaN"])(minMax) ? NaN : scale.parse(minMax);
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScaleByModel",
    ()=>createScaleByModel,
    "getAxisRawValue",
    ()=>getAxisRawValue,
    "getDataDimensionsOnAxis",
    ()=>getDataDimensionsOnAxis,
    "getOptionCategoryInterval",
    ()=>getOptionCategoryInterval,
    "getScaleExtent",
    ()=>getScaleExtent,
    "ifAxisCrossZero",
    ()=>ifAxisCrossZero,
    "isNameLocationCenter",
    ()=>isNameLocationCenter,
    "makeLabelFormatter",
    ()=>makeLabelFormatter,
    "niceScaleExtent",
    ()=>niceScaleExtent,
    "retrieveAxisBreaksOption",
    ()=>retrieveAxisBreaksOption,
    "shouldAxisShow",
    ()=>shouldAxisShow,
    "shouldShowAllLabels",
    ()=>shouldShowAllLabels,
    "unionAxisExtentFromData",
    ()=>unionAxisExtentFromData
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Ordinal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Scale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function getScaleExtent(scale, model) {
    var scaleType = scale.type;
    var rawExtentResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureScaleRawExtentInfo"])(scale, model, scale.getExtent()).calculate();
    scale.setBlank(rawExtentResult.isBlank);
    var min = rawExtentResult.min;
    var max = rawExtentResult.max;
    // If bars are placed on a base axis of type time or interval account for axis boundary overflow and current axis
    // is base axis
    // FIXME
    // (1) Consider support value axis, where below zero and axis `onZero` should be handled properly.
    // (2) Refactor the logic with `barGrid`. Is it not need to `makeBarWidthAndOffsetInfo` twice with different extent?
    //     Should not depend on series type `bar`?
    // (3) Fix that might overlap when using dataZoom.
    // (4) Consider other chart types using `barGrid`?
    // See #6728, #4862, `test/bar-overflow-time-plot.html`
    var ecModel = model.ecModel;
    if (ecModel && scaleType === 'time' /* || scaleType === 'interval' */ ) {
        var barSeriesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareLayoutBarSeries"])('bar', ecModel);
        var isBaseAxisAndHasBarSeries_1 = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](barSeriesModels, function(seriesModel) {
            isBaseAxisAndHasBarSeries_1 = isBaseAxisAndHasBarSeries_1 || seriesModel.getBaseAxis() === model.axis;
        });
        if (isBaseAxisAndHasBarSeries_1) {
            // Calculate placement of bars on axis. TODO should be decoupled
            // with barLayout
            var barWidthAndOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeColumnLayout"])(barSeriesModels);
            // Adjust axis min and max to account for overflow
            var adjustedScale = adjustScaleForOverflow(min, max, model, barWidthAndOffset);
            min = adjustedScale.min;
            max = adjustedScale.max;
        }
    }
    return {
        extent: [
            min,
            max
        ],
        // "fix" means "fixed", the value should not be
        // changed in the subsequent steps.
        fixMin: rawExtentResult.minFixed,
        fixMax: rawExtentResult.maxFixed
    };
}
function adjustScaleForOverflow(min, max, model, // Only support cartesian coord yet.
barWidthAndOffset) {
    // Get Axis Length
    var axisExtent = model.axis.getExtent();
    var axisLength = Math.abs(axisExtent[1] - axisExtent[0]);
    // Get bars on current base axis and calculate min and max overflow
    var barsOnCurrentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveColumnLayout"])(barWidthAndOffset, model.axis);
    if (barsOnCurrentAxis === undefined) {
        return {
            min: min,
            max: max
        };
    }
    var minOverflow = Infinity;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](barsOnCurrentAxis, function(item) {
        minOverflow = Math.min(item.offset, minOverflow);
    });
    var maxOverflow = -Infinity;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](barsOnCurrentAxis, function(item) {
        maxOverflow = Math.max(item.offset + item.width, maxOverflow);
    });
    minOverflow = Math.abs(minOverflow);
    maxOverflow = Math.abs(maxOverflow);
    var totalOverFlow = minOverflow + maxOverflow;
    // Calculate required buffer based on old range and overflow
    var oldRange = max - min;
    var oldRangePercentOfNew = 1 - (minOverflow + maxOverflow) / axisLength;
    var overflowBuffer = oldRange / oldRangePercentOfNew - oldRange;
    max += overflowBuffer * (maxOverflow / totalOverFlow);
    min -= overflowBuffer * (minOverflow / totalOverFlow);
    return {
        min: min,
        max: max
    };
}
function niceScaleExtent(scale, inModel) {
    var model = inModel;
    var extentInfo = getScaleExtent(scale, model);
    var extent = extentInfo.extent;
    var splitNumber = model.get('splitNumber');
    if (scale instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
        scale.base = model.get('logBase');
    }
    var scaleType = scale.type;
    var interval = model.get('interval');
    var isIntervalOrTime = scaleType === 'interval' || scaleType === 'time';
    scale.setBreaksFromOption(retrieveAxisBreaksOption(model));
    scale.setExtent(extent[0], extent[1]);
    scale.calcNiceExtent({
        splitNumber: splitNumber,
        fixMin: extentInfo.fixMin,
        fixMax: extentInfo.fixMax,
        minInterval: isIntervalOrTime ? model.get('minInterval') : null,
        maxInterval: isIntervalOrTime ? model.get('maxInterval') : null
    });
    // If some one specified the min, max. And the default calculated interval
    // is not good enough. He can specify the interval. It is often appeared
    // in angle axis with angle 0 - 360. Interval calculated in interval scale is hard
    // to be 60.
    // FIXME
    if (interval != null) {
        scale.setInterval && scale.setInterval(interval);
    }
}
function createScaleByModel(model, axisType) {
    axisType = axisType || model.get('type');
    if (axisType) {
        switch(axisType){
            // Buildin scale
            case 'category':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Ordinal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                    ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
                    extent: [
                        Infinity,
                        -Infinity
                    ]
                });
            case 'time':
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                    locale: model.ecModel.getLocaleModel(),
                    useUTC: model.ecModel.get('useUTC')
                });
            default:
                // case 'value'/'interval', 'log', or others.
                return new (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getClass(axisType) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        }
    }
}
function ifAxisCrossZero(axis) {
    var dataExtent = axis.scale.getExtent();
    var min = dataExtent[0];
    var max = dataExtent[1];
    return !(min > 0 && max > 0 || min < 0 && max < 0);
}
function makeLabelFormatter(axis) {
    var labelFormatter = axis.getLabelModel().get('formatter');
    if (axis.type === 'time') {
        var parsed_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTimeAxisLabelFormatter"])(labelFormatter);
        return function(tick, idx) {
            return axis.scale.getFormattedLabel(tick, idx, parsed_1);
        };
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](labelFormatter)) {
        return function(tick) {
            // For category axis, get raw value; for numeric axis,
            // get formatted label like '1,333,444'.
            var label = axis.scale.getLabel(tick);
            var text = labelFormatter.replace('{value}', label != null ? label : '');
            return text;
        };
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](labelFormatter)) {
        if (axis.type === 'category') {
            return function(tick, idx) {
                // The original intention of `idx` is "the index of the tick in all ticks".
                // But the previous implementation of category axis do not consider the
                // `axisLabel.interval`, which cause that, for example, the `interval` is
                // `1`, then the ticks "name5", "name7", "name9" are displayed, where the
                // corresponding `idx` are `0`, `2`, `4`, but not `0`, `1`, `2`. So we keep
                // the definition here for back compatibility.
                return labelFormatter(getAxisRawValue(axis, tick), tick.value - axis.scale.getExtent()[0], null // Using `null` just for backward compat.
                );
            };
        }
        var scaleBreakHelper_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])();
        return function(tick, idx) {
            // Using `null` just for backward compat. It's been found that in the `test/axis-customTicks.html`,
            // there is a formatter `function (value, index, revers = true) { ... }`. Although the third param
            // `revers` is incorrect and always `null`, changing it might introduce a breaking change.
            var extra = null;
            if (scaleBreakHelper_1) {
                extra = scaleBreakHelper_1.makeAxisLabelFormatterParamBreak(extra, tick["break"]);
            }
            return labelFormatter(getAxisRawValue(axis, tick), idx, extra);
        };
    } else {
        return function(tick) {
            return axis.scale.getLabel(tick);
        };
    }
}
function getAxisRawValue(axis, tick) {
    // In category axis with data zoom, tick is not the original
    // index of axis.data. So tick should not be exposed to user
    // in category axis.
    return axis.type === 'category' ? axis.scale.getLabel(tick) : tick.value;
}
function getOptionCategoryInterval(model) {
    var interval = model.get('interval');
    return interval == null ? 'auto' : interval;
}
function shouldShowAllLabels(axis) {
    return axis.type === 'category' && getOptionCategoryInterval(axis.getLabelModel()) === 0;
}
function getDataDimensionsOnAxis(data, axisDim) {
    // Remove duplicated dat dimensions caused by `getStackedDimension`.
    var dataDimMap = {};
    // Currently `mapDimensionsAll` will contain stack result dimension ('__\0ecstackresult').
    // PENDING: is it reasonable? Do we need to remove the original dim from "coord dim" since
    // there has been stacked result dim?
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](data.mapDimensionsAll(axisDim), function(dataDim) {
        // For example, the extent of the original dimension
        // is [0.1, 0.5], the extent of the `stackResultDimension`
        // is [7, 9], the final extent should NOT include [0.1, 0.5],
        // because there is no graphic corresponding to [0.1, 0.5].
        // See the case in `test/area-stack.html` `main1`, where area line
        // stack needs `yAxis` not start from 0.
        dataDimMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStackedDimension"])(data, dataDim)] = true;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"](dataDimMap);
}
function unionAxisExtentFromData(dataExtent, data, axisDim) {
    if (data) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](getDataDimensionsOnAxis(data, axisDim), function(dim) {
            var seriesExtent = data.getApproximateExtent(dim);
            seriesExtent[0] < dataExtent[0] && (dataExtent[0] = seriesExtent[0]);
            seriesExtent[1] > dataExtent[1] && (dataExtent[1] = seriesExtent[1]);
        });
    }
}
function isNameLocationCenter(nameLocation) {
    return nameLocation === 'middle' || nameLocation === 'center';
}
function shouldAxisShow(axisModel) {
    return axisModel.getShallow('show');
}
function retrieveAxisBreaksOption(model) {
    var option = model.get('breaks', true);
    if (option != null) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleBreakHelper"])()) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])('Must `import {AxisBreak} from "echarts/features.js"; use(AxisBreak);` first if using breaks option.');
            }
            return undefined;
        }
        if (!isSupportAxisBreak(model.axis)) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("Axis '" + model.axis.dim + "'-'" + model.axis.type + "' does not support break.");
            }
            return undefined;
        }
        return option;
    }
}
function isSupportAxisBreak(axis) {
    // The polar radius axis can also support break feasibly. Do not do it until the requirements are met.
    return (axis.dim === 'x' || axis.dim === 'y' || axis.dim === 'z' || axis.dim === 'single') && axis.type !== 'category';
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
var Cartesian = /** @class */ function() {
    function Cartesian(name) {
        this.type = 'cartesian';
        this._dimList = [];
        this._axes = {};
        this.name = name || '';
    }
    Cartesian.prototype.getAxis = function(dim) {
        return this._axes[dim];
    };
    Cartesian.prototype.getAxes = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](this._dimList, function(dim) {
            return this._axes[dim];
        }, this);
    };
    Cartesian.prototype.getAxesByScale = function(scaleType) {
        scaleType = scaleType.toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](this.getAxes(), function(axis) {
            return axis.scale.type === scaleType;
        });
    };
    Cartesian.prototype.addAxis = function(axis) {
        var dim = axis.dim;
        this._axes[dim] = axis;
        this._dimList.push(dim);
    };
    return Cartesian;
}();
;
const __TURBOPACK__default__export__ = Cartesian;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartesian2DDimensions",
    ()=>cartesian2DDimensions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
;
;
;
;
;
var cartesian2DDimensions = [
    'x',
    'y'
];
function canCalculateAffineTransform(scale) {
    return (scale.type === 'interval' || scale.type === 'time') && !scale.hasBreaks();
}
var Cartesian2D = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(Cartesian2D, _super);
    function Cartesian2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'cartesian2d';
        _this.dimensions = cartesian2DDimensions;
        return _this;
    }
    /**
   * Calculate an affine transform matrix if two axes are time or value.
   * It's mainly for accelartion on the large time series data.
   */ Cartesian2D.prototype.calcAffineTransform = function() {
        this._transform = this._invTransform = null;
        var xAxisScale = this.getAxis('x').scale;
        var yAxisScale = this.getAxis('y').scale;
        if (!canCalculateAffineTransform(xAxisScale) || !canCalculateAffineTransform(yAxisScale)) {
            return;
        }
        var xScaleExtent = xAxisScale.getExtent();
        var yScaleExtent = yAxisScale.getExtent();
        var start = this.dataToPoint([
            xScaleExtent[0],
            yScaleExtent[0]
        ]);
        var end = this.dataToPoint([
            xScaleExtent[1],
            yScaleExtent[1]
        ]);
        var xScaleSpan = xScaleExtent[1] - xScaleExtent[0];
        var yScaleSpan = yScaleExtent[1] - yScaleExtent[0];
        if (!xScaleSpan || !yScaleSpan) {
            return;
        }
        // Accelerate data to point calculation on the special large time series data.
        var scaleX = (end[0] - start[0]) / xScaleSpan;
        var scaleY = (end[1] - start[1]) / yScaleSpan;
        var translateX = start[0] - xScaleExtent[0] * scaleX;
        var translateY = start[1] - yScaleExtent[0] * scaleY;
        var m = this._transform = [
            scaleX,
            0,
            0,
            scaleY,
            translateX,
            translateY
        ];
        this._invTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invert"])([], m);
    };
    /**
   * Base axis will be used on stacking.
   */ Cartesian2D.prototype.getBaseAxis = function() {
        return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x');
    };
    Cartesian2D.prototype.containPoint = function(point) {
        var axisX = this.getAxis('x');
        var axisY = this.getAxis('y');
        return axisX.contain(axisX.toLocalCoord(point[0])) && axisY.contain(axisY.toLocalCoord(point[1]));
    };
    Cartesian2D.prototype.containData = function(data) {
        return this.getAxis('x').containData(data[0]) && this.getAxis('y').containData(data[1]);
    };
    Cartesian2D.prototype.containZone = function(data1, data2) {
        var zoneDiag1 = this.dataToPoint(data1);
        var zoneDiag2 = this.dataToPoint(data2);
        var area = this.getArea();
        var zone = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](zoneDiag1[0], zoneDiag1[1], zoneDiag2[0] - zoneDiag1[0], zoneDiag2[1] - zoneDiag1[1]);
        return area.intersect(zone);
    };
    Cartesian2D.prototype.dataToPoint = function(data, clamp, out) {
        out = out || [];
        var xVal = data[0];
        var yVal = data[1];
        // [CAVEAT]: Do not add time consuming operation within and before fast path.
        // Fast path.
        if (this._transform && xVal != null && isFinite(xVal) && yVal != null && isFinite(yVal)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(out, data, this._transform);
        }
        var xAxis = this.getAxis('x');
        var yAxis = this.getAxis('y');
        out[0] = xAxis.toGlobalCoord(xAxis.dataToCoord(xVal, clamp));
        out[1] = yAxis.toGlobalCoord(yAxis.dataToCoord(yVal, clamp));
        return out;
    };
    Cartesian2D.prototype.clampData = function(data, out) {
        var xScale = this.getAxis('x').scale;
        var yScale = this.getAxis('y').scale;
        var xAxisExtent = xScale.getExtent();
        var yAxisExtent = yScale.getExtent();
        var x = xScale.parse(data[0]);
        var y = yScale.parse(data[1]);
        out = out || [];
        out[0] = Math.min(Math.max(Math.min(xAxisExtent[0], xAxisExtent[1]), x), Math.max(xAxisExtent[0], xAxisExtent[1]));
        out[1] = Math.min(Math.max(Math.min(yAxisExtent[0], yAxisExtent[1]), y), Math.max(yAxisExtent[0], yAxisExtent[1]));
        return out;
    };
    Cartesian2D.prototype.pointToData = function(point, clamp, out) {
        out = out || [];
        if (this._invTransform) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTransform"])(out, point, this._invTransform);
        }
        var xAxis = this.getAxis('x');
        var yAxis = this.getAxis('y');
        out[0] = xAxis.coordToData(xAxis.toLocalCoord(point[0]), clamp);
        out[1] = yAxis.coordToData(yAxis.toLocalCoord(point[1]), clamp);
        return out;
    };
    Cartesian2D.prototype.getOtherAxis = function(axis) {
        return this.getAxis(axis.dim === 'x' ? 'y' : 'x');
    };
    /**
   * Get rect area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */ Cartesian2D.prototype.getArea = function(tolerance) {
        tolerance = tolerance || 0;
        var xExtent = this.getAxis('x').getGlobalExtent();
        var yExtent = this.getAxis('y').getGlobalExtent();
        var x = Math.min(xExtent[0], xExtent[1]) - tolerance;
        var y = Math.min(yExtent[0], yExtent[1]) - tolerance;
        var width = Math.max(xExtent[0], xExtent[1]) - x + tolerance;
        var height = Math.max(yExtent[0], yExtent[1]) - y + tolerance;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](x, y, width, height);
    };
    return Cartesian2D;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
const __TURBOPACK__default__export__ = Cartesian2D;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxisTickLabelComputingKind",
    ()=>AxisTickLabelComputingKind,
    "calculateCategoryInterval",
    ()=>calculateCategoryInterval,
    "createAxisLabels",
    ()=>createAxisLabels,
    "createAxisLabelsComputingContext",
    ()=>createAxisLabelsComputingContext,
    "createAxisTicks",
    ()=>createAxisTicks
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
;
;
;
;
var modelInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var axisInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
var AxisTickLabelComputingKind = {
    estimate: 1,
    determine: 2
};
function createAxisLabelsComputingContext(kind) {
    return {
        out: {
            noPxChangeTryDetermine: []
        },
        kind: kind
    };
}
function tickValuesToNumbers(axis, values) {
    var nums = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](values, function(val) {
        return axis.scale.parse(val);
    });
    if (axis.type === 'time' && nums.length > 0) {
        // Time axis needs duplicate first/last tick (see TimeScale.getTicks())
        // The first and last tick/label don't get drawn
        nums.sort();
        nums.unshift(nums[0]);
        nums.push(nums[nums.length - 1]);
    }
    return nums;
}
function createAxisLabels(axis, ctx) {
    var custom = axis.getLabelModel().get('customValues');
    if (custom) {
        var labelFormatter_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
        var extent_1 = axis.scale.getExtent();
        var tickNumbers = tickValuesToNumbers(axis, custom);
        var ticks = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](tickNumbers, function(val) {
            return val >= extent_1[0] && val <= extent_1[1];
        });
        return {
            labels: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](ticks, function(numval) {
                var tick = {
                    value: numval
                };
                return {
                    formattedLabel: labelFormatter_1(tick),
                    rawLabel: axis.scale.getLabel(tick),
                    tickValue: numval,
                    time: undefined,
                    "break": undefined
                };
            })
        };
    }
    // Only ordinal scale support tick interval
    return axis.type === 'category' ? makeCategoryLabels(axis, ctx) : makeRealNumberLabels(axis);
}
function createAxisTicks(axis, tickModel, opt) {
    var custom = axis.getTickModel().get('customValues');
    if (custom) {
        var extent_2 = axis.scale.getExtent();
        var tickNumbers = tickValuesToNumbers(axis, custom);
        return {
            ticks: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"](tickNumbers, function(val) {
                return val >= extent_2[0] && val <= extent_2[1];
            })
        };
    }
    // Only ordinal scale support tick interval
    return axis.type === 'category' ? makeCategoryTicks(axis, tickModel) : {
        ticks: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](axis.scale.getTicks(opt), function(tick) {
            return tick.value;
        })
    };
}
function makeCategoryLabels(axis, ctx) {
    var labelModel = axis.getLabelModel();
    var result = makeCategoryLabelsActually(axis, labelModel, ctx);
    return !labelModel.get('show') || axis.scale.isBlank() ? {
        labels: []
    } : result;
}
function makeCategoryLabelsActually(axis, labelModel, ctx) {
    var labelsCache = ensureCategoryLabelCache(axis);
    var optionLabelInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionCategoryInterval"])(labelModel);
    var isEstimate = ctx.kind === AxisTickLabelComputingKind.estimate;
    // In AxisTickLabelComputingKind.estimate, the result likely varies during a single
    // pass of ec main process,due to the change of axisExtent, and will not be shared with
    // splitLine. Therefore no cache is used.
    if (!isEstimate) {
        // PENDING: check necessary?
        var result_1 = axisCacheGet(labelsCache, optionLabelInterval);
        if (result_1) {
            return result_1;
        }
    }
    var labels;
    var numericLabelInterval;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](optionLabelInterval)) {
        labels = makeLabelsByCustomizedCategoryInterval(axis, optionLabelInterval);
    } else {
        numericLabelInterval = optionLabelInterval === 'auto' ? makeAutoCategoryInterval(axis, ctx) : optionLabelInterval;
        labels = makeLabelsByNumericCategoryInterval(axis, numericLabelInterval);
    }
    var result = {
        labels: labels,
        labelCategoryInterval: numericLabelInterval
    };
    if (!isEstimate) {
        axisCacheSet(labelsCache, optionLabelInterval, result);
    } else {
        ctx.out.noPxChangeTryDetermine.push(function() {
            axisCacheSet(labelsCache, optionLabelInterval, result);
            return true;
        });
    }
    return result;
}
function makeCategoryTicks(axis, tickModel) {
    var ticksCache = ensureCategoryTickCache(axis);
    var optionTickInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionCategoryInterval"])(tickModel);
    var result = axisCacheGet(ticksCache, optionTickInterval);
    if (result) {
        return result;
    }
    var ticks;
    var tickCategoryInterval;
    // Optimize for the case that large category data and no label displayed,
    // we should not return all ticks.
    if (!tickModel.get('show') || axis.scale.isBlank()) {
        ticks = [];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](optionTickInterval)) {
        ticks = makeLabelsByCustomizedCategoryInterval(axis, optionTickInterval, true);
    } else if (optionTickInterval === 'auto') {
        var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel(), createAxisLabelsComputingContext(AxisTickLabelComputingKind.determine));
        tickCategoryInterval = labelsResult.labelCategoryInterval;
        ticks = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](labelsResult.labels, function(labelItem) {
            return labelItem.tickValue;
        });
    } else {
        tickCategoryInterval = optionTickInterval;
        ticks = makeLabelsByNumericCategoryInterval(axis, tickCategoryInterval, true);
    }
    // Cache to avoid calling interval function repeatedly.
    return axisCacheSet(ticksCache, optionTickInterval, {
        ticks: ticks,
        tickCategoryInterval: tickCategoryInterval
    });
}
function makeRealNumberLabels(axis) {
    var ticks = axis.scale.getTicks();
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    return {
        labels: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](ticks, function(tick, idx) {
            return {
                formattedLabel: labelFormatter(tick, idx),
                rawLabel: axis.scale.getLabel(tick),
                tickValue: tick.value,
                time: tick.time,
                "break": tick["break"]
            };
        })
    };
}
// Large category data calculation is performance sensitive, and ticks and label probably will
// be fetched multiple times (e.g. shared by splitLine and axisTick). So we cache the result.
// axis is created each time during a ec process, so we do not need to clear cache.
var ensureCategoryTickCache = initAxisCacheMethod('axisTick');
var ensureCategoryLabelCache = initAxisCacheMethod('axisLabel');
/**
 * PENDING: refactor to JS Map? Because key can be a function or more complicated object, and
 * cache size always is small, and currently no JS Map object key polyfill, we use a simple
 * array cache instead of plain object hash.
 */ function initAxisCacheMethod(prop) {
    return function ensureCache(axis) {
        return axisInner(axis)[prop] || (axisInner(axis)[prop] = {
            list: []
        });
    };
}
function axisCacheGet(cache, key) {
    for(var i = 0; i < cache.list.length; i++){
        if (cache.list[i].key === key) {
            return cache.list[i].value;
        }
    }
}
function axisCacheSet(cache, key, value) {
    cache.list.push({
        key: key,
        value: value
    });
    return value;
}
function makeAutoCategoryInterval(axis, ctx) {
    if (ctx.kind === AxisTickLabelComputingKind.estimate) {
        // Currently axisTick is not involved in estimate kind, and the result likely varies during a
        // single pass of ec main process, due to the change of axisExtent. Therefore no cache is used.
        var result_2 = axis.calculateCategoryInterval(ctx);
        ctx.out.noPxChangeTryDetermine.push(function() {
            axisInner(axis).autoInterval = result_2;
            return true;
        });
        return result_2;
    }
    // Both tick and label uses this result, cacah it to avoid recompute.
    var result = axisInner(axis).autoInterval;
    return result != null ? result : axisInner(axis).autoInterval = axis.calculateCategoryInterval(ctx);
}
function calculateCategoryInterval(axis, ctx) {
    var kind = ctx.kind;
    var params = fetchAutoCategoryIntervalCalculationParams(axis);
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var rotation = (params.axisRotate - params.labelRotate) / 180 * Math.PI;
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    // Providing this method is for optimization:
    // avoid generating a long array by `getTicks`
    // in large category data case.
    var tickCount = ordinalScale.count();
    if (ordinalExtent[1] - ordinalExtent[0] < 1) {
        return 0;
    }
    var step = 1;
    // Simple optimization. Arbitrary value.
    var maxCount = 40;
    if (tickCount > maxCount) {
        step = Math.max(1, Math.floor(tickCount / maxCount));
    }
    var tickValue = ordinalExtent[0];
    var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
    var unitW = Math.abs(unitSpan * Math.cos(rotation));
    var unitH = Math.abs(unitSpan * Math.sin(rotation));
    var maxW = 0;
    var maxH = 0;
    // Caution: Performance sensitive for large category data.
    // Consider dataZoom, we should make appropriate step to avoid O(n) loop.
    for(; tickValue <= ordinalExtent[1]; tickValue += step){
        var width = 0;
        var height = 0;
        // Not precise, do not consider align and vertical align
        // and each distance from axis line yet.
        var rect = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBoundingRect"](labelFormatter({
            value: tickValue
        }), params.font, 'center', 'top');
        // Magic number
        width = rect.width * 1.3;
        height = rect.height * 1.3;
        // Min size, void long loop.
        maxW = Math.max(maxW, width, 7);
        maxH = Math.max(maxH, height, 7);
    }
    var dw = maxW / unitW;
    var dh = maxH / unitH;
    // 0/0 is NaN, 1/0 is Infinity.
    isNaN(dw) && (dw = Infinity);
    isNaN(dh) && (dh = Infinity);
    var interval = Math.max(0, Math.floor(Math.min(dw, dh)));
    if (kind === AxisTickLabelComputingKind.estimate) {
        // In estimate kind, the inteval likely varies, thus do not erase the cache.
        ctx.out.noPxChangeTryDetermine.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bind"](calculateCategoryIntervalTryDetermine, null, axis, interval, tickCount));
        return interval;
    }
    var lastInterval = calculateCategoryIntervalDealCache(axis, interval, tickCount);
    return lastInterval != null ? lastInterval : interval;
}
function calculateCategoryIntervalTryDetermine(axis, interval, tickCount) {
    return calculateCategoryIntervalDealCache(axis, interval, tickCount) == null;
}
// Return the lastInterval if need to use it, otherwise return NullUndefined and save cache.
function calculateCategoryIntervalDealCache(axis, interval, tickCount) {
    var cache = modelInner(axis.model);
    var axisExtent = axis.getExtent();
    var lastAutoInterval = cache.lastAutoInterval;
    var lastTickCount = cache.lastTickCount;
    // Use cache to keep interval stable while moving zoom window,
    // otherwise the calculated interval might jitter when the zoom
    // window size is close to the interval-changing size.
    // For example, if all of the axis labels are `a, b, c, d, e, f, g`.
    // The jitter will cause that sometimes the displayed labels are
    // `a, d, g` (interval: 2) sometimes `a, c, e`(interval: 1).
    if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1 && lastAutoInterval > interval && cache.axisExtent0 === axisExtent[0] && cache.axisExtent1 === axisExtent[1]) {
        return lastAutoInterval;
    } else {
        cache.lastTickCount = tickCount;
        cache.lastAutoInterval = interval;
        cache.axisExtent0 = axisExtent[0];
        cache.axisExtent1 = axisExtent[1];
    }
}
function fetchAutoCategoryIntervalCalculationParams(axis) {
    var labelModel = axis.getLabelModel();
    return {
        axisRotate: axis.getRotate ? axis.getRotate() : axis.isHorizontal && !axis.isHorizontal() ? 90 : 0,
        labelRotate: labelModel.get('rotate') || 0,
        font: labelModel.getFont()
    };
}
function makeLabelsByNumericCategoryInterval(axis, categoryInterval, onlyTick) {
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    var labelModel = axis.getLabelModel();
    var result = [];
    // TODO: axisType: ordinalTime, pick the tick from each month/day/year/...
    var step = Math.max((categoryInterval || 0) + 1, 1);
    var startTick = ordinalExtent[0];
    var tickCount = ordinalScale.count();
    // Calculate start tick based on zero if possible to keep label consistent
    // while zooming and moving while interval > 0. Otherwise the selection
    // of displayable ticks and symbols probably keep changing.
    // 3 is empirical value.
    if (startTick !== 0 && step > 1 && tickCount / step > 2) {
        startTick = Math.round(Math.ceil(startTick / step) * step);
    }
    // (1) Only add min max label here but leave overlap checking
    // to render stage, which also ensure the returned list
    // suitable for splitLine and splitArea rendering.
    // (2) Scales except category always contain min max label so
    // do not need to perform this process.
    var showAllLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldShowAllLabels"])(axis);
    var includeMinLabel = labelModel.get('showMinLabel') || showAllLabel;
    var includeMaxLabel = labelModel.get('showMaxLabel') || showAllLabel;
    if (includeMinLabel && startTick !== ordinalExtent[0]) {
        addItem(ordinalExtent[0]);
    }
    // Optimize: avoid generating large array by `ordinalScale.getTicks()`.
    var tickValue = startTick;
    for(; tickValue <= ordinalExtent[1]; tickValue += step){
        addItem(tickValue);
    }
    if (includeMaxLabel && tickValue - step !== ordinalExtent[1]) {
        addItem(ordinalExtent[1]);
    }
    function addItem(tickValue) {
        var tickObj = {
            value: tickValue
        };
        result.push(onlyTick ? tickValue : {
            formattedLabel: labelFormatter(tickObj),
            rawLabel: ordinalScale.getLabel(tickObj),
            tickValue: tickValue,
            time: undefined,
            "break": undefined
        });
    }
    return result;
}
function makeLabelsByCustomizedCategoryInterval(axis, categoryInterval, onlyTick) {
    var ordinalScale = axis.scale;
    var labelFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeLabelFormatter"])(axis);
    var result = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](ordinalScale.getTicks(), function(tick) {
        var rawLabel = ordinalScale.getLabel(tick);
        var tickValue = tick.value;
        if (categoryInterval(tick.value, rawLabel)) {
            result.push(onlyTick ? tickValue : {
                formattedLabel: labelFormatter(tick),
                rawLabel: rawLabel,
                tickValue: tickValue,
                time: undefined,
                "break": undefined
            });
        }
    });
    return result;
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-ssr] (ecmascript)");
;
;
;
var NORMALIZED_EXTENT = [
    0,
    1
];
/**
 * Base class of Axis.
 *
 * Lifetime: recreate for each main process.
 * [NOTICE]: Some caches is stored on the axis instance (see `axisTickLabelBuilder.ts`)
 *  which is based on this lifetime.
 */ var Axis = /** @class */ function() {
    function Axis(dim, scale, extent) {
        this.onBand = false;
        // Make sure that `extent[0] > extent[1]` only if `inverse: true`.
        // `inverse` can be inferred by `extent` unless `extent[0] === extent[1]`.
        this.inverse = false;
        this.dim = dim;
        this.scale = scale;
        this._extent = extent || [
            0,
            0
        ];
    }
    /**
   * If axis extent contain given coord
   */ Axis.prototype.contain = function(coord) {
        var extent = this._extent;
        var min = Math.min(extent[0], extent[1]);
        var max = Math.max(extent[0], extent[1]);
        return coord >= min && coord <= max;
    };
    /**
   * If axis extent contain given data
   */ Axis.prototype.containData = function(data) {
        return this.scale.contain(this.scale.parse(data));
    };
    /**
   * Get coord extent.
   */ Axis.prototype.getExtent = function() {
        return this._extent.slice();
    };
    /**
   * Get precision used for formatting
   */ Axis.prototype.getPixelPrecision = function(dataExtent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPixelPrecision"])(dataExtent || this.scale.getExtent(), this._extent);
    };
    /**
   * Set coord extent
   */ Axis.prototype.setExtent = function(start, end) {
        var extent = this._extent;
        extent[0] = start;
        extent[1] = end;
    };
    /**
   * Convert data to coord. Data is the rank if it has an ordinal scale
   */ Axis.prototype.dataToCoord = function(data, clamp) {
        var extent = this._extent;
        var scale = this.scale;
        data = scale.normalize(scale.parse(data));
        if (this.onBand && scale.type === 'ordinal') {
            extent = extent.slice();
            fixExtentWithBands(extent, scale.count());
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(data, NORMALIZED_EXTENT, extent, clamp);
    };
    /**
   * Convert coord to data. Data is the rank if it has an ordinal scale
   */ Axis.prototype.coordToData = function(coord, clamp) {
        var extent = this._extent;
        var scale = this.scale;
        if (this.onBand && scale.type === 'ordinal') {
            extent = extent.slice();
            fixExtentWithBands(extent, scale.count());
        }
        var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearMap"])(coord, extent, NORMALIZED_EXTENT, clamp);
        return this.scale.scale(t);
    };
    /**
   * Convert pixel point to data in axis
   */ Axis.prototype.pointToData = function(point, clamp) {
        // Should be implemented in derived class if necessary.
        return;
    };
    /**
   * Different from `zrUtil.map(axis.getTicks(), axis.dataToCoord, axis)`,
   * `axis.getTicksCoords` considers `onBand`, which is used by
   * `boundaryGap:true` of category axis and splitLine and splitArea.
   * @param opt.tickModel default: axis.model.getModel('axisTick')
   * @param opt.clamp If `true`, the first and the last
   *        tick must be at the axis end points. Otherwise, clip ticks
   *        that outside the axis extent.
   */ Axis.prototype.getTicksCoords = function(opt) {
        opt = opt || {};
        var tickModel = opt.tickModel || this.getTickModel();
        var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAxisTicks"])(this, tickModel, {
            breakTicks: opt.breakTicks,
            pruneByBreak: opt.pruneByBreak
        });
        var ticks = result.ticks;
        var ticksCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(ticks, function(tickVal) {
            return {
                coord: this.dataToCoord(this.scale.type === 'ordinal' ? this.scale.getRawOrdinalNumber(tickVal) : tickVal),
                tickValue: tickVal
            };
        }, this);
        var alignWithLabel = tickModel.get('alignWithLabel');
        fixOnBandTicksCoords(this, ticksCoords, alignWithLabel, opt.clamp);
        return ticksCoords;
    };
    Axis.prototype.getMinorTicksCoords = function() {
        if (this.scale.type === 'ordinal') {
            // Category axis doesn't support minor ticks
            return [];
        }
        var minorTickModel = this.model.getModel('minorTick');
        var splitNumber = minorTickModel.get('splitNumber');
        // Protection.
        if (!(splitNumber > 0 && splitNumber < 100)) {
            splitNumber = 5;
        }
        var minorTicks = this.scale.getMinorTicks(splitNumber);
        var minorTicksCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(minorTicks, function(minorTicksGroup) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(minorTicksGroup, function(minorTick) {
                return {
                    coord: this.dataToCoord(minorTick),
                    tickValue: minorTick
                };
            }, this);
        }, this);
        return minorTicksCoords;
    };
    Axis.prototype.getViewLabels = function(ctx) {
        ctx = ctx || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAxisLabelsComputingContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].determine);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAxisLabels"])(this, ctx).labels;
    };
    Axis.prototype.getLabelModel = function() {
        return this.model.getModel('axisLabel');
    };
    /**
   * Notice here we only get the default tick model. For splitLine
   * or splitArea, we should pass the splitLineModel or splitAreaModel
   * manually when calling `getTicksCoords`.
   * In GL, this method may be overridden to:
   * `axisModel.getModel('axisTick', grid3DModel.getModel('axisTick'));`
   */ Axis.prototype.getTickModel = function() {
        return this.model.getModel('axisTick');
    };
    /**
   * Get width of band
   */ Axis.prototype.getBandWidth = function() {
        var axisExtent = this._extent;
        var dataExtent = this.scale.getExtent();
        var len = dataExtent[1] - dataExtent[0] + (this.onBand ? 1 : 0);
        // Fix #2728, avoid NaN when only one data.
        len === 0 && (len = 1);
        var size = Math.abs(axisExtent[1] - axisExtent[0]);
        return Math.abs(size) / len;
    };
    /**
   * Only be called in category axis.
   * Can be overridden, consider other axes like in 3D.
   * @return Auto interval for cateogry axis tick and label
   */ Axis.prototype.calculateCategoryInterval = function(ctx) {
        ctx = ctx || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAxisLabelsComputingContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].determine);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCategoryInterval"])(this, ctx);
    };
    return Axis;
}();
function fixExtentWithBands(extent, nTick) {
    var size = extent[1] - extent[0];
    var len = nTick;
    var margin = size / len / 2;
    extent[0] += margin;
    extent[1] -= margin;
}
// If axis has labels [1, 2, 3, 4]. Bands on the axis are
// |---1---|---2---|---3---|---4---|.
// So the displayed ticks and splitLine/splitArea should between
// each data item, otherwise cause misleading (e.g., split tow bars
// of a single data item when there are two bar series).
// Also consider if tickCategoryInterval > 0 and onBand, ticks and
// splitLine/spliteArea should layout appropriately corresponding
// to displayed labels. (So we should not use `getBandWidth` in this
// case).
function fixOnBandTicksCoords(axis, ticksCoords, alignWithLabel, clamp) {
    var ticksLen = ticksCoords.length;
    if (!axis.onBand || alignWithLabel || !ticksLen) {
        return;
    }
    var axisExtent = axis.getExtent();
    var last;
    var diffSize;
    if (ticksLen === 1) {
        ticksCoords[0].coord = axisExtent[0];
        ticksCoords[0].onBand = true;
        last = ticksCoords[1] = {
            coord: axisExtent[1],
            tickValue: ticksCoords[0].tickValue,
            onBand: true
        };
    } else {
        var crossLen = ticksCoords[ticksLen - 1].tickValue - ticksCoords[0].tickValue;
        var shift_1 = (ticksCoords[ticksLen - 1].coord - ticksCoords[0].coord) / crossLen;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(ticksCoords, function(ticksItem) {
            ticksItem.coord -= shift_1 / 2;
            ticksItem.onBand = true;
        });
        var dataExtent = axis.scale.getExtent();
        diffSize = 1 + dataExtent[1] - ticksCoords[ticksLen - 1].tickValue;
        last = {
            coord: ticksCoords[ticksLen - 1].coord + shift_1 * diffSize,
            tickValue: dataExtent[1] + 1,
            onBand: true
        };
        ticksCoords.push(last);
    }
    var inverse = axisExtent[0] > axisExtent[1];
    // Handling clamp.
    if (littleThan(ticksCoords[0].coord, axisExtent[0])) {
        clamp ? ticksCoords[0].coord = axisExtent[0] : ticksCoords.shift();
    }
    if (clamp && littleThan(axisExtent[0], ticksCoords[0].coord)) {
        ticksCoords.unshift({
            coord: axisExtent[0],
            onBand: true
        });
    }
    if (littleThan(axisExtent[1], last.coord)) {
        clamp ? last.coord = axisExtent[1] : ticksCoords.pop();
    }
    if (clamp && littleThan(last.coord, axisExtent[1])) {
        ticksCoords.push({
            coord: axisExtent[1],
            onBand: true
        });
    }
    function littleThan(a, b) {
        // Avoid rounding error cause calculated tick coord different with extent.
        // It may cause an extra unnecessary tick added.
        a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(a);
        b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(b);
        return inverse ? a > b : a < b;
    }
}
const __TURBOPACK__default__export__ = Axis;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js [app-ssr] (ecmascript)");
;
;
var Axis2D = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(Axis2D, _super);
    function Axis2D(dim, scale, coordExtent, axisType, position) {
        var _this = _super.call(this, dim, scale, coordExtent) || this;
        /**
     * Index of axis, can be used as key
     * Injected outside.
     */ _this.index = 0;
        _this.type = axisType || 'value';
        _this.position = position || 'bottom';
        return _this;
    }
    Axis2D.prototype.isHorizontal = function() {
        var position = this.position;
        return position === 'top' || position === 'bottom';
    };
    /**
   * Each item cooresponds to this.getExtent(), which
   * means globalExtent[0] may greater than globalExtent[1],
   * unless `asc` is input.
   *
   * @param {boolean} [asc]
   * @return {Array.<number>}
   */ Axis2D.prototype.getGlobalExtent = function(asc) {
        var ret = this.getExtent();
        ret[0] = this.toGlobalCoord(ret[0]);
        ret[1] = this.toGlobalCoord(ret[1]);
        asc && ret[0] > ret[1] && ret.reverse();
        return ret;
    };
    Axis2D.prototype.pointToData = function(point, clamp) {
        return this.coordToData(this.toLocalCoord(point[this.dim === 'x' ? 0 : 1]), clamp);
    };
    /**
   * Set ordinalSortInfo
   * @param info new OrdinalSortInfo
   */ Axis2D.prototype.setCategorySortInfo = function(info) {
        if (this.type !== 'category') {
            return false;
        }
        this.model.option.categorySortInfo = info;
        this.scale.setSortInfo(info);
    };
    return Axis2D;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = Axis2D;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCartesianAxisViewCommonPartBuilder",
    ()=>createCartesianAxisViewCommonPartBuilder,
    "findAxisModels",
    ()=>findAxisModels,
    "isCartesian2DDeclaredSeries",
    ()=>isCartesian2DDeclaredSeries,
    "isCartesian2DInjectedAsDataCoordSys",
    ()=>isCartesian2DInjectedAsDataCoordSys,
    "layout",
    ()=>layout,
    "updateCartesianAxisViewCommonPartBuilder",
    ()=>updateCartesianAxisViewCommonPartBuilder
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
;
;
;
;
function layout(rect, axisModel, opt) {
    opt = opt || {};
    var axis = axisModel.axis;
    var layout = {};
    var otherAxisOnZeroOf = axis.getAxesOnZeroOf()[0];
    var rawAxisPosition = axis.position;
    var axisPosition = otherAxisOnZeroOf ? 'onZero' : rawAxisPosition;
    var axisDim = axis.dim;
    var rectBound = [
        rect.x,
        rect.x + rect.width,
        rect.y,
        rect.y + rect.height
    ];
    var idx = {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        onZero: 2
    };
    var axisOffset = axisModel.get('offset') || 0;
    var posBound = axisDim === 'x' ? [
        rectBound[2] - axisOffset,
        rectBound[3] + axisOffset
    ] : [
        rectBound[0] - axisOffset,
        rectBound[1] + axisOffset
    ];
    if (otherAxisOnZeroOf) {
        var onZeroCoord = otherAxisOnZeroOf.toGlobalCoord(otherAxisOnZeroOf.dataToCoord(0));
        posBound[idx.onZero] = Math.max(Math.min(onZeroCoord, posBound[1]), posBound[0]);
    }
    // Axis position
    layout.position = [
        axisDim === 'y' ? posBound[idx[axisPosition]] : rectBound[0],
        axisDim === 'x' ? posBound[idx[axisPosition]] : rectBound[3]
    ];
    // Axis rotation
    layout.rotation = Math.PI / 2 * (axisDim === 'x' ? 0 : 1);
    // Tick and label direction, x y is axisDim
    var dirMap = {
        top: -1,
        bottom: 1,
        left: -1,
        right: 1
    };
    layout.labelDirection = layout.tickDirection = layout.nameDirection = dirMap[rawAxisPosition];
    layout.labelOffset = otherAxisOnZeroOf ? posBound[idx[rawAxisPosition]] - posBound[idx.onZero] : 0;
    if (axisModel.get([
        'axisTick',
        'inside'
    ])) {
        layout.tickDirection = -layout.tickDirection;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve"](opt.labelInside, axisModel.get([
        'axisLabel',
        'inside'
    ]))) {
        layout.labelDirection = -layout.labelDirection;
    }
    // Special label rotation
    var labelRotate = axisModel.get([
        'axisLabel',
        'rotate'
    ]);
    layout.labelRotate = axisPosition === 'top' ? -labelRotate : labelRotate;
    // Over splitLine and splitArea
    layout.z2 = 1;
    return layout;
}
function isCartesian2DDeclaredSeries(seriesModel) {
    return seriesModel.get('coordinateSystem') === 'cartesian2d';
}
function isCartesian2DInjectedAsDataCoordSys(seriesModel) {
    return seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'cartesian2d';
}
function findAxisModels(seriesModel) {
    var axisModelMap = {
        xAxisModel: null,
        yAxisModel: null
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](axisModelMap, function(v, key) {
        var axisType = key.replace(/Model$/, '');
        var axisModel = seriesModel.getReferringComponents(axisType, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        if ("TURBOPACK compile-time truthy", 1) {
            if (!axisModel) {
                throw new Error(axisType + ' "' + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"](seriesModel.get(axisType + 'Index'), seriesModel.get(axisType + 'Id'), 0) + '" not found');
            }
        }
        axisModelMap[key] = axisModel;
    });
    return axisModelMap;
}
function createCartesianAxisViewCommonPartBuilder(gridRect, cartesians, axisModel, api, ctx, defaultNameMoveOverlap) {
    var layoutResult = layout(gridRect, axisModel);
    var axisLineAutoShow = false;
    var axisTickAutoShow = false;
    // Not show axisTick or axisLine if other axis is category / time
    for(var i = 0; i < cartesians.length; i++){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
            // Still show axis tick or axisLine if other axis is value / log
            axisLineAutoShow = axisTickAutoShow = true;
            if (axisModel.axis.type === 'category' && axisModel.axis.onBand) {
                axisTickAutoShow = false;
            }
        }
    }
    layoutResult.axisLineAutoShow = axisLineAutoShow;
    layoutResult.axisTickAutoShow = axisTickAutoShow;
    layoutResult.defaultNameMoveOverlap = defaultNameMoveOverlap;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](axisModel, api, layoutResult, ctx);
}
function updateCartesianAxisViewCommonPartBuilder(axisBuilder, gridRect, axisModel) {
    var newRaw = layout(gridRect, axisModel);
    if ("TURBOPACK compile-time truthy", 1) {
        var oldRaw_1 = axisBuilder.__getRawCfg();
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"](newRaw), function(prop) {
            if (prop !== 'position' && prop !== 'labelOffset') {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](newRaw[prop] === oldRaw_1[prop]);
            }
        });
    }
    axisBuilder.updateCfg(newRaw);
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignScaleTicks",
    ()=>alignScaleTicks
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
;
;
;
;
;
function alignScaleTicks(scale, axisModel, alignToScale) {
    var _a;
    var intervalScaleProto = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].prototype;
    // NOTE: There is a precondition for log scale  here:
    // In log scale we store _interval and _extent of exponent value.
    // So if we use the method of InternalScale to set/get these data.
    // It process the exponent value, which is linear and what we want here.
    var alignToTicks = intervalScaleProto.getTicks.call(alignToScale);
    var alignToNicedTicks = intervalScaleProto.getTicks.call(alignToScale, {
        expandToNicedExtent: true
    });
    var alignToSplitNumber = alignToTicks.length - 1;
    var alignToInterval = intervalScaleProto.getInterval.call(alignToScale);
    var scaleExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScaleExtent"])(scale, axisModel);
    var rawExtent = scaleExtent.extent;
    var isMinFixed = scaleExtent.fixMin;
    var isMaxFixed = scaleExtent.fixMax;
    if (scale.type === 'log') {
        rawExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logTransform"])(scale.base, rawExtent, true);
    }
    scale.setBreaksFromOption((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveAxisBreaksOption"])(axisModel));
    scale.setExtent(rawExtent[0], rawExtent[1]);
    scale.calcNiceExtent({
        splitNumber: alignToSplitNumber,
        fixMin: isMinFixed,
        fixMax: isMaxFixed
    });
    var extent = intervalScaleProto.getExtent.call(scale);
    // Need to update the rawExtent.
    // Because value in rawExtent may be not parsed. e.g. 'dataMin', 'dataMax'
    if (isMinFixed) {
        rawExtent[0] = extent[0];
    }
    if (isMaxFixed) {
        rawExtent[1] = extent[1];
    }
    var interval = intervalScaleProto.getInterval.call(scale);
    var min = rawExtent[0];
    var max = rawExtent[1];
    if (isMinFixed && isMaxFixed) {
        // User set min, max, divide to get new interval
        interval = (max - min) / alignToSplitNumber;
    } else if (isMinFixed) {
        max = rawExtent[0] + interval * alignToSplitNumber;
        // User set min, expand extent on the other side
        while(max < rawExtent[1] && isFinite(max) && isFinite(rawExtent[1])){
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
            max = rawExtent[0] + interval * alignToSplitNumber;
        }
    } else if (isMaxFixed) {
        // User set max, expand extent on the other side
        min = rawExtent[1] - interval * alignToSplitNumber;
        while(min > rawExtent[0] && isFinite(min) && isFinite(rawExtent[0])){
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
            min = rawExtent[1] - interval * alignToSplitNumber;
        }
    } else {
        var nicedSplitNumber = scale.getTicks().length - 1;
        if (nicedSplitNumber > alignToSplitNumber) {
            interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increaseInterval"])(interval);
        }
        var range = interval * alignToSplitNumber;
        max = Math.ceil(rawExtent[1] / interval) * interval;
        min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(max - range);
        // Not change the result that crossing zero.
        if (min < 0 && rawExtent[0] >= 0) {
            min = 0;
            max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(range);
        } else if (max > 0 && rawExtent[1] <= 0) {
            max = 0;
            min = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(range);
        }
    }
    // Adjust min, max based on the extent of alignTo. When min or max is set in alignTo scale
    var t0 = (alignToTicks[0].value - alignToNicedTicks[0].value) / alignToInterval;
    var t1 = (alignToTicks[alignToSplitNumber].value - alignToNicedTicks[alignToSplitNumber].value) / alignToInterval;
    // NOTE: Must in setExtent -> setInterval -> setNiceExtent order.
    intervalScaleProto.setExtent.call(scale, min + interval * t0, max + interval * t1);
    intervalScaleProto.setInterval.call(scale, interval);
    if (t0 || t1) {
        intervalScaleProto.setNiceExtent.call(scale, min + interval, max - interval);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        var ticks = intervalScaleProto.getTicks.call(scale);
        if (ticks[1] && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValueNice"])(interval) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecisionSafe"])(ticks[1].value) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecisionSafe"])(interval))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])("The ticks may be not readable when set min: " + axisModel.get('min') + ", max: " + axisModel.get('max') + (" and alignTicks: true. (" + ((_a = axisModel.axis) === null || _a === void 0 ? void 0 : _a.dim) + "AxisIndex: " + axisModel.componentIndex + ")"), true);
        }
    }
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Grid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "registerLegacyGridContainLabelImpl",
    ()=>registerLegacyGridContainLabelImpl
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * Grid is a region which contains at most 4 cartesian systems
 *
 * TODO Default cartesian
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Axis2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
// Depends on GridModel, AxisModel, which performs preprocess.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/GridModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// margin is [top, right, bottom, left]
var XY_TO_MARGIN_IDX = [
    [
        3,
        1
    ],
    [
        0,
        2
    ] // xyIdx 1 => 'y'
];
var Grid = /** @class */ function() {
    function Grid(gridModel, ecModel, api) {
        // FIXME:TS where used (different from registered type 'cartesian2d')?
        this.type = 'grid';
        this._coordsMap = {};
        this._coordsList = [];
        this._axesMap = {};
        this._axesList = [];
        this.axisPointerEnabled = true;
        this.dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartesian2DDimensions"];
        this._initCartesian(gridModel, ecModel, api);
        this.model = gridModel;
    }
    Grid.prototype.getRect = function() {
        return this._rect;
    };
    Grid.prototype.update = function(ecModel, api) {
        var axesMap = this._axesMap;
        this._updateScale(ecModel, this.model);
        function updateAxisTicks(axes) {
            var alignTo;
            // Axis is added in order of axisIndex.
            var axesIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(axes);
            var len = axesIndices.length;
            if (!len) {
                return;
            }
            var axisNeedsAlign = [];
            // Process once and calculate the ticks for those don't use alignTicks.
            for(var i = len - 1; i >= 0; i--){
                var idx = +axesIndices[i]; // Convert to number.
                var axis = axes[idx];
                var model = axis.model;
                var scale = axis.scale;
                if (// Only value and log axis without interval support alignTicks.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(scale) && model.get('alignTicks') && model.get('interval') == null) {
                    axisNeedsAlign.push(axis);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["niceScaleExtent"])(scale, model);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(scale)) {
                        // Can only align to interval or log axis.
                        alignTo = axis;
                    }
                }
            }
            ;
            // All axes has set alignTicks. Pick the first one.
            // PENDING. Should we find the axis that both set interval, min, max and align to this one?
            if (axisNeedsAlign.length) {
                if (!alignTo) {
                    alignTo = axisNeedsAlign.pop();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["niceScaleExtent"])(alignTo.scale, alignTo.model);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisNeedsAlign, function(axis) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignScaleTicks"])(axis.scale, axis.model, alignTo.scale);
                });
            }
        }
        updateAxisTicks(axesMap.x);
        updateAxisTicks(axesMap.y);
        // Key: axisDim_axisIndex, value: boolean, whether onZero target.
        var onZeroRecords = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.x, function(xAxis) {
            fixAxisOnZero(axesMap, 'y', xAxis, onZeroRecords);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.y, function(yAxis) {
            fixAxisOnZero(axesMap, 'x', yAxis, onZeroRecords);
        });
        // Resize again if containLabel is enabled
        // FIXME It may cause getting wrong grid size in data processing stage
        this.resize(this.model, api);
    };
    /**
   * Resize the grid.
   *
   * [NOTE]
   * If both "grid.containLabel/grid.contain" and pixel-required-data-processing (such as, "dataSampling")
   * exist, circular dependency occurs in logic.
   * The final compromised sequence is:
   *  1. Calculate "axis.extent" (pixel extent) and AffineTransform based on only "grid layout options".
   *      Not accurate if "grid.containLabel/grid.contain" is required, but it is a compromise to avoid
   *      circular dependency.
   *  2. Perform "series data processing" (where "dataSampling" requires "axis.extent").
   *  3. Calculate "scale.extent" (data extent) based on "processed series data".
   *  4. Modify "axis.extent" for "grid.containLabel/grid.contain":
   *      4.1. Calculate "axis labels" based on "scale.extent".
   *      4.2. Modify "axis.extent" by the bounding rects of "axis labels and names".
   */ Grid.prototype.resize = function(gridModel, api, beforeDataProcessing) {
        var layoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(gridModel, api);
        var gridRect = this._rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])(gridModel.getBoxLayoutParams(), layoutRef.refContainer);
        // PENDING: whether to support that if the input `coord` is out of the base coord sys,
        //  do not render anything. At present, the behavior is undefined.
        var axesMap = this._axesMap;
        var coordsList = this._coordsList;
        var optionContainLabel = gridModel.get('containLabel'); // No `.get(, true)` for backward compat.
        updateAllAxisExtentTransByGridRect(axesMap, gridRect);
        if (!beforeDataProcessing) {
            var axisBuilderSharedCtx = createAxisBiulders(gridRect, coordsList, axesMap, optionContainLabel, api);
            var noPxChange = void 0;
            if (optionContainLabel) {
                if (legacyLayOutGridByContainLabel) {
                    // console.time('legacyLayOutGridByContainLabel');
                    legacyLayOutGridByContainLabel(this._axesList, gridRect);
                    updateAllAxisExtentTransByGridRect(axesMap, gridRect);
                // console.timeEnd('legacyLayOutGridByContainLabel');
                } else {
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"])('Specified `grid.containLabel` but no `use(LegacyGridContainLabel)`;' + 'use `grid.outerBounds` instead.', true);
                    }
                    noPxChange = layOutGridByOuterBounds(gridRect.clone(), 'axisLabel', null, gridRect, axesMap, axisBuilderSharedCtx, layoutRef);
                }
            } else {
                var _a = prepareOuterBounds(gridModel, gridRect, layoutRef), outerBoundsRect = _a.outerBoundsRect, parsedOuterBoundsContain = _a.parsedOuterBoundsContain, outerBoundsClamp = _a.outerBoundsClamp;
                if (outerBoundsRect) {
                    // console.time('layOutGridByOuterBounds');
                    noPxChange = layOutGridByOuterBounds(outerBoundsRect, parsedOuterBoundsContain, outerBoundsClamp, gridRect, axesMap, axisBuilderSharedCtx, layoutRef);
                // console.timeEnd('layOutGridByOuterBounds');
                }
            }
            // console.time('buildAxesView_determine');
            createOrUpdateAxesView(gridRect, axesMap, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].determine, null, noPxChange, layoutRef);
        // console.timeEnd('buildAxesView_determine');
        } // End of beforeDataProcessing
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this._coordsList, function(coord) {
            // Calculate affine matrix to accelerate the data to point transform.
            // If all the axes scales are time or value.
            coord.calcAffineTransform();
        });
    };
    Grid.prototype.getAxis = function(dim, axisIndex) {
        var axesMapOnDim = this._axesMap[dim];
        if (axesMapOnDim != null) {
            return axesMapOnDim[axisIndex || 0];
        }
    };
    Grid.prototype.getAxes = function() {
        return this._axesList.slice();
    };
    Grid.prototype.getCartesian = function(xAxisIndex, yAxisIndex) {
        if (xAxisIndex != null && yAxisIndex != null) {
            var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
            return this._coordsMap[key];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(xAxisIndex)) {
            yAxisIndex = xAxisIndex.yAxisIndex;
            xAxisIndex = xAxisIndex.xAxisIndex;
        }
        for(var i = 0, coordList = this._coordsList; i < coordList.length; i++){
            if (coordList[i].getAxis('x').index === xAxisIndex || coordList[i].getAxis('y').index === yAxisIndex) {
                return coordList[i];
            }
        }
    };
    Grid.prototype.getCartesians = function() {
        return this._coordsList.slice();
    };
    /**
   * @implements
   */ Grid.prototype.convertToPixel = function(ecModel, finder, value) {
        var target = this._findConvertTarget(finder);
        return target.cartesian ? target.cartesian.dataToPoint(value) : target.axis ? target.axis.toGlobalCoord(target.axis.dataToCoord(value)) : null;
    };
    /**
   * @implements
   */ Grid.prototype.convertFromPixel = function(ecModel, finder, value) {
        var target = this._findConvertTarget(finder);
        return target.cartesian ? target.cartesian.pointToData(value) : target.axis ? target.axis.coordToData(target.axis.toLocalCoord(value)) : null;
    };
    Grid.prototype._findConvertTarget = function(finder) {
        var seriesModel = finder.seriesModel;
        var xAxisModel = finder.xAxisModel || seriesModel && seriesModel.getReferringComponents('xAxis', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        var yAxisModel = finder.yAxisModel || seriesModel && seriesModel.getReferringComponents('yAxis', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
        var gridModel = finder.gridModel;
        var coordsList = this._coordsList;
        var cartesian;
        var axis;
        if (seriesModel) {
            cartesian = seriesModel.coordinateSystem;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(coordsList, cartesian) < 0 && (cartesian = null);
        } else if (xAxisModel && yAxisModel) {
            cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
        } else if (xAxisModel) {
            axis = this.getAxis('x', xAxisModel.componentIndex);
        } else if (yAxisModel) {
            axis = this.getAxis('y', yAxisModel.componentIndex);
        } else if (gridModel) {
            var grid = gridModel.coordinateSystem;
            if (grid === this) {
                cartesian = this._coordsList[0];
            }
        }
        return {
            cartesian: cartesian,
            axis: axis
        };
    };
    /**
   * @implements
   */ Grid.prototype.containPoint = function(point) {
        var coord = this._coordsList[0];
        if (coord) {
            return coord.containPoint(point);
        }
    };
    /**
   * Initialize cartesian coordinate systems
   */ Grid.prototype._initCartesian = function(gridModel, ecModel, api) {
        var _this = this;
        var grid = this;
        var axisPositionUsed = {
            left: false,
            right: false,
            top: false,
            bottom: false
        };
        var axesMap = {
            x: {},
            y: {}
        };
        var axesCount = {
            x: 0,
            y: 0
        };
        // Create axis
        ecModel.eachComponent('xAxis', createAxisCreator('x'), this);
        ecModel.eachComponent('yAxis', createAxisCreator('y'), this);
        if (!axesCount.x || !axesCount.y) {
            // Roll back when there no either x or y axis
            this._axesMap = {};
            this._axesList = [];
            return;
        }
        this._axesMap = axesMap;
        // Create cartesian2d
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.x, function(xAxis, xAxisIndex) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.y, function(yAxis, yAxisIndex) {
                var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
                var cartesian = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](key);
                cartesian.master = _this;
                cartesian.model = gridModel;
                _this._coordsMap[key] = cartesian;
                _this._coordsList.push(cartesian);
                cartesian.addAxis(xAxis);
                cartesian.addAxis(yAxis);
            });
        });
        function createAxisCreator(dimName) {
            return function(axisModel, idx) {
                if (!isAxisUsedInTheGrid(axisModel, gridModel)) {
                    return;
                }
                var axisPosition = axisModel.get('position');
                if (dimName === 'x') {
                    // Fix position
                    if (axisPosition !== 'top' && axisPosition !== 'bottom') {
                        // Default bottom of X
                        axisPosition = axisPositionUsed.bottom ? 'top' : 'bottom';
                    }
                } else {
                    // Fix position
                    if (axisPosition !== 'left' && axisPosition !== 'right') {
                        // Default left of Y
                        axisPosition = axisPositionUsed.left ? 'right' : 'left';
                    }
                }
                axisPositionUsed[axisPosition] = true;
                var axis = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Axis2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dimName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleByModel"])(axisModel), [
                    0,
                    0
                ], axisModel.get('type'), axisPosition);
                var isCategory = axis.type === 'category';
                axis.onBand = isCategory && axisModel.get('boundaryGap');
                axis.inverse = axisModel.get('inverse');
                // Inject axis into axisModel
                axisModel.axis = axis;
                // Inject axisModel into axis
                axis.model = axisModel;
                // Inject grid info axis
                axis.grid = grid;
                // Index of axis, can be used as key
                axis.index = idx;
                grid._axesList.push(axis);
                axesMap[dimName][idx] = axis;
                axesCount[dimName]++;
            };
        }
    };
    /**
   * Update cartesian properties from series.
   */ Grid.prototype._updateScale = function(ecModel, gridModel) {
        // Reset scale
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this._axesList, function(axis) {
            axis.scale.setExtent(Infinity, -Infinity);
            if (axis.type === 'category') {
                var categorySortInfo = axis.model.get('categorySortInfo');
                axis.scale.setSortInfo(categorySortInfo);
            }
        });
        ecModel.eachSeries(function(seriesModel) {
            // If pie (or other similar series) use cartesian2d, the unionExtent logic below is
            // wrong, therefore skip it temporarily. See also in `defaultAxisExtentFromData.ts`.
            // TODO: support union extent in this case.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCartesian2DInjectedAsDataCoordSys"])(seriesModel)) {
                var axesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAxisModels"])(seriesModel);
                var xAxisModel = axesModelMap.xAxisModel;
                var yAxisModel = axesModelMap.yAxisModel;
                if (!isAxisUsedInTheGrid(xAxisModel, gridModel) || !isAxisUsedInTheGrid(yAxisModel, gridModel)) {
                    return;
                }
                var cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
                var data = seriesModel.getData();
                var xAxis = cartesian.getAxis('x');
                var yAxis = cartesian.getAxis('y');
                unionExtent(data, xAxis);
                unionExtent(data, yAxis);
            }
        }, this);
        function unionExtent(data, axis) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataDimensionsOnAxis"])(data, axis.dim), function(dim) {
                axis.scale.unionExtentFromData(data, dim);
            });
        }
    };
    /**
   * @param dim 'x' or 'y' or 'auto' or null/undefined
   */ Grid.prototype.getTooltipAxes = function(dim) {
        var baseAxes = [];
        var otherAxes = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this.getCartesians(), function(cartesian) {
            var baseAxis = dim != null && dim !== 'auto' ? cartesian.getAxis(dim) : cartesian.getBaseAxis();
            var otherAxis = cartesian.getOtherAxis(baseAxis);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(baseAxes, baseAxis) < 0 && baseAxes.push(baseAxis);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])(otherAxes, otherAxis) < 0 && otherAxes.push(otherAxis);
        });
        return {
            baseAxes: baseAxes,
            otherAxes: otherAxes
        };
    };
    Grid.create = function(ecModel, api) {
        var grids = [];
        ecModel.eachComponent('grid', function(gridModel, idx) {
            var grid = new Grid(gridModel, ecModel, api);
            grid.name = 'grid_' + idx;
            // dataSampling requires axis extent, so resize
            // should be performed in create stage.
            grid.resize(gridModel, api, true);
            gridModel.coordinateSystem = grid;
            grids.push(grid);
        });
        // Inject the coordinateSystems into seriesModel
        ecModel.eachSeries(function(seriesModel) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectCoordSysByOption"])({
                targetModel: seriesModel,
                coordSysType: 'cartesian2d',
                coordSysProvider: coordSysProvider
            });
            function coordSysProvider() {
                var axesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAxisModels"])(seriesModel);
                var xAxisModel = axesModelMap.xAxisModel;
                var yAxisModel = axesModelMap.yAxisModel;
                var gridModel = xAxisModel.getCoordSysModel();
                if ("TURBOPACK compile-time truthy", 1) {
                    if (!gridModel) {
                        throw new Error('Grid "' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve3"])(xAxisModel.get('gridIndex'), xAxisModel.get('gridId'), 0) + '" not found');
                    }
                    if (xAxisModel.getCoordSysModel() !== yAxisModel.getCoordSysModel()) {
                        throw new Error('xAxis and yAxis must use the same grid');
                    }
                }
                var grid = gridModel.coordinateSystem;
                return grid.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
            }
        });
        return grids;
    };
    // For deciding which dimensions to use when creating list data
    Grid.dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Cartesian2D$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartesian2DDimensions"];
    return Grid;
}();
/**
 * Check if the axis is used in the specified grid.
 */ function isAxisUsedInTheGrid(axisModel, gridModel) {
    return axisModel.getCoordSysModel() === gridModel;
}
function fixAxisOnZero(axesMap, otherAxisDim, axis, // Key: see `getOnZeroRecordKey`
onZeroRecords) {
    axis.getAxesOnZeroOf = function() {
        // TODO: onZero of multiple axes.
        return otherAxisOnZeroOf ? [
            otherAxisOnZeroOf
        ] : [];
    };
    // onZero can not be enabled in these two situations:
    // 1. When any other axis is a category axis.
    // 2. When no axis is cross 0 point.
    var otherAxes = axesMap[otherAxisDim];
    var otherAxisOnZeroOf;
    var axisModel = axis.model;
    var onZero = axisModel.get([
        'axisLine',
        'onZero'
    ]);
    var onZeroAxisIndex = axisModel.get([
        'axisLine',
        'onZeroAxisIndex'
    ]);
    if (!onZero) {
        return;
    }
    // If target axis is specified.
    if (onZeroAxisIndex != null) {
        if (canOnZeroToAxis(otherAxes[onZeroAxisIndex])) {
            otherAxisOnZeroOf = otherAxes[onZeroAxisIndex];
        }
    } else {
        // Find the first available other axis.
        for(var idx in otherAxes){
            if (otherAxes.hasOwnProperty(idx) && canOnZeroToAxis(otherAxes[idx]) && !onZeroRecords[getOnZeroRecordKey(otherAxes[idx])]) {
                otherAxisOnZeroOf = otherAxes[idx];
                break;
            }
        }
    }
    if (otherAxisOnZeroOf) {
        onZeroRecords[getOnZeroRecordKey(otherAxisOnZeroOf)] = true;
    }
    function getOnZeroRecordKey(axis) {
        return axis.dim + '_' + axis.index;
    }
}
function canOnZeroToAxis(axis) {
    return axis && axis.type !== 'category' && axis.type !== 'time' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ifAxisCrossZero"])(axis);
}
function updateAxisTransform(axis, coordBase) {
    var axisExtent = axis.getExtent();
    var axisExtentSum = axisExtent[0] + axisExtent[1];
    // Fast transform
    axis.toGlobalCoord = axis.dim === 'x' ? function(coord) {
        return coord + coordBase;
    } : function(coord) {
        return axisExtentSum - coord + coordBase;
    };
    axis.toLocalCoord = axis.dim === 'x' ? function(coord) {
        return coord - coordBase;
    } : function(coord) {
        return axisExtentSum - coord + coordBase;
    };
}
function updateAllAxisExtentTransByGridRect(axesMap, gridRect) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.x, function(axis) {
        return updateAxisExtentTransByGridRect(axis, gridRect.x, gridRect.width);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap.y, function(axis) {
        return updateAxisExtentTransByGridRect(axis, gridRect.y, gridRect.height);
    });
}
function updateAxisExtentTransByGridRect(axis, gridXY, gridWH) {
    var extent = [
        0,
        gridWH
    ];
    var idx = axis.inverse ? 1 : 0;
    axis.setExtent(extent[idx], extent[1 - idx]);
    updateAxisTransform(axis, gridXY);
}
var legacyLayOutGridByContainLabel;
function registerLegacyGridContainLabelImpl(impl) {
    legacyLayOutGridByContainLabel = impl;
}
// Return noPxChange.
function layOutGridByOuterBounds(outerBoundsRect, outerBoundsContain, outerBoundsClamp, gridRect, axesMap, axisBuilderSharedCtx, layoutRef) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(outerBoundsContain === 'all' || outerBoundsContain === 'axisLabel');
    }
    // Assume `updateAllAxisExtentTransByGridRect` has been performed once before this call.
    // [NOTE]:
    // - The bounding rect of the axis elements might be sensitve to variations in `axis.extent` due to strategies
    //  like hideOverlap/moveOverlap. @see the comment in `LabelLayoutBase['suggestIgnore']`.
    // - The final `gridRect` might be slightly smaller than the ideally expected result if labels are giant and
    //  get hidden due to overlapping. More iterations could improve precision, but not performant. We consider
    //  the current result acceptable, since no alignment among charts can be guaranteed when using this feature.
    createOrUpdateAxesView(gridRect, axesMap, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].estimate, outerBoundsContain, false, layoutRef);
    var margin = [
        0,
        0,
        0,
        0
    ];
    fillLabelNameOverflowOnOneDimension(0);
    fillLabelNameOverflowOnOneDimension(1);
    // If axis is blank, no label can be used to detect overflow.
    // gridRect itself should not overflow.
    fillMarginOnOneDimension(gridRect, 0, NaN);
    fillMarginOnOneDimension(gridRect, 1, NaN);
    var noPxChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(margin, function(item) {
        return item > 0;
    }) == null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["expandOrShrinkRect"])(gridRect, margin, true, true, outerBoundsClamp);
    updateAllAxisExtentTransByGridRect(axesMap, gridRect);
    return noPxChange;
    //TURBOPACK unreachable
    ;
    function fillLabelNameOverflowOnOneDimension(xyIdx) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyIdx]], function(axis) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldAxisShow"])(axis.model)) {
                return;
            }
            // FIXME: zr Group.union may wrongly union (0, 0, 0, 0) and not performant.
            // unionRect.union(axis.axisBuilder.group.getBoundingRect());
            // If ussing Group.getBoundingRect to calculate shrink space, it is not strictly accurate when
            // the outermost label is ignored and the secondary label is very long and contribute to the
            // union extension:
            //      -|---|---|---|
            //         1,000,000,000
            // Therefore we calculate them one by one.
            // Also considered axis may be blank or no labels.
            var sharedRecord = axisBuilderSharedCtx.ensureRecord(axis.model);
            var labelInfoList = sharedRecord.labelInfoList;
            if (labelInfoList) {
                for(var idx = 0; idx < labelInfoList.length; idx++){
                    var labelInfo = labelInfoList[idx];
                    var proportion = axis.scale.normalize((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelInner"])(labelInfo.label).tickValue);
                    proportion = xyIdx === 1 ? 1 - proportion : proportion;
                    // xAxis use proportion on x, yAxis use proprotion on y, otherwise not.
                    fillMarginOnOneDimension(labelInfo.rect, xyIdx, proportion);
                    fillMarginOnOneDimension(labelInfo.rect, 1 - xyIdx, NaN);
                }
            }
            var nameLayout = sharedRecord.nameLayout;
            if (nameLayout) {
                var proportion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(sharedRecord.nameLocation) ? 0.5 : NaN;
                fillMarginOnOneDimension(nameLayout.rect, xyIdx, proportion);
                fillMarginOnOneDimension(nameLayout.rect, 1 - xyIdx, NaN);
            }
        });
    }
    function fillMarginOnOneDimension(itemRect, xyIdx, proportion // NaN mean no use proportion
    ) {
        var overflow1 = outerBoundsRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyIdx]] - itemRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyIdx]];
        var overflow2 = itemRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][xyIdx]] + itemRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyIdx]] - (outerBoundsRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][xyIdx]] + outerBoundsRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][xyIdx]]);
        overflow1 = applyProportion(overflow1, 1 - proportion);
        overflow2 = applyProportion(overflow2, proportion);
        var minIdx = XY_TO_MARGIN_IDX[xyIdx][0];
        var maxIdx = XY_TO_MARGIN_IDX[xyIdx][1];
        margin[minIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathMax"])(margin[minIdx], overflow1);
        margin[maxIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathMax"])(margin[maxIdx], overflow2);
    }
    function applyProportion(overflow, proportion) {
        // proportion is not likely to near zero. If so, give up shrink
        if (overflow > 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eqNaN"])(proportion) && proportion > 1e-4) {
            overflow /= proportion;
        }
        return overflow;
    }
}
function createAxisBiulders(gridRect, cartesians, axesMap, optionContainLabel, api) {
    var axisBuilderSharedCtx = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisBuilderSharedContext"](resolveAxisNameOverlapForGrid);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap, function(axisList) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisList, function(axis) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldAxisShow"])(axis.model)) {
                // See `AxisBaseOptionCommon['nameMoveOverlap']`.
                var defaultNameMoveOverlap = !optionContainLabel;
                axis.axisBuilder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCartesianAxisViewCommonPartBuilder"])(gridRect, cartesians, axis.model, api, axisBuilderSharedCtx, defaultNameMoveOverlap);
            }
        });
    });
    return axisBuilderSharedCtx;
}
/**
 * Promote the axis-elements-building from "view render" stage to "coordinate system resize" stage.
 * This is aimed to resovle overlap across multiple axes, since currently it's hard to reconcile
 * multiple axes in "view render" stage.
 *
 * [CAUTION] But this promotion assumes that the subsequent "visual mapping" stage does not affect
 * this axis-elements-building; otherwise we have to refactor it again.
 */ function createOrUpdateAxesView(gridRect, axesMap, kind, outerBoundsContain, noPxChange, layoutRef) {
    var isDetermine = kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisTickLabelBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisTickLabelComputingKind"].determine;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap, function(axisList) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisList, function(axis) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldAxisShow"])(axis.model)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCartesianAxisViewCommonPartBuilder"])(axis.axisBuilder, gridRect, axis.model);
                axis.axisBuilder.build(isDetermine ? {
                    axisTickLabelDetermine: true
                } : {
                    axisTickLabelEstimate: true
                }, {
                    noPxChange: noPxChange
                });
            }
        });
    });
    var nameMarginLevelMap = {
        x: 0,
        y: 0
    };
    calcNameMarginLevel(0);
    calcNameMarginLevel(1);
    function calcNameMarginLevel(xyIdx) {
        nameMarginLevelMap[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XY"][1 - xyIdx]] = gridRect[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][xyIdx]] <= layoutRef.refContainer[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WH"][xyIdx]] * 0.5 ? 0 : 1 - xyIdx === 1 ? 2 : 1;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axesMap, function(axisList, xy) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(axisList, function(axis) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldAxisShow"])(axis.model)) {
                if (outerBoundsContain === 'all' || isDetermine) {
                    // To resolve overlap, `axisName` layout depends on `axisTickLabel` layout result
                    // (all of the axes of the same `grid`; consider multiple x or y axes).
                    axis.axisBuilder.build({
                        axisName: true
                    }, {
                        nameMarginLevel: nameMarginLevelMap[xy]
                    });
                }
                if (isDetermine) {
                    axis.axisBuilder.build({
                        axisLine: true
                    });
                }
            }
        });
    });
}
function prepareOuterBounds(gridModel, rawRridRect, layoutRef) {
    var outerBoundsRect;
    var optionOuterBoundsMode = gridModel.get('outerBoundsMode', true);
    if (optionOuterBoundsMode === 'same') {
        outerBoundsRect = rawRridRect.clone();
    } else if (optionOuterBoundsMode == null || optionOuterBoundsMode === 'auto') {
        outerBoundsRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutRect"])(gridModel.get('outerBounds', true) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTER_BOUNDS_DEFAULT"], layoutRef.refContainer);
    } else if (optionOuterBoundsMode !== 'none') {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("Invalid grid[" + gridModel.componentIndex + "].outerBoundsMode.");
        }
    }
    var optionOuterBoundsContain = gridModel.get('outerBoundsContain', true);
    var parsedOuterBoundsContain;
    if (optionOuterBoundsContain == null || optionOuterBoundsContain === 'auto') {
        parsedOuterBoundsContain = 'all';
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexOf"])([
        'all',
        'axisLabel'
    ], optionOuterBoundsContain) < 0) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])("Invalid grid[" + gridModel.componentIndex + "].outerBoundsContain.");
        }
        parsedOuterBoundsContain = 'all';
    } else {
        parsedOuterBoundsContain = optionOuterBoundsContain;
    }
    var outerBoundsClamp = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePositionSizeOption"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(gridModel.get('outerBoundsClampWidth', true), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTER_BOUNDS_CLAMP_DEFAULT"][0]), rawRridRect.width),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePositionSizeOption"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieve2"])(gridModel.get('outerBoundsClampHeight', true), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTER_BOUNDS_CLAMP_DEFAULT"][1]), rawRridRect.height)
    ];
    return {
        outerBoundsRect: outerBoundsRect,
        parsedOuterBoundsContain: parsedOuterBoundsContain,
        outerBoundsClamp: outerBoundsClamp
    };
}
var resolveAxisNameOverlapForGrid = function(cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord) {
    var perpendicularDim = axisModel.axis.dim === 'x' ? 'y' : 'x';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAxisNameOverlapDefault"])(cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord);
    // If nameLocation 'center', and there are multiple axes parallel to this axis, do not adjust by
    //  other axes, because the axis name should be close to its axis line as much as possible even
    //  if overlapping; otherwise it might cause misleading.
    // If nameLocation 'center', do not adjust by perpendicular axes, since they are not likely to overlap.
    // If nameLocation 'start'/'end', move name within the same direction to escape overlap with the
    //  perpendicular axes.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameLocationCenter"])(cfg.nameLocation)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(ctx.recordMap[perpendicularDim], function(perpenRecord) {
            // perpendicular axis may be no name.
            if (perpenRecord && perpenRecord.labelInfoList && perpenRecord.dirVec) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moveIfOverlapByLinearLabels"])(perpenRecord.labelInfoList, perpenRecord.dirVec, nameLayoutInfo, nameMoveDirVec);
            }
        });
    }
};
const __TURBOPACK__default__export__ = Grid;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/RadarModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var valueAxisDefault = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].value;
function defaultsShow(opt, show) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
        show: show
    }, opt);
}
var RadarModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(RadarModel, _super);
    function RadarModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadarModel.type;
        return _this;
    }
    RadarModel.prototype.optionUpdated = function() {
        var boundaryGap = this.get('boundaryGap');
        var splitNumber = this.get('splitNumber');
        var scale = this.get('scale');
        var axisLine = this.get('axisLine');
        var axisTick = this.get('axisTick');
        // let axisType = this.get('axisType');
        var axisLabel = this.get('axisLabel');
        var nameTextStyle = this.get('axisName');
        var showName = this.get([
            'axisName',
            'show'
        ]);
        var nameFormatter = this.get([
            'axisName',
            'formatter'
        ]);
        var nameGap = this.get('axisNameGap');
        var triggerEvent = this.get('triggerEvent');
        var indicatorModels = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"](this.get('indicator') || [], function(indicatorOpt) {
            // PENDING
            if (indicatorOpt.max != null && indicatorOpt.max > 0 && !indicatorOpt.min) {
                indicatorOpt.min = 0;
            } else if (indicatorOpt.min != null && indicatorOpt.min < 0 && !indicatorOpt.max) {
                indicatorOpt.max = 0;
            }
            var iNameTextStyle = nameTextStyle;
            if (indicatorOpt.color != null) {
                iNameTextStyle = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]({
                    color: indicatorOpt.color
                }, nameTextStyle);
            }
            // Use same configuration
            var innerIndicatorOpt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"](indicatorOpt), {
                boundaryGap: boundaryGap,
                splitNumber: splitNumber,
                scale: scale,
                axisLine: axisLine,
                axisTick: axisTick,
                // axisType: axisType,
                axisLabel: axisLabel,
                // Compatible with 2 and use text
                name: indicatorOpt.text,
                showName: showName,
                nameLocation: 'end',
                nameGap: nameGap,
                // min: 0,
                nameTextStyle: iNameTextStyle,
                triggerEvent: triggerEvent
            }, false);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"](nameFormatter)) {
                var indName = innerIndicatorOpt.name;
                innerIndicatorOpt.name = nameFormatter.replace('{value}', indName != null ? indName : '');
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](nameFormatter)) {
                innerIndicatorOpt.name = nameFormatter(innerIndicatorOpt.name, innerIndicatorOpt);
            }
            var model = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](innerIndicatorOpt, null, this.ecModel);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixin"](model, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCommonMixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxisModelCommonMixin"].prototype);
            // For triggerEvent.
            model.mainType = 'radar';
            model.componentIndex = this.componentIndex;
            return model;
        }, this);
        this._indicatorModels = indicatorModels;
    };
    RadarModel.prototype.getIndicatorModels = function() {
        return this._indicatorModels;
    };
    RadarModel.type = 'radar';
    RadarModel.defaultOption = {
        // zlevel: 0,
        z: 0,
        center: [
            '50%',
            '50%'
        ],
        radius: '50%',
        startAngle: 90,
        axisName: {
            show: true,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.axisLabel
        },
        boundaryGap: [
            0,
            0
        ],
        splitNumber: 5,
        axisNameGap: 15,
        scale: false,
        // Polygon or circle
        shape: 'polygon',
        axisLine: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"]({
            lineStyle: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].color.neutral20
            }
        }, valueAxisDefault.axisLine),
        axisLabel: defaultsShow(valueAxisDefault.axisLabel, false),
        axisTick: defaultsShow(valueAxisDefault.axisTick, false),
        // axisType: 'value',
        splitLine: defaultsShow(valueAxisDefault.splitLine, true),
        splitArea: defaultsShow(valueAxisDefault.splitArea, true),
        // {text, min, max}
        indicator: []
    };
    return RadarModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RadarModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js [app-ssr] (ecmascript)");
;
;
var IndicatorAxis = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(IndicatorAxis, _super);
    function IndicatorAxis(dim, scale, radiusExtent) {
        var _this = _super.call(this, dim, scale, radiusExtent) || this;
        _this.type = 'value';
        _this.angle = 0;
        _this.name = '';
        return _this;
    }
    return IndicatorAxis;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$Axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = IndicatorAxis;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/Radar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ // TODO clockwise
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$IndicatorAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var Radar = /** @class */ function() {
    function Radar(radarModel, ecModel, api) {
        /**
     *
     * Radar dimensions
     */ this.dimensions = [];
        this._model = radarModel;
        this._indicatorAxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(radarModel.getIndicatorModels(), function(indicatorModel, idx) {
            var dim = 'indicator_' + idx;
            var indicatorAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$radar$2f$IndicatorAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](dim, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
            indicatorAxis.name = indicatorModel.get('name');
            // Inject model and axis
            indicatorAxis.model = indicatorModel;
            indicatorModel.axis = indicatorAxis;
            this.dimensions.push(dim);
            return indicatorAxis;
        }, this);
        this.resize(radarModel, api);
    }
    Radar.prototype.getIndicatorAxes = function() {
        return this._indicatorAxes;
    };
    Radar.prototype.dataToPoint = function(value, indicatorIndex) {
        var indicatorAxis = this._indicatorAxes[indicatorIndex];
        return this.coordToPoint(indicatorAxis.dataToCoord(value), indicatorIndex);
    };
    // TODO: API should be coordToPoint([coord, indicatorIndex])
    Radar.prototype.coordToPoint = function(coord, indicatorIndex) {
        var indicatorAxis = this._indicatorAxes[indicatorIndex];
        var angle = indicatorAxis.angle;
        var x = this.cx + coord * Math.cos(angle);
        var y = this.cy - coord * Math.sin(angle);
        return [
            x,
            y
        ];
    };
    Radar.prototype.pointToData = function(pt) {
        var dx = pt[0] - this.cx;
        var dy = pt[1] - this.cy;
        var radius = Math.sqrt(dx * dx + dy * dy);
        dx /= radius;
        dy /= radius;
        var radian = Math.atan2(-dy, dx);
        // Find the closest angle
        // FIXME index can calculated directly
        var minRadianDiff = Infinity;
        var closestAxis;
        var closestAxisIdx = -1;
        for(var i = 0; i < this._indicatorAxes.length; i++){
            var indicatorAxis = this._indicatorAxes[i];
            var diff = Math.abs(radian - indicatorAxis.angle);
            if (diff < minRadianDiff) {
                closestAxis = indicatorAxis;
                closestAxisIdx = i;
                minRadianDiff = diff;
            }
        }
        return [
            closestAxisIdx,
            +(closestAxis && closestAxis.coordToData(radius))
        ];
    };
    Radar.prototype.resize = function(radarModel, api) {
        var refContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBoxLayoutReference"])(radarModel, api).refContainer;
        var center = radarModel.get('center');
        var viewSize = Math.min(refContainer.width, refContainer.height) / 2;
        this.cx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](center[0], refContainer.width) + refContainer.x;
        this.cy = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](center[1], refContainer.height) + refContainer.y;
        this.startAngle = radarModel.get('startAngle') * Math.PI / 180;
        // radius may be single value like `20`, `'80%'`, or array like `[10, '80%']`
        var radius = radarModel.get('radius');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(radius) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(radius)) {
            radius = [
                0,
                radius
            ];
        }
        this.r0 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](radius[0], viewSize);
        this.r = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"](radius[1], viewSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(this._indicatorAxes, function(indicatorAxis, idx) {
            indicatorAxis.setExtent(this.r0, this.r);
            var angle = this.startAngle + idx * Math.PI * 2 / this._indicatorAxes.length;
            // Normalize to [-PI, PI]
            angle = Math.atan2(Math.sin(angle), Math.cos(angle));
            indicatorAxis.angle = angle;
        }, this);
    };
    Radar.prototype.update = function(ecModel, api) {
        var indicatorAxes = this._indicatorAxes;
        var radarModel = this._model;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis) {
            indicatorAxis.scale.setExtent(Infinity, -Infinity);
        });
        ecModel.eachSeriesByType('radar', function(radarSeries, idx) {
            if (radarSeries.get('coordinateSystem') !== 'radar' || ecModel.getComponent('radar', radarSeries.get('radarIndex')) !== radarModel) {
                return;
            }
            var data = radarSeries.getData();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis) {
                indicatorAxis.scale.unionExtentFromData(data, data.mapDimension(indicatorAxis.dim));
            });
        }, this);
        var splitNumber = radarModel.get('splitNumber');
        var dummyScale = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$Interval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        dummyScale.setExtent(0, splitNumber);
        dummyScale.setInterval(1);
        // Force all the axis fixing the maxSplitNumber.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(indicatorAxes, function(indicatorAxis, idx) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisAlignTicks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignScaleTicks"])(indicatorAxis.scale, indicatorAxis.model, dummyScale);
        });
    };
    Radar.prototype.convertToPixel = function(ecModel, finder, value) {
        console.warn('Not implemented.');
        return null;
    };
    Radar.prototype.convertFromPixel = function(ecModel, finder, pixel) {
        console.warn('Not implemented.');
        return null;
    };
    Radar.prototype.containPoint = function(point) {
        console.warn('Not implemented.');
        return false;
    };
    Radar.create = function(ecModel, api) {
        var radarList = [];
        ecModel.eachComponent('radar', function(radarModel) {
            var radar = new Radar(radarModel, ecModel, api);
            radarList.push(radar);
            radarModel.coordinateSystem = radar;
        });
        ecModel.eachSeriesByType('radar', function(radarSeries) {
            if (radarSeries.get('coordinateSystem') === 'radar') {
                // Inject coordinate system
                // @ts-ignore
                radarSeries.coordinateSystem = radarList[radarSeries.get('radarIndex') || 0];
            }
        });
        return radarList;
    };
    /**
   * Radar dimensions is based on the data
   */ Radar.dimensions = [];
    return Radar;
}();
const __TURBOPACK__default__export__ = Radar;
}),
];

//# sourceMappingURL=b0791_echarts_lib_coord_93a63207._.js.map