<template>
    <div class="swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img  v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>



<script>
    import {
        Swipe,
        SwipeItem,
        Lazyload
    } from 'vant'
    export default {
        name: 'swiper',
        data() {
            return {
                images: [
                    'http://pheasc4nt.bkt.clouddn.com/cbuny-j9z68.png',
                    'http://pheasc4nt.bkt.clouddn.com/cbeq6-yofqv.png'
                ]
            }
        },
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Lazyload.name]: Lazyload,

        },
    }
</script>

<style lang="scss">
    .swiper {
        img {
            width: 100%;
            height: auto;
        }
        .van-swipe__indicators {
            bottom: 30px;
        }
        .van-swipe {
            overflow: hidden;
        }
    }
</style>