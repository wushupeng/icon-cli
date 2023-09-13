import { ElSkeleton, ElSkeletonItem } from "element-plus/lib";
/* empty css                           *//* empty css                           */import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../../chunks/chunk-cc2b3d55.js";
const elSkeletonItem = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_skeleton = ElSkeleton;
  const _component_el_skeleton_item = ElSkeletonItem;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_el_skeleton, { style: { "--el-skeleton-circle-size": "100px" } }, {
    template: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_skeleton_item, { variant: "circle" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_skeleton_item, { variant: "circle" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_el_skeleton, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index_page as default
};
