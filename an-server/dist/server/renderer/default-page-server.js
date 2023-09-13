import { renderToString as renderToString$1 } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { openBlock, createElementBlock, createElementVNode, createStaticVNode, inject, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, renderSlot, useSSRContext, onMounted, h, createSSRApp } from "vue";
import { useDark } from "@vueuse/core";
import { ElContainer, ElHeader, ElCol, ElSpace, ElIcon, ElAside, ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElMain } from "element-plus/lib";
/* empty css                        *//* empty css                        */import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../chunks/chunk-cc2b3d55.js";
import ElementPlus from "element-plus";
const elMain = "";
const elMenuItemGroup = "";
const _hoisted_1$7 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = { fill: "none" };
const _hoisted_3$7 = ["fill"];
const _hoisted_4$6 = ["fill"];
const _hoisted_5$5 = ["fill"];
const _hoisted_6$4 = ["filter"];
const _hoisted_7$4 = ["fill"];
const _hoisted_8$4 = ["filter"];
const _hoisted_9$4 = ["fill"];
const _hoisted_10$4 = ["fill"];
const _hoisted_11$4 = ["fill"];
const _hoisted_12$4 = ["id"];
const _hoisted_13$3 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#63D8FF" }, null, -1);
const _hoisted_14$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#3488EF"
}, null, -1);
const _hoisted_15$3 = [
  _hoisted_13$3,
  _hoisted_14$3
];
const _hoisted_16$3 = ["id"];
const _hoisted_17$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".494",
  "stop-color": "#465DC2",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_18$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#465DC2"
}, null, -1);
const _hoisted_19$2 = [
  _hoisted_17$3,
  _hoisted_18$3
];
const _hoisted_20$2 = ["id"];
const _hoisted_21$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".868",
  "stop-color": "#606AC7",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_22$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#606AC7"
}, null, -1);
const _hoisted_23$2 = [
  _hoisted_21$2,
  _hoisted_22$2
];
const _hoisted_24$2 = ["id"];
const _hoisted_25$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".418",
  "stop-color": "#6FFCAA"
}, null, -1);
const _hoisted_26$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#4EBA8B"
}, null, -1);
const _hoisted_27$2 = [
  _hoisted_25$2,
  _hoisted_26$2
];
const _hoisted_28$2 = ["id"];
const _hoisted_29$2 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#2C699B" }, null, -1);
const _hoisted_30$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#316CCA"
}, null, -1);
const _hoisted_31$2 = [
  _hoisted_29$2,
  _hoisted_30$2
];
const _hoisted_32$3 = ["id"];
const _hoisted_33$3 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#479786" }, null, -1);
const _hoisted_34$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#479786",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_35$3 = [
  _hoisted_33$3,
  _hoisted_34$3
];
const _hoisted_36$3 = ["id"];
const _hoisted_37$3 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#77FFB5" }, null, -1);
const _hoisted_38$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#77FFB5",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_39$3 = [
  _hoisted_37$3,
  _hoisted_38$3
];
const _hoisted_40$3 = ["id"];
const _hoisted_41$3 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_42$3 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_43$3 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_4754",
  stdDeviation: ".075"
}, null, -1);
const _hoisted_44$3 = [
  _hoisted_41$3,
  _hoisted_42$3,
  _hoisted_43$3
];
const _hoisted_45$3 = ["id"];
const _hoisted_46$3 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-.1" dy=".1"></feOffset><feGaussianBlur stdDeviation=".05"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.403922 0 0 0 0 0.917647 0 0 0 0 0.682353 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18_4754"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx=".1" dy="-.1"></feOffset><feGaussianBlur stdDeviation=".05"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.239216 0 0 0 0 0.560784 0 0 0 0 0.513726 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18_4754" result="effect2_innerShadow_18_4754"></feBlend>', 14);
const _hoisted_60$2 = [
  _hoisted_46$3
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [
    createElementVNode("g", _hoisted_2$7, [
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f601id0"] + ")",
        d: "M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14Z"
      }, null, 8, _hoisted_3$7),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f601id1"] + ")",
        d: "M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14Z"
      }, null, 8, _hoisted_4$6),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f601id2"] + ")",
        d: "M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14Z"
      }, null, 8, _hoisted_5$5),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f601id7"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f601id4"] + ")",
          d: "M13.086 5.044a.443.443 0 0 1-.152-.345a.494.494 0 0 0-.496-.507H10.7c-.408 0-.807-.17-1.094-.476a13.967 13.967 0 0 0-5.103 4.449h2.592c1.033 0 1.867.834 1.867 1.867v.963c0 .735.288 1.45.794 1.987l.934.983c.219.228.338.536.338.854v.466c0 .507.317.954.794 1.113c.982.336 1.968.657 2.954.978c.67.219 1.342.437 2.012.66c.08.04.169.06.258.06h1.35c.279 0 .497.218.497.497v.119a.388.388 0 0 1-.387.387a.602.602 0 0 0-.606.606v2.036c0 .725.596 1.32 1.32 1.32c.368 0 .666.299.666.666v3.625a.67.67 0 0 0 .676.675a.69.69 0 0 0 .516-.238l4.489-5.393c.169-.208.268-.476.268-.755v-.387c0-.655-.526-1.182-1.172-1.182h-.238a.576.576 0 0 1-.576-.576v-.516a1.45 1.45 0 0 0-.795-1.291l-.486-.238a3.382 3.382 0 0 0-1.49-.348h-2.602a.587.587 0 0 1-.586-.586a.409.409 0 0 0-.407-.407h-.169a.409.409 0 0 1-.407-.407v-.09a.492.492 0 0 0-.497-.496a.492.492 0 0 0-.496.496v.09c0 .278-.25.427-.528.427h-.594a.895.895 0 0 1-.864-.884v-.864c0-.695.556-1.252 1.25-1.252h.924c.447 0 .805.358.805.805c0 .1.08.189.189.189h.228a.568.568 0 0 0 .576-.567c0-.278-.725-.546-.576-.784l.902-2.027l-5.14-.11V5.045Z"
        }, null, 8, _hoisted_7$4)
      ], 8, _hoisted_6$4),
      createElementVNode("g", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        filter: "url(#" + _ctx.idMap["f601id8"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f601id3"] + ")",
          d: "M4.51 8h2.61C8.16 8 9 8.84 9 9.88v.97c0 .74.29 1.46.8 2l.94.99c.22.23.34.54.34.86v.47c0 .51.32.96.8 1.12c1.661.569 3.335 1.095 5 1.65c.08.04.17.06.26.06h1.36c.28 0 .5.22.5.5v.12c0 .22-.18.39-.39.39c-.34 0-.61.27-.61.61v2.05c0 .73.6 1.33 1.33 1.33c.37 0 .67.3.67.67v3.65c0 .38.3.68.68.68c.2 0 .39-.09.52-.24l4.52-5.43c.17-.21.27-.48.27-.76v-.39c0-.66-.53-1.19-1.18-1.19h-.24a.58.58 0 0 1-.58-.58v-.52c0-.55-.31-1.05-.8-1.3l-.49-.24c-.47-.23-.98-.35-1.5-.35h-2.62c-.33 0-.59-.27-.59-.59c0-.22-.18-.41-.41-.41h-.17c-.22 0-.41-.18-.41-.41v-.09c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.09c0 .28-.251.43-.531.43h-.599a.901.901 0 0 1-.87-.89v-.87c0-.7.56-1.26 1.26-1.26h.93c.45 0 .81.36.81.81c0 .1.08.19.19.19h.23c.32 0 .58-.25.58-.57c0-.28.07-.55.22-.79l2.64-4.4c.08-.15.25-.24.42-.24h1.22c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.29a.47.47 0 0 1-.35-.15l-.59-.59a.933.933 0 0 1-.27-.65a.63.63 0 0 0-.63-.61h-.18c-.12 0-.23-.05-.31-.13l-.11-.11c-.29-.28-.1-.76.3-.76h1.44c.37 0 .74.13 1.03.36l3.83 3.06c.46.37 1.03.58 1.63.58l.492.002A14.047 14.047 0 0 0 21.206 3H15.91c-.56 0-1.07.31-1.32.81l-.46.91c-.08.17-.25.28-.44.28h-.17c-.27 0-.53-.21-.52-.49a.497.497 0 0 0-.5-.51h-1.75c-.411 0-.813-.172-1.101-.48A14.064 14.064 0 0 0 4.51 8ZM19 7.5c0 .28-.22.5-.5.5s-.5.22-.5.5s-.22.5-.5.5s-.5-.22-.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5-.22.5-.5s.22-.5.5-.5s.5.22.5.5s.22.5.5.5s.5.22.5.5Z"
        }, null, 8, _hoisted_9$4),
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f601id5"] + ")",
          d: "M4.51 8h2.61C8.16 8 9 8.84 9 9.88v.97c0 .74.29 1.46.8 2l.94.99c.22.23.34.54.34.86v.47c0 .51.32.96.8 1.12c1.661.569 3.335 1.095 5 1.65c.08.04.17.06.26.06h1.36c.28 0 .5.22.5.5v.12c0 .22-.18.39-.39.39c-.34 0-.61.27-.61.61v2.05c0 .73.6 1.33 1.33 1.33c.37 0 .67.3.67.67v3.65c0 .38.3.68.68.68c.2 0 .39-.09.52-.24l4.52-5.43c.17-.21.27-.48.27-.76v-.39c0-.66-.53-1.19-1.18-1.19h-.24a.58.58 0 0 1-.58-.58v-.52c0-.55-.31-1.05-.8-1.3l-.49-.24c-.47-.23-.98-.35-1.5-.35h-2.62c-.33 0-.59-.27-.59-.59c0-.22-.18-.41-.41-.41h-.17c-.22 0-.41-.18-.41-.41v-.09c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.09c0 .28-.251.43-.531.43h-.599a.901.901 0 0 1-.87-.89v-.87c0-.7.56-1.26 1.26-1.26h.93c.45 0 .81.36.81.81c0 .1.08.19.19.19h.23c.32 0 .58-.25.58-.57c0-.28.07-.55.22-.79l2.64-4.4c.08-.15.25-.24.42-.24h1.22c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.29a.47.47 0 0 1-.35-.15l-.59-.59a.933.933 0 0 1-.27-.65a.63.63 0 0 0-.63-.61h-.18c-.12 0-.23-.05-.31-.13l-.11-.11c-.29-.28-.1-.76.3-.76h1.44c.37 0 .74.13 1.03.36l3.83 3.06c.46.37 1.03.58 1.63.58l.492.002A14.047 14.047 0 0 0 21.206 3H15.91c-.56 0-1.07.31-1.32.81l-.46.91c-.08.17-.25.28-.44.28h-.17c-.27 0-.53-.21-.52-.49a.497.497 0 0 0-.5-.51h-1.75c-.411 0-.813-.172-1.101-.48A14.064 14.064 0 0 0 4.51 8ZM19 7.5c0 .28-.22.5-.5.5s-.5.22-.5.5s-.22.5-.5.5s-.5-.22-.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5-.22.5-.5s.22-.5.5-.5s.5.22.5.5s.22.5.5.5s.5.22.5.5Z"
        }, null, 8, _hoisted_10$4)
      ], 8, _hoisted_8$4),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f601id6"] + ")",
        "fill-rule": "evenodd",
        d: "M4.51 8h2.61C8.16 8 9 8.84 9 9.88v.97c0 .74.29 1.46.8 2l.94.99c.22.23.34.54.34.86v.47c0 .51.32.96.8 1.12c1.661.569 3.335 1.095 5 1.65c.08.04.17.06.26.06h1.36c.28 0 .5.22.5.5v.12c0 .22-.18.39-.39.39c-.34 0-.61.27-.61.61v2.05c0 .73.6 1.33 1.33 1.33c.37 0 .67.3.67.67v3.65c0 .38.3.68.68.68c.2 0 .39-.09.52-.24l4.52-5.43c.17-.21.27-.48.27-.76v-.39c0-.66-.53-1.19-1.18-1.19h-.24a.58.58 0 0 1-.58-.58v-.52c0-.55-.31-1.05-.8-1.3l-.49-.24c-.47-.23-.98-.35-1.5-.35h-2.62c-.33 0-.59-.27-.59-.59c0-.22-.18-.41-.41-.41h-.17c-.22 0-.41-.18-.41-.41v-.09c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.09c0 .28-.251.43-.531.43h-.599a.901.901 0 0 1-.87-.89v-.87c0-.7.56-1.26 1.26-1.26h.93c.45 0 .81.36.81.81c0 .1.08.19.19.19h.23c.32 0 .58-.25.58-.57c0-.28.07-.55.22-.79l2.64-4.4c.08-.15.25-.24.42-.24h1.22c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.29a.47.47 0 0 1-.35-.15l-.59-.59a.933.933 0 0 1-.27-.65a.63.63 0 0 0-.63-.61h-.18c-.12 0-.23-.05-.31-.13l-.11-.11c-.29-.28-.1-.76.3-.76h1.44c.37 0 .74.13 1.03.36l3.83 3.06c.46.37 1.03.58 1.63.58l.492.002A14.047 14.047 0 0 0 21.206 3H15.91c-.56 0-1.07.31-1.32.81l-.46.91c-.08.17-.25.28-.44.28h-.17c-.27 0-.53-.21-.52-.49a.497.497 0 0 0-.5-.51h-1.75c-.411 0-.813-.172-1.101-.48A14.064 14.064 0 0 0 4.51 8ZM19 7.5c0 .28-.22.5-.5.5s-.5.22-.5.5s-.22.5-.5.5s-.5-.22-.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5-.22.5-.5s.22-.5.5-.5s.5.22.5.5s.22.5.5.5s.5.22.5.5Z",
        "clip-rule": "evenodd"
      }, null, 8, _hoisted_11$4),
      createElementVNode("defs", null, [
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f601id0"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(126.543 10.189 11.698) scale(23.7179 26.88)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_15$3, 8, _hoisted_12$4),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f601id1"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-19.2977 17.52941 -23.20134 -25.54178 25.754 9.62)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_19$2, 8, _hoisted_16$3),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f601id2"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(90 .965 15.035) scale(16.7059)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_23$2, 8, _hoisted_20$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f601id3"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(127.798 11.26 9.697) scale(19.0091 20.2884)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_27$2, 8, _hoisted_24$2),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f601id4"],
          x1: "15.915",
          x2: "15.915",
          y1: "3.199",
          y2: "28.027",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_31$2, 8, _hoisted_28$2),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f601id5"],
          x1: "19.082",
          x2: "20.255",
          y1: "29.896",
          y2: "22.422",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_35$3, 8, _hoisted_32$3),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f601id6"],
          x1: "23.625",
          x2: "20.125",
          y1: "6",
          y2: "9.531",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_39$3, 8, _hoisted_36$3),
        createElementVNode("filter", {
          id: _ctx.idMap["f601id7"],
          width: "21.632",
          height: "24.611",
          x: "4.353",
          y: "3.566",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_44$3, 8, _hoisted_40$3),
        createElementVNode("filter", {
          id: _ctx.idMap["f601id8"],
          width: "23.182",
          height: "25.2",
          x: "4.41",
          y: "2.9",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_60$2, 8, _hoisted_45$3)
      ])
    ])
  ]);
}
const __unplugin_components_16 = { name: "fluent-emoji-globe-showing-americas", render: render$8, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "f601id0": "uicons-" + __randId(), "f601id1": "uicons-" + __randId(), "f601id2": "uicons-" + __randId(), "f601id7": "uicons-" + __randId(), "f601id4": "uicons-" + __randId(), "f601id8": "uicons-" + __randId(), "f601id3": "uicons-" + __randId(), "f601id5": "uicons-" + __randId(), "f601id6": "uicons-" + __randId() };
  return { idMap };
} };
const elSubMenu = "";
const _hoisted_1$6 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = { fill: "none" };
const _hoisted_3$6 = ["fill"];
const _hoisted_4$5 = ["fill"];
const _hoisted_5$4 = ["fill"];
const _hoisted_6$3 = ["fill"];
const _hoisted_7$3 = ["fill"];
const _hoisted_8$3 = ["fill"];
const _hoisted_9$3 = ["fill"];
const _hoisted_10$3 = ["fill"];
const _hoisted_11$3 = ["filter"];
const _hoisted_12$3 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#9A4609",
  "stroke-linecap": "round",
  "stroke-width": "2",
  d: "M7.5 11.5s.25-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_13$2 = [
  _hoisted_12$3
];
const _hoisted_14$2 = ["filter"];
const _hoisted_15$2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#9A4609",
  "stroke-linecap": "round",
  "stroke-width": "2",
  d: "M18.5 11.5s.5-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_16$2 = [
  _hoisted_15$2
];
const _hoisted_17$2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#43273B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M8 11s.25-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_18$2 = ["filter"];
const _hoisted_19$1 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#fff",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": ".75",
  d: "M8.25 10.75s.25-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#43273B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 11s.5-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_22$1 = ["filter"];
