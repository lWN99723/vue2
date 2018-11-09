<template>
    <div class="address-edit">
        <van-address-edit :area-list="areaList" 
        show-postal show-delete show-set-default
        show-search-result :search-result="searchResult"
        @save="onSave" @delete="onDelete" 
        @change-detail="onChangeDetail" />
    </div>
</template>



<script>
    import {
        AddressEdit,
        Toast,
        Area
    } from "vant";
    import areaList from '../../plugins/area'
    export default {
        name: "address-edit",
        components: {
            [AddressEdit.name]: AddressEdit,
            [Toast.name]: Toast,
            [Area.name]: Area,
        },
        data() {
            return {
                areaList,
                searchResult: []
            }
        },
        methods: {
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    };
</script>

<style lang="scss">
    .van-cell {
        text-align: left;
    }
</style>