(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createRenderPlanner
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
function createRenderPlanner() {
    var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
    return function(seriesModel) {
        var fields = inner(seriesModel);
        var pipelineContext = seriesModel.pipelineContext;
        var originalLarge = !!fields.large;
        var originalProgressive = !!fields.progressiveRender;
        // FIXME: if the planner works on a filtered series, `pipelineContext` does not
        // exists. See #11611 . Probably we need to modify this structure, see the comment
        // on `performRawSeries` in `Schedular.js`.
        var large = fields.large = !!(pipelineContext && pipelineContext.large);
        var progressive = fields.progressiveRender = !!(pipelineContext && pipelineContext.progressiveRender);
        return !!(originalLarge !== large || originalProgressive !== progressive) && 'reset';
    };
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/custom/customSeriesRegister.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomSeries",
    ()=>getCustomSeries,
    "registerCustomSeries",
    ()=>registerCustomSeries
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
*/ var customRenderers = {};
function registerCustomSeries(type, renderItem) {
    customRenderers[type] = renderItem;
}
function getCustomSeries(type) {
    return customRenderers[type];
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/createDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dimensionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dimensionHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$referHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/referHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/Source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/sourceHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/types.js [app-client] (ecmascript)");
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
function getCoordSysDimDefs(seriesModel, coordSysInfo) {
    var coordSysName = seriesModel.get('coordinateSystem');
    var registeredCoordSys = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(coordSysName);
    var coordSysDimDefs;
    if (coordSysInfo && coordSysInfo.coordSysDims) {
        coordSysDimDefs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](coordSysInfo.coordSysDims, function(dim) {
            var dimInfo = {
                name: dim
            };
            var axisModel = coordSysInfo.axisMap.get(dim);
            if (axisModel) {
                var axisType = axisModel.get('type');
                dimInfo.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dimensionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDimensionTypeByAxis"])(axisType);
            }
            return dimInfo;
        });
    }
    if (!coordSysDimDefs) {
        // Get dimensions from registered coordinate system
        coordSysDimDefs = registeredCoordSys && (registeredCoordSys.getDimensionsInfo ? registeredCoordSys.getDimensionsInfo() : registeredCoordSys.dimensions.slice()) || [
            'x',
            'y'
        ];
    }
    return coordSysDimDefs;
}
function injectOrdinalMeta(dimInfoList, createInvertedIndices, coordSysInfo) {
    var firstCategoryDimIndex;
    var hasNameEncode;
    coordSysInfo && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](dimInfoList, function(dimInfo, dimIndex) {
        var coordDim = dimInfo.coordDim;
        var categoryAxisModel = coordSysInfo.categoryAxisMap.get(coordDim);
        if (categoryAxisModel) {
            if (firstCategoryDimIndex == null) {
                firstCategoryDimIndex = dimIndex;
            }
            dimInfo.ordinalMeta = categoryAxisModel.getOrdinalMeta();
            if (createInvertedIndices) {
                dimInfo.createInvertedIndices = true;
            }
        }
        if (dimInfo.otherDims.itemName != null) {
            hasNameEncode = true;
        }
    });
    if (!hasNameEncode && firstCategoryDimIndex != null) {
        dimInfoList[firstCategoryDimIndex].otherDims.itemName = 0;
    }
    return firstCategoryDimIndex;
}
/**
 * Caution: there are side effects to `sourceManager` in this method.
 * Should better only be called in `Series['getInitialData']`.
 */ function createSeriesData(sourceRaw, seriesModel, opt) {
    opt = opt || {};
    var sourceManager = seriesModel.getSourceManager();
    var source;
    var isOriginalSource = false;
    if (sourceRaw) {
        isOriginalSource = true;
        source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSourceFromSeriesDataOption"])(sourceRaw);
    } else {
        source = sourceManager.getSource();
        // Is series.data. not dataset.
        isOriginalSource = source.sourceFormat === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_ORIGINAL"];
    }
    var coordSysInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$referHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoordSysInfoBySeries"])(seriesModel);
    var coordSysDimDefs = getCoordSysDimDefs(seriesModel, coordSysInfo);
    var useEncodeDefaulter = opt.useEncodeDefaulter;
    var encodeDefaulter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](useEncodeDefaulter) ? useEncodeDefaulter : useEncodeDefaulter ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeSeriesEncodeForAxisCoordSys"], coordSysDimDefs, seriesModel) : null;
    var createDimensionOptions = {
        coordDimensions: coordSysDimDefs,
        generateCoord: opt.generateCoord,
        encodeDefine: seriesModel.getEncode(),
        encodeDefaulter: encodeDefaulter,
        canOmitUnusedDimensions: !isOriginalSource
    };
    var schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, createDimensionOptions);
    var firstCategoryDimIndex = injectOrdinalMeta(schema.dimensions, opt.createInvertedIndices, coordSysInfo);
    var store = !isOriginalSource ? sourceManager.getSharedDataStore(schema) : null;
    var stackCalculationInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableDataStack"])(seriesModel, {
        schema: schema,
        store: store
    });
    var data = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](schema, seriesModel);
    data.setCalculationInfo(stackCalculationInfo);
    var dimValueGetter = firstCategoryDimIndex != null && isNeedCompleteOrdinalData(source) ? function(itemOpt, dimName, dataIndex, dimIndex) {
        // Use dataIndex as ordinal value in categoryAxis
        return dimIndex === firstCategoryDimIndex ? dataIndex : this.defaultDimValueGetter(itemOpt, dimName, dataIndex, dimIndex);
    } : null;
    data.hasItemOption = false;
    data.initData(// Try to reuse the data store in sourceManager if using dataset.
    isOriginalSource ? source : store, null, dimValueGetter);
    return data;
}
function isNeedCompleteOrdinalData(source) {
    if (source.sourceFormat === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_ORIGINAL"]) {
        var sampleItem = firstDataNotNull(source.data || []);
        return !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataItemValue"])(sampleItem));
    }
}
function firstDataNotNull(arr) {
    var i = 0;
    while(i < arr.length && arr[i] == null){
        i++;
    }
    return arr[i];
}
const __TURBOPACK__default__export__ = createSeriesData;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
var BaseBarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BaseBarSeriesModel, _super);
    function BaseBarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BaseBarSeriesModel.type;
        return _this;
    }
    BaseBarSeriesModel.prototype.getInitialData = function(option, ecModel) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    BaseBarSeriesModel.prototype.getMarkerPosition = function(value, dims, startingAtTick) {
        var coordSys = this.coordinateSystem;
        if (coordSys && coordSys.clampData) {
            // PENDING if clamp ?
            var clampData_1 = coordSys.clampData(value);
            var pt_1 = coordSys.dataToPoint(clampData_1);
            if (startingAtTick) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSys.getAxes(), function(axis, idx) {
                    // If axis type is category, use tick coords instead
                    if (axis.type === 'category' && dims != null) {
                        var tickCoords = axis.getTicksCoords();
                        var alignTicksWithLabel = axis.getTickModel().get('alignWithLabel');
                        var targetTickId = clampData_1[idx];
                        // The index of rightmost tick of markArea is 1 larger than x1/y1 index
                        var isEnd = dims[idx] === 'x1' || dims[idx] === 'y1';
                        if (isEnd && !alignTicksWithLabel) {
                            targetTickId += 1;
                        }
                        // The only contains one tick, tickCoords is
                        // like [{coord: 0, tickValue: 0}, {coord: 0}]
                        // to the length should always be larger than 1
                        if (tickCoords.length < 2) {
                            return;
                        } else if (tickCoords.length === 2) {
                            // The left value and right value of the axis are
                            // the same. coord is 0 in both items. Use the max
                            // value of the axis as the coord
                            pt_1[idx] = axis.toGlobalCoord(axis.getExtent()[isEnd ? 1 : 0]);
                            return;
                        }
                        var leftCoord = void 0;
                        var coord = void 0;
                        var stepTickValue = 1;
                        for(var i = 0; i < tickCoords.length; i++){
                            var tickCoord = tickCoords[i].coord;
                            // The last item of tickCoords doesn't contain
                            // tickValue
                            var tickValue = i === tickCoords.length - 1 ? tickCoords[i - 1].tickValue + stepTickValue : tickCoords[i].tickValue;
                            if (tickValue === targetTickId) {
                                coord = tickCoord;
                                break;
                            } else if (tickValue < targetTickId) {
                                leftCoord = tickCoord;
                            } else if (leftCoord != null && tickValue > targetTickId) {
                                coord = (tickCoord + leftCoord) / 2;
                                break;
                            }
                            if (i === 1) {
                                // Here we assume the step of category axes is
                                // the same
                                stepTickValue = tickValue - tickCoords[0].tickValue;
                            }
                        }
                        if (coord == null) {
                            if (!leftCoord) {
                                // targetTickId is smaller than all tick ids in the
                                // visible area, use the leftmost tick coord
                                coord = tickCoords[0].coord;
                            } else if (leftCoord) {
                                // targetTickId is larger than all tick ids in the
                                // visible area, use the rightmost tick coord
                                coord = tickCoords[tickCoords.length - 1].coord;
                            }
                        }
                        pt_1[idx] = axis.toGlobalCoord(coord);
                    }
                });
            } else {
                var data = this.getData();
                var offset = data.getLayout('offset');
                var size = data.getLayout('size');
                var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
                pt_1[offsetIndex] += offset + size / 2;
            }
            return pt_1;
        }
        return [
            NaN,
            NaN
        ];
    };
    BaseBarSeriesModel.type = 'series.__base_bar__';
    BaseBarSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        // stack: null
        // Cartesian coordinate system
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        barMinHeight: 0,
        barMinAngle: 0,
        // cursor: null,
        large: false,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: 'mod',
        defaultBarGap: '10%'
    };
    return BaseBarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerClass(BaseBarSeriesModel);
