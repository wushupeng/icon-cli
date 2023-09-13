import { ElRow, ElCol, ElCard, ElSkeleton } from "element-plus/lib";
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../../chunks/chunk-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_row = ElRow;
  const _component_el_col = ElCol;
  const _component_el_card = ElCard;
  const _component_el_skeleton = ElSkeleton;
  _push(`<!--[--><h1>Welcome</h1>`);
  _push(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(5, (i) => {
          _push2(ssrRenderComponent(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 8,
            xl: 6,
            "m-b-5": "",
            key: i
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_card, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_el_skeleton, { rows: 5 }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_el_skeleton, { rows: 5 })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_skeleton, { rows: 5 })
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
            return createVNode(_component_el_col, {
              xs: 24,
              sm: 12,
              md: 12,
              lg: 8,
              xl: 6,
              "m-b-5": "",
              key: i
            }, {
              default: withCtx(() => [
                createVNode(_component_el_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_skeleton, { rows: 5 })
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index_page as default
};