const _hoisted_23$1 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#fff",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": ".75",
  d: "M19.25 10.75s.25-2 2.5-2s2.5 2 2.5 2"
}, null, -1);
const _hoisted_24$1 = [
  _hoisted_23$1
];
const _hoisted_25$1 = ["fill"];
const _hoisted_26$1 = ["fill"];
const _hoisted_27$1 = ["fill"];
const _hoisted_28$1 = ["fill"];
const _hoisted_29$1 = ["id"];
const _hoisted_30$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFF478" }, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".475",
  "stop-color": "#FFB02E"
}, null, -1);
const _hoisted_32$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#F70A8D"
}, null, -1);
const _hoisted_33$2 = [
  _hoisted_30$1,
  _hoisted_31$1,
  _hoisted_32$2
];
const _hoisted_34$2 = ["id"];
const _hoisted_35$2 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFF478" }, null, -1);
const _hoisted_36$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".475",
  "stop-color": "#FFB02E"
}, null, -1);
const _hoisted_37$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#F70A8D"
}, null, -1);
const _hoisted_38$2 = [
  _hoisted_35$2,
  _hoisted_36$2,
  _hoisted_37$2
];
const _hoisted_39$2 = ["id"];
const _hoisted_40$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".788",
  "stop-color": "#F59639",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_41$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".973",
  "stop-color": "#FF7DCE"
}, null, -1);
const _hoisted_42$2 = [
  _hoisted_40$2,
  _hoisted_41$2
];
const _hoisted_43$2 = ["id"];
const _hoisted_44$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".315",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_45$2 = /* @__PURE__ */ createElementVNode("stop", { offset: "1" }, null, -1);
const _hoisted_46$2 = [
  _hoisted_44$2,
  _hoisted_45$2
];
const _hoisted_47$2 = ["id"];
const _hoisted_48$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".508",
  "stop-color": "#7D6133",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_49$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#715B32"
}, null, -1);
const _hoisted_50$1 = [
  _hoisted_48$2,
  _hoisted_49$2
];
const _hoisted_51$1 = ["id"];
const _hoisted_52$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFB849" }, null, -1);
const _hoisted_53$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#FFB847",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_54$1 = [
  _hoisted_52$1,
  _hoisted_53$1
];
const _hoisted_55$1 = ["id"];
const _hoisted_56$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFA64B" }, null, -1);
const _hoisted_57$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".9",
  "stop-color": "#FFAE46",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_58$1 = [
  _hoisted_56$1,
  _hoisted_57$1
];
const _hoisted_59$1 = ["id"];
const _hoisted_60$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".185",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_61$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-opacity": ".4"
}, null, -1);
const _hoisted_62$1 = [
  _hoisted_60$1,
  _hoisted_61$1
];
const _hoisted_63$2 = ["id"];
const _hoisted_64$2 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#F70A8D" }, null, -1);
const _hoisted_65$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#89029C"
}, null, -1);
const _hoisted_66$2 = [
  _hoisted_64$2,
  _hoisted_65$2
];
const _hoisted_67$2 = ["id"];
const _hoisted_68$2 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#fff" }, null, -1);
const _hoisted_69$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#ECCDFF"
}, null, -1);
const _hoisted_70$2 = [
  _hoisted_68$2,
  _hoisted_69$2
];
const _hoisted_71$2 = ["id"];
const _hoisted_72$2 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_73$2 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_74$2 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_23_357",
  stdDeviation: ".75"
}, null, -1);
const _hoisted_75$2 = [
  _hoisted_72$2,
  _hoisted_73$2,
  _hoisted_74$2
];
const _hoisted_76$2 = ["id"];
const _hoisted_77$2 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_78$2 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_79$2 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_23_357",
  stdDeviation: ".75"
}, null, -1);
const _hoisted_80$1 = [
  _hoisted_77$2,
  _hoisted_78$2,
  _hoisted_79$2
];
const _hoisted_81$1 = ["id"];
const _hoisted_82$1 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_83$1 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_84$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_23_357",
  stdDeviation: ".75"
}, null, -1);
const _hoisted_85$1 = [
  _hoisted_82$1,
  _hoisted_83$1,
  _hoisted_84$1
];
const _hoisted_86$1 = ["id"];
const _hoisted_87$1 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_88$1 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_89$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_23_357",
  stdDeviation: ".75"
}, null, -1);
const _hoisted_90$1 = [
  _hoisted_87$1,
  _hoisted_88$1,
  _hoisted_89$1
];
const _hoisted_91$1 = ["id"];
const _hoisted_92$1 = /* @__PURE__ */ createElementVNode("stop", {
  "stop-color": "#E181F4",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_93$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#E181F4"
}, null, -1);
const _hoisted_94$1 = [
  _hoisted_92$1,
  _hoisted_93$1
];
const _hoisted_95$1 = ["id"];
const _hoisted_96$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#fff" }, null, -1);
const _hoisted_97$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#ECCDFF"
}, null, -1);
const _hoisted_98$1 = [
  _hoisted_96$1,
  _hoisted_97$1
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [
    createElementVNode("g", _hoisted_2$6, [
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id0"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_3$6),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id1"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_4$5),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id2"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_5$4),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id3"] + ")",
        "fill-opacity": ".6",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_6$3),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id4"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_7$3),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id5"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_8$3),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id6"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_9$3),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id7"] + ")",
        d: "M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
      }, null, 8, _hoisted_10$3),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f110ida"] + ")",
        opacity: ".5"
      }, _hoisted_13$2, 8, _hoisted_11$3),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f110idb"] + ")",
        opacity: ".5"
      }, _hoisted_16$2, 8, _hoisted_14$2),
      _hoisted_17$2,
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f110idc"] + ")",
        opacity: ".26"
      }, _hoisted_20$1, 8, _hoisted_18$2),
      _hoisted_21$1,
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f110idd"] + ")",
        opacity: ".26"
      }, _hoisted_24$1, 8, _hoisted_22$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id8"] + ")",
        d: "M16 26C6 26 6 16 6 16h20s0 10-10 10Z"
      }, null, 8, _hoisted_25$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110id9"] + ")",
        d: "M7.759 19.794L7 16h18l-.759 3.794A1.5 1.5 0 0 1 22.771 21H9.23a1.5 1.5 0 0 1-1.471-1.206Z"
      }, null, 8, _hoisted_26$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110ide"] + ")",
        d: "M7.759 19.794L7 16h18l-.759 3.794A1.5 1.5 0 0 1 22.771 21H9.23a1.5 1.5 0 0 1-1.471-1.206Z"
      }, null, 8, _hoisted_27$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f110idf"] + ")",
        "fill-rule": "evenodd",
        d: "M8.343 22.715C9.8 24.53 12.165 26 16 26s6.199-1.47 7.657-3.284l.104-.52A1 1 0 0 0 22.78 21H9.22a1 1 0 0 0-.981 1.196l.104.52Z",
        "clip-rule": "evenodd"
      }, null, 8, _hoisted_28$1),
      createElementVNode("defs", null, [
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id0"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(132.839 10.786 10.065) scale(37.5033)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_33$2, 8, _hoisted_29$1),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id1"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(131.878 10.74 10.193) scale(38.9487)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_38$2, 8, _hoisted_34$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id2"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(101.31 2.876 12.808) scale(17.8466 22.8581)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_42$2, 8, _hoisted_39$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id3"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-29 29 -29 -29 18 14)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_46$2, 8, _hoisted_43$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id4"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(77.692 -2.555 18.434) scale(28.1469)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_50$1, 8, _hoisted_47$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id5"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_54$1, 8, _hoisted_51$1),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id6"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(11.49998 2 -2 11.49998 20.5 18)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_58$1, 8, _hoisted_55$1),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id7"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(43.971 -9.827 29.173) scale(59.0529)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_62$1, 8, _hoisted_59$1),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id8"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(0 -9 18 0 15 25)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_66$2, 8, _hoisted_63$2),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f110id9"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(138.576 7.725 12.065) scale(11.3358)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_70$2, 8, _hoisted_67$2),
        createElementVNode("filter", {
          id: _ctx.idMap["f110ida"],
          width: "10",
          height: "7",
          x: "5",
          y: "7",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_75$2, 8, _hoisted_71$2),
        createElementVNode("filter", {
          id: _ctx.idMap["f110idb"],
          width: "10.001",
          height: "7",
          x: "16",
          y: "7",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_80$1, 8, _hoisted_76$2),
        createElementVNode("filter", {
          id: _ctx.idMap["f110idc"],
          width: "8.75",
          height: "5.75",
          x: "6.375",
          y: "6.875",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_85$1, 8, _hoisted_81$1),
        createElementVNode("filter", {
          id: _ctx.idMap["f110idd"],
          width: "8.75",
          height: "5.75",
          x: "17.375",
          y: "6.875",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_90$1, 8, _hoisted_86$1),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f110ide"],
          x1: "16",
          x2: "16",
          y1: "20",
          y2: "21.5",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_94$1, 8, _hoisted_91$1),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f110idf"],
          x1: "17.051",
          x2: "15.777",
          y1: "21",
          y2: "25.277",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_98$1, 8, _hoisted_95$1)
      ])
    ])
  ]);
}
const __unplugin_components_14 = { name: "fluent-emoji-beaming-face-with-smiling-eyes", render: render$7, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "f110id0": "uicons-" + __randId(), "f110id1": "uicons-" + __randId(), "f110id2": "uicons-" + __randId(), "f110id3": "uicons-" + __randId(), "f110id4": "uicons-" + __randId(), "f110id5": "uicons-" + __randId(), "f110id6": "uicons-" + __randId(), "f110id7": "uicons-" + __randId(), "f110ida": "uicons-" + __randId(), "f110idb": "uicons-" + __randId(), "f110idc": "uicons-" + __randId(), "f110idd": "uicons-" + __randId(), "f110id8": "uicons-" + __randId(), "f110id9": "uicons-" + __randId(), "f110ide": "uicons-" + __randId(), "f110idf": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$5 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("path", {
    id: "f742id0",
    d: "M15.872 9.81a1.978 1.978 0 1 0 0-3.957a1.978 1.978 0 0 0 0 3.957Zm1.61 3.746a1.75 1.75 0 1 0-3.5 0v10.59a1.75 1.75 0 1 0 3.5 0v-10.59Z"
  })
], -1);
const _hoisted_3$5 = { fill: "none" };
const _hoisted_4$4 = ["filter"];
const _hoisted_5$3 = ["fill"];
const _hoisted_6$2 = ["fill"];
const _hoisted_7$2 = ["filter"];
const _hoisted_8$2 = ["stroke"];
const _hoisted_9$2 = ["filter"];
const _hoisted_10$2 = ["stroke"];
const _hoisted_11$2 = ["filter"];
const _hoisted_12$2 = /* @__PURE__ */ createElementVNode("use", { href: "#f742id0" }, null, -1);
const _hoisted_13$1 = [
  _hoisted_12$2
];
const _hoisted_14$1 = ["filter"];
const _hoisted_15$1 = /* @__PURE__ */ createElementVNode("use", { href: "#f742id0" }, null, -1);
const _hoisted_16$1 = [
  _hoisted_15$1
];
const _hoisted_17$1 = ["id"];
const _hoisted_18$1 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1" dy="-1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.188235 0 0 0 0 0.470588 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18590_2368"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="-1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.27451 0 0 0 0 0.34902 0 0 0 0 0.8 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18590_2368" result="effect2_innerShadow_18590_2368"></feBlend>', 14);
const _hoisted_32$1 = [
  _hoisted_18$1
];
const _hoisted_33$1 = ["id"];
const _hoisted_34$1 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_35$1 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_36$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18590_2368",
  stdDeviation: "1"
}, null, -1);
const _hoisted_37$1 = [
  _hoisted_34$1,
  _hoisted_35$1,
  _hoisted_36$1
];
const _hoisted_38$1 = ["id"];
const _hoisted_39$1 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_40$1 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_41$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18590_2368",
  stdDeviation: "1"
}, null, -1);
const _hoisted_42$1 = [
  _hoisted_39$1,
  _hoisted_40$1,
  _hoisted_41$1
];
const _hoisted_43$1 = ["id"];
const _hoisted_44$1 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_45$1 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_46$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18590_2368",
  stdDeviation: ".5"
}, null, -1);
const _hoisted_47$1 = [
  _hoisted_44$1,
  _hoisted_45$1,
  _hoisted_46$1
];
const _hoisted_48$1 = ["id"];
const _hoisted_49$1 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-1" dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.819608 0 0 0 0 0.941176 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18590_2368"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx=".4" dy="-.4"></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18590_2368" result="effect2_innerShadow_18590_2368"></feBlend>', 14);
const _hoisted_63$1 = [
  _hoisted_49$1
];
const _hoisted_64$1 = ["id"];
const _hoisted_65$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#5CB7FF" }, null, -1);
const _hoisted_66$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#4878DD"
}, null, -1);
const _hoisted_67$1 = [
  _hoisted_65$1,
  _hoisted_66$1
];
const _hoisted_68$1 = ["id"];
const _hoisted_69$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#7FD9FF" }, null, -1);
const _hoisted_70$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#639DF4"
}, null, -1);
const _hoisted_71$1 = [
  _hoisted_69$1,
  _hoisted_70$1
];
const _hoisted_72$1 = ["id"];
const _hoisted_73$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#7DD8FF" }, null, -1);
const _hoisted_74$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#5DB6FF"
}, null, -1);
const _hoisted_75$1 = [
  _hoisted_73$1,
  _hoisted_74$1
];
const _hoisted_76$1 = ["id"];
const _hoisted_77$1 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#7BD7FF" }, null, -1);
const _hoisted_78$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#7BD7FF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_79$1 = [
  _hoisted_77$1,
  _hoisted_78$1
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [
    _hoisted_2$5,
    createElementVNode("g", _hoisted_3$5, [
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f742id1"] + ")"
      }, [
        createElementVNode("rect", {
          width: "27.875",
          height: "27.875",
          x: "1.934",
          y: "1.938",
          fill: "url(#" + _ctx.idMap["f742id6"] + ")",
          rx: "3.6"
        }, null, 8, _hoisted_5$3),
        createElementVNode("rect", {
          width: "27.875",
          height: "27.875",
          x: "1.934",
          y: "1.938",
          fill: "url(#" + _ctx.idMap["f742id9"] + ")",
          rx: "3.6"
        }, null, 8, _hoisted_6$2)
      ], 8, _hoisted_4$4),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f742id2"] + ")"
      }, [
        createElementVNode("path", {
          stroke: "url(#" + _ctx.idMap["f742id7"] + ")",
          "stroke-linecap": "round",
          "stroke-width": "1.5",
          d: "M28.122 4.438v22.875"
        }, null, 8, _hoisted_8$2)
      ], 8, _hoisted_7$2),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f742id3"] + ")"
      }, [
        createElementVNode("path", {
          stroke: "url(#" + _ctx.idMap["f742id8"] + ")",
          "stroke-linecap": "round",
          "stroke-width": "1.5",
          d: "M5.398 3.75H27.18"
        }, null, 8, _hoisted_10$2)
      ], 8, _hoisted_9$2),
      createElementVNode("g", {
        fill: "#579FFF",
        filter: "url(#" + _ctx.idMap["f742id4"] + ")"
      }, _hoisted_13$1, 8, _hoisted_11$2),
      createElementVNode("g", {
        fill: "#FCF2FF",
        filter: "url(#" + _ctx.idMap["f742id5"] + ")"
      }, _hoisted_16$1, 8, _hoisted_14$1),
      createElementVNode("defs", null, [
        createElementVNode("filter", {
          id: _ctx.idMap["f742id1"],
          width: "28.875",
          height: "28.875",
          x: "1.934",
          y: ".938",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_32$1, 8, _hoisted_17$1),
        createElementVNode("filter", {
          id: _ctx.idMap["f742id2"],
          width: "5.5",
          height: "28.375",
          x: "25.372",
          y: "1.688",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_37$1, 8, _hoisted_33$1),
        createElementVNode("filter", {
          id: _ctx.idMap["f742id3"],
          width: "27.281",
          height: "5.5",
          x: "2.648",
          y: "1",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_42$1, 8, _hoisted_38$1),
        createElementVNode("filter", {
          id: _ctx.idMap["f742id4"],
          width: "5.956",
          height: "22.044",
          x: "12.894",
          y: "4.853",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_47$1, 8, _hoisted_43$1),
        createElementVNode("filter", {
          id: _ctx.idMap["f742id5"],
          width: "5.356",
          height: "21.444",
          x: "12.894",
          y: "5.453",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_63$1, 8, _hoisted_48$1),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f742id6"],
          x1: "15.872",
          x2: "15.872",
          y1: "5.512",
          y2: "38.765",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_67$1, 8, _hoisted_64$1),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f742id7"],
          x1: "28.622",
          x2: "28.622",
          y1: "4.438",
          y2: "27.313",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_71$1, 8, _hoisted_68$1),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f742id8"],
          x1: "28.336",
          x2: "2.804",
          y1: "4",
          y2: "4",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_75$1, 8, _hoisted_72$1),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f742id9"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-1.56249 1.46876 -1.71548 -1.82495 27.59 4.031)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_79$1, 8, _hoisted_76$1)
      ])
    ])
  ]);
}
const __unplugin_components_13 = { name: "fluent-emoji-information", render: render$6, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "f742id1": "uicons-" + __randId(), "f742id6": "uicons-" + __randId(), "f742id9": "uicons-" + __randId(), "f742id2": "uicons-" + __randId(), "f742id7": "uicons-" + __randId(), "f742id3": "uicons-" + __randId(), "f742id8": "uicons-" + __randId(), "f742id4": "uicons-" + __randId(), "f742id5": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$4 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = { fill: "none" };
const _hoisted_3$4 = ["fill"];
const _hoisted_4$3 = ["fill"];
const _hoisted_5$2 = ["fill"];
const _hoisted_6$1 = ["fill"];
const _hoisted_7$1 = ["fill"];
const _hoisted_8$1 = ["fill"];
const _hoisted_9$1 = ["fill"];
const _hoisted_10$1 = ["fill"];
const _hoisted_11$1 = ["fill"];
const _hoisted_12$1 = ["fill"];
const _hoisted_13 = ["fill"];
const _hoisted_14 = ["fill"];
const _hoisted_15 = ["filter"];
const _hoisted_16 = ["fill"];
const _hoisted_17 = ["filter"];
const _hoisted_18 = ["fill"];
const _hoisted_19 = ["fill"];
const _hoisted_20 = ["fill"];
const _hoisted_21 = ["fill"];
const _hoisted_22 = ["filter"];
const _hoisted_23 = ["fill"];
const _hoisted_24 = ["filter"];
const _hoisted_25 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#62393D",
  d: "M14.317 22.273a.557.557 0 1 0 0-1.115a.557.557 0 0 0 0 1.115Z"
}, null, -1);
const _hoisted_26 = [
  _hoisted_25
];
const _hoisted_27 = ["filter"];
const _hoisted_28 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#895D56",
  d: "M14.462 22.189a.563.563 0 1 0 0-1.126a.563.563 0 0 0 0 1.126Z"
}, null, -1);
const _hoisted_29 = [
  _hoisted_28
];
const _hoisted_30 = ["fill"];
const _hoisted_31 = ["fill"];
const _hoisted_32 = ["filter"];
const _hoisted_33 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#68552B",
  d: "M7.358 27.278H16v1.132H7.358v-1.132Z"
}, null, -1);
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = ["filter"];
const _hoisted_36 = ["fill"];
const _hoisted_37 = ["fill"];
const _hoisted_38 = ["fill"];
const _hoisted_39 = ["fill"];
const _hoisted_40 = ["fill"];
const _hoisted_41 = ["fill"];
const _hoisted_42 = ["filter"];
const _hoisted_43 = ["stroke"];
const _hoisted_44 = ["filter"];
const _hoisted_45 = ["stroke"];
const _hoisted_46 = ["id"];
const _hoisted_47 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#8E694B" }, null, -1);
const _hoisted_48 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#8E694B",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_49 = [
  _hoisted_47,
  _hoisted_48
];
const _hoisted_50 = ["id"];
const _hoisted_51 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#9F6A42" }, null, -1);
const _hoisted_52 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#9F6A42",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_53 = [
  _hoisted_51,
  _hoisted_52
];
const _hoisted_54 = ["id"];
const _hoisted_55 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#D5AD80" }, null, -1);
const _hoisted_56 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#D5AD80",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_57 = [
  _hoisted_55,
  _hoisted_56
];
const _hoisted_58 = ["id"];
const _hoisted_59 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#D7905F" }, null, -1);
const _hoisted_60 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#E8BC97"
}, null, -1);
const _hoisted_61 = [
  _hoisted_59,
  _hoisted_60
];
const _hoisted_62 = ["id"];
const _hoisted_63 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#BA8951" }, null, -1);
const _hoisted_64 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#BA8951",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_65 = [
  _hoisted_63,
  _hoisted_64
];
const _hoisted_66 = ["id"];
const _hoisted_67 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFE6B1" }, null, -1);
const _hoisted_68 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#FFE6B1",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_69 = [
  _hoisted_67,
  _hoisted_68
];
const _hoisted_70 = ["id"];
const _hoisted_71 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#B55852" }, null, -1);
const _hoisted_72 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#B55852",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_73 = [
  _hoisted_71,
  _hoisted_72
];
const _hoisted_74 = ["id"];
const _hoisted_75 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#845F3D" }, null, -1);
const _hoisted_76 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#845F3D",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_77 = [
  _hoisted_75,
  _hoisted_76
];
const _hoisted_78 = ["id"];
const _hoisted_79 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#805139" }, null, -1);
const _hoisted_80 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#6D4D2F"
}, null, -1);
const _hoisted_81 = [
  _hoisted_79,
  _hoisted_80
];
const _hoisted_82 = ["id"];
const _hoisted_83 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#4CCCFF" }, null, -1);
const _hoisted_84 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#3A9EE6"
}, null, -1);
const _hoisted_85 = [
  _hoisted_83,
  _hoisted_84
];
const _hoisted_86 = ["id"];
const _hoisted_87 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#1E9FE4" }, null, -1);
const _hoisted_88 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#1E9FE4",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_89 = [
  _hoisted_87,
  _hoisted_88
];
const _hoisted_90 = ["id"];
const _hoisted_91 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#48E0FF" }, null, -1);
const _hoisted_92 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#48E0FF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_93 = [
  _hoisted_91,
  _hoisted_92
];
const _hoisted_94 = ["id"];
const _hoisted_95 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#43B3F2" }, null, -1);
const _hoisted_96 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#43B3F2",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_97 = [
  _hoisted_95,
  _hoisted_96
];
const _hoisted_98 = ["id"];
const _hoisted_99 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#70504D" }, null, -1);
const _hoisted_100 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#9B665E"
}, null, -1);
const _hoisted_101 = [
  _hoisted_99,
  _hoisted_100
];
const _hoisted_102 = ["id"];
const _hoisted_103 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#EA6D2E" }, null, -1);
const _hoisted_104 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#CA222B"
}, null, -1);
const _hoisted_105 = [
  _hoisted_103,
  _hoisted_104
];
const _hoisted_106 = ["id"];
const _hoisted_107 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#3FD47B" }, null, -1);
const _hoisted_108 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#40DC7F"
}, null, -1);
const _hoisted_109 = [
  _hoisted_107,
  _hoisted_108
];
const _hoisted_110 = ["id"];
const _hoisted_111 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".107",
  "stop-color": "#3FD17B"
}, null, -1);
const _hoisted_112 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#3FD17B",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_113 = [
  _hoisted_111,
  _hoisted_112
];
const _hoisted_114 = ["id"];
const _hoisted_115 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#9FA1A3" }, null, -1);
const _hoisted_116 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#C4C1C7"
}, null, -1);
const _hoisted_117 = [
  _hoisted_115,
  _hoisted_116
];
const _hoisted_118 = ["id"];
const _hoisted_119 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#59675C" }, null, -1);
const _hoisted_120 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#59675C",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_121 = [
  _hoisted_119,
  _hoisted_120
];
const _hoisted_122 = ["id"];
const _hoisted_123 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#E3DADD" }, null, -1);
const _hoisted_124 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#E3DADD",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_125 = [
  _hoisted_123,
  _hoisted_124
];
const _hoisted_126 = ["id"];
const _hoisted_127 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FF8337" }, null, -1);
const _hoisted_128 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#F24747"
}, null, -1);
const _hoisted_129 = [
  _hoisted_127,
  _hoisted_128
];
const _hoisted_130 = ["id"];
const _hoisted_131 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FF8337" }, null, -1);
const _hoisted_132 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#F24747"
}, null, -1);
const _hoisted_133 = [
  _hoisted_131,
  _hoisted_132
];
const _hoisted_134 = ["id"];
const _hoisted_135 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_136 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_137 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_6002",
  stdDeviation: ".25"
}, null, -1);
const _hoisted_138 = [
  _hoisted_135,
  _hoisted_136,
  _hoisted_137
];
const _hoisted_139 = ["id"];
const _hoisted_140 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-.5" dy=".5"></feOffset><feGaussianBlur stdDeviation=".25"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.47451 0 0 0 0 0.792157 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18_6002"></feBlend>', 8);
const _hoisted_148 = [
  _hoisted_140
];
const _hoisted_149 = ["id"];
const _hoisted_150 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx=".25"></feOffset><feGaussianBlur stdDeviation=".25"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.254902 0 0 0 0 0.188235 0 0 0 0 0.141176 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18_6002"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-.2"></feOffset><feGaussianBlur stdDeviation=".15"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.694118 0 0 0 0 0.470588 0 0 0 0 0.407843 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18_6002" result="effect2_innerShadow_18_6002"></feBlend>', 14);
const _hoisted_164 = [
  _hoisted_150
];
const _hoisted_165 = ["id"];
const _hoisted_166 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_167 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_168 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_6002",
  stdDeviation: ".075"
}, null, -1);
const _hoisted_169 = [
  _hoisted_166,
  _hoisted_167,
  _hoisted_168
];
const _hoisted_170 = ["id"];
const _hoisted_171 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-.1"></feOffset><feGaussianBlur stdDeviation=".1"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.694118 0 0 0 0 0.482353 0 0 0 0 0.419608 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18_6002"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx=".1"></feOffset><feGaussianBlur stdDeviation=".1"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.184314 0 0 0 0 0.164706 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18_6002" result="effect2_innerShadow_18_6002"></feBlend>', 14);
const _hoisted_185 = [
  _hoisted_171
];
const _hoisted_186 = ["id"];
const _hoisted_187 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_188 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_189 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_6002",
  stdDeviation: ".25"
}, null, -1);
const _hoisted_190 = [
  _hoisted_187,
  _hoisted_188,
  _hoisted_189
];
const _hoisted_191 = ["id"];
const _hoisted_192 = /* @__PURE__ */ createStaticVNode('<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx=".5"></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.545098 0 0 0 0 0.352941 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18_6002"></feBlend>', 8);
const _hoisted_200 = [
  _hoisted_192
];
const _hoisted_201 = ["id"];
const _hoisted_202 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_203 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_204 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_6002",
  stdDeviation: ".3"
}, null, -1);
const _hoisted_205 = [
  _hoisted_202,
  _hoisted_203,
  _hoisted_204
];
const _hoisted_206 = ["id"];
const _hoisted_207 = /* @__PURE__ */ createElementVNode("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1);
const _hoisted_208 = /* @__PURE__ */ createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1);
const _hoisted_209 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  result: "effect1_foregroundBlur_18_6002",
  stdDeviation: ".3"
}, null, -1);
const _hoisted_210 = [
  _hoisted_207,
  _hoisted_208,
  _hoisted_209
];
const _hoisted_211 = ["id"];
const _hoisted_212 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#F1B379" }, null, -1);
const _hoisted_213 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#CD915F"
}, null, -1);
const _hoisted_214 = [
  _hoisted_212,
  _hoisted_213
];
const _hoisted_215 = ["id"];
const _hoisted_216 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFCB8C" }, null, -1);
const _hoisted_217 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#FFCB8C",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_218 = [
  _hoisted_216,
  _hoisted_217
];
const _hoisted_219 = ["id"];
const _hoisted_220 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#BEAB75" }, null, -1);
const _hoisted_221 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#BEAB75",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_222 = [
  _hoisted_220,
  _hoisted_221
];
const _hoisted_223 = ["id"];
const _hoisted_224 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".35",
  "stop-color": "#9E413E"
}, null, -1);
const _hoisted_225 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#9E413E",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_226 = [
  _hoisted_224,
  _hoisted_225
];
const _hoisted_227 = ["id"];
const _hoisted_228 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FF853F" }, null, -1);
const _hoisted_229 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#FF853F",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_230 = [
  _hoisted_228,
  _hoisted_229
];
const _hoisted_231 = ["id"];
const _hoisted_232 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#5CEE92" }, null, -1);
const _hoisted_233 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#5CEE92",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_234 = [
  _hoisted_232,
  _hoisted_233
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [
    createElementVNode("g", _hoisted_2$4, [
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idv"] + ")",
        d: "M6.092 4.428a.35.35 0 0 1 .35-.35H9.79a.35.35 0 0 1 .35.35v10.303H6.09V4.428Z"
      }, null, 8, _hoisted_3$4),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id0"] + ")",
        d: "M6.092 4.428a.35.35 0 0 1 .35-.35H9.79a.35.35 0 0 1 .35.35v10.303H6.09V4.428Z"
      }, null, 8, _hoisted_4$3),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id1"] + ")",
        d: "M6.092 4.428a.35.35 0 0 1 .35-.35H9.79a.35.35 0 0 1 .35.35v10.303H6.09V4.428Z"
      }, null, 8, _hoisted_5$2),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id2"] + ")",
        d: "M6.092 4.428a.35.35 0 0 1 .35-.35H9.79a.35.35 0 0 1 .35.35v10.303H6.09V4.428Z"
      }, null, 8, _hoisted_6$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idw"] + ")",
        d: "M6.092 4.428a.35.35 0 0 1 .35-.35H9.79a.35.35 0 0 1 .35.35v10.303H6.09V4.428Z"
      }, null, 8, _hoisted_7$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id3"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_8$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id4"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_9$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idx"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_10$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id5"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_11$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idy"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_12$1),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id6"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_13),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id7"] + ")",
        d: "M27.656 29.16H4.641V15.717L16.148 4.965l11.508 10.753V29.16Z"
      }, null, 8, _hoisted_14),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idm"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f714id8"] + ")",
          d: "M15.066 29.16H8.123V18.151c0-.838.533-1.527 1.18-1.527h4.583c.648 0 1.18.689 1.18 1.527V29.16Z"
        }, null, 8, _hoisted_16)
      ], 8, _hoisted_15),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idn"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f714id9"] + ")",
          d: "M23.65 21.864h-4.19a.837.837 0 0 1-.838-.838v-4.188c0-.47.382-.838.838-.838h4.188c.47 0 .838.382.838.838v4.188c0 .47-.367.838-.838.838Z"
        }, null, 8, _hoisted_18),
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f714ida"] + ")",
          d: "M23.65 21.864h-4.19a.837.837 0 0 1-.838-.838v-4.188c0-.47.382-.838.838-.838h4.188c.47 0 .838.382.838.838v4.188c0 .47-.367.838-.838.838Z"
        }, null, 8, _hoisted_19)
      ], 8, _hoisted_17),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idb"] + ")",
        d: "M23.65 21.864h-4.19a.837.837 0 0 1-.838-.838v-4.188c0-.47.382-.838.838-.838h4.188c.47 0 .838.382.838.838v4.188c0 .47-.367.838-.838.838Z"
      }, null, 8, _hoisted_20),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idc"] + ")",
        d: "M23.65 21.864h-4.19a.837.837 0 0 1-.838-.838v-4.188c0-.47.382-.838.838-.838h4.188c.47 0 .838.382.838.838v4.188c0 .47-.367.838-.838.838Z"
      }, null, 8, _hoisted_21),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714ido"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f714idd"] + ")",
          d: "M16.257 27.898H8.514V17.464c0-.795.593-1.448 1.316-1.448h5.11c.723 0 1.317.653 1.317 1.448v10.434Z"
        }, null, 8, _hoisted_23)
      ], 8, _hoisted_22),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idp"] + ")"
      }, _hoisted_26, 8, _hoisted_24),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idq"] + ")"
      }, _hoisted_29, 8, _hoisted_27),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714ide"] + ")",
        d: "M29.738 15.847L16.998 3.295a1.214 1.214 0 0 0-1.714 0s-.014 0-.014.014L2.503 15.874a1.181 1.181 0 0 0 0 1.687a1.226 1.226 0 0 0 1.714 0L15.958 5.99a.25.25 0 0 1 .351 0l11.702 11.53a1.214 1.214 0 0 0 1.714 0c.472-.473.486-1.216.013-1.674Z"
      }, null, 8, _hoisted_30),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idz"] + ")",
        d: "M29.738 15.847L16.998 3.295a1.214 1.214 0 0 0-1.714 0s-.014 0-.014.014L2.503 15.874a1.181 1.181 0 0 0 0 1.687a1.226 1.226 0 0 0 1.714 0L15.958 5.99a.25.25 0 0 1 .351 0l11.702 11.53a1.214 1.214 0 0 0 1.714 0c.472-.473.486-1.216.013-1.674Z"
      }, null, 8, _hoisted_31),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idr"] + ")"
      }, _hoisted_34, 8, _hoisted_32),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714ids"] + ")"
      }, [
        createElementVNode("path", {
          fill: "url(#" + _ctx.idMap["f714idf"] + ")",
          d: "M2.148 29.932c0-1.117.906-2.022 2.022-2.022h23.894c1.116 0 2.022.905 2.022 2.022H2.148Z"
        }, null, 8, _hoisted_36)
      ], 8, _hoisted_35),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idg"] + ")",
        d: "M2.148 29.932c0-1.117.906-2.022 2.022-2.022h23.894c1.116 0 2.022.905 2.022 2.022H2.148Z"
      }, null, 8, _hoisted_37),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714id10"] + ")",
        d: "M2.148 29.932c0-1.117.906-2.022 2.022-2.022h23.894c1.116 0 2.022.905 2.022 2.022H2.148Z"
      }, null, 8, _hoisted_38),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idh"] + ")",
        d: "M7.563 27.778a.75.75 0 0 1 .75-.75h8.013c.487 0 .882.395.882.882H7.563v-.132Z"
      }, null, 8, _hoisted_39),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idi"] + ")",
        d: "M7.563 27.778a.75.75 0 0 1 .75-.75h8.013c.487 0 .882.395.882.882H7.563v-.132Z"
      }, null, 8, _hoisted_40),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["f714idj"] + ")",
        d: "M7.563 27.778a.75.75 0 0 1 .75-.75h8.013c.487 0 .882.395.882.882H7.563v-.132Z"
      }, null, 8, _hoisted_41),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idt"] + ")"
      }, [
        createElementVNode("path", {
          stroke: "url(#" + _ctx.idMap["f714idk"] + ")",
          "stroke-linecap": "round",
          "stroke-width": ".3",
          d: "m16.338 3.897l12.777 12.58"
        }, null, 8, _hoisted_43)
      ], 8, _hoisted_42),
      createElementVNode("g", {
        filter: "url(#" + _ctx.idMap["f714idu"] + ")"
      }, [
        createElementVNode("path", {
          stroke: "url(#" + _ctx.idMap["f714idl"] + ")",
          "stroke-linecap": "round",
          "stroke-opacity": ".5",
          "stroke-width": ".3",
          d: "M16.338 3.897L3.563 16.477"
        }, null, 8, _hoisted_45)
      ], 8, _hoisted_44),
      createElementVNode("defs", null, [
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id0"],
          x1: "5.812",
          x2: "7.506",
          y1: "8.193",
          y2: "8.193",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_49, 8, _hoisted_46),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id1"],
          x1: "9.625",
          x2: "8.367",
          y1: "10.563",
          y2: "7.882",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_53, 8, _hoisted_50),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id2"],
          x1: "8.116",
          x2: "8.116",
          y1: "4.02",
          y2: "4.194",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_57, 8, _hoisted_54),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id3"],
          x1: "5.478",
          x2: "27.021",
          y1: "20.777",
          y2: "20.777",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_61, 8, _hoisted_58),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id4"],
          x1: "6.083",
          x2: "13.791",
          y1: "29.721",
          y2: "17.855",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_65, 8, _hoisted_62),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id5"],
          x1: "27.656",
          x2: "26.917",
          y1: "24.076",
          y2: "24.076",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_69, 8, _hoisted_66),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id6"],
          x1: "20.226",
          x2: "19.077",
          y1: "9.005",
          y2: "10.18",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_73, 8, _hoisted_70),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id7"],
          x1: "4.499",
          x2: "5.285",
          y1: "26.385",
          y2: "26.385",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_77, 8, _hoisted_74),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id8"],
          x1: "11.595",
          x2: "11.595",
          y1: "16.625",
          y2: "29.159",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_81, 8, _hoisted_78),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714id9"],
          x1: "18.623",
          x2: "24.951",
          y1: "22.308",
          y2: "16",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_85, 8, _hoisted_82),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714ida"],
          x1: "21.555",
          x2: "21.555",
          y1: "22.232",
          y2: "21.078",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_89, 8, _hoisted_86),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idb"],
          x1: "18.623",
          x2: "19.801",
          y1: "20.374",
          y2: "20.374",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_93, 8, _hoisted_90),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idc"],
          x1: "19.51",
          x2: "20.299",
          y1: "14.974",
          y2: "17.341",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_97, 8, _hoisted_94),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idd"],
          x1: "8.514",
          x2: "16.257",
          y1: "23.468",
          y2: "23.423",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_101, 8, _hoisted_98),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714ide"],
          x1: "16.117",
          x2: "16.117",
          y1: "2.941",
          y2: "17.91",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_105, 8, _hoisted_102),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idf"],
          x1: "29.313",
          x2: "1.438",
          y1: "29.932",
          y2: "29.932",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_109, 8, _hoisted_106),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idg"],
          x1: "16.117",
          x2: "16.117",
          y1: "30.468",
          y2: "28.921",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_113, 8, _hoisted_110),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idh"],
          x1: "7.823",
          x2: "16.856",
          y1: "27.91",
          y2: "27.91",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_117, 8, _hoisted_114),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idi"],
          x1: "7.401",
          x2: "8.551",
          y1: "27.91",
          y2: "27.91",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_121, 8, _hoisted_118),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idj"],
          x1: "17.208",
          x2: "15.696",
          y1: "27.469",
          y2: "28.409",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_125, 8, _hoisted_122),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idk"],
          x1: "15.946",
          x2: "29.65",
          y1: "3.702",
          y2: "17.81",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_129, 8, _hoisted_126),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["f714idl"],
          x1: "16.731",
          x2: "3.027",
          y1: "3.702",
          y2: "17.81",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_133, 8, _hoisted_130),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idm"],
          width: "7.943",
          height: "13.534",
          x: "7.623",
          y: "16.125",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_138, 8, _hoisted_134),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idn"],
          width: "6.364",
          height: "6.364",
          x: "18.123",
          y: "16",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_148, 8, _hoisted_139),
        createElementVNode("filter", {
          id: _ctx.idMap["f714ido"],
          width: "8.193",
          height: "11.882",
          x: "8.314",
          y: "16.016",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_164, 8, _hoisted_149),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idp"],
          width: "1.415",
          height: "1.415",
          x: "13.61",
          y: "21.008",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_169, 8, _hoisted_165),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idq"],
          width: "1.326",
          height: "1.126",
          x: "13.799",
          y: "21.063",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_185, 8, _hoisted_170),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idr"],
          width: "9.642",
          height: "2.132",
          x: "6.858",
          y: "26.778",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_190, 8, _hoisted_186),
        createElementVNode("filter", {
          id: _ctx.idMap["f714ids"],
          width: "28.438",
          height: "2.022",
          x: "2.148",
          y: "27.91",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_200, 8, _hoisted_191),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idt"],
          width: "14.276",
          height: "14.08",
          x: "15.588",
          y: "3.147",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_205, 8, _hoisted_201),
        createElementVNode("filter", {
          id: _ctx.idMap["f714idu"],
          width: "14.276",
          height: "14.08",
          x: "2.812",
          y: "3.147",
          "color-interpolation-filters": "sRGB",
          filterUnits: "userSpaceOnUse"
        }, _hoisted_210, 8, _hoisted_206),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714idv"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(0 4.73002 -2.5818 0 9.593 4.674)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_214, 8, _hoisted_211),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714idw"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-2.80503 0 0 -.54843 10.615 4.27)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_218, 8, _hoisted_215),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714idx"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-1.84918 -3.3631 4.22093 -2.32086 20.564 28.38)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_222, 8, _hoisted_219),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714idy"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(0 4.71709 -1.06597 0 27.928 14.916)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_226, 8, _hoisted_223),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714idz"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "rotate(97.326 7.63 8.423) scale(3.60529 6.72868)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_230, 8, _hoisted_227),
        createElementVNode("radialGradient", {
          id: _ctx.idMap["f714id10"],
          cx: "0",
          cy: "0",
          r: "1",
          gradientTransform: "matrix(-2.81571 1.8183 -2.98155 -4.61708 30.086 27.619)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_234, 8, _hoisted_231)
      ])
    ])
  ]);
}
const __unplugin_components_12 = { name: "fluent-emoji-house", render: render$5, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "f714idv": "uicons-" + __randId(), "f714id0": "uicons-" + __randId(), "f714id1": "uicons-" + __randId(), "f714id2": "uicons-" + __randId(), "f714idw": "uicons-" + __randId(), "f714id3": "uicons-" + __randId(), "f714id4": "uicons-" + __randId(), "f714idx": "uicons-" + __randId(), "f714id5": "uicons-" + __randId(), "f714idy": "uicons-" + __randId(), "f714id6": "uicons-" + __randId(), "f714id7": "uicons-" + __randId(), "f714idm": "uicons-" + __randId(), "f714id8": "uicons-" + __randId(), "f714idn": "uicons-" + __randId(), "f714id9": "uicons-" + __randId(), "f714ida": "uicons-" + __randId(), "f714idb": "uicons-" + __randId(), "f714idc": "uicons-" + __randId(), "f714ido": "uicons-" + __randId(), "f714idd": "uicons-" + __randId(), "f714idp": "uicons-" + __randId(), "f714idq": "uicons-" + __randId(), "f714ide": "uicons-" + __randId(), "f714idz": "uicons-" + __randId(), "f714idr": "uicons-" + __randId(), "f714ids": "uicons-" + __randId(), "f714idf": "uicons-" + __randId(), "f714idg": "uicons-" + __randId(), "f714id10": "uicons-" + __randId(), "f714idh": "uicons-" + __randId(), "f714idi": "uicons-" + __randId(), "f714idj": "uicons-" + __randId(), "f714idt": "uicons-" + __randId(), "f714idk": "uicons-" + __randId(), "f714idu": "uicons-" + __randId(), "f714idl": "uicons-" + __randId() };
  return { idMap };
} };
const elMenuItem = "";
const elMenu = "";
const elAside = "";
const _hoisted_1$3 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("g", { fill: "#333" }, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-opacity": ".6",
    d: "M137.176 195.927c0-32.812 26.6-59.412 59.412-59.412S256 163.115 256 195.927s-26.6 59.412-59.412 59.412s-59.412-26.6-59.412-59.412Z"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    "fill-opacity": ".3",
    d: "M137.176 59.412C137.176 26.6 163.776 0 196.588 0S256 26.6 256 59.412v53.471a5.941 5.941 0 0 1-5.941 5.941H143.117a5.941 5.941 0 0 1-5.941-5.94V59.411Z"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M118.824 195.927c0 32.812-26.6 59.412-59.412 59.412S0 228.74 0 195.927v-53.471a5.94 5.94 0 0 1 5.941-5.941h106.942c3.28 0 5.941 2.66 5.941 5.941v53.47Z" })
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_8 = { name: "logos-unocss", render: render$4 };
const _hoisted_1$2 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#3178C6",
  d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$2);
}
const __unplugin_components_7 = { name: "logos-typescript-icon", render: render$3 };
const _hoisted_1$1 = {
  viewBox: "0 0 256 221",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41B883",
  d: "M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41B883",
  d: "m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#35495E",
  d: "M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5$1);
}
const __unplugin_components_6 = { name: "logos-vue", render: render$2 };
const _hoisted_1 = {
  viewBox: "0 0 256 257",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#41D1FF"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BD34FE"
}, null, -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = ["id"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEA83"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "8.333%",
  "stop-color": "#FFDD35"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFA800"
}, null, -1);
const _hoisted_10 = [
  _hoisted_7,
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = ["fill"];
const _hoisted_12 = ["fill"];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["logosVitejs0"],
        x1: "-.828%",
        x2: "57.636%",
        y1: "7.652%",
        y2: "78.411%"
      }, _hoisted_5, 8, _hoisted_2),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["logosVitejs1"],
        x1: "43.376%",
        x2: "50.316%",
        y1: "2.242%",
        y2: "89.03%"
      }, _hoisted_10, 8, _hoisted_6)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["logosVitejs0"] + ")",
      d: "M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
    }, null, 8, _hoisted_11),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["logosVitejs1"] + ")",
      d: "M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
    }, null, 8, _hoisted_12)
  ]);
}
const __unplugin_components_5 = { name: "logos-vitejs", render: render$1, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosVitejs0": "uicons-" + __randId(), "logosVitejs1": "uicons-" + __randId() };
  return { idMap };
} };
const elIcon = "";
const elSpace = "";
const elHeader = "";
const elContainer = "";
const logoUrl = "/assets/static/logo.bebe2e90.svg";
const key = Symbol();
function usePageContext() {
  const pageContext = inject(key);
  if (!pageContext)
    throw new Error("setPageContext() not called in parent");
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    const pageContext = usePageContext();
    const activeLink = ref(pageContext.urlPathname);
    const goto = (index) => {
      index.startsWith("/") && window.location.pathname !== index && window.location.replace(index);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_header = ElHeader;
      const _component_el_col = ElCol;
      const _component_el_space = ElSpace;
      const _component_el_icon = ElIcon;
      const _component_i_logos_vitejs = __unplugin_components_5;
      const _component_i_logos_vue = __unplugin_components_6;
      const _component_i_logos_typescript_icon = __unplugin_components_7;
      const _component_i_logos_unocss = __unplugin_components_8;
      const _component_el_aside = ElAside;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_i_fluent_emoji_house = __unplugin_components_12;
      const _component_i_fluent_emoji_information = __unplugin_components_13;
      const _component_i_fluent_emoji_beaming_face_with_smiling_eyes = __unplugin_components_14;
      const _component_el_sub_menu = ElSubMenu;
      const _component_i_fluent_emoji_globe_showing_americas = __unplugin_components_16;
      const _component_el_menu_item_group = ElMenuItemGroup;
      const _component_el_main = ElMain;
      _push(ssrRenderComponent(_component_el_container, mergeProps({ "h-screen": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_header, { class: "header" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_space, { spacer: "·" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", logoUrl)} h-12 w-12 alt="logo" data-v-e6a35417${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_el_icon, { size: "50" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_i_logos_vitejs, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_i_logos_vitejs)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_icon, { size: "50" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_i_logos_vue, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_i_logos_vue)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_icon, { size: "50" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_i_logos_typescript_icon, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_i_logos_typescript_icon)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_icon, { size: "50" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_i_logos_unocss, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_i_logos_unocss)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("img", {
                                  src: logoUrl,
                                  "h-12": "",
                                  "w-12": "",
                                  alt: "logo"
                                }),
                                createVNode(_component_el_icon, { size: "50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_logos_vitejs)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_icon, { size: "50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_logos_vue)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_icon, { size: "50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_logos_typescript_icon)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_icon, { size: "50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_logos_unocss)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_space, { spacer: "·" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: logoUrl,
                                "h-12": "",
                                "w-12": "",
                                alt: "logo"
                              }),
                              createVNode(_component_el_icon, { size: "50" }, {
                                default: withCtx(() => [
                                  createVNode(_component_i_logos_vitejs)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_icon, { size: "50" }, {
                                default: withCtx(() => [
                                  createVNode(_component_i_logos_vue)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_icon, { size: "50" }, {
                                default: withCtx(() => [
                                  createVNode(_component_i_logos_typescript_icon)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_icon, { size: "50" }, {
                                default: withCtx(() => [
                                  createVNode(_component_i_logos_unocss)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_space, { spacer: "·" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: logoUrl,
                              "h-12": "",
                              "w-12": "",
                              alt: "logo"
                            }),
                            createVNode(_component_el_icon, { size: "50" }, {
                              default: withCtx(() => [
                                createVNode(_component_i_logos_vitejs)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_icon, { size: "50" }, {
                              default: withCtx(() => [
                                createVNode(_component_i_logos_vue)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_icon, { size: "50" }, {
                              default: withCtx(() => [
                                createVNode(_component_i_logos_typescript_icon)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_icon, { size: "50" }, {
                              default: withCtx(() => [
                                createVNode(_component_i_logos_unocss)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_aside, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_menu, {
                          "default-active": activeLink.value,
                          onSelect: goto,
                          h: "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_i_fluent_emoji_house, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_i_fluent_emoji_house)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-e6a35417${_scopeId5}>Home</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_i_fluent_emoji_house)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "Home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/system-info" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_i_fluent_emoji_information, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_i_fluent_emoji_information)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-e6a35417${_scopeId5}>System Info</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_i_fluent_emoji_information)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "System Info")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "/about" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_i_fluent_emoji_beaming_face_with_smiling_eyes, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-e6a35417${_scopeId5}>About</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "About")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_sub_menu, { index: "4" }, {
                                title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_i_fluent_emoji_globe_showing_americas, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-e6a35417${_scopeId5}>Navigator Other</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "Navigator Other")
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, { title: "Group One" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`item one`);
                                              } else {
                                                return [
                                                  createTextVNode("item one")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`item two`);
                                              } else {
                                                return [
                                                  createTextVNode("item two")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("item one")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_el_menu_item, { index: "1-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("item two")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_menu_item_group, { title: "Group Two" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`item three`);
                                              } else {
                                                return [
                                                  createTextVNode("item three")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode("item three")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_sub_menu, { index: "1-4" }, {
                                      title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`item four`);
                                        } else {
                                          return [
                                            createTextVNode("item four")
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_el_menu_item, { index: "1-4-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`item one`);
                                              } else {
                                                return [
                                                  createTextVNode("item one")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("item one")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("item one")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_el_menu_item, { index: "1-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("item two")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode("item three")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                        title: withCtx(() => [
                                          createTextVNode("item four")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("item one")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "/" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_fluent_emoji_house)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, "Home")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/system-info" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_fluent_emoji_information)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, "System Info")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "/about" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, "About")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "4" }, {
                                  title: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, "Navigator Other")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("item one")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_menu_item, { index: "1-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("item two")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode("item three")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                      title: withCtx(() => [
                                        createTextVNode("item four")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("item one")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_menu, {
                            "default-active": activeLink.value,
                            onSelect: goto,
                            h: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "/" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_i_fluent_emoji_house)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, "Home")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/system-info" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_i_fluent_emoji_information)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, "System Info")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "/about" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, "About")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "4" }, {
                                title: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, "Navigator Other")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("item one")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_menu_item, { index: "1-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("item two")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode("item three")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                    title: withCtx(() => [
                                      createTextVNode("item four")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("item one")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["default-active"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_main, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_aside, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_menu, {
                          "default-active": activeLink.value,
                          onSelect: goto,
                          h: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "/" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_fluent_emoji_house)
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "Home")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/system-info" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_fluent_emoji_information)
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "System Info")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "/about" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "About")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_sub_menu, { index: "4" }, {
                              title: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "Navigator Other")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("item one")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_menu_item, { index: "1-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("item two")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode("item three")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                  title: withCtx(() => [
                                    createTextVNode("item four")
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("item one")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["default-active"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_main, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_header, { class: "header" }, {
                default: withCtx(() => [
                  createVNode(_component_el_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_space, { spacer: "·" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: logoUrl,
                            "h-12": "",
                            "w-12": "",
                            alt: "logo"
                          }),
                          createVNode(_component_el_icon, { size: "50" }, {
                            default: withCtx(() => [
                              createVNode(_component_i_logos_vitejs)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_icon, { size: "50" }, {
                            default: withCtx(() => [
                              createVNode(_component_i_logos_vue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_icon, { size: "50" }, {
                            default: withCtx(() => [
                              createVNode(_component_i_logos_typescript_icon)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_icon, { size: "50" }, {
                            default: withCtx(() => [
                              createVNode(_component_i_logos_unocss)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_container, null, {
                default: withCtx(() => [
                  createVNode(_component_el_aside, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_menu, {
                        "default-active": activeLink.value,
                        onSelect: goto,
                        h: "100%"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "/" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_i_fluent_emoji_house)
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "Home")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/system-info" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_i_fluent_emoji_information)
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "System Info")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "/about" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_i_fluent_emoji_beaming_face_with_smiling_eyes)
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "About")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_sub_menu, { index: "4" }, {
                            title: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_i_fluent_emoji_globe_showing_americas)
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "Navigator Other")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("item one")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, { index: "1-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("item two")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode("item three")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_sub_menu, { index: "1-4" }, {
                                title: withCtx(() => [
                                  createTextVNode("item four")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("item one")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["default-active"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_main, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const PageShell_vue_vue_type_style_index_0_lang = "";
const PageShell_vue_vue_type_style_index_1_scoped_e6a35417_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6a35417"]]);
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const __uno = "";
const cssVars = "";
useDark();
function createApp(Page, pageProps, pageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          }
        }
      );
    }
  });
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  app.use(ElementPlus);
  app.component("ClientOnly", ClientOnly);
  return app;
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);
  const appHtml = await renderToString(app);
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <link rel="icon" href="', '" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <meta name="description" content="', '" />\n        <title>', `</title>
        <script>
          (function () {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
            if (setting === 'dark' || (prefersDark && setting !== 'light'))
              document.documentElement.classList.toggle('dark', true)
          })()
        <\/script>
      </head>
      <body>
        <div id="app">`, "</div>\n      </body>\n    </html>"])), logoUrl, desc, title, dangerouslySkipEscape(appHtml));
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
async function renderToString(app) {
  let err;
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString$1(app);
  if (err)
    throw err;
  return appHtml;
}
export {
  passToClient,
  render
};