const __TURBOPACK__default__export__ = BaseBarSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
var BarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BarSeriesModel, _super);
    function BarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarSeriesModel.type;
        return _this;
    }
    BarSeriesModel.prototype.getInitialData = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true,
            createInvertedIndices: !!this.get('realtimeSort', true) || null
        });
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressive = function() {
        // Do not support progressive in normal mode.
        return this.get('large') ? this.get('progressive') : false;
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressiveThreshold = function() {
        // Do not support progressive in normal mode.
        var progressiveThreshold = this.get('progressiveThreshold');
        var largeThreshold = this.get('largeThreshold');
        if (largeThreshold > progressiveThreshold) {
            progressiveThreshold = largeThreshold;
        }
        return progressiveThreshold;
    };
    BarSeriesModel.prototype.brushSelector = function(dataIndex, data, selectors) {
        return selectors.rect(data.getItemLayout(dataIndex));
    };
    BarSeriesModel.type = 'series.bar';
    BarSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    BarSeriesModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        // If clipped
        // Only available on cartesian2d
        clip: true,
        roundCap: false,
        showBackground: false,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
            borderColor: null,
            borderWidth: 0,
            borderType: 'solid',
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1
        },
        select: {
            itemStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary,
                borderWidth: 2
            }
        },
        realtimeSort: false
    });
    return BarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = BarSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClipPath",
    ()=>createClipPath,
    "createGridClipPath",
    ()=>createGridClipPath,
    "createPolarClipPath",
    ()=>createPolarClipPath
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js [app-client] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
function createGridClipPath(cartesian, hasAnimation, seriesModel, done, during) {
    var rect = cartesian.getArea();
    var x = rect.x;
    var y = rect.y;
    var width = rect.width;
    var height = rect.height;
    var lineWidth = seriesModel.get([
        'lineStyle',
        'width'
    ]) || 0;
    // Expand the clip path a bit to avoid the border is clipped and looks thinner
    x -= lineWidth / 2;
    y -= lineWidth / 2;
    width += lineWidth;
    height += lineWidth;
    // fix: https://github.com/apache/incubator-echarts/issues/11369
    width = Math.ceil(width);
    if (x !== Math.floor(x)) {
        x = Math.floor(x);
        // if no extra 1px on `width`, it will still be clipped since `x` is floored
        width++;
    }
    var clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
        shape: {
            x: x,
            y: y,
            width: width,
            height: height
        }
    });
    if (hasAnimation) {
        var baseAxis = cartesian.getBaseAxis();
        var isHorizontal = baseAxis.isHorizontal();
        var isAxisInversed = baseAxis.inverse;
        if (isHorizontal) {
            if (isAxisInversed) {
                clipPath.shape.x += width;
            }
            clipPath.shape.width = 0;
        } else {
            if (!isAxisInversed) {
                clipPath.shape.y += height;
            }
            clipPath.shape.height = 0;
        }
        var duringCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(during) ? function(percent) {
            during(percent, clipPath);
        } : null;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](clipPath, {
            shape: {
                width: width,
                height: height,
                x: x,
                y: y
            }
        }, seriesModel, null, done, duringCb);
    }
    return clipPath;
}
function createPolarClipPath(polar, hasAnimation, seriesModel) {
    var sectorArea = polar.getArea();
    // Avoid float number rounding error for symbol on the edge of axis extent.
    var r0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(sectorArea.r0, 1);
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(sectorArea.r, 1);
    var clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"]({
        shape: {
            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(polar.cx, 1),
            cy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(polar.cy, 1),
            r0: r0,
            r: r,
            startAngle: sectorArea.startAngle,
            endAngle: sectorArea.endAngle,
            clockwise: sectorArea.clockwise
        }
    });
    if (hasAnimation) {
        var isRadial = polar.getBaseAxis().dim === 'angle';
        if (isRadial) {
            clipPath.shape.endAngle = sectorArea.startAngle;
        } else {
            clipPath.shape.r = r0;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](clipPath, {
            shape: {
                endAngle: sectorArea.endAngle,
                r: r
            }
        }, seriesModel);
    }
    return clipPath;
}
function createClipPath(coordSys, hasAnimation, seriesModel, done, during) {
    if (!coordSys) {
        return null;
    } else if (coordSys.type === 'polar') {
        return createPolarClipPath(coordSys, hasAnimation, seriesModel);
    } else if (coordSys.type === 'cartesian2d') {
        return createGridClipPath(coordSys, hasAnimation, seriesModel, done, during);
    }
    return null;
}
;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultInterpolatedLabel",
    ()=>getDefaultInterpolatedLabel,
    "getDefaultLabel",
    ()=>getDefaultLabel
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function getDefaultLabel(data, dataIndex) {
    var labelDims = data.mapDimensionsAll('defaultedLabel');
    var len = labelDims.length;
    // Simple optimization (in lots of cases, label dims length is 1)
    if (len === 1) {
        var rawVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, labelDims[0]);
        return rawVal != null ? rawVal + '' : null;
    } else if (len) {
        var vals = [];
        for(var i = 0; i < labelDims.length; i++){
            vals.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, labelDims[i]));
        }
        return vals.join(' ');
    }
}
function getDefaultInterpolatedLabel(data, interpolatedValue) {
    var labelDims = data.mapDimensionsAll('defaultedLabel');
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(interpolatedValue)) {
        return interpolatedValue + '';
    }
    var vals = [];
    for(var i = 0; i < labelDims.length; i++){
        var dimIndex = data.getDimensionIndex(labelDims[i]);
        if (dimIndex >= 0) {
            vals.push(interpolatedValue[dimIndex]);
        }
    }
    return vals.join(' ');
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSectorCornerRadius",
    ()=>getSectorCornerRadius
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
;
;
function getSectorCornerRadius(model, shape, zeroIfNull) {
    var cornerRadius = model.get('borderRadius');
    if (cornerRadius == null) {
        return zeroIfNull ? {
            cornerRadius: 0
        } : null;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(cornerRadius)) {
        cornerRadius = [
            cornerRadius,
            cornerRadius,
            cornerRadius,
            cornerRadius
        ];
    }
    var dr = Math.abs(shape.r || 0 - shape.r0 || 0);
    return {
        cornerRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(cornerRadius, function(cr) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(cr, dr);
        })
    };
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js [app-client] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/shape/sausage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/sectorLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-client] (ecmascript)");
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
;
;
var mathMax = Math.max;
var mathMin = Math.min;
function getClipArea(coord, data) {
    var coordSysClipArea = coord.getArea && coord.getArea();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var baseAxis = coord.getBaseAxis();
        // When boundaryGap is false or using time axis. bar may exceed the grid.
        // We should not clip this part.
        // See test/bar2.html
        if (baseAxis.type !== 'category' || !baseAxis.onBand) {
            var expandWidth = data.getLayout('bandWidth');
            if (baseAxis.isHorizontal()) {
                coordSysClipArea.x -= expandWidth;
                coordSysClipArea.width += expandWidth * 2;
            } else {
                coordSysClipArea.y -= expandWidth;
                coordSysClipArea.height += expandWidth * 2;
            }
        }
    }
    return coordSysClipArea;
}
var BarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BarView, _super);
    function BarView() {
        var _this = _super.call(this) || this;
        _this.type = BarView.type;
        _this._isFirstFrame = true;
        return _this;
    }
    BarView.prototype.render = function(seriesModel, ecModel, api, payload) {
        this._model = seriesModel;
        this._removeOnRenderedListener(api);
        this._updateDrawMode(seriesModel);
        var coordinateSystemType = seriesModel.get('coordinateSystem');
        if (coordinateSystemType === 'cartesian2d' || coordinateSystemType === 'polar') {
            // Clear previously rendered progressive elements.
            this._progressiveEls = null;
            this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api, payload);
        } else if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('Only cartesian2d and polar supported for bar.');
        }
    };
    BarView.prototype.incrementalPrepareRender = function(seriesModel) {
        this._clear();
        this._updateDrawMode(seriesModel);
        // incremental also need to clip, otherwise might be overlow.
        // But must not set clip in each frame, otherwise all of the children will be marked redraw.
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype.incrementalRender = function(params, seriesModel) {
        // Reset
        this._progressiveEls = [];
        // Do not support progressive in normal mode.
        this._incrementalRenderLarge(params, seriesModel);
    };
    BarView.prototype.eachRendered = function(cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseElements"])(this._progressiveEls || this.group, cb);
    };
    BarView.prototype._updateDrawMode = function(seriesModel) {
        var isLargeDraw = seriesModel.pipelineContext.large;
        if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
            this._isLargeDraw = isLargeDraw;
            this._clear();
        }
    };
    BarView.prototype._renderNormal = function(seriesModel, ecModel, api, payload) {
        var group = this.group;
        var data = seriesModel.getData();
        var oldData = this._data;
        var coord = seriesModel.coordinateSystem;
        var baseAxis = coord.getBaseAxis();
        var isHorizontalOrRadial;
        if (coord.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
        } else if (coord.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
        }
        var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
        var realtimeSortCfg = shouldRealtimeSort(seriesModel, coord);
        if (realtimeSortCfg) {
            this._enableRealtimeSort(realtimeSortCfg, data, api);
        }
        var needsClip = seriesModel.get('clip', true) || realtimeSortCfg;
        var coordSysClipArea = getClipArea(coord, data);
        // If there is clipPath created in large mode. Remove it.
        group.removeClipPath();
        // We don't use clipPath in normal mode because we needs a perfect animation
        // And don't want the label are clipped.
        var roundCap = seriesModel.get('roundCap', true);
        var drawBackground = seriesModel.get('showBackground', true);
        var backgroundModel = seriesModel.getModel('backgroundStyle');
        var barBorderRadius = backgroundModel.get('borderRadius') || 0;
        var bgEls = [];
        var oldBgEls = this._backgroundEls;
        var isInitSort = payload && payload.isInitSort;
        var isChangeOrder = payload && payload.type === 'changeAxisOrder';
        function createBackground(dataIndex) {
            var bgLayout = getLayout[coord.type](data, dataIndex);
            if (!bgLayout) {
                return null;
            }
            var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
            bgEl.useStyle(backgroundModel.getItemStyle());
            // Only cartesian2d support borderRadius.
            if (coord.type === 'cartesian2d') {
                bgEl.setShape('r', barBorderRadius);
            } else {
                bgEl.setShape('cornerRadius', barBorderRadius);
            }
            bgEls[dataIndex] = bgEl;
            return bgEl;
        }
        ;
        data.diff(oldData).add(function(dataIndex) {
            var itemModel = data.getItemModel(dataIndex);
            var layout = getLayout[coord.type](data, dataIndex, itemModel);
            if (!layout) {
                return;
            }
            if (drawBackground) {
                createBackground(dataIndex);
            }
            // If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".
            if (!data.hasValue(dataIndex) || !isValidLayout[coord.type](layout)) {
                return;
            }
            var isClipped = false;
            if (needsClip) {
                // Clip will modify the layout params.
                // And return a boolean to determine if the shape are fully clipped.
                isClipped = clip[coord.type](coordSysClipArea, layout);
            }
            var el = elementCreator[coord.type](seriesModel, data, dataIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, false, roundCap);
            if (realtimeSortCfg) {
                /**
         * Force label animation because even if the element is
         * ignored because it's clipped, it may not be clipped after
         * changing order. Then, if not using forceLabelAnimation,
         * the label animation was never started, in which case,
         * the label will be the final value and doesn't have label
         * animation.
         */ el.forceLabelAnimation = true;
            }
            updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, dataIndex, isHorizontalOrRadial, false, false);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
                    shape: layout
                }, seriesModel, dataIndex);
            }
            data.setItemGraphicEl(dataIndex, el);
            group.add(el);
            el.ignore = isClipped;
        }).update(function(newIndex, oldIndex) {
            var itemModel = data.getItemModel(newIndex);
            var layout = getLayout[coord.type](data, newIndex, itemModel);
            if (!layout) {
                return;
            }
            if (drawBackground) {
                var bgEl = void 0;
                if (oldBgEls.length === 0) {
                    bgEl = createBackground(oldIndex);
                } else {
                    bgEl = oldBgEls[oldIndex];
                    bgEl.useStyle(backgroundModel.getItemStyle());
                    // Only cartesian2d support borderRadius.
                    if (coord.type === 'cartesian2d') {
                        bgEl.setShape('r', barBorderRadius);
                    } else {
                        bgEl.setShape('cornerRadius', barBorderRadius);
                    }
                    bgEls[newIndex] = bgEl;
                }
                var bgLayout = getLayout[coord.type](data, newIndex);
                var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(bgEl, {
                    shape: shape
                }, animationModel, newIndex);
            }
            var el = oldData.getItemGraphicEl(oldIndex);
            if (!data.hasValue(newIndex) || !isValidLayout[coord.type](layout)) {
                group.remove(el);
                return;
            }
            var isClipped = false;
            if (needsClip) {
                isClipped = clip[coord.type](coordSysClipArea, layout);
                if (isClipped) {
                    group.remove(el);
                }
            }
            var roundCapChanged = el && (el.type === 'sector' && roundCap || el.type === 'sausage' && !roundCap);
            if (roundCapChanged) {
                // roundCap changed, there is no way to use animation from a `sector` to a `sausage` shape,
                // so remove the old one and create a new shape
                el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, seriesModel, oldIndex);
                el = null;
            }
            if (!el) {
                el = elementCreator[coord.type](seriesModel, data, newIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, true, roundCap);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(el);
            }
            if (realtimeSortCfg) {
                el.forceLabelAnimation = true;
            }
            if (isChangeOrder) {
                var textEl = el.getTextContent();
                if (textEl) {
                    var labelInnerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelInner"])(textEl);
                    if (labelInnerStore.prevValue != null) {
                        /**
             * Set preValue to be value so that no new label
             * should be started, otherwise, it will take a full
             * `animationDurationUpdate` time to finish the
             * animation, which is not expected.
             */ labelInnerStore.prevValue = labelInnerStore.value;
                    }
                }
            } else {
                updateStyle(el, data, newIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            }
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, newIndex, isHorizontalOrRadial, true, isChangeOrder);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"])(el, {
                    shape: layout
                }, seriesModel, newIndex, null);
            }
            data.setItemGraphicEl(newIndex, el);
            el.ignore = isClipped;
            group.add(el);
        }).remove(function(dataIndex) {
            var el = oldData.getItemGraphicEl(dataIndex);
            el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, seriesModel, dataIndex);
        }).execute();
        var bgGroup = this._backgroundGroup || (this._backgroundGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]());
        bgGroup.removeAll();
        for(var i = 0; i < bgEls.length; ++i){
            bgGroup.add(bgEls[i]);
        }
        group.add(bgGroup);
        this._backgroundEls = bgEls;
        this._data = data;
    };
    BarView.prototype._renderLarge = function(seriesModel, ecModel, api) {
        this._clear();
        createLarge(seriesModel, this.group);
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype._incrementalRenderLarge = function(params, seriesModel) {
        this._removeBackground();
        createLarge(seriesModel, this.group, this._progressiveEls, true);
    };
    BarView.prototype._updateLargeClip = function(seriesModel) {
        // Use clipPath in large mode.
        var clipPath = seriesModel.get('clip', true) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClipPath"])(seriesModel.coordinateSystem, false, seriesModel);
        var group = this.group;
        if (clipPath) {
            group.setClipPath(clipPath);
        } else {
            group.removeClipPath();
        }
    };
    BarView.prototype._enableRealtimeSort = function(realtimeSortCfg, data, api) {
        var _this = this;
        // If no data in the first frame, wait for data to initSort
        if (!data.count()) {
            return;
        }
        var baseAxis = realtimeSortCfg.baseAxis;
        if (this._isFirstFrame) {
            this._dispatchInitSort(data, realtimeSortCfg, api);
            this._isFirstFrame = false;
        } else {
            var orderMapping_1 = function(idx) {
                var el = data.getItemGraphicEl(idx);
                var shape = el && el.shape;
                return shape && // The result should be consistent with the initial sort by data value.
                // Do not support the case that both positive and negative exist.
                Math.abs(baseAxis.isHorizontal() ? shape.height : shape.width) || 0;
            };
            this._onRendered = function() {
                _this._updateSortWithinSameData(data, orderMapping_1, baseAxis, api);
            };
            api.getZr().on('rendered', this._onRendered);
        }
    };
    BarView.prototype._dataSort = function(data, baseAxis, orderMapping) {
        var info = [];
        data.each(data.mapDimension(baseAxis.dim), function(ordinalNumber, dataIdx) {
            var mappedValue = orderMapping(dataIdx);
            mappedValue = mappedValue == null ? NaN : mappedValue;
            info.push({
                dataIndex: dataIdx,
                mappedValue: mappedValue,
                ordinalNumber: ordinalNumber
            });
        });
        info.sort(function(a, b) {
            // If NaN, it will be treated as min val.
            return b.mappedValue - a.mappedValue;
        });
        return {
            ordinalNumbers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(info, function(item) {
                return item.ordinalNumber;
            })
        };
    };
    BarView.prototype._isOrderChangedWithinSameData = function(data, orderMapping, baseAxis) {
        var scale = baseAxis.scale;
        var ordinalDataDim = data.mapDimension(baseAxis.dim);
        var lastValue = Number.MAX_VALUE;
        for(var tickNum = 0, len = scale.getOrdinalMeta().categories.length; tickNum < len; ++tickNum){
            var rawIdx = data.rawIndexOf(ordinalDataDim, scale.getRawOrdinalNumber(tickNum));
            var value = rawIdx < 0 ? Number.MIN_VALUE : orderMapping(data.indexOfRawIndex(rawIdx));
            if (value > lastValue) {
                return true;
            }
            lastValue = value;
        }
        return false;
    };
    /*
   * Consider the case when A and B changed order, whose representing
   * bars are both out of sight, we don't wish to trigger reorder action
   * as long as the order in the view doesn't change.
   */ BarView.prototype._isOrderDifferentInView = function(orderInfo, baseAxis) {
        var scale = baseAxis.scale;
        var extent = scale.getExtent();
        var tickNum = Math.max(0, extent[0]);
        var tickMax = Math.min(extent[1], scale.getOrdinalMeta().categories.length - 1);
        for(; tickNum <= tickMax; ++tickNum){
            if (orderInfo.ordinalNumbers[tickNum] !== scale.getRawOrdinalNumber(tickNum)) {
                return true;
            }
        }
    };
    BarView.prototype._updateSortWithinSameData = function(data, orderMapping, baseAxis, api) {
        if (!this._isOrderChangedWithinSameData(data, orderMapping, baseAxis)) {
            return;
        }
        var sortInfo = this._dataSort(data, baseAxis, orderMapping);
        if (this._isOrderDifferentInView(sortInfo, baseAxis)) {
            this._removeOnRenderedListener(api);
            api.dispatchAction({
                type: 'changeAxisOrder',
                componentType: baseAxis.dim + 'Axis',
                axisId: baseAxis.index,
                sortInfo: sortInfo
            });
        }
    };
    BarView.prototype._dispatchInitSort = function(data, realtimeSortCfg, api) {
        var baseAxis = realtimeSortCfg.baseAxis;
        var sortResult = this._dataSort(data, baseAxis, function(dataIdx) {
            return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim), dataIdx);
        });
        api.dispatchAction({
            type: 'changeAxisOrder',
            componentType: baseAxis.dim + 'Axis',
            isInitSort: true,
            axisId: baseAxis.index,
            sortInfo: sortResult
        });
    };
    BarView.prototype.remove = function(ecModel, api) {
        this._clear(this._model);
        this._removeOnRenderedListener(api);
    };
    BarView.prototype.dispose = function(ecModel, api) {
        this._removeOnRenderedListener(api);
    };
    BarView.prototype._removeOnRenderedListener = function(api) {
        if (this._onRendered) {
            api.getZr().off('rendered', this._onRendered);
            this._onRendered = null;
        }
    };
    BarView.prototype._clear = function(model) {
        var group = this.group;
        var data = this._data;
        if (model && model.isAnimationEnabled() && data && !this._isLargeDraw) {
            this._removeBackground();
            this._backgroundEls = [];
            data.eachItemGraphicEl(function(el) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, model, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).dataIndex);
            });
        } else {
            group.removeAll();
        }
        this._data = null;
        this._isFirstFrame = true;
    };
    BarView.prototype._removeBackground = function() {
        this.group.remove(this._backgroundGroup);
        this._backgroundGroup = null;
    };
    BarView.type = 'bar';
    return BarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var clip = {
    cartesian2d: function(coordSysBoundingRect, layout) {
        var signWidth = layout.width < 0 ? -1 : 1;
        var signHeight = layout.height < 0 ? -1 : 1;
        // Needs positive width and height
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        var coordSysX2 = coordSysBoundingRect.x + coordSysBoundingRect.width;
        var coordSysY2 = coordSysBoundingRect.y + coordSysBoundingRect.height;
        var x = mathMax(layout.x, coordSysBoundingRect.x);
        var x2 = mathMin(layout.x + layout.width, coordSysX2);
        var y = mathMax(layout.y, coordSysBoundingRect.y);
        var y2 = mathMin(layout.y + layout.height, coordSysY2);
        var xClipped = x2 < x;
        var yClipped = y2 < y;
        // When xClipped or yClipped, the element will be marked as `ignore`.
        // But we should also place the element at the edge of the coord sys bounding rect.
        // Because if data changed and the bar shows again, its transition animation
        // will begin at this place.
        layout.x = xClipped && x > coordSysX2 ? x2 : x;
        layout.y = yClipped && y > coordSysY2 ? y2 : y;
        layout.width = xClipped ? 0 : x2 - x;
        layout.height = yClipped ? 0 : y2 - y;
        // Reverse back
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        return xClipped || yClipped;
    },
    polar: function(coordSysClipArea, layout) {
        var signR = layout.r0 <= layout.r ? 1 : -1;
        // Make sure r is larger than r0
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        var r = mathMin(layout.r, coordSysClipArea.r);
        var r0 = mathMax(layout.r0, coordSysClipArea.r0);
        layout.r = r;
        layout.r0 = r0;
        var clipped = r - r0 < 0;
        // Reverse back
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        return clipped;
    }
};
var elementCreator = {
    cartesian2d: function(seriesModel, data, newIndex, layout, isHorizontal, animationModel, axisModel, isUpdate, roundCap) {
        var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, layout),
            z2: 1
        });
        rect.__dataIndex = newIndex;
        rect.name = 'item';
        if (animationModel) {
            var rectShape = rect.shape;
            var animateProperty = isHorizontal ? 'height' : 'width';
            rectShape[animateProperty] = 0;
        }
        return rect;
    },
    polar: function(seriesModel, data, newIndex, layout, isRadial, animationModel, axisModel, isUpdate, roundCap) {
        var ShapeClass = !isRadial && roundCap ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"];
        var sector = new ShapeClass({
            shape: layout,
            z2: 1
        });
        sector.name = 'item';
        var positionMap = createPolarPositionMapping(isRadial);
        sector.calculateTextPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSectorCalculateTextPosition"])(positionMap, {
            isRoundCap: ShapeClass === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        });
        // Animation
        if (animationModel) {
            var sectorShape = sector.shape;
            var animateProperty = isRadial ? 'r' : 'endAngle';
            var animateTarget = {};
            sectorShape[animateProperty] = isRadial ? layout.r0 : layout.startAngle;
            animateTarget[animateProperty] = layout[animateProperty];
            (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(sector, {
                shape: animateTarget
            }, animationModel);
        }
        return sector;
    }
};
function shouldRealtimeSort(seriesModel, coordSys) {
    var realtimeSortOption = seriesModel.get('realtimeSort', true);
    var baseAxis = coordSys.getBaseAxis();
    if ("TURBOPACK compile-time truthy", 1) {
        if (realtimeSortOption) {
            if (baseAxis.type !== 'category') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not based on a category axis.');
            }
            if (coordSys.type !== 'cartesian2d') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not on cartesian2d.');
            }
        }
    }
    if (realtimeSortOption && baseAxis.type === 'category' && coordSys.type === 'cartesian2d') {
        return {
            baseAxis: baseAxis,
            otherAxis: coordSys.getOtherAxis(baseAxis)
        };
    }
}
function updateRealtimeAnimation(realtimeSortCfg, seriesAnimationModel, el, layout, newIndex, isHorizontal, isUpdate, isChangeOrder) {
    var seriesTarget;
    var axisTarget;
    if (isHorizontal) {
        axisTarget = {
            x: layout.x,
            width: layout.width
        };
        seriesTarget = {
            y: layout.y,
            height: layout.height
        };
    } else {
        axisTarget = {
            y: layout.y,
            height: layout.height
        };
        seriesTarget = {
            x: layout.x,
            width: layout.width
        };
    }
    if (!isChangeOrder) {
        // Keep the original growth animation if only axis order changed.
        // Not start a new animation.
        (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
            shape: seriesTarget
        }, seriesAnimationModel, newIndex, null);
    }
    var axisAnimationModel = seriesAnimationModel ? realtimeSortCfg.baseAxis.model : null;
    (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"])(el, {
        shape: axisTarget
    }, axisAnimationModel, newIndex);
}
function checkPropertiesNotValid(obj, props) {
    for(var i = 0; i < props.length; i++){
        if (!isFinite(obj[props[i]])) {
            return true;
        }
    }
    return false;
}
var rectPropties = [
    'x',
    'y',
    'width',
    'height'
];
var polarPropties = [
    'cx',
    'cy',
    'r',
    'startAngle',
    'endAngle'
];
var isValidLayout = {
    cartesian2d: function(layout) {
        return !checkPropertiesNotValid(layout, rectPropties);
    },
    polar: function(layout) {
        return !checkPropertiesNotValid(layout, polarPropties);
    }
};
var getLayout = {
    // itemModel is only used to get borderWidth, which is not needed
    // when calculating bar background layout.
    cartesian2d: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        if (!layout) {
            return null;
        }
        var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout) : 0;
        // fix layout with lineWidth
        var signX = layout.width > 0 ? 1 : -1;
        var signY = layout.height > 0 ? 1 : -1;
        return {
            x: layout.x + signX * fixedLineWidth / 2,
            y: layout.y + signY * fixedLineWidth / 2,
            width: layout.width - signX * fixedLineWidth,
            height: layout.height - signY * fixedLineWidth
        };
    },
    polar: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        return {
            cx: layout.cx,
            cy: layout.cy,
            r0: layout.r0,
            r: layout.r,
            startAngle: layout.startAngle,
            endAngle: layout.endAngle,
            clockwise: layout.clockwise
        };
    }
};
function isZeroOnPolar(layout) {
    return layout.startAngle != null && layout.endAngle != null && layout.startAngle === layout.endAngle;
}
function createPolarPositionMapping(isRadial) {
    return function(isRadial) {
        var arcOrAngle = isRadial ? 'Arc' : 'Angle';
        return function(position) {
            switch(position){
                case 'start':
                case 'insideStart':
                case 'end':
                case 'insideEnd':
                    return position + arcOrAngle;
                default:
                    return position;
            }
        };
    }(isRadial);
}
function updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, isPolar) {
    var style = data.getItemVisual(dataIndex, 'style');
    if (!isPolar) {
        var borderRadius = itemModel.get([
            'itemStyle',
            'borderRadius'
        ]) || 0;
        el.setShape('r', borderRadius);
    } else if (!seriesModel.get('roundCap')) {
        var sectorShape = el.shape;
        var cornerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel('itemStyle'), sectorShape, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(sectorShape, cornerRadius);
        el.setShape(sectorShape);
    }
    el.useStyle(style);
    var cursorStyle = itemModel.getShallow('cursor');
    cursorStyle && el.attr('cursor', cursorStyle);
    var labelPositionOutside = isPolar ? isHorizontalOrRadial ? layout.r >= layout.r0 ? 'endArc' : 'startArc' : layout.endAngle >= layout.startAngle ? 'endAngle' : 'startAngle' : isHorizontalOrRadial ? layout.height >= 0 ? 'bottom' : 'top' : layout.width >= 0 ? 'right' : 'left';
    var labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(el, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: dataIndex,
        defaultText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(seriesModel.getData(), dataIndex),
        inheritColor: style.fill,
        defaultOpacity: style.opacity,
        defaultOutsidePosition: labelPositionOutside
    });
    var label = el.getTextContent();
    if (isPolar && label) {
        var position = itemModel.get([
            'label',
            'position'
        ]);
        el.textConfig.inside = position === 'middle' ? true : null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSectorTextRotation"])(el, position === 'outside' ? labelPositionOutside : position, createPolarPositionMapping(isHorizontalOrRadial), itemModel.get([
            'label',
            'rotate'
        ]));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelValueAnimation"])(label, labelStatesModels, seriesModel.getRawValue(dataIndex), function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data, value);
    });
    var emphasisModel = itemModel.getModel([
        'emphasis'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(el, itemModel);
    if (isZeroOnPolar(layout)) {
        el.style.fill = 'none';
        el.style.stroke = 'none';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(el.states, function(state) {
            if (state.style) {
                state.style.fill = state.style.stroke = 'none';
            }
        });
    }
}
// In case width or height are too small.
function getLineWidth(itemModel, rawLayout) {
    // Has no border.
    var borderColor = itemModel.get([
        'itemStyle',
        'borderColor'
    ]);
    if (!borderColor || borderColor === 'none') {
        return 0;
    }
    var lineWidth = itemModel.get([
        'itemStyle',
        'borderWidth'
    ]) || 0;
    // width or height may be NaN for empty data
    var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
    var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
    return Math.min(lineWidth, width, height);
}
var LagePathShape = /** @class */ function() {
    function LagePathShape() {}
    return LagePathShape;
}();
var LargePath = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LargePath, _super);
    function LargePath(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'largeBar';
        return _this;
    }
    LargePath.prototype.getDefaultShape = function() {
        return new LagePathShape();
    };
    LargePath.prototype.buildPath = function(ctx, shape) {
        // Drawing lines is more efficient than drawing
        // a whole line or drawing rects.
        var points = shape.points;
        var baseDimIdx = this.baseDimIdx;
        var valueDimIdx = 1 - this.baseDimIdx;
        var startPoint = [];
        var size = [];
        var barWidth = this.barWidth;
        for(var i = 0; i < points.length; i += 3){
            size[baseDimIdx] = barWidth;
            size[valueDimIdx] = points[i + 2];
            startPoint[baseDimIdx] = points[i + baseDimIdx];
            startPoint[valueDimIdx] = points[i + valueDimIdx];
            ctx.rect(startPoint[0], startPoint[1], size[0], size[1]);
        }
    };
    return LargePath;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createLarge(seriesModel, group, progressiveEls, incremental) {
    // TODO support polar
    var data = seriesModel.getData();
    var baseDimIdx = data.getLayout('valueAxisHorizontal') ? 1 : 0;
    var largeDataIndices = data.getLayout('largeDataIndices');
    var barWidth = data.getLayout('size');
    var backgroundModel = seriesModel.getModel('backgroundStyle');
    var bgPoints = data.getLayout('largeBackgroundPoints');
    if (bgPoints) {
        var bgEl = new LargePath({
            shape: {
                points: bgPoints
            },
            incremental: !!incremental,
            silent: true,
            z2: 0
        });
        bgEl.baseDimIdx = baseDimIdx;
        bgEl.largeDataIndices = largeDataIndices;
        bgEl.barWidth = barWidth;
        bgEl.useStyle(backgroundModel.getItemStyle());
        group.add(bgEl);
        progressiveEls && progressiveEls.push(bgEl);
    }
    var el = new LargePath({
        shape: {
            points: data.getLayout('largePoints')
        },
        incremental: !!incremental,
        ignoreCoarsePointer: true,
        z2: 1
    });
    el.baseDimIdx = baseDimIdx;
    el.largeDataIndices = largeDataIndices;
    el.barWidth = barWidth;
    group.add(el);
    el.useStyle(data.getVisual('style'));
    // Stroke is rendered first to avoid overlapping with fill
    el.style.stroke = null;
    // Enable tooltip and user mouse/touch event handlers.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).seriesIndex = seriesModel.seriesIndex;
    if (!seriesModel.get('silent')) {
        el.on('mousedown', largePathUpdateDataIndex);
        el.on('mousemove', largePathUpdateDataIndex);
    }
    progressiveEls && progressiveEls.push(el);
}
// Use throttle to avoid frequently traverse to find dataIndex.
var largePathUpdateDataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])(function(event) {
    var largePath = this;
    var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(largePath).dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);
function largePathFindDataIndex(largePath, x, y) {
    var baseDimIdx = largePath.baseDimIdx;
    var valueDimIdx = 1 - baseDimIdx;
    var points = largePath.shape.points;
    var largeDataIndices = largePath.largeDataIndices;
    var startPoint = [];
    var size = [];
    var barWidth = largePath.barWidth;
    for(var i = 0, len = points.length / 3; i < len; i++){
        var ii = i * 3;
        size[baseDimIdx] = barWidth;
        size[valueDimIdx] = points[ii + 2];
        startPoint[baseDimIdx] = points[ii + baseDimIdx];
        startPoint[valueDimIdx] = points[ii + valueDimIdx];
        if (size[valueDimIdx] < 0) {
            startPoint[valueDimIdx] += size[valueDimIdx];
            size[valueDimIdx] = -size[valueDimIdx];
        }
        if (x >= startPoint[0] && x <= startPoint[0] + size[0] && y >= startPoint[1] && y <= startPoint[1] + size[1]) {
            return largeDataIndices[i];
        }
    }
    return -1;
}
function createBackgroundShape(isHorizontalOrRadial, layout, coord) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var rectShape = layout;
        var coordLayout = coord.getArea();
        return {
            x: isHorizontalOrRadial ? rectShape.x : coordLayout.x,
            y: isHorizontalOrRadial ? coordLayout.y : rectShape.y,
            width: isHorizontalOrRadial ? rectShape.width : coordLayout.width,
            height: isHorizontalOrRadial ? coordLayout.height : rectShape.height
        };
    } else {
        var coordLayout = coord.getArea();
        var sectorShape = layout;
        return {
            cx: coordLayout.cx,
            cy: coordLayout.cy,
            r0: isHorizontalOrRadial ? coordLayout.r0 : sectorShape.r0,
            r: isHorizontalOrRadial ? coordLayout.r : sectorShape.r,
            startAngle: isHorizontalOrRadial ? sectorShape.startAngle : 0,
            endAngle: isHorizontalOrRadial ? sectorShape.endAngle : Math.PI * 2
        };
    }
}
function createBackgroundEl(coord, isHorizontalOrRadial, layout) {
    var ElementClz = coord.type === 'polar' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"];
    return new ElementClz({
        shape: createBackgroundShape(isHorizontalOrRadial, layout, coord),
        silent: true,
        z2: 0
    });
}
const __TURBOPACK__default__export__ = BarView;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/barGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataSample.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/BarView.js [app-client] (ecmascript)");
;
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"], 'bar'));
    // Do layout after other overall layout, which can prepare some information.
    registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProgressiveLayout"])('bar'));
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('bar'));
    /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */ registers.registerAction({
        type: 'changeAxisOrder',
        event: 'changeAxisOrder',
        update: 'update'
    }, function(payload, ecModel) {
        var componentType = payload.componentType || 'series';
        ecModel.eachComponent({
            mainType: componentType,
            query: payload
        }, function(componentModel) {
            if (payload.sortInfo) {
                componentModel.axis.setCategorySortInfo(payload.sortInfo);
            }
        });
    });
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
;
var LineSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LineSeriesModel, _super);
    function LineSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LineSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    LineSeriesModel.prototype.getInitialData = function(option) {
        if ("TURBOPACK compile-time truthy", 1) {
            var coordSys = option.coordinateSystem;
            if (coordSys !== 'polar' && coordSys !== 'cartesian2d') {
                throw new Error('Line not support coordinateSystem besides cartesian and polar');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    LineSeriesModel.prototype.getLegendIcon = function(opt) {
        var group = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])('line', 0, opt.itemHeight / 2, opt.itemWidth, 0, opt.lineStyle.stroke, false);
        group.add(line);
        line.setStyle(opt.lineStyle);
        var visualType = this.getData().getVisual('symbol');
        var visualRotate = this.getData().getVisual('symbolRotate');
        var symbolType = visualType === 'none' ? 'circle' : visualType;
        // Symbol size is 80% when there is a line
        var size = opt.itemHeight * 0.8;
        var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, (opt.itemWidth - size) / 2, (opt.itemHeight - size) / 2, size, size, opt.itemStyle.fill);
        group.add(symbol);
        symbol.setStyle(opt.itemStyle);
        var symbolRotate = opt.iconRotate === 'inherit' ? visualRotate : opt.iconRotate || 0;
        symbol.rotation = symbolRotate * Math.PI / 180;
        symbol.setOrigin([
            opt.itemWidth / 2,
            opt.itemHeight / 2
        ]);
        if (symbolType.indexOf('empty') > -1) {
            symbol.style.stroke = symbol.style.fill;
            symbol.style.fill = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral00;
            symbol.style.lineWidth = 2;
        }
        return group;
    };
    LineSeriesModel.type = 'series.line';
    LineSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    LineSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 3,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        clip: true,
        label: {
            position: 'top'
        },
        // itemStyle: {
        // },
        endLabel: {
            show: false,
            valueAnimation: true,
            distance: 8
        },
        lineStyle: {
            width: 2,
            type: 'solid'
        },
        emphasis: {
            scale: true
        },
        // areaStyle: {
        // origin of areaStyle. Valid values:
        // `'auto'/null/undefined`: from axisLine to data
        // `'start'`: from min to data
        // `'end'`: from data to max
        // origin: 'auto'
        // },
        // false, 'start', 'end', 'middle'
        step: false,
        // Disabled if step is true
        smooth: false,
        smoothMonotone: null,
        symbol: 'emptyCircle',
        symbolSize: 6,
        symbolRotate: null,
        showSymbol: true,
        // `false`: follow the label interval strategy.
        // `true`: show all symbols.
        // `'auto'`: If possible, show all symbols, otherwise
        //           follow the label interval strategy.
        showAllSymbol: 'auto',
        // Whether to connect break point.
        connectNulls: false,
        // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
        sampling: 'none',
        animationEasing: 'linear',
        // Disable progressive
        progressive: 0,
        hoverLayerThreshold: Infinity,
        universalTransition: {
            divideShape: 'clone'
        },
        triggerLineEvent: false
    };
    return LineSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-client] (ecmascript)");
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
var Symbol = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Symbol, _super);
    function Symbol(data, idx, seriesScope, opts) {
        var _this = _super.call(this) || this;
        _this.updateData(data, idx, seriesScope, opts);
        return _this;
    }
    Symbol.prototype._createSymbol = function(symbolType, data, idx, symbolSize, z2, keepAspect) {
        // Remove paths created before
        this.removeAll();
        // let symbolPath = createSymbol(
        //     symbolType, -0.5, -0.5, 1, 1, color
        // );
        // If width/height are set too small (e.g., set to 1) on ios10
        // and macOS Sierra, a circle stroke become a rect, no matter what
        // the scale is set. So we set width/height as 2. See #4150.
        var symbolPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, -1, -1, 2, 2, null, keepAspect);
        symbolPath.attr({
            z2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(z2, 100),
            culling: true,
            scaleX: symbolSize[0] / 2,
            scaleY: symbolSize[1] / 2
        });
        // Rewrite drift method
        symbolPath.drift = driftSymbol;
        this._symbolType = symbolType;
        this.add(symbolPath);
    };
    /**
   * Stop animation
   * @param {boolean} toLastFrame
   */ Symbol.prototype.stopSymbolAnimation = function(toLastFrame) {
        this.childAt(0).stopAnimation(null, toLastFrame);
    };
    Symbol.prototype.getSymbolType = function() {
        return this._symbolType;
    };
    /**
   * FIXME:
   * Caution: This method breaks the encapsulation of this module,
   * but it indeed brings convenience. So do not use the method
   * unless you detailedly know all the implements of `Symbol`,
   * especially animation.
   *
   * Get symbol path element.
   */ Symbol.prototype.getSymbolPath = function() {
        return this.childAt(0);
    };
    /**
   * Highlight symbol
   */ Symbol.prototype.highlight = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"])(this.childAt(0));
    };
    /**
   * Downplay symbol
   */ Symbol.prototype.downplay = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(this.childAt(0));
    };
    /**
   * @param {number} zlevel
   * @param {number} z
   */ Symbol.prototype.setZ = function(zlevel, z) {
        var symbolPath = this.childAt(0);
        symbolPath.zlevel = zlevel;
        symbolPath.z = z;
    };
    Symbol.prototype.setDraggable = function(draggable, hasCursorOption) {
        var symbolPath = this.childAt(0);
        symbolPath.draggable = draggable;
        symbolPath.cursor = !hasCursorOption && draggable ? 'move' : symbolPath.cursor;
    };
    /**
   * Update symbol properties
   */ Symbol.prototype.updateData = function(data, idx, seriesScope, opts) {
        this.silent = false;
        var symbolType = data.getItemVisual(idx, 'symbol') || 'circle';
        var seriesModel = data.hostModel;
        var symbolSize = Symbol.getSymbolSize(data, idx);
        var z2 = Symbol.getSymbolZ2(data, idx);
        var isInit = symbolType !== this._symbolType;
        var disableAnimation = opts && opts.disableAnimation;
        if (isInit) {
            var keepAspect = data.getItemVisual(idx, 'symbolKeepAspect');
            this._createSymbol(symbolType, data, idx, symbolSize, z2, keepAspect);
        } else {
            var symbolPath = this.childAt(0);
            symbolPath.silent = false;
            var target = {
                scaleX: symbolSize[0] / 2,
                scaleY: symbolSize[1] / 2
            };
            disableAnimation ? symbolPath.attr(target) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](symbolPath, target, seriesModel, idx);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(symbolPath);
        }
        this._updateCommon(data, idx, symbolSize, seriesScope, opts);
        if (isInit) {
            var symbolPath = this.childAt(0);
            if (!disableAnimation) {
                var target = {
                    scaleX: this._sizeX,
                    scaleY: this._sizeY,
                    style: {
                        // Always fadeIn. Because it has fadeOut animation when symbol is removed..
                        opacity: symbolPath.style.opacity
                    }
                };
                symbolPath.scaleX = symbolPath.scaleY = 0;
                symbolPath.style.opacity = 0;
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](symbolPath, target, seriesModel, idx);
            }
        }
        if (disableAnimation) {
            // Must stop leave transition manually if don't call initProps or updateProps.
            this.childAt(0).stopAnimation('leave');
        }
    };
    Symbol.prototype._updateCommon = function(data, idx, symbolSize, seriesScope, opts) {
        var symbolPath = this.childAt(0);
        var seriesModel = data.hostModel;
        var emphasisItemStyle;
        var blurItemStyle;
        var selectItemStyle;
        var focus;
        var blurScope;
        var emphasisDisabled;
        var labelStatesModels;
        var hoverScale;
        var cursorStyle;
        if (seriesScope) {
            emphasisItemStyle = seriesScope.emphasisItemStyle;
            blurItemStyle = seriesScope.blurItemStyle;
            selectItemStyle = seriesScope.selectItemStyle;
            focus = seriesScope.focus;
            blurScope = seriesScope.blurScope;
            labelStatesModels = seriesScope.labelStatesModels;
            hoverScale = seriesScope.hoverScale;
            cursorStyle = seriesScope.cursorStyle;
            emphasisDisabled = seriesScope.emphasisDisabled;
        }
        if (!seriesScope || data.hasItemOption) {
            var itemModel = seriesScope && seriesScope.itemModel ? seriesScope.itemModel : data.getItemModel(idx);
            var emphasisModel = itemModel.getModel('emphasis');
            emphasisItemStyle = emphasisModel.getModel('itemStyle').getItemStyle();
            selectItemStyle = itemModel.getModel([
                'select',
                'itemStyle'
            ]).getItemStyle();
            blurItemStyle = itemModel.getModel([
                'blur',
                'itemStyle'
            ]).getItemStyle();
            focus = emphasisModel.get('focus');
            blurScope = emphasisModel.get('blurScope');
            emphasisDisabled = emphasisModel.get('disabled');
            labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
            hoverScale = emphasisModel.getShallow('scale');
            cursorStyle = itemModel.getShallow('cursor');
        }
        var symbolRotate = data.getItemVisual(idx, 'symbolRotate');
        symbolPath.attr('rotation', (symbolRotate || 0) * Math.PI / 180 || 0);
        var symbolOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(data.getItemVisual(idx, 'symbolOffset'), symbolSize);
        if (symbolOffset) {
            symbolPath.x = symbolOffset[0];
            symbolPath.y = symbolOffset[1];
        }
        cursorStyle && symbolPath.attr('cursor', cursorStyle);
        var symbolStyle = data.getItemVisual(idx, 'style');
        var visualColor = symbolStyle.fill;
        if (symbolPath instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var pathStyle = symbolPath.style;
            symbolPath.useStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                // TODO other properties like x, y ?
                image: pathStyle.image,
                x: pathStyle.x,
                y: pathStyle.y,
                width: pathStyle.width,
                height: pathStyle.height
            }, symbolStyle));
        } else {
            if (symbolPath.__isEmptyBrush) {
                // fill and stroke will be swapped if it's empty.
                // So we cloned a new style to avoid it affecting the original style in visual storage.
                // TODO Better implementation. No empty logic!
                symbolPath.useStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, symbolStyle));
            } else {
                symbolPath.useStyle(symbolStyle);
            }
            // Disable decal because symbol scale will been applied on the decal.
            symbolPath.style.decal = null;
            symbolPath.setColor(visualColor, opts && opts.symbolInnerColor);
            symbolPath.style.strokeNoScale = true;
        }
        var liftZ = data.getItemVisual(idx, 'liftZ');
        var z2Origin = this._z2;
        if (liftZ != null) {
            if (z2Origin == null) {
                this._z2 = symbolPath.z2;
                symbolPath.z2 += liftZ;
            }
        } else if (z2Origin != null) {
            symbolPath.z2 = z2Origin;
            this._z2 = null;
        }
        var useNameLabel = opts && opts.useNameLabel;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(symbolPath, labelStatesModels, {
            labelFetcher: seriesModel,
            labelDataIndex: idx,
            defaultText: getLabelDefaultText,
            inheritColor: visualColor,
            defaultOpacity: symbolStyle.opacity
        });
        // Do not execute util needed.
        function getLabelDefaultText(idx) {
            return useNameLabel ? data.getName(idx) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(data, idx);
        }
        this._sizeX = symbolSize[0] / 2;
        this._sizeY = symbolSize[1] / 2;
        var emphasisState = symbolPath.ensureState('emphasis');
        emphasisState.style = emphasisItemStyle;
        symbolPath.ensureState('select').style = selectItemStyle;
        symbolPath.ensureState('blur').style = blurItemStyle;
        // null / undefined / true means to use default strategy.
        // 0 / false / negative number / NaN / Infinity means no scale.
        var scaleRatio = hoverScale == null || hoverScale === true ? Math.max(1.1, 3 / this._sizeY) : isFinite(hoverScale) && hoverScale > 0 ? +hoverScale : 1;
        // always set scale to allow resetting
        emphasisState.scaleX = this._sizeX * scaleRatio;
        emphasisState.scaleY = this._sizeY * scaleRatio;
        this.setSymbolScale(1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(this, focus, blurScope, emphasisDisabled);
    };
    Symbol.prototype.setSymbolScale = function(scale) {
        this.scaleX = this.scaleY = scale;
    };
    Symbol.prototype.fadeOut = function(cb, seriesModel, opt) {
        var symbolPath = this.childAt(0);
        var dataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(this).dataIndex;
        var animationOpt = opt && opt.animation;
        // Avoid mistaken hover when fading out
        this.silent = symbolPath.silent = true;
        // Not show text when animating
        if (opt && opt.fadeLabel) {
            var textContent = symbolPath.getTextContent();
            if (textContent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElement"](textContent, {
                    style: {
                        opacity: 0
                    }
                }, seriesModel, {
                    dataIndex: dataIndex,
                    removeOpt: animationOpt,
                    cb: function() {
                        symbolPath.removeTextContent();
                    }
                });
            }
        } else {
            symbolPath.removeTextContent();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElement"](symbolPath, {
            style: {
                opacity: 0
            },
            scaleX: 0,
            scaleY: 0
        }, seriesModel, {
            dataIndex: dataIndex,
            cb: cb,
            removeOpt: animationOpt
        });
    };
    Symbol.getSymbolSize = function(data, idx) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSymbolSize"])(data.getItemVisual(idx, 'symbolSize'));
    };
    Symbol.getSymbolZ2 = function(data, idx) {
        return data.getItemVisual(idx, 'z2');
    };
    return Symbol;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]);
