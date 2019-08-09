<template>
  <div
    class="page-scroll"
    :class="full && 'page-scroll--full'"
    ref="pageScroll"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @scroll="scrollBind($refs.pageScroll, $refs.pageScrollContent)"
  >
    <div class="page-scroll__content" ref="pageScrollContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'scroller',
    props: {
      // height: 100%
      full          : {
        type   : Boolean,
        default: false
      },
      // 触发加载事件的距离
      pullUpOffset  : {
        type   : Number,
        default: 50
      },
      // 是否处于上拉加载中
      pullUpLoad    : {
        type   : Boolean,
        default: false
      },
      // 上拉加载结束
      // 将不再触发上拉加载事件
      pullUpFinished: {
        type   : Boolean,
        default: false
      },
      // touchStart是否冒泡
      touchStartStop: {
        type   : Boolean,
        default: false
      },
      // touchMoveStop是否冒泡
      touchMoveStop : {
        type   : Boolean,
        default: false
      },
      // scrollStop是否冒泡
      scrollStop    : {
        type   : Boolean,
        default: false
      }
    },
    data() {
      return {
        // 触摸X起点
        touchPageXStart: null,
        // 触摸Y起点
        touchPageYStart: null,
        // 触摸时记录scrollTop距离
        viewTopStart   : null
      }
    },
    methods: {
      // 触摸
      touchStart(event) {
        // !this.touchStartStop && event.stopPropagation()
        this.touchPageXStart = event.pageX || event.changedTouches[0].pageX
        this.touchPageYStart = event.pageY || event.changedTouches[0].pageY
        this.viewTopStart = this.$refs.pageScroll.scrollTop
      },
      // 滑动
      touchMove(event) {
        let touchPageXMove = event.pageX || event.changedTouches[0].pageX
        let touchPageYMove = event.pageY || event.changedTouches[0].pageY
        let viewScrollTop = this.$refs.pageScroll.scrollTop
        let viewOffsetHeight = this.$refs.pageScroll.offsetHeight
        let contentScrollHeight = this.$refs.pageScrollContent.scrollHeight

        // 左右滑动
        if ((touchPageXMove >= this.touchPageXStart + 20 || touchPageXMove <= this.touchPageXStart - 20)
          && (touchPageYMove <= this.touchPageYStart + 50 && touchPageYMove >= this.touchPageYStart - 50)) {
          return false
        }

        !this.touchMoveStop && event.stopPropagation()

        // 上下边界
        if ((viewScrollTop <= 0 && touchPageYMove >= this.touchPageYStart)
          || contentScrollHeight <= viewOffsetHeight
          || (viewOffsetHeight + viewScrollTop >= contentScrollHeight &&
            touchPageYMove <= this.touchPageYStart)) {
          event.preventDefault()
        }
      },
      // 滚动
      scrollBind(view, scroll) {
        !this.scrollStop && event.stopPropagation()
        let viewHeight = view.offsetHeight
        let viewTop = view.scrollTop
        let scrollHeight = scroll.scrollHeight
        // 上拉加载
        if ((viewTop >= this.viewTopStart)
          && (scrollHeight - (viewHeight + viewTop) <= this.pullUpOffset)) {
          this.pullUpFinish()
        }
      },
      // 上拉加载
      pullUpFinish() {
        if (this.pullUpFinished || this.pullUpLoad) return
        this.$emit('pull-up-finish')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .page-scroll {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &--full {
      height: 100%;
    }
  }

  .page-scroll__content {
    &::before,
    &::after {
      content: '';
      display: table;
      width: 0;
      height: 0;
      visibility: hidden;
    }

    &::after {
      clear: both;
    }
  }
</style>
