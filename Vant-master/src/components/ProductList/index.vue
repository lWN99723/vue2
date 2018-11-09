<template>
    <div class="product-list">
        <div class="product-wrap">
            <div class="product" @click="Jump()">
                <img src="http://pheasc4nt.bkt.clouddn.com/cbnt9-pfxj5.png" alt="">
                <div class="product-info">
                    <div class="product-title">
                        小米8青春版
                    </div>
                    <p class="product-description">
                        潮流镜面渐变色，自拍旗舰
                    </p>
                    <div class="product-price">
                        ￥1399起
                    </div>
                </div>
            </div>
            <div class="product" @click="Jump()">
                <img src="http://pheasc4nt.bkt.clouddn.com/cbms7-ez5jc.png" alt="">
                <div class="product-info">
                    <div class="product-title">
                        小米8青春版
                    </div>
                    <p class="product-description">
                        潮流镜面渐变色，自拍旗舰
                    </p>
                    <div class="product-price">
                        ￥1399起
                    </div>
                </div>
            </div>
            <div class="product" @click="Jump()">
                <img src="http://pheasc4nt.bkt.clouddn.com/cbnt9-pfxj5.png" alt="">
                <div class="product-info">
                    <div class="product-title">
                        小米8青春版
                    </div>
                    <p class="product-description">
                        潮流镜面渐变色，自拍旗舰
                    </p>
                    <div class="product-price">
                        ￥1399起
                    </div>
                </div>
            </div>
            <div class="product" @click="Jump()">
                <img src="http://pheasc4nt.bkt.clouddn.com/cbms7-ez5jc.png" alt="">
                <div class="product-info">
                    <div class="product-title">
                        小米8青春版
                    </div>
                    <p class="product-description">
                        潮流镜面渐变色，自拍旗舰
                    </p>
                    <div class="product-price">
                        ￥1399起
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'prodcut-list',
        methods: {
            Jump() {
                this.$router.push('/goods')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product-list {
        padding-bottom: 100px;
        .product-wrap {
            background: #fff;
            display: flex;
            flex-wrap: wrap;
            .product {
               flex-basis: 50%;
                display: flex;
                flex-direction: column;
                .product-info {
                    padding: .2rem .27rem;
                    text-align: left;
                }
                img {
                    width: 100%;
                    height: auto;
                    /* width: 3.8rem;
                    height: 3.8rem; */
                }
                .product-title {
                    font-size: .28rem;
                    color: rgba(0, 0, 0, .87);
                }
                .product-description {
                    margin-top: .06rem;
                    font-size: .22rem;
                    line-height: .3rem;
                    color: rgba(0, 0, 0, .54);
                }
                .product-price {
                    font-size: .28rem;
                    color: #ea625b;
                    height: 1.5em;
                    line-height: 1.5em;
                }
            }
        }
    }
</style>
