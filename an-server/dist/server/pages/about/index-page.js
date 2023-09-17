import { ElSkeleton, ElSkeletonItem } from "element-plus/lib";
/* empty css                           *//* empty css                           */import { defineComponent, ref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { io } from "socket.io-client";
const elSkeletonItem = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    io();
    const socketIOClient = ref();
    socketIOClient.value = io("ws://localhost:3000", {
      transports: ["websocket"]
    });
    socketIOClient.value.on("message", (msg) => {
      console.log(msg);
    });
    socketIOClient.value.on("connect", () => {
      const id = socketIOClient.value.id;
      console.log("socket.io->", id);
      socketIOClient.value.send({ target: "onurefresh", payload: "test" });
    });
    socketIOClient.value.on("disconnect", (msg) => {
      console.log("#disconnect", msg);
    });
    socketIOClient.value.on("disconnecting", () => {
      console.log("#disconnecting");
    });
    socketIOClient.value.on("error", () => {
      console.log("#error");
    });
    return (_ctx, _push, _parent, _attrs) => {
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
