import { ElRow, ElCol, ElCard, ElDescriptions, ElDescriptionsItem } from "element-plus/lib";
/* empty css                           *//* empty css                           *//* empty css                           */import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const elDescriptionsItem = "";
const elDescriptions = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  props: ["userInfo", "osInfo", "nodeInfo"],
  setup(__props) {
    function formatBytes(bytes, decimals = 2) {
      if (bytes === 0)
        return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_card = ElCard;
      const _component_el_descriptions = ElDescriptions;
      const _component_el_descriptions_item = ElDescriptionsItem;
      _push(`<!--[--><h1>System Information</h1>`);
      _push(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { header: "OS" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_descriptions, { column: 1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Hostname" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.osInfo.hostname)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.osInfo.hostname), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "CPU cores" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.osInfo.cpuCount)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.osInfo.cpuCount), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Total memory" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(formatBytes(__props.osInfo.totalMemory))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(formatBytes(__props.osInfo.totalMemory)), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Free memory" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(formatBytes(__props.osInfo.freeMemory))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(formatBytes(__props.osInfo.freeMemory)), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "OS type" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.osInfo.osType)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.osInfo.osType), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "OS platform" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.osInfo.osPlatform)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.osInfo.osPlatform), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "OS release" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.osInfo.osRelease)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.osInfo.osRelease), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_descriptions_item, { label: "Hostname" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.osInfo.hostname), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "CPU cores" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.osInfo.cpuCount), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "Total memory" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatBytes(__props.osInfo.totalMemory)), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "Free memory" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatBytes(__props.osInfo.freeMemory)), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "OS type" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.osInfo.osType), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "OS platform" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.osInfo.osPlatform), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "OS release" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.osInfo.osRelease), 1)
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
                          createVNode(_component_el_descriptions, { column: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_descriptions_item, { label: "Hostname" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.osInfo.hostname), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "CPU cores" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.osInfo.cpuCount), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "Total memory" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatBytes(__props.osInfo.totalMemory)), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "Free memory" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatBytes(__props.osInfo.freeMemory)), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "OS type" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.osInfo.osType), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "OS platform" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.osInfo.osPlatform), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "OS release" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.osInfo.osRelease), 1)
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
                    createVNode(_component_el_card, { header: "OS" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_descriptions, { column: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_descriptions_item, { label: "Hostname" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.osInfo.hostname), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "CPU cores" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.osInfo.cpuCount), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "Total memory" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatBytes(__props.osInfo.totalMemory)), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "Free memory" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatBytes(__props.osInfo.freeMemory)), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "OS type" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.osInfo.osType), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "OS platform" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.osInfo.osPlatform), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "OS release" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.osInfo.osRelease), 1)
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
            _push2(ssrRenderComponent(_component_el_col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { header: "User" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_descriptions, { column: 1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Username" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.userInfo.username)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.userInfo.username), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Home directory" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.userInfo.homedir)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.userInfo.homedir), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Shell" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.userInfo.shell)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.userInfo.shell), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_descriptions_item, { label: "Username" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.userInfo.username), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "Home directory" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.userInfo.homedir), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "Shell" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.userInfo.shell), 1)
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
                          createVNode(_component_el_descriptions, { column: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_descriptions_item, { label: "Username" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.userInfo.username), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "Home directory" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.userInfo.homedir), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "Shell" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.userInfo.shell), 1)
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
                    createVNode(_component_el_card, { header: "User" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_descriptions, { column: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_descriptions_item, { label: "Username" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.userInfo.username), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "Home directory" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.userInfo.homedir), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "Shell" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.userInfo.shell), 1)
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
            _push2(ssrRenderComponent(_component_el_col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { header: "Node" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_descriptions, { column: 1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Version" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.nodeInfo.version)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.nodeInfo.version), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_descriptions_item, { label: "Architecture" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(__props.nodeInfo.arch)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(__props.nodeInfo.arch), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_descriptions_item, { label: "Version" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.nodeInfo.version), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_descriptions_item, { label: "Architecture" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.nodeInfo.arch), 1)
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
                          createVNode(_component_el_descriptions, { column: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_descriptions_item, { label: "Version" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.nodeInfo.version), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_descriptions_item, { label: "Architecture" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.nodeInfo.arch), 1)
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
                    createVNode(_component_el_card, { header: "Node" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_descriptions, { column: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_descriptions_item, { label: "Version" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.nodeInfo.version), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_descriptions_item, { label: "Architecture" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.nodeInfo.arch), 1)
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
          } else {
            return [
              createVNode(_component_el_col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { header: "OS" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_descriptions, { column: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_descriptions_item, { label: "Hostname" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.osInfo.hostname), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "CPU cores" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.osInfo.cpuCount), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "Total memory" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatBytes(__props.osInfo.totalMemory)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "Free memory" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatBytes(__props.osInfo.freeMemory)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "OS type" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.osInfo.osType), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "OS platform" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.osInfo.osPlatform), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "OS release" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.osInfo.osRelease), 1)
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
              createVNode(_component_el_col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { header: "User" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_descriptions, { column: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_descriptions_item, { label: "Username" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.userInfo.username), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "Home directory" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.userInfo.homedir), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "Shell" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.userInfo.shell), 1)
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
              createVNode(_component_el_col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { header: "Node" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_descriptions, { column: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_descriptions_item, { label: "Version" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.nodeInfo.version), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_descriptions_item, { label: "Architecture" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.nodeInfo.arch), 1)
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/system-info/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
