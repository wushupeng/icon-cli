<template>
  <el-skeleton style="--el-skeleton-circle-size: 100px">
    <template #template>
      <el-skeleton-item variant="circle" />
    </template>
  </el-skeleton>
  <br />
  <el-skeleton />
</template>
<script lang="ts" setup>
import { io, Socket } from "socket.io-client";
import { setInterval } from "timers/promises";

// please note that the types are reversed
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
import { ref } from "vue"
const socketIOClient = ref()
socketIOClient.value = io("ws://localhost:3000", {
  transports: ["websocket"]
});
socketIOClient.value.on("message", msg => {
  console.log(msg);
});
socketIOClient.value.on("connect", () => {
  const id = socketIOClient.value.id;
  console.log("socket.io->", id);
  socketIOClient.value.send({ target: "onurefresh", payload: "test" });
});
socketIOClient.value.on("disconnect", msg => {
  console.log("#disconnect", msg);
});

socketIOClient.value.on("disconnecting", () => {
  console.log("#disconnecting");
});

socketIOClient.value.on("error", () => {
  console.log("#error");
});
setTimeout(() => {
  console.log(123)
  socketIOClient.value.send("gogogo")
}, 2000)
</script>