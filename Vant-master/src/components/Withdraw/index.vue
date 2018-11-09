<template>
    <div class="withdraw">
        <div class="withdraw-wrap">
            <van-cell-group>
                <van-cell :title="selected" icon="idcard" is-link @click="ShowPopup" />
                <van-cell title="可提现金额" value="100" />
                <van-field v-model="phone" label="想提现金额" placeholder="请输入提现金额" />
            </van-cell-group>
            <van-popup v-model="show" position="bottom" :overlay="false">
                <van-picker :columns="columns" @change="onChange" @confirm="onConfirm" @cancel="onCancel" />
            </van-popup>
            <div class="button-wrap">
                <van-button size="large" type="danger">提现</van-button>
            </div>
        </div>
    </div>
</template>



<script>
    import {
        Cell,
        CellGroup,
        Field,
        Popup,
        Picker,
        Button
    } from 'vant';
    export default {
        components: {
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            [Popup.name]: Popup,
            [Picker.name]: Picker,
            [Button.name]: Button,
        },
        data() {
            return {
                selected: "请选择",
                show: false,
                columns: ['招商银行', '农业银行', '中国银行']
            }
        },
        methods: {
            ShowPopup: function() {
                this.show = !this.show
            },
            onChange(picker, value, index) {
                this.selected = value
                this.show = false
            },
            onCancel() {
                this.show = false
            },
            onConfirm() {
                this.show = false
            }
        }
    }
</script>

<style lang="scss">
    .withdraw {
        &-wrap {
            width: 90%;
            margin: 20px auto;
            background: #fff;
            .button-wrap {
                width: 90%;
                margin: 0 auto;
                .van-button {
                    margin: 20px 0;
                    border-radius: 5px;
                }
            }
        }
    }
</style>