function driftSymbol(dx, dy) {
    this.parent.drift(dx, dy);
}
const __TURBOPACK__default__export__ = Symbol;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
;
;
;
;
function symbolNeedsDraw(data, point, idx, opt) {
    return point && !isNaN(point[0]) && !isNaN(point[1]) && !(opt.isIgnore && opt.isIgnore(idx)) && !(opt.clipShape && !opt.clipShape.contain(point[0], point[1])) && data.getItemVisual(idx, 'symbol') !== 'none';
}
function normalizeUpdateOpt(opt) {
    if (opt != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(opt)) {
        opt = {
            isIgnore: opt
        };
    }
    return opt || {};
}
function makeSeriesScope(data) {
    var seriesModel = data.hostModel;
    var emphasisModel = seriesModel.getModel('emphasis');
    return {
        emphasisItemStyle: emphasisModel.getModel('itemStyle').getItemStyle(),
        blurItemStyle: seriesModel.getModel([
            'blur',
            'itemStyle'
        ]).getItemStyle(),
        selectItemStyle: seriesModel.getModel([
            'select',
            'itemStyle'
        ]).getItemStyle(),
        focus: emphasisModel.get('focus'),
        blurScope: emphasisModel.get('blurScope'),
        emphasisDisabled: emphasisModel.get('disabled'),
        hoverScale: emphasisModel.get('scale'),
        labelStatesModels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(seriesModel),
        cursorStyle: seriesModel.get('cursor')
    };
}
var SymbolDraw = /** @class */ function() {
    function SymbolDraw(SymbolCtor) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        this._SymbolCtor = SymbolCtor || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
    /**
   * Update symbols draw by new data
   */ SymbolDraw.prototype.updateData = function(data, opt) {
        // Remove progressive els.
        this._progressiveEls = null;
        opt = normalizeUpdateOpt(opt);
        var group = this.group;
        var seriesModel = data.hostModel;
        var oldData = this._data;
        var SymbolCtor = this._SymbolCtor;
        var disableAnimation = opt.disableAnimation;
        var seriesScope = makeSeriesScope(data);
        var symbolUpdateOpt = {
            disableAnimation: disableAnimation
        };
        var getSymbolPoint = opt.getSymbolPoint || function(idx) {
            return data.getItemLayout(idx);
        };
        // There is no oldLineData only when first rendering or switching from
        // stream mode to normal mode, where previous elements should be removed.
        if (!oldData) {
            group.removeAll();
        }
        data.diff(oldData).add(function(newIdx) {
            var point = getSymbolPoint(newIdx);
            if (symbolNeedsDraw(data, point, newIdx, opt)) {
                var symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
                symbolEl.setPosition(point);
                data.setItemGraphicEl(newIdx, symbolEl);
                group.add(symbolEl);
            }
        }).update(function(newIdx, oldIdx) {
            var symbolEl = oldData.getItemGraphicEl(oldIdx);
            var point = getSymbolPoint(newIdx);
            if (!symbolNeedsDraw(data, point, newIdx, opt)) {
                group.remove(symbolEl);
                return;
            }
            var newSymbolType = data.getItemVisual(newIdx, 'symbol') || 'circle';
            var oldSymbolType = symbolEl && symbolEl.getSymbolType && symbolEl.getSymbolType();
            if (!symbolEl || oldSymbolType && oldSymbolType !== newSymbolType) {
                group.remove(symbolEl);
                symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
                symbolEl.setPosition(point);
            } else {
                symbolEl.updateData(data, newIdx, seriesScope, symbolUpdateOpt);
                var target = {
                    x: point[0],
                    y: point[1]
                };
                disableAnimation ? symbolEl.attr(target) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](symbolEl, target, seriesModel);
            }
            // Add back
            group.add(symbolEl);
            data.setItemGraphicEl(newIdx, symbolEl);
        }).remove(function(oldIdx) {
            var el = oldData.getItemGraphicEl(oldIdx);
            el && el.fadeOut(function() {
                group.remove(el);
            }, seriesModel);
        }).execute();
        this._getSymbolPoint = getSymbolPoint;
        this._data = data;
    };
    ;
    SymbolDraw.prototype.updateLayout = function() {
        var _this = this;
        var data = this._data;
        if (data) {
            // Not use animation
            data.eachItemGraphicEl(function(el, idx) {
                var point = _this._getSymbolPoint(idx);
                el.setPosition(point);
                el.markRedraw();
            });
        }
    };
    ;
    SymbolDraw.prototype.incrementalPrepareUpdate = function(data) {
        this._seriesScope = makeSeriesScope(data);
        this._data = null;
        this.group.removeAll();
    };
    ;
    /**
   * Update symbols draw by new data
   */ SymbolDraw.prototype.incrementalUpdate = function(taskParams, data, opt) {
        // Clear
        this._progressiveEls = [];
        opt = normalizeUpdateOpt(opt);
        function updateIncrementalAndHover(el) {
            if (!el.isGroup) {
                el.incremental = true;
                el.ensureState('emphasis').hoverLayer = true;
            }
        }
        for(var idx = taskParams.start; idx < taskParams.end; idx++){
            var point = data.getItemLayout(idx);
            if (symbolNeedsDraw(data, point, idx, opt)) {
                var el = new this._SymbolCtor(data, idx, this._seriesScope);
                el.traverse(updateIncrementalAndHover);
                el.setPosition(point);
                this.group.add(el);
                data.setItemGraphicEl(idx, el);
                this._progressiveEls.push(el);
            }
        }
    };
    ;
    SymbolDraw.prototype.eachRendered = function(cb) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseElements"](this._progressiveEls || this.group, cb);
    };
    SymbolDraw.prototype.remove = function(enableAnimation) {
        var group = this.group;
        var data = this._data;
        // Incremental model do not have this._data.
        if (data && enableAnimation) {
            data.eachItemGraphicEl(function(el) {
                el.fadeOut(function() {
                    group.remove(el);
                }, data.hostModel);
            });
        } else {
            group.removeAll();
        }
    };
    ;
    return SymbolDraw;
}();
const __TURBOPACK__default__export__ = SymbolDraw;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStackedOnPoint",
    ()=>getStackedOnPoint,
    "prepareDataCoordInfo",
    ()=>prepareDataCoordInfo
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function prepareDataCoordInfo(coordSys, data, valueOrigin) {
    var baseAxis = coordSys.getBaseAxis();
    var valueAxis = coordSys.getOtherAxis(baseAxis);
    var valueStart = getValueStart(valueAxis, valueOrigin);
    var baseAxisDim = baseAxis.dim;
    var valueAxisDim = valueAxis.dim;
    var valueDim = data.mapDimension(valueAxisDim);
    var baseDim = data.mapDimension(baseAxisDim);
    var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
    var dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coordSys.dimensions, function(coordDim) {
        return data.mapDimension(coordDim);
    });
    var stacked = false;
    var stackResultDim = data.getCalculationInfo('stackResultDimension');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[0])) {
        // jshint ignore:line
        stacked = true;
        dims[0] = stackResultDim;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[1])) {
        // jshint ignore:line
        stacked = true;
        dims[1] = stackResultDim;
    }
    return {
        dataDimsForPoint: dims,
        valueStart: valueStart,
        valueAxisDim: valueAxisDim,
        baseAxisDim: baseAxisDim,
        stacked: !!stacked,
        valueDim: valueDim,
        baseDim: baseDim,
        baseDataOffset: baseDataOffset,
        stackedOverDimension: data.getCalculationInfo('stackedOverDimension')
    };
}
function getValueStart(valueAxis, valueOrigin) {
    var valueStart = 0;
    var extent = valueAxis.scale.getExtent();
    if (valueOrigin === 'start') {
        valueStart = extent[0];
    } else if (valueOrigin === 'end') {
        valueStart = extent[1];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(valueOrigin) && !isNaN(valueOrigin)) {
        valueStart = valueOrigin;
    } else {
        // Both positive
        if (extent[0] > 0) {
            valueStart = extent[0];
        } else if (extent[1] < 0) {
            valueStart = extent[1];
        }
    // If is one positive, and one negative, onZero shall be true
    }
    return valueStart;
}
function getStackedOnPoint(dataCoordInfo, coordSys, data, idx) {
    var value = NaN;
    if (dataCoordInfo.stacked) {
        value = data.get(data.getCalculationInfo('stackedOverDimension'), idx);
    }
    if (isNaN(value)) {
        value = dataCoordInfo.valueStart;
    }
    var baseDataOffset = dataCoordInfo.baseDataOffset;
    var stackedData = [];
    stackedData[baseDataOffset] = data.get(dataCoordInfo.baseDim, idx);
    stackedData[1 - baseDataOffset] = value;
    return coordSys.dataToPoint(stackedData);
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>lineAnimationDiff
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
;
;
function diffData(oldData, newData) {
    var diffResult = [];
    newData.diff(oldData).add(function(idx) {
        diffResult.push({
            cmd: '+',
            idx: idx
        });
    }).update(function(newIdx, oldIdx) {
        diffResult.push({
            cmd: '=',
            idx: oldIdx,
            idx1: newIdx
        });
    }).remove(function(idx) {
        diffResult.push({
            cmd: '-',
            idx: idx
        });
    }).execute();
    return diffResult;
}
function lineAnimationDiff(oldData, newData, oldStackedOnPoints, newStackedOnPoints, oldCoordSys, newCoordSys, oldValueOrigin, newValueOrigin) {
    var diff = diffData(oldData, newData);
    // let newIdList = newData.mapArray(newData.getId);
    // let oldIdList = oldData.mapArray(oldData.getId);
    // convertToIntId(newIdList, oldIdList);
    // // FIXME One data ?
    // diff = arrayDiff(oldIdList, newIdList);
    var currPoints = [];
    var nextPoints = [];
    // Points for stacking base line
    var currStackedPoints = [];
    var nextStackedPoints = [];
    var status = [];
    var sortedIndices = [];
    var rawIndices = [];
    var newDataOldCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(oldCoordSys, newData, oldValueOrigin);
    // const oldDataNewCoordInfo = prepareDataCoordInfo(newCoordSys, oldData, newValueOrigin);
    var oldPoints = oldData.getLayout('points') || [];
    var newPoints = newData.getLayout('points') || [];
    for(var i = 0; i < diff.length; i++){
        var diffItem = diff[i];
        var pointAdded = true;
        var oldIdx2 = void 0;
        var newIdx2 = void 0;
        // FIXME, animation is not so perfect when dataZoom window moves fast
        // Which is in case remvoing or add more than one data in the tail or head
        switch(diffItem.cmd){
            case '=':
                oldIdx2 = diffItem.idx * 2;
                newIdx2 = diffItem.idx1 * 2;
                var currentX = oldPoints[oldIdx2];
                var currentY = oldPoints[oldIdx2 + 1];
                var nextX = newPoints[newIdx2];
                var nextY = newPoints[newIdx2 + 1];
                // If previous data is NaN, use next point directly
                if (isNaN(currentX) || isNaN(currentY)) {
                    currentX = nextX;
                    currentY = nextY;
                }
                currPoints.push(currentX, currentY);
                nextPoints.push(nextX, nextY);
                currStackedPoints.push(oldStackedOnPoints[oldIdx2], oldStackedOnPoints[oldIdx2 + 1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(diffItem.idx1));
                break;
            case '+':
                var newIdx = diffItem.idx;
                var newDataDimsForPoint = newDataOldCoordInfo.dataDimsForPoint;
                var oldPt = oldCoordSys.dataToPoint([
                    newData.get(newDataDimsForPoint[0], newIdx),
                    newData.get(newDataDimsForPoint[1], newIdx)
                ]);
                newIdx2 = newIdx * 2;
                currPoints.push(oldPt[0], oldPt[1]);
                nextPoints.push(newPoints[newIdx2], newPoints[newIdx2 + 1]);
                var stackedOnPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(newDataOldCoordInfo, oldCoordSys, newData, newIdx);
                currStackedPoints.push(stackedOnPoint[0], stackedOnPoint[1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(newIdx));
                break;
            case '-':
                pointAdded = false;
        }
        // Original indices
        if (pointAdded) {
            status.push(diffItem);
            sortedIndices.push(sortedIndices.length);
        }
    }
    // Diff result may be crossed if all items are changed
    // Sort by data index
    sortedIndices.sort(function(a, b) {
        return rawIndices[a] - rawIndices[b];
    });
    var len = currPoints.length;
    var sortedCurrPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedCurrStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedStatus = [];
    for(var i = 0; i < sortedIndices.length; i++){
        var idx = sortedIndices[i];
        var i2 = i * 2;
        var idx2 = idx * 2;
        sortedCurrPoints[i2] = currPoints[idx2];
        sortedCurrPoints[i2 + 1] = currPoints[idx2 + 1];
        sortedNextPoints[i2] = nextPoints[idx2];
        sortedNextPoints[i2 + 1] = nextPoints[idx2 + 1];
        sortedCurrStackedPoints[i2] = currStackedPoints[idx2];
        sortedCurrStackedPoints[i2 + 1] = currStackedPoints[idx2 + 1];
        sortedNextStackedPoints[i2] = nextStackedPoints[idx2];
        sortedNextStackedPoints[i2 + 1] = nextStackedPoints[idx2 + 1];
        sortedStatus[i] = status[idx];
    }
    return {
        current: sortedCurrPoints,
        next: sortedNextPoints,
        stackedOnCurrent: sortedCurrStackedPoints,
        stackedOnNext: sortedNextStackedPoints,
        status: sortedStatus
    };
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/poly.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECPolygon",
    ()=>ECPolygon,
    "ECPolyline",
    ()=>ECPolyline
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
// Poly path support NaN point
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
;
var mathMin = Math.min;
var mathMax = Math.max;
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
/**
 * Draw smoothed line in non-monotone, in may cause undesired curve in extreme
 * situations. This should be used when points are non-monotone neither in x or
 * y dimension.
 */ function drawSegment(ctx, points, start, segLen, allLen, dir, smooth, smoothMonotone, connectNulls) {
    var prevX;
    var prevY;
    var cpx0;
    var cpy0;
    var cpx1;
    var cpy1;
    var idx = start;
    var k = 0;
    for(; k < segLen; k++){
        var x = points[idx * 2];
        var y = points[idx * 2 + 1];
        if (idx >= allLen || idx < 0) {
            break;
        }
        if (isPointNull(x, y)) {
            if (connectNulls) {
                idx += dir;
                continue;
            }
            break;
        }
        if (idx === start) {
            ctx[dir > 0 ? 'moveTo' : 'lineTo'](x, y);
            cpx0 = x;
            cpy0 = y;
        } else {
            var dx = x - prevX;
            var dy = y - prevY;
            // Ignore tiny segment.
            if (dx * dx + dy * dy < 0.5) {
                idx += dir;
                continue;
            }
            if (smooth > 0) {
                var nextIdx = idx + dir;
                var nextX = points[nextIdx * 2];
                var nextY = points[nextIdx * 2 + 1];
                // Ignore duplicate point
                while(nextX === x && nextY === y && k < segLen){
                    k++;
                    nextIdx += dir;
                    idx += dir;
                    nextX = points[nextIdx * 2];
                    nextY = points[nextIdx * 2 + 1];
                    x = points[idx * 2];
                    y = points[idx * 2 + 1];
                    dx = x - prevX;
                    dy = y - prevY;
                }
                var tmpK = k + 1;
                if (connectNulls) {
                    // Find next point not null
                    while(isPointNull(nextX, nextY) && tmpK < segLen){
                        tmpK++;
                        nextIdx += dir;
                        nextX = points[nextIdx * 2];
                        nextY = points[nextIdx * 2 + 1];
                    }
                }
                var ratioNextSeg = 0.5;
                var vx = 0;
                var vy = 0;
                var nextCpx0 = void 0;
                var nextCpy0 = void 0;
                // Is last point
                if (tmpK >= segLen || isPointNull(nextX, nextY)) {
                    cpx1 = x;
                    cpy1 = y;
                } else {
                    vx = nextX - prevX;
                    vy = nextY - prevY;
                    var dx0 = x - prevX;
                    var dx1 = nextX - x;
                    var dy0 = y - prevY;
                    var dy1 = nextY - y;
                    var lenPrevSeg = void 0;
                    var lenNextSeg = void 0;
                    if (smoothMonotone === 'x') {
                        lenPrevSeg = Math.abs(dx0);
                        lenNextSeg = Math.abs(dx1);
                        var dir_1 = vx > 0 ? 1 : -1;
                        cpx1 = x - dir_1 * lenPrevSeg * smooth;
                        cpy1 = y;
                        nextCpx0 = x + dir_1 * lenNextSeg * smooth;
                        nextCpy0 = y;
                    } else if (smoothMonotone === 'y') {
                        lenPrevSeg = Math.abs(dy0);
                        lenNextSeg = Math.abs(dy1);
                        var dir_2 = vy > 0 ? 1 : -1;
                        cpx1 = x;
                        cpy1 = y - dir_2 * lenPrevSeg * smooth;
                        nextCpx0 = x;
                        nextCpy0 = y + dir_2 * lenNextSeg * smooth;
                    } else {
                        lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
                        lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                        // Use ratio of seg length
                        ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
                        cpx1 = x - vx * smooth * (1 - ratioNextSeg);
                        cpy1 = y - vy * smooth * (1 - ratioNextSeg);
                        // cp0 of next segment
                        nextCpx0 = x + vx * smooth * ratioNextSeg;
                        nextCpy0 = y + vy * smooth * ratioNextSeg;
                        // Smooth constraint between point and next point.
                        // Avoid exceeding extreme after smoothing.
                        nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x));
                        nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y));
                        nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x));
                        nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y));
                        // Reclaculate cp1 based on the adjusted cp0 of next seg.
                        vx = nextCpx0 - x;
                        vy = nextCpy0 - y;
                        cpx1 = x - vx * lenPrevSeg / lenNextSeg;
                        cpy1 = y - vy * lenPrevSeg / lenNextSeg;
                        // Smooth constraint between point and prev point.
                        // Avoid exceeding extreme after smoothing.
                        cpx1 = mathMin(cpx1, mathMax(prevX, x));
                        cpy1 = mathMin(cpy1, mathMax(prevY, y));
                        cpx1 = mathMax(cpx1, mathMin(prevX, x));
                        cpy1 = mathMax(cpy1, mathMin(prevY, y));
                        // Adjust next cp0 again.
                        vx = x - cpx1;
                        vy = y - cpy1;
                        nextCpx0 = x + vx * lenNextSeg / lenPrevSeg;
                        nextCpy0 = y + vy * lenNextSeg / lenPrevSeg;
                    }
                }
                ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, x, y);
                cpx0 = nextCpx0;
                cpy0 = nextCpy0;
            } else {
                ctx.lineTo(x, y);
            }
        }
        prevX = x;
        prevY = y;
        idx += dir;
    }
    return k;
}
var ECPolylineShape = /** @class */ function() {
    function ECPolylineShape() {
        this.smooth = 0;
        this.smoothConstraint = true;
    }
    return ECPolylineShape;
}();
var ECPolyline = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolyline, _super);
    function ECPolyline(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polyline';
        return _this;
    }
    ECPolyline.prototype.getDefaultStyle = function() {
        return {
            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.neutral99,
            fill: null
        };
    };
    ECPolyline.prototype.getDefaultShape = function() {
        return new ECPolylineShape();
    };
    ECPolyline.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var i = 0;
        var len = points.length / 2;
        // const result = getBoundingBox(points, shape.smoothConstraint);
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            i += drawSegment(ctx, points, i, len, len, 1, shape.smooth, shape.smoothMonotone, shape.connectNulls) + 1;
        }
    };
    ECPolyline.prototype.getPointOn = function(xOrY, dim) {
        if (!this.path) {
            this.createPathProxy();
            this.buildPath(this.path, this.shape);
        }
        var path = this.path;
        var data = path.data;
        var CMD = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CMD;
        var x0;
        var y0;
        var isDimX = dim === 'x';
        var roots = [];
        for(var i = 0; i < data.length;){
            var cmd = data[i++];
            var x = void 0;
            var y = void 0;
            var x2 = void 0;
            var y2 = void 0;
            var x3 = void 0;
            var y3 = void 0;
            var t = void 0;
            switch(cmd){
                case CMD.M:
                    x0 = data[i++];
                    y0 = data[i++];
                    break;
                case CMD.L:
                    x = data[i++];
                    y = data[i++];
                    t = isDimX ? (xOrY - x0) / (x - x0) : (xOrY - y0) / (y - y0);
                    if (t <= 1 && t >= 0) {
                        var val = isDimX ? (y - y0) * t + y0 : (x - x0) * t + x0;
                        return isDimX ? [
                            xOrY,
                            val
                        ] : [
                            val,
                            xOrY
                        ];
                    }
                    x0 = x;
                    y0 = y;
                    break;
                case CMD.C:
                    x = data[i++];
                    y = data[i++];
                    x2 = data[i++];
                    y2 = data[i++];
                    x3 = data[i++];
                    y3 = data[i++];
                    var nRoot = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicRootAt"])(x0, x, x2, x3, xOrY, roots) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicRootAt"])(y0, y, y2, y3, xOrY, roots);
                    if (nRoot > 0) {
                        for(var i_1 = 0; i_1 < nRoot; i_1++){
                            var t_1 = roots[i_1];
                            if (t_1 <= 1 && t_1 >= 0) {
                                var val = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicAt"])(y0, y, y2, y3, t_1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicAt"])(x0, x, x2, x3, t_1);
                                return isDimX ? [
                                    xOrY,
                                    val
                                ] : [
                                    val,
                                    xOrY
                                ];
                            }
                        }
                    }
                    x0 = x3;
                    y0 = y3;
                    break;
            }
        }
    };
    return ECPolyline;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
