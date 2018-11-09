<template>
  <div class="wrap">
    <Header title="首页"/>
    <div class="content">
        <AddressEdit />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import AddressEdit from '@/components/Address/addressEdit.vue'
  export default {
    name: 'address-edit-view',
    components: {
      Header,
      AddressEdit,
    },
  }
</script>