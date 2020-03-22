<template>
  <div class="f-popover" ref="popover">
    <transition name="fade">
      <div
              class="content-wrapper"
              ref="contentWrapper"
              v-show="showPopover"
              :class="[`position-${position}`]"
              :style="{ width: `${width}px` }"
      >
        <div class="title" v-if="title">{{ title }}</div>
        <div class="content">{{ content }}<slot name="content"></slot></div>
      </div>
    </transition>
    <span class="trigger" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "f-popover",
    data() {
      return {
        showPopover: false
      };
    },
    props: {
      visible: {
        type: Boolean
      },
      position: {
        type: String,
        default: "top",
        validator(val) {
          return ["top", "bottom", "left", "right"].indexOf(val) >= 0;
        }
      },
      trigger: {
        type: String,
        default: "click",
        validator(val) {
          return ["click", "hover"].indexOf(val) >= 0;
        }
      },
      title: {
        type: String
      },
      content: {
        type: String
      },
      width: {
        type: String,
        default: "150"
      }
    },
    watch: {
      showPopover(value) {
        if (value) {
          this.$emit("show");
        } else {
          this.$emit("hide");
        }
      },
      visible: {
        handler(value) {
          this.showPopover = value;
        },
        immediate: true
      }
    },
    mounted() {
      let popover = this.$refs.popover;
      if (this.trigger === "click") {
        popover.addEventListener("click", this.onClick);
      } else {
        popover.addEventListener("mouseenter", this.open);
        popover.addEventListener("mouseleave", this.close);
      }
    },
    beforeDestroy() {
      //在beforeDestroy时，vm实例还可用
      let popover = this.$refs.popover;
      if (this.trigger === "click") {
        popover.removeEventListener("click", this.onClick);
      } else {
        popover.removeEventListener("mouseenter", this.open);
        popover.removeEventListener("mouseleave", this.close);
      }
    },
    methods: {
      eventHandler(e) {
        if (
            this.$refs.contentWrapper &&
            this.$refs.contentWrapper.contains(e.target)
        ) {
          return;
        }
        // 当点击按钮时直接退出，应该由onCLick方法去关闭popover，不应该由document来关闭
        if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
          return;
        }
        this.close();
      },
      locateContent() {
        let contentWrapper = this.$refs.contentWrapper;
        document.body.append(contentWrapper);
        let triggerWrapper = this.$refs.triggerWrapper;
        let {
          top,
          left,
          bottom,
          right,
          height
        } = triggerWrapper.getBoundingClientRect(); //获取元素相对于窗口的位置信息
        let differenceHeight =
            contentWrapper.getBoundingClientRect().height - height;

        let contentPosition = {
          top: {
            left: left + window.pageXOffset,
            top: top + window.pageYOffset
          },
          bottom: {
            left: left + window.pageXOffset,
            top: bottom + window.pageYOffset
          },
          left: {
            left: left + window.pageXOffset,
            top: top + window.pageYOffset - differenceHeight / 2
          },
          right: {
            left: right + window.pageXOffset,
            top: top + window.pageYOffset - differenceHeight / 2
          }
        };
        contentWrapper.style.left = `${contentPosition[this.position].left}px`;
        contentWrapper.style.top = `${contentPosition[this.position].top}px`;
      },
      open() {
        this.showPopover = true;
        this.$emit("update:visible", true);
        setTimeout(() => {
          this.locateContent();
          document.addEventListener("click", this.eventHandler);
        }, 0);
        // 下面出了一个问题，为什么document的监听不是在下一个事件循环中
        // this.$nextTick( () => {
        //   this.locateContent()
        //   document.addEventListener('click',this.eventHandler)
        // })
      },
      close() {
        this.showPopover = false;
        this.$emit("update:visible", false);
        document.removeEventListener("click", this.eventHandler);
      },
      onClick(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.showPopover === true) {
            this.close();
          } else {
            this.open();
          }
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  $border-radius: 4px;
  $border-color: #333;
  $font-size: 14px;
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-to {
    opacity: 100%;
  }
  .f-popover {
    display: inline-block;
    position: relative;
    .trigger {
      display: inline-block;
    }
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    /*filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));*/
    background-color: white;
    word-break: break-all;

    .title {
      border-bottom: 1px solid rgb(232, 232, 232);
      padding: 0.5em 1em;
      font-size: $font-size;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      max-width: 20em;
    }
    .content {
      padding: 0.5em 1em;
      font-size: $font-size;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      max-width: 20em;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,
      &::after {
        border-top-color: black;
        left: 10%;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before,
      &::after {
        left: 20%;
        bottom: 100%;
        border-bottom-color: black;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,
      &::after {
        top: calc(50% - 5px);
        left: 100%;
        border-left-color: black;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before,
      &::after {
        top: calc(50% - 5px);
        right: 100%;
        border-right-color: black;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
</style>