var ECPolygonShape = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolygonShape, _super);
    function ECPolygonShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ECPolygonShape;
}(ECPolylineShape);
var ECPolygon = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ECPolygon, _super);
    function ECPolygon(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polygon';
        return _this;
    }
    ECPolygon.prototype.getDefaultShape = function() {
        return new ECPolygonShape();
    };
    ECPolygon.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var stackedOnPoints = shape.stackedOnPoints;
        var i = 0;
        var len = points.length / 2;
        var smoothMonotone = shape.smoothMonotone;
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            var k = drawSegment(ctx, points, i, len, len, 1, shape.smooth, smoothMonotone, shape.connectNulls);
            drawSegment(ctx, stackedOnPoints, i + k - 1, k, len, -1, shape.stackedOnSmooth, smoothMonotone, shape.connectNulls);
            i += k + 1;
            ctx.closePath();
        }
    };
    return ECPolygon;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
// FIXME step not support polar
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js [app-client] (ecmascript) <export default as LinearGradient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/poly.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/vendor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
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
;
;
;
function isPointsSame(points1, points2) {
    if (points1.length !== points2.length) {
        return;
    }
    for(var i = 0; i < points1.length; i++){
        if (points1[i] !== points2[i]) {
            return;
        }
    }
    return true;
}
function bboxFromPoints(points) {
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for(var i = 0; i < points.length;){
        var x = points[i++];
        var y = points[i++];
        if (!isNaN(x)) {
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
        }
        if (!isNaN(y)) {
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        }
    }
    return [
        [
            minX,
            minY
        ],
        [
            maxX,
            maxY
        ]
    ];
}
function getBoundingDiff(points1, points2) {
    var _a = bboxFromPoints(points1), min1 = _a[0], max1 = _a[1];
    var _b = bboxFromPoints(points2), min2 = _b[0], max2 = _b[1];
    // Get a max value from each corner of two boundings.
    return Math.max(Math.abs(min1[0] - min2[0]), Math.abs(min1[1] - min2[1]), Math.abs(max1[0] - max2[0]), Math.abs(max1[1] - max2[1]));
}
function getSmooth(smooth) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"](smooth) ? smooth : smooth ? 0.5 : 0;
}
function getStackedOnPoints(coordSys, data, dataCoordInfo) {
    if (!dataCoordInfo.valueDim) {
        return [];
    }
    var len = data.count();
    var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloat32Array"])(len * 2);
    for(var idx = 0; idx < len; idx++){
        var pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(dataCoordInfo, coordSys, data, idx);
        points[idx * 2] = pt[0];
        points[idx * 2 + 1] = pt[1];
    }
    return points;
}
/**
 * Filter the null data and extend data for step considering `stepTurnAt`
 *
 * @param points data to convert, that may containing null
 * @param basePoints base data to reference, used only for areaStyle points
 * @param coordSys coordinate system
 * @param stepTurnAt 'start' | 'end' | 'middle' | true
 * @param connectNulls whether to connect nulls
 * @returns converted point positions
 */ function turnPointsIntoStep(points, basePoints, coordSys, stepTurnAt, connectNulls) {
    var baseAxis = coordSys.getBaseAxis();
    var baseIndex = baseAxis.dim === 'x' || baseAxis.dim === 'radius' ? 0 : 1;
    var stepPoints = [];
    var i = 0;
    var stepPt = [];
    var pt = [];
    var nextPt = [];
    var filteredPoints = [];
    if (connectNulls) {
        for(i = 0; i < points.length; i += 2){
            /**
       * For areaStyle of stepped lines, `stackedOnPoints` should be
       * filtered the same as `points` so that the base axis values
       * should stay the same as the lines above. See #20021
       */ var reference = basePoints || points;
            if (!isNaN(reference[i]) && !isNaN(reference[i + 1])) {
                filteredPoints.push(points[i], points[i + 1]);
            }
        }
        points = filteredPoints;
    }
    for(i = 0; i < points.length - 2; i += 2){
        nextPt[0] = points[i + 2];
        nextPt[1] = points[i + 3];
        pt[0] = points[i];
        pt[1] = points[i + 1];
        stepPoints.push(pt[0], pt[1]);
        switch(stepTurnAt){
            case 'end':
                stepPt[baseIndex] = nextPt[baseIndex];
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                break;
            case 'middle':
                var middle = (pt[baseIndex] + nextPt[baseIndex]) / 2;
                var stepPt2 = [];
                stepPt[baseIndex] = stepPt2[baseIndex] = middle;
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPt2[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                stepPoints.push(stepPt2[0], stepPt2[1]);
                break;
            default:
                // default is start
                stepPt[baseIndex] = pt[baseIndex];
                stepPt[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
        }
    }
    // Last points
    stepPoints.push(points[i++], points[i++]);
    return stepPoints;
}
/**
 * Clip color stops to edge. Avoid creating too large gradients.
 * Which may lead to blurry when GPU acceleration is enabled. See #15680
 *
 * The stops has been sorted from small to large.
 */ function clipColorStops(colorStops, maxSize) {
    var newColorStops = [];
    var len = colorStops.length;
    // coord will always < 0 in prevOutOfRangeColorStop.
    var prevOutOfRangeColorStop;
    var prevInRangeColorStop;
    function lerpStop(stop0, stop1, clippedCoord) {
        var coord0 = stop0.coord;
        var p = (clippedCoord - coord0) / (stop1.coord - coord0);
        var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(p, [
            stop0.color,
            stop1.color
        ]);
        return {
            coord: clippedCoord,
            color: color
        };
    }
    for(var i = 0; i < len; i++){
        var stop_1 = colorStops[i];
        var coord = stop_1.coord;
        if (coord < 0) {
            prevOutOfRangeColorStop = stop_1;
        } else if (coord > maxSize) {
            if (prevInRangeColorStop) {
                newColorStops.push(lerpStop(prevInRangeColorStop, stop_1, maxSize));
            } else if (prevOutOfRangeColorStop) {
                // If there are two stops and coord range is between these two stops
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0), lerpStop(prevOutOfRangeColorStop, stop_1, maxSize));
            }
            break;
        } else {
            if (prevOutOfRangeColorStop) {
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0));
                // Reset
                prevOutOfRangeColorStop = null;
            }
            newColorStops.push(stop_1);
            prevInRangeColorStop = stop_1;
        }
    }
    return newColorStops;
}
function getVisualGradient(data, coordSys, api) {
    var visualMetaList = data.getVisual('visualMeta');
    if (!visualMetaList || !visualMetaList.length || !data.count()) {
        // When data.count() is 0, gradient range can not be calculated.
        return;
    }
    if (coordSys.type !== 'cartesian2d') {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style is only supported on cartesian2d.');
        }
        return;
    }
    var coordDim;
    var visualMeta;
    for(var i = visualMetaList.length - 1; i >= 0; i--){
        var dimInfo = data.getDimensionInfo(visualMetaList[i].dimension);
        coordDim = dimInfo && dimInfo.coordDim;
        // Can only be x or y
        if (coordDim === 'x' || coordDim === 'y') {
            visualMeta = visualMetaList[i];
            break;
        }
    }
    if (!visualMeta) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style only support x or y dimension.');
        }
        return;
    }
    // If the area to be rendered is bigger than area defined by LinearGradient,
    // the canvas spec prescribes that the color of the first stop and the last
    // stop should be used. But if two stops are added at offset 0, in effect
    // browsers use the color of the second stop to render area outside
    // LinearGradient. So we can only infinitesimally extend area defined in
    // LinearGradient to render `outerColors`.
    var axis = coordSys.getAxis(coordDim);
    // dataToCoord mapping may not be linear, but must be monotonic.
    var colorStops = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](visualMeta.stops, function(stop) {
        // offset will be calculated later.
        return {
            coord: axis.toGlobalCoord(axis.dataToCoord(stop.value)),
            color: stop.color
        };
    });
    var stopLen = colorStops.length;
    var outerColors = visualMeta.outerColors.slice();
    if (stopLen && colorStops[0].coord > colorStops[stopLen - 1].coord) {
        colorStops.reverse();
        outerColors.reverse();
    }
    var colorStopsInRange = clipColorStops(colorStops, coordDim === 'x' ? api.getWidth() : api.getHeight());
    var inRangeStopLen = colorStopsInRange.length;
    if (!inRangeStopLen && stopLen) {
        // All stops are out of range. All will be the same color.
        return colorStops[0].coord < 0 ? outerColors[1] ? outerColors[1] : colorStops[stopLen - 1].color : outerColors[0] ? outerColors[0] : colorStops[0].color;
    }
    var tinyExtent = 10; // Arbitrary value: 10px
    var minCoord = colorStopsInRange[0].coord - tinyExtent;
    var maxCoord = colorStopsInRange[inRangeStopLen - 1].coord + tinyExtent;
    var coordSpan = maxCoord - minCoord;
    if (coordSpan < 1e-3) {
        return 'transparent';
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](colorStopsInRange, function(stop) {
        stop.offset = (stop.coord - minCoord) / coordSpan;
    });
    colorStopsInRange.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: inRangeStopLen ? colorStopsInRange[inRangeStopLen - 1].offset : 0.5,
        color: outerColors[1] || 'transparent'
    });
    colorStopsInRange.unshift({
        offset: inRangeStopLen ? colorStopsInRange[0].offset : 0.5,
        color: outerColors[0] || 'transparent'
    });
    var gradient = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$LinearGradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearGradient$3e$__["LinearGradient"](0, 0, 0, 0, colorStopsInRange, true);
    gradient[coordDim] = minCoord;
    gradient[coordDim + '2'] = maxCoord;
    return gradient;
}
function getIsIgnoreFunc(seriesModel, data, coordSys) {
    var showAllSymbol = seriesModel.get('showAllSymbol');
    var isAuto = showAllSymbol === 'auto';
    if (showAllSymbol && !isAuto) {
        return;
    }
    var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
    if (!categoryAxis) {
        return;
    }
    // Note that category label interval strategy might bring some weird effect
    // in some scenario: users may wonder why some of the symbols are not
    // displayed. So we show all symbols as possible as we can.
    if (isAuto && canShowAllSymbolForCategory(categoryAxis, data)) {
        return;
    }
    // Otherwise follow the label interval strategy on category axis.
    var categoryDataDim = data.mapDimension(categoryAxis.dim);
    var labelMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](categoryAxis.getViewLabels(), function(labelItem) {
        var ordinalNumber = categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);
        labelMap[ordinalNumber] = 1;
    });
    return function(dataIndex) {
        return !labelMap.hasOwnProperty(data.get(categoryDataDim, dataIndex));
    };
}
function canShowAllSymbolForCategory(categoryAxis, data) {
    // In most cases, line is monotonous on category axis, and the label size
    // is close with each other. So we check the symbol size and some of the
    // label size alone with the category axis to estimate whether all symbol
    // can be shown without overlap.
    var axisExtent = categoryAxis.getExtent();
    var availSize = Math.abs(axisExtent[1] - axisExtent[0]) / categoryAxis.scale.count();
    isNaN(availSize) && (availSize = 0); // 0/0 is NaN.
    // Sampling some points, max 5.
    var dataLen = data.count();
    var step = Math.max(1, Math.round(dataLen / 5));
    for(var dataIndex = 0; dataIndex < dataLen; dataIndex += step){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getSymbolSize(data, dataIndex)[categoryAxis.isHorizontal() ? 1 : 0] * 1.5 > availSize) {
            return false;
        }
    }
    return true;
}
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
function getLastIndexNotNull(points) {
    var len = points.length / 2;
    for(; len > 0; len--){
        if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
            break;
        }
    }
    return len - 1;
}
function getPointAtIndex(points, idx) {
    return [
        points[idx * 2],
        points[idx * 2 + 1]
    ];
}
function getIndexRange(points, xOrY, dim) {
    var len = points.length / 2;
    var dimIdx = dim === 'x' ? 0 : 1;
    var a;
    var b;
    var prevIndex = 0;
    var nextIndex = -1;
    for(var i = 0; i < len; i++){
        b = points[i * 2 + dimIdx];
        if (isNaN(b) || isNaN(points[i * 2 + 1 - dimIdx])) {
            continue;
        }
        if (i === 0) {
            a = b;
            continue;
        }
        if (a <= xOrY && b >= xOrY || a >= xOrY && b <= xOrY) {
            nextIndex = i;
            break;
        }
        prevIndex = i;
        a = b;
    }
    return {
        range: [
            prevIndex,
            nextIndex
        ],
        t: (xOrY - a) / (b - a)
    };
}
function anyStateShowEndLabel(seriesModel) {
    if (seriesModel.get([
        'endLabel',
        'show'
    ])) {
        return true;
    }
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        if (seriesModel.get([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i],
            'endLabel',
            'show'
        ])) {
            return true;
        }
    }
    return false;
}
function createLineClipPath(lineView, coordSys, hasAnimation, seriesModel) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
        var endLabelModel_1 = seriesModel.getModel('endLabel');
        var valueAnimation_1 = endLabelModel_1.get('valueAnimation');
        var data_1 = seriesModel.getData();
        var labelAnimationRecord_1 = {
            lastFrameIndex: 0
        };
        var during = anyStateShowEndLabel(seriesModel) ? function(percent, clipRect) {
            lineView._endLabelOnDuring(percent, clipRect, data_1, labelAnimationRecord_1, valueAnimation_1, endLabelModel_1, coordSys);
        } : null;
        var isHorizontal = coordSys.getBaseAxis().isHorizontal();
        var clipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGridClipPath"])(coordSys, hasAnimation, seriesModel, function() {
            var endLabel = lineView._endLabel;
            if (endLabel && hasAnimation) {
                if (labelAnimationRecord_1.originalX != null) {
                    endLabel.attr({
                        x: labelAnimationRecord_1.originalX,
                        y: labelAnimationRecord_1.originalY
                    });
                }
            }
        }, during);
        // Expand clip shape to avoid clipping when line value exceeds axis
        if (!seriesModel.get('clip', true)) {
            var rectShape = clipPath.shape;
            var expandSize = Math.max(rectShape.width, rectShape.height);
            if (isHorizontal) {
                rectShape.y -= expandSize;
                rectShape.height += expandSize * 2;
            } else {
                rectShape.x -= expandSize;
                rectShape.width += expandSize * 2;
            }
        }
        // Set to the final frame. To make sure label layout is right.
        if (during) {
            during(1, clipPath);
        }
        return clipPath;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (seriesModel.get([
                'endLabel',
                'show'
            ])) {
                console.warn('endLabel is not supported for lines in polar systems.');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPolarClipPath"])(coordSys, hasAnimation, seriesModel);
    }
}
function getEndLabelStateSpecified(endLabelModel, coordSys) {
    var baseAxis = coordSys.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var isBaseInversed = baseAxis.inverse;
    var align = isHorizontal ? isBaseInversed ? 'right' : 'left' : 'center';
    var verticalAlign = isHorizontal ? 'middle' : isBaseInversed ? 'top' : 'bottom';
    return {
        normal: {
            align: endLabelModel.get('align') || align,
            verticalAlign: endLabelModel.get('verticalAlign') || verticalAlign
        }
    };
}
var LineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LineView, _super);
    function LineView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineView.prototype.init = function() {
        var lineGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var symbolDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.group.add(symbolDraw.group);
        this._symbolDraw = symbolDraw;
        this._lineGroup = lineGroup;
        this._changePolyState = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this._changePolyState, this);
    };
    LineView.prototype.render = function(seriesModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var group = this.group;
        var data = seriesModel.getData();
        var lineStyleModel = seriesModel.getModel('lineStyle');
        var areaStyleModel = seriesModel.getModel('areaStyle');
        var points = data.getLayout('points') || [];
        var isCoordSysPolar = coordSys.type === 'polar';
        var prevCoordSys = this._coordSys;
        var symbolDraw = this._symbolDraw;
        var polyline = this._polyline;
        var polygon = this._polygon;
        var lineGroup = this._lineGroup;
        var hasAnimation = !ecModel.ssr && seriesModel.get('animation');
        var isAreaChart = !areaStyleModel.isEmpty();
        var valueOrigin = areaStyleModel.get('origin');
        var dataCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(coordSys, data, valueOrigin);
        var stackedOnPoints = isAreaChart && getStackedOnPoints(coordSys, data, dataCoordInfo);
        var showSymbol = seriesModel.get('showSymbol');
        var connectNulls = seriesModel.get('connectNulls');
        var isIgnoreFunc = showSymbol && !isCoordSysPolar && getIsIgnoreFunc(seriesModel, data, coordSys);
        // Remove temporary symbols
        var oldData = this._data;
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        // Remove previous created symbols if showSymbol changed to false
        if (!showSymbol) {
            symbolDraw.remove();
        }
        group.add(lineGroup);
        // FIXME step not support polar
        var step = !isCoordSysPolar ? seriesModel.get('step') : false;
        var clipShapeForSymbol;
        if (coordSys && coordSys.getArea && seriesModel.get('clip', true)) {
            clipShapeForSymbol = coordSys.getArea();
            // Avoid float number rounding error for symbol on the edge of axis extent.
            // See #7913 and `test/dataZoom-clip.html`.
            if (clipShapeForSymbol.width != null) {
                clipShapeForSymbol.x -= 0.1;
                clipShapeForSymbol.y -= 0.1;
                clipShapeForSymbol.width += 0.2;
                clipShapeForSymbol.height += 0.2;
            } else if (clipShapeForSymbol.r0) {
                clipShapeForSymbol.r0 -= 0.5;
                clipShapeForSymbol.r += 0.5;
            }
        }
        this._clipShapeForSymbol = clipShapeForSymbol;
        var visualColor = getVisualGradient(data, coordSys, api) || data.getVisual('style')[data.getVisual('drawType')];
        // Initialization animation or coordinate system changed
        if (!(polyline && prevCoordSys.type === coordSys.type && step === this._step)) {
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            hasAnimation && this._initSymbolLabelAnimation(data, coordSys, clipShapeForSymbol);
            if (step) {
                if (stackedOnPoints) {
                    stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                }
                // TODO If stacked series is not step
                points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
            }
            polyline = this._newPolyline(points);
            if (isAreaChart) {
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon) {
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
        } else {
            if (isAreaChart && !polygon) {
                // If areaStyle is added
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon && !isAreaChart) {
                // If areaStyle is removed
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            // Update clipPath
            var oldClipPath = lineGroup.getClipPath();
            if (oldClipPath) {
                var newClipPath = createLineClipPath(this, coordSys, false, seriesModel);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](oldClipPath, {
                    shape: newClipPath.shape
                }, seriesModel);
            } else {
                lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
            }
            // Always update, or it is wrong in the case turning on legend
            // because points are not changed.
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            // In the case data zoom triggered refreshing frequently
            // Data may not change if line has a category axis. So it should animate nothing.
            if (!isPointsSame(this._stackedOnPoints, stackedOnPoints) || !isPointsSame(this._points, points)) {
                if (hasAnimation) {
                    this._doUpdateAnimation(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls);
                } else {
                    // Not do it in update with animation
                    if (step) {
                        if (stackedOnPoints) {
                            stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                        }
                        // TODO If stacked series is not step
                        points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
                    }
                    polyline.setShape({
                        points: points
                    });
                    polygon && polygon.setShape({
                        points: points,
                        stackedOnPoints: stackedOnPoints
                    });
                }
            }
        }
        var emphasisModel = seriesModel.getModel('emphasis');
        var focus = emphasisModel.get('focus');
        var blurScope = emphasisModel.get('blurScope');
        var emphasisDisabled = emphasisModel.get('disabled');
        polyline.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](// Use color in lineStyle first
        lineStyleModel.getLineStyle(), {
            fill: 'none',
            stroke: visualColor,
            lineJoin: 'bevel'
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polyline, seriesModel, 'lineStyle');
        if (polyline.style.lineWidth > 0 && seriesModel.get([
            'emphasis',
            'lineStyle',
            'width'
        ]) === 'bolder') {
            var emphasisLineStyle = polyline.getState('emphasis').style;
            emphasisLineStyle.lineWidth = +polyline.style.lineWidth + 1;
        }
        // Needs seriesIndex for focus
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(polyline).seriesIndex = seriesModel.seriesIndex;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polyline, focus, blurScope, emphasisDisabled);
        var smooth = getSmooth(seriesModel.get('smooth'));
        var smoothMonotone = seriesModel.get('smoothMonotone');
        polyline.setShape({
            smooth: smooth,
            smoothMonotone: smoothMonotone,
            connectNulls: connectNulls
        });
        if (polygon) {
            var stackedOnSeries = data.getCalculationInfo('stackedOnSeries');
            var stackedOnSmooth = 0;
            polygon.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](areaStyleModel.getAreaStyle(), {
                fill: visualColor,
                opacity: 0.7,
                lineJoin: 'bevel',
                decal: data.getVisual('style').decal
            }));
            if (stackedOnSeries) {
                stackedOnSmooth = getSmooth(stackedOnSeries.get('smooth'));
            }
            polygon.setShape({
                smooth: smooth,
                stackedOnSmooth: stackedOnSmooth,
                smoothMonotone: smoothMonotone,
                connectNulls: connectNulls
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polygon, seriesModel, 'areaStyle');
            // Needs seriesIndex for focus
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(polygon).seriesIndex = seriesModel.seriesIndex;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polygon, focus, blurScope, emphasisDisabled);
        }
        var changePolyState = this._changePolyState;
        data.eachItemGraphicEl(function(el) {
            // Switch polyline / polygon state if element changed its state.
            el && (el.onHoverStateChange = changePolyState);
        });
        this._polyline.onHoverStateChange = changePolyState;
        this._data = data;
        // Save the coordinate system for transition animation when data changed
        this._coordSys = coordSys;
        this._stackedOnPoints = stackedOnPoints;
        this._points = points;
        this._step = step;
        this._valueOrigin = valueOrigin;
        if (seriesModel.get('triggerLineEvent')) {
            this.packEventData(seriesModel, polyline);
            polygon && this.packEventData(seriesModel, polygon);
        }
    };
    LineView.prototype.packEventData = function(seriesModel, el) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = {
            componentType: 'series',
            componentSubType: 'line',
            componentIndex: seriesModel.componentIndex,
            seriesIndex: seriesModel.seriesIndex,
            seriesName: seriesModel.name,
            seriesType: 'line'
        };
    };
    LineView.prototype.highlight = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, payload);
        this._changePolyState('emphasis');
        if (!(dataIndex instanceof Array) && dataIndex != null && dataIndex >= 0) {
            var points = data.getLayout('points');
            var symbol = data.getItemGraphicEl(dataIndex);
            if (!symbol) {
                // Create a temporary symbol if it is not exists
                var x = points[dataIndex * 2];
                var y = points[dataIndex * 2 + 1];
                if (isNaN(x) || isNaN(y)) {
                    // Null data
                    return;
                }
                // fix #11360: shouldn't draw symbol outside clipShapeForSymbol
                if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(x, y)) {
                    return;
                }
                var zlevel = seriesModel.get('zlevel') || 0;
                var z = seriesModel.get('z') || 0;
                symbol = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data, dataIndex);
                symbol.x = x;
                symbol.y = y;
                symbol.setZ(zlevel, z);
                // ensure label text of the temporary symbol is in front of line and area polygon
                var symbolLabel = symbol.getSymbolPath().getTextContent();
                if (symbolLabel) {
                    symbolLabel.zlevel = zlevel;
                    symbolLabel.z = z;
                    symbolLabel.z2 = this._polyline.z2 + 1;
                }
                symbol.__temp = true;
                data.setItemGraphicEl(dataIndex, symbol);
                // Stop scale animation
                symbol.stopSymbolAnimation(true);
                this.group.add(symbol);
            }
            symbol.highlight();
        } else {
            // Highlight whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.highlight.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype.downplay = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryDataIndex"](data, payload);
        this._changePolyState('normal');
        if (dataIndex != null && dataIndex >= 0) {
            var symbol = data.getItemGraphicEl(dataIndex);
            if (symbol) {
                if (symbol.__temp) {
                    data.setItemGraphicEl(dataIndex, null);
                    this.group.remove(symbol);
                } else {
                    symbol.downplay();
                }
            }
        } else {
            // FIXME
            // can not downplay completely.
            // Downplay whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.downplay.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype._changePolyState = function(toState) {
        var polygon = this._polygon;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesFlag"])(this._polyline, toState);
        polygon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesFlag"])(polygon, toState);
    };
    LineView.prototype._newPolyline = function(points) {
        var polyline = this._polyline;
        // Remove previous created polyline
        if (polyline) {
            this._lineGroup.remove(polyline);
        }
        polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECPolyline"]({
            shape: {
                points: points
            },
            segmentIgnoreThreshold: 2,
            z2: 10
        });
        this._lineGroup.add(polyline);
        this._polyline = polyline;
        return polyline;
    };
    LineView.prototype._newPolygon = function(points, stackedOnPoints) {
        var polygon = this._polygon;
        // Remove previous created polygon
        if (polygon) {
            this._lineGroup.remove(polygon);
        }
        polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECPolygon"]({
            shape: {
                points: points,
                stackedOnPoints: stackedOnPoints
            },
            segmentIgnoreThreshold: 2
        });
        this._lineGroup.add(polygon);
        this._polygon = polygon;
        return polygon;
    };
    LineView.prototype._initSymbolLabelAnimation = function(data, coordSys, clipShape) {
        var isHorizontalOrRadial;
        var isCoordSysPolar;
        var baseAxis = coordSys.getBaseAxis();
        var isAxisInverse = baseAxis.inverse;
        if (coordSys.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
            isCoordSysPolar = false;
        } else if (coordSys.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
            isCoordSysPolar = true;
        }
        var seriesModel = data.hostModel;
        var seriesDuration = seriesModel.get('animationDuration');
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDuration)) {
            seriesDuration = seriesDuration(null);
        }
        var seriesDelay = seriesModel.get('animationDelay') || 0;
        var seriesDelayValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDelay) ? seriesDelay(null) : seriesDelay;
        data.eachItemGraphicEl(function(symbol, idx) {
            var el = symbol;
            if (el) {
                var point = [
                    symbol.x,
                    symbol.y
                ];
                var start = void 0;
                var end = void 0;
                var current = void 0;
                if (clipShape) {
                    if (isCoordSysPolar) {
                        var polarClip = clipShape;
                        var coord = coordSys.pointToCoord(point);
                        if (isHorizontalOrRadial) {
                            start = polarClip.startAngle;
                            end = polarClip.endAngle;
                            current = -coord[1] / 180 * Math.PI;
                        } else {
                            start = polarClip.r0;
                            end = polarClip.r;
                            current = coord[0];
                        }
                    } else {
                        var gridClip = clipShape;
                        if (isHorizontalOrRadial) {
                            start = gridClip.x;
                            end = gridClip.x + gridClip.width;
                            current = symbol.x;
                        } else {
                            start = gridClip.y + gridClip.height;
                            end = gridClip.y;
                            current = symbol.y;
                        }
                    }
                }
                var ratio = end === start ? 0 : (current - start) / (end - start);
                if (isAxisInverse) {
                    ratio = 1 - ratio;
                }
                var delay = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](seriesDelay) ? seriesDelay(idx) : seriesDuration * ratio + seriesDelayValue;
                var symbolPath = el.getSymbolPath();
                var text = symbolPath.getTextContent();
                el.attr({
                    scaleX: 0,
                    scaleY: 0
                });
                el.animateTo({
                    scaleX: 1,
                    scaleY: 1
                }, {
                    duration: 200,
                    setToFinal: true,
                    delay: delay
                });
                if (text) {
                    text.animateFrom({
                        style: {
                            opacity: 0
                        }
                    }, {
                        duration: 300,
                        delay: delay
                    });
                }
                symbolPath.disableLabelAnimation = true;
            }
        });
    };
    LineView.prototype._initOrUpdateEndLabel = function(seriesModel, coordSys, inheritColor) {
        var endLabelModel = seriesModel.getModel('endLabel');
        if (anyStateShowEndLabel(seriesModel)) {
            var data_2 = seriesModel.getData();
            var polyline = this._polyline;
            // series may be filtered.
            var points = data_2.getLayout('points');
            if (!points) {
                polyline.removeTextContent();
                this._endLabel = null;
                return;
            }
            var endLabel = this._endLabel;
            if (!endLabel) {
                endLabel = this._endLabel = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]({
                    z2: 200 // should be higher than item symbol
                });
                endLabel.ignoreClip = true;
                polyline.setTextContent(this._endLabel);
                polyline.disableLabelAnimation = true;
            }
            // Find last non-NaN data to display data
            var dataIndex = getLastIndexNotNull(points);
            if (dataIndex >= 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(polyline, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(seriesModel, 'endLabel'), {
                    inheritColor: inheritColor,
                    labelFetcher: seriesModel,
                    labelDataIndex: dataIndex,
                    defaultText: function(dataIndex, opt, interpolatedValue) {
                        return interpolatedValue != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data_2, interpolatedValue) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabel"])(data_2, dataIndex);
                    },
                    enableTextSetter: true
                }, getEndLabelStateSpecified(endLabelModel, coordSys));
                polyline.textConfig.position = null;
            }
        } else if (this._endLabel) {
            this._polyline.removeTextContent();
            this._endLabel = null;
        }
    };
    LineView.prototype._endLabelOnDuring = function(percent, clipRect, data, animationRecord, valueAnimation, endLabelModel, coordSys) {
        var endLabel = this._endLabel;
        var polyline = this._polyline;
        if (endLabel) {
            // NOTE: Don't remove percent < 1. percent === 1 means the first frame during render.
            // The label is not prepared at this time.
            if (percent < 1 && animationRecord.originalX == null) {
                animationRecord.originalX = endLabel.x;
                animationRecord.originalY = endLabel.y;
            }
            var points = data.getLayout('points');
            var seriesModel = data.hostModel;
            var connectNulls = seriesModel.get('connectNulls');
            var precision = endLabelModel.get('precision');
            var distance = endLabelModel.get('distance') || 0;
            var baseAxis = coordSys.getBaseAxis();
            var isHorizontal = baseAxis.isHorizontal();
            var isBaseInversed = baseAxis.inverse;
            var clipShape = clipRect.shape;
            var xOrY = isBaseInversed ? isHorizontal ? clipShape.x : clipShape.y + clipShape.height : isHorizontal ? clipShape.x + clipShape.width : clipShape.y;
            var distanceX = (isHorizontal ? distance : 0) * (isBaseInversed ? -1 : 1);
            var distanceY = (isHorizontal ? 0 : -distance) * (isBaseInversed ? -1 : 1);
            var dim = isHorizontal ? 'x' : 'y';
            var dataIndexRange = getIndexRange(points, xOrY, dim);
            var indices = dataIndexRange.range;
            var diff = indices[1] - indices[0];
            var value = void 0;
            if (diff >= 1) {
                // diff > 1 && connectNulls, which is on the null data.
                if (diff > 1 && !connectNulls) {
                    var pt = getPointAtIndex(points, indices[0]);
                    endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    valueAnimation && (value = seriesModel.getRawValue(indices[0]));
                } else {
                    var pt = polyline.getPointOn(xOrY, dim);
                    pt && endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    var startValue = seriesModel.getRawValue(indices[0]);
                    var endValue = seriesModel.getRawValue(indices[1]);
                    valueAnimation && (value = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateRawValues"](data, precision, startValue, endValue, dataIndexRange.t));
                }
                animationRecord.lastFrameIndex = indices[0];
            } else {
                // If diff <= 0, which is the range is not found(Include NaN)
                // Choose the first point or last point.
                var idx = percent === 1 || animationRecord.lastFrameIndex > 0 ? indices[0] : 0;
                var pt = getPointAtIndex(points, idx);
                valueAnimation && (value = seriesModel.getRawValue(idx));
                endLabel.attr({
                    x: pt[0] + distanceX,
                    y: pt[1] + distanceY
                });
            }
            if (valueAnimation) {
                var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelInner"])(endLabel);
                if (typeof inner.setLabelText === 'function') {
                    inner.setLabelText(value);
                }
            }
        }
    };
    /**
   * @private
   */ // FIXME Two value axis
    LineView.prototype._doUpdateAnimation = function(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls) {
        var polyline = this._polyline;
        var polygon = this._polygon;
        var seriesModel = data.hostModel;
        var diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this._data, data, this._stackedOnPoints, stackedOnPoints, this._coordSys, coordSys, this._valueOrigin, valueOrigin);
        var current = diff.current;
        var stackedOnCurrent = diff.stackedOnCurrent;
        var next = diff.next;
        var stackedOnNext = diff.stackedOnNext;
        if (step) {
            // TODO If stacked series is not step
            stackedOnCurrent = turnPointsIntoStep(diff.stackedOnCurrent, diff.current, coordSys, step, connectNulls);
            current = turnPointsIntoStep(diff.current, null, coordSys, step, connectNulls);
            stackedOnNext = turnPointsIntoStep(diff.stackedOnNext, diff.next, coordSys, step, connectNulls);
            next = turnPointsIntoStep(diff.next, null, coordSys, step, connectNulls);
        }
        // Don't apply animation if diff is large.
        // For better result and avoid memory explosion problems like
        // https://github.com/apache/incubator-echarts/issues/12229
        if (getBoundingDiff(current, next) > 3000 || polygon && getBoundingDiff(stackedOnCurrent, stackedOnNext) > 3000) {
            polyline.stopAnimation();
            polyline.setShape({
                points: next
            });
            if (polygon) {
                polygon.stopAnimation();
                polygon.setShape({
                    points: next,
                    stackedOnPoints: stackedOnNext
                });
            }
            return;
        }
        polyline.shape.__points = diff.current;
        polyline.shape.points = current;
        var target = {
            shape: {
                points: next
            }
        };
        // Also animate the original points.
        // If points reference is changed when turning into step line.
        if (diff.current !== current) {
            target.shape.__points = diff.next;
        }
        // Stop previous animation.
        polyline.stopAnimation();
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](polyline, target, seriesModel);
        if (polygon) {
            polygon.setShape({
                // Reuse the points with polyline.
                points: current,
                stackedOnPoints: stackedOnCurrent
            });
            polygon.stopAnimation();
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](polygon, {
                shape: {
                    stackedOnPoints: stackedOnNext
                }
            }, seriesModel);
            // If use attr directly in updateProps.
            if (polyline.shape.points !== polygon.shape.points) {
                polygon.shape.points = polyline.shape.points;
            }
        }
        var updatedDataInfo = [];
        var diffStatus = diff.status;
        for(var i = 0; i < diffStatus.length; i++){
            var cmd = diffStatus[i].cmd;
            if (cmd === '=') {
                var el = data.getItemGraphicEl(diffStatus[i].idx1);
                if (el) {
                    updatedDataInfo.push({
                        el: el,
                        ptIdx: i // Index of points
                    });
                }
            }
        }
        if (polyline.animators && polyline.animators.length) {
            polyline.animators[0].during(function() {
                polygon && polygon.dirtyShape();
                var points = polyline.shape.__points;
                for(var i = 0; i < updatedDataInfo.length; i++){
                    var el = updatedDataInfo[i].el;
                    var offset = updatedDataInfo[i].ptIdx * 2;
                    el.x = points[offset];
                    el.y = points[offset + 1];
                    el.markRedraw();
                }
            });
        }
    };
    LineView.prototype.remove = function(ecModel) {
        var group = this.group;
        var oldData = this._data;
        this._lineGroup.removeAll();
        this._symbolDraw.remove(true);
        // Remove temporary created elements when highlighting
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    };
    LineView.type = 'line';
    return LineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineView;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/LineView.js [app-client] (ecmascript)");
// In case developer forget to include grid component
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataSample.js [app-client] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('line', true));
    registers.registerVisual({
        seriesType: 'line',
        reset: function(seriesModel) {
            var data = seriesModel.getData();
            // Visual coding for legend
            var lineStyle = seriesModel.getModel('lineStyle').getLineStyle();
            if (lineStyle && !lineStyle.stroke) {
                // Fill in visual should be palette color if
                // has color callback
                lineStyle.stroke = data.getVisual('style').fill;
            }
            data.setVisual('legendLineStyle', lineStyle);
        }
    });
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('line'));
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript) <export install as LineChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/pieLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pieLayout,
    "getSeriesLayoutData",
    ()=>getSeriesLayoutData
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
;
;
;
;
var PI2 = Math.PI * 2;
var RADIAN = Math.PI / 180;
function pieLayout(seriesType, ecModel, api) {
    ecModel.eachSeriesByType(seriesType, function(seriesModel) {
        var data = seriesModel.getData();
        var valueDim = data.mapDimension('value');
        var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCircleLayout"])(seriesModel, api), cx = _a.cx, cy = _a.cy, r = _a.r, r0 = _a.r0, viewRect = _a.viewRect;
        var startAngle = -seriesModel.get('startAngle') * RADIAN;
        var endAngle = seriesModel.get('endAngle');
        var padAngle = seriesModel.get('padAngle') * RADIAN;
        endAngle = endAngle === 'auto' ? startAngle - PI2 : -endAngle * RADIAN;
        var minAngle = seriesModel.get('minAngle') * RADIAN;
        var minAndPadAngle = minAngle + padAngle;
        var validDataCount = 0;
        data.each(valueDim, function(value) {
            !isNaN(value) && validDataCount++;
        });
        var sum = data.getSum(valueDim);
        // Sum may be 0
        var unitRadian = Math.PI / (sum || validDataCount) * 2;
        var clockwise = seriesModel.get('clockwise');
        var roseType = seriesModel.get('roseType');
        var stillShowZeroSum = seriesModel.get('stillShowZeroSum');
        // [0...max]
        var extent = data.getDataExtent(valueDim);
        extent[0] = 0;
        var dir = clockwise ? 1 : -1;
        var angles = [
            startAngle,
            endAngle
        ];
        var halfPadAngle = dir * padAngle / 2;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeArcAngles"])(angles, !clockwise);
        startAngle = angles[0], endAngle = angles[1];
        var layoutData = getSeriesLayoutData(seriesModel);
        layoutData.startAngle = startAngle;
        layoutData.endAngle = endAngle;
        layoutData.clockwise = clockwise;
        layoutData.cx = cx;
        layoutData.cy = cy;
        layoutData.r = r;
        layoutData.r0 = r0;
        var angleRange = Math.abs(endAngle - startAngle);
        // In the case some sector angle is smaller than minAngle
        var restAngle = angleRange;
        var valueSumLargerThanMinAngle = 0;
        var currentAngle = startAngle;
        // Requird by `pieLabelLayout`.
        data.setLayout({
            viewRect: viewRect,
            r: r
        });
        data.each(valueDim, function(value, idx) {
            var angle;
            if (isNaN(value)) {
                data.setItemLayout(idx, {
                    angle: NaN,
                    startAngle: NaN,
                    endAngle: NaN,
                    clockwise: clockwise,
                    cx: cx,
                    cy: cy,
                    r0: r0,
                    r: roseType ? NaN : r
                });
                return;
            }
            // FIXME 兼容 2.0 但是 roseType 是 area 的时候才是这样？
            if (roseType !== 'area') {
                angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
            } else {
                angle = angleRange / validDataCount;
            }
            if (angle < minAndPadAngle) {
                angle = minAndPadAngle;
                restAngle -= minAndPadAngle;
            } else {
                valueSumLargerThanMinAngle += value;
            }
            var endAngle = currentAngle + dir * angle;
            // calculate display angle
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (padAngle > angle) {
                actualStartAngle = currentAngle + dir * angle / 2;
                actualEndAngle = actualStartAngle;
            } else {
                actualStartAngle = currentAngle + halfPadAngle;
                actualEndAngle = endAngle - halfPadAngle;
            }
            data.setItemLayout(idx, {
                angle: angle,
                startAngle: actualStartAngle,
                endAngle: actualEndAngle,
                clockwise: clockwise,
                cx: cx,
                cy: cy,
                r0: r0,
                r: roseType ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearMap"])(value, extent, [
                    r0,
                    r
                ]) : r
            });
            currentAngle = endAngle;
        });
        // Some sector is constrained by minAngle and padAngle
        // Rest sectors needs recalculate angle
        if (restAngle < PI2 && validDataCount) {
            // Average the angle if rest angle is not enough after all angles is
            // Constrained by minAngle and padAngle
            if (restAngle <= 1e-3) {
                var angle_1 = angleRange / validDataCount;
                data.each(valueDim, function(value, idx) {
                    if (!isNaN(value)) {
                        var layout = data.getItemLayout(idx);
                        layout.angle = angle_1;
                        var actualStartAngle = 0;
                        var actualEndAngle = 0;
                        if (angle_1 < padAngle) {
                            actualStartAngle = startAngle + dir * (idx + 1 / 2) * angle_1;
                            actualEndAngle = actualStartAngle;
                        } else {
                            actualStartAngle = startAngle + dir * idx * angle_1 + halfPadAngle;
                            actualEndAngle = startAngle + dir * (idx + 1) * angle_1 - halfPadAngle;
                        }
                        layout.startAngle = actualStartAngle;
                        layout.endAngle = actualEndAngle;
                    }
                });
            } else {
                unitRadian = restAngle / valueSumLargerThanMinAngle;
                currentAngle = startAngle;
                data.each(valueDim, function(value, idx) {
                    if (!isNaN(value)) {
                        var layout = data.getItemLayout(idx);
                        var angle = layout.angle === minAndPadAngle ? minAndPadAngle : value * unitRadian;
                        var actualStartAngle = 0;
                        var actualEndAngle = 0;
                        if (angle < padAngle) {
                            actualStartAngle = currentAngle + dir * angle / 2;
                            actualEndAngle = actualStartAngle;
                        } else {
                            actualStartAngle = currentAngle + halfPadAngle;
                            actualEndAngle = currentAngle + dir * angle - halfPadAngle;
                        }
                        layout.startAngle = actualStartAngle;
                        layout.endAngle = actualEndAngle;
                        currentAngle += dir * angle;
                    }
                });
            }
        }
    });
}
var getSeriesLayoutData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/labelLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pieLabelLayout
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
*/ // FIXME emphasis label position is not same with normal label position
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-client] (ecmascript)");
;
;
;
;
;
;
var RADIAN = Math.PI / 180;
function adjustSingleSide(list, cx, cy, r, dir, viewWidth, viewHeight, viewLeft, viewTop, farthestX) {
    if (list.length < 2) {
        return;
    }
    ;
    function recalculateXOnSemiToAlignOnEllipseCurve(semi) {
        var rB = semi.rB;
        var rB2 = rB * rB;
        for(var i = 0; i < semi.list.length; i++){
            var item = semi.list[i];
            var dy = Math.abs(item.label.y - cy);
            // horizontal r is always same with original r because x is not changed.
            var rA = r + item.len;
            var rA2 = rA * rA;
            // Use ellipse implicit function to calculate x
            var dx = Math.sqrt(Math.abs((1 - dy * dy / rB2) * rA2));
            var newX = cx + (dx + item.len2) * dir;
            var deltaX = newX - item.label.x;
            var newTargetWidth = item.targetTextWidth - deltaX * dir;
            // text x is changed, so need to recalculate width.
            constrainTextWidth(item, newTargetWidth, true);
            item.label.x = newX;
        }
    }
    // Adjust X based on the shifted y. Make tight labels aligned on an ellipse curve.
    function recalculateX(items) {
        // Extremes of
        var topSemi = {
            list: [],
            maxY: 0
        };
        var bottomSemi = {
            list: [],
            maxY: 0
        };
        for(var i = 0; i < items.length; i++){
            if (items[i].labelAlignTo !== 'none') {
                continue;
            }
            var item = items[i];
            var semi = item.label.y > cy ? bottomSemi : topSemi;
            var dy = Math.abs(item.label.y - cy);
            if (dy >= semi.maxY) {
                var dx = item.label.x - cx - item.len2 * dir;
                // horizontal r is always same with original r because x is not changed.
                var rA = r + item.len;
                // Canculate rB based on the topest / bottemest label.
                var rB = Math.abs(dx) < rA ? Math.sqrt(dy * dy / (1 - dx * dx / rA / rA)) : rA;
                semi.rB = rB;
                semi.maxY = dy;
            }
            semi.list.push(item);
        }
        recalculateXOnSemiToAlignOnEllipseCurve(topSemi);
        recalculateXOnSemiToAlignOnEllipseCurve(bottomSemi);
    }
    var len = list.length;
    for(var i = 0; i < len; i++){
        if (list[i].position === 'outer' && list[i].labelAlignTo === 'labelLine') {
            var dx = list[i].label.x - farthestX;
            list[i].linePoints[1][0] += dx;
            list[i].label.x = farthestX;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shiftLayoutOnXY"])(list, 1, viewTop, viewTop + viewHeight)) {
        recalculateX(list);
    }
}
function avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop) {
    var leftList = [];
    var rightList = [];
    var leftmostX = Number.MAX_VALUE;
    var rightmostX = -Number.MAX_VALUE;
    for(var i = 0; i < labelLayoutList.length; i++){
        var label = labelLayoutList[i].label;
        if (isPositionCenter(labelLayoutList[i])) {
            continue;
        }
        if (label.x < cx) {
            leftmostX = Math.min(leftmostX, label.x);
            leftList.push(labelLayoutList[i]);
        } else {
            rightmostX = Math.max(rightmostX, label.x);
            rightList.push(labelLayoutList[i]);
        }
    }
    for(var i = 0; i < labelLayoutList.length; i++){
        var layout = labelLayoutList[i];
        if (!isPositionCenter(layout) && layout.linePoints) {
            if (layout.labelStyleWidth != null) {
                continue;
            }
            var label = layout.label;
            var linePoints = layout.linePoints;
            var targetTextWidth = void 0;
            if (layout.labelAlignTo === 'edge') {
                if (label.x < cx) {
                    targetTextWidth = linePoints[2][0] - layout.labelDistance - viewLeft - layout.edgeDistance;
                } else {
                    targetTextWidth = viewLeft + viewWidth - layout.edgeDistance - linePoints[2][0] - layout.labelDistance;
                }
            } else if (layout.labelAlignTo === 'labelLine') {
                if (label.x < cx) {
                    targetTextWidth = leftmostX - viewLeft - layout.bleedMargin;
                } else {
                    targetTextWidth = viewLeft + viewWidth - rightmostX - layout.bleedMargin;
                }
            } else {
                if (label.x < cx) {
                    targetTextWidth = label.x - viewLeft - layout.bleedMargin;
                } else {
                    targetTextWidth = viewLeft + viewWidth - label.x - layout.bleedMargin;
                }
            }
            layout.targetTextWidth = targetTextWidth;
            constrainTextWidth(layout, targetTextWidth, false);
        }
    }
    adjustSingleSide(rightList, cx, cy, r, 1, viewWidth, viewHeight, viewLeft, viewTop, rightmostX);
    adjustSingleSide(leftList, cx, cy, r, -1, viewWidth, viewHeight, viewLeft, viewTop, leftmostX);
    for(var i = 0; i < labelLayoutList.length; i++){
        var layout = labelLayoutList[i];
        if (!isPositionCenter(layout) && layout.linePoints) {
            var label = layout.label;
            var linePoints = layout.linePoints;
            var isAlignToEdge = layout.labelAlignTo === 'edge';
            var padding = label.style.padding;
            var paddingH = padding ? padding[1] + padding[3] : 0;
            // textRect.width already contains paddingH if bgColor is set
            var extraPaddingH = label.style.backgroundColor ? 0 : paddingH;
            var realTextWidth = layout.rect.width + extraPaddingH;
            var dist = linePoints[1][0] - linePoints[2][0];
            if (isAlignToEdge) {
                if (label.x < cx) {
                    linePoints[2][0] = viewLeft + layout.edgeDistance + realTextWidth + layout.labelDistance;
                } else {
                    linePoints[2][0] = viewLeft + viewWidth - layout.edgeDistance - realTextWidth - layout.labelDistance;
                }
            } else {
                if (label.x < cx) {
                    linePoints[2][0] = label.x + layout.labelDistance;
                } else {
                    linePoints[2][0] = label.x - layout.labelDistance;
                }
                linePoints[1][0] = linePoints[2][0] + dist;
            }
            linePoints[1][1] = linePoints[2][1] = label.y;
        }
    }
}
/**
 * Set max width of each label, and then wrap each label to the max width.
 *
 * @param layout label layout
 * @param availableWidth max width for the label to display
 * @param forceRecalculate recaculate the text layout even if the current width
 * is smaller than `availableWidth`. This is useful when the text was previously
 * wrapped by calling `constrainTextWidth` but now `availableWidth` changed, in
 * which case, previous wrapping should be redo.
 */ function constrainTextWidth(layout, availableWidth, forceRecalculate) {
    if (layout.labelStyleWidth != null) {
        // User-defined style.width has the highest priority.
        return;
    }
    var label = layout.label;
    var style = label.style;
    var textRect = layout.rect;
    var bgColor = style.backgroundColor;
    var padding = style.padding;
    var paddingH = padding ? padding[1] + padding[3] : 0;
    var overflow = style.overflow;
    // textRect.width already contains paddingH if bgColor is set
    var oldOuterWidth = textRect.width + (bgColor ? 0 : paddingH);
    if (availableWidth < oldOuterWidth || forceRecalculate) {
        if (overflow && overflow.match('break')) {
            // Temporarily set background to be null to calculate
            // the bounding box without background.
            label.setStyle('backgroundColor', null);
            // Set constraining width
            label.setStyle('width', availableWidth - paddingH);
            // This is the real bounding box of the text without padding.
            var innerRect = label.getBoundingRect();
            label.setStyle('width', Math.ceil(innerRect.width));
            label.setStyle('backgroundColor', bgColor);
        } else {
            var availableInnerWidth = availableWidth - paddingH;
            var newWidth = availableWidth < oldOuterWidth ? availableInnerWidth : // Current available width is enough, but the text may have
            // already been wrapped with a smaller available width.
            forceRecalculate ? availableInnerWidth > layout.unconstrainedWidth ? null : availableInnerWidth : null;
            label.setStyle('width', newWidth);
        }
        computeLabelGlobalRect(textRect, label);
    }
}
function computeLabelGlobalRect(out, label) {
    _tmpLabelGeometry.rect = out;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeLabelGeometry"])(_tmpLabelGeometry, label, _computeLabelGeometryOpt);
}
var _computeLabelGeometryOpt = {
    minMarginForce: [
        null,
        0,
        null,
        0
    ],
    marginDefault: [
        1,
        0,
        1,
        0
    ]
};
var _tmpLabelGeometry = {};
function isPositionCenter(sectorShape) {
    // Not change x for center label
    return sectorShape.position === 'center';
}
function pieLabelLayout(seriesModel) {
    var data = seriesModel.getData();
    var labelLayoutList = [];
    var cx;
    var cy;
    var hasLabelRotate = false;
    var minShowLabelRadian = (seriesModel.get('minShowLabelAngle') || 0) * RADIAN;
    var viewRect = data.getLayout('viewRect');
    var r = data.getLayout('r');
    var viewWidth = viewRect.width;
    var viewLeft = viewRect.x;
    var viewTop = viewRect.y;
    var viewHeight = viewRect.height;
    function setNotShow(el) {
        el.ignore = true;
    }
    function isLabelShown(label) {
        if (!label.ignore) {
            return true;
        }
        for(var key in label.states){
            if (label.states[key].ignore === false) {
                return true;
            }
        }
        return false;
    }
    data.each(function(idx) {
        var sector = data.getItemGraphicEl(idx);
        var sectorShape = sector.shape;
        var label = sector.getTextContent();
        var labelLine = sector.getTextGuideLine();
        var itemModel = data.getItemModel(idx);
        var labelModel = itemModel.getModel('label');
        // Use position in normal or emphasis
        var labelPosition = labelModel.get('position') || itemModel.get([
            'emphasis',
            'label',
            'position'
        ]);
        var labelDistance = labelModel.get('distanceToLabelLine');
        var labelAlignTo = labelModel.get('alignTo');
        var edgeDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(labelModel.get('edgeDistance'), viewWidth);
        var bleedMargin = labelModel.get('bleedMargin');
        if (bleedMargin == null) {
            // An arbitrary strategy for small viewRect - especial pie is layout in calendar or matrix coord sys.
            bleedMargin = Math.min(viewWidth, viewHeight) > 200 ? 10 : 2;
        }
        var labelLineModel = itemModel.getModel('labelLine');
        var labelLineLen = labelLineModel.get('length');
        labelLineLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(labelLineLen, viewWidth);
        var labelLineLen2 = labelLineModel.get('length2');
        labelLineLen2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(labelLineLen2, viewWidth);
        if (Math.abs(sectorShape.endAngle - sectorShape.startAngle) < minShowLabelRadian) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(label.states, setNotShow);
            label.ignore = true;
            if (labelLine) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(labelLine.states, setNotShow);
                labelLine.ignore = true;
            }
            return;
        }
        if (!isLabelShown(label)) {
            return;
        }
        var midAngle = (sectorShape.startAngle + sectorShape.endAngle) / 2;
        var nx = Math.cos(midAngle);
        var ny = Math.sin(midAngle);
        var textX;
        var textY;
        var linePoints;
        var textAlign;
        cx = sectorShape.cx;
        cy = sectorShape.cy;
        var isLabelInside = labelPosition === 'inside' || labelPosition === 'inner';
        if (labelPosition === 'center') {
            textX = sectorShape.cx;
            textY = sectorShape.cy;
            textAlign = 'center';
        } else {
            var x1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * nx : sectorShape.r * nx) + cx;
            var y1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * ny : sectorShape.r * ny) + cy;
            textX = x1 + nx * 3;
            textY = y1 + ny * 3;
            if (!isLabelInside) {
                // For roseType
                var x2 = x1 + nx * (labelLineLen + r - sectorShape.r);
                var y2 = y1 + ny * (labelLineLen + r - sectorShape.r);
                var x3 = x2 + (nx < 0 ? -1 : 1) * labelLineLen2;
                var y3 = y2;
                if (labelAlignTo === 'edge') {
                    // Adjust textX because text align of edge is opposite
                    textX = nx < 0 ? viewLeft + edgeDistance : viewLeft + viewWidth - edgeDistance;
                } else {
                    textX = x3 + (nx < 0 ? -labelDistance : labelDistance);
                }
                textY = y3;
                linePoints = [
                    [
                        x1,
                        y1
                    ],
                    [
                        x2,
                        y2
                    ],
                    [
                        x3,
                        y3
                    ]
                ];
            }
            textAlign = isLabelInside ? 'center' : labelAlignTo === 'edge' ? nx > 0 ? 'right' : 'left' : nx > 0 ? 'left' : 'right';
        }
        var PI = Math.PI;
        var labelRotate = 0;
        var rotate = labelModel.get('rotate');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(rotate)) {
            labelRotate = rotate * (PI / 180);
        } else if (labelPosition === 'center') {
            labelRotate = 0;
        } else if (rotate === 'radial' || rotate === true) {
            var radialAngle = nx < 0 ? -midAngle + PI : -midAngle;
            labelRotate = radialAngle;
        } else if (rotate === 'tangential' && labelPosition !== 'outside' && labelPosition !== 'outer') {
            var rad = Math.atan2(nx, ny);
            if (rad < 0) {
                rad = PI * 2 + rad;
            }
            var isDown = ny > 0;
            if (isDown) {
                rad = PI + rad;
            }
            labelRotate = rad - PI;
        }
        hasLabelRotate = !!labelRotate;
        label.x = textX;
        label.y = textY;
        label.rotation = labelRotate;
        label.setStyle({
            verticalAlign: 'middle'
        });
        // Not sectorShape the inside label
        if (!isLabelInside) {
            var textRect = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0, 0, 0, 0);
            computeLabelGlobalRect(textRect, label);
            labelLayoutList.push({
                label: label,
                labelLine: labelLine,
                position: labelPosition,
                len: labelLineLen,
                len2: labelLineLen2,
                minTurnAngle: labelLineModel.get('minTurnAngle'),
                maxSurfaceAngle: labelLineModel.get('maxSurfaceAngle'),
                surfaceNormal: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](nx, ny),
                linePoints: linePoints,
                textAlign: textAlign,
                labelDistance: labelDistance,
                labelAlignTo: labelAlignTo,
                edgeDistance: edgeDistance,
                bleedMargin: bleedMargin,
                rect: textRect,
                unconstrainedWidth: textRect.width,
                labelStyleWidth: label.style.width
            });
        } else {
            label.setStyle({
                align: textAlign
            });
            var selectState = label.states.select;
            if (selectState) {
                selectState.x += label.x;
                selectState.y += label.y;
            }
        }
        sector.setTextConfig({
            inside: isLabelInside
        });
    });
    if (!hasLabelRotate && seriesModel.get('avoidLabelOverlap')) {
        avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop);
    }
    for(var i = 0; i < labelLayoutList.length; i++){
        var layout = labelLayoutList[i];
        var label = layout.label;
        var labelLine = layout.labelLine;
        var notShowLabel = isNaN(label.x) || isNaN(label.y);
        if (label) {
            label.setStyle({
                align: layout.textAlign
            });
            if (notShowLabel) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(label.states, setNotShow);
                label.ignore = true;
            }
            var selectState = label.states.select;
            if (selectState) {
                selectState.x += label.x;
                selectState.y += label.y;
            }
        }
        if (labelLine) {
            var linePoints = layout.linePoints;
            if (notShowLabel || !linePoints) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(labelLine.states, setNotShow);
                labelLine.ignore = true;
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitTurnAngle"])(linePoints, layout.minTurnAngle);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitSurfaceAngle"])(linePoints, layout.surfaceNormal, layout.maxSurfaceAngle);
                labelLine.setShape({
                    points: linePoints
                });
                // Set the anchor to the midpoint of sector
                label.__hostTarget.textGuideLineConfig = {
                    anchor: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](linePoints[0][0], linePoints[0][1])
                };
            }
        }
    }
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/PieView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js [app-client] (ecmascript) <export default as Polyline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript) <export default as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js [app-client] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$labelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/labelLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$pieLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/pieLayout.js [app-client] (ecmascript)");
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
/**
 * Piece of pie including Sector, Label, LabelLine
 */ var PiePiece = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PiePiece, _super);
    function PiePiece(data, idx, startAngle) {
        var _this = _super.call(this) || this;
        _this.z2 = 2;
        var text = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Text$3e$__["Text"]();
        _this.setTextContent(text);
        _this.updateData(data, idx, startAngle, true);
        return _this;
    }
    PiePiece.prototype.updateData = function(data, idx, startAngle, firstCreate) {
        var sector = this;
        var seriesModel = data.hostModel;
        var itemModel = data.getItemModel(idx);
        var emphasisModel = itemModel.getModel('emphasis');
        var layout = data.getItemLayout(idx);
        // cornerRadius & innerCornerRadius doesn't exist in the item layout. Use `0` if null value is specified.
        // see `setItemLayout` in `pieLayout.ts`.
        var sectorShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel('itemStyle'), layout, true), layout);
        // Ignore NaN data.
        if (isNaN(sectorShape.startAngle)) {
            // Use NaN shape to avoid drawing shape.
            sector.setShape(sectorShape);
            return;
        }
        if (firstCreate) {
            sector.setShape(sectorShape);
            var animationType = seriesModel.getShallow('animationType');
            if (seriesModel.ecModel.ssr) {
                // Use scale animation in SSR mode(opacity?)
                // Because CSS SVG animation doesn't support very customized shape animation.
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](sector, {
                    scaleX: 0,
                    scaleY: 0
                }, seriesModel, {
                    dataIndex: idx,
                    isFrom: true
                });
                sector.originX = sectorShape.cx;
                sector.originY = sectorShape.cy;
            } else if (animationType === 'scale') {
                sector.shape.r = layout.r0;
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](sector, {
                    shape: {
                        r: layout.r
                    }
                }, seriesModel, idx);
            } else {
                if (startAngle != null) {
                    sector.setShape({
                        startAngle: startAngle,
                        endAngle: startAngle
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProps"](sector, {
                        shape: {
                            startAngle: layout.startAngle,
                            endAngle: layout.endAngle
                        }
                    }, seriesModel, idx);
                } else {
                    sector.shape.endAngle = layout.startAngle;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](sector, {
                        shape: {
                            endAngle: layout.endAngle
                        }
                    }, seriesModel, idx);
                }
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(sector);
            // Transition animation from the old shape
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProps"](sector, {
                shape: sectorShape
            }, seriesModel, idx);
        }
        sector.useStyle(data.getItemVisual(idx, 'style'));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(sector, itemModel);
        var midAngle = (layout.startAngle + layout.endAngle) / 2;
        var offset = seriesModel.get('selectedOffset');
        var dx = Math.cos(midAngle) * offset;
        var dy = Math.sin(midAngle) * offset;
        var cursorStyle = itemModel.getShallow('cursor');
        cursorStyle && sector.attr('cursor', cursorStyle);
        this._updateLabel(seriesModel, data, idx);
        sector.ensureState('emphasis').shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
            r: layout.r + (emphasisModel.get('scale') ? emphasisModel.get('scaleSize') || 0 : 0)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(emphasisModel.getModel('itemStyle'), layout));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(sector.ensureState('select'), {
            x: dx,
            y: dy,
            shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel([
                'select',
                'itemStyle'
            ]), layout)
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(sector.ensureState('blur'), {
            shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel([
                'blur',
                'itemStyle'
            ]), layout)
        });
        var labelLine = sector.getTextGuideLine();
        var labelText = sector.getTextContent();
        labelLine && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(labelLine.ensureState('select'), {
            x: dx,
            y: dy
        });
        // TODO: needs dx, dy in zrender?
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(labelText.ensureState('select'), {
            x: dx,
            y: dy
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(this, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    };
    PiePiece.prototype._updateLabel = function(seriesModel, data, idx) {
        var sector = this;
        var itemModel = data.getItemModel(idx);
        var labelLineModel = itemModel.getModel('labelLine');
        var style = data.getItemVisual(idx, 'style');
        var visualColor = style && style.fill;
        var visualOpacity = style && style.opacity;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(sector, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel), {
            labelFetcher: data.hostModel,
            labelDataIndex: idx,
            inheritColor: visualColor,
            defaultOpacity: visualOpacity,
            defaultText: seriesModel.getFormattedLabel(idx, 'normal') || data.getName(idx)
        });
        var labelText = sector.getTextContent();
        // Set textConfig on sector.
        sector.setTextConfig({
            // reset position, rotation
            position: null,
            rotation: null
        });
        // Make sure update style on labelText after setLabelStyle.
        // Because setLabelStyle will replace a new style on it.
        labelText.attr({
            z2: 10
        });
        var labelPosition = itemModel.get([
            'label',
            'position'
        ]);
        if (labelPosition !== 'outside' && labelPosition !== 'outer') {
            sector.removeTextGuideLine();
        } else {
            var polyline = this.getTextGuideLine();
            if (!polyline) {
                polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polyline$3e$__["Polyline"]();
                this.setTextGuideLine(polyline);
            }
            // Default use item visual color
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelLineStyle"])(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelGuideHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelLineStatesModels"])(itemModel), {
                stroke: visualColor,
                opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve3"])(labelLineModel.get([
                    'lineStyle',
                    'opacity'
                ]), visualOpacity, 1)
            });
        }
    };
    return PiePiece;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"]);
// Pie view
var PieView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PieView, _super);
    function PieView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ignoreLabelLineUpdate = true;
        return _this;
    }
    PieView.prototype.render = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var oldData = this._data;
        var group = this.group;
        var startAngle;
        // First render
        if (!oldData && data.count() > 0) {
            var shape = data.getItemLayout(0);
            for(var s = 1; isNaN(shape && shape.startAngle) && s < data.count(); ++s){
                shape = data.getItemLayout(s);
            }
            if (shape) {
                startAngle = shape.startAngle;
            }
        }
        // remove empty-circle if it exists
        if (this._emptyCircleSector) {
            group.remove(this._emptyCircleSector);
        }
        // when all data are filtered, show lightgray empty circle
        if (data.count() === 0 && seriesModel.get('showEmptyCircle')) {
            var layoutData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$pieLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesLayoutData"])(seriesModel);
            var sector = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"]({
                shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(layoutData)
            });
            sector.useStyle(seriesModel.getModel('emptyCircleStyle').getItemStyle());
            this._emptyCircleSector = sector;
            group.add(sector);
        }
        data.diff(oldData).add(function(idx) {
            var piePiece = new PiePiece(data, idx, startAngle);
            data.setItemGraphicEl(idx, piePiece);
            group.add(piePiece);
        }).update(function(newIdx, oldIdx) {
            var piePiece = oldData.getItemGraphicEl(oldIdx);
            piePiece.updateData(data, newIdx, startAngle);
            piePiece.off('click');
            group.add(piePiece);
            data.setItemGraphicEl(newIdx, piePiece);
        }).remove(function(idx) {
            var piePiece = oldData.getItemGraphicEl(idx);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"](piePiece, seriesModel, idx);
        }).execute();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$labelLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(seriesModel);
        // Always use initial animation.
        if (seriesModel.get('animationTypeUpdate') !== 'expansion') {
            this._data = data;
        }
    };
    PieView.prototype.dispose = function() {};
    PieView.prototype.containPoint = function(point, seriesModel) {
        var data = seriesModel.getData();
        var itemLayout = data.getItemLayout(0);
        if (itemLayout) {
            var dx = point[0] - itemLayout.cx;
            var dy = point[1] - itemLayout.cy;
            var radius = Math.sqrt(dx * dx + dy * dy);
            return radius <= itemLayout.r && radius >= itemLayout.r0;
        }
    };
    PieView.type = 'pie';
    return PieView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = PieView;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createSeriesDataSimply
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/createDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
function createSeriesDataSimply(seriesModel, opt, nameList) {
    opt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(opt) && {
        coordDimensions: opt
    } || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
        encodeDefine: seriesModel.getEncode()
    }, opt);
    var source = seriesModel.getSource();
    var dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, opt).dimensions;
    var list = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dimensions, seriesModel);
    list.initData(source, nameList);
    return list;
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/PieSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesDataSimply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/sourceHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/LegendVisualProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var innerData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"]();
var PieSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PieSeriesModel, _super);
    function PieSeriesModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * @overwrite
   */ PieSeriesModel.prototype.init = function(option) {
        _super.prototype.init.apply(this, arguments);
        // Enable legend selection for each data item
        // Use a function instead of direct access because data reference may changed
        this.legendVisualProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this.getData, this), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this.getRawData, this));
        this._defaultLabelLine(option);
    };
    /**
   * @overwrite
   */ PieSeriesModel.prototype.mergeOption = function() {
        _super.prototype.mergeOption.apply(this, arguments);
    };
    /**
   * @overwrite
   */ PieSeriesModel.prototype.getInitialData = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesDataSimply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, {
            coordDimensions: [
                'value'
            ],
            encodeDefaulter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeSeriesEncodeForNameBased"], this)
        });
    };
    /**
   * @overwrite
   */ PieSeriesModel.prototype.getDataParams = function(dataIndex) {
        var data = this.getData();
        // update seats when data is changed
        var dataInner = innerData(data);
        var seats = dataInner.seats;
        if (!seats) {
            var valueList_1 = [];
            data.each(data.mapDimension('value'), function(value) {
                valueList_1.push(value);
            });
            seats = dataInner.seats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentSeats"])(valueList_1, data.hostModel.get('percentPrecision'));
        }
        var params = _super.prototype.getDataParams.call(this, dataIndex);
        // seats may be empty when sum is 0
        params.percent = seats[dataIndex] || 0;
        params.$vars.push('percent');
        return params;
    };
    PieSeriesModel.prototype._defaultLabelLine = function(option) {
        // Extend labelLine emphasis
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEmphasis"](option, 'labelLine', [
            'show'
        ]);
        var labelLineNormalOpt = option.labelLine;
        var labelLineEmphasisOpt = option.emphasis.labelLine;
        // Not show label line if `label.normal.show = false`
        labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
        labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
    };
    PieSeriesModel.type = 'series.pie';
    PieSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        legendHoverLink: true,
        colorBy: 'data',
        // 默认全局居中
        center: [
            '50%',
            '50%'
        ],
        radius: [
            0,
            '50%'
        ],
        // 默认顺时针
        clockwise: true,
        startAngle: 90,
        endAngle: 'auto',
        padAngle: 0,
        // 最小角度改为0
        minAngle: 0,
        // If the angle of a sector less than `minShowLabelAngle`,
        // the label will not be displayed.
        minShowLabelAngle: 0,
        // 选中时扇区偏移量
        selectedOffset: 10,
        // 选择模式，默认关闭，可选single，multiple
        // selectedMode: false,
        // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
        // roseType: null,
        percentPrecision: 2,
        // If still show when all data zero.
        stillShowZeroSum: true,
        // cursor: null,
        coordinateSystemUsage: 'box',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
            // color: 'inherit',
            // If rotate around circle
            rotate: 0,
            show: true,
            overflow: 'truncate',
            // 'outer', 'inside', 'center'
            position: 'outer',
            // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
            alignTo: 'none',
            // Closest distance between label and chart edge.
            // Works only position is 'outer' and alignTo is 'edge'.
            edgeDistance: '25%',
            // Works only position is 'outer' and alignTo is not 'edge'.
            // The default `bleedMargin` is auto determined according to view rect size.
            // bleedMargin: 10,
            // Distance between text and label line.
            distanceToLabelLine: 5
        },
        // Enabled when label.normal.position is 'outer'
        labelLine: {
            show: true,
            // 引导线两段中的第一段长度
            length: 15,
            // 引导线两段中的第二段长度
            length2: 30,
            smooth: false,
            minTurnAngle: 90,
            maxSurfaceAngle: 90,
            lineStyle: {
                // color: 各异,
                width: 1,
                type: 'solid'
            }
        },
        itemStyle: {
            borderWidth: 1,
            borderJoin: 'round'
        },
        showEmptyCircle: true,
        emptyCircleStyle: {
            color: 'lightgray',
            opacity: 1
        },
        labelLayout: {
            // Hide the overlapped label.
            hideOverlap: true
        },
        emphasis: {
            scale: true,
            scaleSize: 5
        },
        // If use strategy to avoid label overlapping
        avoidLabelOverlap: true,
        // Animation type. Valid values: expansion, scale
        animationType: 'expansion',
        animationDuration: 1000,
        // Animation type when update. Valid values: transition, expansion
        animationTypeUpdate: 'transition',
        animationEasingUpdate: 'cubicInOut',
        animationDurationUpdate: 500,
        animationEasing: 'cubicInOut'
    };
    return PieSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLayOutOnCoordSysUsage"])({
    fullType: PieSeriesModel.type,
    getCoord2: function(model) {
        // Not able to validate `center` type here.
        // But percentage center, such as '12%', is not allowed in this case.
        return model.getShallow('center');
    }
});
const __TURBOPACK__default__export__ = PieSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$dataSelectAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/dataSelectAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$pieLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/pieLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$PieView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/PieView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$PieSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/PieSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$negativeDataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/negativeDataFilter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$PieView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$PieSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$legacy$2f$dataSelectAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLegacyDataSelectAction"])('pie', registers.registerAction);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$pieLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'pie'));
    registers.registerProcessor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('pie'));
    registers.registerProcessor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$negativeDataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('pie'));
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript) <export install as PieChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/install.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/ScatterSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js [app-client] (ecmascript)");
;
;
;
;
var ScatterSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ScatterSeriesModel, _super);
    function ScatterSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScatterSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    ScatterSeriesModel.prototype.getInitialData = function(option, ecModel) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    ScatterSeriesModel.prototype.getProgressive = function() {
        var progressive = this.option.progressive;
        if (progressive == null) {
            // PENDING
            return this.option.large ? 5e3 : this.get('progressive');
        }
        return progressive;
    };
    ScatterSeriesModel.prototype.getProgressiveThreshold = function() {
        var progressiveThreshold = this.option.progressiveThreshold;
        if (progressiveThreshold == null) {
            // PENDING
            return this.option.large ? 1e4 : this.get('progressiveThreshold');
        }
        return progressiveThreshold;
    };
    ScatterSeriesModel.prototype.brushSelector = function(dataIndex, data, selectors) {
        return selectors.point(data.getItemLayout(dataIndex));
    };
    ScatterSeriesModel.prototype.getZLevelKey = function() {
        // Each progressive series has individual key.
        return this.getData().count() > this.getProgressiveThreshold() ? this.id : '';
    };
    ScatterSeriesModel.type = 'series.scatter';
    ScatterSeriesModel.dependencies = [
        'grid',
        'polar',
        'geo',
        'singleAxis',
        'calendar',
        'matrix'
    ];
    ScatterSeriesModel.defaultOption = {
        coordinateSystem: 'cartesian2d',
        // zlevel: 0,
        z: 2,
        legendHoverLink: true,
        symbolSize: 10,
        // symbolRotate: null,  // 图形旋转控制
        large: false,
        // Available when large is true
        largeThreshold: 2000,
        // cursor: null,
        itemStyle: {
            opacity: 0.8
        },
        emphasis: {
            scale: true
        },
        // If clip the overflow graphics
        // Works on cartesian / polar series
        clip: true,
        select: {
            itemStyle: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$tokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].color.primary
            }
        },
        universalTransition: {
            divideShape: 'clone'
        }
    };
    return ScatterSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ScatterSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LargeSymbolDraw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
/* global Float32Array */ // TODO Batch by color
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript) <export default as BoundingRect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js [app-client] (ecmascript) <export default as Path>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js [app-client] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
;
;
;
;
var BOOST_SIZE_THRESHOLD = 4;
var LargeSymbolPathShape = /** @class */ function() {
    function LargeSymbolPathShape() {}
    return LargeSymbolPathShape;
}();
var LargeSymbolPath = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LargeSymbolPath, _super);
    function LargeSymbolPath(opts) {
        var _this = _super.call(this, opts) || this;
        _this._off = 0;
        _this.hoverDataIdx = -1;
        return _this;
    }
    LargeSymbolPath.prototype.getDefaultShape = function() {
        return new LargeSymbolPathShape();
    };
    LargeSymbolPath.prototype.reset = function() {
        this.notClear = false;
        this._off = 0;
    };
    LargeSymbolPath.prototype.buildPath = function(path, shape) {
        var points = shape.points;
        var size = shape.size;
        var symbolProxy = this.symbolProxy;
        var symbolProxyShape = symbolProxy.shape;
        var ctx = path.getContext ? path.getContext() : path;
        var canBoost = ctx && size[0] < BOOST_SIZE_THRESHOLD;
        var softClipShape = this.softClipShape;
        var i;
        // Do draw in afterBrush.
        if (canBoost) {
            this._ctx = ctx;
            return;
        }
        this._ctx = null;
        for(i = this._off; i < points.length;){
            var x = points[i++];
            var y = points[i++];
            if (isNaN(x) || isNaN(y)) {
                continue;
            }
            if (softClipShape && !softClipShape.contain(x, y)) {
                continue;
            }
            symbolProxyShape.x = x - size[0] / 2;
            symbolProxyShape.y = y - size[1] / 2;
            symbolProxyShape.width = size[0];
            symbolProxyShape.height = size[1];
            symbolProxy.buildPath(path, symbolProxyShape, true);
        }
        if (this.incremental) {
            this._off = i;
            this.notClear = true;
        }
    };
    LargeSymbolPath.prototype.afterBrush = function() {
        var shape = this.shape;
        var points = shape.points;
        var size = shape.size;
        var ctx = this._ctx;
        var softClipShape = this.softClipShape;
        var i;
        if (!ctx) {
            return;
        }
        // PENDING If style or other canvas status changed?
        for(i = this._off; i < points.length;){
            var x = points[i++];
            var y = points[i++];
            if (isNaN(x) || isNaN(y)) {
                continue;
            }
            if (softClipShape && !softClipShape.contain(x, y)) {
                continue;
            }
            // fillRect is faster than building a rect path and draw.
            // And it support light globalCompositeOperation.
            ctx.fillRect(x - size[0] / 2, y - size[1] / 2, size[0], size[1]);
        }
        if (this.incremental) {
            this._off = i;
            this.notClear = true;
        }
    };
    LargeSymbolPath.prototype.findDataIndex = function(x, y) {
        // TODO ???
        // Consider transform
        var shape = this.shape;
        var points = shape.points;
        var size = shape.size;
        var w = Math.max(size[0], 4);
        var h = Math.max(size[1], 4);
        // Not consider transform
        // Treat each element as a rect
        // top down traverse
        for(var idx = points.length / 2 - 1; idx >= 0; idx--){
            var i = idx * 2;
            var x0 = points[i] - w / 2;
            var y0 = points[i + 1] - h / 2;
            if (x >= x0 && y >= y0 && x <= x0 + w && y <= y0 + h) {
                return idx;
            }
        }
        return -1;
    };
    LargeSymbolPath.prototype.contain = function(x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        x = localPos[0];
        y = localPos[1];
        if (rect.contain(x, y)) {
            // Cache found data index.
            var dataIdx = this.hoverDataIdx = this.findDataIndex(x, y);
            return dataIdx >= 0;
        }
        this.hoverDataIdx = -1;
        return false;
    };
    LargeSymbolPath.prototype.getBoundingRect = function() {
        // Ignore stroke for large symbol draw.
        var rect = this._rect;
        if (!rect) {
            var shape = this.shape;
            var points = shape.points;
            var size = shape.size;
            var w = size[0];
            var h = size[1];
            var minX = Infinity;
            var minY = Infinity;
            var maxX = -Infinity;
            var maxY = -Infinity;
            for(var i = 0; i < points.length;){
                var x = points[i++];
                var y = points[i++];
                minX = Math.min(x, minX);
                maxX = Math.max(x, maxX);
                minY = Math.min(y, minY);
                maxY = Math.max(y, maxY);
            }
            rect = this._rect = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BoundingRect$3e$__["BoundingRect"](minX - w / 2, minY - h / 2, maxX - minX + w, maxY - minY + h);
        }
        return rect;
    };
    return LargeSymbolPath;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Path$3e$__["Path"]);
var LargeSymbolDraw = /** @class */ function() {
    function LargeSymbolDraw() {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
    }
    /**
   * Update symbols draw by new data
   */ LargeSymbolDraw.prototype.updateData = function(data, opt) {
        this._clear();
        var symbolEl = this._create();
        symbolEl.setShape({
            points: data.getLayout('points')
        });
        this._setCommon(symbolEl, data, opt);
    };
    LargeSymbolDraw.prototype.updateLayout = function(data) {
        var points = data.getLayout('points');
        this.group.eachChild(function(child) {
            if (child.startIndex != null) {
                var len = (child.endIndex - child.startIndex) * 2;
                var byteOffset = child.startIndex * 4 * 2;
                points = new Float32Array(points.buffer, byteOffset, len);
            }
            child.setShape('points', points);
            // Reset draw cursor.
            child.reset();
        });
    };
    LargeSymbolDraw.prototype.incrementalPrepareUpdate = function(data) {
        this._clear();
    };
    LargeSymbolDraw.prototype.incrementalUpdate = function(taskParams, data, opt) {
        var lastAdded = this._newAdded[0];
        var points = data.getLayout('points');
        var oldPoints = lastAdded && lastAdded.shape.points;
        // Merging the exists. Each element has 1e4 points.
        // Consider the performance balance between too much elements and too much points in one shape(may affect hover optimization)
        if (oldPoints && oldPoints.length < 2e4) {
            var oldLen = oldPoints.length;
            var newPoints = new Float32Array(oldLen + points.length);
            // Concat two array
            newPoints.set(oldPoints);
            newPoints.set(points, oldLen);
            // Update endIndex
            lastAdded.endIndex = taskParams.end;
            lastAdded.setShape({
                points: newPoints
            });
        } else {
            // Clear
            this._newAdded = [];
            var symbolEl = this._create();
            symbolEl.startIndex = taskParams.start;
            symbolEl.endIndex = taskParams.end;
            symbolEl.incremental = true;
            symbolEl.setShape({
                points: points
            });
            this._setCommon(symbolEl, data, opt);
        }
    };
    LargeSymbolDraw.prototype.eachRendered = function(cb) {
        this._newAdded[0] && cb(this._newAdded[0]);
    };
    LargeSymbolDraw.prototype._create = function() {
        var symbolEl = new LargeSymbolPath({
            cursor: 'default'
        });
        symbolEl.ignoreCoarsePointer = true;
        this.group.add(symbolEl);
        this._newAdded.push(symbolEl);
        return symbolEl;
    };
    LargeSymbolDraw.prototype._setCommon = function(symbolEl, data, opt) {
        var hostModel = data.hostModel;
        opt = opt || {};
        var size = data.getVisual('symbolSize');
        symbolEl.setShape('size', size instanceof Array ? size : [
            size,
            size
        ]);
        symbolEl.softClipShape = opt.clipShape || null;
        // Create symbolProxy to build path for each data
        symbolEl.symbolProxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(data.getVisual('symbol'), 0, 0, 0, 0);
        // Use symbolProxy setColor method
        symbolEl.setColor = symbolEl.symbolProxy.setColor;
        var extrudeShadow = symbolEl.shape.size[0] < BOOST_SIZE_THRESHOLD;
        symbolEl.useStyle(// Draw shadow when doing fillRect is extremely slow.
        hostModel.getModel('itemStyle').getItemStyle(extrudeShadow ? [
            'color',
            'shadowBlur',
            'shadowColor'
        ] : [
            'color'
        ]));
        var globalStyle = data.getVisual('style');
        var visualColor = globalStyle && globalStyle.fill;
        if (visualColor) {
            symbolEl.setColor(visualColor);
        }
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(symbolEl);
        // Enable tooltip
        // PENDING May have performance issue when path is extremely large
        ecData.seriesIndex = hostModel.seriesIndex;
        symbolEl.on('mousemove', function(e) {
            ecData.dataIndex = null;
            var dataIndex = symbolEl.hoverDataIdx;
            if (dataIndex >= 0) {
                // Provide dataIndex for tooltip
                ecData.dataIndex = dataIndex + (symbolEl.startIndex || 0);
            }
        });
    };
    LargeSymbolDraw.prototype.remove = function() {
        this._clear();
    };
    LargeSymbolDraw.prototype._clear = function() {
        this._newAdded = [];
        this.group.removeAll();
    };
    return LargeSymbolDraw;
}();
const __TURBOPACK__default__export__ = LargeSymbolDraw;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/ScatterView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LargeSymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LargeSymbolDraw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
;
;
;
;
;
var ScatterView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ScatterView, _super);
    function ScatterView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScatterView.type;
        return _this;
    }
    ScatterView.prototype.render = function(seriesModel, ecModel, api) {
        var data = seriesModel.getData();
        var symbolDraw = this._updateSymbolDraw(data, seriesModel);
        symbolDraw.updateData(data, {
            // TODO
            // If this parameter should be a shape or a bounding volume
            // shape will be more general.
            // But bounding volume like bounding rect will be much faster in the contain calculation
            clipShape: this._getClipShape(seriesModel)
        });
        this._finished = true;
    };
    ScatterView.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
        var data = seriesModel.getData();
        var symbolDraw = this._updateSymbolDraw(data, seriesModel);
        symbolDraw.incrementalPrepareUpdate(data);
        this._finished = false;
    };
    ScatterView.prototype.incrementalRender = function(taskParams, seriesModel, ecModel) {
        this._symbolDraw.incrementalUpdate(taskParams, seriesModel.getData(), {
            clipShape: this._getClipShape(seriesModel)
        });
        this._finished = taskParams.end === seriesModel.getData().count();
    };
    ScatterView.prototype.updateTransform = function(seriesModel, ecModel, api) {
        var data = seriesModel.getData();
        // Must mark group dirty and make sure the incremental layer will be cleared
        // PENDING
        this.group.dirty();
        if (!this._finished || data.count() > 1e4) {
            return {
                update: true
            };
        } else {
            var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('').reset(seriesModel, ecModel, api);
            if (res.progress) {
                res.progress({
                    start: 0,
                    end: data.count(),
                    count: data.count()
                }, data);
            }
            this._symbolDraw.updateLayout(data);
        }
    };
    ScatterView.prototype.eachRendered = function(cb) {
        this._symbolDraw && this._symbolDraw.eachRendered(cb);
    };
    ScatterView.prototype._getClipShape = function(seriesModel) {
        if (!seriesModel.get('clip', true)) {
            return;
        }
        var coordSys = seriesModel.coordinateSystem;
        // PENDING make `0.1` configurable, for example, `clipTolerance`?
        return coordSys && coordSys.getArea && coordSys.getArea(.1);
    };
    ScatterView.prototype._updateSymbolDraw = function(data, seriesModel) {
        var symbolDraw = this._symbolDraw;
        var pipelineContext = seriesModel.pipelineContext;
        var isLargeDraw = pipelineContext.large;
        if (!symbolDraw || isLargeDraw !== this._isLargeDraw) {
            symbolDraw && symbolDraw.remove();
            symbolDraw = this._symbolDraw = isLargeDraw ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LargeSymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            this._isLargeDraw = isLargeDraw;
            this.group.removeAll();
        }
        this.group.add(symbolDraw.group);
        return symbolDraw;
    };
    ScatterView.prototype.remove = function(ecModel, api) {
        this._symbolDraw && this._symbolDraw.remove(true);
        this._symbolDraw = null;
    };
    ScatterView.prototype.dispose = function() {};
    ScatterView.type = 'scatter';
    return ScatterView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ScatterView;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/jitterLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>jitterLayout
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$jitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/jitter.js [app-client] (ecmascript)");
;
function jitterLayout(ecModel) {
    ecModel.eachSeriesByType('scatter', function(seriesModel) {
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && (coordSys.type === 'cartesian2d' || coordSys.type === 'single')) {
            var baseAxis_1 = coordSys.getBaseAxis ? coordSys.getBaseAxis() : null;
            var hasJitter = baseAxis_1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$jitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needFixJitter"])(seriesModel, baseAxis_1);
            if (hasJitter) {
                var data_1 = seriesModel.getData();
                data_1.each(function(idx) {
                    var dim = baseAxis_1.dim;
                    var orient = baseAxis_1.orient;
                    var isSingleY = orient === 'horizontal' && baseAxis_1.type !== 'category' || orient === 'vertical' && baseAxis_1.type === 'category';
                    var layout = data_1.getItemLayout(idx);
                    var rawSize = data_1.getItemVisual(idx, 'symbolSize');
                    var size = rawSize instanceof Array ? (rawSize[1] + rawSize[0]) / 2 : rawSize;
                    if (dim === 'y' || dim === 'single' && isSingleY) {
                        // x is fixed, and y is floating
                        var jittered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$jitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixJitter"])(baseAxis_1, layout[0], layout[1], size / 2);
                        data_1.setItemLayout(idx, [
                            layout[0],
                            jittered
                        ]);
                    } else if (dim === 'x' || dim === 'single' && !isSingleY) {
                        // y is fixed, and x is floating
                        var jittered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$jitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixJitter"])(baseAxis_1, layout[1], layout[0], size / 2);
                        data_1.setItemLayout(idx, [
                            jittered,
                            layout[1]
                        ]);
                    }
                });
            }
        }
    });
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install,
    "installScatterJitter",
    ()=>installScatterJitter
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$ScatterSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/ScatterSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$ScatterView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/ScatterView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/grid/installSimple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/layout/points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$jitterLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/jitterLayout.js [app-client] (ecmascript)");
;
;
;
;
;
;
function install(registers) {
    // In case developer forget to include grid component
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$ScatterSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$ScatterView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('scatter'));
}
function installScatterJitter(registers) {
    registers.registerLayout(registers.PRIORITY.VISUAL.POST_CHART_LAYOUT, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$jitterLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-client] (ecmascript) <export install as ScatterChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScatterChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-client] (ecmascript)");
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/radarLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>radarLayout
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function radarLayout(ecModel) {
    ecModel.eachSeriesByType('radar', function(seriesModel) {
        var data = seriesModel.getData();
        var points = [];
        var coordSys = seriesModel.coordinateSystem;
        if (!coordSys) {
            return;
        }
        var axes = coordSys.getIndicatorAxes();
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](axes, function(axis, axisIndex) {
            data.each(data.mapDimension(axes[axisIndex].dim), function(val, dataIndex) {
                points[dataIndex] = points[dataIndex] || [];
                var point = coordSys.dataToPoint(val, axisIndex);
                points[dataIndex][axisIndex] = isValidPoint(point) ? point : getValueMissingPoint(coordSys);
            });
        });
        // Close polygon
        data.each(function(idx) {
            // TODO
            // Is it appropriate to connect to the next data when some data is missing?
            // Or, should trade it like `connectNull` in line chart?
            var firstPoint = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"](points[idx], function(point) {
                return isValidPoint(point);
            }) || getValueMissingPoint(coordSys);
            // Copy the first actual point to the end of the array
            points[idx].push(firstPoint.slice());
            data.setItemLayout(idx, points[idx]);
        });
    });
}
function isValidPoint(point) {
    return !isNaN(point[0]) && !isNaN(point[1]);
}
function getValueMissingPoint(coordSys) {
    // It is error-prone to input [NaN, NaN] into polygon, polygon.
    // (probably cause problem when refreshing or animating)
    return [
        coordSys.cx,
        coordSys.cy
    ];
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/backwardCompat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>radarBackwardCompat
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
*/ // @ts-nocheck
// Backward compat for radar chart in 2
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function radarBackwardCompat(option) {
    var polarOptArr = option.polar;
    if (polarOptArr) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](polarOptArr)) {
            polarOptArr = [
                polarOptArr
            ];
        }
        var polarNotRadar_1 = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](polarOptArr, function(polarOpt, idx) {
            if (polarOpt.indicator) {
                if (polarOpt.type && !polarOpt.shape) {
                    polarOpt.shape = polarOpt.type;
                }
                option.radar = option.radar || [];
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](option.radar)) {
                    option.radar = [
                        option.radar
                    ];
                }
                option.radar.push(polarOpt);
            } else {
                polarNotRadar_1.push(polarOpt);
            }
        });
        option.polar = polarNotRadar_1;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"](option.series, function(seriesOpt) {
        if (seriesOpt && seriesOpt.type === 'radar' && seriesOpt.polarIndex) {
            seriesOpt.radarIndex = seriesOpt.polarIndex;
        }
    });
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/RadarView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var RadarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RadarView, _super);
    function RadarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadarView.type;
        return _this;
    }
    RadarView.prototype.render = function(seriesModel, ecModel, api) {
        var polar = seriesModel.coordinateSystem;
        var group = this.group;
        var data = seriesModel.getData();
        var oldData = this._data;
        function createSymbol(data, idx) {
            var symbolType = data.getItemVisual(idx, 'symbol') || 'circle';
            if (symbolType === 'none') {
                return;
            }
            var symbolSize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSymbolSize"](data.getItemVisual(idx, 'symbolSize'));
            var symbolPath = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"](symbolType, -1, -1, 2, 2);
            var symbolRotate = data.getItemVisual(idx, 'symbolRotate') || 0;
            symbolPath.attr({
                style: {
                    strokeNoScale: true
                },
                z2: 100,
                scaleX: symbolSize[0] / 2,
                scaleY: symbolSize[1] / 2,
                rotation: symbolRotate * Math.PI / 180 || 0
            });
            return symbolPath;
        }
        function updateSymbols(oldPoints, newPoints, symbolGroup, data, idx, isInit) {
            // Simply rerender all
            symbolGroup.removeAll();
            for(var i = 0; i < newPoints.length - 1; i++){
                var symbolPath = createSymbol(data, idx);
                if (symbolPath) {
                    symbolPath.__dimIdx = i;
                    if (oldPoints[i]) {
                        symbolPath.setPosition(oldPoints[i]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[isInit ? 'initProps' : 'updateProps'](symbolPath, {
                            x: newPoints[i][0],
                            y: newPoints[i][1]
                        }, seriesModel, idx);
                    } else {
                        symbolPath.setPosition(newPoints[i]);
                    }
                    symbolGroup.add(symbolPath);
                }
            }
        }
        function getInitialPoints(points) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](points, function(pt) {
                return [
                    polar.cx,
                    polar.cy
                ];
            });
        }
        data.diff(oldData).add(function(idx) {
            var points = data.getItemLayout(idx);
            if (!points) {
                return;
            }
            var polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Polygon();
            var polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Polyline();
            var target = {
                shape: {
                    points: points
                }
            };
            polygon.shape.points = getInitialPoints(points);
            polyline.shape.points = getInitialPoints(points);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.initProps(polygon, target, seriesModel, idx);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.initProps(polyline, target, seriesModel, idx);
            var itemGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
            var symbolGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
            itemGroup.add(polyline);
            itemGroup.add(polygon);
            itemGroup.add(symbolGroup);
            updateSymbols(polyline.shape.points, points, symbolGroup, data, idx, true);
            data.setItemGraphicEl(idx, itemGroup);
        }).update(function(newIdx, oldIdx) {
            var itemGroup = oldData.getItemGraphicEl(oldIdx);
            var polyline = itemGroup.childAt(0);
            var polygon = itemGroup.childAt(1);
            var symbolGroup = itemGroup.childAt(2);
            var target = {
                shape: {
                    points: data.getItemLayout(newIdx)
                }
            };
            if (!target.shape.points) {
                return;
            }
            updateSymbols(polyline.shape.points, target.shape.points, symbolGroup, data, newIdx, false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(polygon);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveOldStyle"])(polyline);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(polyline, target, seriesModel);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(polygon, target, seriesModel);
            data.setItemGraphicEl(newIdx, itemGroup);
        }).remove(function(idx) {
            group.remove(oldData.getItemGraphicEl(idx));
        }).execute();
        data.eachItemGraphicEl(function(itemGroup, idx) {
            var itemModel = data.getItemModel(idx);
            var polyline = itemGroup.childAt(0);
            var polygon = itemGroup.childAt(1);
            var symbolGroup = itemGroup.childAt(2);
            // Radar uses the visual encoded from itemStyle.
            var itemStyle = data.getItemVisual(idx, 'style');
            var color = itemStyle.fill;
            group.add(itemGroup);
            polyline.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](itemModel.getModel('lineStyle').getLineStyle(), {
                fill: 'none',
                stroke: color
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polyline, itemModel, 'lineStyle');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polygon, itemModel, 'areaStyle');
            var areaStyleModel = itemModel.getModel('areaStyle');
            var polygonIgnore = areaStyleModel.isEmpty() && areaStyleModel.parentModel.isEmpty();
            polygon.ignore = polygonIgnore;
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"]([
                'emphasis',
                'select',
                'blur'
            ], function(stateName) {
                var stateModel = itemModel.getModel([
                    stateName,
                    'areaStyle'
                ]);
                var stateIgnore = stateModel.isEmpty() && stateModel.parentModel.isEmpty();
                // Won't be ignore if normal state is not ignore.
                polygon.ensureState(stateName).ignore = stateIgnore && polygonIgnore;
                var lineStyle = itemModel.getModel([
                    stateName,
                    'lineStyle'
                ]).getLineStyle();
                polyline.ensureState(stateName).style = lineStyle;
                var areaStyle = stateModel.getAreaStyle();
                polygon.ensureState(stateName).style = areaStyle;
                var itemStateStyle = itemModel.getModel([
                    stateName,
                    'itemStyle'
                ]).getItemStyle();
                symbolGroup.eachChild(function(symbolPath) {
                    symbolPath.ensureState(stateName).style = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](itemStateStyle);
                });
            });
            polygon.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"](itemModel.getModel('areaStyle').getAreaStyle(), {
                fill: color,
                opacity: 0.7,
                decal: itemStyle.decal
            }));
            var emphasisModel = itemModel.getModel('emphasis');
            symbolGroup.eachChild(function(symbolPath) {
                if (symbolPath instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                    var pathStyle = symbolPath.style;
                    symbolPath.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"]({
                        // TODO other properties like x, y ?
                        image: pathStyle.image,
                        x: pathStyle.x,
                        y: pathStyle.y,
                        width: pathStyle.width,
                        height: pathStyle.height
                    }, itemStyle));
                } else {
                    symbolPath.useStyle(itemStyle);
                    symbolPath.setColor(color);
                    symbolPath.style.strokeNoScale = true;
                }
                var defaultText = data.getStore().get(data.getDimensionIndex(symbolPath.__dimIdx), idx);
                (defaultText == null || isNaN(defaultText)) && (defaultText = '');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(symbolPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel), {
                    labelFetcher: data.hostModel,
                    labelDataIndex: idx,
                    labelDimIndex: symbolPath.__dimIdx,
                    defaultText: defaultText,
                    inheritColor: color,
                    defaultOpacity: itemStyle.opacity
                });
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(itemGroup, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
        });
        this._data = data;
    };
    RadarView.prototype.remove = function() {
        this.group.removeAll();
        this._data = null;
    };
    RadarView.type = 'radar';
    return RadarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RadarView;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/RadarSeries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesDataSimply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/LegendVisualProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
;
;
;
;
;
;
var RadarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RadarSeriesModel, _super);
    function RadarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = RadarSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    // Overwrite
    RadarSeriesModel.prototype.init = function(option) {
        _super.prototype.init.apply(this, arguments);
        // Enable legend selection for each data item
        // Use a function instead of direct access because data reference may changed
        this.legendVisualProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$LegendVisualProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this.getData, this), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"](this.getRawData, this));
    };
    RadarSeriesModel.prototype.getInitialData = function(option, ecModel) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesDataSimply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, {
            generateCoord: 'indicator_',
            generateCoordCount: Infinity
        });
    };
    RadarSeriesModel.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
        var data = this.getData();
        var coordSys = this.coordinateSystem;
        var indicatorAxes = coordSys.getIndicatorAxes();
        var name = this.getData().getName(dataIndex);
        var nameToDisplay = name === '' ? this.name : name;
        var markerColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveVisualColorForTooltipMarker"])(this, dataIndex);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
            header: nameToDisplay,
            sortBlocks: true,
            blocks: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](indicatorAxes, function(axis) {
                var val = data.get(data.mapDimension(axis.dim), dataIndex);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                    markerType: 'subItem',
                    markerColor: markerColor,
                    name: axis.name,
                    value: val,
                    sortParam: val
                });
            })
        });
    };
    RadarSeriesModel.prototype.getTooltipPosition = function(dataIndex) {
        if (dataIndex != null) {
            var data_1 = this.getData();
            var coordSys = this.coordinateSystem;
            var values = data_1.getValues(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$zrender$40$6$2e$0$2e$0$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"](coordSys.dimensions, function(dim) {
                return data_1.mapDimension(dim);
            }), dataIndex);
            for(var i = 0, len = values.length; i < len; i++){
                if (!isNaN(values[i])) {
                    var indicatorAxes = coordSys.getIndicatorAxes();
                    return coordSys.coordToPoint(indicatorAxes[i].dataToCoord(values[i]), i);
                }
            }
        }
    };
    RadarSeriesModel.type = 'series.radar';
    RadarSeriesModel.dependencies = [
        'radar'
    ];
    RadarSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        colorBy: 'data',
        coordinateSystem: 'radar',
        legendHoverLink: true,
        radarIndex: 0,
        lineStyle: {
            width: 2,
            type: 'solid',
            join: 'round'
        },
        label: {
            position: 'top'
        },
        // areaStyle: {
        // },
        // itemStyle: {}
        symbolSize: 8
    };
    return RadarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = RadarSeriesModel;
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/install.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$radarLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/radarLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$backwardCompat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/backwardCompat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$RadarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/RadarView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$RadarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/RadarSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/install.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$RadarView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$RadarSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$radarLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerProcessor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('radar'));
    registers.registerPreprocessor(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$backwardCompat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/install.js [app-client] (ecmascript) <export install as RadarChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadarChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$kinder$2d$maic$2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/kinder-maic/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/install.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=b0791_echarts_lib_chart_c67ad2ad._.js.map